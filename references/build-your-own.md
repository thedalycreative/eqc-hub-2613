# Build Your Own Website

S02-A02 — same Bootstrap skills as the clone, but this time the design decisions are yours. Here's how to make them without freezing.

EQC · Intake 26.13 · Subject 2 · Assignment 2

- Assignment 2
- Subject 2
- Portfolio piece

**The difference from Assignment 1.** The clone gave you every design decision for free — you just had to rebuild it. Here you make those decisions yourself. That's the whole point, and it's why *planning* is most of the work. Don't open your editor until step 4.

## 1. Pick a subject

*Step 1 · decide today*

A real one. Vague subjects make vague websites.

### Good subjects

- Your own portfolio — you're a web dev now, act like it
- A real local business (a cafe, a mechanic, your mate's band)
- A club or community group you're actually in
- A hobby you can write 500 honest words about

### Subjects that stall

- "A generic company" — you'll invent filler and it shows
- Anything needing a login, database or payments
- A 12-page site — you have weeks, not months
- Something you'd need to research from scratch

Once you've picked, write one sentence: *"This site helps **[who]** to **[do what]**."* Every later decision gets checked against that sentence. If a section doesn't serve it, cut the section.

## 2. Plan it

*Step 2 · paper first*

Sitemap, then wireframe. Both before any code.

### The sitemap — what pages exist

Four pages is the sweet spot. Draw it as a tree:

```
Home
├── About        # who you are / the story
├── Services     # what's on offer (or Work / Gallery)
└── Contact      # how to reach you + a form
```

### The wireframe — what's on each page

Boxes and labels only. No colour, no fonts, no real text. You're deciding *order and importance*, nothing else. Ten minutes per page in [Excalidraw](https://excalidraw.com) or on actual paper.

**A home page that works**

- **Navbar** — logo left, 4 links right
- **Hero** — one big line saying what this is, one button
- **Three cards** — the three things that matter most
- **About strip** — image one side, text the other
- **Call to action** — one clear next step
- **Footer** — contact, socials, copyright

Sketch the phone version too. Everything becomes one column — decide now what order it stacks in, because that's what most people will actually see.

## 3. Choose a look

*Step 3 · decide once*

Lock in colours and type now, so you're never mid-build wondering what blue to use.

### Colours — pick four

- **Background** — usually white or near-white
- **Text** — near-black, not pure `#000`
- **Accent** — buttons and links. One colour.
- **Accent-soft** — a pale version for backgrounds

Generate a set at [Coolors](https://coolors.co). Check contrast — dark text on light, always.

### Type — pick two

- **One for headings** — this carries the personality
- **One for body** — this just has to be readable

Grab both from [Google Fonts](https://fonts.google.com). Two faces is plenty — three starts looking like a ransom note.

Write your decisions at the top of `style.css` as variables, then use the variables everywhere:

```css
:root {
  --bg:          #ffffff;
  --text:        #1a1a1a;
  --accent:      #7c3aed;
  --accent-soft: #f3eefe;

  --font-heading: 'Playfair Display', serif;
  --font-body:    'Roboto', sans-serif;
}

.btn-primary {
  background: var(--accent);   /* change it once, changes everywhere */
  border-color: var(--accent);
}
```

## 4. Build the skeleton

*Step 4 · now you can open VS Code*

Structure first, with fake content. Resist styling anything yet.

Set up the folder, then build every page as empty labelled sections. It'll look terrible. That's correct at this stage.

```
my-site/
├── index.html
├── about.html
├── services.html
├── contact.html
├── style.css
└── images/
```

Each page starts as semantic blocks with placeholder text:

```html
<body>
  <header>
    <nav class="navbar navbar-expand-lg">...</nav>
  </header>

  <main>
    <section class="hero py-5">
      <div class="container">
        <h1>Headline goes here</h1>
        <p>One sentence about what this is.</p>
      </div>
    </section>

    <section class="features py-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <!-- three cards -->
        </div>
      </div>
    </section>
  </main>

  <footer>...</footer>
</body>
```

**Why semantic tags matter.** `<header>`, `<nav>`, `<main>`, `<section>` and `<footer>` tell screen readers and search engines what each part *is*. A page built entirely from `<div>`s works visually and fails both. It's also marked.

Build the navbar once, then copy it to every page — and make sure every link works on every page. A dead nav link is the most common thing lost marks for.

## 5. Fill it in

*Step 5 · the long bit*

Real words, real pictures, then check it at every width.

### Words

Write real content — no lorem ipsum in a submission. Short sentences. Say what the thing is, plainly, and cut anything that isn't doing a job.

### Pictures

Free from [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com). Resize before you use them — a 5MB hero image is a fail.

### Widths

Check every breakpoint as you go, not at the end. Fixing responsive problems late means rebuilding sections.

### Bootstrap's breakpoints

| Prefix | Kicks in at | What it means |
| --- | --- | --- |
| *(none)* | 0px and up | Phones. The default — design for this first. |
| `sm` | 576px | Big phones, landscape. |
| `md` | 768px | Tablets. |
| `lg` | 992px | Laptops. |
| `xl` | 1200px | Desktop monitors. |

`row-cols-1 row-cols-md-3` reads as: *one column on phones, three from tablet up.* You only declare the change points — Bootstrap fills in the rest.

## 6. Test & ship

*Step 6 · before you submit*

Prove it works rather than hoping it does.

### Run the tools

- [W3C HTML Validator](https://validator.w3.org) — fix every error
- [WAVE](https://wave.webaim.org) — fix every contrast and alt-text flag
- [PageSpeed](https://pagespeed.web.dev/) — usually flags oversized images

### Check by hand

- Click every link on every page
- Open it on a real phone
- Tab through with the keyboard — can you reach everything?
- Every page has a real `<title>` and meta description

Then the polish that separates a pass from a distinction:

- A favicon (even a simple one)
- Consistent spacing — pick `py-5` for sections and stick to it
- Hover states on everything clickable
- A `404.html` if you're feeling thorough

Related cheatsheets:

- [Full QA Checklist](cheatsheet-qachecklist.html)
- [Accessibility (POUR)](cheatsheet-accessibility.html)
- [Push it to GitHub](cheatsheet-git.html)

## Stuck?

*If you stall*

### "I can't decide on a design"

Find three sites you like, steal their *structure* (not their content), and pick the one closest to your subject. Assignment 1 was literally this skill.

### "It looks amateur"

Nine times in ten it's spacing. Add more whitespace, make the headings bigger, cut a colour. Consistency reads as professional.

### "My CSS isn't working"

Right-click → Inspect → Styles. If your rule has a line through it, something more specific is winning. Check `style.css` loads *after* Bootstrap.
