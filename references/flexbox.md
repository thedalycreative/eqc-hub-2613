# Flexbox Cheat Sheet

One-axis layout made simple — container properties, item properties, alignment and sizing rules, all in one place.

## 1. The big idea

Flexbox is a **one-axis layout system**. You turn a parent element into a *flex container* with `display: flex` (or `inline-flex`), and every direct child instantly becomes a *flex item*. From then on there are exactly two families of properties:

- **Container properties** — go on the **parent**. They set the direction items flow, how leftover space is shared out, and whether items wrap onto new lines.
- **Item properties** — go on the **children**. They control how one item grows, shrinks, orders itself, or breaks away from the group alignment.

```css
.container {
  display: flex;   /* the parent becomes a flex container */
}
/* every direct child of .container is now a flex item */
```

> **Axis rule of thumb:** the *main axis* follows `flex-direction` (row = horizontal, column = vertical); the *cross axis* is the perpendicular one. `justify-content` works on the main axis, `align-items` works on the cross axis. Learn that pair and the rest falls into place.

## 2. Parent container properties

These apply directly to the wrapper element — the one carrying `display: flex` or `display: inline-flex`.

| Property | Controls | What it does | Common values | Docs |
| --- | --- | --- | --- | --- |
| `flex-direction` | Axis | Sets the main axis — whether items flow left-to-right, right-to-left, top-to-bottom or bottom-to-top. | `row` · `column` · `row-reverse` · `column-reverse` | [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) |
| `justify-content` | Main axis | Distributes items and leftover free space along the main axis — start, centre, end, or spread out evenly. | `flex-start` · `center` · `space-between` · `space-around` | [CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content) |
| `align-items` | Cross axis | Sets the default alignment of every item across the cross axis (perpendicular to the main axis). | `stretch` · `center` · `flex-start` · `flex-end` | [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) |
| `flex-wrap` | Wrapping | Decides whether items squeeze onto one line or break onto new lines when they run out of room. | `nowrap` · `wrap` · `wrap-reverse` | [CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-wrap) |
| `align-content` | Multi-line | Aligns the *lines themselves* on the cross axis when wrapping creates extra space. Only affects multi-line containers. | `stretch` · `center` · `space-around` | [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) |
| `gap` (row-gap / column-gap) | Gutter | Sets consistent spacing between items directly — no margin hacks needed. | any length or percentage, e.g. `gap: 1rem` | [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) |

```css
.container {
  display: flex;
  flex-direction: row;            /* main axis: left → right (default) */
  justify-content: space-between; /* spread items along the main axis  */
  align-items: center;            /* centre items on the cross axis    */
  flex-wrap: wrap;                /* allow wrapping onto new lines     */
  gap: 1rem;                      /* 1rem gutter between every item    */
}
```

## 3. Child item properties

These go on the individual elements *inside* the flex container — each child can have its own values.

| Property | Controls | What it does | Values / default | Docs |
| --- | --- | --- | --- | --- |
| `flex-grow` | Growing | How much of the leftover free space this item takes, as a share. `flex-grow: 2` grabs twice as much as `flex-grow: 1`. | number · default `0` (don't grow) | [CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-grow) |
| `flex-shrink` | Shrinking | How willingly this item shrinks when the container is too small for everyone. `0` means "never squash me". | number · default `1` (shrink equally) | [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink) |
| `flex-basis` | Base size | The item's starting size along the main axis, *before* any growing or shrinking is calculated. | `auto` · any length, e.g. `200px` | [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis) |
| `align-self` | Override | Lets one item ignore the container's `align-items` setting and align itself independently on the cross axis. | `auto` · `center` · `flex-start` · `flex-end` | [CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-self) |
| `order` | Sequence | Changes the visual display order of items without touching the HTML. Lower numbers appear first. | integer · default `0` | [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/order) |
| `flex` (shorthand) | Combined | Merges `flex-grow`, `flex-shrink` and `flex-basis` into one line — the way you'll usually write it. | `flex: grow shrink basis`, e.g. `flex: 1 1 auto` | [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) |

```css
.item {
  flex: 1 1 200px;  /* grow: 1 · shrink: 1 · basis: 200px */
  align-self: center;
  order: 2;         /* display after items with order 0 or 1 */
}
```

> **Shorthand cheat codes:** `flex: 1` = share space equally · `flex: auto` = size to content, then grow · `flex: none` = fixed size, never grow or shrink.

## 4. Live demos

Each demo below is a real flex container — Bootstrap's flex utility classes are just flexbox properties wearing a name tag. Resize the browser and watch the wrap demo reflow.

- **`justify-content: space-between`** — three boxed items pushed to the edges with all the leftover space between them.
- **`justify-content: center` + `gap`** — three items clustered in the middle with a small gutter between each.
- **`align-items: center` (cross-axis centring)** — a tall middle item sets the container height and the short items centre against it.
- **`flex-wrap: wrap`** — seven items that fill the row, then break onto a new line when the container gets narrow (resize the window!).
- **`flex-grow: 1` on the middle item only** — two fixed-size items pin the ends while the middle item absorbs all the leftover space.
- **`flex-direction: column`** — three items stacked top-to-bottom instead of side-by-side.

> **Bootstrap connection:** `d-flex`, `justify-content-between`, `align-items-center`, `flex-wrap`, `flex-grow-1`, `flex-column` — every Bootstrap flex utility maps one-to-one to a flexbox property on this page. Learn flexbox once, get Bootstrap's layout classes for free.

## 5. Practice tools & games

Reading a cheat sheet gets you 20% of the way — playing with real containers gets you the rest.

- **[Flexbox Froggy](https://flexboxfroggy.com/)** *(game)* — an interactive game — guide frogs to their lilypads by writing real flexbox alignment rules, level by level.
- **[Flexbox Zombies](https://gedd.ski/courses/flexbox-zombies)** *(course)* — a narrative-driven course that builds long-term muscle memory around alignment mechanics and item scaling.
- **[Malven's Visual Guide](https://flexbox.malven.co/)** *(interactive spec)* — a visual reference — toggle each property and watch a live container update. Great for "wait, which one was it again?" moments.
- **[Joy of Code Playground](https://joyofcode.xyz/)** *(lab)* — an interactive layout editor for staging element groupings and watching real-time wrapping, axis shifts and flex calculations.
