# ICT50220 · Intake 26.13 — Class Hub

The class website for Diploma of Information Technology, intake 26.13.
Cheat sheets, class notes, assignment briefs — all in one place.

**To open:** double-click `index.html`, or right-click it in VS Code → *Open with Live Server*.

---

## How each class works

Every class in the schedule is one entry in the `CLASSES` array in [`hub.js`](hub.js).

- **Past & current classes** show the full summary — focus, topics, links.
- **Future classes** show a title only. Everything else gets filled in after the class runs.
- **A class unlocks at midnight the day after it runs** — until then the tile is greyed out.

A future-class entry looks like this — just four fields:

```js
{ num: 15, date: '2026-08-03', subject: 's2', title: 'To be confirmed' },
```

---

## Updating a class after Zoom

At the end of each class, Zoom produces a meeting summary. Paste it into that class's entry:

1. Open [`hub.js`](hub.js) in VS Code.
2. Find the class by its `num:` (Class 15, Class 16 …).
3. Add `focus` and `topics` — copy the bullets straight from Zoom:

```js
{
  num: 15, date: '2026-08-03', subject: 's2',
  title: 'The real class title',
  focus: 'One sentence — what the class was about.',
  topics: [
    'First bullet from the Zoom summary',
    'Second bullet',
    'Third bullet',
  ],
},
```

4. Save. Refresh `index.html`. Done.

Leave `num`, `date`, and `subject` alone — those are set for the whole term.

---

## Where things live

| File / folder | What it is |
|---|---|
| `index.html` | The page itself — nav, hero, class grid |
| `hub.js` | Every class in the schedule (edit this to update lessons) |
| `style.css` | All the custom styling |
| `assets/cheatsheets/` | The cheat sheet library — one HTML file per topic |
| `assets/class-notes/` | Raw class notes |
| `assets/interactive/` | Class games and tools |

---

## Deploy

Merges to `main` publish automatically via Vercel. No build step — everything runs off the CDN.
