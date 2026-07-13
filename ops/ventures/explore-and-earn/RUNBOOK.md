# Explore & Earn production-alignment runbook

Last reviewed: 2026-07-10

This is a coordination runbook. The authoritative detailed activation procedure remains Explore & Earn `docs/runbooks/production-activation-gates.md`; re-read it immediately before execution because provider state can change.

## Preconditions

- **Verified boundary** — Vercel/Doppler projects and Supabase fingerprint `…lafhmmr` exist; public deployment `dpl_5HCPaCNCQuyip2iZTHpoMvSxjQFY` from prior source `b616b9e10fa434422dd34442f6cb24194cf8d5ec` is `READY`. Current source includes #244/#245 through `5989853` and needs deployment revalidation; sensitive account/project identifiers remain abbreviated.
- **Verified current** — Clerk dark resource/DNS/SSL; Resend domain/scoped credential/environment; and Stripe dedicated-account/catalog preparation are complete. Clerk runtime, mail delivery, migration ledger, and production Stripe binding/webhook remain open.
- **Target state** — Record the exact plan and applicable destructive/money/legal/DNS authority before database-ledger mutation, money-moving configuration, domain changes, or production cutover.
- **Target state** — Operators compare variable names and resource identity without printing values.

## Gate 1 — production Clerk

1. **Safely fixed now** — A separate dark/default production Clerk instance exists and its five CNAMEs are provider-verified. It was not cloned because existing Phone/SMS MFA made cloning payment-gated.
2. **Observed in repository** — The activation runbook expects Clerk-facing hosts under `exploreandearn.com`, a production OAuth setup, a JWT template named `supabase`, and a webhook at `/api/webhooks/clerk` for three user lifecycle events.
3. **Target state** — Configure the Supabase JWT template against the verified Explore & Earn Supabase project without recording signing material in documentation.
4. **Target state** — Register only the events consumed by the route, store the signing value in Explore & Earn's `prd` secret/deployment environments, and update the Clerk key names used by the app.
5. **Target state** — Update the Content Security Policy for the production Clerk host through a reviewed code change.
6. **Target state** — DNS is Verified and SSL Issued. Configure remaining settings, then prove sign-up, webhook/profile, sign-in/out, protected paths, Supabase, founder admin, and re-registration policy in dark Preview before `prd`.

Configuration names referenced by the repository include `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `CLERK_WEBHOOK_SECRET`, and `ADMIN_CLERK_USER_ID`. Names may be documented; values may not.

## Gate 2 — migration-ledger repair

1. **Verified current** — Treat the ledger repair as open even though an older runbook documents an earlier reconciliation.
2. **Target state** — Capture a fresh read-only migration list and database backup/restore point before mutation.
3. **Target state** — Approve the exact applied/reverted version plan in `docs/runbooks/production-activation-gates.md` with backup and rollback evidence.
4. **Target state** — Execute the repair only against the verified Explore & Earn database endpoint using a secure local/provider session; never paste the database locator into documentation or chat.
5. **Target state** — Re-run the migration list and the repository's production migration workflow. Definition of done is a matching local/remote ledger and a green no-op migration deployment.
6. **Target state** — Stop and investigate if schema changes appear; the documented repair is intended to change bookkeeping, not application schema.

## Gate 3 — Resend delivery

1. **Completed** — Authenticated GoDaddy zone was inspected, the three provider-issued records were added without collision, all resolve publicly, and Resend reports `verified`.
2. **Safely fixed now** — A sending-only/domain-restricted key is installed as restricted/sensitive in all approved Doppler/Vercel lanes. From is `notifications@exploreandearn.com`; Reply-To is `support@exploreandearn.com`. Source commits `d1e43f5…`/`7893756…` are green.
3. **Verified open** — Exact-source Preview `dpl_BgD…` passed the GitHub Vercel status and PR #243 merged green at `b616b9e…`, but real custom-domain delivery/reply is not authorized/proven. The broad key remains rollback.
4. **Target state** — Prove delivery, SPF/DKIM/DMARC alignment, reply/bounce/complaint behavior, and truthful app logging. Record metadata only.
5. **Target state** — Promote only after proof; retire the broad key after zero use. Never revoke before replacement verification.

## Gate 4 — Stripe identity and provisioning

1. **Safely fixed now** — Dedicated live `acct_1RM…` and test `acct_1Tep…` accounts are verified. The live account was empty before its five-product/ten-price catalog was created; test was seeded and twelve expected variables verified in approved non-production lanes.
2. **Verified open** — Prove the account behind the current production runtime using an authoritative lookup that returns only account ID; do not record credentials. Stop if it does not match the intended E&E account.
3. **Verified open** — Create/verify the E&E live webhook at `/api/webhooks/stripe` and map only the required names through a rollback-safe Doppler/Vercel path.
4. **Safety rule** — No customer, invoice, payment, subscription, payout, tax, or legal state changes are authorized by catalog preparation.
5. **Target state** — Prove checkout, signed webhook processing, subscription state, entitlements, and billing UI in test mode; run live proof only under the approved non-destructive plan.
6. **Target state** — Keep billing controls fail-closed until the complete environment is present.

## Release and smoke test

1. **Observed in repository** — The monorepo pins Node 24.16.0 and pnpm 10.12.4 and provides `lint`, `typecheck`, `test`, `guardrails`, and `build` scripts.
2. **Target state** — Run the relevant repository checks, deploy to Vercel Preview, and validate auth, data access, email, billing, cron, analytics, media, map, and error paths appropriate to the change.
3. **Target state** — Promote the reviewed commit only after all four production gates have their own recorded evidence or an explicit decision to keep the feature disabled.

## Rollback and stop conditions

- **Target state** — Roll back application code through Vercel or a reviewed revert; do not delete provider projects.
- **Target state** — Restore the previous DNS record set if verification fails and the change is proven causal.
- **Target state** — Disable checkout if Stripe identity, signature verification, catalog mapping, or entitlement sync is uncertain.
- **Target state** — Stop database work on any unexpected schema delta, destructive statement, wrong project, missing backup, or missing authorized plan.

## Evidence notes

- Primary: Explore & Earn `docs/runbooks/production-activation-gates.md`.
- Supporting: `docs/runbooks/db-migrations-ci.md`, `docs/runbooks/clerk-webhook-setup.md`, `docs/runbooks/cron-jobs.md`, `docs/runbooks/sentry-alerts.md`, `apps/web/app/api/webhooks/`, and `.github/workflows/`.
- Historical contradictions: `docs/audit/STRIPE_PRODUCTION_VERIFICATION.md`, `docs/audit/WORLDCLASS_SITE_AUDIT.md`, and `docs/audit/WORLDCLASS_SITE_REDESIGN_PLAN.md`.
