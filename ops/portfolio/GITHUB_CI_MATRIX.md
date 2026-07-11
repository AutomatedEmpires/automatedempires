# GitHub and CI Matrix

**Verified snapshot:** 2026-07-10

All seven repositories are public and owned by the AutomatedEmpires GitHub account. This is acceptable parent governance; runtime providers remain venture-specific. Secret values are write-only and were never requested or displayed.

| Venture | Canonical repository | Default-branch workflows | GitHub environments | Repository secret names | Current concern / safe action |
|---|---|---|---|---|---|
| AutomatedEmpires | AutomatedEmpires/automatedempires | None in the inspected branch | copilot | None | Draft PR #6 is open and mergeable at head `cc8000a4c85b3194a8c2049886e16afeb726f273`; Vercel status is successful. It remains draft and is not production authority. Review, merge, and verify `main` before DNS |
| Explore&Earn | AutomatedEmpires/explore-and-earn | CI, CodeQL, release, DB migration/guard, agent/review routers | copilot, Preview, Production | CLAUDE_CODE_OAUTH_TOKEN, SUPABASE_ACCESS_TOKEN, SUPABASE_DB_PASSWORD, SUPABASE_DB_URL, SUPABASE_PROJECT_ID | Five write-only secrets remain outside Doppler. Replace workflow consumers safely before removal; do not copy unknown values |
| ORAN | AutomatedEmpires/Open-Resource-Access-Network | CI, CodeQL, DB migration, Azure app/functions/infra deploy, project sync, maps rotation, accessibility, visual/bundle/runbook checks | copilot, production | None on the remote snapshot | Local commit `5ec356195eb2bc13efc1e07c536a83a76bf036e7` fixes Node/runtime/functions drift and adds a pinned exact-SHA Preview workflow. Local install/lint/typecheck/runtime/workflow, 3,753 tests, 149-page build, and production audit pass. **Not pushed:** Preview remains blocked by review, GitHub/Vercel Preview credentials/runtime vars, and the 53-to-1 migration-ledger mismatch |
| BidSpace | AutomatedEmpires/bidspace | CI, CodeQL, release | copilot | None | No deployment secrets; Vercel shell exists but first deploy/provider contract is incomplete |
| Lake & Pine | AutomatedEmpires/lakeandpine | None on default branch; pinned CI exists in unpushed local commit `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c` | None | None | Local commit on exact candidate adds CI/case repair; frozen install/lint/typecheck/build/workflow/diff pass; no tests. Clean/unpushed, no PR/Preview due GitHub auth/approval gate |
| Sweepza | AutomatedEmpires/sweepza | CI, CodeQL, dependency review, agent routers | copilot, Preview, Production | None | Provider sync depends on Doppler/runtime configuration; verify production Clerk/Stripe separation before any automated promotion |
| LogLoads | AutomatedEmpires/logloads | CI, CodeQL, release | copilot | None | `feature/backend-foundation` head `cce1c4494ae49d28aacc42724ab7245668474ab7` has 22 unique commits, `main` has 8 unique CI/release commits, and the working tree has three uncommitted deployment files. Preserve main workflows while integrating; CI success cannot authorize Vercel production until the single-writer hosting decision is resolved |

No GitHub environment secret names were observed for the venture-specific Preview/Production environments in this snapshot.

## Repository safety

- Existing developer checkouts with uncommitted work were not modified; alignment documentation was produced in an isolated clone and branch.
- No committed live-key pattern, real environment file, or duplicated tracked secret fingerprint was found across default-branch snapshots.
- Do not delete the five Explore&Earn secrets until every workflow reference has an authoritative Doppler-backed replacement and a passing run.
- Require branch protection and review for runtime workflow changes. An untracked local workflow is not deployment authority.
- Local validation and a local commit do not equal a remote CI run, Preview deployment, merge, or production promotion.
