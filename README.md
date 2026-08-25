# Lareware — Sysadmin Tools & Guides

Plain HTML/CSS/JS site. No build step, no framework, no dependencies.

## Project Structure

```
lareware/
├── index.html                    # Homepage
├── about.html                    # About page
├── privacy.html                  # Privacy policy
├── _TEMPLATE_article.html        # Copy this for new guides/reviews
├── _TEMPLATE_tool.html           # Copy this for new tools
├── css/
│   └── main.css                  # Complete design system
├── js/
│   └── components.js             # Shared nav, footer
├── tools/
│   ├── index.html                # Tools listing page
│   ├── subnet-calculator.html    # (you'll build these)
│   ├── dns-lookup.html
│   └── ...
├── guides/
│   ├── index.html                # Guides listing page
│   ├── homelab-500-budget.html
│   └── ...
└── reviews/
    ├── index.html                # Reviews listing page
    ├── best-mini-pcs-2026.html
    └── ...
```

## How It Works

Every page includes three placeholder `<div>`s and one script:

```html
<div id="nav"></div>      <!-- top of body -->
...page content...
<div id="footer"></div>     <!-- end of body -->
<script src="/js/components.js"></script>
```

`components.js` injects the shared nav and footer so you only maintain them in one file.

## Adding Content

### New guide or review:
1. Copy `_TEMPLATE_article.html`
2. Save as `guides/my-article.html` (or `reviews/`)
3. Update the title, meta description, canonical URL, category, and content
4. Add a card linking to it on the relevant index page and `index.html`

### New tool:
1. Copy `_TEMPLATE_tool.html`
2. Save as `tools/my-tool.html`
3. Build the interactive UI using the CSS design system variables
4. Add a card on `tools/index.html` and `index.html`

## Local Development

Open `index.html` in a browser, or run a local server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit http://localhost:8000

## Deploy to Cloudflare Pages

1. Create a GitHub repo, push this folder
2. Go to Cloudflare Dashboard → Pages → Create a project
3. Connect your GitHub repo
4. Build command: (leave blank — no build needed)
5. Build output directory: `/` (or leave blank)
6. Deploy

That's it. Every push to `main` auto-deploys.

## Deploy to Netlify

Same idea — connect the repo, no build command, publish directory is `/`.

## Design System Quick Reference

### CSS Variables (use in tool pages)
- `var(--bg)` — page background (#0c0e13)
- `var(--bg-card)` — card/input background (#13161d)
- `var(--border)` — borders (#1e2330)
- `var(--text)` — primary text (#e2e4ea)
- `var(--text-muted)` — secondary text (#7a8099)
- `var(--accent)` — green accent (#00e599)
- `var(--accent2)` — blue accent (#3b82f6)
- `var(--orange)` — orange accent (#f59e0b)

### Fonts
- Body: `'DM Sans', sans-serif`
- Code/labels: `'JetBrains Mono', monospace`

### Reusable Classes
- `.terminal` + `.terminal-bar` + `.terminal-body` — terminal output block
- `.tool-card` — clickable card with hover animation
- `.tool-icon.green/.blue/.orange` — colored icon badge
- `.tool-tag` — small tag label
- `.article-body` — styled article content (handles h2, h3, p, code, pre, blockquote, table, ul, ol)
- `.toc` — table of contents box

## Monetization Checklist

- [ ] Publish 10-15 pages of content
- [ ] Apply for Google AdSense
- [ ] Replace `.ad-placeholder` divs with real AdSense units
- [ ] Set up Amazon Associates account
- [ ] Add affiliate links in review pages
- [ ] Set up Google Analytics
