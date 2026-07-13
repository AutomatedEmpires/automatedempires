# Pass 5 Remediation Status — Mapbox and PostHog

**Execution date:** 2026-07-12
**Scope:** Mapbox token installation, PostHog project provisioning, cost safety, and operating-record updates.

Pass 4 remains the accepted historical baseline. This document records only the Pass 5 delta. It contains no raw credential value or fingerprint.

> Founder product correction (2026-07-12): historical references to ORAN PostHog as “deferred” are superseded for forward planning. ORAN MVP user/behavioral analytics and pixels are product-prohibited and classified `no resource`. Privacy-scrubbed operational health logging is safety-only.

## Executive result

PostHog provider and environment separation were safely completed without a paid upgrade: the existing Explore&Earn project was preserved, five distinct projects were created, privacy-invasive defaults were disabled, twelve product caps were set to `$0`, and each active venture's own key/host pair was presence-verified in Doppler and Vercel. Publishing ops draft PR #8 auto-triggered an AutomatedEmpires Preview after the environment writes; it was not used for a controlled event/ingestion smoke, no production deployment occurred, and runtime activation is not claimed.

Mapbox separation was executed for Explore&Earn, LogLoads, BidSpace, and Lake & Pine through a secure outside-repository handoff. Secret authorizers stayed server-side; separate least-scope public tokens were installed across Doppler/Vercel scopes and verified by origin enforcement, fresh exact-main Previews, and real-Chrome local runtimes. No Production deployment occurred; remaining Preview app/access gates and old/shared rollback retirement are explicitly open.

## 1. Mapbox placement table

Completed in `MAPBOX_TOKEN_MATRIX.md`. Proven browser consumers are:

| Venture | Source consumer | Doppler placement | Vercel placement | Result |
|---|---|---|---|---|
| Explore&Earn | `apps/web/components/map/MapView.tsx` | Populated/masked `dev`/`stg`/`prd` | Encrypted Development/Preview/Production | Installed; origin/local proof green; fresh Preview app error path open |
| LogLoads | `apps/web/components/v3/RealMap.tsx` | Populated/masked `dev`/`stg`/`prd` | Encrypted Development/Preview/Production | Installed; origin/local proof green; fresh Preview app error path open |
| BidSpace | `apps/web/components/explore-map.tsx` | Populated/masked `dev`/`stg`/`prd` | Encrypted Development/Preview only | Installed; origin/local proof green; protected Preview access and production domain open |
| Lake & Pine | `apps/web/src/components/AreaMap.tsx` | Populated/masked `dev`/`stg`/`prd` | Encrypted Development/Preview/Production | Founder direction resolved decision gate; origin/local/fresh Preview green |

ORAN uses Leaflet/OpenStreetMap; its validated authorizer was intentionally unused. Sweepza's validated authorizer was also unused because there is no consumer. AutomatedEmpires has no Mapbox resource.

## 2. Secure handoff method

The outside-repository handoff file was `C:\Users\autom\.codex\mapbox keys.txt`. Placement scripts did not emit its secret values. Four authorizers minted public tokens server-side; two were intentionally unused. After verification, the 764-byte file was best-effort overwritten, truncated, and removed. No raw Mapbox credential is stored in source, Markdown, reports, env files, or committed artifacts; public client-visible values are omitted from docs.

## 3. Mapbox tokens installed by venture/config

Four public tokens were installed—one per application across its three Doppler lanes—with exactly `styles:read` and `fonts:read`. Restriction counts are E&E 7, LogLoads 6, BidSpace 3, Lake & Pine 7. No secret authorizer entered a browser-visible variable.

## 4. Vercel environment synchronization

E&E, LogLoads, and Lake & Pine have exact encrypted Development/Preview/Production records. BidSpace has Development/Preview only. ORAN/Sweepza are absent. E&E's duplicate was removed only after exact replacement. Latest Production deployments remained unchanged.

## 5. Map verification

All four tokens passed HTTP `Referer` probes: exact Preview and localhost returned billable-tileset metadata `200`, while an unrelated `Referer` returned `403`. Fresh exact-main Previews are `READY`. Real-Chrome local runtimes rendered maps for all four; Lake fresh protected Preview also passed. E&E/Log fresh Preview routes hit pre-existing app error boundaries before initialization; Bid protected Preview was client-side blocked without bypass. These are application/access gates, not token failures.

## 6. Old shared-token rollback

The provider old/shared public token remains active rollback. No authorizer, replacement, or old/shared provider token was revoked. Retire only after remaining Preview paths, separately authorized Production rollouts, and zero-use evidence pass.

## 7. PostHog billing and plan

The organization remains on existing PAYG at `$0` base/current/projected cost. Six projects are allowed without an upgrade. All twelve product billing caps are `$0`. No paid add-on or upgrade was enabled; this pass added `$0` recurring spend.

