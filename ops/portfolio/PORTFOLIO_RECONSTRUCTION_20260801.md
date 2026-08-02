# Portfolio reconstruction — 2026-08-01

A full evidence pass over every AutomatedEmpires venture, run 2026-07-31 →
2026-08-01: machine-wide discovery, per-venture production verification, PR
reconciliation, and a rebuilt public portfolio. This document records what was
verified, what changed, and what only the founder can move. Names-only: no
secret values, no exploit detail.

Method: one verification agent per venture (repo state via `gh`, production
probes via HTTP, README audit, stage classification), plus a machine-wide
candidate sweep (Windows + WSL + GitHub org + Vercel team + domain matrix) and
a Vercel deployment inventory. Everything below carries its verification date;
treat entries as point-in-time.

## Venture matrix (verified 2026-07-31)

| Venture | Stage | Production | Commercial state | Current blocker | README |
|---|---|---|---|---|---|
| Explore&Earn | Live production | exploreandearn.com serves the full product; **zero live listings** | Billing built + gated; $0 ever charged | First host supply; payment-account proof | Accurate but omits empty feed |
| Sweepza | Live production | sweepza.com serves; 3 listings, empty winner wall | Billing built, off; $0 | Ingestion activation (compliance gates) | Accurate |
| PinnedAtlas | Live production | pinnedatlas.com serves 228 real destinations | Free; premium built, dormant | No telemetry → no traction evidence | Stale (claims active monetization) |
| Lake & Pine | Live site, pre-launch business | lakeandpinecleaning.com serves; **lead capture dark** (no tel/mailto, intake fail-closed) | $0; payments hard-gated | Founder: phone/email + intake flag + sender | Accurate |
| LogLoads | Pre-launch production | logloads.com serves full site; empty public board | Priced publicly; collection disabled behind pilot ledger | Founder pilot activation; first real host | Accurate |
| ORAN | Pre-launch production | Preview deployment healthy; real HRSA-derived data; 6 daily crons | Pre-revenue; no model in code | Domain launch decision; migration 0077; Azure exit by 08-15 | Stale (Azure-era badges) |
| BidSpace | Pre-launch production | Preview 500s — auth never provisioned | $0; Stripe Connect designed, unbound | Founder: Clerk app creation (hard blocker) | Accurate |
| ClinicalThread | Concept | Domain parked (registrar lander) | None | Founder go/no-go; repo should be private | It is the concept (50KB research book) |
| AutomatedInterviewer | Domain holding | Domain parked ("Launching Soon") | None | Founder disposition | Missing (repo empty) |
| CertStack | Concept (reserved) | None | None | Name collision unresolved | Missing (repo empty) |
| Workproof | Concept (reserved) | None (no domain) | None | Founder disposition | Missing (repo empty) |
| Traffic | Concept (reserved) | None | None | Founder disposition (registry lists it out-of-scope) | Missing (repo empty) |
| Komfort Killz | Design-stage brand | No code/repo/runtime; brand system + social assets exist | None | Founder-gated per ops docs | n/a |
| Just Jesus Bro | Brand-only | No code; one social page; domain order recorded but not in the authenticated domain roster | None | Founder classification | n/a |
| TheResumeBot | Dormant domain | theresumebot.com DNS points at Vercel with no team project claiming it; Google Workspace MX present | None | Founder: check where the domain lands + whether mail is active | n/a |
| WanderWrks | Not found | Zero evidence on machine, GitHub, Vercel, or the domain roster | — | — | — |

Counts derived from the registry: 15 GitHub repos · 12 Vercel projects ·
6 custom production domains · 3 ventures live in production software terms
(E&E, Sweepza, PinnedAtlas) + 1 live consultative site (Lake & Pine) ·
3 pre-launch production systems (LogLoads, ORAN, BidSpace) · the rest are
concepts, reservations, or brand holdings. **Real customers: 0. Real revenue:
$0 across the portfolio.** Engineering depth materially exceeds commercial
traction everywhere — that is the honest portfolio story and the site now says
it plainly.

## What shipped in this reconstruction

- **PR #24 merged** (squash `1c25d99e`) after amending two claims falsified by
  verification (E&E "real opportunities open to browse"; Lake & Pine client
  growth) and resolving all nine review threads with fixes: per-route sitemap
  dates, 404 canonical removal, a11y names (brand link, status rows, portfolio
  stage), fabricated "8 homes in motion" metric removed, MD058.
- Production verified: automatedempires.com now serves the post-merge
  deployment (deployment id observed to change; title + stat label confirmed).
- PRs #22 (base branch, contained in #24), #23 (superseded next bump), and #18
  (zero unique content by `ae verify`) closed with reasons. #25 (postcss) sent
  to dependabot rebase after lockfile conflict.
