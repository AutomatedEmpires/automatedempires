# ORAN known limitations

| Limitation | Operational effect | Required resolution |
|---|---|---|
| Public domain points to an Azure address returning 404 with invalid TLS | ORAN has no verified healthy public production site | Establish a reviewed preview/cutover or deliberately repair Azure with a rollback plan |
| Azure-to-Vercel branch is local/unmerged and its deployment workflow is untracked | The empty Vercel shell cannot safely represent production | Review code, workflow, CSP, cron, environment contract, tests, and merge |
| Vercel shell has no Git, variables, deployment, or domain | No accidental deployment path exists, but no recovery target exists either | Connect only after merge and deploy a preview first |
| Doppler configs contain metadata only | Doppler is not yet a runnable source of truth | Populate verified ORAN-owned values after the target architecture is approved |
| Supabase migration ledger has one row for a 97-table schema | Schema provenance and safe migration order are unknown | Back up and reconcile committed/remote migrations before writes |
| Roughly 90 RLS-enabled application tables have no policies | Ordinary Data API access is deny-all; service-role dependence may be implicit | Document service-only intent or add reviewed policies |
| One Supabase project is discovered for all lanes | Development/staging/production data isolation is unclear | Define branch/project strategy before deploying non-production code |
| Public DNS includes Mailgun records, but mail ownership/use was not authenticated | Removing records could break mail; leaving abandoned services creates risk | Verify Mailgun account, routes, sender domains, owners, and logs |
| Azure resources and Key Vault references were not authenticated live | Cost, data, ownership, and retirement scope are unknown | Complete a read-only Azure inventory before deleting or migrating anything |
| Registrar control is not authenticated | DNS/certificate recovery and renewal remain unproven | Review the GoDaddy account with the founder's authenticated browser |
