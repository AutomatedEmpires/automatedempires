# GitHub and CI Matrix

**Verified snapshot:** 2026-07-10

All seven repositories are public and owned by the AutomatedEmpires GitHub account. This is acceptable parent governance; runtime providers remain venture-specific. Secret values are write-only and were never requested or displayed.

| Venture | Canonical repository | Default-branch workflows | GitHub environments | Repository secret names | Current concern / safe action |
|---|---|---|---|---|---|
| AutomatedEmpires | AutomatedEmpires/automatedempires | None in the inspected branch | copilot | None | AGENTS.md claims a CI workflow exists, but the checkout does not. Add/restore reviewed typecheck/build CI before production deployment |
| Explore&Earn | AutomatedEmpires/explore-and-earn | CI, CodeQL, release, DB migration/guard, agent/review routers | copilot, Preview, Production | CLAUDE_CODE_OAUTH_TOKEN, SUPABASE_ACCESS_TOKEN, SUPABASE_DB_PASSWORD, SUPABASE_DB_URL, SUPABASE_PROJECT_ID | Five write-only secrets remain outside Doppler. Replace workflow consumers safely before removal; do not copy unknown values |
| ORAN | AutomatedEmpires/Open-Resource-Access-Network | CI, CodeQL, DB migration, Azure app/functions/infra deploy, project sync, maps rotation, accessibility, visual/bundle/runbook checks | copilot, production | None | Default branch remains Azure-oriented, while the local convergence branch removes Azure workflows and has an untracked Vercel workflow. Review/commit migration CI only with the branch decision |
| BidSpace | AutomatedEmpires/bidspace | CI, CodeQL, release | copilot | None | No deployment secrets; Vercel shell exists but first deploy/provider contract is incomplete |
| Lake & Pine | AutomatedEmpires/lakeandpine | None on the default-branch snapshot | None | None | Live Vercel alias came from a dirty feature-branch redeploy. Merge/reproduce the application and add CI before treating main as deployable |
| Sweepza | AutomatedEmpires/sweepza | CI, CodeQL, dependency review, agent routers | copilot, Preview, Production | None | Provider sync depends on Doppler/runtime configuration; verify production Clerk/Stripe separation before any automated promotion |
| LogLoads | AutomatedEmpires/logloads | CI, CodeQL, release | copilot | None | Preview and errored production artifacts were dirty feature-branch deployments. Reproduce from reviewed source and keep main deployment gated |

No GitHub environment secret names were observed for the venture-specific Preview/Production environments in this snapshot.

## Repository safety

- Existing developer checkouts with uncommitted work were not modified; alignment documentation was produced in an isolated clone and branch.
- No committed live-key pattern, real environment file, or duplicated tracked secret fingerprint was found across default-branch snapshots.
- Do not delete the five Explore&Earn secrets until every workflow reference has an authoritative Doppler-backed replacement and a passing run.
- Require branch protection and review for runtime workflow changes. An untracked local workflow is not deployment authority.
