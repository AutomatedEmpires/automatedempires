# AutomatedEmpires Venture Registry

**Verified snapshot:** 2026-07-10
**Operating model:** Shared ownership. Separated operations.

This registry identifies the seven portfolio businesses and their current code, domain, hosting, and data boundaries. Provider resource IDs are identifiers, not credentials. Secret values are intentionally excluded.

## Portfolio registry

| Venture | Canonical slug | Role | Canonical GitHub repository | Public domain state | Hosting state | Data state |
|---|---|---|---|---|---|---|
| AutomatedEmpires | `automatedempires` | Parent company and public portfolio authority | `AutomatedEmpires/automatedempires` | `automatedempires.com` is registered at GoDaddy; the apex currently resolves to GoDaddy Website Builder | Intended Vercel project exists but has no deployment | No Supabase project; none is currently needed for the public studio site |
| Explore&Earn | `explore-and-earn` | Standalone marketplace venture | `AutomatedEmpires/explore-and-earn` | `exploreandearn.com` is registered at GoDaddy; apex and `www` resolve to Vercel | Canonical Vercel deployment is `READY` | Dedicated healthy Supabase project in `us-west-2` |
| ORAN | `oran` | Standalone civic-infrastructure venture | `AutomatedEmpires/Open-Resource-Access-Network` | `openresourceaccessnetwork.com` is registered at GoDaddy; the current Azure target returns a 404 and presents invalid TLS | An empty Vercel project shell now exists. The Azure-to-Vercel convergence branch is not merged, connected, deployed, or cut over | Dedicated healthy Supabase project in `us-east-1`; it is referenced by the convergence work, but the remote migration ledger is incomplete |
| BidSpace | `bidspace` | Standalone auction venture | `AutomatedEmpires/bidspace` | No candidate production domain was discovered; do not invent one | Connected Vercel project exists, but no deployment was observed | Dedicated healthy Supabase project in `us-west-1` |
| Lake & Pine | `lake-and-pine` | Standalone service venture | `AutomatedEmpires/lakeandpine` | Candidate `lakepinecleaning.com` is unregistered and has no DNS | Vercel alias is `READY`, but its production deployment is a dirty redeploy from `feat/production-foundation`, while the configured production branch is `main` | Dedicated healthy Supabase project in `us-west-1`; the current runtime binding was verified and imported into Doppler staging and production |
| Sweepza | `sweepza` | Standalone sweepstakes venture | `AutomatedEmpires/sweepza` | `sweepza.com` is registered at GoDaddy; apex and `www` resolve to Vercel | Canonical Vercel deployment is `READY` | Dedicated healthy Supabase project in `us-east-1` |
| LogLoads | `logloads` | Standalone logistics venture | `AutomatedEmpires/logloads` | `logloads.com` is registered at GoDaddy; the apex currently resolves to GoDaddy Website Builder | Vercel preview is `READY`, production is `ERROR` with `ENOENT`, and both deployments are dirty feature-branch artifacts rather than reproducible `main` | Dedicated healthy Supabase project in `us-west-1` |

## Local repository safety snapshot

The primary developer checkouts were found in WSL `Ubuntu-24.04-Recovered`. These paths are local operating references, not transfer requirements.

| Venture | Absolute local path | Branch at discovery | Worktree state at discovery |
|---|---|---|---|
| AutomatedEmpires | `/home/jackson/automatedempires/automatedempires` | `codex/production-public-site` | Clean |
| Explore&Earn | `/home/jackson/automatedempires/ventures/explore-and-earn` | `design/vision-audit-and-4-categories` | Preserve: 106 unstaged tracked files, 27 untracked files, and one local commit ahead of the tracking branch |
| ORAN | `/home/jackson/automatedempires/ventures/oran` | `feat/portfolio-convergence-azure-exit` | Preserve: one untracked deployment workflow |
| BidSpace | `/home/jackson/automatedempires/ventures/bidspace` | `integration/recovered-bidspace-product` | Preserve: one untracked Codex configuration file |
| Lake & Pine | `/home/jackson/automatedempires/ventures/lakeandpine` | `feat/production-foundation` | Clean |
| Sweepza | `/home/jackson/automatedempires/ventures/sweepza` | `frontier/world-class` | Clean |
| LogLoads | `/home/jackson/automatedempires/ventures/logloads` | `feature/backend-foundation` | Preserve: two unstaged tracked files and one untracked file |

No existing developer checkout was modified during portfolio inspection. The empty Git shell at `C:\Users\autom\OneDrive\Documents\AutomatedEmpires` has no commits or origin and is not the canonical parent repository.

## Naming and architecture exceptions

- `lake-and-pine` is the portfolio slug, while the current repository and Vercel naming use `lakeandpine`. Renaming requires an explicit migration decision; documentation should preserve both identities until then.
- ORAN's GitHub repository is named `Open-Resource-Access-Network`. Its current working branch intentionally removes Azure deployment assets in favor of Vercel, but that change is not merged. The empty Vercel shell is a safe target reservation, not authority to connect, deploy, or change DNS before the branch passes preview verification.
- BidSpace has no verified domain decision. Domain-dependent email and DNS work remains blocked until a name is selected and a domain is purchased or verified.
- Public registration and DNS results do not prove authenticated registrar-account control. Account ownership must be confirmed before transfer or record changes.

## Companion records

- [`VERCEL_PROJECT_MATRIX.md`](VERCEL_PROJECT_MATRIX.md) records canonical and duplicate-candidate Vercel projects.
- [`SUPABASE_PROJECT_MATRIX.md`](SUPABASE_PROJECT_MATRIX.md) records venture-specific database projects.
- [`DOMAIN_DNS_MATRIX.md`](DOMAIN_DNS_MATRIX.md) records the public domain, routing, mail, and authentication posture.
