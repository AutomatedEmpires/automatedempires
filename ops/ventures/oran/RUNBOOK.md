# ORAN migration and operations runbook

> Execution update (2026-07-12): PR #67 merged at `8da2101`; protected noindex Preview `dpl_9QdKsovZZcASrdgCqENysSF9XSNd` serves `/` and `/status` with `200`. Runtime provider variables remain empty. Earlier PR #58/zero-deployment steps are superseded for execution but retained as lineage; the Preview is not public-launch or DNS authority.

## Safety rules

1. Preserve draft PR #58 at exact head `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da` as historical convergence evidence; current source authority is merged PR #67 at `8da2101`.
2. Do not mutate the remote database, delete Azure resources, open public access, promote Production, or change DNS until the stated gates pass.
3. Treat openresourceaccessnetwork.com mail records independently from web cutover records.
4. Never copy another venture's secrets into ORAN.
5. Keep the MVP protected and limited initially to chat-first North Idaho/Eastern Washington navigation. Intake must understand need, location, age, urgency, eligibility, relevant household context, transportation/access, language/accessibility, and service domain, then route to source-backed verified providers.
6. Permit no user or behavioral tracking and no pixels. Privacy-scrubbed operational health logging is for runtime safety only, never profiling, attribution, advertising, or product analytics.
7. Provide no medical, legal, political, or emergency advice; imply no partnerships; and do not open public access before data, runtime, and support gates pass.

## Gate 1: reconcile the branch

1. Review the convergence history through PR #58 and current merged `main`/PR #67 at `8da2101`; do not restore stale Azure deployment assumptions or unsafe migration replay.
2. Confirm the `d58ea0…` hardening lineage keeps database migration fail-closed and separates uncredentialed validation from the exact-SHA credentialed Preview job.
3. Treat the protected #67 Preview as shell/build evidence only. Production promotion remains outside this workflow and requires product, data, runtime, support, and rollback evidence.
4. Add `CRON_SECRET`/`INTERNAL_API_KEY` ownership and canonical `NEXT_PUBLIC_SITE_URL`; remove stale Application Insights/Azure CSP assumptions and allow the approved Clerk/map/runtime hosts.
5. Required checks and 15 reviewed visual baselines were accepted through #67. Revalidate current-main checks before later changes while keeping product/data/runtime/rollback gates separate.

## Gate 2: reconcile data

1. Capture a remote schema and backup/restore plan without exposing credentials.
2. Compare 53 committed migrations to 97 public tables and the one-entry managed ledger.
3. Classify zero-policy tables as service-only or design reviewed policies.
4. Decide whether Supabase branches/projects are required for staging and development.
5. Stop before migration-ledger repair or destructive SQL until backup, exact plan, and required explicit approval exist.

## Gate 3: create a safe preview

1. Preserve protected Preview `dpl_9QdKsovZZcASrdgCqENysSF9XSNd` at exact SHA `8da2101` as the shell/build baseline. Do not attach the custom domain or treat the provider-classified production target on the same SHA as public authority.
2. Inject only ORAN-owned `stg` values through Doppler or an approved scoped integration; current non-metadata values are limited to ORAN Sentry identifiers.
3. Verify protected access; chat-first guided intake; eligibility/location-aware actionable provider recommendations; regional scope; source citations/provenance; stale-record states; issue reporting; agentic sourcing with human verification; volunteer/admin review; urgent escalation; no generic resource dump; no user/behavioral tracking or pixels; advice/partnership disclaimers; data boundaries; maps/CSP; mail; and privacy-scrubbed runtime logs/Sentry while keeping traces `0`.
4. Verify cron fail-closed behavior: unauthorized request `401`, absent internal configuration `503`, and approved scheduled execution only with the reviewed configuration.
5. Record the Preview deployment ID, SHA, build settings, product/runtime smoke results, and rollback owner. Open broader access only after this gate passes.

## Gate 4: production cutover

1. After approved merge, connect canonical repository/root `.`/production branch `main`; do not attach the custom domain yet.
2. Produce a production-configured candidate on the provider hostname. Prefer promoting the exact accepted artifact rather than rebuilding after acceptance, and record its deployment ID/SHA.
3. Run the same smoke suite and inspect runtime errors before DNS.
4. Export the DNS zone and preserve Mailgun MX/SPF/DMARC.
5. Require a functional recovery target, then change only web records, verify apex/`www`/TLS, and monitor errors.
6. Retire Azure only after authenticated inventory, retention/backup decision, sustained traffic verification, and explicit destructive-action approval.

## Rollback

First restore the Vercel production alias to the recorded previous verified deployment. If DNS must be reversed, restore only the recorded web records and leave Mailgun records intact. Azure A `20.115.232.12` currently returns 404/invalid TLS, so restoring it is prior-state restoration, not functional service recovery; cutover is a no-go until Azure is repaired/tested or a second verified Vercel artifact exists. Never delete a database, Key Vault, resource group, mail route, or deployment credential as a rollback shortcut.
