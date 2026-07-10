# ORAN infrastructure operations

ORAN (Open Resource Access Network) is a standalone civic-infrastructure venture in transition. The current public domain points to an Azure address that is not serving a valid site, while the local branch feat/portfolio-convergence-azure-exit intentionally removes Azure deployment assets and prepares Vercel. The migration is real repository intent, but it is not merged or production-verified.

## Current identity

| Area | Verified record |
|---|---|
| Canonical slug | oran |
| Repository | AutomatedEmpires/Open-Resource-Access-Network |
| Default branch | `main` at `1dc1291d61cc9f27ee830f980e32eabd52248083` |
| Migration work | Remote-tracked `feat/portfolio-convergence-azure-exit` at `217cd962de1633321cae49327dbc089fc4ad7377`, nine commits ahead and zero behind `main`; one production-only Vercel workflow remains untracked |
| Secrets | Doppler project oran with dev/stg/prd metadata only |
| Vercel | Reserved shell `oran`, project `prj_pQlCLP4RXGr2eJTo7fzZyMPX9QLy`; Next.js, Node 24, root `.`; no Git, deployment, variables, or domain |
| Data | Dedicated healthy Supabase project tpatxospkuqvajusuryw; deployed schema and migration ledger require reconciliation |
| Domain | openresourceaccessnetwork.com, registered at GoDaddy; current web target returns Azure 404 and invalid TLS |
| Mail | Public DNS retains Mailgun MX/SPF; preserve until intent is confirmed |

## Operating decision

Do not reconnect the old Azure deployment merely for convenience, and do not connect or deploy the Vercel shell merely for uniformity. First review exact candidate `217cd962de1633321cae49327dbc089fc4ad7377`, repair CI/CSP/environment contracts, reconcile the database, and prove an exact-SHA prebuilt preview without attaching the domain. Merge only after preview acceptance. DNS cutover is additionally blocked until a functional rollback exists; restoring the current broken Azure A record is state restoration, not service recovery.

## Pack index

- [RUNBOOK.md](RUNBOOK.md)
- [ENVIRONMENT_MAP.md](ENVIRONMENT_MAP.md)
- [PROVIDER_LINKS.md](PROVIDER_LINKS.md)
- [TRANSFER_CHECKLIST.md](TRANSFER_CHECKLIST.md)
- [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md)
