# Vercel Project Matrix

**Verified snapshot:** 2026-07-10

Project identifiers remain shortened. Exact deployment IDs are retained as non-secret release evidence; credentials, secret values, temporary URLs, and share tokens are excluded.

## Intended venture projects

| Venture | Project label | Vercel project ID | Git connection | Production branch | Root directory | Deployment / domain state | Classification |
|---|---|---|---|---|---|---|---|
| AutomatedEmpires | `automatedempires` | project `…TxHhy9w1` | Connected to venture repository | `main` | `.` | Default `ed91ece423583318fd7481278a7478311d867add`; clean merged-main production `dpl_5scDXWyVV2wq1ypwhcjmiBkQLpzT` is `READY` and a rollback candidate; public DNS remains Website Builder | Canonical; source/main deployment provenance fixed; DNS smoke/cutover open |
| Explore&Earn | Canonical Explore&Earn project | project `…Mkwxt2D` | `AutomatedEmpires/explore-and-earn` | `main` | `apps/web` | Default `b616b9e10fa434422dd34442f6cb24194cf8d5ec`; clean production `dpl_5HCPaCNCQuyip2iZTHpoMvSxjQFY` `READY`, serving `exploreandearn.com`; earlier exact-source Preview `dpl_BgD…` green | Canonical and active; source/main provenance fixed, real mail delivery open |
| ORAN | `oran` | project `…X9QLy` | Unconnected | Not configured | `.` | Node 24, `live=false`, zero deployments. Draft #58 exact head `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da` passes six required checks; Codecov patch, Visual Regression, runbook freshness, data lane, and rollback remain red | Canonical shell; **no deployment** pending ancillary repair, schema-authority reconciliation, exact-SHA Preview, and functional rollback |
| BidSpace | `bidspace` | project `…GZlwO` | Connected to venture repository | `main` | `apps/web` | #62 merged as `c2c15f1582c1f47bcd589b601819597dd7bea767`; #63/default `2fe90a3eb8cd9bffd43be1ac401d151ae4ad39e8`; Preview `dpl_3vFJAPyiQqWr95woTY51mKBT1W1S` and production `dpl_GQ2yhiJjwchgt7rJDSbU8Y8JuVDp` `READY`; no custom domain | Canonical; source/main deployment provenance fixed, custom domain deferred |
| Lake & Pine | `lakeandpine` | project `…t3FePz` | Connected | `main` | `apps/web` | PR #1/default `1b6a877bc054a9239c2a430aaf668996de8a0302`; clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` and prior exact-source Preview `dpl_BBy…` are `READY`; dirty artifact is historical only | Canonical; source/main deployment provenance fixed, functional DNS cutover open |
| Sweepza | `sweepza` | project `…W8AEuU` | `AutomatedEmpires/sweepza` | `main` | `.` | Safely rewritten #44/default `4c0aad183fe9442e4546985b373b26498e38e6e7`; Preview `dpl_DyK72pRkkjYCjAzTd7RJNE9uV7iN` and production `dpl_9N57qj7PHDteARUpVFWCKAxYutts` `READY`, serving `sweepza.com` | Canonical and active; source/main production provenance fixed |
| LogLoads | `logloads` | project `…l7qRW4` | Connected | `main` | `apps/web` | PR #6 final source `f280ef4fef4b992f94457aad61cfe27e8ec91791` merged to default `9c9e107082942e5bce782eac2ce71aa63eb7d9c0`; Preview `dpl_8RY71TfokWZNaVZgbZgmDvMWyRf4` and production `dpl_XxrZAJ1567EbtnkSg2XxWq88dPtF` `READY`; live Supabase/data/provider cutover did not occur | Source/main production provenance fixed; live-upgrade/provenance/rate-limit/provider/rollback gates remain |

## Duplicate candidates

| Candidate project | Vercel project ID | Current state | Git connection | Classification | Safe next action |
|---|---|---|---|---|---|
| `sweepza-canary` | project `…XvlgF6U` | `READY` | Unconnected | `delete-review` only | Confirm aliases, traffic, environment metadata, and purpose before deletion review |
| `explore-and-earn-vercel-fix` | project `…sTpeQ0` | Empty | Unconnected | `delete-review` only | Confirm no aliases, protected metadata, or recovery purpose before deletion review |

Neither candidate is authorized for deletion by this record.

## Required follow-up

1. AutomatedEmpires clean merged-main production `dpl_5scDXWyVV2wq1ypwhcjmiBkQLpzT` is `READY`; complete functional smoke/rollback and reversible DNS planning before replacing Website Builder.
2. BidSpace clean merged-main production `dpl_GQ2yhiJjwchgt7rJDSbU8Y8JuVDp` is `READY`; keep custom-domain/email work deferred and continue on provider hostnames.
3. LogLoads clean merged-main production `dpl_XxrZAJ1567EbtnkSg2XxWq88dPtF` is `READY`. Prove backup/live upgrade, environment provenance, distributed rate limiting, provider activation, functional rollback, and live migration before treating it as live service authority.
4. Lake & Pine clean merged-main production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` is `READY`; complete functional rollback/DNS smoke before changing owned-domain records. The legacy dirty artifact is not current source truth.
5. Verify environment ownership and Doppler synchronization for Explore&Earn and Sweepza; their Git links, production branches, and roots are now verified.
6. Keep the ORAN shell unconnected and undeployed while PR #58 remains draft. Repair its three ancillary failures, then require a safe scoped Preview data/credential lane, reconciled schema authority without replaying unsafe migrations, and a passing exact-SHA Preview. DNS still requires a functional rollback target.
7. Do not attach domains to duplicate candidates or copy another venture's environment variables into them.
