# LogLoads runbook

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / provider-owner verification required**.

## Safety rules

1. Use GitHub repository `AutomatedEmpires/logloads` and verify resource identities before every provider write.
2. Keep secret values in Doppler; never store or print them in this pack or commits.
3. Do not activate broad placeholder integrations merely because variable names exist.
4. Require a reviewed rollback path for domain/DNS, database migration, live email, Stripe subscriptions, and secret rotation; require explicit approval only for the destructive/live-money/legal gates defined by Pass 4.
5. Do not introduce Stripe Connect, freight payments, brokerage, or payout flows without a new dated product/legal decision.
6. Do not promote Vercel until the selected Supabase-canonical runtime is implemented and tested; use persistent hosting only if a material-rewrite blocker is proven.

## Verification sequence

1. Confirm Doppler project `logloads` and config `dev`, `stg`, or `prd`.
2. Confirm PR #6 final source `f280ef4fef4b992f94457aad61cfe27e8ec91791` contains canonical `135cff673255cfc1b99c66552479e32cba370940`, its predecessors, and the explicit Supabase-before-E2E workflow fix; it merged as current `main` `9c9e107082942e5bce782eac2ce71aa63eb7d9c0`. Git/source authority is not live data/provider authority.
3. Confirm Supabase project fingerprint `…fsjyxo` in the authenticated dashboard before any database inspection/migration.
4. Compare repository consumers with the variable-name inventory; populate only variables consumed by the current slice.
5. Verify the Supabase-canonical runtime contract before using Vercel readiness as an acceptance signal.
6. Run pinned repository validation from a clean exact SHA before any host-specific Preview.

## Local development

**Observed in repository:** LogLoads documents `doppler run -- pnpm dev`. Use the `dev` config and do not materialize a durable real `.env` as the source of truth.

The scaffold's successful startup or build is not proof that auth, database, maps, payments, email, analytics, or monitoring operate end to end.

## Architecture gate

Pass 4 local head `135cff6…` supersedes the dated local-authority model: Supabase is awaited atomic authority with schema compatibility, compare-and-swap/retry, and non-production fallback. Concurrency/cold-start tests pass.

Current merged source and its recorded Vercel deployments are release provenance. Never reuse ignored `.vercel/output` or an old dirty artifact as release provenance.

## Preview and production

- **Verified current:** canonical repo/root connected; final-source Preview `dpl_8RY71TfokWZNaVZgbZgmDvMWyRf4` and current-main production `dpl_XxrZAJ1567EbtnkSg2XxWq88dPtF` are `READY`; historical dirty artifacts are diagnostic.
- **Green:** canonical source/migration/full suite, required remote checks, merge, provider Preview, and source production deployment.
- **Blocked:** backup/live upgrade, environment provenance, distributed rate limiting, live provider activation, and functional production rollback.

Do not treat either `READY` deployment as permission for live data/provider cutover. They prove reproducible source/build, not live-shape upgrade, distributed coordination, or functional rollback.

## Database

The verified live project has 36 application tables with RLS, one zero-policy table (`operating_state`), and six remote migrations. Merged code now treats Supabase as canonical, but the live project remains in its pre-Pass-4 state. Before changes, compare migrations, ownership, policies, backups, PostGIS, and rollback. No reset/push/repair or live-authority claim without explicit approval and migration evidence.

## Provider activation order

After the remaining live gates: production Clerk → venture Mapbox → separate Resend domain → PostHog/Sentry → Cloudinary boundary → subscription-only Stripe. Shared/folder-only resources are not transfer completion.

Pass 3 staged production identity: Clerk DNS Verified/SSL Issued; runtime keys/config remain pending. Do not install until host/source candidate exists. Contact-inquiry email in `cce1c449…` remains inactive until independent team/domain and explicit sender/contact are approved/proven. Keep MapLibre/Carto fallback during convergence.

## Rollback

- **Current Vercel path:** retain `dpl_XxrZAJ1567EbtnkSg2XxWq88dPtF` and another recorded clean exact-SHA deployment as code rollback candidates; database changes must remain backward-compatible and separately recoverable.
- **Data path:** capture backup/restore evidence before live migration and correct schema with forward migrations rather than destructive down-migrations.
- Keep `logloads.com` on GoDaddy Website Builder until live-data/provider activation and functional rollback pass. Historical dirty artifacts remain diagnostic evidence only; use the recorded clean current-main production for code rollback.

## Incident response

If a provider identity or value appears shared with another venture, stop writes. Identify consumers using names-only evidence, prepare replacement and rollback, then rotate after verification. Never delete a stale-looking provider resource without production-safety evidence.
