# Vercel Project Matrix

**Verified snapshot:** 2026-07-10

Project IDs are non-secret resource identifiers. Environment-variable values and deployment credentials are intentionally excluded. Deployment status reflects the provider state observed on the snapshot date.

## Intended venture projects

| Venture | Project label | Vercel project ID | Git connection | Production branch | Root directory | Deployment / domain state | Classification |
|---|---|---|---|---|---|---|---|
| AutomatedEmpires | `automatedempires` | `prj_eNjb9e1f7GONqtKQHYFkTxHhy9w1` | Connected to the venture GitHub repository | `main` | `.` | Protected PR preview `dpl_ePztayqv8K2wWHZZ9CKYjZQFT461` is `READY`; no production deployment/domain; `automatedempires.com` remains on GoDaddy Website Builder | Canonical; preview-verified |
| Explore&Earn | Canonical Explore&Earn project | `prj_yzc9KMx1YpC3n3NMAV1skMkwxt2D` | `AutomatedEmpires/explore-and-earn` | `main` | `apps/web` | Production `READY`; serves `exploreandearn.com` | Canonical and active |
| ORAN | `oran` | `prj_pQlCLP4RXGr2eJTo7fzZyMPX9QLy` | Unconnected | Not configured | `.` | Empty Next.js/Node 24 shell: no deployment or domain; deliberately deferred until the Azure-to-Vercel branch is merged and verified | Canonical shell; deliberate defer |
| BidSpace | `bidspace` | `prj_ZumWyHo2GSF59j7dWQkkX6NGZlwO` | Connected to the venture GitHub repository | `main` | `apps/web` | No deployment observed; no production domain decision | Canonical; connection complete, initial deployment pending |
| Lake & Pine | `lakeandpine` | `prj_vVueSPzV7THkp0O3xfqlKNt3FePz` | Connected to the venture GitHub repository | `main` | `apps/web` | Production `READY` at `lakeandpine.vercel.app`, but the aliased deployment was a dirty redeploy from `feat/production-foundation`, not `main` | Canonical project; source-convergence blocker |
| Sweepza | `sweepza` | `prj_RkvzmVMzo4kFUXbeO31dUtW8AEuU` | `AutomatedEmpires/sweepza` | `main` | `.` | Production `READY`; serves `sweepza.com` | Canonical and active |
| LogLoads | `logloads` | `prj_PR8dD2yjARgzZE1AyfZzafl7qRW4` | Connected to the venture GitHub repository | `main` | `apps/web` | Preview `READY`; production `ERROR` with `ENOENT`; both observed deployments came from dirty `feature/backend-foundation` source rather than `main` | Canonical project; build and source-convergence blocked |

## Duplicate candidates

| Candidate project | Vercel project ID | Current state | Git connection | Classification | Safe next action |
|---|---|---|---|---|---|
| `sweepza-canary` | `prj_aJAMiBBYVSFe1jdsXpbnrXvlgF6U` | `READY` | Unconnected | `delete-review` only | Confirm aliases, traffic, environment metadata, and deployment purpose before archiving or deleting |
| `explore-and-earn-vercel-fix` | `prj_WQo89olMk9kPIByR8M5Sy8sTpeQ0` | Empty | Unconnected | `delete-review` only | Confirm it has no aliases, protected environment metadata, or recovery purpose before archiving or deleting |

Neither candidate is authorized for deletion by this record.

## Required follow-up

1. Review/merge the patched AutomatedEmpires preview, deploy `main`, and verify the production provider hostname before planning any `automatedempires.com` DNS cutover.
2. Trigger BidSpace's first safe deployment only after its required environment names and build expectations are verified.
3. Repair LogLoads production `ENOENT` while preserving the known-good preview; verify the production build uses root `apps/web` and the connected `main` branch.
4. Merge/reproduce Lake & Pine's production-foundation work cleanly on the intended branch and prove a main-based deployment before treating the ready alias as transferable.
5. Verify environment ownership and Doppler synchronization for Explore&Earn and Sweepza; their Git links, production branches, and roots are now verified.
6. Keep the ORAN Vercel shell unconnected and undeployed until the existing Azure-to-Vercel convergence branch is merged and preview-verified; then connect the canonical repository and plan a reversible DNS cutover.
7. Do not attach domains to duplicate candidates or copy another venture's environment variables into them.
