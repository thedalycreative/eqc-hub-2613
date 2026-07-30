# Class 12 · 10-minute websites + Git setup

**Date:** Wed 22 Jul 2026 · **Subject:** S2 (Front End Web Dev)
**Sub-title:** Your first freelance client · then GitHub

## Focus
Two halves. First: a surprise 10-minute build sprint — everyone got a (ridiculous) client and had to ship a site with an AI agent. Then after dinner, the part every developer has to survive once — getting Git and GitHub working on your own machine.

## Part 1 · The "10-minute" build sprint
- No Menti tonight — Tim built a JavaScript card-dealer that afternoon while practising animations, and dealt everyone a business
- **The clients:** Reverse Gym ("we do the reps, you do the couch") · Sandwich Ambulance · Professional Queue Stander · Extreme Ironing Tours · Grandpa's Mystery Soup Club · Bubble Wrap Therapy Studio · Snail Racing League
- 10 minutes, an AI agent, then 30 seconds to present. Everyone shipped something (it ran a little over 10 minutes — worth it)
- **Three routes that worked:** the agent inside VS Code (most of the class) · ChatGPT in a browser, then paste into VS Code (Andrew) · reopening a previous project so the agent already had context (Viktoria)
- **Prompts that worked** named the stack and the components: "use HTML, Bootstrap, CSS, must include a booking section and an accordion of session types, make it fun and over the top"
- **Name your file `index.html`.** Leslie called hers `snail.html` and the agent lost the plot
- Placeholder images come from services like [Picsum](https://picsum.photos) — grey-box stand-ins until you have the real thing
- Emojis render differently on Windows and Mac — worth knowing before you rely on them
- Copilot is an amalgamation of OpenAI, Anthropic and Gemini models; Codex is OpenAI
- **Tim's line of the night:** coding by hand vs coding with an agent is a hand drill vs a power drill. And the agent mirrors your language back — the class got good results because they asked for elements by their proper names

## Dinner break
- Fish and chips, well earned — back at 7:05 for the Git half

## Part 2 · Git & GitHub
- The README as project documentation, and cloning the class repo with `gh repo clone`
- Installing Git where it was missing. Windows: `winget install --id Git.Git` then `--id GitHub.cli`. Mac: Homebrew, then `brew install git`
- Then `gh auth login` — and restart VS Code so it picks up the new commands
- You push to **your own** repo — you're taking Tim's code, not collaborating on it
- Full walkthrough on the [Git & GitHub cheat sheet](../references/git.md)

## Admin · Attendance
- Use your **full name as registered** on the form — not a nickname. Too many names in this class overlap and the sign-on sheet is getting confused

## Links & resources
- [Git & GitHub Cheat Sheet](../references/git.md)
- [Class repo: S02-A01-BootstrapClone](https://github.com/thedalycreative/S02-A01-BootstrapClone)
- [Picsum — placeholder images](https://picsum.photos)
- [Homebrew (Mac)](https://brew.sh)
- [Bootstrap Cheat Sheet](../references/bootstrap.md)
