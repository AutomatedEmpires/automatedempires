# CI Failure Register

Date: 2026-07-12. Green current-main checks are documented in the readiness report; this register lists failures or security gates that are ineffective.

| Repo | Branch/PR | Failing check | Failure class | Likely root cause | Safe fix | Risk | Owner/next action |
|---|---|---|---|---|---|---|---|
| ORAN | PR #58 | Validate runbook review dates | roadmap/documentation gate | 26 runbooks are 25-35 days overdue | Owners substantively review, then update attestations | Medium | Runbook owners; do not advance dates mechanically |
| ORAN | PR #58 | Visual Regression | test failure | 15 Linux baselines are absent (5 pages × 3 viewports) | Generate and visually review baselines | Medium | Design/product reviewer |
| ORAN | PR #58 | `codecov/patch` | test failure | 55.70% patch coverage vs 66.71% target | Add focused tests | Low | PR #58 owner; do not lower threshold by default |
| ORAN | PRs #64-66 | Test | test failure | Fixed `2026-06-01` SLA deadline makes `slaBreached` time-dependent | Freeze/mock the clock or derive deadline from a fixed clock | Low | ORAN test owner, then rerun all three PRs |
| ORAN | PRs #64-66 | Security Audit | security audit | 41-42 production findings, including 1 critical | Apply isolated compatible patches; never use force | High | Dependency/security owner |
| ORAN | PRs #64-66 | Sync ORAN Roadmap fields | environment missing | Dependabot cannot receive `PROJECT_TOKEN`; workflow exits 1 | Skip/neutralize sync for bot events without exposing token | Low-Medium | Workflow owner |
| BidSpace | Dependabot run `29142087279` | tar security update | dependency vulnerability | Graph cannot resolve beyond `7.4.3`; safe is `7.5.16` | Test isolated override or Supabase CLI parent update | Medium-High | Dependency owner |
| BidSpace | Dependabot run `29142087273` | js-yaml security update | dependency vulnerability | Graph cannot resolve beyond `3.14.2`; safe is `3.15.0` | Test narrow override/parent update | Low-Medium | Dependency owner |
| BidSpace | Dependabot run `29142087841` | esbuild security update | dependency vulnerability | Graph stops at `0.28.0`; safe is `0.28.1` | Update/test direct parent `tsx` | Low | Dependency owner |
| Lake & Pine | Dependabot run `29141566272` | PostCSS security update | dependency vulnerability | Next pins `8.4.31`; safe is `8.5.10` | Test exact override or supported Next release | Low-Medium | Dependency owner |
| LogLoads | Main Dependabot updater | PostCSS security update | dependency vulnerability | Next retains `8.4.31` | Test exact pnpm override | Low-Medium | Dependency owner |
| LogLoads | Main Dependabot updater | esbuild security update | dependency vulnerability | Vitest/Vite retains `0.27.7` | Test override or approved parent upgrade | Medium-High | Dependency owner/founder |
| LogLoads | Extended validation | Mobile login/admin scenario | flaky test | Auth/navigation readiness race; passed on retry | Stabilize sign-in helper and assert session readiness | Low | Test owner |
| LogLoads | Pull requests | Dependency review is fail-open | security audit | `continue-on-error: true` converts review failure into success | Enable dependency graph and fail on high severity | Medium | Repo owner |
| Sweepza/LogLoads | Current main CI | Node action-runtime warnings | environment missing | Some action versions still target deprecated Node 20 runtime | Validate Node-24-compatible action majors | Low-Medium | Shared workflow owner |

## Non-failures worth preserving

- AutomatedEmpires main CI/CodeQL and this branch's frozen install, audit, typecheck, lint, and build are green.
- BidSpace's updater failures are dependency-resolution failures; exact-main application CI is green.
- Lake & Pine's updater failure is not an application build failure; exact-main validation is green.
- Sweepza has no failing current-main checks.
- LogLoads core/extended/database CI is green despite the flaky retry and fail-open supply-chain gate.
