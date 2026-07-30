# Wireframes Cheat Sheet

A wireframe is the floor plan of your website. Draw it before you code, and you'll build the site you meant to build — not the one that happened by accident.

## 1. What a wireframe is (and isn't)

A **wireframe** is an early, low-fidelity sketch of a page. It shows where things sit — the nav, the hero, the buttons, the footer — and how a user gets from one to the next. It deliberately leaves out the pretty stuff: no final colours, no photos, no fonts. That's the whole point. You're working out the *shape* before you invest time in the *look*.

People mix up three words. Here's the clean split:

| Term | What it shows | Roughly like… |
| --- | --- | --- |
| **Wireframe** | Structure & layout only — grey boxes, placeholder text, no styling | A house floor plan |
| **Mockup** | The wireframe with visual design on top — real colours, type, imagery | A staged photo of the finished room |
| **Prototype** | A clickable mockup — buttons actually go somewhere | Walking through the actual house |

In practice the lines blur — designers use "wireframe" and "mockup" almost interchangeably. Don't stress the label. Focus on what stage you're at: structure, style, or interaction.

## 2. Why bother wireframing at all

- **Structure first** — You see the whole site's shape — nav, sections, CTAs — before a single tag is written. Problems show up while they're still cheap to fix.
- **Less rework** — Moving a box on paper takes 10 seconds. Moving it after the CSS is written takes 10 minutes. After launch, 10 hours.
- **Faster feedback** — Because there are no colours to argue about, feedback stays on structure and content. Reviews finish in minutes, not weeks.

## 3. What to put on a wireframe

A wireframe doesn't need much, but it does need these five things:

- **Page hierarchy** — the header, footer, and the main sections in the order they'll appear. Most important thing at the top.
- **Content areas** — the hero, the intro, the card grid, the testimonials, whatever your page needs. Just labelled boxes at this stage.
- **Buttons & links (CTAs)** — every place a user can click to move forward. Label them (*Book now*, *See products*) so it's obvious what they do.
- **User flow** — arrows between wireframes showing how someone gets from the homepage to their goal (usually: booking, buying, or contacting).
- **Notes** — short annotations that explain anything a stakeholder wouldn't guess. Especially useful when you're showing it to a client.

If it's not one of those five, leave it out. Colour, fonts, imagery, drop shadows — all of that is a distraction at this stage.

## 4. Low, mid & high fidelity

"Fidelity" just means how close the wireframe looks to the finished site. Three flavours:

| Level | Looks like | Use it when |
| --- | --- | --- |
| **Low-fi** | Boxes, lines, placeholder text (`Lorem ipsum`), no colour. Hand-drawn is fine. | You're brainstorming the shape and want to iterate fast. |
| **Mid-fi** | Real labels, real spacing, still greyscale. Content is closer to the actual copy. | Showing stakeholders how much content each section will hold. |
| **Hi-fi** | Detailed layout, near-final component structure — but still no brand colours or imagery. | Complex pages (dashboards, intranets) where you need to prove the layout works before styling. |

Almost always start low-fi and add detail as the project firms up. Jumping straight to hi-fi is how you end up rebuilding everything.

## 5. Tools — pen & paper is fine

You don't need software to wireframe. A pencil and a piece of grid paper is often the fastest way to get an idea out of your head. Sketch it, photograph it, share it.

When you want to go digital, these are the ones our class uses (all have free tiers):

- **Figma** — Industry standard. Free for individuals. Loads of community wireframe kits — search *"wireframe kit"* in Figma Community.
- **Excalidraw** — Free, browser-based, deliberately looks hand-drawn. Perfect for low-fi and group brainstorming.
- **Wireframe.cc** — Purist, distraction-free web tool. Nothing to install. Great for a single-page sketch you can share as a link.
- **Miro / FigJam** — Whiteboard tools with wireframe templates. Best when you're wireframing together with a client or teammate.

### AI wireframing

Tools like Uizard and Framer will generate a wireframe from a text prompt. Handy for a starting point — but you'll usually get a better result by sketching the intent yourself first, then asking the AI to tidy it up. The thinking is the value; the pretty version is the easy bit.

## 6. How to make one — five steps

1. **Nail the goal.** What is this page supposed to make the user do? Buy, book, contact, sign up? Write it in one sentence before anything else.
2. **List the user flow in plain text.** "Homepage → Products → Product page → Cart → Checkout." Rearranging bullet points is way faster than rearranging boxes.
3. **Sketch the layout.** Grid paper or a blank Figma frame — pick one. Start with the header and footer, then drop in the main content blocks in priority order.
4. **Add the CTAs.** Every button and every link that moves the user forward. Label them properly — *Book a demo*, not *Button*.
5. **Get feedback, then iterate.** Show it to a teammate, a client, or a friend. If they can't find the "next step" in five seconds, the wireframe isn't done yet.

## 7. When you can skip it

Not every project needs a full wireframe. You can (mostly) skip it when:

- You're using a website builder or template that already does the layout thinking for you.
- The site is tiny — 1–3 pages, one purpose, no client to align with.
- You're prompting an AI website builder and the "wireframe" is really just your prompt.

Even then, a five-minute paper sketch usually pays for itself. It's cheap insurance against a rebuild.

## 8. How this applies to our assignments

Both of our Bootstrap assignments benefit from a quick wireframe before you touch VS Code:

- **S02-A01 (Bootstrap clone).** You already have the target site in front of you — but sketch its layout on paper before rebuilding. It forces you to *see* the sections instead of copying pixel-for-pixel.
- **S02-A02 (original site).** This one lives or dies on the wireframe. Sketch every page — homepage, at least one inner page — before writing a line of HTML. Bring it to class for feedback in the planning session.

A five-minute pencil sketch has stopped more late-night rebuilds than any framework ever has.

### The one-liner to remember

Wireframes are cheap. Rebuilds are expensive. Spend 20 minutes on paper, save 20 hours in code.
