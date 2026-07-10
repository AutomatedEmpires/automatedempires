# ORAN infrastructure operations

ORAN (Open Resource Access Network) is a standalone civic-infrastructure venture in transition. The current public domain points to an Azure address that is not serving a valid site, while the local branch feat/portfolio-convergence-azure-exit intentionally removes Azure deployment assets and prepares Vercel. The migration is real repository intent, but it is not merged or production-verified.

## Current identity

| Area | Verified record |
|---|---|
| Canonical slug | oran |
| Repository | AutomatedEmpires/Open-Resource-Access-Network |
| Default branch | main |
| Migration work | Local branch feat/portfolio-convergence-azure-exit, nine commits ahead of main at discovery |
| Secrets | Doppler project oran with dev/stg/prd metadata only |
| Vercel | Reserved shell oran, project prj_pQlCLP4RXGr2eJTo7fzZyMPX9QLy; Next.js, Node 24, root repository; no Git, deploy, variables, or domain |
| Data | Dedicated healthy Supabase project tpatxospkuqvajusuryw; deployed schema and migration ledger require reconciliation |
| Domain | openresourceaccessnetwork.com, registered at GoDaddy; current web target returns Azure 404 and invalid TLS |
| Mail | Public DNS retains Mailgun MX/SPF; preserve until intent is confirmed |

## Operating decision

Do not reconnect the old Azure deployment merely for convenience, and do not connect or deploy the Vercel shell merely for uniformity. First review the migration branch, close its runtime/CSP/environment gaps, reconcile the database, merge it, and prove a preview. Only then plan a reversible domain cutover and retirement of unused Azure resources.

## Pack index

- [RUNBOOK.md](RUNBOOK.md)
- [ENVIRONMENT_MAP.md](ENVIRONMENT_MAP.md)
- [PROVIDER_LINKS.md](PROVIDER_LINKS.md)
- [TRANSFER_CHECKLIST.md](TRANSFER_CHECKLIST.md)
- [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md)
