# ORAN known limitations

| Limitation | Operational effect | Required resolution |
|---|---|---|
| Public domain points to Azure A `20.115.232.12`, returning 404 with invalid TLS | ORAN has no verified healthy public production site and restoring current DNS would not provide functional recovery | Establish a reviewed Vercel recovery artifact or deliberately repair/test Azure before cutover |
| Candidate `217cd962de1633321cae49327dbc089fc4ad7377` is nine commits ahead of `main` `1dc1291d61cc9f27ee830f980e32eabd52248083`; production workflow is untracked | The empty Vercel shell cannot safely represent production | Review exact source, commit a preview-gated workflow, prove Preview, then merge |
| Existing CI uses Node 20, validates Azure Maps names, and invokes removed `build:functions`; untracked workflow uses unpinned Vercel CLI and production-only deploy | PR/runtime gates are internally inconsistent and will fail or bypass Preview | Align Node 24, remove obsolete Azure/functions checks, pin the CLI, and require prebuilt Preview plus smoke/rollback gates |
| Vercel shell has no Git, variables, deployment, or domain | No accidental deployment path exists, but no recovery target exists either | Connect only after merge and deploy a preview first |
| Doppler configs contain metadata only | Doppler is not yet a runnable source of truth | Populate verified ORAN-owned values after the target architecture is approved |
| Cron authorization code exists and fails closed in production, but `CRON_SECRET`/`INTERNAL_API_KEY` ownership is not configured | Schedules cannot be safely proven; missing internal configuration returns a controlled failure | Add names to the reviewed environment contract and verify `401`/`503`/success paths in Preview without recording values |
| Supabase migration ledger has one row for a 97-table schema | Schema provenance and safe migration order are unknown | Back up and reconcile committed/remote migrations before writes |
| Roughly 90 RLS-enabled application tables have no policies | Ordinary Data API access is deny-all; service-role dependence may be implicit | Document service-only intent or add reviewed policies |
| One Supabase project is discovered for all lanes | Development/staging/production data isolation is unclear | Define branch/project strategy before deploying non-production code |
| Public DNS includes Mailgun records, but mail ownership/use was not authenticated | Removing records could break mail; leaving abandoned services creates risk | Verify Mailgun account, routes, sender domains, owners, and logs |
| Azure resources and Key Vault references were not authenticated live | Cost, data, ownership, and retirement scope are unknown | Complete a read-only Azure inventory before deleting or migrating anything |
| Registrar control is not authenticated | DNS/certificate recovery and renewal remain unproven | Review the GoDaddy account with the founder's authenticated browser |
