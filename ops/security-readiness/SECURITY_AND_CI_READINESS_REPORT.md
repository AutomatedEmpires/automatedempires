# Security and CI Readiness Report

Date: 2026-07-12

Branch: `codex/security-ci-readiness`

Scope: AutomatedEmpires, ORAN, BidSpace, Lake & Pine, Sweepza, and LogLoads. Explore&Earn was intentionally excluded.

This report combines exact GitHub `main` metadata, Actions logs, Dependabot/CodeQL/secret-scanning metadata, package-manager audits, lockfile inspection, and safe local checks. Remote exact-main CI is used where a full local rerun was not practical. A shared WSL dependency install exhausted the machine and reset the environment; that install is recorded as inconclusive, not as a repository failure.

## Portfolio summary

| Venture | Current branch/SHA | CI status | Build | Typecheck | Lint | Tests | Security status | Dependency status | Rollout risk | Recommended action |
|---|---|---|---|---|---|---|---|---|---|---|
| AutomatedEmpires | `main` `664cda6`; fix branch based on that SHA | Main CI and CodeQL green; draft PR #8 green and non-overlapping | Pass locally after fix; 18 static routes | Pass locally | Pass locally, zero warnings | Not configured; reusable CI skips absent test script | Main began with 1 medium Dependabot alert; 0 CodeQL and 0 secret alerts. Branch audit is clean | PostCSS and ESLint transitive findings fixed on this branch | Medium | Review and merge this isolated dependency/report PR; add a small smoke-test suite |
| ORAN | `main` `1dc1291`; draft PR #58 head `6d5caf2` | No recent core push-CI evidence on main; #58 core CI green; #64-66 blocked | #58 pass; #64-66 skipped after test failure | Pass on #58 and #64-66 | Pass on #58 and #64-66 | #58 pass; #64-66 have 1 date-sensitive failure with 3,842 passing | 60 open Dependabot alerts (1 critical/27 high); 13 open CodeQL alerts; 0 secret alerts | Production audit reports 42 findings on main-equivalent lock | Critical | Fix deterministic test and safe transitive patches first; keep #58 and #64-66 unmerged |
| BidSpace | `main` `2fe90a3` | Core CI and CodeQL green; Dependabot updater jobs red | Pass in exact-main CI | Pass | Pass | Unit tests pass; Playwright E2E exists but is absent from CI | 10 Dependabot alerts (6 high/3 medium/1 low); 0 CodeQL and 0 secret alerts | Production: 1 medium; development: 6 high/2 medium/1 low | High | Resolve tar/js-yaml/esbuild/PostCSS graph and add E2E plus audit gates |
| Lake & Pine | `main` `1b6a877` | Main validation green; Dependabot updater red | Pass with synthetic `DATABASE_URL` | Pass | Pass | No test script or test files | 1 medium Dependabot alert; 1 high CodeQL DOM-XSS alert; 0 secret alerts | Transitive PostCSS remains constrained by Next | High | Fix the DOM-XSS sink, add tests, then test a narrow PostCSS override |
| Sweepza | `main` `4c0aad1` | CI and CodeQL green; no open PRs | Pass; 16 static pages | Pass | Pass | 145/145 across 11 files | 0 Dependabot, CodeQL, or secret alerts | `pnpm audit`: clean; frozen lockfile succeeds | Medium | Preserve the green baseline; close privacy/webhook/preview gaps before provider activation |
| LogLoads | `main` `9c9e107` | Core CI, CodeQL, Release, database validation, and extended validation green | Pass; 30 static pages | Pass (9/9 Turbo tasks) | Pass (5/5 Turbo tasks) | Unit 101/101; E2E 36 pass/5 skip with 1 retry | 2 Dependabot alerts; 0 CodeQL and 0 secret alerts | Medium PostCSS plus low esbuild; audit exits 1 | High | Fix advisories and fail-open dependency gate; harden/test rate limiting |

## Venture notes

### AutomatedEmpires

- Main CI run `29143623620` and CodeQL are green at `664cda6`.
- Draft PR #8 changes operations/provider documentation only. This branch adds a new `ops/security-readiness/` folder and changes only `package.json`/`pnpm-lock.yaml`, so there is no file overlap.
- The reusable workflow runs install, typecheck, lint, workflow/guardrail checks, build, and `test` only when a test script exists. This repo has no test script or test files.
- Before the fix, local audit found PostCSS `8.4.31` under Next and `@eslint/plugin-kit` `0.2.8` under ESLint. The branch now audits clean and passes the exact local typecheck/lint/build sequence.

