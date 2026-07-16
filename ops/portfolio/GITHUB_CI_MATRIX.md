# GitHub and CI Matrix

**Verified snapshot:** 2026-07-10

> Later execution supersession (2026-07-12): current sources advanced through AutomatedEmpires #12 `408fca3`, Explore&Earn #245 `5989853`, ORAN #67 `8da2101`, BidSpace #64 `69a53c4`, Lake & Pine #3 `e65b3b6`, Sweepza #53 `f2977cb`, and LogLoads #22 `6f7ebcd`. The table below preserves the Pass 4 CI/deployment snapshot for those exact earlier SHAs; use the execution log before calling any row current.

All seven canonical repositories are public and owned by AutomatedEmpires. Pass 4 configured real `main` protections/security, converged accepted work, preserved active/unique branches, closed stale PRs, and pruned only proven-obsolete heads. Official GitHub CLI authentication remains pending, but it did not prevent authenticated provider/UI remediation.

Secret values were never requested or displayed. The five Explore&Earn repository secret names remain write-only inventory and must not be deleted until each workflow consumer has a verified Doppler-backed replacement.

| Venture | Canonical repository | Required `main` contexts | Current source / CI state | Protection state |
|---|---|---|---|---|
| AutomatedEmpires | `AutomatedEmpires/automatedempires` | `ci / verify`, `ci / design-guardrails`; default CodeQL | Current default `664cda67bc7bc91e4f1577d76bbe7758290f3a2d`; site PR #5 and Dependabot #7 merged; clean production `dpl_4b8tDpSmz71WTGmrgRigPb7k5bT9` `READY`; ops publication is this Pass 5 branch | **Fixed and verified**; ops publication open |
| Explore&Earn | `AutomatedEmpires/explore-and-earn` | `verify / verify`, `verify / design-guardrails`, `migration-guard`; custom CodeQL | #242/#243 merged; #243 passed CI, CodeQL, Migration Guard, and Vercel at `b616b9e10fa434422dd34442f6cb24194cf8d5ec`; clean production `dpl_5HCPaCNCQuyip2iZTHpoMvSxjQFY` `READY` | **Fixed and verified** |
| ORAN | `AutomatedEmpires/Open-Resource-Access-Network` | `Build`, `Lint`, `Test`, `Type Check`, `Security Audit`, `Runtime Readiness Contract`; custom CodeQL | Draft #58 `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da`; required contexts green, codecov/visual/runbook and data/Preview/rollback gates red; no deployment | **Protection fixed**; PR intentionally draft |
| BidSpace | `AutomatedEmpires/bidspace` | `ci / verify`, `ci / design-guardrails`; custom CodeQL | #61/#62 merged; late fixes #63 merged green `2fe90a3eb8cd9bffd43be1ac401d151ae4ad39e8`; production `dpl_GQ2yhiJjwchgt7rJDSbU8Y8JuVDp` `READY` | **Fixed and verified** |
| Lake & Pine | `AutomatedEmpires/lakeandpine` | `validate`; default CodeQL | #1 merged `1b6a877bc054a9239c2a430aaf668996de8a0302`; clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` `READY` | **Fixed and verified** |
| Sweepza | `AutomatedEmpires/sweepza` | `ci / verify`, `ci / design-guardrails`, `dependency-review`; custom CodeQL | #44 safely rewritten and merged green as current default `4c0aad183fe9442e4546985b373b26498e38e6e7`; production `dpl_9N57qj7PHDteARUpVFWCKAxYutts` `READY` | **Fixed and verified** |
| LogLoads | `AutomatedEmpires/logloads` | `ci / verify`, `migrations`, `dependency-review`; custom CodeQL | #6 final head `f280ef4fef4b992f94457aad61cfe27e8ec91791` merged green/current default `9c9e107082942e5bce782eac2ce71aa63eb7d9c0`; production `dpl_XxrZAJ1567EbtnkSg2XxWq88dPtF` `READY`; no live data/provider cutover | **Fixed and verified** |

