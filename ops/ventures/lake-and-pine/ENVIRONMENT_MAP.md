# Lake & Pine environment map

## Current map

| Environment | Doppler | Vercel | Supabase | Status |
|---|---|---|---|---|
| Development | `lake-and-pine` / `dev`, metadata only | Clean candidate `feat/production-foundation` at `e1fe8f00f3e50ede86a2f6e3af75ea1e8cdded1a` | Separate local/data strategy not established | Development contract incomplete; branch is five commits ahead of prototype `main` |
| Staging | `lake-and-pine` / `stg`, nine names imported from verified runtime | Required clean exact-SHA Preview; none recorded yet | Dedicated staging database not discovered | Runtime names exist; data isolation and CI are unresolved |
| Production | `lake-and-pine` / `prd`, nine names imported from verified runtime | `dpl_AaAEZZz9Ma442TDNygN6ypLsQCMt` is `READY` at `lakeandpine.vercel.app`, sourced from a dirty feature redeploy | Ref `fftnqsvxxsxcsiwvtmwr`; 14 RLS/policy-covered tables and two remote migrations | Runtime responds, but exact source reproducibility and domain are blocked |

## Provenance and release gates

- Intended production branch `main` is `0b7116f72878ba3f67e3ff9948a11da83cc5bab7` and currently has no application root `apps/web`; automatic main deployment is unsafe until source convergence.
- Current clean candidate `e1fe8f00f3e50ede86a2f6e3af75ea1e8cdded1a` matches its remote branch and is five commits ahead of `main`, but the live dirty deployment is not proven byte-for-byte equal to it.
- Before replacement, record the current deployment ID, source metadata, aliases, creation time, and rollback owner. Add CI and require frozen install, lint, typecheck, and build on a reviewed merge.
- Preview must use `stg` and must not mutate production data, send production email, or exercise live payments. Production must come from reviewed `main` with `prd` and pass on the provider hostname before any domain work.

## Variable-name contract

The default-branch recovery snapshot has no application environment contract. Names safely imported from the verified Vercel runtime include the application URL/business contact contract and Supabase/database contract; see the venture Doppler map. Values are not documented.

Do not populate guessed variables merely because other ventures use them. After architecture approval, document exact names for the implemented consumers. The likely provider categories—app URL, Supabase, Clerk, Stripe, Resend, PostHog, and Sentry—are **target-state categories**, not confirmation that corresponding live resources should be created now.

## Environment rules

- Development, staging, and production must not share mutable customer data or webhook secrets.
- Server-only database/payment/provider-management values must never be exposed to the browser.
- Preview must not route to production booking, payment, or email resources unless explicitly designed and approved.
- Provider metadata should include venture slug, environment, owner, and purpose; it must not contain a secret value.