### ORAN

- Draft PR #58's core runtime contract, lint, typecheck, 3,754-test suite, security audit, build, migration guard, a11y, bundle, and CodeQL checks pass.
- PR #58 remains unstable because 26 runbooks are 25-35 days overdue, all 15 Linux visual baselines are missing, and Codecov patch coverage is 55.70% against 66.71%.
- Dependabot PRs #64-66 fail the same base-wide SLA assertion: a fixed `2026-06-01` deadline is now in the past (`slaBreached` expected false, actual true). This is not evidence of a dependency regression.
- Their security audits report 41-42 production findings, including one critical. Project Sync also fails because Dependabot cannot receive `PROJECT_TOKEN`; the token must not be exposed to Dependabot.
- Package manager use is internally consistent (`npm` plus `package-lock.json`), but Node/npm are not pinned in `package.json`, and CI's Node 20 differs from the audited Node 24 environment.

### BidSpace

- Exact-main CI passes frozen install, typecheck, lint, workflow lint, guardrails, build, unit tests, and design guardrails.
- E2E tests exist but are outside CI. Root CI also excludes two Notion-related tools from the pnpm workspace/lockfile, leaving their dependency graph unreproducible.
- CI has no audit gate, and required checks exclude CodeQL. Several reusable workflows are referenced via mutable tags/branches.
- The failed Dependabot runs are `security_update_not_possible`, not application test/build failures.

### Lake & Pine

- CI proves compilation and static build only; its dummy database URL does not prove database-backed runtime flows.
- CodeQL's open high alert is raw chat input inserted with `insertAdjacentHTML` in a recovered prototype. Database-backed JSON-LD also needs `<` escaping as defense in depth.
- Public write routes have validation but no visible anti-automation/rate-limit control. Map tokens are environment-only and marker labels use `textContent`; coordinate finite/range validation is still missing.
- There is no automated test suite, audit gate, or required CodeQL check.

### Sweepza

- This is the cleanest technical baseline in the group: green CI/CodeQL, clean audit, 145 tests, and a tested rate-limit helper.
- Exact main has a successful Production deployment status but no current-main Preview record. Auth, payment, and email activation remain external rollout blockers.
- The no-provider email path logs recipient and subject, webhook/email failure paths lack direct tests, and the image allowlist accepts all `*.supabase.co` hosts.
- `support@sweepza.com` ownership and aliases are available; activation remains deferred.

### LogLoads

- Supabase-canonical code is fail-closed in production, uses schema-version validation and compare-and-swap writes, and has strong RLS/grant migrations plus concurrency tests. Exact-main CI applied migrations only to an isolated local stack.
- Code inspection cannot prove live schema/RLS/advisor state. No live migrations or data operations were performed.
- The rate limiter is process-local fixed-window state, trusts the leftmost forwarded IP, lacks tests and `Retry-After`, and can be bypassed across instances/regions.
- Dependency review is fail-open, `github-actionlint` is fetched outside the lockfile, and one mobile login/admin E2E required a retry.

## Top technical blockers

1. ORAN's production audit includes one critical and up to eight high findings.
2. ORAN has 13 open CodeQL alerts and 60 open Dependabot alert records.
3. ORAN Dependabot PRs cannot become green until the base SLA test, security audit, and bot-safe roadmap sync are fixed.
4. ORAN PR #58 lacks reviewed visual baselines and current runbook attestations.
5. BidSpace retains six high development-chain alerts through Supabase CLI/tar.
6. Lake & Pine has an open high DOM-XSS alert.
7. Lake & Pine has no automated tests and no runtime proof for database-backed flows.
8. LogLoads' dependency-review gate is fail-open while its audit is nonzero.
9. LogLoads' process-local/spoofable-IP rate limiter lacks tests and response guidance.
10. AutomatedEmpires has no test suite; Sweepza lacks direct webhook/email failure tests.

## Readiness conclusion

AutomatedEmpires is materially safer on this branch, and Sweepza has a strong technical baseline. No venture should be newly declared rollout-ready from this pass alone: ORAN, BidSpace, Lake & Pine, and LogLoads retain material security or quality blockers, while Sweepza still requires a venture-specific provider/Preview readiness pass.
