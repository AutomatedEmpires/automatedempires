# Pass 5 Remediation Status — Mapbox and PostHog

**Execution date:** 2026-07-12
**Scope:** Mapbox token installation, PostHog project provisioning, cost safety, and operating-record updates.

Pass 4 remains the accepted historical baseline. This document records only the Pass 5 delta. It contains no raw credential value or fingerprint.

## Executive result

PostHog provider and environment separation were safely completed without a paid upgrade: the existing Explore&Earn project was preserved, five distinct projects were created, privacy-invasive defaults were disabled, twelve product caps were set to `$0`, and each active venture's own key/host pair was presence-verified in Doppler and Vercel. No fresh deployment or event smoke followed the environment writes, so runtime activation is not claimed.

Mapbox placement and source-consumer verification were completed, but installation was safely stopped. Every founder-created named token available during the pass is a secret `sk` token; putting it into `NEXT_PUBLIC_MAPBOX_TOKEN` would expose server authority to browsers. Public `pk` replacements and secure handoff remain required. The old shared public token remains rollback.

## 1. Mapbox placement table

Completed in `MAPBOX_TOKEN_MATRIX.md`. Proven browser consumers are:

| Venture | Source consumer | Intended Doppler placement | Vercel placement | Result |
|---|---|---|---|---|
| Explore&Earn | `apps/web/components/map/MapView.tsx` | `explore-and-earn` `dev`/`stg`/`prd` → `NEXT_PUBLIC_MAPBOX_TOKEN` | `explore-and-earn` / Development, Preview, Production | **Blocked:** public replacement not available |
| LogLoads | `apps/web/components/v3/RealMap.tsx` | `logloads` `dev`/`stg`/`prd` → `NEXT_PUBLIC_MAPBOX_TOKEN` | `logloads` / Development, Preview, Production | **Blocked:** public replacement not available |
| BidSpace | `apps/web/components/explore-map.tsx` | `bidspace` `dev`/`stg`/`prd` → `NEXT_PUBLIC_MAPBOX_TOKEN` | `bidspace` / Development and Preview now; custom-domain Production deferred | **Blocked:** public replacement not available; production domain missing |
| Lake & Pine | `apps/web/src/components/AreaMap.tsx` | `lake-and-pine` `dev`/`stg`/`prd` → `NEXT_PUBLIC_MAPBOX_TOKEN` if approved | `lakeandpine` / Development, Preview, Production if approved | **Requires founder decision:** unexpected consumer confirmed; available named token is secret and unusable |

ORAN uses Leaflet/OpenStreetMap and receives no Mapbox token. AutomatedEmpires and Sweepza also have no proven consumer.

## 2. Secure handoff method

No raw-token handoff occurred. Founder-created tokens were inspected only by provider metadata and were rejected because they are secret tokens. Preferred next handoff is founder-direct entry of one public `pk` token per application into the three matching Doppler configs. The temporary-file fallback remains available but was not used.

## 3. Mapbox tokens installed by venture/config

None. This is **blocked by security and secure public-token handoff**, not completed. No secret token entered a browser-visible variable.

## 4. Vercel environment synchronization

No Mapbox environment was synchronized. Synchronization remains after correct public-token placement and exact-origin review.

## 5. Map verification

Source consumers were verified for four applications. Replacement-token Preview or Production map smoke was not possible because no safe public replacement was installed. Existing fallbacks and rollback configuration were not changed.

## 6. Old shared-token rollback

The old shared public token remains active in the previously audited Explore&Earn, BidSpace, and LogLoads lanes. It must not be revoked until each active consumer has a verified venture-specific replacement or tested fallback, exact-SHA deployment checks pass, and provider/configuration evidence shows zero remaining use.

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
| ORAN | — | Deferred for privacy and deployment posture |

## 9. PostHog keys installed by venture/config

