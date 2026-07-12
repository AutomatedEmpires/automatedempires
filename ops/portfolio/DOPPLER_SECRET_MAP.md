# Doppler Portfolio Secret Map

**Verified snapshot:** 2026-07-12
**Policy:** Doppler is the intended source of truth. A credential is recorded as installed only when direct names-only/provider evidence exists; provider project/token creation is not installation, delivery, or production activation.

Counts below are the Pass 3 names-only baseline and include Doppler metadata; they are retained only as history and are not recomputed totals. Pass 5 populated each active venture's own PostHog key/host in all lanes. AutomatedEmpires `dev` entries are restricted: CLI `null` is expected, while authenticated browser write-and-save confirms presence; they are not empty or independently readable. Other presence-only/non-empty checks passed. No Mapbox value changed. No values or fingerprints are stored here.

| Venture | Doppler project | Pass 3 dev | Pass 3 stg | Pass 3 prd | Current state through Pass 5 |
|---|---|---:|---:|---:|---|
| AutomatedEmpires | automatedempires | 3 | 3 | 3 | Sentry identifiers and own PostHog pair span all lanes. `dev` pair is restricted/browser write-confirmed and CLI-null by design; `stg`/`prd` presence verified. No Mapbox consumer; fresh deployment/event smoke pending |
| Explore&Earn | explore-and-earn | 36 | 7 | 7 | Resend spans all lanes, Stripe test names span `dev`/`stg`, and preserved PostHog project `291166` key/host span all lanes. Shared public Mapbox remains rollback; no secret founder token was installed |
| ORAN | oran | 3 | 3 | 3 | ORAN-only Sentry identifiers span all lanes. PostHog is intentionally deferred and no Mapbox consumer exists; no Pass 5 secret change |
| BidSpace | bidspace | 16 | 3 | 3 | Own PostHog key/host now span all lanes; other staging/production application values remain sparse. Shared public Mapbox remains only in audited dev; secret replacement rejected. Fresh analytics deployment/event smoke pending |
| Lake & Pine | lake-and-pine | 3 | 9 | 9 | Own Sentry and PostHog key/host span all lanes; Vercel/Supabase remain in staging/production. Mapbox consumer is proven, but no token name/value exists. Fresh analytics deployment/event smoke pending |
| Sweepza | sweepza | 25 | 22 | 26 | All lanes still use dev Clerk. Own PostHog pair spans all lanes; Vercel duplicate production-only host record removed, leaving exact intended scopes. Resend absent; PostHog/Sentry event proof open |
| LogLoads | logloads | 22 | 11 | 18 | Own PostHog key/host now span all lanes. Shared public Mapbox remains in audited `dev`/`prd`; no replacement installed. Fresh analytics deployment/event smoke and broader live-provider activation remain open |

Every listed project has dev, stg, and prd configs. Personal development configs created by Doppler are not production environments.

## Changes performed

- Created the missing AutomatedEmpires, ORAN, and Lake & Pine projects and their environment configs.
- Imported Lake & Pine's verified Vercel/Supabase values into Lake & Pine staging and production without displaying them.
- Corrected Explore&Earn's SENTRY_ORG in Doppler development and its matching Vercel development environment.
- Generated one names-and-purpose map per venture under ops/secrets.
- Compared redacted value fingerprints across projects to locate shared provider context without recording values.
- Confirmed that Pass 3-created Clerk resources and verified Resend DNS did not silently change Doppler. Provider existence is recorded separately from credential installation.
- Pass 4 installed the scoped Explore&Earn Resend key and explicit From/Reply-To in all three configs without displaying values, and verified the twelve-name Stripe test contract in `dev`/`stg`.
- Created separate Sentry projects for AutomatedEmpires, Lake & Pine, and ORAN and installed each venture's own DSN/org/project identifiers write-only into its `dev`/`stg`/`prd` configs. Vercel installation/runtime events are not claimed.
- Pass 5 created/preserved six separate PostHog projects and populated each active venture's own key/host in all Doppler lanes. AutomatedEmpires `dev` is restricted/browser write-confirmed; other presence checks passed. No fresh deployment/event smoke is claimed.
- Pass 5 rejected every available founder-created Mapbox token because each was a secret `sk` token. No browser-visible variable was changed; the old shared public token remains rollback where previously recorded.

## Known migration gaps

| Gap | Why it remains | Required next action |
|---|---|---|
| Explore&Earn lanes are only partially converged | Resend is now present in all lanes and Stripe test names in `dev`/`stg`, but Clerk/data/full runtime parity remains incomplete; GitHub/Vercel legacy values may be write-only | Replace each remaining consumer with an authoritative venture-owned value through exact-SHA Preview; never bulk-copy `dev` |
| GitHub still holds five Explore&Earn repository secrets | Values cannot be read or compared, and deleting them could break workflows | Map each workflow consumer, replace it with a tested Doppler integration/token, then remove only confirmed-unused secrets |
| Sweepza populated configs are not fully production-safe | All lanes still use Clerk development; PostHog key/host are installed but not deployment/event verified; Resend names are absent. Dedicated Stripe accounts/prices are verified in Vercel, but residual objects/config and broader Doppler parity remain | Configure dark Clerk after Preview; keep mail truthfully disabled; fresh-deploy and event-check PostHog; verify Doppler/Vercel Stripe name parity |
| LogLoads production activation is incomplete | Canonical source/checks are merged and clean main production exists, but live Supabase migration, environment provenance, distributed rate limiting, provider activation, and functional rollback remain; legacy Resend is coupled | Prove live-shape upgrade and production rollback before live migration or Clerk activation. Keep mail deferred until an independent paid domain/team |
| Explore&Earn delivery and identity remain open | Scoped Resend is installed, but delivery/zero broad-key use is unproven; no production Clerk credentials are installed | Complete exact-SHA mail smoke, then revoke broad rollback only after zero use; configure Clerk through dark Preview |
| Other Vercel values outside the targeted PostHog writes were not re-imported | The API returns write-only values and no safe authoritative replacement was available | Treat other legacy Vercel values as unverified until each is replaced and tested through Doppler; PostHog presence is separately verified but awaits fresh deployment |
| Doppler example-project is unexplained | It may be a template or dependency and contains sample-looking names | Confirm ownership and usage, then delete only with explicit approval |

## Hygiene rules

1. Add or rotate a secret in Doppler first.
2. Use a business-specific service token/integration for Vercel or CI; do not copy values across ventures.
3. Share one venture value across lanes only when the provider model and temporary policy explicitly require it, as with the current per-venture PostHog project. Otherwise keep development, staging, and production values distinct.
4. Record names, purpose, owner, and rotation procedure only; never record values in Git or tickets.
5. Rotate only after the replacement is deployed and its dependent flows pass.
6. Review the venture-specific maps in ops/secrets before changing an environment.
