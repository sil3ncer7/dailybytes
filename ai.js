// Claude lesson generation. The SDK is vendored (bundled from @anthropic-ai/sdk@0.133.0 with
// esbuild, see README) and loaded lazily so the app boots fast and works offline.
// The API key is the user's own, kept in this device's localStorage. That's fine for a
// personal app, but never ship a shared key in a browser app like this.

const SDK_URL = "./vendor/anthropic-sdk-0.133.0.js";

const LESSON_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["title", "body", "takeaway", "quiz"],
  properties: {
    title: { type: "string" },
    body: { type: "array", items: { type: "string" } },
    takeaway: { type: "string" },
    quiz: {
      type: "object",
      additionalProperties: false,
      required: ["q", "options", "answer", "why"],
      properties: {
        q: { type: "string" },
        options: { type: "array", items: { type: "string" } },
        answer: { type: "integer" },
        why: { type: "string" },
      },
    },
  },
};

const SYSTEM = `You write micro-lessons for a learning app. Each lesson takes 2–3 minutes to read.

- One idea per lesson: a surprising or useful fact, explained clearly, that the reader can remember and repeat to someone else.
- body: 2–3 short paragraphs of plain language. No jargon without a quick explanation.
- takeaway: one sentence the reader should remember.
- quiz: one multiple-choice question that checks the core idea. Use 3 options, exactly one correct. "answer" is the 0-based index of the correct option. "why" briefly explains it.
- Be accurate. If a popular claim is a myth or disputed, say so instead of repeating it.`;

let clientPromise = null;
async function getClient(apiKey) {
  clientPromise ||= import(SDK_URL).then((m) => m.default);
  const Anthropic = await clientPromise;
  return new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
}

export async function generateLesson({ apiKey, model, topic, avoidTitles = [] }) {
  const client = await getClient(apiKey);
  const avoid = avoidTitles.length
    ? `\n\nAlready covered (pick something different): ${avoidTitles.slice(-40).join("; ")}`
    : "";

  // Opus/Sonnet can re-run a declined request on another model server-side; Haiku has no fallback.
  const fallback = model.startsWith("claude-haiku")
    ? {}
    : { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" };

  const response = await client.beta.messages.create({
    model,
    max_tokens: 4000,
    ...fallback,
    output_config: {
      effort: "low",
      format: { type: "json_schema", schema: LESSON_SCHEMA },
    },
    system: SYSTEM,
    messages: [{ role: "user", content: `Topic: ${topic}${avoid}` }],
  });

  if (response.stop_reason === "refusal") throw new Error("Claude declined this topic");
  if (response.stop_reason === "max_tokens") throw new Error("lesson was cut off");

  const text = response.content.filter((b) => b.type === "text").map((b) => b.text).join("");
  const lesson = JSON.parse(text);
  const q = lesson.quiz;
  if (!Array.isArray(q.options) || q.options.length < 2 || !(q.answer >= 0 && q.answer < q.options.length)) {
    throw new Error("malformed quiz");
  }
  return lesson;
}
