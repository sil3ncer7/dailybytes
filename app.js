// Daily Bytes: all state lives in localStorage on this device.
import { generateLesson } from "./ai.js";

const STORE_KEY = "daily-bytes:v1";
const PACKS = window.PACKS;

const defaults = () => ({
  setupDone: false,
  topics: [],            // selected topic ids (pack ids or "custom:<name>")
  customTopics: [],      // names of user-added topics (always Claude-generated)
  sessionsPerDay: 1,
  times: ["08:00", "19:00"],
  seen: [],              // lesson ids already shown
  generated: {},         // topicId -> [lesson], Claude-written lessons kept for reuse
  days: {},              // "YYYY-MM-DD" -> { slots: [{ lesson, topicId, done, correct }], extras: n }
  topicCursor: 0,        // round-robin across selected topics
  apiKey: "",
  model: "claude-opus-5-5",
  aiMode: "fallback",    // fallback | always | off
});

let state = load();

function load() {
  try {
    return { ...defaults(), ...JSON.parse(localStorage.getItem(STORE_KEY) || "{}") };
  } catch {
    return defaults();
  }
}
function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch {}
}

// ---------- helpers ----------
const $ = (id) => document.getElementById(id);
const dayKey = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const minutesOf = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
const nowMinutes = () => { const d = new Date(); return d.getHours() * 60 + d.getMinutes(); };
const fmtTime = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return new Date(2000, 0, 1, h, m).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
};

function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => (t.hidden = true), 3000);
}

function allTopics() {
  return [
    ...PACKS.map((p) => ({ id: p.id, name: p.name, emoji: p.emoji })),
    ...state.customTopics.map((n) => ({ id: `custom:${n}`, name: n, emoji: "✨" })),
  ];
}
const topicName = (id) => allTopics().find((t) => t.id === id)?.name ?? id;
const aiAvailable = () => state.aiMode !== "off" && !!state.apiKey;

// ---------- router ----------
function show(view) {
  document.querySelectorAll(".view").forEach((v) => v.classList.toggle("active", v.dataset.view === view));
  document.querySelectorAll(".tabbar button").forEach((b) => b.classList.toggle("on", b.dataset.go === view));
  document.querySelector(".tabbar").hidden = view === "setup" || view === "lesson";
  if (view === "home") renderHome();
  if (view === "settings") renderSettings();
  window.scrollTo(0, 0);
}

// ---------- setup ----------
function renderSetup() {
  const chips = $("topicChips");
  chips.innerHTML = "";
  for (const t of allTopics()) {
    const b = document.createElement("button");
    b.className = "chip" + (state.topics.includes(t.id) ? " on" : "");
    b.textContent = `${t.emoji} ${t.name}`;
    b.onclick = () => {
      state.topics = state.topics.includes(t.id)
        ? state.topics.filter((x) => x !== t.id)
        : [...state.topics, t.id];
      b.classList.toggle("on");
    };
    chips.appendChild(b);
  }
  setFreq(state.sessionsPerDay);
  $("time0").value = state.times[0];
  $("time1").value = state.times[1];
}
function setFreq(n) {
  state.sessionsPerDay = n;
  document.querySelectorAll("#freqSeg button").forEach((b) => b.classList.toggle("on", +b.dataset.freq === n));
  $("time1Wrap").style.visibility = n === 2 ? "visible" : "hidden";
}
document.querySelectorAll("#freqSeg button").forEach((b) => (b.onclick = () => setFreq(+b.dataset.freq)));
$("saveSetup").onclick = () => {
  if (!state.topics.length) return toast("Pick at least one topic");
  state.times = [$("time0").value || "08:00", $("time1").value || "19:00"];
  if (state.sessionsPerDay === 2 && minutesOf(state.times[1]) <= minutesOf(state.times[0])) {
    return toast("Evening time should be after morning time");
  }
  state.setupDone = true;
  save();
  show("home");
};

// ---------- picking lessons ----------
function nextTopic() {
  const id = state.topics[state.topicCursor % state.topics.length];
  state.topicCursor = (state.topicCursor + 1) % state.topics.length;
  return id;
}

function unseenFrom(lessons) {
  return lessons.find((l) => !state.seen.includes(l.id));
}

