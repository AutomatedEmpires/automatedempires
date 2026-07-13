# AutomatedEmpires

AutomatedEmpires is the parent operator and command layer for a portfolio of independent ventures. This repository currently contains the public portfolio surface plus operating records; its direction is portfolio status, provider mapping, rollout, governance, cost/risk visibility, task orchestration, and transfer-readiness tracking—not a generic AI agency site.

Portfolio ventures: **Explore&Earn**, **Sweepza**, **LogLoads**, **Lake & Pine**, **ORAN**, and **BidSpace**. Inclusion in this list is not a claim that a venture is publicly launched, production-ready, money-ready, or transfer-ready.

Read [the canonical venture operating definitions](docs/VENTURE_OPERATING_DEFINITIONS.md) before product, design, growth, provider, or rollout work.

| Venture | Canonical direction |
|---|---|
| Explore&Earn | Seeker-first seasonal/work-travel marketplace with preserved Discovery Card, Seek/Swipe/Map/Profile, four categories, clarity, trust, and map/list/swipe discovery |
| Sweepza | Official-source sweepstakes/giveaway discovery plus host/sponsor/partner listings and official link-outs; not the promotion operator by default |
| LogLoads | Forestry/logistics coordination software; not a broker, carrier, payment processor, or dispatch-for-hire operator |
| Lake & Pine | Intelligent cleaning/local-service operating system; booking and planning Phase 1, payments Phase 2 |
| ORAN | Chat-first guided civic-resource navigation to verified, eligibility/location-relevant providers; protected regional MVP, not a resource dump |
| BidSpace | Host–vendor temporary-space marketplace where vendors bid/apply for booths, stalls, pads, pop-ups, event spaces, and similar placements; non-live |

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Deployed on Vercel

## Develop

```bash
pnpm install
pnpm dev
```

Production build:

```bash
pnpm build
```

## Structure

- `app/` — App Router pages, layout, and global styles
- `components/` — UI building blocks (Nav, Hero, VentureCard, Footer)
- `lib/ventures.ts` — the implementation source for the venture list rendered by the public site
- `docs/VENTURE_OPERATING_DEFINITIONS.md` — canonical portfolio product definitions
- `ops/` — portfolio status, rollout, provider-governance, execution, and venture operations records

The committed `pnpm-lock.yaml` is the reproducible dependency baseline. Use `pnpm install --frozen-lockfile` in CI.
