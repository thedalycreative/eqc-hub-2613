# Folder Structure Cheat Sheet

Before you write a line of code, you organise your files. A clean folder structure is the difference between a project that grows with you and one that turns into a mess.

## Watch first

[Watch: Folder structure for web projects](https://www.youtube.com/embed/aNt2s0sXltk)

Watch first — then use the guide below as your reference.

## 1. Why folder structure matters

When you open a website's folder, three groups of people need to find their way around it: **the browser** (which has to know where to start), **your teammates** (who need to find files fast), and **future you** (who won't remember where anything is in three weeks).

A predictable structure solves all three. Files link to each other by their location, so if things move around randomly, links break and images stop loading. Getting the structure right from the start saves you hours of confusion later.

## 2. The standard structure

Most small web projects follow the same simple shape. Here's a typical one:

```text
my-website/
├── index.html      ← the home page (loads first)
├── about.html      ← other pages
├── style.css       ← all your styling
├── script.js       ← your JavaScript (later on)
├── images/         ← photos, logos, icons
│   ├── logo.png
│   └── hero.jpg
└── fonts/          ← custom fonts (optional)
```

The idea is simple: **keep like with like**. All your images go in `images/`. Your styles live in one CSS file. Your pages sit at the top level. Everything has an obvious home.

## 3. index.html is special

Of every file in your project, `index.html` is the one with a superpower. When a browser opens a folder (or a web server serves it), it automatically looks for `index.html` first and loads it. It's the **front door** of your website.

### Remember

Your home page should **always** be named `index.html` — lowercase, exactly like that. Name it anything else and the browser won't know it's the starting point.

## 4. Naming rules that save you pain

- **Lowercase everything** — Use `about.html`, not `About.html`. Some servers treat capitals as different files — lowercase avoids nasty surprises.
- **No spaces** — Use a hyphen instead: `contact-us.html`, not `contact us.html`. Spaces break links and turn into messy `%20` codes in the address bar.
- **Be descriptive** — `hero-banner.jpg` tells you what it is. `IMG_4821.jpg` tells you nothing.
- **Stay consistent** — Pick a style (hyphens are the web standard) and use it everywhere.

## 5. How files link to each other

Files find each other using **relative paths** — directions starting from wherever the current file is. Here's what they look like from your `index.html`:

| You write | What it means |
| --- | --- |
| `style.css` | A file sitting right next to index.html, in the same folder |
| `images/logo.png` | Go into the `images` folder, then grab `logo.png` |
| `../index.html` | The `../` means "go up one folder" first |

So in your HTML, linking a stylesheet and an image looks like this:

```html
<link rel="stylesheet" href="style.css">
<img src="images/logo.png" alt="Our logo">
```

The path is just directions to the file.

## 6. Common mistakes to avoid

### Watch out

The classics that trip everyone up: **spaces or capitals** in filenames, an image that won't load because the **path is wrong**, forgetting to name your home page `index.html`, and dumping every file loose in one folder instead of using an `images/` folder. Nearly every "why won't my image show up?" moment comes back to one of these.

## 7. How this applies to our class hub

The hub we build in class uses exactly this structure — clean and simple. One page, one stylesheet, and a folder for images:

```text
03-intake-website/
├── index.html     ← our hub page
├── style.css      ← our styling (loads after Bootstrap)
└── images/        ← any pictures we add
```

[Open the hub and view-source to see it in action](../../index.html)
