# BidSpace runbook

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / founder verification required**.

## Safety rules

1. Work in `AutomatedEmpires/bidspace`, not a similarly named asset or placeholder folder.
2. Resolve secret values from Doppler at execution time; never paste them into this pack, tickets, terminal transcripts, or commits.
3. Confirm the active Doppler project, Vercel project, and Supabase ref before every write.
4. Treat database pushes, Stripe Connect changes, domain purchases, payouts, refunds, and production routing as founder-approved operations.

## Normal verification sequence

1. Confirm the Git remote resolves to `AutomatedEmpires/bidspace`.
2. Confirm Doppler project `bidspace` exposes configs `dev`, `stg`, and `prd`; inspect names and presence only.
3. Confirm the linked Vercel project name is exactly `bidspace` before syncing environment variables or deploying.
4. Confirm the intended Supabase project ref is `hnjjcgxflxlfsqslgxcv` before linking or generating types.
5. Run repository validation using the pinned Node/pnpm versions and the repository's existing scripts.

## Local development

**Observed in repository:** the recommended path is Doppler injection with the web workspace command documented in BidSpace `README.md`. The process can build without live credentials, but the first runtime request requires Clerk; authenticated product routes also require server-side Supabase configuration.

- Use Doppler config `dev`.
- Do not create a local real `.env` as the durable source of truth.
- A build-only placeholder path is not evidence that production auth works.

## Preview and production

- **Target state:** Doppler `stg` feeds Vercel Preview and Doppler `prd` feeds Vercel Production.
- **Verified current:** the Vercel project exists.
- **Unknown / founder verification required:** linked root directory, current aliases, deployment health, domain, and exact environment-variable synchronization.

Before production promotion, verify Clerk sign-in, Supabase reads/writes under RLS, a representative bid flow, and webhook rejection behavior without changing money-moving resources.

## Database changes

The supplied Supabase ref identifies the intended venture boundary. It does not prove that migrations are applied or that remote data is disposable.

1. Compare local migration history with the remote ledger.
2. Generate types against the intended project before trusting hand-authored row interfaces.
3. Obtain explicit approval before any remote migration, repair, reset, or destructive SQL.
4. Never point BidSpace tooling at another venture's Supabase ref.

## Provider activation order

Database → Clerk → domain/DNS → reviewed Stripe Connect plan → PostHog/Sentry → Cloudinary/Mapbox only for implemented consumers → email. Current `main` has no Mapbox runtime consumer, while accepted feature `511b763…` does; select reviewed source and the final domain before provisioning a production token.

## Incident response

If a resource identity does not match this pack, stop writes, capture only resource names/IDs, and escalate. Do not rotate or delete a suspect resource until consumers and rollback paths are known.
