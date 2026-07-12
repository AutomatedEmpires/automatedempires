# AutomatedEmpires Venture Registry

**Verified snapshot:** 2026-07-10
**Operating model:** Shared ownership. Separated operations.

This registry identifies the seven portfolio businesses and their current code, domain, hosting, and data boundaries. Provider resource IDs are identifiers, not credentials. Secret values are intentionally excluded.

## Portfolio registry

| Venture | Canonical slug | Role | Canonical GitHub repository | Public domain state | Hosting state | Data state |
|---|---|---|---|---|---|---|
| AutomatedEmpires | `automatedempires` | Parent company/public portfolio | `AutomatedEmpires/automatedempires`; default `664cda67bc7bc91e4f1577d76bbe7758290f3a2d` | `automatedempires.com` remains Website Builder | Clean merged-main production `dpl_4b8…k5bT9` is `READY` and a rollback candidate; DNS unchanged | No Supabase need for current studio site |
| Explore&Earn | `explore-and-earn` | Standalone marketplace venture | `AutomatedEmpires/explore-and-earn`; PRs #242/#243 merged; default `b616b9e10fa434422dd34442f6cb24194cf8d5ec` | `exploreandearn.com` apex/`www` resolve to Vercel | Clean merged-main production `dpl_5HC…xjQFY` is `READY`; exact-source Preview `dpl_BgD…` green; no mail-delivery claim | Dedicated healthy Supabase project in `us-west-2` |
| ORAN | `oran` | Standalone civic-infrastructure venture | `AutomatedEmpires/Open-Resource-Access-Network`; draft PR #58 exact head `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da` | `openresourceaccessnetwork.com` is registered at GoDaddy; current Azure target returns 404/invalid TLS; auto-renew approved but toggle result unverified | Empty Vercel shell with zero deployments; required checks green, ancillary checks/data lane/rollback red; no cutover authority | Dedicated healthy Supabase project in `us-east-1`; schema authority remains unreconciled |
| BidSpace | `bidspace` | Standalone auction venture | `AutomatedEmpires/bidspace`; #62 merged as `c2c15f1582c1f47bcd589b601819597dd7bea767`, #63/default `2fe90a3eb8cd9bffd43be1ac401d151ae4ad39e8` | Custom-domain purchase deferred | Clean merged-main production `dpl_GQ2…JuVDp` is `READY`; production custom domain absent | Dedicated healthy Supabase project in `us-west-1` |
| Lake & Pine | `lake-and-pine` | Standalone service venture | `AutomatedEmpires/lakeandpine`; PR #1 source `a55ccff…` merged as default `1b6a877bc054a9239c2a430aaf668996de8a0302` | Owned `lakeandpinecleaning.com`; authenticated 8-record GoDaddy zone; no DNS cutover | Clean merged-main production `dpl_EHG…MDWVk` is `READY` and a rollback candidate | Dedicated healthy Supabase in `us-west-1`; backup/lane separation open |
| Sweepza | `sweepza` | Standalone sweepstakes venture | `AutomatedEmpires/sweepza`; #47/#48/#49 merged; safely rewritten #44/default `4c0aad183fe9442e4546985b373b26498e38e6e7` | `sweepza.com` is registered at GoDaddy; apex and `www` resolve to Vercel | Clean merged-main production `dpl_9N5…Yutts` is `READY` and a rollback candidate | Dedicated healthy Supabase project in `us-east-1` |
| LogLoads | `logloads` | Standalone logistics venture | `AutomatedEmpires/logloads`; Supabase-canonical #6 final source `f280ef4fef4b992f94457aad61cfe27e8ec91791` merged to default `9c9e107082942e5bce782eac2ce71aa63eb7d9c0` | `logloads.com` remains Website Builder | Clean merged-main production `dpl_Xxr…8dPtF` is `READY`; no live Supabase/data/provider or DNS cutover occurred | Dedicated Supabase `…zfsjyxo`; live state unchanged; canonical source is merged and deployed |

## Pass 4 repository cleanup state

