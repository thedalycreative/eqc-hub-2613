/* ============================================================
   THE iBONES · HUB SCRIPT
   Week and class numbers are computed from the real course
   dates, so nothing on the page needs manual updating between
   classes. Add a lesson's resources to LESSONS and it appears
   in the Lesson Log, accented by its subject.
   ============================================================ */

/* ---- Course schedule ---- */
const COURSE_START = new Date(2026, 5, 15, 17, 30); // Mon 15 Jun 2026 (month is 0-based)
const COURSE_WEEKS = 12;
const CLASS_START = { h: 17, m: 30 };
const CLASS_END = { h: 20, m: 30 };

/* ---- Subjects ----
   s1 = Subject 1 · Working with Clients in the Industry
        (concepts, ICT needs, client problems, leading a team) — warm red
   s2 = Subject 2 · Front End Web Development
        (HTML, CSS, Bootstrap, the builds) — cool blue                  */
const SUBJECTS = {
  s1: { label: 'Subject 1', name: 'Clients & Concepts', color: 'var(--s1)', soft: 'var(--s1-soft)' },
  s2: { label: 'Subject 2', name: 'Front End Web Dev', color: 'var(--s2)', soft: 'var(--s2-soft)' },
};

/* ---- Lesson log ----
   Every class, newest rendered first. `subject` drives the colour.
   `topics` are the bullets, `links` are the resources for that class.  */
