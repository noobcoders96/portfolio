# Karthikeyan S — Portfolio

A Netflix-themed portfolio. React + Vite + Tailwind CSS. Fully static — deploys free on GitHub Pages.

- Hero = a Netflix title page (your photo, "Play Experience" / "More Info" / "Download Resume")
- Experience = "Season 1" episode list, one episode per real achievement from your resume
- Skills = horizontally scrolling Netflix-style rows
- Projects = poster cards (BookMyShow Clone, Multi-Tenant Job Board)
- Contact = a working form that emails you directly, no backend needed

## 1. Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## 2. Connect the contact form (so you actually receive submissions)

This uses [Web3Forms](https://web3forms.com) — free, no account, no backend.

1. Go to https://web3forms.com and enter `karthikseenu1623@gmail.com`.
2. It instantly emails you an **Access Key**.
3. Open `src/data/config.js` and paste it in:
   ```js
   export const WEB3FORMS_ACCESS_KEY = 'your-real-key-here'
   ```
4. That's it — every submission on the live site lands in your inbox.

## 3. Update your resume / photo anytime

Just replace the files in `public/` — keep the same filenames:
- `public/resume.pdf`
- `public/profile.jpg`

## 4. Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `portfolio`) and push this project to it.
2. In **`vite.config.js`**, set `base` to your repo name:
   ```js
   base: '/portfolio/',
   ```
3. In **`package.json`**, set `homepage` to your real GitHub Pages URL:
   ```json
   "homepage": "https://<your-username>.github.io/portfolio"
   ```
4. Install the deploy tool (already in devDependencies) and ship it:
   ```bash
   npm install
   npm run deploy
   ```
5. In your repo → **Settings → Pages**, set the source branch to `gh-pages`.
6. Your site goes live at the `homepage` URL above (can take ~1 minute).

To publish future edits, just run `npm run deploy` again.

### If you deploy to `<username>.github.io` (your main user site, not a project repo)
Set `base: '/'` in `vite.config.js` instead of a repo-name path.

## Tech
React 18, Vite 5, Tailwind CSS, Web3Forms — no other runtime dependencies.
