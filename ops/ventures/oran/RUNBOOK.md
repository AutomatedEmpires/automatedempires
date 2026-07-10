# ORAN migration and operations runbook

## Safety rules

1. Preserve migration branch `feat/portfolio-convergence-azure-exit` at `217cd962de1633321cae49327dbc089fc4ad7377` and the untracked workflow; neither is production authority.
2. Do not mutate the remote database, delete Azure resources, connect Vercel Git, deploy production, or change DNS until the stated gates pass.
3. Treat openresourceaccessnetwork.com mail records independently from web cutover records.
4. Never copy another venture's secrets into ORAN.

## Gate 1: reconcile the branch

1. Review the nine commits from `main` `1dc1291d61cc9f27ee830f980e32eabd52248083` through candidate `217cd962de1633321cae49327dbc089fc4ad7377`; branch is zero commits behind at this snapshot.
2. Repair CI before merge: align Node 24, remove the obsolete `build:functions` job and Azure Maps runtime warnings, and update the production variable-name contract.
3. Replace the untracked production-only workflow with a reviewed, pinned-CLI exact-SHA Preview gate. Production promotion must require smoke evidence and a recorded rollback artifact.
4. Add `CRON_SECRET`/`INTERNAL_API_KEY` ownership and canonical `NEXT_PUBLIC_SITE_URL`; remove stale Application Insights/Azure CSP assumptions and allow the approved Clerk/map/runtime hosts.
5. Run install, lint, typecheck, tests, and production build in a clean checkout.

## Gate 2: reconcile data

1. Capture a remote schema and backup/restore plan without exposing credentials.
2. Compare committed migrations to all 97 public tables and the one-row remote ledger.
3. Classify zero-policy tables as service-only or design reviewed policies.
4. Decide whether Supabase branches/projects are required for staging and development.
5. Stop before any migration-ledger repair or destructive SQL until founder approval.

## Gate 3: create a safe preview

1. Keep Vercel Git unconnected while old `main` is Azure-oriented. Build a prebuilt Preview from the reviewed exact SHA against project `oran` without a production flag.
2. Inject only ORAN-owned `stg` values through Doppler or an approved scoped integration; Doppler is currently metadata-only.
3. Verify pages, Clerk redirects, data boundaries, maps/CSP, mail behavior, logs, and Sentry.
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
