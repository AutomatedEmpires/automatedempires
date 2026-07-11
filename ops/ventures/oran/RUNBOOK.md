# ORAN migration and operations runbook

## Safety rules

1. Preserve draft PR #58 at exact head `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da`; it is not production authority while unmerged/undeployed.
2. Do not mutate the remote database, delete Azure resources, connect Vercel Git, deploy production, or change DNS until the stated gates pass.
3. Treat openresourceaccessnetwork.com mail records independently from web cutover records.
4. Never copy another venture's secrets into ORAN.

## Gate 1: reconcile the branch

1. Review the convergence history, default `main` `1dc1291d61cc9f27ee830f980e32eabd52248083`, and draft PR #58 exact head `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da`; do not restore stale Azure deployment assumptions or unsafe migration replay.
2. Confirm the `d58ea0…` hardening lineage keeps database migration fail-closed and separates uncredentialed validation from the exact-SHA credentialed Preview job.
3. Keep the PR draft until its data-lane/rollback gate is green; production promotion remains outside this workflow and requires smoke/rollback evidence.
4. Add `CRON_SECRET`/`INTERNAL_API_KEY` ownership and canonical `NEXT_PUBLIC_SITE_URL`; remove stale Application Insights/Azure CSP assumptions and allow the approved Clerk/map/runtime hosts.
5. Required Build, Lint, Test, Type Check, Security Audit, and Runtime Readiness are green at the exact PR head. Codecov patch, Visual Regression, and runbook freshness still fail; repair or explicitly disposition them before merge while keeping the data/Preview/rollback gate separate.

## Gate 2: reconcile data

1. Capture a remote schema and backup/restore plan without exposing credentials.
2. Compare 53 committed migrations to 97 public tables and the one-entry managed ledger.
3. Classify zero-policy tables as service-only or design reviewed policies.
4. Decide whether Supabase branches/projects are required for staging and development.
5. Stop before migration-ledger repair or destructive SQL until backup, exact plan, and required explicit approval exist.

## Gate 3: create a safe preview

1. Vercel currently has zero deployments. Keep production disconnected while `main` remains Azure-oriented; build a prebuilt Preview from exact SHA `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da` against project `oran` without a production flag.
2. Inject only ORAN-owned `stg` values through Doppler or an approved scoped integration; current non-metadata values are limited to ORAN Sentry identifiers.
3. Verify pages, Clerk redirects, data boundaries, maps/CSP, mail behavior, logs, and the separate ORAN Sentry event/release while keeping traces `0` unless separately reviewed.
4. Verify cron fail-closed behavior: unauthorized request `401`, absent internal configuration `503`, and approved scheduled execution only with the reviewed configuration.
5. Record Preview deployment ID, SHA, build settings, smoke results, and rollback owner. Merge only after this gate passes.

## Gate 4: production cutover

1. After approved merge, connect canonical repository/root `.`/production branch `main`; do not attach the custom domain yet.
2. Produce a production-configured candidate on the provider hostname. Prefer promoting the exact accepted artifact rather than rebuilding after acceptance, and record its deployment ID/SHA.
3. Run the same smoke suite and inspect runtime errors before DNS.
4. Export the DNS zone and preserve Mailgun MX/SPF/DMARC.
5. Require a functional recovery target, then change only web records, verify apex/`www`/TLS, and monitor errors.
6. Retire Azure only after authenticated inventory, retention/backup decision, sustained traffic verification, and explicit destructive-action approval.

## Rollback

First restore the Vercel production alias to the recorded previous verified deployment. If DNS must be reversed, restore only the recorded web records and leave Mailgun records intact. Azure A `20.115.232.12` currently returns 404/invalid TLS, so restoring it is prior-state restoration, not functional service recovery; cutover is a no-go until Azure is repaired/tested or a second verified Vercel artifact exists. Never delete a database, Key Vault, resource group, mail route, or deployment credential as a rollback shortcut.
