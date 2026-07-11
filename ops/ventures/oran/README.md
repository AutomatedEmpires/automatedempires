# ORAN infrastructure operations

ORAN (Open Resource Access Network) is a standalone civic-infrastructure venture in transition. The public domain points to a broken Azure target. Green/fail-closed Vercel convergence is published in draft PR #58 at exact head `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da`; required core checks are green, three ancillary checks remain red, and Vercel has zero deployments.

## Current identity

| Area | Verified record |
|---|---|
| Canonical slug | oran |
| Repository | AutomatedEmpires/Open-Resource-Access-Network |
| Default branch | `main` at `1dc1291d61cc9f27ee830f980e32eabd52248083`; draft migration work remains separate |
| Migration work | [Draft PR #58](https://github.com/AutomatedEmpires/Open-Resource-Access-Network/pull/58) at exact head `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da`; required Build/Lint/Test/Type Check/Security Audit/Runtime Readiness green; Codecov patch/Visual Regression/runbook freshness fail |
| Secrets | Doppler project oran with dev/stg/prd; only ORAN-specific Sentry identity beyond metadata |
| Vercel | Reserved shell `oran`, project fingerprint `…X9QLy`; Next.js, Node 24, root `.`; zero deployments and no verified runtime/domain/rollback artifact |
| Data | Dedicated healthy Supabase fingerprint `…vajusuryw`; deployed schema and migration ledger require reconciliation |
| Domain | openresourceaccessnetwork.com, registered at GoDaddy; current web target returns Azure 404 and invalid TLS |
| Mail | Public DNS retains Mailgun MX/SPF; preserve until intent is confirmed |

## Operating decision

Do not reconnect old Azure merely for convenience, and do not deploy the Vercel shell merely for uniformity. Keep PR #58 draft while completing the safe data/credential lane, schema-authority reconciliation, runtime contract, exact-SHA Preview, and functional rollback. Restoring the current broken Azure A record is state restoration, not service recovery.

## Pack index

- [RUNBOOK.md](RUNBOOK.md)
- [ENVIRONMENT_MAP.md](ENVIRONMENT_MAP.md)
- [PROVIDER_LINKS.md](PROVIDER_LINKS.md)
- [TRANSFER_CHECKLIST.md](TRANSFER_CHECKLIST.md)
- [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md)
