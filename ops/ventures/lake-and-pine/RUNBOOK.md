# Lake & Pine runbook

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / provider-owner verification required**.

## Current operating posture

Lake & Pine current source includes PRs #2/#3 through `e65b3b6`, adding DOM-XSS coverage and disposable-PostgreSQL migration/RLS/booking/dashboard smoke. Exact-source Preview `dpl_BBy…` and clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` remain last-deployed evidence from PR #1 merge `1b6a877bc054a9239c2a430aaf668996de8a0302`. Preserve old dirty artifacts only as historical evidence.

Lake & Pine is an intelligent cleaning/local-service operating system. Phase 1 includes booking requests and planning, property/room/checklist/pet/access preferences, recurring plans, the internal job pipeline and service status, follow-up/customer communication, an admin/operator dashboard, and intelligent estimate direction. Payments are Phase 2.

## Safety rules

1. Use canonical slug `lake-and-pine` in portfolio operations; use `lakeandpine` only where an existing provider/repository requires it.
2. Never deploy the recovered HTML prototype as if it were the approved production architecture.
3. Do not apply database schema, create auth/payment resources, attach the owned domain, or copy another venture's settings without a dated plan and the applicable production/legal/paid authority.
4. Keep all secret values in Doppler; this pack records names and resource identities only.

## Verification sequence

1. Confirm GitHub repository `AutomatedEmpires/lakeandpine`, current source through `e65b3b6`, strict required `validate`, and clean branch status before release work; keep `1b6a877…` labeled as the last verified deployed source.
2. Confirm Doppler project `lake-and-pine`: dev is metadata-only; stg/prd contain the verified runtime contract imported without displaying values.
3. Confirm Vercel project `lakeandpine`, root `apps/web`, production branch `main`, clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk`, and exact-source Preview `dpl_BBy…`; capture aliases, creation time, and rollback owner before DNS.
4. Confirm Supabase fingerprint `…siwvtmwr`, 14 RLS/policy-covered tables, and two remote migrations before any database write.
5. Review `docs/product/recovered-product-truth.md` and the prototype as requirements evidence, not infrastructure truth.

## Architecture-to-runtime gate

Before production normalization, approve:

- the application root and framework layout;
- environment-variable names;
- data model, migration policy, RLS, and backup ownership;
- customer/staff auth roles;
- booking-request, planning, estimating, property-profile, recurring-plan, scheduling/capacity, job-pipeline, status, follow-up, and communication boundaries;
- the Phase 2 payment boundary;
- email, analytics, error monitoring, and domain/DNS ownership.

Source `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c` pins Node `24.16.0`/pnpm `10.12.4` CI and renames the toast helper to avoid the Windows/Linux filename collision. PR #1 passed remote CI/Vercel and merged. The pinned `validate` workflow does not run the later application/regression/smoke suites, but tests do exist: PRs #2/#3 proved DOM-XSS behavior and disposable-database migrations, RLS, booking persistence, dashboard fixtures, and cleanup. Production/capacity proof remains open.

## Deployment

- **Verified boundary:** canonical Git/root and current source `e65b3b6`; clean Preview `dpl_BBy…` and production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` from last deployed source `1b6a877…`; Vercel/Supabase/Doppler binding.
- **Blocked:** functional provider-host/rollback smoke and owned-domain cutover only; product provider activation remains separately scoped.
- **Target state:** accepted clean production/rollback → reversible cutover of owned `lakeandpinecleaning.com`.

## Acceptance gates

1. Preserve `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` metadata and name the rollback owner.
2. Reconfirm `validate` plus the separate regression/disposable-database suites on the exact release commit; record that `validate` itself does not invoke those tests.
3. Verify public pages, contact rendering, Phase 1 booking-request/planning/property-preference/job-status boundaries, auth-disabled behavior, RLS, logs, Sentry-disabled behavior, and fail-closed missing-provider behavior without production writes. Do not require or simulate live payment in Phase 1.
4. Compare clean production with accepted Preview, export DNS, and change only approved web records after rollback rehearsal.

## Rollback

- Prefer restoring the alias to clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` or another recorded clean exact-SHA deployment. Do not promote the old dirty artifact as current authority.
- Do not reset, reseed, or reverse the Supabase schema as a code rollback. Preserve data and use a reviewed forward fix if schema behavior is involved.
- Require at least one second recorded clean deployment/alias path before treating rollback as transfer-ready.

## Database

The dedicated Supabase project is active and bound to the current runtime. All 14 public tables have RLS and policies; two remote migrations are recorded. Backups, recovery owner, seed provenance, and lane separation remain open. Any schema push/reset/repair requires explicit approval and a rollback/backup plan.

## Incident handling

If a provider resource contains another venture's identity or data, stop. Do not rotate, delete, or migrate until consumers and recovery paths are documented.
