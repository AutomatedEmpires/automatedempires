# ORAN known limitations

| Limitation | Operational effect | Required resolution |
|---|---|---|
| Public domain points to Azure A `20.115.232.12`, returning 404 with invalid TLS | ORAN has no verified healthy public production site and restoring current DNS would not provide functional recovery | Establish a reviewed Vercel recovery artifact or deliberately repair/test Azure before cutover |
| Local remediation `5ec3561…` corrects CI/runtime and adds pinned exact-SHA Preview but is unpushed/no PR | Empty shell still has no deployment authority | Review/push, install scoped Preview config, run workflow, then merge |
| Local source checks pass (3,753 tests, 149-page build, zero production vulnerabilities) | Strong local evidence but no remote CI/provider artifact | Preserve evidence; do not call Preview/cutover complete |
| Vercel shell has no Git, variables, deployment, or domain | No accidental deployment path exists, but no recovery target exists either | Connect only after merge and deploy a preview first |
| Doppler configs contain metadata only | Doppler is not yet a runnable source of truth | Populate verified ORAN-owned values after the target architecture is approved |
| Cron authorization code exists and fails closed in production, but `CRON_SECRET`/`INTERNAL_API_KEY` ownership is not configured | Schedules cannot be safely proven; missing internal configuration returns a controlled failure | Add names to the reviewed environment contract and verify `401`/`503`/success paths in Preview without recording values |
| Repository has 53 migrations while managed ledger exposes one entry for a 97-table schema | Schema provenance/order unknown | Back up/reconcile before writes |
| Roughly 90 RLS-enabled application tables have no policies | Ordinary Data API access is deny-all; service-role dependence may be implicit | Document service-only intent or add reviewed policies |
| One Supabase project is discovered for all lanes | Development/staging/production data isolation is unclear | Define branch/project strategy before deploying non-production code |
| Public DNS includes Mailgun records, but mail ownership/use was not authenticated | Removing records could break mail; leaving abandoned services creates risk | Verify Mailgun account, routes, sender domains, owners, and logs |
| Azure resources and Key Vault references were not authenticated live | Cost, data, ownership, and retirement scope are unknown | Complete a read-only Azure inventory before deleting or migrating anything |
| Registrar control is authenticated, but auto-renew is off | Expiry risk during migration | Founder confirms renewal intent/billing owner |
