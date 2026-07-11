# Sweepza runbook

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / provider-owner verification required**.

## Safety rules

1. Confirm GitHub, Doppler, Vercel, and Supabase identities before every write.
2. Never reuse Explore & Earn or another venture's auth, payment, webhook, database, analytics, or error-monitoring resource.
3. Resolve secret values from Doppler at execution time; inspect names/presence only in logs and reviews.
4. Stripe account changes, custom-domain attachment, DNS, production data changes, and secret rotation require founder approval and a rollback plan.

## Environment verification

1. Confirm Doppler project `sweepza` and the intended config.
2. Link the checkout to Vercel and verify `.vercel/project.json` reports project name `sweepza` before running any sync. The inspection clone did not contain that local link file.
3. Confirm Supabase fingerprint `…nzisuomq` before migration or data operations.
4. Run names-only checks for required configuration; never echo values.

## Local development

- Use Doppler `dev`; `dev_personal` is observed in the venture runbook but is not part of the portfolio-required `dev`/`stg`/`prd` baseline.
- Missing provider groups may trigger documented local degradation, but production must not depend on that fallback.
- Use repository-pinned Node/pnpm and existing test/build scripts.

## Vercel sync and deploy

**Observed in repository:** `scripts/sync-vercel-env-from-doppler.sh` guards the linked project name, maps Doppler `stg` to Vercel Preview and `prd` to Production, skips empty/placeholder-looking values, and syncs the current runtime contract.

1. Link only to Vercel project `sweepza`.
2. Review the names to be synchronized against [ENVIRONMENT_MAP.md](ENVIRONMENT_MAP.md).
3. Run the guarded sync from the Sweepza repository.
4. Deploy Preview and test auth, public data, host billing disabled/enabled states, email, analytics, errors, and cron authentication.
5. The custom domain and current-main production are already live. Future promotion still requires production Clerk proof, residual Stripe endpoint/object review, telemetry decisions, and rollback checks appropriate to the change.

## Pass 3 identity and email gates

1. Dark production Clerk DNS is Verified and SSL Issued. Configure domain/OAuth/webhook/admin recovery and install only in Preview. Do not overwrite live dev-backed `prd` before role/profile/webhook smoke passes.
2. **Safely fixed and deployed** — The truthful mail-skip correctness fix merged through #47 and is present in current-main production `dpl_9N57qj7PHDteARUpVFWCKAxYutts`; this is not email activation, so retain the runtime smoke gate.
3. With no mail key, verified behavior is `skipped`, and `sent_at` must remain null. Production must not claim mail delivery.
4. After founder approves an independent Resend team/domain, install scoped key/from values through `stg`, preserve Microsoft 365 root MX, prove delivery, then promote.

## Webhooks

- Clerk: `POST /api/webhooks/clerk`; subscribe to `user.created`, `user.updated`, `user.deleted`. The route returns 503 when its signing configuration is absent.
- Stripe: `POST /api/webhooks/stripe`; subscribe to subscription created/updated/deleted. The route returns 503 when its signing configuration is absent.

Register endpoints separately per environment and account. Do not copy another venture's endpoint or signing configuration.

## Stripe provisioning

The repository script defines the Sweepza Host Plan and Extra Active Listing recurring prices and can create/update the webhook without printing its signing value. Before running it:

1. Treat dedicated live account `acct_1Sp…cxzo` as Sweepza-owned but retain its foreign Explore&Earn webhook until E&E's replacement is proven. Classify two customers/one $0 draft invoice without deletion or irreversible mutation.
2. Keep test/sandbox proof first; the $19/$5 prices and lane bindings are already aligned.
3. Record only abbreviated object fingerprints in public operations docs; store signing material only in Doppler.
4. Complete an end-to-end checkout → webhook → entitlement test before live activation.

## Supabase and cron

- Obtain the Sweepza DB password through an approved secure channel before linking.
- Compare local migrations with the verified remote ledger of eight migrations and 17 RLS/policy-covered public tables before pushing.
- Vercel cron calls `/api/cron/expire-stale` at `10 6 * * *`; it must fail closed when `CRON_SECRET` is absent or invalid.

## Incident response

On identity mismatch or suspected contamination: stop provider writes, preserve names-only evidence, identify consumers, prepare replacement and rollback, then rotate only after the replacement is proven.
