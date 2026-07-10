# ORAN migration and operations runbook

## Safety rules

1. Preserve the developer's local migration branch and untracked workflow.
2. Do not mutate the remote database, delete Azure resources, connect Vercel Git, deploy production, or change DNS until the stated gates pass.
3. Treat openresourceaccessnetwork.com mail records independently from web cutover records.
4. Never copy another venture's secrets into ORAN.

## Gate 1: reconcile the branch

1. Review the nine commits against main and decide whether feat/portfolio-convergence-azure-exit is the intended architecture.
2. Bring the deploy workflow into a reviewed change only if its enable flag, team/project IDs, token delivery, branch rules, and rollback behavior are correct.
3. Add the missing cron authorization contract, align the canonical public-site variable, and remove stale Azure CSP/runtime assumptions.
4. Run install, lint, typecheck, tests, and production build in a clean checkout.

## Gate 2: reconcile data

1. Capture a remote schema and backup/restore plan without exposing credentials.
2. Compare committed migrations to all 97 public tables and the one-row remote ledger.
3. Classify zero-policy tables as service-only or design reviewed policies.
4. Decide whether Supabase branches/projects are required for staging and development.
5. Stop before any migration-ledger repair or destructive SQL until founder approval.

## Gate 3: create a safe preview

1. Merge the reviewed migration branch to the intended integration/default branch.
2. Connect Vercel project oran to the canonical repository with root repository and production branch main.
3. Inject only ORAN-owned preview values through Doppler or an approved scoped integration.
4. Deploy preview; verify pages, auth, data read/write boundaries, maps, mail behavior, cron authorization, logs, and Sentry.
5. Record the last known-good Azure target and DNS rollback values.

## Gate 4: production cutover

1. Deploy main to Vercel without attaching the custom domain.
2. Run the same smoke suite on the provider hostname.
3. Export the DNS zone and preserve Mailgun MX/SPF.
4. Change only the required web records, verify apex/www/TLS, and monitor errors.
5. Retire Azure resources only after an authenticated inventory, retention/backup decision, sustained traffic verification, and explicit destructive-action approval.

## Rollback

Restore the recorded DNS web records or the last known-good runtime; never delete a database, Key Vault, resource group, mail route, or deployment credential as a rollback shortcut.