const LESSONS = [
  {
    cls: 1, date: '2026-06-15', subject: 's2',
    title: 'Introduction', sub: 'Setup & browser mechanics',
    focus: 'Meet the trainer, tour the classroom platforms, install VS Code, open your first HTML file.',
    topics: [
      'What the web actually is (browser → HTML → screen)',
      'Install VS Code + the Live Server extension',
      'Class platforms: StudyPass, StudyHub, Zoom, attendance form',
      'Say hi in the GitHub org',
    ],
    links: [
      { label: 'VS Code', href: 'https://code.visualstudio.com' },
      { label: 'Live Server', href: 'https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer' },
    ],
  },
  {
    cls: 2, date: '2026-06-17', subject: 's2',
    title: 'Basic HTML', sub: 'Tags, structure, links, images',
    focus: 'The HTML boilerplate, semantic tags, images and links.',
    topics: [
      'Boilerplate: <code>&lt;!doctype&gt;</code> → <code>&lt;html&gt;</code> → <code>&lt;head&gt;</code> / <code>&lt;body&gt;</code>',
      'Headings, paragraphs, lists, links, images',
      'Live Server workflow — save, watch it reload',
    ],
    links: [
      { label: 'HTML Tags Cheat Sheet', href: 'assets/cheatsheets/cheatsheet-htmltags.html' },
      { label: 'MDN HTML Guide', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    ],
  },
  {
    cls: 3, date: '2026-06-22', subject: 's2',
    title: 'Inline CSS', sub: 'Colours, fonts, the box model',
    focus: 'A first taste of CSS, written directly inside HTML tags.',
    topics: [
      'The <code>style=""</code> attribute',
      'Colours: hex, rgb, named colours',
      'The box model: content · padding · border · margin',
      'Google Fonts intro',
    ],
    links: [{ label: 'Google Fonts', href: 'https://fonts.google.com' }],
  },
  {
    cls: 4, date: '2026-06-24', subject: 's2',
    title: 'External stylesheets', sub: 'Classes, IDs, specificity',
    focus: 'Move CSS out of your HTML and into a proper <code>style.css</code>.',
    topics: [
      'Linking a stylesheet with <code>&lt;link&gt;</code>',
      'Selectors: element vs class vs ID',
      'Why specificity matters (and the class-first rule)',
      'Chrome DevTools: inspecting styles',
    ],
    links: [{ label: 'MDN CSS Selectors', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors' }],
  },
  {
    cls: 5, date: '2026-06-29', subject: 's1',
    title: 'Originate & develop concepts', sub: 'Client briefs',
    focus: 'Turning a rough client brief into a real concept.',
    topics: [
      'Reading and questioning a brief',
      'Moodboards + colour palettes (Coolors)',
      'Sketching a first wireframe on paper / Excalidraw',
    ],
    links: [
      { label: 'Brand Wheel Tool', href: 'assets/interactive/interactive-brandwheel.html' },
      { label: 'Coolors', href: 'https://coolors.co' },
      { label: 'Excalidraw', href: 'https://excalidraw.com' },
    ],
  },
  {
    cls: 6, date: '2026-07-01', subject: 's2',
    title: 'Tables & icons', sub: 'Font Awesome',
    focus: 'When to use tables (data, not layout) and how to add icons.',
    topics: [
      'Semantic tables: <code>thead</code> / <code>tbody</code> / <code>tr</code> / <code>td</code>',
      'Font Awesome via CDN',
      'Bootstrap Icons as a lighter alternative',
    ],
    links: [
      { label: 'Font Awesome', href: 'https://fontawesome.com' },
      { label: 'Bootstrap Icons', href: 'https://icons.getbootstrap.com' },
    ],
  },
  {
    cls: 7, date: '2026-07-06', subject: 's2',
    title: 'Planning, tools & folder structure', sub: 'The dev kit',
    focus: 'The kit every front-end dev keeps on their desk.',
    topics: [
      '<strong>Planning:</strong> Figma, Excalidraw, Google Fonts, cheat sheets',
      '<strong>Learning:</strong> W3Schools, Codecademy, MDN, dev.to',
      '<strong>Platforms:</strong> StudyPass, StudyHub, Zoom, attendance sheet',
      '<strong>Coding tools:</strong> GitHub, VS Code + extensions',
      'Folder-structure discipline',
    ],
    links: [
      { label: 'Folder Structure Cheat Sheet', href: 'assets/cheatsheets/cheatsheet-folderstructure.html' },
      { label: 'Figma', href: 'https://www.figma.com' },
    ],
  },
  {
    cls: 8, date: '2026-07-08', subject: 's1',
    title: 'ICT needs & Class Hub launch', sub: 'Activity 4 — Match ICT Needs',
    focus: 'Class Hub launch, a Menti quiz, and Activity 4 (Match ICT Needs) from Working with Clients in the Industry — all 18 questions worked through together.',
    topics: [
      'Class Hub tour — cheat sheets, games, YouTube channels, schedule',
      'Activity 4 case study: ABC Solutions — legacy HTML4/CSS2 site, gap analysis, HTML5/CSS3 + cloud migration proposal, ~$14,500 realistic costing',
      'Regulatory: Australian Privacy Principles + WCAG 2.1',
      'HTML4 → HTML5 migration: an AI agent can translate legacy code — no full rebuild needed',
      'Cohort identity locked in',
    ],
    note: '<strong>Reword, don’t copy:</strong> paraphrase model answers in your own voice.',
    links: [{ label: 'Activity 4 — Model Answers', href: 'assets/cheatsheets/cheatsheet-activity4-ictneeds.html' }],
  },
  {
    cls: 9, date: '2026-07-13', subject: 's2',
    title: 'Accessibility — POUR & WCAG 2.2', sub: 'QA checklist · MC catch-up',
    focus: 'Web accessibility as the core lesson — the POUR framework against WCAG 2.2 — plus the QA checklist walkthrough and multiple-choice catch-up time.',
    topics: [
      '<strong>POUR:</strong> Perceivable · Operable · Understandable · Robust',
      '1 in 6 people globally live with significant disability — permanent, temporary or situational',
      'Australian law: Disability Discrimination Act 1992, Level AA compliance',
      'Empathy demos: tab-only navigation, focus indicators, colour-blind and low-vision simulations',
      'AI can draft alt text; iconography helps dyslexic and visually-overstimulated users',
      'Assignment structure confirmed: two Bootstrap builds — Clone a Website and Original Website',
    ],
    links: [
      { label: 'Accessibility Cheat Sheet', href: 'assets/cheatsheets/cheatsheet-accessibility.html' },
      { label: 'QA Checklist', href: 'assets/cheatsheets/cheatsheet-qachecklist.html' },
      { label: 'WAVE', href: 'https://wave.webaim.org' },
    ],
  },
  {
    cls: 10, date: '2026-07-15', subject: 's2',
    title: 'Flexbox — containers & items', sub: 'The missed step · Froggy night',
    focus: 'Plan change! Before we clone anything there was a step we missed — Flexbox and containers. Full Flexbox lesson, three hands-on exercises, and a group playthrough of Flexbox Froggy.',
    topics: [
      'Flex container vs flex items; main axis vs cross axis',
      '<code>justify-content</code>: flex-start / center / flex-end / space-between / space-around / space-evenly',
      '<code>align-items</code> vs <code>align-content</code> — align-content only matters when items wrap',
      'The classic "center a div": <code>display:flex</code> + <code>justify-content:center</code> + <code>align-items:center</code> + <code>height:100vh</code>',
      '<code>flex-direction</code>, <code>flex-wrap</code> + <code>gap</code>, <code>flex-grow</code> / <code>flex-shrink</code>, shorthand <code>flex: 1</code>',
      'Three exercises: center a div · navbar · responsive card row',
      'The finale bug: one missing semicolon — the most common coding mistake there is',
    ],
    note: '<strong>Homework:</strong> the four multiple-choice sets on the Study Hub — <em>Develop complex page layouts</em> and <em>Develop complex cascading style sheets</em>.',
    links: [
      { label: 'Flexbox starter (GitHub)', href: 'https://github.com/thedalycreative/flexbox-exercise' },
      { label: 'Flexbox Cheat Sheet', href: 'assets/cheatsheets/cheatsheet-flexbox.html' },
      { label: 'CSS-Tricks Flexbox Guide', href: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
      { label: 'MDN Flexbox', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox' },
      { label: 'Flexbox Froggy', href: 'https://flexboxfroggy.com' },
    ],
  },
  {
    cls: 11, date: '2026-07-20', subject: 's2',
    title: 'Clone build — Forbidden Forest', sub: 'S02-A01 begins · live build',
    focus: 'The clone got the green light — we’re rebuilding the Harry Potter: A Forbidden Forest Experience site on Bootstrap 5. Tim built it live in class; all the code is on GitHub to pull apart and reuse.',
    topics: [
      '<strong>Capturing the target:</strong> save the live page from Chrome as "Webpage, Complete"',
      '<strong>Asset discipline:</strong> every image and font organised into a numbered <code>assets/</code> tree',
      '<strong>Sampling the brand:</strong> ice <code>#a3e6ef</code> · gold <code>#bd9e63</code> · parchment <code>#e5dbc1</code> on near-black navy',
      '<strong>Bootstrap rebuild:</strong> fixed navbar + dropdown, hero video-over-poster stack, starfield parallax, <code>row-cols-*</code> grids, press carousel, treeline footer',
      '<strong>The showpiece:</strong> pure-CSS fireflies — <code>@keyframes</code> drift + flash, zero JavaScript',
      'Rules of the build: CDN only · no inline styles · alt text on everything',
    ],
    note: '<strong>Note:</strong> the original imagery and branding belong to Warner Bros. / Fever — this rebuild is for private practice only. Don’t publish your copy.',
    links: [
      { label: 'Class repo: S02-A01-BootstrapClone', href: 'https://github.com/thedalycreative/S02-A01-BootstrapClone' },
      { label: 'Bootstrap Cheat Sheet', href: 'assets/cheatsheets/cheatsheet-bootstrap.html' },
      { label: 'Bootstrap 5 Docs', href: 'https://getbootstrap.com/docs/5.3/' },
    ],
  },
  {
    cls: 12, date: '2026-07-22', subject: 's2',
    title: 'Clone build continues', sub: 'Cards, carousel, footer',
    focus: 'Work through the clone’s component sections yourself, with the class repo as your reference.',
    topics: [
      'City-tile grid: <code>row-cols-2 → md-3 → xl-5</code> responsive stacking',
      'Press carousel — the assignment’s one piece of JavaScript, handled by Bootstrap’s CDN bundle',
      'Treeline footer: logo → partners → socials → links → legal bar',
      'Embedding media where it fits (YouTube / Google Maps)',
    ],
    links: [
      { label: 'Class repo', href: 'https://github.com/thedalycreative/S02-A01-BootstrapClone' },
      { label: 'Bootstrap Cheat Sheet', href: 'assets/cheatsheets/cheatsheet-bootstrap.html' },
    ],
  },
  {
    cls: 13, date: '2026-07-27', subject: 's2',
    title: 'Polish the clone', sub: 'QA pass',
    focus: 'Ship-quality polish on your clone — the difference between "works" and "professional".',
    topics: [
      'Alt text on every image',
      'Consistent spacing',
      'Test on a phone (real device, not just DevTools)',
      'Run the QA checklist end to end',
    ],
    links: [{ label: 'QA Checklist', href: 'assets/cheatsheets/cheatsheet-qachecklist.html' }],
  },
  {
    cls: 14, date: '2026-07-29', subject: 's1',
    title: 'Managing client problems', sub: 'Scope & feedback',
    focus: 'The soft skills that keep you employed.',
    topics: [
      'Scope creep — how to spot it, how to say no',
      'Turning "make it pop" into a specific brief',
      'Writing a client update email',
    ],
    links: [],
  },
  {
    cls: 15, date: '2026-08-03', subject: 's2',
    title: 'Your website', sub: 'Concept & folder structure',
    focus: 'Kick off <em>your</em> portfolio website.',
    topics: ['Pick a real subject (yourself, or a real client)', 'Sitemap on paper', 'Set up a clean folder + repo'],
    links: [{ label: 'Folder Structure Cheat Sheet', href: 'assets/cheatsheets/cheatsheet-folderstructure.html' }],
  },
  {
    cls: 16, date: '2026-08-05', subject: 's2',
    title: 'Wireframes & AI tools', sub: 'Excalidraw, Figma, Claude',
    focus: 'From sketch to clickable prototype.',
    topics: ['Excalidraw for quick wireframes', 'Figma for higher-fidelity mockups', 'Using Claude / Gemini as a coding pair — prompts that work'],
    links: [
      { label: 'Excalidraw', href: 'https://excalidraw.com' },
      { label: 'Figma', href: 'https://www.figma.com' },
      { label: 'Claude', href: 'https://claude.ai' },
    ],
  },
  {
    cls: 17, date: '2026-08-10', subject: 's2',
    title: 'Prototype & HTML skeleton', sub: 'Structure first',
    focus: 'Translate the Figma into an empty HTML shell.',
    topics: ['Section-by-section HTML markup', 'Placeholder content everywhere', 'Don’t style yet — get the structure right first'],
    links: [],
  },
  {
    cls: 18, date: '2026-08-12', subject: 's2',
    title: 'Build', sub: 'Every page, responsive check',
    focus: 'Fill in every page. Test at every breakpoint.',
    topics: ['Home, About, Services, Contact — all live', 'Bootstrap breakpoint check: xs / sm / md / lg / xl', 'Real image assets (Unsplash / Pexels)'],
    links: [
      { label: 'Unsplash', href: 'https://unsplash.com' },
      { label: 'Pexels', href: 'https://pexels.com' },
    ],
  },
  {
    cls: 19, date: '2026-08-17', subject: 's1',
    title: 'Lead & facilitate', sub: 'Team assessment',
    focus: 'Group work — you present, you critique, you improve.',
    topics: ['Give a 3-minute walkthrough of your build', 'Peer feedback with rubric', 'Prioritise the top 3 fixes to apply'],
    links: [],
  },
  {
    cls: 20, date: '2026-08-19', subject: 's2',
    title: 'Build time', sub: 'One-on-ones',
    focus: 'Head-down build. Trainer available for 15-minute slots.',
    topics: ['Fix your top-3 peer-review issues', 'Book a 1:1 slot if you’re stuck'],
    links: [],
  },
  {
    cls: 21, date: '2026-08-24', subject: 's2',
    title: 'Complete first-pass builds', sub: 'Everything renders',
    focus: 'Every page should now render, top to bottom.',
    topics: ['No missing content, no broken links', 'Working nav on every page', 'Ready for validation next class'],
    links: [],
  },
  {
    cls: 22, date: '2026-08-26', subject: 's2',
    title: 'Review & test', sub: 'Accessibility audit',
    focus: 'Prove your site is production-ready.',
    topics: ['W3C HTML/CSS validator', 'WAVE accessibility scan', 'PageSpeed Insights on mobile + desktop'],
    links: [
      { label: 'W3C Validator', href: 'https://validator.w3.org' },
      { label: 'WAVE', href: 'https://wave.webaim.org' },
      { label: 'PageSpeed Insights', href: 'https://pagespeed.web.dev/' },
    ],
  },
  {
    cls: 23, date: '2026-08-31', subject: 's2',
    title: 'Final polish', sub: 'Submission prep',
    focus: 'The last-mile details that separate pass from distinction.',
    topics: ['Favicon, meta description, OpenGraph tags', 'Consistent typography scale', 'Zip & submit as per assignment brief'],
    links: [{ label: 'QA Checklist', href: 'assets/cheatsheets/cheatsheet-qachecklist.html' }],
  },
  {
    cls: 24, date: '2026-09-02', subject: 's2',
    title: 'Submit & show and tell', sub: 'Final presentations',
    focus: 'Final presentations. Portfolio-ready. Course complete.',
    topics: ['5-minute demo of your website', 'Peer voting for "best of intake"', 'Next steps & continuing study path'],
    links: [],
  },
];

/* ---- Date helpers ---- */
const DAY_MS = 24 * 60 * 60 * 1000;

function startOfDay(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

// Parse "YYYY-MM-DD" as local midnight (avoids UTC off-by-one bugs)
function parseLocalDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function courseWeek(now) {
  const days = Math.floor((startOfDay(now) - startOfDay(COURSE_START)) / DAY_MS);
  return Math.floor(days / 7) + 1; // week 1 starts on COURSE_START
}

function fmtDate(d) {
  return d.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
}

function lessonStart(lesson) {
  const d = parseLocalDate(lesson.date);
  d.setHours(CLASS_START.h, CLASS_START.m);
  return d;
}

function lessonEnd(lesson) {
  const d = parseLocalDate(lesson.date);
  d.setHours(CLASS_END.h, CLASS_END.m);
  return d;
}

/* ---- Hero pills + This Week tiles ---- */
function renderSchedule() {
  const now = new Date();
  const week = courseWeek(now);
  const inCourse = week >= 1 && week <= COURSE_WEEKS;
  const weekLabel = inCourse ? 'Week ' + week + ' / ' + COURSE_WEEKS : null;

  // "Now" pill
  const nowFmt = now.toLocaleString('en-AU', {
    weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
  });
  document.getElementById('pill-now').textContent =
    'Now · ' + nowFmt + (weekLabel ? ' · ' + weekLabel : '');

  // Next (or live) class pill — driven by the real lesson dates
  const pillNext = document.getElementById('pill-next');
  const live = LESSONS.find((l) => now >= lessonStart(l) && now <= lessonEnd(l));
  const next = LESSONS.find((l) => lessonStart(l) > now);

  if (live) {
    pillNext.innerHTML =
      '<i class="bi bi-broadcast"></i> Class ' + live.cls + ' is live now — jump into Zoom';
  } else if (next) {
    const f = lessonStart(next).toLocaleString('en-AU', {
      weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
    });
    pillNext.textContent = 'Next class · ' + f + ' · Class ' + next.cls + ' · ' + next.title;
  } else {
    pillNext.textContent = 'Course complete — nice work, iBones';
  }

  // Week banner
  const banner = document.getElementById('week-banner');
  banner.textContent = inCourse
    ? weekLabel
    : week < 1 ? 'Starts ' + fmtDate(startOfDay(COURSE_START)) : 'Course complete';

  // This week's two class tiles
  const grid = document.getElementById('this-week-grid');
  const thisWeek = inCourse
    ? LESSONS.filter((l) => l.cls === 2 * week - 1 || l.cls === 2 * week)
    : [];

  if (thisWeek.length === 0) {
    grid.innerHTML =
      '<div class="ib-feed-tile" style="grid-column:1/-1">' +
      '<i class="bi bi-calendar-week"></i>' +
      (week < 1 ? 'The course starts ' + fmtDate(startOfDay(COURSE_START)) + '.'
                : 'All 24 classes are done — the full log is below.') +
      '</div>';
    return;
  }

  grid.innerHTML = thisWeek.map(function (l) {
    const s = SUBJECTS[l.subject];
    const day = parseLocalDate(l.date).toLocaleDateString('en-AU', { weekday: 'long' });
    const done = new Date() > lessonEnd(l);
    return (
      '<article class="ib-this-week-tile ib-' + l.subject + '">' +
        '<div class="ib-tile-bar"></div>' +
        '<div class="ib-tile-body">' +
          '<div class="ib-tile-top">' +
            '<span class="ib-tile-class">' +
              '<span class="ib-tile-num">' + l.cls + '</span>' +
              '<span class="ib-tile-word">Class</span>' +
            '</span>' +
            '<span class="ib-pill ib-pill-' + l.subject + '">' + s.label + '</span>' +
          '</div>' +
          '<span class="ib-tile-topic">' + l.title + '</span>' +
          '<span class="ib-tile-date">' + day + ' · ' + fmtDate(parseLocalDate(l.date)) + ' · 17:30–20:30</span>' +
          '<p class="ib-tile-note">' +
            (done
              ? 'Class complete — <a href="#lessons">resources in the Lesson Log ↓</a>'
              : l.sub + ' · <a href="#lessons">see the Lesson Log ↓</a>') +
          '</p>' +
        '</div>' +
      '</article>'
    );
  }).join('');
}

/* ---- Lesson log ---- */
function renderLessons() {
  const list = document.getElementById('lesson-list');
  const now = new Date();

  // Newest first. Upcoming classes still list, marked as upcoming.
  const lessons = [...LESSONS].sort((a, b) => b.cls - a.cls);

  if (lessons.length === 0) {
    list.innerHTML =
      '<div class="ib-feed-tile"><i class="bi bi-journal-text"></i>' +
      'Lesson summaries are on their way — resources from each class will land here.</div>';
    return;
  }

  list.innerHTML = lessons.map(function (l) {
    const s = SUBJECTS[l.subject];
    const done = now > lessonEnd(l);
    // The most recent completed class opens by default
    const topics = (l.topics || []).map(function (t) { return '<li>' + t + '</li>'; }).join('');
    const links = (l.links || []).map(function (lk) {
      const ext = /^https?:\/\//.test(lk.href);
      return '<a href="' + lk.href + '"' + (ext ? ' target="_blank" rel="noopener"' : ' target="_blank"') + '>' +
        '<i class="bi bi-link-45deg"></i>' + lk.label + '</a>';
    }).join('');

    return (
      '<details class="ib-lesson ib-' + l.subject + '" ' +
        'style="--subject:' + s.color + ';--subject-soft:' + s.soft + '">' +
        '<summary>' +
          '<div class="ib-lesson-header">' +
            '<span class="ib-lesson-id">' +
              '<span class="ib-lesson-num">' + l.cls + '</span>' +
              '<span>' +
                '<span class="ib-lesson-title">' + l.title + '</span><br>' +
                '<span class="ib-lesson-sub">' + l.sub + '</span> · ' +
                '<span class="ib-lesson-date">' + fmtDate(parseLocalDate(l.date)) + '</span>' +
              '</span>' +
            '</span>' +
            '<span class="ib-lesson-meta">' +
              '<span class="ib-pill ib-pill-' + l.subject + '">' + s.label + '</span>' +
              (done
                ? '<i class="bi bi-check-circle-fill ib-lesson-done" title="Class complete"></i>'
                : '<span class="ib-lesson-upcoming">Upcoming</span>') +
              '<i class="bi bi-chevron-down ib-lesson-chevron"></i>' +
            '</span>' +
          '</div>' +
        '</summary>' +
        '<div class="ib-lesson-body">' +
          (l.focus ? '<p><strong>Focus:</strong> ' + l.focus + '</p>' : '') +
          (topics ? '<ul class="ib-lesson-topics">' + topics + '</ul>' : '') +
          (l.note ? '<p>' + l.note + '</p>' : '') +
          (links ? '<div class="ib-lesson-links">' + links + '</div>' : '') +
        '</div>' +
      '</details>'
    );
  }).join('');

  // Open the most recently completed class so the log lands on something useful
  const latest = lessons.find(function (l) { return now > lessonEnd(l); });
  if (latest) {
    const el = list.querySelector('.ib-lesson');
    const idx = lessons.indexOf(latest);
    const nodes = list.querySelectorAll('.ib-lesson');
    if (nodes[idx]) nodes[idx].open = true;
    else if (el) el.open = true;
  }
}

/* ---- Student link feed (saved in this browser only) ---- */
function initFeed() {
  const input = document.getElementById('feed-input');
  const button = document.getElementById('feed-post');
  const list = document.getElementById('feed-list');

  let items;
  try { items = JSON.parse(localStorage.getItem('ib-feed') || '[]'); }
  catch (e) { items = []; }

  const esc = function (s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };

  // Older posts fade a little (floor at 0.35 after ~3 days)
  const age = function (ts) {
    const h = (Date.now() - ts) / 3600000;
    return Math.max(0.35, 1 - h / 72);
  };

  const render = function () {
    if (items.length === 0) {
      list.innerHTML = '<div class="ib-feed-empty">No posts yet — be the first to share something.</div>';
      return;
    }
    list.innerHTML = items.map(function (it) {
      const body = /^https?:\/\//.test(it.text)
        ? '<a href="' + esc(it.text) + '" target="_blank" rel="noopener">' + esc(it.text) + '</a>'
        : '<span>' + esc(it.text) + '</span>';
      const ts = new Date(it.ts).toLocaleString('en-AU', {
        day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
      });
      return '<div class="ib-feed-item" style="opacity:' + age(it.ts).toFixed(2) + '">' +
        body + '<span class="ib-feed-ts">' + ts + '</span></div>';
    }).join('');
  };

  const submit = function () {
    const val = input.value.trim();
    if (!val) return;
    items = [{ text: val, ts: Date.now() }].concat(items).slice(0, 20);
    localStorage.setItem('ib-feed', JSON.stringify(items));
    input.value = '';
    render();
  };

  button.addEventListener('click', submit);
  input.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });
  render();
}

/* ---- Masthead: hide on scroll down, show on scroll up ---- */
function initMasthead() {
  const masthead = document.getElementById('masthead');
  let lastY = 0;
  window.addEventListener('scroll', function () {
    const y = window.scrollY;
    masthead.classList.toggle('ib-hidden', y > 100 && y > lastY);
    lastY = y;
  }, { passive: true });
}

/* ---- Boot ---- */
renderSchedule();
setInterval(renderSchedule, 30000);
renderLessons();
initFeed();
initMasthead();