## Shared protection and security policy

Each repository now has:

- strict up-to-date required checks using contexts that actually exist;
- required review-conversation resolution;
- linear history and squash-only merges;
- force pushes and `main` deletion disabled;
- admin bypass so green agentic operation is possible;
- secret scanning, push protection, vulnerability alerts, and Dependabot security updates enabled;
- default `GITHUB_TOKEN` permissions reduced to read-only.

No repository requires an approving review or signed commits; those are explicit agentic-governance choices, not missing evidence. Custom CodeQL is active in E&E/Sweepza/LogLoads/BidSpace/ORAN; AutomatedEmpires and Lake & Pine use default CodeQL setup. No GitHub environment secret names were observed for the venture Preview/Production environments.

API-verified Dependabot backlogs are not remediated merely because alerts are enabled: AutomatedEmpires 1 medium; Explore&Earn 4 medium; Lake & Pine 1 medium; LogLoads 1 medium/1 low; BidSpace 6 high/3 medium/1 low; Sweepza 0; ORAN 1 critical/27 high/26 medium/6 low.

## PR and branch convergence

- Merged: Explore&Earn #242/#243, AutomatedEmpires #5/#7, BidSpace #58/#59/#61/#62/#63, Lake & Pine #1, Sweepza #44/#47/#48/#49, LogLoads #6.
- Active and preserved: AutomatedEmpires ops draft #6 and ORAN draft #58 only.
- Explicitly closed as superseded during remediation: AutomatedEmpires #2–#4, BidSpace #18/#24/#26/#28/#35/#36/#38/#41–#49, Sweepza #28/#42/#43, and LogLoads #9/#12/#15/#18/#19 (27 total), all with comments.
- Closed corrupted: BidSpace #60; issues #53–#57 preserve its findings.
- Separately closed superseded: ORAN #59–#63, superseded by retained draft #58 at `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da`.
- Pass 4 closure total: 33 PRs—32 stale/superseded and one corrupted/duplicated.
- Pre-closed, branch pruned only in Pass 4: LogLoads #20 (rejected `1101bea…` 20-table architecture) and ORAN #43/#44/#47–#57 (older Dependabot PRs).
- Remote heads: 97 proven-obsolete branches explicitly deleted after preservation checks, plus 10 known accepted-PR auto-deletes—E&E #242/#243, Lake & Pine #1, Sweepza #47/#44, AutomatedEmpires #7, BidSpace #61/#62/#63, and LogLoads #6—for 107 known removals total. E&E/Sweepza/LogLoads/BidSpace/Lake & Pine are main-only; AutomatedEmpires retains only `main` plus active #6, and ORAN retains only `main` plus active #58.
- Archive evidence: rejected LogLoads architecture is preserved at annotated tag `archive/logloads-20-table-schema-20260607` (`1101beacf59d3e0950e88f43d94d85d831fca5a7`). Three unique-but-nonmergeable Sweepza concepts were preserved before branch deletion as annotated tags tied to issues [#50](https://github.com/AutomatedEmpires/sweepza/issues/50), [#51](https://github.com/AutomatedEmpires/sweepza/issues/51), and [#52](https://github.com/AutomatedEmpires/sweepza/issues/52).

## Repository safety

- Existing developer checkouts with uncommitted work were not overwritten; remediation used isolated clean worktrees.
- No committed live-key pattern, real environment file, or duplicated tracked secret fingerprint was found across the audited default-branch snapshots.
- Local validation is not equated with remote CI; Preview is not equated with merge; merge is not equated with production data/provider activation.
- Fleet-wide local cleanup is separately evidenced: 11 secondary worktrees and 13 merged/closed local feature branches were removed. BidSpace/E&E/Lake & Pine/LogLoads/Sweepza primary clones are clean exact `origin/main`; ORAN retains one clean exact active-PR checkout; AutomatedEmpires retains the active ops branch until this pack is committed and merged.
