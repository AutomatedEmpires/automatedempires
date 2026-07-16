# AutomatedEmpires Venture Registry

**Verified snapshot:** 2026-07-10
**Operating model:** Shared ownership. Separated operations.

Product roles below were corrected on 2026-07-12. `docs/VENTURE_OPERATING_DEFINITIONS.md` is authoritative; the remaining columns preserve the dated infrastructure snapshot.

> Execution source update (2026-07-12): later current-source SHAs are AutomatedEmpires `408fca3`, Explore&Earn `5989853`, ORAN `8da2101`, BidSpace `69a53c4`, Lake & Pine `e65b3b6`, Sweepza `f2977cb`, and LogLoads `6f7ebcd`. Older hosting artifacts remain deployment evidence for their recorded SHAs, not proof those later sources are deployed.

This registry identifies the seven portfolio businesses and their current code, domain, hosting, and data boundaries. Provider resource IDs are identifiers, not credentials. Secret values are intentionally excluded.

## Portfolio registry

| Venture | Canonical slug | Role | Canonical GitHub repository | Public domain state | Hosting state | Data state |
|---|---|---|---|---|---|---|
| AutomatedEmpires | `automatedempires` | Parent operator/command layer; current public portfolio surface | `AutomatedEmpires/automatedempires`; current source #12 `408fca3` | `automatedempires.com` remains Website Builder | Production `dpl_4b8…k5bT9` from prior source `664cda6…` is `READY` and a rollback candidate; DNS unchanged | No Supabase need for the current public surface; future command-layer architecture undecided |
| Explore&Earn | `explore-and-earn` | Seeker-first seasonal/work-travel marketplace | `AutomatedEmpires/explore-and-earn`; current source #245 `5989853`; deployed baseline `b616b9e…` | `exploreandearn.com` apex/`www` resolve to Vercel | Production `dpl_5HC…xjQFY` from the earlier source is `READY`; no current-source Production or mail-delivery claim | Dedicated healthy Supabase project in `us-west-2`; #245 privacy/report migration evidence recorded |
| ORAN | `oran` | Chat-first verified-provider civic navigation; protected regional MVP only | `AutomatedEmpires/Open-Resource-Access-Network`; current source #67 `8da2101`; #58 retained as history | `openresourceaccessnetwork.com` is registered at GoDaddy; current Azure target returns 404/invalid TLS; auto-renew approved but toggle result unverified | Protected noindex Preview `dpl_9Qd…` is shell/build evidence with empty runtime providers; no cutover authority | Dedicated healthy Supabase project in `us-east-1`; schema authority remains unreconciled |
| BidSpace | `bidspace` | Non-live host–vendor temporary-space marketplace | `AutomatedEmpires/bidspace`; current source #64 `69a53c4`; deployed baseline `2fe90a3…` | Custom-domain purchase deferred | Production `dpl_GQ2…JuVDp` from the earlier source is `READY`; production custom domain absent | Dedicated healthy Supabase project in `us-west-1` |
| Lake & Pine | `lake-and-pine` | Intelligent cleaning/local-service operating system; booking/planning Phase 1 | `AutomatedEmpires/lakeandpine`; current source #3 `e65b3b6`; deployed baseline `1b6a877…` | Owned `lakeandpinecleaning.com`; authenticated 8-record GoDaddy zone; no DNS cutover | Production `dpl_EHG…MDWVk` from the earlier source is `READY` and a rollback candidate | Dedicated healthy Supabase in `us-west-1`; backup/lane separation open |
| Sweepza | `sweepza` | Sweepstakes/giveaway discovery and host/partner listing platform; non-operator by default | `AutomatedEmpires/sweepza`; current source #53 `f2977cb`; older production source `4c0aad…` | `sweepza.com` is registered at GoDaddy; apex and `www` resolve to Vercel | #53 protected Preview is healthy; older production `dpl_9N5…Yutts` remains rollback evidence; operator-style flows remain non-authoritative | Dedicated healthy Supabase project in `us-east-1` |
| LogLoads | `logloads` | Forestry/logistics coordination; non-broker/carrier/payment/dispatch-for-hire | `AutomatedEmpires/logloads`; current source #22 `6f7ebcd`; deployed baseline #6 `9c9e107…` | `logloads.com` remains Website Builder | Production `dpl_Xxr…8dPtF` from the earlier source is `READY`; no live Supabase/data/provider or DNS cutover occurred | Dedicated Supabase `…zfsjyxo`; live state unchanged; later limiter source is not provider activation |

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
- LogLoads completed the bounded Supabase-canonical path at deployed baseline `9c9e107…`; later #21/#22 source is `6f7ebcd`, while production `dpl_Xxr…8dPtF` remains the earlier-source artifact. Neither proves live data/provider authority until current-source deployment, live-upgrade, provenance, shared-limiter, and functional rollback gates pass.
- BidSpace has no verified domain decision. Domain-dependent email and DNS work remains blocked until a name is selected and a domain is purchased or verified.
- Sweepza's existing entry, winner, approval/hold, and billing surfaces are implementation evidence, not authority to operate promotions. Official-source link-outs, listing verification states, disclaimers, and the non-operator boundary govern forward work.
- LogLoads' limiter requirement is shared atomic production state. Evaluate Supabase first, then Vercel-integrated KV/Upstash only if Supabase is unsuitable; instance-local memory is development-only.
- Public registration and DNS results do not prove authenticated registrar-account control. Account ownership must be confirmed before transfer or record changes.

## Companion records

- [`VERCEL_PROJECT_MATRIX.md`](VERCEL_PROJECT_MATRIX.md) records canonical and duplicate-candidate Vercel projects.
- [`SUPABASE_PROJECT_MATRIX.md`](SUPABASE_PROJECT_MATRIX.md) records venture-specific database projects.
- [`DOMAIN_DNS_MATRIX.md`](DOMAIN_DNS_MATRIX.md) records the public domain, routing, mail, and authentication posture.
