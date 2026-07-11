# Vercel Project Matrix

**Verified snapshot:** 2026-07-10

Project IDs are non-secret resource identifiers. Environment-variable values and deployment credentials are intentionally excluded. Deployment status reflects the provider state observed on the snapshot date.

## Intended venture projects

| Venture | Project label | Vercel project ID | Git connection | Production branch | Root directory | Deployment / domain state | Classification |
|---|---|---|---|---|---|---|---|
| AutomatedEmpires | `automatedempires` | `prj_eNjb9e1f7GONqtKQHYFkTxHhy9w1` | Connected to the venture GitHub repository | `main` | `.` | Protected PR preview `dpl_7eWQBY2ULsfcPTnQ17aSmN3EAhm9` is `READY`. Draft PR #6 is open/mergeable at `cc8000a…` with Vercel status success. Earlier production-target `dpl_3FCYsGgYNJEnJJEMhmQjksbjL7zm` remains `ERROR`; no functional production/custom domain exists and public DNS remains on GoDaddy Website Builder | Canonical; draft preview verified; merge/main/production gates open |
| Explore&Earn | Canonical Explore&Earn project | `prj_yzc9KMx1YpC3n3NMAV1skMkwxt2D` | `AutomatedEmpires/explore-and-earn` | `main` | `apps/web` | Production `READY`; serves `exploreandearn.com` | Canonical and active |
| ORAN | `oran` | `prj_pQlCLP4RXGr2eJTo7fzZyMPX9QLy` | Unconnected | Not configured | `.` | Node 24, `live=false`, no domain and no deployments. Base `217cd962…` has isolated local remediation commit `5ec3561…`; validation passes, but the branch/workflow are not pushed and Preview credentials/runtime vars are absent | Canonical shell; **no deployment** pending review, exact-SHA Preview, ledger reconciliation, and functional rollback |
| BidSpace | `bidspace` | `prj_ZumWyHo2GSF59j7dWQkkX6NGZlwO` | Connected to the venture GitHub repository | `main` | `apps/web` | No deployment observed; no production domain decision | Canonical; connection complete, initial deployment pending |
| Lake & Pine | `lakeandpine` | `prj_vVueSPzV7THkp0O3xfqlKNt3FePz` | Connected | `main` | `apps/web` | Node 24, `live=false`; two READY target=production dirty `122dd312` artifacts, latest `dpl_AaAE…`. Local clean commit `a55ccff…` adds validated CI/case repair but is unpushed/no Preview | Canonical; clean exact-SHA provenance/main convergence blocked |
| Sweepza | `sweepza` | `prj_RkvzmVMzo4kFUXbeO31dUtW8AEuU` | `AutomatedEmpires/sweepza` | `main` | `.` | Production `READY`; serves `sweepza.com` | Canonical and active |
| LogLoads | `logloads` | `prj_PR8dD2yjARgzZE1AyfZzafl7qRW4` | Connected to the venture GitHub repository | `main` | `apps/web` | Preview `dpl_Ejx66Z9wZFJiPJ5341j61voT7cHF` is `READY`; production `dpl_5LdZ4qWv7P1B68iYi3zZoJBM7wLN` is `ERROR` with `ENOENT`. Both are dirty `feature/backend-foundation` artifacts. Feature head `cce1c4494ae49d28aacc42724ab7245668474ab7` diverges from `main` `e78b48c292c57339a0610fcdbf2effa08827dc40` by 22 feature-only and 8 main-only commits | Canonical project; **no production promotion** until single-writer persistent-volume versus async-database/Vercel architecture is decided and tested |

## Duplicate candidates

| Candidate project | Vercel project ID | Current state | Git connection | Classification | Safe next action |
|---|---|---|---|---|---|
| `sweepza-canary` | `prj_aJAMiBBYVSFe1jdsXpbnrXvlgF6U` | `READY` | Unconnected | `delete-review` only | Confirm aliases, traffic, environment metadata, and deployment purpose before archiving or deleting |
| `explore-and-earn-vercel-fix` | `prj_WQo89olMk9kPIByR8M5Sy8sTpeQ0` | Empty | Unconnected | `delete-review` only | Confirm it has no aliases, protected environment metadata, or recovery purpose before archiving or deleting |

Neither candidate is authorized for deletion by this record.

## Required follow-up

1. Review/merge the patched AutomatedEmpires preview, deploy `main`, and verify the production provider hostname before planning any `automatedempires.com` DNS cutover.
2. Trigger BidSpace's first safe deployment only after its required environment names and build expectations are verified.
3. Do not promote LogLoads on Vercel merely by repairing `ENOENT`. First choose and test either the dated single-writer/persistent-volume runtime or a completed async-database/stateless Vercel architecture; then converge the diverged Git history and rebuild from a clean exact SHA.
4. Review and push Lake & Pine local commit `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c`, then prove a clean exact-SHA Preview and main deployment before replacing `dpl_AaAEZZz9Ma442TDNygN6ypLsQCMt` or treating the alias as transferable.
5. Verify environment ownership and Doppler synchronization for Explore&Earn and Sweepza; their Git links, production branches, and roots are now verified.
6. Keep the ORAN shell unconnected and undeployed until local remediation `5ec356195eb2bc13efc1e07c536a83a76bf036e7` is reviewed/pushed, required Preview credentials and runtime variables are safely installed, the 53-to-1 migration-ledger mismatch is resolved, and an exact-SHA prebuilt Preview passes. DNS still requires a functional rollback target.
7. Do not attach domains to duplicate candidates or copy another venture's environment variables into them.
