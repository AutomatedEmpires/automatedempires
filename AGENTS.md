# AutomatedEmpires — Studio Site Agent Contract

> Binding for every agent (human or AI) touching this repo. This is the public-facing studio/portfolio site for the AutomatedEmpires venture system. Read it fully before doing anything.

## 0 · Prime doctrine
**Notion decides and builds. GitHub reviews and ships. Figma shows. Everything else runs.**

- **Notion** = product & vision truth, and where the bulk of the build is authored before code moves. **This repo** = implementation truth for the marketing site only; GitHub validates, reviews, and ships it.
- This repo is the org's public front door; it is NOT one of the product apps (Explore&Earn, BidSpace, Sweepza, LogLoads).

## 1 · What this is
The AutomatedEmpires studio site: a Next.js (App Router) marketing/portfolio surface that presents the venture portfolio. `lib/ventures.ts` is the single source of truth for the venture list rendered by the site.

## 2 · The machine
Built on ONE machine; assume exactly:
- Windows 11 ARM64 (Snapdragon X Elite) → WSL2 Ubuntu 24.04 → VS Code
- Working path: `/home/jackson/automatedempires/ventures/automatedempires`
- 16 GB RAM. **One agent at a time** — no parallel heavy builds or long-running watchers.

## 3 · Runtime (pinned — do not drift)
- Node **24.16.0** (`.nvmrc`)
- pnpm **10.12.4** (`packageManager` in `package.json`)
- Next.js (App Router) · TypeScript end-to-end
- Any version change requires a dated decision.

## 4 · Integration spine (cross-app standard)
This is a marketing-leaning site and does not need the full product spine, but when it does integrate it uses the locked family providers — Secrets = Doppler, Hosting = Vercel, Analytics = PostHog, Errors = Sentry, Media = Cloudinary, Email = Resend, Icons = Streamline. Do not introduce alternates without a dated decision.

## 5 · How we work
- Work on lane/feature branches → small PRs → review → merge. **Never push straight to `main`.**
- **Builder is never the approver.** Open a PR; do not merge your own work without review.
- CI (`.github/workflows/ci.yml`) calls the org-shared reusable workflow and runs typecheck + lint + build on every PR; keep it green.
- Respect founder gates for anything money-moving, legally binding, or destructive.

## 6 · Repo layout
- `app/` — Next.js App Router routes
- `components/` — Nav, Hero, VentureCard, Footer, and related UI
- `lib/ventures.ts` — venture list single source of truth
