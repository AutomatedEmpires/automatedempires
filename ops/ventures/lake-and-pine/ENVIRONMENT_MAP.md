# Lake & Pine environment map

## Current map

| Environment | Doppler | Vercel | Supabase | Status |
|---|---|---|---|---|
| Development | `lake-and-pine` / `dev`, metadata only | Local branch `codex/pass3-production-foundation` at `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c`; base candidate `e1fe8f00…` | Separate local/data strategy not established | Development contract incomplete; local branch is six commits ahead of prototype `main` |
| Staging | `lake-and-pine` / `stg`, nine names imported from verified runtime | Required clean exact-SHA Preview; none recorded yet | Dedicated staging database not discovered | Runtime names exist; data isolation and CI are unresolved |
| Production | `lake-and-pine` / `prd`, nine names imported from verified runtime | Two `READY`, production-target artifacts came from dirty `122dd312`; latest `dpl_AaAEZZz9Ma442TDNygN6ypLsQCMt` | Ref `fftnqsvxxsxcsiwvtmwr`; 14 RLS/policy-covered tables and two remote migrations | Runtime responds, but exact source reproducibility and owned-domain cutover are blocked |

## Provenance and release gates

- Intended production branch `main` is `0b7116f72878ba3f67e3ff9948a11da83cc5bab7` and currently has no application root `apps/web`; automatic main deployment is unsafe until source convergence.
- Exact candidate `e1fe8f00f3e50ede86a2f6e3af75ea1e8cdded1a` is five ahead of `main` and two commits newer than dirty deployment SHA `122dd312`; the provider artifacts are not exact builds of it.
- Local clean commit `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c` adds pinned CI and Windows `Toast.tsx`/`toast.ts` case repair. Frozen install/lint/typecheck/build/workflow/diff pass; no tests. Unpushed, no PR/Preview.
- Authenticated GoDaddy control/full zone for `lakeandpinecleaning.com` is verified: dual Vercel apex A records, Vercel `www`, GoDaddy NS/domain-connect/SOA, quarantine DMARC, and no MX/SPF. DNS must not be attached/promoted before clean release/rollback.
- Preview must use `stg` and must not mutate production data, send production email, or exercise live payments. Production must come from reviewed `main` with `prd` and pass on the provider hostname before any domain work.

## Variable-name contract

The default-branch recovery snapshot has no application environment contract. Names safely imported from the verified Vercel runtime include the application URL/business contact contract and Supabase/database contract; see the venture Doppler map. Values are not documented.

Do not populate guessed variables merely because other ventures use them. After architecture approval, document exact names for the implemented consumers. The likely provider categories—app URL, Supabase, Clerk, Stripe, Resend, PostHog, and Sentry—are **target-state categories**, not confirmation that corresponding live resources should be created now.

## Environment rules

- Development, staging, and production must not share mutable customer data or webhook secrets.
- Server-only database/payment/provider-management values must never be exposed to the browser.
- Preview must not route to production booking, payment, or email resources unless explicitly designed and approved.
- Provider metadata should include venture slug, environment, owner, and purpose; it must not contain a secret value.
