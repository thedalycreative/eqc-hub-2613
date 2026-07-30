# HTML Tags Cheat Sheet

Every tag you'll reach for in this course, grouped by what it does — from document skeleton to forms, media and tables.

## 1. Basic HTML

The skeleton. Every page you ever build starts with these.

| Tag | Description |
| --- | --- |
| `<!DOCTYPE>` | Declares the document type. `<!DOCTYPE html>` means HTML5 — always line one. |
| `<html>` | The root element — wraps the entire document. |
| `<head>` | Metadata about the document: title, stylesheets, meta tags. Nothing here renders on the page. |
| `<title>` | The document title shown in the browser tab. |
| `<body>` | The visible content of the page — everything the visitor actually sees. |
| `<h1>` to `<h6>` | Headings, from most important (`<h1>`) to least (`<h6>`). |
| `<p>` | A paragraph of text. |
| `<br>` | Inserts a single line break. Self-closing — no closing tag. |
| `<hr>` | A thematic change in the content — renders as a horizontal line. |

Put together, they make the boilerplate you'll type a hundred times:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello, world</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```

> **Tip:** use exactly one `<h1>` per page, and don't skip heading levels (`<h2>` then `<h3>`, never `<h2>` straight to `<h5>`). Screen readers and search engines both rely on that outline.

## 2. Formatting elements

Inline tags that shape text — some purely visual, some carrying real meaning.

| Tag | Description |
| --- | --- |
| `<acronym>` | **Not supported in HTML5.** Use `<abbr>` instead. Previously defined an acronym. |
| `<abbr>` | An abbreviation or acronym — add a `title` attribute holding the full term. |
| `<address>` | Contact information for the author/owner of the document. |
| `<b>` | Bold text *without* conveying extra semantic importance. |
| `<bdi>` | Isolates text that might flow in a different direction (bi-directional isolation). |
| `<bdo>` | Overrides the current text direction. |
| `<strong>` | Text with strong importance — rendered bold. Prefer this over `<b>` when the emphasis matters. |
| `<i>` | Text in an alternate voice or mood — rendered italic. |
| `<em>` | Emphasised text — rendered italic, and read with stress by screen readers. |
| `<mark>` | Marked or highlighted text. |
| `<small>` | Smaller text — fine print, copyright lines. |
| `<del>` | Text deleted from the document — rendered with a strikethrough. |
| `<ins>` | Text inserted into the document — rendered underlined. |
| `<sub>` | Subscript text — sits below the line, as in H₂O. |
| `<sup>` | Superscript text — sits above the line, as in x². |

You write:

```html
<p>
  <strong>Strong</strong>, <em>emphasised</em>,
  <del>deleted</del>, <ins>inserted</ins>,
  H<sub>2</sub>O and x<sup>2</sup>.
</p>
```

The browser renders: **Strong**, *emphasised*, ~~deleted~~, inserted, H₂O and x².

## 3. Forms & inputs

Everything you need to collect input from the user.

| Tag | Description |
| --- | --- |
| `<form>` | Wraps a set of inputs the user submits together. |
| `<input>` | A single input control — text, email, checkbox, radio and more, chosen via the `type` attribute. |
| `<textarea>` | A multi-line text input. |
| `<button>` | A clickable button. |
| `<select>` | A drop-down list. |
| `<optgroup>` | Groups related options inside a drop-down list. |
| `<option>` | One individual choice inside a drop-down list. |
| `<label>` | A caption tied to an `<input>` — clicking the label focuses its input. |
| `<fieldset>` | Groups related form inputs together inside a shared boundary. |
| `<legend>` | A caption heading for a `<fieldset>`. |
| `<datalist>` | A list of pre-defined suggestions for an input. |
| `<output>` | Displays the result of a calculation or script. |

> **Tip:** every `<input>` deserves a `<label>`. Connect them with `for="..."` on the label matching `id="..."` on the input — it's an accessibility requirement, not a nice-to-have.

## 4. Structural & semantic

The containers that give a page its shape — and tell browsers what each region means.

| Tag | Description |
| --- | --- |
| `<div>` | A generic block-level container — no meaning of its own, used for layout and styling. |
| `<span>` | A generic inline container — for styling part of a line of text. |
| `<header>` | Introductory content or navigation for a page or section. |
| `<footer>` | Footer content for a page or section. |
| `<main>` | The unique main content of the document — exactly one per page. |
| `<section>` | A standalone thematic block of content. |
| `<article>` | Independent, self-contained content that could be reused on its own — a post, a card, a comment. |
| `<aside>` | Content set aside from the main flow — sidebars, pull-quotes. |
| `<details>` | An interactive disclosure widget the user can open and close. |
| `<summary>` | The always-visible heading for a `<details>` element. |
| `<dialog>` | A popup dialog box or modal window. |
| `<data>` | Ties content to a machine-readable value via the `value` attribute. |

You write:

```html
<details>
  <summary>Click to toggle</summary>
  <p>Hidden until opened — no JS needed.</p>
</details>
```

The browser renders (try it): a `<details>` + `<summary>` pair that toggles open and shut with zero JavaScript.

## 5. Links & media

Connecting to other pages and embedding images, sound and video.

| Tag | Description |
| --- | --- |
| `<a>` | An anchor — the hyperlink. Destination goes in the `href` attribute. |
| `<link>` | Connects the document to an external file — most often a stylesheet. Lives in the `<head>`. |
| `<img>` | Embeds an image. Always include `alt` text. |
| `<audio>` | Embeds sound or audio tracks. |
| `<video>` | Embeds video clips or streams. |
| `<source>` | Offers multiple media files for `<video>` and `<audio>` — the browser plays the first format it supports. |
| `<track>` | Text tracks for media — e.g. subtitles and captions for `<video>`. |
| `<embed>` | A container for external content or plugin-rendered resources. |
| `<object>` | An embedded external object or resource — rarely needed in modern work. |

> **Heads up:** `<a>` and `<link>` both "link", but they are not interchangeable — `<a>` is something the visitor clicks, `<link>` quietly attaches a file (like `style.css`) in the `<head>`.

## 6. Lists & data tables

Three flavours of list, plus the family of tags that build a proper data table.

| Tag | Description |
| --- | --- |
| `<ul>` | An unordered (bulleted) list. |
| `<ol>` | An ordered (numbered) list. |
| `<li>` | A single list item — used inside both `<ul>` and `<ol>`. |
| `<dl>` | A description list — pairs of terms and their descriptions. |
| `<dt>` | A term name inside a description list. |
| `<dd>` | The description that goes with a term. |
| `<table>` | A structured data table. |
| `<tr>` | A table row. |
| `<th>` | A header cell — the column (or row) title. |
| `<td>` | A standard data cell. |
| `<thead>` | Groups the header rows of a table. |
| `<tbody>` | Groups the main body rows of a table. |
| `<tfoot>` | Groups the summary / footer rows of a table. |

> **Golden rule:** tables are for *data*, not layout. If you're tempted to lay a page out with `<table>`, you want Flexbox or the Bootstrap grid instead — see the Flexbox cheat sheet on the hub.