- Ninety-seven proven-obsolete remote branches were explicitly deleted and ten known merged heads were auto-deleted, for 107 removed heads total. Explore&Earn, Sweepza, LogLoads, BidSpace, and Lake & Pine are remote `main`-only; AutomatedEmpires retains `main` plus active PR #6, and ORAN retains `main` plus draft PR #58.
- Three rejected Sweepza states are preserved as archive tags with issues #50–52; preservation is not release authority.
- Eleven secondary worktrees and thirteen merged/closed local feature branches were removed. The E&E, Lake & Pine, LogLoads, Sweepza, and BidSpace primary clones are clean at exact `origin/main`; ORAN has clean `main` plus one clean PR branch tracking `6d5caf2…`. AutomatedEmpires remains on the active ops PR branch until Pass 4 documentation merges.

## Historical local repository safety snapshot

The primary developer checkouts were found in WSL `Ubuntu-24.04-Recovered`. These paths are local operating references, not transfer requirements.

| Venture | Absolute local path | Branch at discovery | Worktree state at discovery |
|---|---|---|---|
| AutomatedEmpires | `/home/jackson/automatedempires/automatedempires` | `codex/production-public-site` | Clean |
| Explore&Earn | `/home/jackson/automatedempires/ventures/explore-and-earn` | `design/vision-audit-and-4-categories` | Preserve: 106 unstaged tracked files, 27 untracked files, and one local commit ahead of the tracking branch |
| ORAN | `/home/jackson/automatedempires/ventures/oran` | `feat/portfolio-convergence-azure-exit` at `217cd962de1633321cae49327dbc089fc4ad7377` | Preserve: branch matches upstream and is nine commits ahead of `main`; one untracked deployment workflow |
| BidSpace | `/home/jackson/automatedempires/ventures/bidspace` | `integration/recovered-bidspace-product` | Preserve: one untracked Codex configuration file |
| Lake & Pine | `/home/jackson/automatedempires/ventures/lakeandpine` | Local `codex/pass3-production-foundation` at `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c`; base `e1fe8f00…` | Clean, unpushed; six commits ahead of `main` |
| Sweepza | `/home/jackson/automatedempires/ventures/sweepza` | `frontier/world-class` | Clean |
| LogLoads | `/home/jackson/automatedempires/ventures/logloads` | `feature/backend-foundation` at `cce1c4494ae49d28aacc42724ab7245668474ab7` | Preserve: branch diverges 22 feature-only/8 main-only; two unstaged tracked files, one untracked file, and ignored prebuilt output |

The table above is the discovery baseline, not the final cleanup state. The empty Git shell at `C:\Users\autom\OneDrive\Documents\AutomatedEmpires` has no commits or origin and is not the canonical parent repository.

## Naming and architecture exceptions

- `lake-and-pine` is the portfolio slug, while the current repository and Vercel naming use `lakeandpine`. Renaming requires an explicit migration decision; documentation should preserve both identities until then.
- ORAN's GitHub repository is named `Open-Resource-Access-Network`. Draft #58 head `6d5caf2…` intentionally removes Azure deployment assets in favor of Vercel, but that change is not merged. The empty Vercel shell is a safe target reservation, not authority to connect, deploy, or change DNS before ancillary, data-lane, Preview, and rollback gates pass.
- LogLoads completed the bounded Supabase-canonical path and passes atomic/cold-start/concurrency and required repository checks. PR #6 is merged at default `9c9e107…` and production `dpl_Xxr…8dPtF` is `READY`; neither proves live data/provider authority until live-upgrade, provenance, rate-limit, and functional rollback gates pass.
- BidSpace has no verified domain decision. Domain-dependent email and DNS work remains blocked until a name is selected and a domain is purchased or verified.
- Public registration and DNS results do not prove authenticated registrar-account control. Account ownership must be confirmed before transfer or record changes.

## Companion records

- [`VERCEL_PROJECT_MATRIX.md`](VERCEL_PROJECT_MATRIX.md) records canonical and duplicate-candidate Vercel projects.
- [`SUPABASE_PROJECT_MATRIX.md`](SUPABASE_PROJECT_MATRIX.md) records venture-specific database projects.
- [`DOMAIN_DNS_MATRIX.md`](DOMAIN_DNS_MATRIX.md) records the public domain, routing, mail, and authentication posture.
