# Daily Bytes

A micro-learning web app you install on your phone. Pick a few topics, choose once or twice a
day, and each session gives you one short lesson (2–3 minutes) plus one quiz question.

- **Offline-first.** The built-in lesson packs (`content/packs.js`) work with no signal, and the
  service worker caches the whole app after the first visit.
- **Claude-generated lessons (optional).** Add your Anthropic API key in Settings, and Claude
  writes new lessons when a pack runs out (or for every lesson, if you prefer), plus lessons for
  any custom topic you add. Generated lessons are saved and can come back later as reviews.
- **Reminders through your calendar.** Settings → "Add reminders to calendar" downloads an `.ics`
  file with a daily recurring event for each session. A PWA can't reliably notify you at a set
  time without a push server, and a calendar alert can.
- **Streaks and stats**: day streak, total lessons learned, quiz accuracy.

All progress lives in the browser's `localStorage` on that device.

## Run it

No build step. Serve the folder over HTTP:

```
python3 -m http.server 8000
```

Then open http://localhost:8000. To install it on a phone, host it over HTTPS (GitHub Pages
works: Settings → Pages → deploy from `main` / root), open it in Safari or Chrome, then use
**Share → Add to Home Screen**.

## Files

| File | What it is |
|---|---|
| `index.html` | All views: setup, today, lesson, settings |
| `app.js` | State, scheduling, lesson picking, streaks, `.ics` export |
| `ai.js` | Claude lesson generation (structured JSON output) |
| `content/packs.js` | Built-in topics and lessons. Add more here. |
| `sw.js` | Offline cache. Bump `VERSION` when you ship changes. |
| `vendor/anthropic-sdk-0.133.0.js` | The Anthropic TypeScript SDK bundled for the browser |

### Adding a topic pack

Add an entry to `window.PACKS` in `content/packs.js` with a unique `id`, `name` and `emoji`, and a
`lessons` array. Lesson ids must be unique and must not change, because progress is tracked by id.

### Rebuilding the vendored SDK

```
npm i @anthropic-ai/sdk@<version> esbuild
echo 'export { default } from "@anthropic-ai/sdk";' > entry.js
npx esbuild entry.js --bundle --format=esm --platform=browser --minify \
  --outfile=vendor/anthropic-sdk-<version>.js
```

Then update `SDK_URL` in `ai.js` and the file list in `sw.js`.

## About the API key

The key is stored only in this device's browser storage and is sent directly to
`api.anthropic.com`. That's fine for a personal app. Don't deploy this with a shared key built in;
anyone who opens the page could read it.

## Ideas for later

- Spaced-repetition reviews: re-ask a past quiz question 1, 3 and 7 days later
- Real push notifications through a small push server (for example, a scheduled GitHub Action)
- Sync progress across devices
- "Explain more" button that asks Claude a follow-up about the current lesson
