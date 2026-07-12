# AutomatedEmpires Active Task Board

**Snapshot:** 2026-07-12 16:20 PDT
**Owner:** Agent 5 — portfolio orchestration
**Operating rule:** One writer per repository/provider lane. A green build, a `READY` deployment, or a completed document is not by itself Production, money, or transfer approval.

## Current operating picture

| Agent | Role | Branch / PR | Files owned | Provider lane | Status | Blockers | Next action | No-touch zones | Founder decision? |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Explore&Earn production-readiness | `codex/explore-and-earn-production-readiness`; [E&E PR #244](https://github.com/AutomatedEmpires/explore-and-earn/pull/244) | `ops/explore-and-earn/PRODUCTION_READINESS_PASS.md`; Sweepza support-address delta in parent PR #8 | E&E Preview/test evidence only; no live money | Pass 1 complete; PR draft/green/mergeable; **NO-GO**. The same worktree now contains an uncommitted Phase 2 freeze, so this lane is active again | Dark Clerk, signed Stripe webhooks, incomplete `prd`, Supabase ledger/storage/tenant proof, functional rollback, mail receipt/reply, remote Mapbox fixture | Preserve PR #244 as the accepted Phase 1 evidence baseline; confirm the existing Phase 2 writer before further work | E&E Production alias, live Stripe, live Supabase, old Mapbox token, credentials, current design worktree | Yes — accept #244 as NO-GO evidence and confirm Phase 2 scope/attendance |
| 2 | Portfolio rollout-readiness docs | `codex/rollout-readiness-docs`; local commit `87965f0e`; no PR | Six files under `ops/rollout-readiness/` | None; documentation only | Complete locally; unpublished | Windows/WSL mode drift makes the original worktree unsafe to bulk-stage | After #8/#9, cherry-pick only `87965f0e` onto a fresh branch and open a docs-only PR | Original Agent 2 worktree; no provider writes; no readiness claims | Yes — authorize publication |
| 3 | Account-governance audit | `codex/account-governance-inventory`; no commit/PR | Five files under `ops/account-governance/` | Read-only provider/account evidence | Complete locally; uncommitted | No authoritative owner/billing/recovery/RBAC registry; mode drift in original worktree | Copy only the five reports to a fresh post-merge branch, secret-scan, commit, and open a docs-only PR | Original Agent 3 worktree; provider billing/RBAC; recovery details | Yes — authorize publication and governance priority |
| 4 | Security and CI readiness | `codex/security-ci-readiness`; [parent PR #9](https://github.com/AutomatedEmpires/automatedempires/pull/9) | Five `ops/security-readiness/` reports, `package.json`, `pnpm-lock.yaml` | None | Complete; draft/green/mergeable | Founder review; venture security backlog remains outside PR #9 | Review after #8; revalidate CI/mergeability, then merge only by founder/independent approver | Venture repos, providers, live data, E&E | Yes — approve #9 |
| 5 | Portfolio orchestrator | `codex/portfolio-orchestrator`; [parent PR #10](https://github.com/AutomatedEmpires/automatedempires/pull/10) | Seven files under `ops/orchestration/` | None | Draft open; docs-only | Must remain current with #8/#9/#244 and three already-active follow-on lanes | Keep draft; refresh after upstream decisions | All product/provider/runtime files and all other agent worktrees | Yes — merge only after #8/#9 and a freshness review |
| 6 | Explore&Earn Phase 2 blocker closer | Existing Agent 1 branch/worktree; uncommitted Phase 2 section detected | Only the isolated E&E Phase 2 worktree and approved Phase 2 artifacts | Dark Preview/test-only if explicitly authorized; never live money/Production | **Already active / ownership confirmation required** | Single-writer identity and founder-attended Clerk authority; Phase 1 PR not yet accepted | Do not spawn a duplicate. Confirm owner, freeze scope, then execute only approved dark/test/disposable work | Founder dirty E&E design checkout; Production; live DB; credential retirement | Yes — immediate ownership and controlled-write authorization |
| 7 | Governance registry implementation | `codex/provider-governance-registry`; no commit/PR | Six untracked files under `ops/provider-governance/` | None; docs-only registry | **Already active / uncommitted** | Original worktree has mode drift; reports depend on Agent 3 evidence | Do not spawn a duplicate. Finish in place, then move only six docs to a fresh branch for review | Provider invitations, roles, MFA, recovery, billing, DNS, credentials | Yes — approve registry truth and later provider-specific fixes |
| 8 | Sweepza controlled independence preflight | `codex/sweepza-independence-preflight`; no commit/PR | Five untracked files under `ops/sweepza/` | Read-only/preflight; no email, live money, or Clerk cutover | **Already active / NO-GO draft** | Preview not yet produced; foreign E&E Stripe endpoint/residue; Production uses dev Clerk; E&E dependency | Do not spawn a duplicate. Complete evidence-only preflight; keep execution gated behind E&E endpoint proof and founder decisions | Sweepza live Stripe objects, email activation, Production Clerk, Production deployment/DNS | Yes — Clerk strategy, Stripe residue disposition, email capacity |

## Single-writer lane locks

1. **Explore&Earn Phase 2:** only the isolated `ee-readiness-windows` worktree may be used. The founder's dirty WSL design/product checkout is excluded.
2. **Provider governance:** `codex/provider-governance-registry` owns `ops/provider-governance/`; Agent 3 owns the source audit under `ops/account-governance/`.
3. **Sweepza:** `codex/sweepza-independence-preflight` owns the current preflight. No second Sweepza agent may inspect or mutate shared Stripe/email/Clerk state.
4. **Parent PRs:** PR #8 owns Pass 5 portfolio/venture maps; PR #9 owns security reports and dependency files; Agent 5 owns only `ops/orchestration/`.

## Immediate board order

1. Founder review of PR #8.
2. Revalidate and founder review of PR #9 after #8.
3. Accept PR #244 only as a truthful NO-GO readiness report.
4. Confirm the existing Agent 6/7/8 writers; do not launch duplicates.
5. Publish Agent 2 and Agent 3 documents from clean branches, never from the mode-drifted worktrees.
