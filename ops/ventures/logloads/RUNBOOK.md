# LogLoads runbook

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / founder verification required**.

## Safety rules

1. Use GitHub repository `AutomatedEmpires/logloads` and verify resource identities before every provider write.
2. Keep secret values in Doppler; never store or print them in this pack or commits.
3. Do not activate broad placeholder integrations merely because variable names exist.
4. Treat domain/DNS, database migration, live email, Stripe subscriptions, and secret rotation as founder-approved operations.
5. Do not introduce Stripe Connect, freight payments, brokerage, or payout flows without a new dated product/legal decision.
6. Do not promote Vercel production until the single-writer persistent-volume versus stateless async-database runtime is explicitly decided and tested.

## Verification sequence

1. Confirm Doppler project `logloads` and config `dev`, `stg`, or `prd`.
2. Confirm source provenance: `main` `e78b48c292c57339a0610fcdbf2effa08827dc40`, feature head `cce1c4494ae49d28aacc42724ab7245668474ab7`, 8/22 divergence, and the three uncommitted deployment files. Preserve main CI/release commits during integration.
3. Confirm Supabase ref `fdzohbiiyzgvjzfsjyxo` before any database inspection or migration.
4. Compare repository consumers with the variable-name inventory; populate only variables consumed by the current slice.
5. Decide the production runtime before using Vercel readiness as an acceptance signal.
6. Run pinned repository validation from a clean exact SHA before any host-specific Preview.

## Local development

**Observed in repository:** LogLoads documents `doppler run -- pnpm dev`. Use the `dev` config and do not materialize a durable real `.env` as the source of truth.

The scaffold's successful startup or build is not proof that auth, database, maps, payments, email, analytics, or monitoring operate end to end.

## Architecture gate

The committed dated decision and deployment contract require exactly one Node writer, persistent local JSON at `/data`, and a Supabase durability mirror. Vercel root `apps/web` and Node 24 settings are already correct enough to make build settings a secondary concern.

Choose one path before production work:

1. **Preserve the current architecture:** deploy the reviewed Docker artifact to one persistent-volume process on an approved Fly.io/Railway/VM/Docker host. Prove restart restoration, mirror recovery, health, and one-instance enforcement.
2. **Choose Vercel:** first make Postgres/Supabase the canonical transactional store, remove process-local authoritative state and in-memory-only coordination/rate limits, and prove concurrent-instance/restart correctness. Record a new dated decision.

The uncommitted `outputFileTracingRoot` change targets `.pnpm`/prebuilt `ENOENT`; review it only after selecting the Vercel path. Never reuse ignored `.vercel/output` as release provenance.

## Preview and production

- **Verified current:** canonical repo/main/root `apps/web` are connected; dirty preview `dpl_Ejx66Z9wZFJiPJ5341j61voT7cHF` is `READY`.
- **Blocked:** dirty production `dpl_5LdZ4qWv7P1B68iYi3zZoJBM7wLN` errors with a missing Next server runtime, and Vercel remains architecturally incompatible with current state authority.
- **Target state:** approved host model → converged clean Git history → exact-SHA host-specific Preview → production candidate → recovery test → DNS.

Do not promote the current preview. It is dirty, cannot be reproduced from committed source, and does not prove correct persistence.

## Database

The verified project has 36 application tables with RLS, one zero-policy table (`operating_state`), and six remote migrations. `operating_state` is currently a durability mirror; local JSON is primary. Before changes, compare migrations, ownership, policies, backups, PostGIS, and rollback. No reset/push/repair or statelessness claim without explicit approval and implementation evidence.

## Provider activation order

Resolve and test the production runtime first. If single-node, provision the approved persistent-volume host; if Vercel, complete the async canonical-data refactor before packaging work. Then: production Clerk → venture-specific Mapbox tokens → separate Resend account/domain → PostHog/Sentry → Cloudinary boundary → subscription-only Stripe. Do not treat shared Mapbox/Resend or folder-only media as transfer completion.

Pass 3 staged production identity: Clerk DNS Verified/SSL Issued; runtime keys/config remain pending. Do not install until host/source candidate exists. Contact-inquiry email in `cce1c449…` remains inactive until independent team/domain and explicit sender/contact are approved/proven. Keep MapLibre/Carto fallback during convergence.

## Rollback

- **Single-node path:** retain the previous image tag and volume snapshot; roll code back by redeploying the prior image or reviewed revert while preserving the volume. Correct schema with forward migrations rather than destructive down-migrations.
- **Future Vercel path:** only after stateless refactor, retain the last accepted exact-SHA deployment and use Vercel rollback/promotion without rebuilding; database changes must remain backward-compatible.
- Keep `logloads.com` on GoDaddy Website Builder until the chosen runtime and rollback pass. The current dirty READY preview is diagnostic evidence, not a production rollback target.

## Incident response

If a provider identity or value appears shared with another venture, stop writes. Identify consumers using names-only evidence, prepare replacement and rollback, then rotate after verification. Never delete a stale-looking provider resource without production-safety evidence.
