# Vercel Project Matrix

**Verified snapshot:** 2026-07-10

Project IDs are non-secret resource identifiers. Environment-variable values and deployment credentials are intentionally excluded. Deployment status reflects the provider state observed on the snapshot date.

## Intended venture projects

| Venture | Project label | Vercel project ID | Git connection | Production branch | Root directory | Deployment / domain state | Classification |
|---|---|---|---|---|---|---|---|
| AutomatedEmpires | `automatedempires` | `prj_eNjb9e1f7GONqtKQHYFkTxHhy9w1` | Connected to the venture GitHub repository | `main` | `.` | Pass 2 protected PR preview `dpl_7eWQBY2ULsfcPTnQ17aSmN3EAhm9` is `READY`. An earlier production-target artifact `dpl_3FCYsGgYNJEnJJEMhmQjksbjL7zm` is `ERROR`; no functional production/custom domain exists and `automatedempires.com` remains on GoDaddy Website Builder | Canonical; preview-verified; errored production artifact retained for review |
| Explore&Earn | Canonical Explore&Earn project | `prj_yzc9KMx1YpC3n3NMAV1skMkwxt2D` | `AutomatedEmpires/explore-and-earn` | `main` | `apps/web` | Production `READY`; serves `exploreandearn.com` | Canonical and active |
| ORAN | `oran` | `prj_pQlCLP4RXGr2eJTo7fzZyMPX9QLy` | Unconnected | Not configured | `.` | Empty Next.js/Node 24 shell: no deployment or domain. Preview candidate is remote branch `feat/portfolio-convergence-azure-exit` at `217cd962de1633321cae49327dbc089fc4ad7377`, nine commits ahead of `main` `1dc1291d61cc9f27ee830f980e32eabd52248083`; its production workflow remains untracked | Canonical shell; deliberate defer pending clean preview and functional rollback |
| BidSpace | `bidspace` | `prj_ZumWyHo2GSF59j7dWQkkX6NGZlwO` | Connected to the venture GitHub repository | `main` | `apps/web` | No deployment observed; no production domain decision | Canonical; connection complete, initial deployment pending |
| Lake & Pine | `lakeandpine` | `prj_vVueSPzV7THkp0O3xfqlKNt3FePz` | Connected to the venture GitHub repository | `main` | `apps/web` | Deployment `dpl_AaAEZZz9Ma442TDNygN6ypLsQCMt` is `READY` at `lakeandpine.vercel.app`, but it was a dirty redeploy from `feat/production-foundation`. Current clean branch head is `e1fe8f00f3e50ede86a2f6e3af75ea1e8cdded1a`, five commits ahead of prototype-only `main` `0b7116f72878ba3f67e3ff9948a11da83cc5bab7`; the deployment is not proven byte-for-byte equal to that head | Canonical project; source-provenance and main-root blocker |
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
4. Review and merge/reproduce Lake & Pine candidate `e1fe8f00f3e50ede86a2f6e3af75ea1e8cdded1a`, add CI, and prove a clean main-based deployment before replacing `dpl_AaAEZZz9Ma442TDNygN6ypLsQCMt` or treating the alias as transferable.
5. Verify environment ownership and Doppler synchronization for Explore&Earn and Sweepza; their Git links, production branches, and roots are now verified.
6. Keep the ORAN shell unconnected and undeployed until candidate `217cd962de1633321cae49327dbc089fc4ad7377` has corrected CI/runtime contracts and passes an exact-SHA prebuilt preview. DNS cutover also requires a functional rollback target; restoring the currently broken Azure A record is state restoration, not service recovery.
7. Do not attach domains to duplicate candidates or copy another venture's environment variables into them.
