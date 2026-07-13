# BidSpace runbook

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / provider-owner verification required**.

## Safety rules

1. Work in `AutomatedEmpires/bidspace`, not a similarly named asset or placeholder folder.
2. Resolve secret values from Doppler at execution time; never paste them into this pack, tickets, terminal transcripts, or commits.
3. Confirm the active Doppler project, Vercel project, and Supabase ref before every write.
4. Treat database pushes, Stripe Connect changes, domain purchases, payouts, refunds, and production routing as founder-approved operations.
5. Keep BidSpace non-live. Do not enable real bidding, booking, payments, or Stripe Connect before the legal entity, operating model, and payment model are approved.

## Normal verification sequence

1. Confirm the Git remote resolves to `AutomatedEmpires/bidspace`.
2. Confirm Doppler project `bidspace` exposes configs `dev`, `stg`, and `prd`; inspect names and presence only.
3. Confirm the linked Vercel project name is exactly `bidspace` before syncing environment variables or deploying.
4. Confirm the intended Supabase fingerprint ends `fsqslgxcv` before linking or generating types.
5. Run repository validation using the pinned Node/pnpm versions and the repository's existing scripts.

## Local development

**Observed in repository:** the recommended path is Doppler injection with the web workspace command documented in BidSpace `README.md`. The process can build without live credentials, but the first runtime request requires Clerk; authenticated product routes also require server-side Supabase configuration.

- Use Doppler config `dev`.
- Do not create a local real `.env` as the durable source of truth.
- A build-only placeholder path is not evidence that production auth works.

## Preview and production

- **Target state:** Doppler `stg` feeds Vercel Preview and Doppler `prd` feeds Vercel Production.
- **Verified current:** the Vercel project exists.
- **Mixed verified/open:** Git/root and current source #64 at `69a53c4` are verified. Accepted Preview `dpl_3vFJAPyiQqWr95woTY51mKBT1W1S` and clean production `dpl_GQ2yhiJjwchgt7rJDSbU8Y8JuVDp` remain last-deployed evidence from `2fe90a3eb8cd9bffd43be1ac401d151ae4ad39e8`; custom domain is purchase-deferred and exact environment-variable synchronization remains to prove.

Before any controlled Preview acceptance, verify Clerk sign-in, Supabase reads/writes under RLS, a synthetic/demo-only bid flow, and webhook rejection behavior without accepting real bids, bookings, payments, or changing money-moving resources.

## Database changes

The supplied Supabase ref identifies the intended venture boundary. It does not prove that migrations are applied or that remote data is disposable.

1. Compare local migration history with the remote ledger.
2. Generate types against the intended project before trusting hand-authored row interfaces.
3. Obtain explicit approval before any remote migration, repair, reset, or destructive SQL.
4. Never point BidSpace tooling at another venture's Supabase ref.

## Conditional provider activation order

Database → Clerk → domain/DNS → PostHog/Sentry → Cloudinary/Mapbox only for implemented consumers → email. Stripe/Connect is not part of the normal activation order: keep it sandbox/test-only and add it only after the legal entity, host-funded listing/placement/promotion/subscription model, marketplace responsibilities, and payment model receive dated approval. Current `main` has no Mapbox runtime consumer, while accepted feature `511b763…` does; select reviewed source and the final domain before provisioning a production token.

## Incident response

If a resource identity does not match this pack, stop writes, capture only resource names/IDs, and escalate. Do not rotate or delete a suspect resource until consumers and rollback paths are known.
