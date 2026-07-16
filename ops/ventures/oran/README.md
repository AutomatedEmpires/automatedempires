# ORAN infrastructure operations

ORAN (Open Resource Access Network) is a chat-first civic resource-navigation venture. An earlier infrastructure snapshot—retained below as historical evidence—recorded a broken Azure target, draft PR #58 at exact head `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da`, three red ancillary checks, and zero Vercel deployments.

## Canonical MVP boundary

ORAN is a chat-first, intelligence-driven civic resource navigation system. A person explains the real problem; guided intake accounts for need, location, age, urgency, eligibility, relevant household context, transportation/access, language/accessibility, and service domain, then routes the person to verified, actionable providers/services.

The protected North Idaho/Eastern Washington MVP includes guided intake, provider/service recommendations, eligibility/location-aware matching, issue reporting, a community volunteer/admin review queue, an agentic sourcing pipeline with human verification, source-backed provider records, provenance/stale handling, and urgent/crisis escalation. It is not a generic resource dump; do not add broad directories unless they answer an evidenced user need. ORAN permits no user or behavioral tracking and no pixels. Privacy-scrubbed operational health logging is for runtime safety only, never profiling, attribution, advertising, or product analytics. Provide no medical, legal, political, or emergency advice; imply no partnerships; and do not open a public launch until data, runtime, and support gates pass.

> Execution supersession note (2026-07-12): the PR #58/zero-deployment records in this pack are preserved as the earlier infrastructure snapshot. Current execution evidence is merged PR #67 at `8da2101` with protected Preview `dpl_9QdKsovZZcASrdgCqENysSF9XSNd`; `/` and `/status` return `200` with `noindex`, runtime provider variables remain empty, and no public rollout or DNS authority exists.

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

## Historical operating decision

The earlier pass required: do not reconnect old Azure merely for convenience, and do not deploy the Vercel shell merely for uniformity; keep PR #58 draft while completing the safe data/credential lane, schema-authority reconciliation, runtime contract, exact-SHA Preview, and functional rollback. Restoring the broken Azure A record was state restoration, not service recovery. Forward work follows the canonical MVP boundary above and the later execution evidence; the protected Preview does not authorize public rollout or DNS.

## Pack index

- [RUNBOOK.md](RUNBOOK.md)
- [ENVIRONMENT_MAP.md](ENVIRONMENT_MAP.md)
- [PROVIDER_LINKS.md](PROVIDER_LINKS.md)
- [TRANSFER_CHECKLIST.md](TRANSFER_CHECKLIST.md)
- [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md)
