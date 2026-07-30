# Activity 2 · Marvin's Flower Delivery

Model answers for all 11 questions, as worked through together in Class 14. Case study: broken links on Marvin's online flower delivery site.

> **Reword, don't copy**
>
> These are **model answers** — they show the level of detail and the reasoning your submission needs. Submitting them word-for-word is plagiarism and easy to spot. Rewrite every answer in your own voice.
>
> **Paraphrasing helpers:** on a Mac, select text → right-click → *Writing Tools*. In Google Docs, use the built-in Gemini sidebar. Or paste an answer into Claude/Gemini and ask it to "reword this in plain, first-person English".

## Task 1 — Determine & Review Support Requirements

### Q1 · Diagnose the potential troubleshoot for Marvin. What is the problem?

Several essential links on Marvin's Flower Delivery website are not functioning. The main navigation menu items (*Home*, *Products*, *Contact*) and the footer legal links (*Terms of Service*, *Privacy Policy*) either lead nowhere or throw a "page not found" error, which stops customers from browsing the catalogue, placing orders, or making enquiries.

### Q2 · What is the cause and analysis of the problem?

The `href` attributes in the navbar and footer are pointing to placeholder values (`#`) or filenames that don't exist in the project folder — the `products.html` and `contact.html` files were never created, and there is no `404.html` fallback for the legal pages. Because the browser can't find the target files, the links either do nothing on click or return a broken page, which erodes customer trust and directly costs Marvin sales enquiries.

### Q3 · What is your client's point of contact?

Marvin's preferred point of contact is **email**, as stated in the audio recording attached to the case study. All updates, progress reports, and requests for sign-off will be sent to his listed business email address, with phone reserved as a backup for anything urgent.

### Q4 · Come up with at least 2 potential solutions to Marvin's problem.

**Solution 1 — Full link audit and page build (recommended):**

- Open every HTML file and list every `href` in the navbar and footer
- Repoint each one to the correct relative path (`./index.html`, `./products.html`, `./contact.html`)
- Build the missing `products.html` and `contact.html` pages using the same Bootstrap layout as the homepage so the styling stays consistent
- Create a friendly `404.html` page and point *Terms of Service* and *Privacy Policy* at it until Marvin supplies the real legal copy
- Retest every link on every page before handing back

**Solution 2 — Sitemap + automated link-checker fallback:**

- Draw the intended sitemap on paper first, then reconcile it against what actually exists in the folder
- Run an automated link checker (e.g. the W3C Link Checker, or a browser extension like *Check My Links*) across the deployed site to catch anything the manual audit missed
- Fix the flagged links and re-run the checker until it comes back clean

### Q5 · Write an email to Marvin, letting him know what you will be doing.

> **Subject:** Fixing the broken links on your Flower Delivery site — plan & timing
>
> Hi Marvin,
>
> Thanks so much for flagging this — I can see how the broken links would be frustrating, especially heading into a busy delivery week. I've had a good look through the site and I know exactly what's going on and how to fix it.
>
> In plain English: a few of the buttons in your top menu and at the bottom of the page are pointing to pages that either don't exist yet or have the wrong address, so the browser doesn't know where to send your customers. I'm going to rebuild the missing Products and Contact pages using the same styling as your homepage, add a friendly "page not found" page for the Terms and Privacy links, and repoint every button to the right place. I'll test the whole site from top to bottom before I send it back.
>
> I'll aim to have the updated files back to you within 48 hours. If anything looks off once you have a click around, just email me and I'll turn it around the same day.
>
> Talk soon,
> Tim
> *Tim's EQC Minions · ICT Support*

### Q6 · SLA — action and escalation procedures for supporting clients with ICT issues.

Reviewing Marvin's Service Level Agreement, the key action and escalation points are:

- **Acknowledgement:** log the ticket and acknowledge receipt to the client within 1 business hour
- **Triage:** classify the issue by *priority* (Critical / High / Medium / Low) — broken navigation on a live sales site is High
- **Response times:** High-priority tickets get a first response within 4 business hours and a resolution target of 2 business days
- **Communication cadence:** written status updates to the client at least once per business day until the ticket is resolved
- **Escalation path:** if the issue isn't resolved within the SLA window, escalate to the senior technician, then to the account manager — never let the deadline pass silently
- **Closure:** obtain written client sign-off before marking the ticket closed, and archive the fix notes in the client's support record

