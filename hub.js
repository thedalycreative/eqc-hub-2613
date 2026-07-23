/* ============================================================================
   INTAKE 26.13 · SCHEDULE + STATUS
   ============================================================================
   TO ADD OR EDIT A CLASS:
     - Change an entry in the CLASSES array below.
     - `date` is ISO (YYYY-MM-DD), parsed as local midnight.
     - `subject` is 's1' (Clients & Concepts) or 's2' (Front End Web Dev).
       That one value colours the whole tile and its modal.
     - `topics` are the bullets; `links` are that class's resources.

   LOCKING RULE:
     A class becomes clickable at 00:00 LOCAL TIME the day AFTER it runs.
     e.g. a class on Wed 8 Jul 2026 → clickable from Thu 9 Jul 2026 00:00.
   ============================================================================ */

/* ---- The two subjects. Colours match the legend and style.css. ---- */
const SUBJECTS = {
	s1: { label: 'Subject 1', name: 'Clients & Concepts', color: 'var(--s1)', soft: 'var(--s1-soft)' },
	s2: { label: 'Subject 2', name: 'Front End Web Dev', color: 'var(--s2)', soft: 'var(--s2-soft)' },
};

const CLASS_START = { h: 17, m: 30 };
const CLASS_END = { h: 20, m: 30 };

/* ---- 24 classes, Mon & Wed, starting Mon 15 Jun 2026 ---- */
const CLASSES = [
	{
		num: 1, date: '2026-06-15', subject: 's2',
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
		num: 2, date: '2026-06-17', subject: 's2',
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
		num: 3, date: '2026-06-22', subject: 's2',
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
		num: 4, date: '2026-06-24', subject: 's2',
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
		num: 5, date: '2026-06-29', subject: 's1',
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
		num: 6, date: '2026-07-01', subject: 's2',
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
		num: 7, date: '2026-07-06', subject: 's2',
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
		num: 8, date: '2026-07-08', subject: 's1',
		title: 'ICT needs & Class Hub launch', sub: 'Activity 4 — Match ICT Needs',
		focus: 'Class Hub launch, a Menti quiz, and Activity 4 (Match ICT Needs) from Working with Clients in the Industry — all 18 questions worked through together.',
		topics: [
			'Class Hub tour — cheat sheets, games, YouTube channels, schedule',
			'Activity 4 case study: ABC Solutions — legacy HTML4/CSS2 site, gap analysis, HTML5/CSS3 + cloud migration proposal, ~$14,500 realistic costing',
			'Regulatory: Australian Privacy Principles + WCAG 2.1',
			'HTML4 → HTML5 migration: an AI agent can translate legacy code — no full rebuild needed',
			'Cohort identity locked in',
		],
		note: '<strong>Reword, don’t copy:</strong> paraphrase the model answers in your own voice.',
		links: [{ label: 'Activity 4 — Model Answers', href: 'assets/cheatsheets/cheatsheet-activity4-ictneeds.html' }],
	},
	{
		num: 9, date: '2026-07-13', subject: 's2',
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
		num: 10, date: '2026-07-15', subject: 's2',
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
		num: 11, date: '2026-07-20', subject: 's2',
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
		num: 12, date: '2026-07-22', subject: 's2',
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
		num: 13, date: '2026-07-27', subject: 's2',
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
		num: 14, date: '2026-07-29', subject: 's1',
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
		num: 15, date: '2026-08-03', subject: 's2',
		title: 'Your website', sub: 'Concept & folder structure',
		focus: 'Kick off <em>your</em> portfolio website.',
		topics: ['Pick a real subject (yourself, or a real client)', 'Sitemap on paper', 'Set up a clean folder + repo'],
		links: [{ label: 'Folder Structure Cheat Sheet', href: 'assets/cheatsheets/cheatsheet-folderstructure.html' }],
	},
	{
		num: 16, date: '2026-08-05', subject: 's2',
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
		num: 17, date: '2026-08-10', subject: 's2',
		title: 'Prototype & HTML skeleton', sub: 'Structure first',
		focus: 'Translate the Figma into an empty HTML shell.',
		topics: ['Section-by-section HTML markup', 'Placeholder content everywhere', 'Don’t style yet — get the structure right first'],
		links: [],
	},
	{
		num: 18, date: '2026-08-12', subject: 's2',
		title: 'Build', sub: 'Every page, responsive check',
		focus: 'Fill in every page. Test at every breakpoint.',
		topics: ['Home, About, Services, Contact — all live', 'Bootstrap breakpoint check: xs / sm / md / lg / xl', 'Real image assets (Unsplash / Pexels)'],
		links: [
			{ label: 'Unsplash', href: 'https://unsplash.com' },
			{ label: 'Pexels', href: 'https://pexels.com' },
		],
	},
	{
		num: 19, date: '2026-08-17', subject: 's1',
		title: 'Lead & facilitate', sub: 'Team assessment',
		focus: 'Group work — you present, you critique, you improve.',
		topics: ['Give a 3-minute walkthrough of your build', 'Peer feedback with rubric', 'Prioritise the top 3 fixes to apply'],
		links: [],
	},
	{
		num: 20, date: '2026-08-19', subject: 's2',
		title: 'Build time', sub: 'One-on-ones',
		focus: 'Head-down build. Trainer available for 15-minute slots.',
		topics: ['Fix your top-3 peer-review issues', 'Book a 1:1 slot if you’re stuck'],
		links: [],
	},
	{
		num: 21, date: '2026-08-24', subject: 's2',
		title: 'Complete first-pass builds', sub: 'Everything renders',
		focus: 'Every page should now render, top to bottom.',
		topics: ['No missing content, no broken links', 'Working nav on every page', 'Ready for validation next class'],
		links: [],
	},
	{
		num: 22, date: '2026-08-26', subject: 's2',
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
		num: 23, date: '2026-08-31', subject: 's2',
		title: 'Final polish', sub: 'Submission prep',
		focus: 'The last-mile details that separate pass from distinction.',
		topics: ['Favicon, meta description, OpenGraph tags', 'Consistent typography scale', 'Zip & submit as per assignment brief'],
		links: [{ label: 'QA Checklist', href: 'assets/cheatsheets/cheatsheet-qachecklist.html' }],
	},
	{
		num: 24, date: '2026-09-02', subject: 's2',
		title: 'Submit & show and tell', sub: 'Final presentations',
		focus: 'Final presentations. Portfolio-ready. Course complete.',
		topics: ['5-minute demo of your website', 'Peer voting for "best of intake"', 'Next steps & continuing study path'],
		links: [],
	},
];