async function pickLesson() {
  const topicId = nextTopic();
  const isCustom = topicId.startsWith("custom:");
  const pack = PACKS.find((p) => p.id === topicId);
  const packLessons = pack ? pack.lessons : [];
  const generated = state.generated[topicId] || [];

  const wantAI = aiAvailable() &&
    (isCustom || state.aiMode === "always" || (!unseenFrom(packLessons) && !unseenFrom(generated)));
  if (!wantAI) {
    const fresh = unseenFrom(packLessons) || unseenFrom(generated);
    if (fresh) return { topicId, lesson: fresh };
  }

  if (aiAvailable()) {
    try {
      const recentTitles = [...packLessons, ...generated].map((l) => l.title);
      const lesson = await generateLesson({
        apiKey: state.apiKey,
        model: state.model,
        topic: topicName(topicId),
        avoidTitles: recentTitles,
      });
      lesson.id = `${topicId}:gen-${Date.now()}`;
      state.generated[topicId] = [...generated, lesson];
      return { topicId, lesson };
    } catch (err) {
      console.error(err);
      toast(`Couldn't reach Claude (${err.message}). Using a saved lesson.`);
    }
  }

  // Everything seen (or AI failed): review the least recently seen lesson in this topic.
  const pool = [...packLessons, ...generated];
  if (!pool.length) {
    // A custom topic with no AI: fall back to any pack topic the user picked.
    const fallback = PACKS.find((p) => state.topics.includes(p.id)) || PACKS[0];
    return { topicId: fallback.id, lesson: oldestSeen(fallback.lessons) };
  }
  return { topicId, lesson: unseenFrom(pool) || oldestSeen(pool) };
}

function oldestSeen(lessons) {
  return [...lessons].sort((a, b) => state.seen.indexOf(a.id) - state.seen.indexOf(b.id))[0];
}

// ---------- home ----------
function today() {
  const k = dayKey();
  state.days[k] ||= { slots: [], extras: 0 };
  return state.days[k];
}

function renderHome() {
  const d = today();
  const hour = new Date().getHours();
  $("greeting").textContent = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  const wrap = $("slots");
  wrap.innerHTML = "";
  for (let i = 0; i < state.sessionsPerDay; i++) {
    const slot = d.slots[i];
    const ready = nowMinutes() >= minutesOf(state.times[i]);
    const el = document.createElement("div");
    el.className = "slot" + (slot?.done ? " done" : "");
    const label = state.sessionsPerDay === 1 ? "Today's byte" : i === 0 ? "Morning byte" : "Evening byte";
    const sub = slot?.done
      ? `✓ ${slot.lesson.title}`
      : ready ? "Ready now · about 2 min" : `Unlocks at ${fmtTime(state.times[i])}`;
    el.innerHTML = `<div><div class="label">${label}</div><div class="sub"></div></div>`;
    el.querySelector(".sub").textContent = sub;
    if (!slot?.done) {
      const b = document.createElement("button");
      b.textContent = ready ? "Start" : "Start early";
      if (!ready) b.className = "early";
      b.onclick = () => openSlot(i);
      el.appendChild(b);
    }
    wrap.appendChild(el);
  }
  renderStats();
}

