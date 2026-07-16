# PostHog Project Matrix

**Verified provider/environment snapshot:** 2026-07-12
**Security note:** Project keys, personal API values, session data, and credential fingerprints are intentionally excluded. Numeric project IDs below are non-secret resource identifiers.

## Billing and organization result

The existing organization remains on PostHog PAYG with a verified `$0` base, `$0` current cost, and `$0` projected cost after this pass. Six projects are included without a plan upgrade. All twelve product billing caps are `$0`; no paid add-on, plan upgrade, or billable feature was enabled. Pass 5 added `$0` recurring spend.

Explore&Earn project `291166` was preserved unchanged. Five separate projects were created for AutomatedEmpires `509081`, Sweepza `509084`, LogLoads `509086`, BidSpace `509087`, and Lake & Pine `509088`. ORAN has no project because its MVP prohibits user/behavioral analytics and pixels; this is a product-required `no resource` state, not a deferred provider gap.

Autocapture, session replay, and console capture are disabled on all five new projects. Explore&Earn retains its pre-existing project/settings; its source-level replay and console protections remain documented separately.

## Environment installation result

Each of the six active ventures now has its own `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` populated in Doppler `dev`, `stg`, and `prd`. Presence-only/non-empty checks passed without displaying values except AutomatedEmpires `dev`: both entries use restricted visibility, so CLI reads return `null` by design; authenticated browser write-and-save confirmation proves presence without making the values independently readable.

Each matching Vercel project now has both variables in Development and in the provider's combined write-only Preview+Production target. AutomatedEmpires Development was repaired directly in authenticated Vercel UI after restricted Doppler values could not be read by the earlier CLI sync; both entries were reopened and exact-match verified without output. Sweepza's stale overlapping Production-only `POSTHOG_HOST` record was deleted by its specific environment ID, leaving exactly Development plus combined Preview+Production for both intended variables. The exact current production source SHAs listed below consume these variables. Publishing ops draft PR #8 auto-triggered an AutomatedEmpires Preview; no controlled event, ingestion check, runtime smoke, or production deployment followed the writes, and the other five ventures have no post-write deployment.

## Current venture boundaries

| Venture | Project | Privacy state | Doppler / Vercel state | Current source consumer | Pass 5 classification | Required activation proof |
|---|---|---|---|---|---|---|
| AutomatedEmpires | `AutomatedEmpires` / `509081` | Autocapture, replay, console capture off | Doppler `dev` pair is restricted and browser write-confirmed (`null` by design via CLI); `stg`/`prd` presence verified. Vercel Development repaired directly and exact-match verified without output; combined Preview/Production present | Production source `664cda67bc7bc91e4f1577d76bbe7758290f3a2d` consumes the pair; ops PR #8 generated a later Preview | Provider and environment boundary **safely fixed now**; runtime **pending controlled event proof** | Treat PR #8 Preview as build evidence only; run a controlled minimal event, environment label, and ingestion/health check before activation claim |
| Explore&Earn | Existing `exploreandearn` / `291166` | Existing project preserved unchanged; source replay/console protections retained | Own key/host present in all Doppler lanes; Vercel `explore-and-earn` Development + combined Preview/Production populated write-only | Production source `b616b9e10fa434422dd34442f6cb24194cf8d5ec` consumes the pair | Project preserved and environment boundary **safely fixed now**; post-write runtime **pending deployment** | Fresh exact-SHA deployment and named release event without changing the preserved provider project unexpectedly |
| Sweepza | `Sweepza` / `509084` | Autocapture, replay, console capture off | Own pair in all Doppler lanes; Vercel has exactly Development + combined Preview/Production after deletion of the stale Production-only host duplicate | Production source `4c0aad183fe9442e4546985b373b26498e38e6e7` consumes the pair | Provider and environment boundary **safely fixed now**; runtime **pending deployment** | Fresh Preview/Production build, one controlled event, ingestion and health recheck |
| LogLoads | `LogLoads` / `509086` | Autocapture, replay, console capture off | Own key/host present in all Doppler lanes; Vercel `logloads` Development + combined Preview/Production populated write-only | Production source `9c9e107082942e5bce782eac2ce71aa63eb7d9c0` consumes the pair | Provider and environment boundary **safely fixed now**; runtime **pending deployment / production-risk gated** | Fresh exact-SHA deployment only after runtime gates permit it, then controlled event and ingestion check |
| BidSpace | `BidSpace` / `509087` | Autocapture, replay, console capture off | Own key/host present in all Doppler lanes; Vercel `bidspace` Development + combined Preview/Production populated write-only | Production source `2fe90a3eb8cd9bffd43be1ac401d151ae4ad39e8` consumes the pair | Provider and environment boundary **safely fixed now**; runtime **pending deployment** | Fresh controlled Preview, minimal non-sensitive event, ingestion check |
| Lake & Pine | `Lake & Pine` / `509088` | Autocapture, replay, console capture off | Own key/host present in all Doppler lanes; Vercel `lakeandpine` Development + combined Preview/Production populated write-only | Production source `1b6a877bc054a9239c2a430aaf668996de8a0302` consumes the pair | Provider and environment boundary **safely fixed now**; runtime **pending deployment** | Fresh exact-SHA Preview/Production build, minimal event and ingestion check |
| ORAN | None | Product-prohibited for MVP | No key/host in Doppler or Vercel | No approved PostHog consumer | **`no resource` by canonical product definition** | Keep absent. Privacy-scrubbed operational health logging may support runtime safety only; reopening behavioral analytics/pixels requires a new dated founder product decision |

## Verification standard

Presence-only checks prove that intended names are populated; a restricted value may remain unreadable by design. AutomatedEmpires `dev` is therefore classified as restricted/presence-write-confirmed, not empty or independently readable. Environment checks do not prove what a running deployment loaded or that an event reached the correct project. Runtime verification requires a fresh deployment, controlled event, and provider-side ingestion/health evidence.

Every approved PostHog consumer has a separate provider project and separately placed key/host pair. No venture may reuse Explore&Earn's project or key. ORAN remains absent because behavioral analytics/pixels are product-prohibited for its MVP.
