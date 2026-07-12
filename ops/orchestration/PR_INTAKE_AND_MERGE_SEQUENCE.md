# PR Intake and Merge Sequence

**Snapshot:** 2026-07-12
**Rule:** This is a recommendation, not merge authorization. Agent 5 did not merge, close, mark ready, rebase, or delete anything.

## Intake summary

| Item | Current state | Scope | Conflict assessment | Recommendation |
|---|---|---|---|---|
| [AutomatedEmpires PR #8](https://github.com/AutomatedEmpires/automatedempires/pull/8) | Open draft; mergeable; CI run 26 and Vercel successful; head `5746120c` | 45 operations files; Pass 5 Mapbox/PostHog evidence and accepted Sweepza support-address note | No file overlap with #9 or the new orchestration folder | Review first. If the evidence and support note are accepted, mark ready and merge through the normal independent approval path |
| [AutomatedEmpires PR #9](https://github.com/AutomatedEmpires/automatedempires/pull/9) | Open draft; mergeable; CI run 25 and Vercel successful; head `8cf410da` | Five security-readiness reports plus `package.json` and `pnpm-lock.yaml` | Zero file overlap with #8, but it changes the dependency graph | Review after #8, update/revalidate against the new main, then merge only if checks remain green |
| Agent 5 orchestration branch | `codex/portfolio-orchestrator`; docs-only PR pending | Seven new files under `ops/orchestration/` | Unique folder; semantic staleness is the risk, not textual conflict | Open draft now; merge after #8/#9 and refresh all statuses immediately before approval |
| Agent 2 rollout docs | Local-only `codex/rollout-readiness-docs`, commit `87965f0e`; six new files | `ops/rollout-readiness/` only | Unique folder. Original Windows-mounted worktree has broad mode-only drift | After #8/#9, create a fresh branch from updated main and cherry-pick only `87965f0e`; review as docs-only |
| Agent 3 governance audit | Local-only `codex/account-governance-inventory`; five untracked files | `ops/account-governance/` only | Unique folder. Original worktree has mode-only drift | Copy only five files to a fresh branch, run credential-pattern and diff checks, then commit/open docs-only PR |
| Active governance registry | Local-only `codex/provider-governance-registry`; six untracked docs | `ops/provider-governance/` only | Unique folder but depends semantically on Agent 3 | Finish under the existing single writer; publish after or with an explicit dependency on Agent 3's audit |
| [Explore&Earn PR #244](https://github.com/AutomatedEmpires/explore-and-earn/pull/244) | Open draft; mergeable; CI, CodeQL, Migration Guard, and Vercel successful; head `04c67fd7` | One readiness report | Separate repository; no parent-repo file conflict | Review as documentation and remediation evidence only. Acceptance must preserve the hard NO-GO; it is not launch approval |
| Active Sweepza preflight | Local-only `codex/sweepza-independence-preflight`; five untracked docs | `ops/sweepza/` | Separate repository, but operational dependency overlaps E&E Stripe/email evidence | Complete evidence-only preflight under its existing writer; do not activate providers until E&E replacement endpoint proof and founder decisions |

## Recommended sequence

1. **Review and, if accepted, merge PR #8.** Confirm its Pass 5 claims remain scoped and that the Sweepza note says address ownership/aliases are available while activation remains deferred.
2. **Update and revalidate PR #9 against post-#8 main.** The files do not overlap, but dependency/lockfile changes deserve a fresh CI and mergeability check.
3. **Refresh and merge the Agent 5 orchestration PR.** It should record the final #8/#9 outcome before approval.
4. **Publish Agent 2's six rollout documents.** Use a clean branch and cherry-pick `87965f0e`; never stage the original mode-drifted worktree.
5. **Publish Agent 3's five account-governance reports.** Use a clean branch and stage only the intended files.
6. **Publish the provider-governance registry after Agent 3 is accepted.** Keep it documentation-only; registry completion is not proof of backup-admin or recovery changes.
7. **Review PR #244 in parallel or next.** It is safe to accept as a NO-GO report if the evidence is accurate. Do not infer Production, money, or token-retirement approval.
8. **Continue the existing Explore&Earn Phase 2 lane only after ownership and founder-attended scopes are confirmed.** No Production promotion follows automatically.
9. **Continue the existing Sweepza preflight without provider activation.** Full execution follows only after its E&E dependencies and founder decisions close.

## Revalidation checklist before every merge

- Head SHA and changed-file list are unchanged from the reviewed state.
- Draft/ready state and required reviews follow repository policy.
- CI, security, and Vercel checks are current at the head SHA.
- No credential-shaped strings, customer data, private provider URLs, or recovery details are present.
- Status language does not convert a document, build, or deployment into Production/money/transfer readiness.
- The branch is based on the expected upstream state and has no unrelated mode-only or user-owned changes.

## Branches that must not be cleaned or repurposed

- `codex/production-public-site` — 14 unique local commits and gone upstream.
- `docs/canon-alignment` — 3 unique local commits and gone upstream.
- `align/ci-runtime` — 2 unique local commits and gone upstream.
- `feat/signature-experience` — 17 unique local commits and no upstream.
- All Agent 1–8 worktrees listed in the active task board.