All six active ventures have their own PostHog pair in Doppler all lanes and matching Vercel scopes. AutomatedEmpires `dev` entries are restricted: CLI returns `null` by design, while authenticated browser write-and-save confirms presence; they are neither empty nor independently readable. Its Vercel Development pair was directly repaired and reopened/exact-match verified without output. Sweepza's stale Production-only host duplicate was deleted by specific environment ID, leaving exactly Development plus combined Preview+Production. No raw value or fingerprint was displayed or recorded.

The exact current production SHAs consume these names: AutomatedEmpires `664cda67bc7bc91e4f1577d76bbe7758290f3a2d`, Explore&Earn `b616b9e10fa434422dd34442f6cb24194cf8d5ec`, Sweepza `4c0aad183fe9442e4546985b373b26498e38e6e7`, LogLoads `9c9e107082942e5bce782eac2ce71aa63eb7d9c0`, BidSpace `2fe90a3eb8cd9bffd43be1ac401d151ae4ad39e8`, and Lake & Pine `1b6a877bc054a9239c2a430aaf668996de8a0302`.

Configuration installation is **completed / safely fixed now**. Runtime activation remains **blocked by production risk** until a fresh deployment loads the writes and a controlled event/ingestion check passes. ORAN remains absent.

## 10. Privacy defaults

Autocapture, session replay, and console capture are disabled for all five new projects. Explore&Earn source already disables replay and console capture. No sensitive civic/resource behavior was added, and ORAN remains deferred.

## 11. Monthly spend change

PostHog increased monthly base/current/projected spend by `$0`. Mapbox is PAYG with no token base cost, a `$0` upcoming invoice, `$0` monthly invoices from January through July 2026, and 50,000 included GL JS web loads/month. No Mapbox public replacement was installed, so Pass 5 added `$0` recurring spend. No Mapbox spending cap exists; monitor usage. Invoice numbers are excluded. See `MONTHLY_SPEND_PROJECTION.md`.

## 12. Remaining blockers

| Item | Classification | Required next action |
|---|---|---|
| Mapbox public browser tokens | **Blocked by security / secure handoff** | Create one public `pk` token for Explore&Earn, LogLoads, and BidSpace with minimum scopes and actual origins; founder places each in matching Doppler configs |
| Lake & Pine Mapbox adoption | **Requires founder decision** | Keep the SVG fallback unless the founder explicitly approves a fourth public token and its staged activation |
| Mapbox Vercel sync and runtime proof | **Blocked by production risk** | Exact-SHA Preview, allowed/rejected-origin checks, fallback and rollback proof before Production |
| BidSpace production restriction | **Blocked by missing domain** | Continue only on exact local/Vercel origins; defer custom-domain restriction |
| PostHog runtime activation | **Blocked by fresh deployment / production risk** | Deploy each exact consuming SHA after the environment write; send a controlled non-sensitive event and verify the intended project/environment/health |
| ORAN PostHog | **Requires founder/privacy decision** | Keep deferred and prefer Sentry/logs until deployment and civic privacy posture are resolved |

## 13. Repository evidence

Ops changes are maintained on branch `codex/pass5-mapbox-posthog` from remote `main` base `664cda67bc7bc91e4f1577d76bbe7758290f3a2d`. The exact commit and review URL are supplied in the execution handoff rather than embedded self-referentially in this commit. No application deployment or runtime event check is claimed.

## Classification summary

- **Completed / safely fixed now:** PostHog cost gate, six-project separation, five new-project privacy defaults, venture-specific Doppler/Vercel key/host placement, Mapbox billing verification, and source/placement inventory.
- **Blocked by security / secure handoff:** Mapbox public-token installation.
- **Blocked by production risk:** Mapbox Vercel sync/map smoke/shared-token retirement and fresh PostHog deployment/event verification.
- **Blocked by missing domain:** BidSpace production-origin restriction.
- **Requires founder/privacy decision:** Lake & Pine Mapbox adoption, ORAN PostHog, and any future analytics behavior beyond minimal approved events.
- **Documentation only:** This report and matrix refresh. They do not convert blocked installation or runtime work into remediation.