## 8. PostHog projects

| Venture | Project ID | Result |
|---|---:|---|
| Explore&Earn | `291166` | Existing project preserved |
| AutomatedEmpires | `509081` | New separate project created |
| Sweepza | `509084` | New separate project created |
| LogLoads | `509086` | New separate project created |
| BidSpace | `509087` | New separate project created |
| Lake & Pine | `509088` | New separate project created |
| ORAN | — | Product-required `no resource` for MVP; no behavioral analytics or pixels |

## 9. PostHog keys installed by venture/config

All six active ventures have their own PostHog pair in Doppler all lanes and matching Vercel scopes. AutomatedEmpires `dev` entries are restricted: CLI returns `null` by design, while authenticated browser write-and-save confirms presence; they are neither empty nor independently readable. Its Vercel Development pair was directly repaired and reopened/exact-match verified without output. Sweepza's stale Production-only host duplicate was deleted by specific environment ID, leaving exactly Development plus combined Preview+Production. No raw value or fingerprint was displayed or recorded.

The exact current production SHAs consume these names: AutomatedEmpires `664cda67bc7bc91e4f1577d76bbe7758290f3a2d`, Explore&Earn `b616b9e10fa434422dd34442f6cb24194cf8d5ec`, Sweepza `4c0aad183fe9442e4546985b373b26498e38e6e7`, LogLoads `9c9e107082942e5bce782eac2ce71aa63eb7d9c0`, BidSpace `2fe90a3eb8cd9bffd43be1ac401d151ae4ad39e8`, and Lake & Pine `1b6a877bc054a9239c2a430aaf668996de8a0302`.

Configuration installation is **completed / safely fixed now** for approved consumers. Runtime activation remains **blocked by production risk** until each applicable venture has an appropriate post-write deployment and a controlled event/ingestion check. The AutomatedEmpires PR #8 Preview is build evidence only, not analytics proof. ORAN remains absent by product requirement.

## 10. Privacy defaults

Autocapture, session replay, and console capture are disabled for all five new projects. Explore&Earn source already disables replay and console capture. No sensitive civic/resource behavior was added; ORAN behavioral analytics/pixels remain prohibited.

## 11. Monthly spend change

PostHog and Mapbox increased recurring spend by `$0`. Mapbox is PAYG with no token base cost, `$0` upcoming/January–July 2026 invoices, and 50,000 included GL JS web loads/month. Four bounded public replacements were installed and verified. No spending cap exists; monitor usage. Invoice numbers are excluded.

## 12. Remaining blockers

| Item | Classification | Required next action |
|---|---|---|
| E&E / LogLoads Mapbox Preview routes | **Blocked by pre-existing application error paths / production risk** | Repair and re-smoke the fresh exact-main Preview routes before Production |
| BidSpace protected Preview | **Blocked by authorized access and missing production domain** | Verify through an approved access path; do not create a bypass or Production record/domain |
| Mapbox Production rollout / old token retirement | **Blocked by production risk** | Promote separately after Preview gates; monitor usage and prove zero old/shared use before revocation |
| BidSpace production restriction | **Blocked by missing domain** | Continue only on exact local/Vercel origins; defer custom-domain restriction |
| PostHog runtime activation | **Blocked by controlled deployment/event / production risk** | Use an appropriate post-write deployment per venture, send a controlled non-sensitive event, and verify the intended project/environment/health; do not count AutomatedEmpires PR #8's automatic Preview alone as activation proof |
| ORAN PostHog | **Product-required `no resource` for MVP** | Keep absent; use only privacy-scrubbed runtime-safety logging. A later change requires a new dated founder product decision |

## 13. Repository evidence

Ops changes are maintained on branch `codex/pass5-mapbox-posthog` from remote `main` base `664cda67bc7bc91e4f1577d76bbe7758290f3a2d` and reviewed in draft [PR #8](https://github.com/AutomatedEmpires/automatedempires/pull/8). Exact commit identifiers are supplied in the execution handoff rather than embedded self-referentially. The PR auto-triggered a docs-only AutomatedEmpires Preview; no production deployment or runtime event check is claimed.

## Classification summary

- **Completed / safely fixed now:** PostHog boundaries; Mapbox secure handoff, four-token separation, Doppler/Vercel placement, least scopes/origin enforcement, local Chrome, fresh Preview builds, Lake Preview, and billing verification.
- **Blocked by production risk/access:** E&E/Log Preview app paths, Bid protected Preview, Production rollout, shared-token retirement, and PostHog event verification.
- **Blocked by missing domain:** BidSpace production-origin restriction.
- **Product-prohibited/no resource:** ORAN behavioral analytics and pixels for the MVP. Lake & Pine's Mapbox decision gate is resolved.
- **Documentation only:** This report and matrix refresh. They do not convert blocked installation or runtime work into remediation.
