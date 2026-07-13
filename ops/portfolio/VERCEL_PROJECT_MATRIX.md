# Vercel Project Matrix

**Verified snapshot:** 2026-07-10

> Execution source update (2026-07-12): current repository sources later advanced through AutomatedEmpires #12 `408fca3`, Explore&Earn #245 `5989853`, BidSpace #64 `69a53c4`, Lake & Pine #3 `e65b3b6`, Sweepza #53 `f2977cb`, LogLoads #22 `6f7ebcd`, and ORAN #67 `8da2101`. Older artifacts below remain exact deployed-source evidence, not current-main labels.

Project identifiers remain shortened. Exact deployment IDs are retained as non-secret release evidence; credentials, secret values, temporary URLs, and share tokens are excluded.

## Intended venture projects

| Venture | Project label | Vercel project ID | Git connection | Production branch | Root directory | Deployment / domain state | Classification |
|---|---|---|---|---|---|---|---|
| AutomatedEmpires | `automatedempires` | project `…TxHhy9w1` | Connected to venture repository | `main` | `.` | Current source #12 `408fca3`; production `dpl_4b8tDpSmz71WTGmrgRigPb7k5bT9` is `READY` from prior source `664cda6…` and remains a rollback candidate; public DNS remains Website Builder | Canonical; current-source deployment revalidation and DNS smoke/cutover open |
| Explore&Earn | Canonical Explore&Earn project | project `…Mkwxt2D` | `AutomatedEmpires/explore-and-earn` | `main` | `apps/web` | Current source #245 `5989853`; clean production `dpl_5HCPaCNCQuyip2iZTHpoMvSxjQFY` remains prior-source evidence from `b616b9e…`, serving `exploreandearn.com` | Canonical; current-source deployment revalidation plus auth/money/mail gates open |
| ORAN | `oran` | project `…X9QLy` | Linked by execution pass; Git/runtime settings require current re-verification | `main` source through merged #67 `8da2101` | `.` | Protected noindex Preview `dpl_9QdKsovZZcASrdgCqENysSF9XSNd` at `8da2101`; `/` and `/status` return `200`; runtime provider variables are empty; no custom domain/public rollout | Canonical shell/build evidence; product/data/runtime/support/schema/rollback gates remain |
| BidSpace | `bidspace` | project `…GZlwO` | Connected to venture repository | `main` | `apps/web` | Current source #64 `69a53c4`; Preview `dpl_3vFJAPyiQqWr95woTY51mKBT1W1S` and production `dpl_GQ2yhiJjwchgt7rJDSbU8Y8JuVDp` remain `READY` from prior source `2fe90a3…`; no custom domain | Canonical; current-source deployment revalidation and custom-domain gate open |
| Lake & Pine | `lakeandpine` | project `…t3FePz` | Connected | `main` | `apps/web` | Current source #3 `e65b3b6`; clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` and Preview `dpl_BBy…` remain `READY` from prior source `1b6a877…`; dirty artifact is historical only | Canonical; current-source deployment revalidation and functional DNS cutover open |
| Sweepza | `sweepza` | project `…W8AEuU` | `AutomatedEmpires/sweepza` | `main` | `.` | Current source #53 `f2977cb`; corrected exact-source Preview `dpl_b4bLyYvsoFLou5GxGYnapC14QPzX` is `READY`; older production `dpl_9N57qj7PHDteARUpVFWCKAxYutts` remains rollback evidence; no Production redeploy | Canonical technical evidence; product reconciliation and Production gates open |
| LogLoads | `logloads` | project `…l7qRW4` | Connected | `main` | `apps/web` | Current source #22 `6f7ebcd`; Preview `dpl_8RY71TfokWZNaVZgbZgmDvMWyRf4` and production `dpl_XxrZAJ1567EbtnkSg2XxWq88dPtF` remain `READY` from prior source `9c9e107…`; live Supabase/data/provider cutover did not occur | Current-source deployment revalidation plus live-upgrade/limiter/provider/rollback gates remain |

## Duplicate candidates

| Candidate project | Vercel project ID | Current state | Git connection | Classification | Safe next action |
|---|---|---|---|---|---|
| `sweepza-canary` | project `…XvlgF6U` | `READY` | Unconnected | `delete-review` only | Confirm aliases, traffic, environment metadata, and purpose before deletion review |
| `explore-and-earn-vercel-fix` | project `…sTpeQ0` | Empty | Unconnected | `delete-review` only | Confirm no aliases, protected metadata, or recovery purpose before deletion review |

Neither candidate is authorized for deletion by this record.

## Required follow-up

1. Revalidate AutomatedEmpires current source #12 against the recorded `READY` deployment evidence; complete functional smoke/rollback and reversible DNS planning before replacing Website Builder.
2. Revalidate BidSpace current source #64 against `READY` production `dpl_GQ2yhiJjwchgt7rJDSbU8Y8JuVDp`; keep custom-domain/email work deferred and continue on protected provider hostnames with synthetic data only.
3. Revalidate LogLoads current source #22 against `READY` production `dpl_XxrZAJ1567EbtnkSg2XxWq88dPtF`. Prove backup/live upgrade, environment provenance, Supabase-first shared atomic rate limiting plus exact-SHA multi-instance/outage behavior, provider activation, functional rollback, and live migration before treating it as live service authority.
4. Revalidate Lake & Pine current source #3 against `READY` production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk`; complete functional rollback/DNS smoke before changing owned-domain records. The legacy dirty artifact is not current source truth.
5. Verify environment ownership and Doppler synchronization for Explore&Earn and Sweepza; their Git links, production branches, and roots are now verified.
6. Preserve ORAN merged source #67 and protected exact-SHA Preview as shell/build evidence. Establish a safe scoped data/credential lane, prove the chat-first MVP, reconcile schema authority without unsafe replay, and pass functional rollback before broader access; DNS remains blocked.
7. Do not attach domains to duplicate candidates or copy another venture's environment variables into them.
