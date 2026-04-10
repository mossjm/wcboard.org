# Website Maintenance Guide — Wisconsin Cranberry Board

**Last updated:** April 10, 2026
**For:** Holly (and future site maintainers)
**Site:** wcboard.org
**Hosted on:** Cloudflare Pages (auto-deploys from GitHub)

---

## How This Website Works

The wcboard.org website is a static site — it's fast, secure, and simple. Content lives in plain text files (JSON and Markdown) in a GitHub repository. When changes are pushed to GitHub, Cloudflare Pages automatically rebuilds and publishes the site within a few minutes.

You do **not** need to be a developer to update this site.

---

## Recommended: Update the Site with Claude Code

The easiest way to make changes to the website is using **Claude Code**, an AI assistant that can read, understand, and edit the website files for you.

### What You Need

- A Claude account (claude.ai — Pro plan at $20/month, or use it through your organization)
- Access to the GitHub repository (github.com — you'll need collaborator access)

### How It Works

1. **Describe what you want changed** — in plain English, just like you would in an email. You can reference specific pages, provide new text, attach images, or describe layout changes.
2. **Claude reads the current site**, finds the right files, and makes the edits.
3. **Review the changes** — Claude shows you exactly what it changed before anything goes live.
4. **Approve and publish** — once you're happy, the changes are committed to GitHub and the site auto-deploys.

### Tips for Best Results

- Be specific: "Change the assessment rate on the Grower Resources page from 25 cents to 30 cents" works better than "update the numbers."
- You can paste in a Word document, a bulleted list, or even a screenshot of what you want changed.
- For image updates, provide the new image file and say where it should go.
- You can ask Claude to make multiple changes at once — just like the edit request email you sent in April 2026.

### Example Requests

- "Update the board member list — remove John Moss and add [name, position, location, term start, bio, headshot photo]."
- "Change the 2025 grant funding amount to $620,000 on the home page and programs page."
- "Add a new meeting: Board Meeting on September 18, 2026, 10 AM at the WSCGA Office in Wisconsin Rapids."
- "Replace the hero image on the About page with this photo [attached]."

---

## Backup Option: Decap CMS

The site also has **Decap CMS** integrated — a web-based content editor at `wcboard.org/admin`. This lets you edit structured content (board members, meetings, page text) through a visual form interface without touching code.

Decap is useful for quick, simple text edits. For larger updates (multiple pages, image swaps, layout changes, new features), Claude Code is more capable.

---

## What Gets Updated Annually

Based on the board's schedule, these items typically need updating each year:

### Home Page
- **By the Numbers** — barrels produced, grant funding total
- **2025 Investments** — total funds, project counts, program highlights

### About Page
- **Board of Directors** — new members, updated terms, departing members
- **Funding Structure** — annual funding amount if assessment rate changes

### Grower Resources Page
- **Assessment rate** (if changed)
- **Where Your Assessment Goes** — allocation percentages

### Programs & Research Page
- **Grant funding** — investment amounts, project and program counts
- **Research areas and partnerships** — as new projects are funded

---

## Important Notes

- **The site auto-deploys.** Any change pushed to the `main` branch on GitHub goes live within a few minutes.
- **Images should be optimized.** Large photos (from cameras or phones) should be resized before uploading. Target ~1200px wide for page images, ~400px wide for headshots. Claude Code can do this automatically.
- **Google Analytics** is integrated but needs a tracking ID. Once you have a GA Measurement ID (starts with "G-"), it needs to be added to `src/components/CookieConsent.astro`.
- **Privacy policy** is live at wcboard.org/privacy. Update it if data collection practices change.
- **Cookie consent** is active. Analytics only loads after visitors accept cookies.

---

## Getting Help

- For website changes: Use Claude Code or contact the site developer.
- For hosting/domain issues: The site is hosted on Cloudflare Pages. Domain is managed through Name.com.
- For board-related questions: DATCP Market Orders Program at (608) 224-5046.
