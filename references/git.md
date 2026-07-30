# Git & GitHub Cheat Sheet

Save your work, undo mistakes, and share code without emailing zip files.

## 1. What Git actually is

Save points for your code.

Think of a video game. You play for a while, then you **save**. If the next bit goes badly, you reload the save and try again. Git is that, for code.

- **Repository (repo)** — Your project folder, with Git watching it. One repo per website.
- **Commit** — One save point, with a note saying what you changed. You can always go back to one.
- **GitHub** — The website your repo gets backed up to, so it's safe and other people can see it.

> **Git ≠ GitHub.** Git is the program on your computer that takes the save points. GitHub is the website that stores them online. You can use Git without GitHub — but don't, because then your only copy lives on one laptop.

## 2. Install & set up

You do this once, then never think about it again.

### First: check what you already have

Open a terminal in VS Code (**Terminal → New Terminal**) and run both of these. You need *both* to answer with a version number.

```bash
git --version     # e.g. git version 2.54.0
gh --version      # e.g. gh version 2.95.0
```

If either says "not found" or "not recognised", install it below. These are two different programs — **git** is version control, **gh** is the GitHub command-line tool. Having one does not mean you have the other.

### Step 1 — Install whatever's missing

#### Windows

In PowerShell or the VS Code terminal:

```powershell
winget install --id Git.Git
winget install --id GitHub.cli
```

It may look frozen on "Starting package install" — it isn't, let it run. **Restart VS Code afterwards**, or the new commands won't be found.

#### Mac

Mac installs go through [Homebrew](https://brew.sh) — a package manager that wires your terminal up to developer tools. Install Homebrew first if you don't have it, then:

```bash
brew install git
brew install gh
```

#### Then sign in, on either platform

```bash
gh auth login
```

Follow the prompts — it opens a browser and gives you a code to paste.

### Shortcuts, if the terminal is fighting you

- **Ask the agent.** Open a new agent chat in VS Code and say "check whether git is installed, and install it if not". It will run the right commands for your machine and ask you to confirm. This works — half the class got unstuck this way.
- **Use [GitHub Desktop](https://desktop.github.com)** — it does everything on this page with buttons instead of commands.
- **Just download the ZIP.** On any repo, the green **Code** button has a "Download ZIP" option. No setup at all — you just can't push changes back.
- **On a work computer?** Installs are often blocked by your IT administrator. Use the ZIP route, or do the work on a personal machine.

### Useful VS Code extensions

Optional, but handy: **GitHub Actions**, **GitHub Pull Requests**, and **Git History**.

**Check the publisher before you install.** Search results are full of look-alikes — only install extensions actually published by GitHub or Microsoft.

### Step 2 — Tell Git who you are

Every save point gets stamped with your name. Open a terminal (in VS Code: **Terminal → New Terminal**) and run these two lines:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### Step 3 — Make a GitHub account

Sign up at [github.com/signup](https://github.com/signup). Use your real name — employers look at this. Use the same email you just put in the config.

## 3. The daily loop

Four commands. This is 95% of Git.

You do this every time you finish a chunk of work — roughly once or twice a class.

```bash
git status                    # 1. what have I changed?
git add .                     # 2. pick up all those changes
git commit -m "Add navbar"    # 3. take the save point
git push                      # 4. send it to GitHub
```

- **`git status`** — Lists what you've changed since the last save. Run it whenever you're unsure — it never changes anything, so it's always safe.
- **`git add .`** — Gathers up your changes ready to save. The `.` means "this whole folder".
- **`git commit -m "..."`** — Takes the save point. The message goes in the quotes — write what you did, not what you touched.
- **`git push`** — Uploads your save points to GitHub. Until you push, they only exist on your laptop.

### Getting the class repo onto your machine

1. Open the repo on GitHub and click the green **Code** button.
2. Pick the **GitHub CLI** tab and copy the line — it looks like `gh repo clone thedalycreative/S02-A01-BootstrapClone`.
3. In VS Code, open an *empty* folder, then **Terminal → New Terminal**.
4. Paste and run it. A folder appears with all the repo's files inside.

**Pushing back:** you push to *your own* repo, not the class one. You're taking the code, changing it, and publishing your version — create a blank repo on your account and attach your project to it.

### Name your main file `index.html`

Not `snail.html`, not `mysite.html`. Browsers and hosts look for `index.html` by default, and AI agents assume it too — an inventive filename is a reliable way to confuse both. Learned the hard way in Class 12.

### Writing a good commit message

**Do this**

- `Add contact form to about page`
- `Fix navbar overlapping on mobile`
- `Swap placeholder images for real ones`

**Not this**

- `update`
- `stuff`
- `asdfgh`

## 4. Command reference

Everything else you might need this course.

### Starting a project

| Command | What it does |
| --- | --- |
| `git clone <url>` | Download someone's repo to your machine. This is how you get the class repos. |
| `gh repo clone owner/name` | The same thing via the GitHub tool — shorter, and it uses your sign-in. |
| `git init` | Start watching the folder you're in. Only for brand-new projects. |
| `git remote -v` | Show which GitHub repo this folder is linked to. |

### Everyday work

| Command | What it does |
| --- | --- |
| `git status` | What have I changed? |
| `git add .` | Stage every change in this folder. |
| `git add index.html` | Stage just one file. |
| `git commit -m "msg"` | Take a save point. |
| `git push` | Upload save points to GitHub. |
| `git pull` | Download changes from GitHub. Run it before you start work. |
| `git log --oneline` | List your save points, newest first. |
| `git diff` | Show exactly what changed, line by line. |

### Branches (later weeks)

| Command | What it does |
| --- | --- |
| `git branch` | List branches. The `*` is where you are. |
| `git switch -c new-idea` | Make a branch and jump to it — try something risky without breaking your main copy. |
| `git switch main` | Go back to the main branch. |
| `git merge new-idea` | Bring the branch's work into where you are now. |

## 5. When it goes wrong

It will. Everyone's does. Here's the way out.

### "I broke a file and want it back"

Throw away your unsaved changes to one file:

```bash
git restore index.html
```

### "Wrong commit message"

Rewrite the last one — only if you haven't pushed yet:

```bash
git commit --amend -m "Better message"
```

### "I committed but shouldn't have"

Undo the commit, keep the work:

```bash
git reset --soft HEAD~1
```

### "push was rejected"

Someone changed GitHub since you last pulled. Get their work first:

```bash
git pull
git push
```

> **The nuclear option.** If a repo is truly tangled and you've pushed your work: copy your files somewhere safe, delete the folder, `git clone` it fresh, and paste your files back. Not elegant, but it works and it takes two minutes. [Oh Sh!t, Git!?](https://ohshitgit.com/) covers the elegant fixes.

## 6. Practise

Git only clicks once you've broken it a few times.

- [Learn Git Branching](https://learngitbranching.js.org) — Visual and game-like. The single best way to make branching make sense.
- [GitHub Hello World](https://docs.github.com/en/get-started/start-your-journey/hello-world) — The official first-repo walkthrough. Fifteen minutes start to finish.
- [Pro Git](https://git-scm.com/book/en/v2) — The free reference book. Chapters 1–3 cover everything in this course.
- [GitHub's own cheat sheet](https://training.github.com/downloads/github-git-cheat-sheet.pdf) — One-page PDF. Print it and stick it next to your monitor.
