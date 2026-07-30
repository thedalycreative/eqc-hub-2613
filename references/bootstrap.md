# Bootstrap 5 Cheat Sheet

The core layout, form, navigation and overlay components — what each class does and when to reach for it.

## 1 · Layout & grid systems

The 12-column grid is the skeleton of every Bootstrap page. Container holds it, rows slice it horizontally, columns divide each row.

- **Container — `.container`** — The foundational building block. Wraps your page content, sets a responsive max-width at each breakpoint and centres everything horizontally. Almost every page starts with one. Responsive max-widths at every breakpoint — see the table below. Also: `.container-fluid` for full width.
- **Grid row — `.row`** — A wrapper built exclusively to hold columns. Uses flexbox plus negative-margin maths so columns sit perfectly flush with the container's edges. Flexbox layout controller — columns only, no other direct children.
- **Grid columns — `.col-*`** — Slices each row into fractions of a standard 12-column grid — `.col-6` is half the row, `.col-4` is a third. Add a breakpoint infix (`.col-md-6`) to change the split per screen size. Responsive breakpoint modifiers: `sm` · `md` · `lg` · `xl` · `xxl`.
- **Gutter controls — `.g-*`** — Controls the horizontal and vertical spacing between columns without shifting their alignment. Set it once on the `.row` and every column follows. Adjustable sizes 0–5 · `.gx-*` horizontal only · `.gy-*` vertical only.

```html
<div class="container">
  <div class="row g-3">
    <div class="col-md-8">Main content</div>
    <div class="col-md-4">Sidebar</div>
  </div>
</div>
```

Live grid — shrink the window below 768px and the columns stack:

- `.col-md-4` · `.col-md-4` · `.col-md-4`
- `.col-md-8` · `.col-md-4`

| Breakpoint | Class infix | Kicks in at | `.container` max-width |
| --- | --- | --- | --- |
| Extra small | *(none)* — `.col-6` | < 576px | 100% |
| Small | `sm` | ≥ 576px | 540px |
| Medium | `md` | ≥ 768px | 720px |
| Large | `lg` | ≥ 992px | 960px |
| Extra large | `xl` | ≥ 1200px | 1140px |
| Extra extra large | `xxl` | ≥ 1400px | 1320px |

**Think in twelfths.** Column numbers in one row should add up to 12 (8 + 4, 4 + 4 + 4, 6 + 6…). Go over 12 and the extra columns wrap onto a new line — that wrapping is exactly what makes the grid responsive.

## 2 · Form components

Native form elements look different in every browser. These classes normalise them into clean, full-width fields with consistent focus styling.

- **Form control — `.form-control`** — Turns plain text inputs and textareas into full-width, fluid fields with padding, borders and a custom focus state that match the rest of the framework. Applied directly to the `<input>` or `<textarea>`.
- **Form select — `.form-select`** — Overrides the native platform appearance of dropdowns so a `<select>` looks identical in every browser, while keeping proper sizing and spacing. Replaces the native `<select>` look.
- **Checks & radios — `.form-check`** — Wraps checkboxes and radio buttons in custom-rendered styling and keeps the label wired to its input. Toggle states stay clean and consistent. Add `.form-switch` for toggle switches.
- **Input group — `.input-group`** — Bolts static text, buttons or icons onto the front or back edge of an input — think an `@` before a username field, or a search button after a query box. Flexbox input layout alignment.

```html
<label for="email" class="form-label">Email</label>
<input type="email" class="form-control" id="email" placeholder="you@example.com">

<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="darkMode">
  <label class="form-check-label" for="darkMode">Dark mode</label>
</div>
```

Live form — every field in the source demo is one of the four classes above:

- Text input · `.form-control`
- Dropdown · `.form-select`
- Input group · `.input-group` (e.g. `@` prefix + username field)
- Checks & switches · `.form-check` (checkbox and toggle switch)

**Every input needs a label.** Pair each input with a `<label for="…">` that matches the input's `id`. Screen readers rely on it, and clicking the label focuses the field — free usability.

## 3 · Navigation & shells

The components that tell visitors where they are and let them move around — from the site-wide navbar down to page numbers.

- **Navbar shell — `.navbar`** — A flexible top-bar engine supporting brand/logo placement, navigation link sets and a collapsing hamburger menu on small screens. The bar at the top of the source page is one. Responsive expansion breakpoints via `.navbar-expand-{sm|md|lg|xl}`.
- **Navs & tabs — `.nav`** — Generates aligned tab bars, vertical menu lists or rounded pill shapes for switching between views or in-page routes. Flex-based layout — add `.nav-tabs` or `.nav-pills` for the look.
- **Breadcrumb — `.breadcrumb`** — Shows where the current page sits in the site hierarchy, marking the active route. Separators are inserted automatically by CSS — you never type the slashes. Default separator is a forward slash (customisable via a CSS variable).
- **Pagination — `.pagination`** — Renders large, clearly clickable page buttons for splitting long content across a clean sequence of pages. Large, accessible touch targets out of the box.

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#menu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="menu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      </ul>
    </div>
  </div>
</nav>
```

Live examples — tabs, breadcrumb and pagination are pure CSS:

- Tabs: Active tab · Another tab · Disabled
- Breadcrumb: Home / Library / Bootstrap
- Pagination: « · 1 · 2 · 3 · »

**The hamburger needs JavaScript.** The navbar itself is pure CSS, but the collapsing hamburger menu (`data-bs-toggle="collapse"`) only works once Bootstrap's JS bundle is loaded — see the callout at the end of section 4.

## 4 · Overlays & content

Content containers and the layers that appear over the page. Cards are everyday workhorses; the other three are JavaScript-powered overlays.

- **Card panel — `.card`** — The all-purpose content container: optional header, image cap, body text and an action footer. You will use these constantly — the hub's tiles are cards. Replaces Bootstrap 3's old panels & wells.
- **Modal popups — `.modal`** — A lightweight dialog that opens over the whole viewport. Bootstrap manages the backdrop, locks body scrolling and traps keyboard focus so you don't have to. Supports focus trapping & stacked layers — needs the JS bundle.
- **Accordion — `.accordion`** — Vertically stacked sections where clicking a header expands its panel. Panels can open one-at-a-time or independently, toggled via JavaScript events. Powered by the collapse plugin — needs the JS bundle.
- **Offcanvas — `.offcanvas`** — A hidden sidebar that slides in smoothly from any screen edge — left, right, top or bottom. Great for mobile menus and filter panels. Built-in backdrop configuration options — needs the JS bundle.

```html
<!-- Trigger -->
<button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#myModal">
  Open modal
</button>

<!-- The modal itself (hidden until triggered) -->
<div class="modal fade" id="myModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Hello!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">Modal content goes here.</div>
    </div>
  </div>
</div>
```

Live card — every part is labelled with its own class:

- `.card-header`
- `.card-body` containing `.card-title` and `.card-text` (body copy), plus an action button
- `.card-footer`

**Heads up — modal, accordion & offcanvas need JavaScript.** Cards are pure CSS, but anything that opens, closes or slides needs Bootstrap's JS bundle. If your modal does nothing when clicked, you forgot this line just before `</body>`:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```
