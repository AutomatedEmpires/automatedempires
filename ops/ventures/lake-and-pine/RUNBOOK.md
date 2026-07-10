# Lake & Pine runbook

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / founder verification required**.

## Current operating posture

Lake & Pine has a healthy Vercel application at deployment `dpl_AaAEZZz9Ma442TDNygN6ypLsQCMt`, but it is a dirty redeploy from `feat/production-foundation`. Clean candidate `e1fe8f00f3e50ede86a2f6e3af75ea1e8cdded1a` is five commits ahead of prototype-only `main` `0b7116f72878ba3f67e3ff9948a11da83cc5bab7`, which lacks configured root `apps/web`. Preserve the prototype and current deployment as evidence while making the release reproducible.

## Safety rules

1. Use canonical slug `lake-and-pine` in portfolio operations; use `lakeandpine` only where an existing provider/repository requires it.
2. Never deploy the recovered HTML prototype as if it were the approved production architecture.
3. Do not apply database schema, create auth/payment resources, purchase/attach domains, or copy another venture's settings without a dated decision and founder approval.
4. Keep all secret values in Doppler; this pack records names and resource identities only.

## Verification sequence

1. Confirm GitHub repository `AutomatedEmpires/lakeandpine`, `main` `0b7116f72878ba3f67e3ff9948a11da83cc5bab7`, and candidate `e1fe8f00f3e50ede86a2f6e3af75ea1e8cdded1a` before review.
2. Confirm Doppler project `lake-and-pine`: dev is metadata-only; stg/prd contain the verified runtime contract imported without displaying values.
3. Confirm Vercel project `lakeandpine`, root `apps/web`, intended production branch `main`, and deployment `dpl_AaAEZZz9Ma442TDNygN6ypLsQCMt`; capture its source metadata, aliases, creation time, and rollback owner before replacement.
4. Confirm Supabase ref `fftnqsvxxsxcsiwvtmwr`, 14 RLS/policy-covered tables, and two remote migrations before any database write.
5. Review `docs/product/recovered-product-truth.md` and the prototype as requirements evidence, not infrastructure truth.

## Architecture-to-runtime gate

Before production normalization, approve:

- the application root and framework layout;
- environment-variable names;
- data model, migration policy, RLS, and backup ownership;
- customer/staff auth roles;
- quoting, booking, scheduling, and payment boundaries;
- email, analytics, error monitoring, and domain/DNS ownership.

First review and merge or faithfully reproduce exact candidate `e1fe8f00f3e50ede86a2f6e3af75ea1e8cdded1a` on the intended branch. Add CI for frozen install, lint, typecheck, and build; commit the environment contract; and prove a clean exact-SHA preview. Only then replace the current production alias or attach an owned domain.

## Deployment

- **Verified current:** canonical Git connection, root `apps/web`, project, ready deployment `dpl_AaAEZZz9Ma442TDNygN6ypLsQCMt`, and Vercel/Supabase environment binding.
- **Blocked:** the ready artifact came from dirty feature source; `main` lacks `apps/web`, no CI exists, and the live artifact is not proven equal to the clean candidate SHA.
- **Target state:** reviewed candidate → exact-SHA Preview with `stg` → reviewed `main` Production with `prd` → owned domain after purchase.

## Acceptance gates

1. Preserve the current deployment metadata and do not move its alias until the candidate passes.
2. Review the five-commit application introduction and ensure prototype/recovery evidence remains intact.
3. Require clean-checkout frozen install, lint, typecheck, and build; record the exact passing commit.
4. Preview with staging-only resources and verify public pages, contact rendering, quote/booking boundaries, auth-disabled behavior, RLS, logs, and fail-closed missing-provider behavior without production writes.
5. Deploy reviewed `main` to a provider hostname with `prd`; compare it to the accepted Preview before alias replacement. Domain work remains separately blocked.

## Rollback

- Keep `dpl_AaAEZZz9Ma442TDNygN6ypLsQCMt` available until the clean main deployment is accepted. If the candidate fails, restore the alias to that recorded deployment.
- Do not reset, reseed, or reverse the Supabase schema as a code rollback. Preserve data and use a reviewed forward fix if schema behavior is involved.
- Because the existing deployment is dirty and unreproducible, replace it with a second verified deployment before treating rollback as transfer-ready.

## Database

The dedicated Supabase project is active and bound to the current runtime. All 14 public tables have RLS and policies; two remote migrations are recorded. Backups, recovery owner, seed provenance, and lane separation remain open. Any schema push/reset/repair requires explicit approval and a rollback/backup plan.

## Incident handling

If a provider resource contains another venture's identity or data, stop. Do not rotate, delete, or migrate until consumers and recovery paths are documented.
