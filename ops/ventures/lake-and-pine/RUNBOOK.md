# Lake & Pine runbook

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / provider-owner verification required**.

## Current operating posture

Lake & Pine now has reproducible reviewed-main authority: PR #1 source `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c` merged as current `main` `1b6a877bc054a9239c2a430aaf668996de8a0302`; exact-source Preview `dpl_BBy…` and clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` are `READY`. Preserve old dirty artifacts only as historical evidence.

## Safety rules

1. Use canonical slug `lake-and-pine` in portfolio operations; use `lakeandpine` only where an existing provider/repository requires it.
2. Never deploy the recovered HTML prototype as if it were the approved production architecture.
3. Do not apply database schema, create auth/payment resources, attach the owned domain, or copy another venture's settings without a dated plan and the applicable production/legal/paid authority.
4. Keep all secret values in Doppler; this pack records names and resource identities only.

## Verification sequence

1. Confirm GitHub repository `AutomatedEmpires/lakeandpine`, merge `1b6a877bc054a9239c2a430aaf668996de8a0302`, strict required `validate`, and clean branch status before release work.
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
- quoting, booking, scheduling, and payment boundaries;
- email, analytics, error monitoring, and domain/DNS ownership.

Source `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c` pins Node `24.16.0`/pnpm `10.12.4` CI and renames the toast helper to avoid the Windows/Linux filename collision. PR #1 passed remote CI/Vercel and merged. No application tests exist; this remains an explicit product-quality gap, not a provenance gap.

## Deployment

- **Verified current:** canonical Git/root, strict `validate`, clean Preview `dpl_BBy…`, clean current-main production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk`, and Vercel/Supabase/Doppler binding.
- **Blocked:** functional provider-host/rollback smoke and owned-domain cutover only; product provider activation remains separately scoped.
- **Target state:** accepted clean production/rollback → reversible cutover of owned `lakeandpinecleaning.com`.

## Acceptance gates

1. Preserve `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` metadata and name the rollback owner.
2. Reconfirm `validate` on the exact release commit and record the explicit no-tests gap.
3. Verify public pages, contact rendering, quote/booking boundaries, auth-disabled behavior, RLS, logs, Sentry-disabled behavior, and fail-closed missing-provider behavior without production writes.
4. Compare clean production with accepted Preview, export DNS, and change only approved web records after rollback rehearsal.

## Rollback

- Prefer restoring the alias to clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` or another recorded clean exact-SHA deployment. Do not promote the old dirty artifact as current authority.
- Do not reset, reseed, or reverse the Supabase schema as a code rollback. Preserve data and use a reviewed forward fix if schema behavior is involved.
- Require at least one second recorded clean deployment/alias path before treating rollback as transfer-ready.

## Database

The dedicated Supabase project is active and bound to the current runtime. All 14 public tables have RLS and policies; two remote migrations are recorded. Backups, recovery owner, seed provenance, and lane separation remain open. Any schema push/reset/repair requires explicit approval and a rollback/backup plan.

## Incident handling

If a provider resource contains another venture's identity or data, stop. Do not rotate, delete, or migrate until consumers and recovery paths are documented.
