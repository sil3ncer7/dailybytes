# CLAUDE.md

Daily Bytes is Josh's micro-learning PWA: plain HTML/CSS/JS, no build step, hosted as static files.
See `README.md` for the file layout.

## Lesson content

Lessons are written by Claude in Claude Code sessions, on Josh's existing Claude plan, and
committed as built-in packs in `content/packs.js`. **Don't** set things up so that Josh needs an
Anthropic API key or paid API credits. The optional in-app API-key feature (`ai.js`) stays
optional.

When adding lessons:
- Append to an existing topic's `lessons` array, or add a new topic object. Ids look like
  `<topic>-<n>`. Never rename or reuse an existing id, because progress is tracked by id.
- Each lesson: `title`, 2–3 short `body` paragraphs, a one-sentence `takeaway`, and a `quiz` with
  3 options, `answer` as a 0-based index, and a short `why`.
- One idea per lesson, about 2–3 minutes of reading, plain language.
- Accuracy matters more than surprise. Leave out anything you aren't confident is true, and call
  out common myths as myths.
- Don't repeat a topic's existing lessons. Read the topic's titles first.
- Josh drives OTR and lives full-time in a converted 2003 Ford E450 ambulance-turned-RV, so
  practical road, rig and off-grid examples land well.

After editing, check that the file loads and is valid:
```
node -e 'global.window={};require("./content/packs.js");const s=new Set();for(const p of window.PACKS)for(const l of p.lessons){if(s.has(l.id))throw l.id;s.add(l.id);if(!(l.quiz.answer>=0&&l.quiz.answer<l.quiz.options.length))throw l.id}console.log(s.size,"lessons ok")'
```
Then bump `VERSION` in `sw.js` so installed copies refresh their offline cache.