/* ----------------------------------------------------------------------------
   HELPERS
---------------------------------------------------------------------------- */

// Parse "YYYY-MM-DD" as local midnight (avoids UTC off-by-one bugs).
function parseLocalDate(iso) {
	const [y, m, d] = iso.split('-').map(Number);
	return new Date(y, m - 1, d);
}

// "Mon 15 Jun 2026"
function formatDate(d) {
	return d.toLocaleDateString('en-AU', {
		weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
	});
}

function classStart(c) {
	const d = parseLocalDate(c.date);
	d.setHours(CLASS_START.h, CLASS_START.m);
	return d;
}

function classEnd(c) {
	const d = parseLocalDate(c.date);
	d.setHours(CLASS_END.h, CLASS_END.m);
	return d;
}

// A class is "locked" until 00:00 the day AFTER it ran.
function isLocked(c, now) {
	const unlockAt = parseLocalDate(c.date);
	unlockAt.setDate(unlockAt.getDate() + 1);
	return now < unlockAt;
}

function isLive(c, now) {
	return now >= classStart(c) && now <= classEnd(c);
}

/* ----------------------------------------------------------------------------
   HERO STATUS — which week we're in, and what's next
---------------------------------------------------------------------------- */
function renderStatus() {
	const now = new Date();
	const first = parseLocalDate(CLASSES[0].date);
	const dayMs = 24 * 60 * 60 * 1000;
	const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const week = Math.floor(Math.round((startOfToday - first) / dayMs) / 7) + 1;

	const weekPill = document.getElementById('pillWeek');
	const nextPill = document.getElementById('pillNext');

	// Week pill
	const weekText = week < 1
		? 'Starts ' + formatDate(first)
		: week > 12 ? 'Course complete' : 'Week ' + week + ' of 12';
	weekPill.querySelector('span').textContent = weekText;

	// Next / live pill
	const live = CLASSES.find((c) => isLive(c, now));
	const next = CLASSES.find((c) => classStart(c) > now);

	if (live) {
		nextPill.classList.add('is-live');
		nextPill.querySelector('.bi').className = 'bi bi-broadcast';
		nextPill.querySelector('span').textContent =
			'Class ' + live.num + ' is on right now — ' + live.title;
	} else if (next) {
		nextPill.classList.remove('is-live');
		const when = classStart(next).toLocaleDateString('en-AU', {
			weekday: 'short', day: 'numeric', month: 'short',
		});
		nextPill.querySelector('span').textContent =
			'Next: Class ' + next.num + ' · ' + when + ' 5:30pm · ' + next.title;
	} else {
		nextPill.querySelector('span').textContent = 'All 24 classes done — nice work';
	}
}