## Task 2 — Resolving the Issues

### Q7 · Marvin — Activities performed.

- Cloned the client's project folder locally and opened it in VS Code with Live Server
- Ran a full link audit — logged every broken `href` across `index.html`, and the missing target files
- Rewrote the navbar links on every page to point at the correct relative paths (`./index.html`, `./products.html`, `./contact.html`)
- Built the missing **products.html** page — a Bootstrap card grid with 9 products (Rose Bouquet, Lily Arrangement, Sunflower Vase, Mixed Light, Red Rose Bunch, Mixed Dark, Roses, Tulips, Random Bunch) matching the homepage styling
- Built the missing **contact.html** page — Bootstrap form with Name, Email and Message fields, and a Submit button
- Built a friendly **404.html** page with "Back to Home" and "Browse Products" CTAs, and repointed the footer's *Terms of Service* and *Privacy Policy* links to it as a temporary placeholder
- Added `alt` text to every product image for accessibility
- Retested every link on every page in Chrome, then ran WAVE for a quick accessibility sanity check
- Zipped the corrected project and returned it to Marvin with a summary email

### Q8 · Resolution outcome — were you able to resolve Marvin's problem?

Yes. Every link in the navbar and footer now resolves to a real, styled page. The Products page displays the full flower catalogue, the Contact page gives customers a working enquiry form, and the placeholder legal links fail gracefully to a branded 404 page instead of a broken URL. Marvin's customers can now browse, enquire, and order without hitting a dead end.

## Task 3 — Evaluate & Gather Feedback

### Q9 · What improvements could you implement for future support services?

- **Automated link-checking** — schedule a weekly W3C Link Checker run on every client site so broken links are caught before customers report them
- **QA checklist before handover** — click-test every navbar and footer link, run WAVE for accessibility, and validate HTML on every page as a standing step
- **Standing 404 template** — keep a branded 404 page in the project starter kit so no client ever ships without one
- **Sitemap sign-off** — get the client to confirm the intended page list at project start, so missing pages get caught on day 1, not month 3
- **Client-facing status portal** — a shared Trello or Notion board so clients can see progress without needing to email for updates
- **Post-fix follow-up at 7 and 30 days** — proactively check the fix is holding up and gather feedback while it's fresh

### Q10 · Write an email to Marvin checking in and requesting feedback.

> **Subject:** Checking in — how's the Flower Delivery site running?
>
> Hi Marvin,
>
> Hope you've had a great week and that the flowers have been flying out the door! I wanted to check in now that you've had a chance to click around the updated site.
>
> Are all the menu links and footer links working the way you'd expect on your end? Any pages where the styling looks off, or any wording on the new Products, Contact or 404 pages you'd like tweaked? I'd also love to hear whether the process itself felt smooth — anything you'd like me to do differently on the next ticket is genuinely useful to know.
>
> Reply whenever suits — no rush. And if you spot anything at all that looks broken, just send me a screenshot and I'll jump on it.
>
> Thanks Marvin,
> Tim
> *Tim's EQC Minions · ICT Support*

### Q11 · Upload your adjusted website.

The corrected project folder is zipped and uploaded to the Study Hub assessment page. It contains five files:

- `index.html` — homepage with fixed navbar & footer links
- `products.html` — new Bootstrap card grid with the full catalogue
- `contact.html` — new enquiry form (Name / Email / Message / Submit)
- `404.html` — new branded "page not found" fallback
- `styles.css` — original stylesheet, untouched

The uploaded file is `Marvin HTML File - Tim and Duke - FINAL v1.zip` — the credited "Duke" was the AI pair that helped refactor the product card grid live in class.

## The lesson behind the activity

Broken links are the single most common — and cheapest — thing a small-business site gets wrong. Every dead link is a customer who was *trying* to buy something. A 10-minute link audit is often the highest-value ICT support you'll ever deliver.
