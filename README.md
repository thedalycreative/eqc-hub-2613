# ICT50220 · Intake 26.13 — Class Hub

The class website for Diploma of Information Technology, intake 26.13.
Lesson summaries, reference cheat sheets, assignment briefs — all in one place.

**To open:** double-click `index.html`, or right-click it in VS Code → *Open with Live Server*.

---

## How each class works

- **Past & current classes** are written up in `lessons/NN-Name.md` — focus, topics, links.
- **Future classes** are placeholders until they run — just a title and a "paste Zoom summary here" line.
- **A class tile unlocks at midnight the day after it runs** — until then it's greyed out on the hub.

---

## Updating a class after Zoom

At the end of each class, Zoom produces a meeting summary. Paste it into that class's Markdown file:

1. Open the class file in the `lessons/` folder — e.g. [`lessons/15-YourWebsite.md`](lessons/15-YourWebsite.md).
2. Under **What we'll cover**, replace the placeholder bullets with the ones from your Zoom summary.
3. Fill in the **Focus** line with the one-sentence summary Zoom gives you.
4. Save. Done — GitHub renders the Markdown, no build step.

Every lesson file follows the same simple shape:

```markdown
# Class 15 · Your Website

**Date:** Mon 3 Aug 2026 · **Subject:** S2 (Front End Web Dev)

## Focus
One sentence — what the class was about.

## What we covered
- First bullet from the Zoom summary
- Second bullet
- Third bullet

## Links & resources
- [Any relevant reference or link](https://…)
```

---

## Where things live

| File / folder | What it is |
|---|---|
| `index.html` | The page itself — nav, hero, class grid |
| `hub.js` | The class schedule — dates, subjects, titles, tile links |
| `style.css` | All the custom styling |
| `lessons/` | One Markdown file per class (`01-Introduction.md` → `24-SubmitShowAndTell.md`) |
| `references/` | Cheat sheets and walkthroughs — Bootstrap, Flexbox, Git, wireframes, QA checklist, and more |
| `assets/interactive/` | Class games and tools |
| `assets/class-calendar.ics` | The full term schedule as a calendar file |

---

## Deploy

Merges to `main` publish automatically via Vercel. No build step — everything runs off the CDN.
