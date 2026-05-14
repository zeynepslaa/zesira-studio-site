# ZESIRA STUDIO — Marketing Site

Luxury editorial marketing site for **ZESIRA STUDIO**, built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

## Where to edit content (beginner-friendly)

Most copy and lists live in one file:

- `src/content/site.ts` — navigation, hero, projects, apps, mods, CC, journal, membership, contact, **editorial whispers** (tiny between-section lines), audio path, SEO.

The **`whispers`** object holds short “internet girl editorial” lines; set any value to `""` to hide that slot.

Types for those fields live in `src/content/types.ts` (only needed when adding new shapes).

## Project structure

- `src/app/` — Next.js App Router entry (`layout.tsx`, `page.tsx`, `globals.css`).
- `src/components/home/` — homepage shell (`HomeExperience.tsx`) and `sections/` for each scroll section.
- `src/components/cards/` — reusable project / status UI.
- `src/components/visual/` — grain, stars, cinematic backdrops.
- `public/audio/` — drop `ambient.mp3` here (or change `content.audio.src`). The player stays **off** until someone taps it—no loud autoplay.

## Local development

```bash
cd zesira-studio-web
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Membership backend (new)

- API endpoints: `POST /api/auth/register`, `POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/auth/me`
- User records are stored locally in `/.data/users.json` (ignored by git)
- Set `AUTH_SECRET` in `.env.local` for production-grade JWT signing
- `/members` is now a protected members-only page (redirects guests to `/#membership`)

## Deploy to Vercel (auto-updates from GitHub)

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com), **New Project** → import the repo.
3. Set **Root Directory** to `zesira-studio-web` (this repo also contains the Electron lookbook app at the parent level).
4. Deploy. Every push to your production branch redeploys automatically.

## Adding media later

- **Ambient audio:** add `public/audio/ambient.mp3` or update `siteContent.audio.src`.
- **CC / project imagery:** you can later wire `next/image` and paths in `site.ts` without restructuring the page—cards already reserve preview areas.