function renderStats() {
  const doneDays = Object.entries(state.days)
    .filter(([, d]) => d.slots.some((s) => s?.done))
    .map(([k]) => k);
  const total = Object.values(state.days).reduce((n, d) => n + d.slots.filter((s) => s?.done).length, 0);
  const answered = Object.values(state.days).flatMap((d) => d.slots.filter((s) => s?.done));
  const right = answered.filter((s) => s.correct).length;

  // Streak: consecutive days ending today (or yesterday, if today isn't done yet).
  let streak = 0;
  const cursor = new Date();
  if (!doneDays.includes(dayKey(cursor))) cursor.setDate(cursor.getDate() - 1);
  while (doneDays.includes(dayKey(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  $("streak").textContent = `🔥 ${streak}`;
  $("stats").innerHTML = `
    <div class="stat"><b>${streak}</b><span>day streak</span></div>
    <div class="stat"><b>${total}</b><span>bytes learned</span></div>
    <div class="stat"><b>${answered.length ? Math.round((right / answered.length) * 100) : 0}%</b><span>quiz accuracy</span></div>`;
}

// ---------- lesson ----------
let current = null; // { day, index } index -1 = extra

async function openSlot(index) {
  const d = today();
  if (!d.slots[index]) {
    show("lesson");
    showLoading();
    const picked = await pickLesson();
    d.slots[index] = { ...picked, done: false, correct: false };
    save();
  }
  current = { slot: d.slots[index] };
  renderLesson();
}

$("extraBtn").onclick = async () => {
  show("lesson");
  showLoading();
  const picked = await pickLesson();
  today().extras++;
  save();
  current = { slot: { ...picked, done: false, correct: false }, extra: true };
  renderLesson();
};

function showLoading() {
  $("lessonTopic").textContent = "";
  $("lessonTitle").textContent = "";
  $("lessonBody").innerHTML = `<div class="spinner">Preparing your byte…</div>`;
  $("lessonTakeaway").textContent = "";
  $("quizQ").textContent = "";
  $("quizOptions").innerHTML = "";
  $("quizWhy").hidden = true;
  $("finishBtn").hidden = true;
}

function renderLesson() {
  show("lesson");
  const { lesson, topicId } = current.slot;
  $("lessonTopic").textContent = topicName(topicId);
  $("lessonTitle").textContent = lesson.title;
  const body = $("lessonBody");
  body.innerHTML = "";
  for (const para of lesson.body) {
    const p = document.createElement("p");
    p.textContent = para;
    body.appendChild(p);
  }
  $("lessonTakeaway").textContent = lesson.takeaway;
  $("quizQ").textContent = lesson.quiz.q;
  $("quizWhy").hidden = true;
  $("finishBtn").hidden = true;

  const opts = $("quizOptions");
  opts.innerHTML = "";
  lesson.quiz.options.forEach((text, i) => {
    const b = document.createElement("button");
    b.className = "opt";
    b.textContent = text;
    b.onclick = () => answer(i);
    opts.appendChild(b);
  });
}

function answer(i) {
  const { lesson } = current.slot;
  const buttons = [...$("quizOptions").children];
  buttons.forEach((b, j) => {
    b.disabled = true;
    if (j === lesson.quiz.answer) b.classList.add("right");
    else if (j === i) b.classList.add("wrong");
  });
  current.slot.correct = i === lesson.quiz.answer;
  const why = $("quizWhy");
  why.textContent = (current.slot.correct ? "Correct. " : "Not quite. ") + lesson.quiz.why;
  why.hidden = false;
  $("finishBtn").hidden = false;
}

$("finishBtn").onclick = () => {
  const s = current.slot;
  if (!current.extra) s.done = true;
  state.seen = [...state.seen.filter((id) => id !== s.lesson.id), s.lesson.id];
  save();
  toast(current.extra ? "Nice, bonus byte done" : "Byte complete 🎉");
  current = null;
  show("home");
};

// ---------- settings ----------
function renderSettings() {
  $("apiKey").value = state.apiKey;
  $("model").value = state.model;
  $("aiMode").value = state.aiMode;
}
$("editTopics").onclick = () => { renderSetup(); show("setup"); };
$("saveSettings").onclick = () => {
  state.apiKey = $("apiKey").value.trim();
  state.model = $("model").value;
  state.aiMode = $("aiMode").value;
  save();
  toast("Saved");
};
$("addCustom").onclick = () => {
  const name = $("customTopic").value.trim();
  if (!name) return;
  if (!state.apiKey) return toast("Custom topics need an API key, since Claude writes them");
  if (!state.customTopics.includes(name)) state.customTopics.push(name);
  const id = `custom:${name}`;
  if (!state.topics.includes(id)) state.topics.push(id);
  $("customTopic").value = "";
  save();
  toast(`Added "${name}"`);
};
$("resetBtn").onclick = () => {
  if (!confirm("Erase all progress and settings on this device?")) return;
  state = defaults();
  save();
  renderSetup();
  show("setup");
};

// Calendar reminders: a daily recurring event per session, with an alert at start time.
$("icsBtn").onclick = () => {
  const url = location.href.split("#")[0];
  const stamp = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const start = dayKey().replace(/-/g, "");
  const events = state.times.slice(0, state.sessionsPerDay).map((t, i) => {
    const hhmm = t.replace(":", "");
    const label = state.sessionsPerDay === 1 ? "Daily byte" : i === 0 ? "Morning byte" : "Evening byte";
    return [
      "BEGIN:VEVENT",
      `UID:daily-bytes-${i}@daily-bytes`,
      `DTSTAMP:${stamp}`,
      `DTSTART:${start}T${hhmm}00`,
      "DURATION:PT5M",
      "RRULE:FREQ=DAILY",
      `SUMMARY:${label} 🧠`,
      `DESCRIPTION:2-minute lesson: ${url}`,
      `URL:${url}`,
      "BEGIN:VALARM", "ACTION:DISPLAY", `DESCRIPTION:${label}`, "TRIGGER:PT0M", "END:VALARM",
      "END:VEVENT",
    ].join("\r\n");
  });
  const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Daily Bytes//EN", ...events, "END:VCALENDAR"].join("\r\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  a.download = "daily-bytes-reminders.ics";
  a.click();
};

// ---------- boot ----------
document.querySelectorAll(".tabbar button").forEach((b) => (b.onclick = () => show(b.dataset.go)));
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && document.querySelector('[data-view="home"].active')) renderHome();
});
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});

if (state.setupDone) show("home");
else { renderSetup(); show("setup"); }
