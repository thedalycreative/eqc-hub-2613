# Clone a Bootstrap Website in 5 Minutes

S02-A01 — rebuild an existing site's layout with Bootstrap 5. Here's the whole job, start to finish.

EQC · Intake 26.13 · Subject 2 · Assignment 1

- Assignment 1
- Subject 2
- 5 files minimum

## The rules

Break one of these and you lose marks for something that takes ten seconds to fix.

### Bootstrap 5 via CDN only

No npm, no build step. Just a `<link>` in the head and a `<script>` before `</body>`.

### Minimum 5 files

Your pages, plus a stylesheet, plus an images folder.

### JavaScript only for the carousel

And even then, Bootstrap's bundle does it for you. You write none.

### No inline styles

Every custom rule lives in your `style.css`. No `style="..."` attributes.

### Alt text on every image

Describe what the image shows. Decorative? Use `alt=""`.

### Stay on brand

Sample the original's colours. Don't invent new accents — if it isn't in the original palette, it isn't in your clone.

> **Copyright.** The imagery and branding you're cloning belong to their owners. This rebuild is private practice for assessment only — don't publish your copy or put it on a live domain.

## Step 1 · Capture the target

*about 5 minutes*

You can't clone what you can't look at closely.

1. Open the site you're cloning in Chrome.
2. **File → Save Page As → "Webpage, Complete"**. Save it into a folder called `_raw/`. This is your reference copy — you never edit it, you just read it.
3. Right-click anything interesting → **Inspect**. This is how you find the real colours, fonts and spacing.
4. Screenshot the page at desktop *and* phone width. You're rebuilding both.

### Sample the brand

In DevTools, click the **Styles** panel and look for the repeating values. You're after three things:

| What | Where to find it |
| --- | --- |
| **Colours** | Click any coloured element → the hex codes are in Styles. Write down 3–5: background, text, and the accent. |
| **Fonts** | The `font-family` on `body` and on a heading. Usually two faces, no more. |
| **Spacing** | Hover an element — DevTools draws the box model. Note the rhythm (often multiples of 8px). |

Put those at the top of your `style.css` as CSS variables. Now the whole build has one source of truth:

```css
:root {
  --ice:       #a3e6ef;
  --gold:      #bd9e63;
  --parchment: #e5dbc1;
  --night:     #0b1020;
}
```

## Step 2 · Set up your folder

*about 5 minutes*

Get this right now and you'll never hunt for a file again.

```text
my-clone/
├── index.html          # your main page
├── about.html          # a second page
├── style.css           # ALL your custom CSS
├── images/             # every image, named properly
│   ├── hero-1920x1080.jpg
│   ├── logo-200x60.png
│   └── card-crest-400x400.jpg
└── _raw/               # the saved original (reference only)
```

### Name files honestly

Lowercase, hyphens, no spaces. Putting the dimensions in the name (`hero-1920x1080.jpg`) saves you opening files to check.

### One stylesheet

Not three. Every custom rule goes in `style.css`, loaded *after* Bootstrap so yours wins.

Full detail: [Folder Structure cheat sheet](cheatsheet-folderstructure.html).

## Step 3 · Wire up Bootstrap

*about 2 minutes*

Copy this boilerplate into every page. That's the whole setup.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Page Title</title>

  <!-- 1. Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- 2. Bootstrap Icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">

  <!-- 3. YOUR css LAST, so it beats Bootstrap -->
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- your page goes here -->

  <!-- 4. Bootstrap JS — needed for navbar toggle + carousel -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

> **Order matters.** Your `style.css` must come *after* Bootstrap's. CSS reads top to bottom — last one wins. Put yours first and Bootstrap overwrites everything you write, and you'll spend an hour wondering why.

## Step 4 · Rebuild it, section by section

*the actual build*

Work top to bottom. Get each block roughly right before you polish anything.

Nearly every site is the same five blocks. Find them in your target, then build them in this order:

| Block | Bootstrap components | Watch out for |
| --- | --- | --- |
| **1. Navbar** | `.navbar` `.navbar-expand-lg` `.dropdown` | The mobile burger only works if the Bootstrap JS bundle is loaded. |
| **2. Hero** | `.container` `.py-5` `.display-4` | Background image? Set it in `style.css`, not inline. |
| **3. Card grid** | `.row` `.row-cols-1` `.row-cols-md-3` `.g-4` | Use `row-cols-*`, not manual `col-4`s — it stacks on mobile for free. |
| **4. Carousel** | `.carousel` `.carousel-item` `data-bs-ride` | Exactly one slide needs `.active`, or it renders blank. |
| **5. Footer** | `.container` `.d-flex` `.justify-content-between` | Stack it on mobile with `.flex-column .flex-md-row`. |

### The responsive card grid — the one you'll use most

```html
<div class="container my-5">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

    <div class="col">
      <div class="card h-100">
        <img src="images/card-1-400x300.jpg" class="card-img-top" alt="Describe the picture">
        <div class="card-body">
          <h3 class="card-title h5">Card title</h3>
          <p class="card-text">A sentence about this card.</p>
        </div>
      </div>
    </div>

    <!-- copy the .col block for each card -->

  </div>
</div>
```

Read it as: *1 across on phones, 2 on tablets, 4 on desktop, with a gap of 4.* `h-100` on the card makes every card in a row the same height.

### The carousel — your one piece of JavaScript

```html
<div id="pressCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">  <!-- exactly one .active -->
      <img src="images/slide-1-1200x600.jpg" class="d-block w-100" alt="First slide">
    </div>
    <div class="carousel-item">
      <img src="images/slide-2-1200x600.jpg" class="d-block w-100" alt="Second slide">
    </div>
  </div>

  <button class="carousel-control-prev" type="button"
          data-bs-target="#pressCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
          data-bs-target="#pressCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

The `id` and both `data-bs-target`s must match, or the arrows do nothing.

## Step 5 · Check before you submit

*before you hit submit*

Ten minutes here is worth a grade band.

### Works

- Every link goes somewhere — no `href="#"` left behind
- Every image loads (no broken icons)
- The navbar burger opens on mobile
- The carousel actually slides

### Marks

- Alt text on *every* image
- Zero `style="..."` attributes
- Semantic tags: `header`, `nav`, `main`, `footer`
- Five files minimum, images in `images/`

Then run these three:

- [The QA Checklist](cheatsheet-qachecklist.html)
- [W3C HTML Validator](https://validator.w3.org)
- [WAVE accessibility](https://wave.webaim.org)

Last thing: open it on a **real phone**, not just DevTools. It catches things the emulator won't.

## While you build

Keep these open.

- [Class repo](https://github.com/thedalycreative/S02-A01-BootstrapClone) — the full clone + a README teardown. Read it like a textbook.
- [Bootstrap cheat sheet](cheatsheet-bootstrap.html) — grid, components and utilities on one page.
- [Bootstrap 5 docs](https://getbootstrap.com/docs/5.3/) — every component, with copy-paste examples.
- [Flexbox cheat sheet](cheatsheet-flexbox.html) — for the bits Bootstrap's grid doesn't cover.
