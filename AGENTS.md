<!-- ae-control-plane v1 (2026-07-16). Machine operating contract; product docs follow below. -->
# Operating contract — Automated Empires control plane

- **Canonical clone (the ONLY writable copy):** WSL `Ubuntu-24.04-Recovered` → `/home/jackson/automatedempires/ventures/automatedempires`.
  Never clone this repository anywhere else on the machine. Parallel work uses controlled
  worktrees: `ae start automatedempires -t <task> -a <agent> --worktree`.
- **Sessions:** acquire the single-writer lease first (`ae start automatedempires -t <task> -a <agent>`);
  end with `ae finish automatedempires`. Work counts as done ONLY when pushed and remote-SHA-verified.
- **Deploys:** merging `main` auto-deploys production via Vercel.
- **Validate before merge:** `pnpm typecheck && pnpm lint` (CI must be green; squash merges).
- **Providers (fixed — never swap or cross-wire):** email=resend (operating docs merged).
- **Warn before:** merging deploys the public org site
- Full policy: `github.com/AutomatedEmpires/ae-control` → `POLICY.md`. Briefing: `ae info automatedempires`.

---

# AutomatedEmpires — Parent Operator Agent Contract

> Binding for every agent (human or AI) touching this repo. This repository contains the current public portfolio surface and the operating records for the AutomatedEmpires venture system. Read it fully before doing anything.

## 0 · Prime doctrine
**Founder product direction decides. GitHub records, reviews, and ships. Figma shows. Providers run approved capabilities.**

- `docs/VENTURE_OPERATING_DEFINITIONS.md` records the dated founder product definitions that govern this repository. Notion or other planning systems must be reconciled to it when they conflict.
- Code and provider state are implementation evidence, not permission to redefine a venture.
- This repo is the org's current public front door and operating-command repository; it is not a child product app.

## 1 · What this is

AutomatedEmpires is the parent operator and command layer. Its direction is a portfolio status dashboard, provider map, rollout board, governance registry, cost/risk visibility, task orchestration, and venture transfer-readiness tracker—not a generic AI agency site.

The checked-in Next.js application is the current public portfolio surface. `lib/ventures.ts` is the implementation source for the list and copy rendered by that surface; it is not the canonical product-definition source. When it conflicts with `docs/VENTURE_OPERATING_DEFINITIONS.md`, document the conflict and use a separately reviewed product-code change to reconcile it.

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

The current public surface does not need the full product spine. Command-layer features may add data or provider integrations only for a reviewed consumer, with access, privacy, cost, ownership, and removal plans. The current provider family is Secrets = Doppler, Hosting = Vercel, Analytics = PostHog, Errors = Sentry, Media = Cloudinary, Email = Resend, Icons = Streamline. This family is conditional on an approved consumer: a documented `no resource` or product-prohibited decision overrides stack symmetry. Never provision a provider merely to complete a matrix, and never introduce alternates or child-venture credentials without a dated decision.

## 5 · How we work
- Work on lane/feature branches → small PRs → review → merge. **Never push straight to `main`.**
- **Builder is never the approver.** Open a PR; do not merge your own work without review.
- CI (`.github/workflows/ci.yml`) calls the org-shared reusable workflow and runs typecheck + lint + build on every PR; keep it green.
- Respect founder gates for anything money-moving, legally binding, or destructive.

## 6 · Repo layout
- `app/` — Next.js App Router routes
- `components/` — Nav, Hero, VentureCard, Footer, and related UI
- `lib/ventures.ts` — implementation source for the venture list rendered by the public site
- `docs/VENTURE_OPERATING_DEFINITIONS.md` — canonical portfolio product definitions
- `ops/` — status, rollout, provider-governance, execution, and transfer-readiness evidence
