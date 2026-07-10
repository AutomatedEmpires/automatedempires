# Lake & Pine runbook

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / founder verification required**.

## Current operating posture

Lake & Pine has a healthy Vercel application, but its aliased production deployment is a dirty redeploy from `feat/production-foundation` while the configured production branch is `main`. Preserve the prototype as historical evidence and make the deployed application reproducible before normal operation.

## Safety rules

1. Use canonical slug `lake-and-pine` in portfolio operations; use `lakeandpine` only where an existing provider/repository requires it.
2. Never deploy the recovered HTML prototype as if it were the approved production architecture.
3. Do not apply database schema, create auth/payment resources, purchase/attach domains, or copy another venture's settings without a dated decision and founder approval.
4. Keep all secret values in Doppler; this pack records names and resource identities only.

## Verification sequence

1. Confirm GitHub repository `AutomatedEmpires/lakeandpine`.
2. Confirm Doppler project `lake-and-pine`: dev is metadata-only; stg/prd contain the verified runtime contract imported without displaying values.
3. Confirm Vercel project `lakeandpine`, root `apps/web`, intended production branch `main`, and current alias source before deploy.
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

First merge or faithfully reproduce `feat/production-foundation` on the intended branch, commit the environment contract, and prove a clean preview. Only then replace the current production alias or attach an owned domain.

## Deployment

- **Verified current:** canonical Git connection, root `apps/web`, project, ready alias, and Vercel/Supabase environment binding.
- **Blocked:** the ready alias was redeployed from a dirty `feat/production-foundation` source rather than reproducible `main`.
- **Target state:** clean branch/commit → Preview with stg → reviewed main Production with prd → owned domain after purchase.

## Database

The dedicated Supabase project is active and bound to the current runtime. All 14 public tables have RLS and policies; two remote migrations are recorded. Backups, recovery owner, seed provenance, and lane separation remain open. Any schema push/reset/repair requires explicit approval and a rollback/backup plan.

## Incident handling

If a provider resource contains another venture's identity or data, stop. Do not rotate, delete, or migrate until consumers and recovery paths are documented.