- **Registry deepened**: every venture record now carries `verified` (dated
  status + checkable evidence), `businessModel`, `ask`, `openRisks`, and — for
  the six deployed surfaces — a dated production `screenshot`.
- **New pages**: `/invest` (four relationship types + per-venture current
  asks) and `/capabilities` (seven verified capabilities + three case studies).
- **Machine-readable portfolio**: `/llms.txt` and `/portfolio.json`, generated
  from the registry.
- **Evidence library**: `public/evidence/2026-08-01/` — 6 surfaces × 3
  viewports (390/768/1440) + `manifest.json` with route, environment, HTTP
  status, and capture time. PinnedAtlas captured on `/spots` (headless WebGL
  cannot render the map canvas; noted in the manifest).
- **Brand assets landed**: `ops/brand-assets/` extracted from
  `codex/brand-asset-foundation` (all nine entities: favicons, logos, OG art,
  one-pagers, generator tooling). The real AutomatedEmpires favicon set now
  ships instead of the typographic placeholder. Full brand-system adoption
  (Inter Tight/IBM Plex Mono, Command Ink/Signal Brass palette) is a design
  decision left to the founder — the shipped site keeps the audited
  Archivo/Fraunces system.
- README rewritten around the registry-first truth rules.

## Founder-action ledger (current, all verified 2026-07-31→08-01)

Revenue-path items, in leverage order:

1. **Lake & Pine lead capture** — publish real phone/email, configure the
   verified sender, flip the intake flag, land the open security-header PR in
   that repo. Until then the live site records zero demand. (Smallest action,
   only venture with a plausibly immediate customer.)
2. **E&E first supply** — recruit first hosts or approve one ingestion source;
   then the payment-account proof runbook (webhook currently 503 by design).
3. **LogLoads pilot** — execute the pilot activation ledger; select the pilot
   organization; first real load on the board.
4. **Sweepza launch packet** — the six-decision NO-GO set, above all ingestion
   activation; PR #104 pipeline delivery is upstream of inventory growth.
5. **BidSpace auth provisioning** — create the Clerk application; the public
   preview 500s until then. Also: domain decision (the .app is third-party).
6. **ORAN** — apply migration 0077, DR drill, Azure decommission by
   2026-08-15, and the custom-domain launch decision.
7. **PinnedAtlas telemetry** — set the analytics key (traction baseline), wake
   the built AI guide, provision auth for accounts; premium stays gated on a
   dedicated payment account + legal placeholders.

Governance and hygiene:

8. **ClinicalThread repo visibility** — flip to private; register in the
   control plane before any build work; parked domain currently serves a
   third-party ad lander under the brand name.
9. **Repo visibility policy** — every venture repo is public with full
   runbooks (names-only but a reconnaissance map); decide deliberately
   public-vs-private per repo.
10. **Empty public repos** — Workproof, CertStack, Traffic, AutomatedInterviewer
    read as abandoned to any diligence visitor: add a one-paragraph README or
    archive them.
11. **Vercel cleanup** — delete/classify `sweepza-canary`, `you`, `co-7`,
    `explore-and-earn-vercel-fix` (empty/unlinked projects).
12. **Domain governance** — complete the registrar-account verification noted
    in the provider-governance records so renewal continuity across the domain
    portfolio is confirmed.
13. **TheResumeBot domain** — DNS points at Vercel apex with no claiming
    project; a workspace mailbox may be receiving mail. Check both.
14. **Dependency-update backlog** — work through the pending dependency
    updates across the estate (details in each repo's private security view);
    bidspace's automated update jobs need attention.
15. **Lake & Pine strategic fork** — ops-platform canon vs. local lead-capture
    direction; `docs/VENTURE_OPERATING_DEFINITIONS.md` still encodes the
    former. The public page describes observable reality; the fork needs a
    dated founder decision.
16. **Brand-system adoption** — decide whether the P0 brand concept (mark,
    palette, type) replaces the current site design system.
17. **Docs PRs #14/#15/#16/#17** — remaining July-13 docs PRs diverge from
    main per `ae verify`; #15 (Meta/social system) and #16 (agent operating
    standards) hold unique content worth a review-or-close decision.

## Known limitations of this pass

- Four repos (E&E, LogLoads, ORAN, Sweepza) were under other agents' active
  reconstruction leases; their verifications are read-only snapshots and may
  be superseded within days. Venture pages carry verification dates for this
  reason.
- ORAN's custom domain is attached to its Vercel project but was not probed
  end-to-end; the site links nothing for ORAN yet.
- Lake & Pine "operating business" status (offline customers) is not
  code-verifiable; the site now claims only what a visitor can verify.
- The `ops/portfolio` matrices dated 2026-07-10/12 remain valuable history but
  are stale on domains and deployments; this document supersedes them for
  product status. Infrastructure re-verification was not repeated here.
