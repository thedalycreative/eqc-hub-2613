# Accessibility

POUR framework · WCAG 2.2 · why it matters, what the law says, and how to feel it for yourself.

## Why accessibility matters

**One in six people globally** live with a significant disability. And disability isn't one fixed thing — it can be:

- **Permanent** — blindness, deafness, limited mobility
- **Temporary** — a broken wrist, eye surgery recovery, an ear infection
- **Situational** — bright sunlight on your screen, holding a baby, a noisy train with no headphones

### A real example from class

Tim's former roommate was deaf-blind and used a **Brailliant braille keyboard** to browse the web. Uber Eats' ordering flow was accessible — he could order dinner on his own. But the *complaints* flow wasn't. When the wrong food arrived, he had no way to report it — which, with food allergies in play, is a genuine health risk. Accessibility isn't a nice-to-have; it decides what people can and can't do independently.

## The law in Australia

- Web accessibility is a legal requirement under the **Disability Discrimination Act 1992**, enforced by the Australian Human Rights Commission.
- The standard: **WCAG Level AA** compliance — currently assessed against [WCAG 2.2](https://www.w3.org/TR/WCAG22/).
- Government forms must ship in **both Word and PDF** — Word for editability with assistive tech, PDF for universal browser support. (And yes — improving form accessibility inside big organisations meets real internal pushback. Budget for the argument.)

## The POUR framework

Every WCAG guideline hangs off one of four principles. If you remember nothing else, remember POUR.

### P · Perceivable

Users must be able to perceive your content — sight isn't guaranteed, neither is hearing.

- Meaningful `alt` text on every image
- Contrast ratio ≥ **4.5:1** for text
- Captions on video
- Text zooms to **200%** without breaking layout

### O · Operable

Users must be able to operate your site — with a keyboard alone if needed.

- Full `Tab` navigation through the whole page
- Visible focus indicators, no keyboard traps
- Nothing flashes more than 3×/second
- Descriptive page titles

### U · Understandable

Content and controls must make sense and behave predictably.

- `<html lang="en">` set on every page
- Visible labels on every form field
- Errors that say what went wrong and how to fix it
- Consistent navigation across pages

### R · Robust

Clean, standard code that browsers and assistive tech can parse reliably.

- Valid HTML (W3C validator, zero errors)
- Semantic elements: `<nav>`, `<main>`, `<button>` — not div-for-everything
- Works across browsers and screen readers

## Feel it yourself — empathy exercises

We ran these live in class. Run them on *your own* site — the results are usually humbling.

- **Unplug your mouse** — navigate your site with `Tab` / `Shift+Tab` / `Enter` only. Can you reach everything? Can you *see where you are* at all times?
- **Simulate colour blindness** — Chrome DevTools → *Rendering* panel → *Emulate vision deficiencies*: try protanopia (red-blind), deuteranopia (green-blind), and achromatopsia (grayscale). Does your site still communicate?
- **Blur it** — the same panel simulates blurred vision. Is your text still readable at a squint? Are your buttons obviously buttons?
- **Tunnel vision** — cover the edges of your screen with your hands. Is anything critical living only in a corner?
- **Listen to it** — turn on VoiceOver (`Cmd+F5` on Mac) and close your eyes. Is the reading order sane? Do your images say anything useful?

## Design notes from class

### Iconography is accessibility

Icons paired with text help dyslexic users parse a page quickly, and reduce load for users prone to visual overstimulation. Icons aren't decoration — they're a second, parallel channel for meaning.

### Cluster, don't scatter

Discussion sparked by the Proloquo2Go communication app: too many interactive elements spread across a screen overwhelms some autistic users. Group your interactive controls into one predictable area of the page rather than sprinkling them everywhere.

### AI can write your alt text

No idea how to describe an image? Paste it into Gemini, ChatGPT or Claude and ask for alt text. Review what it gives you — you're the accountable human — but it beats an empty `alt` attribute every time.

## Practical habits

1. Write `alt` text the moment you add an image — not "later"
2. Check contrast *while* choosing your palette, not after the build
3. Tab through every page before you call it done
4. Run WAVE + the W3C validator before submitting anything
5. Keep semantic HTML as your default — accessibility mostly falls out of it for free

[Then run the full QA Checklist →](../assets/cheatsheets/cheatsheet-qachecklist.html)
