# Lake & Pine environment map

## Current map

| Environment | Doppler | Vercel | Supabase | Status |
|---|---|---|---|---|
| Development | `lake-and-pine` / `dev`, metadata only | Local `feat/production-foundation` is the discovered application branch | Separate local/data strategy not established | Development contract incomplete |
| Staging | `lake-and-pine` / `stg`, nine names imported from verified runtime | Vercel Preview target | Dedicated staging database not discovered | Runtime names exist; data isolation unresolved |
| Production | `lake-and-pine` / `prd`, nine names imported from verified runtime | `lakeandpine.vercel.app` is `READY`, sourced from a dirty feature-branch redeploy | Ref `fftnqsvxxsxcsiwvtmwr`; 14 RLS/policy-covered tables and two remote migrations | Runtime works; source reproducibility and domain are blocked |

## Variable-name contract

The default-branch recovery snapshot has no application environment contract. Names safely imported from the verified Vercel runtime include the application URL/business contact contract and Supabase/database contract; see the venture Doppler map. Values are not documented.

Do not populate guessed variables merely because other ventures use them. After architecture approval, document exact names for the implemented consumers. The likely provider categories—app URL, Supabase, Clerk, Stripe, Resend, PostHog, and Sentry—are **target-state categories**, not confirmation that corresponding live resources should be created now.

## Environment rules

- Development, staging, and production must not share mutable customer data or webhook secrets.
- Server-only database/payment/provider-management values must never be exposed to the browser.
- Preview must not route to production booking, payment, or email resources unless explicitly designed and approved.
- Provider metadata should include venture slug, environment, owner, and purpose; it must not contain a secret value.
