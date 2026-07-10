# AutomatedEmpires Venture Registry

**Verified snapshot:** 2026-07-10
**Operating model:** Shared ownership. Separated operations.

This registry identifies the seven portfolio businesses and their current code, domain, hosting, and data boundaries. Provider resource IDs are identifiers, not credentials. Secret values are intentionally excluded.

## Portfolio registry

| Venture | Canonical slug | Role | Canonical GitHub repository | Public domain state | Hosting state | Data state |
|---|---|---|---|---|---|---|
| AutomatedEmpires | `automatedempires` | Parent company and public portfolio authority | `AutomatedEmpires/automatedempires` | `automatedempires.com` is registered at GoDaddy; the apex currently resolves to GoDaddy Website Builder | Dedicated Vercel project has protected `READY` preview `dpl_7eWQBY2ULsfcPTnQ17aSmN3EAhm9`; one earlier production-target artifact is `ERROR`, so no functional production or custom domain is attached | No Supabase project; none is currently needed for the public studio site |
| Explore&Earn | `explore-and-earn` | Standalone marketplace venture | `AutomatedEmpires/explore-and-earn` | `exploreandearn.com` is registered at GoDaddy; apex and `www` resolve to Vercel | Canonical Vercel deployment is `READY` | Dedicated healthy Supabase project in `us-west-2` |
| ORAN | `oran` | Standalone civic-infrastructure venture | `AutomatedEmpires/Open-Resource-Access-Network` | `openresourceaccessnetwork.com` is registered at GoDaddy; the current Azure target returns a 404 and presents invalid TLS | Empty Vercel shell exists. Candidate `217cd962de1633321cae49327dbc089fc4ad7377` is nine commits ahead of `main` but has incompatible CI and an untracked production-only workflow; no preview/deploy/cutover exists | Dedicated healthy Supabase project in `us-east-1`; it is referenced by convergence work, but the 97-table schema is not explained by its one-row migration ledger |
| BidSpace | `bidspace` | Standalone auction venture | `AutomatedEmpires/bidspace` | No candidate production domain was discovered; do not invent one | Connected Vercel project exists, but no deployment was observed | Dedicated healthy Supabase project in `us-west-1` |
| Lake & Pine | `lake-and-pine` | Standalone service venture | `AutomatedEmpires/lakeandpine` | Candidate `lakepinecleaning.com` is unregistered and has no DNS | `READY` deployment `dpl_AaAEZZz9Ma442TDNygN6ypLsQCMt` is a dirty feature-branch redeploy. Clean candidate `e1fe8f00f3e50ede86a2f6e3af75ea1e8cdded1a` is five commits ahead of prototype-only `main`, which lacks configured root `apps/web` | Dedicated healthy Supabase project in `us-west-1`; current runtime binding was verified/imported, but backup and lane separation remain open |
| Sweepza | `sweepza` | Standalone sweepstakes venture | `AutomatedEmpires/sweepza` | `sweepza.com` is registered at GoDaddy; apex and `www` resolve to Vercel | Canonical Vercel deployment is `READY` | Dedicated healthy Supabase project in `us-east-1` |
| LogLoads | `logloads` | Standalone logistics venture | `AutomatedEmpires/logloads` | `logloads.com` is registered at GoDaddy; the apex currently resolves to GoDaddy Website Builder | Dirty preview `dpl_Ejx66Z9wZFJiPJ5341j61voT7cHF` is `READY`; dirty production `dpl_5LdZ4qWv7P1B68iYi3zZoJBM7wLN` errors with `ENOENT`. Vercel production is additionally blocked by the dated single-writer/persistent-volume architecture | Dedicated healthy Supabase project in `us-west-1`; it is currently a durability mirror for process-local primary state, not the canonical transactional store |

## Local repository safety snapshot

The primary developer checkouts were found in WSL `Ubuntu-24.04-Recovered`. These paths are local operating references, not transfer requirements.

| Venture | Absolute local path | Branch at discovery | Worktree state at discovery |
|---|---|---|---|
| AutomatedEmpires | `/home/jackson/automatedempires/automatedempires` | `codex/production-public-site` | Clean |
| Explore&Earn | `/home/jackson/automatedempires/ventures/explore-and-earn` | `design/vision-audit-and-4-categories` | Preserve: 106 unstaged tracked files, 27 untracked files, and one local commit ahead of the tracking branch |
| ORAN | `/home/jackson/automatedempires/ventures/oran` | `feat/portfolio-convergence-azure-exit` at `217cd962de1633321cae49327dbc089fc4ad7377` | Preserve: branch matches upstream and is nine commits ahead of `main`; one untracked deployment workflow |
| BidSpace | `/home/jackson/automatedempires/ventures/bidspace` | `integration/recovered-bidspace-product` | Preserve: one untracked Codex configuration file |
| Lake & Pine | `/home/jackson/automatedempires/ventures/lakeandpine` | `feat/production-foundation` at `e1fe8f00f3e50ede86a2f6e3af75ea1e8cdded1a` | Clean and matches upstream; five commits ahead of `main` |
| Sweepza | `/home/jackson/automatedempires/ventures/sweepza` | `frontier/world-class` | Clean |
| LogLoads | `/home/jackson/automatedempires/ventures/logloads` | `feature/backend-foundation` at `cce1c4494ae49d28aacc42724ab7245668474ab7` | Preserve: branch diverges 22 feature-only/8 main-only; two unstaged tracked files, one untracked file, and ignored prebuilt output |

No existing developer checkout was modified during portfolio inspection. The empty Git shell at `C:\Users\autom\OneDrive\Documents\AutomatedEmpires` has no commits or origin and is not the canonical parent repository.

## Naming and architecture exceptions

- `lake-and-pine` is the portfolio slug, while the current repository and Vercel naming use `lakeandpine`. Renaming requires an explicit migration decision; documentation should preserve both identities until then.
- ORAN's GitHub repository is named `Open-Resource-Access-Network`. Its current working branch intentionally removes Azure deployment assets in favor of Vercel, but that change is not merged. The empty Vercel shell is a safe target reservation, not authority to connect, deploy, or change DNS before the branch passes preview verification.
- LogLoads has a dated runtime exception: its current engine is single-writer with a persistent local volume and Supabase snapshot mirror. Correct Vercel root/build settings do not authorize production promotion; choose a compatible single-node host or complete and test a stateless database refactor first.
- BidSpace has no verified domain decision. Domain-dependent email and DNS work remains blocked until a name is selected and a domain is purchased or verified.
- Public registration and DNS results do not prove authenticated registrar-account control. Account ownership must be confirmed before transfer or record changes.

## Companion records

- [`VERCEL_PROJECT_MATRIX.md`](VERCEL_PROJECT_MATRIX.md) records canonical and duplicate-candidate Vercel projects.
- [`SUPABASE_PROJECT_MATRIX.md`](SUPABASE_PROJECT_MATRIX.md) records venture-specific database projects.
- [`DOMAIN_DNS_MATRIX.md`](DOMAIN_DNS_MATRIX.md) records the public domain, routing, mail, and authentication posture.
