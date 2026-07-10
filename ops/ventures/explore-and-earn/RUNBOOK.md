# Explore & Earn production-alignment runbook

Last reviewed: 2026-07-10

This is a coordination runbook. The authoritative detailed activation procedure remains Explore & Earn `docs/runbooks/production-activation-gates.md`; re-read it immediately before execution because provider state can change.

## Preconditions

- **Verified current** — Vercel project `explore-and-earn`, Doppler project/configs `dev`/`stg`/`prd`, and Supabase project `mamosbzcbigcclafhmmr` exist.
- **Verified current** — Production Clerk, migration-ledger repair, Resend DNS, and Stripe identity/provisioning are open blockers.
- **Target state** — Founder approval is recorded before database-ledger mutation, money-moving configuration, domain/DNS changes, or production cutover.
- **Target state** — Operators compare variable names and resource identity without printing values.

## Gate 1 — production Clerk

1. **Unknown / founder verification required** — Identify or create the venture's production Clerk application under the intended business owner and billing owner.
2. **Observed in repository** — The activation runbook expects Clerk-facing hosts under `exploreandearn.com`, a production OAuth setup, a JWT template named `supabase`, and a webhook at `/api/webhooks/clerk` for three user lifecycle events.
3. **Target state** — Configure the Supabase JWT template against the verified Explore & Earn Supabase project without recording signing material in documentation.
4. **Target state** — Register only the events consumed by the route, store the signing value in Explore & Earn's `prd` secret/deployment environments, and update the Clerk key names used by the app.
5. **Target state** — Update the Content Security Policy for the production Clerk host through a reviewed code change.
6. **Target state** — Prove sign-up, webhook delivery, profile creation, sign-in/out, protected seeker/host paths, authenticated Supabase access, and founder admin access.

Configuration names referenced by the repository include `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `CLERK_WEBHOOK_SECRET`, and `ADMIN_CLERK_USER_ID`. Names may be documented; values may not.

## Gate 2 — migration-ledger repair

1. **Verified current** — Treat the ledger repair as open even though an older runbook documents an earlier reconciliation.
2. **Target state** — Capture a fresh read-only migration list and database backup/restore point before mutation.
3. **Target state** — Have the founder approve the exact applied/reverted version plan in `docs/runbooks/production-activation-gates.md`.
4. **Target state** — Execute the repair only against the verified Explore & Earn database endpoint using a secure local/provider session; never paste the database locator into documentation or chat.
5. **Target state** — Re-run the migration list and the repository's production migration workflow. Definition of done is a matching local/remote ledger and a green no-op migration deployment.
6. **Target state** — Stop and investigate if schema changes appear; the documented repair is intended to change bookkeeping, not application schema.

## Gate 3 — Resend DNS

1. **Observed in repository** — `exploreandearn.com` is the intended sending domain and the activation runbook identifies required DKIM, SPF, and return-path/MX records.
2. **Unknown / founder verification required** — Confirm domain ownership, authoritative DNS provider, Resend account, sending-domain record, and billing/recovery owners.
3. **Target state** — Fetch record values directly from the Resend dashboard at execution time; do not copy DKIM material into this repository.
4. **Target state** — Preserve the pre-change DNS set, add only provider-issued records, wait for propagation, and verify the domain in Resend.
5. **Target state** — Send and receive a real transactional message from the venture domain and record only timestamp, result, and message purpose.

## Gate 4 — Stripe identity and provisioning

1. **Verified current** — Do not wire production billing until the account identity and mode are proven.
2. **Target state** — Prove the account behind the production runtime using an authoritative Stripe account lookup or equivalent dashboard evidence. Record the business display name, non-secret resource ownership, mode, billing owner, and verification date; do not record account credentials.
3. **Observed in repository** — The latest activation runbook calls for Explore & Earn-namespaced subscriptions at $199/$1,990, $399/$3,990, and $749/$7,490, plus a $149 one-time announcement product. This later catalog supersedes the older multi-duration announcement audit.
4. **Target state** — Provision in test mode first, configure the billing portal and webhook at `/api/webhooks/stripe`, then map only the required price and webhook variable names into the matching Doppler and Vercel environments.
5. **Target state** — Prove checkout, signed webhook processing, subscription state, entitlements, and billing UI in test mode; then run the founder-approved live proof.
6. **Target state** — Keep billing controls fail-closed until the complete environment is present.

## Release and smoke test

1. **Observed in repository** — The monorepo pins Node 24.16.0 and pnpm 10.12.4 and provides `lint`, `typecheck`, `test`, `guardrails`, and `build` scripts.
2. **Target state** — Run the relevant repository checks, deploy to Vercel Preview, and validate auth, data access, email, billing, cron, analytics, media, map, and error paths appropriate to the change.
3. **Target state** — Promote the reviewed commit only after all four production gates have their own recorded evidence or an explicit decision to keep the feature disabled.

## Rollback and stop conditions

- **Target state** — Roll back application code through Vercel or a reviewed revert; do not delete provider projects.
- **Target state** — Restore the previous DNS record set if verification fails and the change is proven causal.
- **Target state** — Disable checkout if Stripe identity, signature verification, catalog mapping, or entitlement sync is uncertain.
- **Target state** — Stop database work on any unexpected schema delta, destructive statement, wrong project ref, or missing founder approval.

## Evidence notes

- Primary: Explore & Earn `docs/runbooks/production-activation-gates.md`.
- Supporting: `docs/runbooks/db-migrations-ci.md`, `docs/runbooks/clerk-webhook-setup.md`, `docs/runbooks/cron-jobs.md`, `docs/runbooks/sentry-alerts.md`, `apps/web/app/api/webhooks/`, and `.github/workflows/`.
- Historical contradictions: `docs/audit/STRIPE_PRODUCTION_VERIFICATION.md`, `docs/audit/WORLDCLASS_SITE_AUDIT.md`, and `docs/audit/WORLDCLASS_SITE_REDESIGN_PLAN.md`.
