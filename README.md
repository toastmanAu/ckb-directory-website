# CKB Directory Website

The official companion website for the **CKB Directory** app — an ecosystem directory and network companion for Nervos CKB.

**Domain:** `https://ckb.directory/`  
**Hosting:** Cloudflare Pages

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/#/` | Hero with logo, app store links (coming soon), latest updates |
| **Submit** | `/#/submit` | Developers/teams request to add or update an app listing |
| **Vote** | `/#/vote` | Community voting on background panel designs (800×320) |

---

## Local Development

No build step required.

```bash
# Option 1: Python
python3 -m http.server 8080

# Option 2: Node
npx serve .

# Option 3: Wrangler (includes API functions)
npx wrangler pages dev . --compatibility-date=2026-04-16
```

Then open `http://localhost:8080` (or `http://localhost:8788` for Wrangler).

---

## Deployment to Cloudflare Pages

### 1. Create the Pages Project

```bash
npx wrangler pages project create ckb-directory --production-branch=main
```

### 2. Create a KV Namespace

```bash
npx wrangler kv:namespace create "CKB_DIR"
```

Copy the returned `id` and bind it in the Cloudflare dashboard:
- Go to **Cloudflare Dashboard → Pages → ckb-directory → Settings → Functions**
- Add KV namespace binding: `CKB_DIR` → select your namespace

(Or use `wrangler.toml` for local dev — the production binding must be set in the dashboard.)

### 3. Deploy Manually

```bash
npx wrangler pages deploy . --project-name=ckb-directory --branch=main
```

### 4. Add Custom Domain

In the Cloudflare dashboard:
- **Pages → ckb-directory → Custom domains**
- Add `ckb.directory`
- Cloudflare will provision SSL automatically

### 5. GitHub Actions (Auto-Deploy)

The repo includes `.github/workflows/deploy.yml`. Add these secrets to your GitHub repo:

- `CLOUDFLARE_API_TOKEN` — Create at [Cloudflare dashboard → My Profile → API Tokens](https://dash.cloudflare.com/profile/api-tokens) with **Cloudflare Pages:Edit** permission
- `CLOUDFLARE_ACCOUNT_ID` — Found on the right sidebar of any Cloudflare dashboard page

Push to `main` and the site deploys automatically.

---

## Adding Panel Images for Voting

1. Copy your 800×320 panel images into `assets/panels/`
2. Register them in `js/app.js`:

```js
panels: [
  {
    id: 'panel_01',
    name: 'Command Center',
    file: 'assets/panels/panel_01.jpg',
    description: 'Multi-monitor trader workstation'
  },
  {
    id: 'panel_02',
    name: 'Your Design',
    file: 'assets/panels/panel_02.jpg',
    description: 'Short description'
  }
  // ...3 to 9 panels
]
```

3. Commit and push — deployment is automatic.

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/votes?panels=panel_01,panel_02` | GET | Retrieve vote counts |
| `/api/vote` | POST | `{ panelId, voterId }` — cast a vote |
| `/api/submit` | POST | App submission data |

All endpoints return JSON and include CORS headers.

---

## How Voting Works

1. **Visitor arrives** — a UUID is generated and stored in `localStorage`
2. **Cast vote** — sent to `/api/vote` (Cloudflare KV). If offline/backend unavailable, stored locally as fallback.
3. **Statistics** — live bar charts showing vote count, percentage, and leading design.
4. **Deduplication** — backend enforces 1 vote per `voterId` via KV. Frontend also blocks duplicate votes locally.

---

## How Submissions Work

1. **Form submitted** — POSTs to `/api/submit` (Cloudflare KV) if available
2. **Local backup** — always saved to `localStorage` as fallback
3. **Email fallback** — opens a `mailto:` pre-filled with the submission details

---

## Editing Updates

Home page updates are in `js/app.js` → `CONFIG.updates`:

```js
updates: [
  {
    date: '2026-05-30',
    title: 'Your Update Title',
    body: 'Description...'
  }
]
```

---

## Styling

The site uses the app's **Emerald Forest** theme:

| Token | Value |
|-------|-------|
| Background | `#080D0C` |
| Surface | `#101916` |
| Primary | `#00CC99` |
| Text | `#E8F0EB` |
| Text muted | `#8FA89A` |

All styles in `css/style.css`. Mobile-first, fully responsive.

---

## File Structure

```
.
├── index.html              # SPA shell
├── css/
│   └── style.css           # All styles
├── js/
│   └── app.js              # Routing, voting, forms
├── assets/
│   ├── logo.png            # App logo
│   └── panels/
│       └── panel_01.jpg    # Voting candidates (800×320)
├── functions/              # Cloudflare Pages Functions
│   ├── _middleware.js      # Shared CORS + security headers
│   └── api/
│       ├── vote.js         # POST vote
│       ├── votes.js        # GET vote counts
│       └── submit.js       # POST submission
├── _headers                # Static asset cache rules
├── _routes.json            # Functions routing config
├── wrangler.toml           # Wrangler config
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions CI/CD
└── README.md
```

---

## TODO / Roadmap

- [ ] Add iOS App Store link when available
- [ ] Add Google Play link when available
- [ ] Add theme switcher (Cyberpunk Neon, Midnight Ocean, Obsidian Stealth)
- [ ] Admin dashboard for reviewing submissions
- [ ] D1 database migration for relational vote queries
