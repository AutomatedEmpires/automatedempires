# AutomatedEmpires

AutomatedEmpires is a founder-led venture company building focused products for
work, travel, logistics, local services, marketplaces, and civic access. This
repository is the org meta repo: it contains the **public portfolio site**
(automatedempires.com) and the **portfolio operating records** under `ops/`.
Changes here are portfolio-wide policy, and merging to `main` deploys the
public site via Vercel.

## Portfolio

The authoritative public registry is [`lib/ventures.ts`](lib/ventures.ts) — one
typed record per venture, rendering every page, the sitemap, `/llms.txt`, and
`/portfolio.json`. Do not describe venture status anywhere else in this repo
without deriving it from the registry.

| Venture | Category | Stage (registry) |
|---|---|---|
| Explore&Earn | Work-travel marketplace | Live — exploreandearn.com |
| Sweepza | Giveaway discovery | Live — sweepza.com |
| PinnedAtlas | Destination discovery | Live — pinnedatlas.com |
| Lake & Pine | Premium property care | Live site — contact activation pending |
| LogLoads | Forestry logistics | Pilot build — logloads.com |
| ORAN | Civic resource navigation | Regional preview |
| BidSpace | Vendor-space marketplace | In development |
| AutomatedInterviewer | Decision support | Studio concept (reserved) |
| CertStack | Portfolio lab | Studio concept (reserved) |

Stages carry a `verified` block in the registry — a dated, production-checked
status with checkable evidence. Inclusion here is not a claim that a venture is
launched, money-ready, or transfer-ready; each venture page states exactly what
is true and when it was verified.

## Truth rules

1. **Registry-first.** Venture claims live in `lib/ventures.ts` and nowhere
   else. Pages derive counts (e.g. the homepage live-venture stat) from stage
   fields — never hardcode them.
2. **Verified over aspirational.** The `verified.evidence` entries must be
   independently checkable against production. If it cannot be checked, it does
   not ship.
3. **Machine-readable ≤ human-verified.** `/llms.txt` and `/portfolio.json`
   are generated from the registry; they may never claim more than the pages do.
4. **Screenshots are evidence.** Captures live in `public/evidence/<date>/`
   with a `manifest.json` recording route, environment, viewport, HTTP status,
   and capture time. Do not reuse old captures as current.

## Stack

- Next.js (App Router) + React + TypeScript — fully static output
- Hand-written CSS in `app/globals.css` (design tokens at the top; no Tailwind)
- Archivo + Fraunces via `next/font`
- Deployed on Vercel; merging `main` deploys production

## Develop

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Quality gates (all must pass before a PR):

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Structure

- `app/` — App Router pages: home, `ventures/`, `ventures/[slug]`, `company`,
  `capabilities`, `invest`, `build`, `founder`, `status`, `contact`, plus
  `llms.txt` and `portfolio.json` route handlers
- `components/` — SiteHeader, Footer, VentureCard, VentureVisual, SystemsCanvas
- `lib/ventures.ts` — the venture registry (single source of truth)
- `lib/site.ts` — site identity, nav, contact intents, `pageMetadata()` helper
  (all page metadata must flow through it — Next merges metadata shallowly)
- `public/evidence/` — dated production screenshot library + manifest
- `docs/` — canonical venture operating definitions and decisions
- `ops/` — portfolio operating records: provider matrices, rollout, security
  readiness, brand assets (`ops/brand-assets/`), and dated audit reports under
  `ops/portfolio/`

## Public/private boundary

This repository is public. Operating records under `ops/` are written
names-only: provider resource identifiers are allowed, secret values never.
Anything sensitive (credentials, exploit detail, private financials, personal
data) must not be committed — the pre-push secret scan and CI are backstops,
not the rule. When in doubt, keep it out.

## Operating contract

Work in this repo follows the AE control plane (`AGENTS.md`): take a lease
before writing, validate before pushing, and finish sessions push-verified.
The current portfolio reconstruction report and founder-action ledger live at
[`ops/portfolio/PORTFOLIO_RECONSTRUCTION_20260801.md`](ops/portfolio/PORTFOLIO_RECONSTRUCTION_20260801.md).