/* ----------------------------------------------------------------------------
   SCHEDULE TILE GRID
---------------------------------------------------------------------------- */
function renderSchedule() {
	const grid = document.getElementById('classGrid');
	const now = new Date();
	const nextClass = CLASSES.find((c) => classStart(c) > now);

	CLASSES.forEach((c) => {
		const s = SUBJECTS[c.subject];
		const locked = isLocked(c, now);
		const live = isLive(c, now);
		const isNext = !live && nextClass && nextClass.num === c.num;

		// A flag in the corner tells you the class's state at a glance.
		let flag = '';
		if (live) flag = '<span class="tile-flag flag-live">On now</span>';
		else if (isNext) flag = '<span class="tile-flag flag-next">Next up</span>';
		else if (!locked) flag = '<span class="tile-flag flag-done">Done</span>';

		const col = document.createElement('div');
		col.className = 'col';
		col.innerHTML = `
			<button
				type="button"
				class="class-tile w-100 text-start p-3 border h-100 ${locked ? 'locked' : ''} ${isNext ? 'is-next' : ''}"
				style="--subject: ${s.color}; --subject-soft: ${s.soft}"
				${locked
					? 'disabled aria-disabled="true" title="Unlocks the morning after this class"'
					: 'data-bs-toggle="modal" data-bs-target="#classModal"'}
				data-class-num="${c.num}">
				<span class="d-flex align-items-start justify-content-between gap-2">
					<span class="class-num">${c.num}</span>
					${flag}
				</span>
				<span class="class-date d-block">${formatDate(parseLocalDate(c.date))}</span>
				<span class="class-title d-block">${c.title}</span>
				<span class="class-sub d-block">${locked ? 'Unlocks after class' : c.sub}</span>
				<span class="tile-chip mt-auto align-self-start">${s.label}</span>
			</button>`;
		grid.appendChild(col);
	});
}

/* ----------------------------------------------------------------------------
   MODAL — filled in from the tile you clicked
---------------------------------------------------------------------------- */
function initModal() {
	const modal = document.getElementById('classModal');
	if (!modal) return;

	modal.addEventListener('show.bs.modal', (event) => {
		const trigger = event.relatedTarget;
		if (!trigger) return;

		const num = Number(trigger.getAttribute('data-class-num'));
		const c = CLASSES.find((x) => x.num === num);
		if (!c) return;

		const s = SUBJECTS[c.subject];
		const content = document.getElementById('classModalContent');
		content.style.setProperty('--subject', s.color);
		content.style.setProperty('--subject-soft', s.soft);

		document.getElementById('classModalChip').textContent = s.label + ' · ' + s.name;
		document.getElementById('classModalLabel').textContent = 'Class ' + c.num + ' — ' + c.title;
		document.getElementById('classModalDate').textContent =
			formatDate(parseLocalDate(c.date)) + ' · 5:30–8:30pm';

		const topics = (c.topics || []).map((t) => `<li>${t}</li>`).join('');
		const links = (c.links || []).map((l) => {
			const ext = /^https?:\/\//.test(l.href);
			const rel = ext ? ' target="_blank" rel="noopener"' : ' target="_blank"';
			return `<a href="${l.href}"${rel}><i class="bi bi-link-45deg"></i>${l.label}</a>`;
		}).join('');

		document.getElementById('classModalBody').innerHTML =
			(c.focus ? `<p><strong>Focus:</strong> ${c.focus}</p>` : '') +
			(topics ? `<ul>${topics}</ul>` : '') +
			(c.note ? `<p class="mb-0">${c.note}</p>` : '') +
			(links ? `<div class="modal-links">${links}</div>` : '');
	});
}

/* ----------------------------------------------------------------------------
   RETURN TO TOP
---------------------------------------------------------------------------- */
function initBackToTop() {
	const btn = document.getElementById('backToTop');
	if (!btn) return;

	window.addEventListener('scroll', () => {
		btn.classList.toggle('show', window.scrollY > 400);
	}, { passive: true });

	btn.addEventListener('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
}

/* ---- Boot ---- */
renderStatus();
setInterval(renderStatus, 60000);
renderSchedule();
initModal();
initBackToTop();
