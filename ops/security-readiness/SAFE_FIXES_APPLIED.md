# Safe Fixes Applied

Date: 2026-07-12.

## AutomatedEmpires transitive audit remediation

- **Repo:** `AutomatedEmpires/automatedempires`
- **Branch:** `codex/security-ci-readiness`
- **Files changed:** `package.json`, `pnpm-lock.yaml`
- **Change:** added an exact pnpm override from Next's PostCSS `8.4.31` to the already-used patched `8.5.10`; updated ESLint within major 9 from `9.17.0` to `9.39.5`, resolving `@eslint/plugin-kit` from `0.2.8` to patched `0.4.1`.
- **Why safe:** no framework, provider, deployment, runtime API, or application code changed. PostCSS stays on major 8 and ESLint stays on major 9. The fix is isolated from draft PR #8's documentation files.
- **Tests run:** `pnpm install --frozen-lockfile`; `pnpm audit --audit-level low`; `pnpm typecheck`; `pnpm lint`; `pnpm build`; `git diff --check`.
- **Result:** all pass. Audit reports no known vulnerabilities; lint has zero warnings; Next production build succeeds and prerenders 18 routes.
- **PR link:** Pending branch publication; this line will be updated after the draft PR is opened.
- **Rollback:** revert the dependency-fix commit, which removes the `pnpm.overrides.postcss` entry and restores ESLint `9.17.0` plus the prior lockfile.

## Venture repositories

No source/dependency/CI fixes were applied in ORAN, BidSpace, Lake & Pine, Sweepza, or LogLoads. Their local working trees and existing branches contained active or unrelated work, so they were audited read-only. No migrations, deployments, providers, live data, DNS, payments, or email operations were performed.
