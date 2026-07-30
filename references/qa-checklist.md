# QA Checklist

WCAG 2.1 accessibility + general quality checks. Run this on every site before you call it done.

## How to use this list

Open your site in one tab, this checklist in another, and tick each box as you verify it — don't tick what you *think* is true, tick what you've *checked*. Ticks reset when you reload this page. WCAG 2.1 is the legal accessibility baseline in Australia (alongside the Australian Privacy Principles for data) — this is a professional habit, not homework.

## 1 · Perceivable

Users must be able to perceive your content — with or without full sight or hearing.

- [ ] Every `<img>` has meaningful `alt` text (or `alt=""` if purely decorative)
- [ ] Text contrast is at least **4.5:1** against its background (3:1 for large text) — test with the WebAIM contrast checker
- [ ] Colour is never the *only* signal — errors, links and states also use text, icons or underlines
- [ ] Headings follow a real hierarchy: one `<h1>`, then `<h2>` → `<h3>` in order — no skipping levels for looks
- [ ] Embedded video has captions (YouTube auto-captions count — check they're on)
- [ ] Text can zoom to 200% in the browser without breaking the layout or hiding content

## 2 · Operable

Users must be able to operate your site — including with a keyboard only, no mouse.

- [ ] You can `Tab` through the whole page — every link, button and form field is reachable in a sensible order
- [ ] Keyboard focus is always *visible* — you can see which element you're on (don't remove focus outlines without replacing them)
- [ ] Link text describes the destination — "View the Flexbox cheat sheet", never "click here"
- [ ] Nothing flashes more than 3 times per second; carousels/animations can be paused
- [ ] The page has a descriptive `<title>` — it's the first thing a screen reader announces

## 3 · Understandable

Content and controls must behave predictably and explain themselves.

- [ ] `<html lang="en">` is set — screen readers need it to pronounce your content correctly
- [ ] Every form input has a visible `<label>` (placeholder text alone is not a label)
- [ ] Form errors say *what* went wrong and *how* to fix it, next to the field
- [ ] Navigation is in the same place, same order, on every page
- [ ] No jargon walls — plain English, short sentences, expanded acronyms on first use

## 4 · Robust

Clean, standard code that browsers and assistive tech can rely on.

- [ ] HTML passes the [W3C HTML validator](https://validator.w3.org) with no errors
- [ ] CSS passes the [W3C CSS validator](https://jigsaw.w3.org/css-validator/)
- [ ] Semantic elements used where they exist — `<nav>`, `<main>`, `<header>`, `<footer>`, `<button>` — not `<div>` for everything
- [ ] Site tested in at least two browsers (e.g. Chrome + Safari/Firefox)

## 5 · General QA pass

The non-accessibility checks that separate "works on my machine" from "professional".

- [ ] Responsive at every Bootstrap breakpoint — xs, sm, md, lg, xl — no horizontal scrollbar anywhere
- [ ] Tested on a *real phone*, not just DevTools' device mode
- [ ] No broken links — every nav item, button and footer link goes somewhere real
- [ ] No broken images; images compressed (aim under ~200KB each)
- [ ] Favicon + `<meta name="description">` present on every page
- [ ] No placeholder text left behind — search your code for "lorem", "TODO" and "asdf"
- [ ] Console is clean — open DevTools → Console and fix any red errors

## Testing tools

Automated scans catch maybe half of real accessibility issues — run them all, then do the keyboard test yourself.

- [WAVE — accessibility scanner (paste your URL)](https://wave.webaim.org)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [W3C HTML Validator](https://validator.w3.org)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [PageSpeed Insights (includes Lighthouse accessibility score)](https://pagespeed.web.dev/)
- [WCAG 2.1 — the official guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
