# ORAN transfer checklist

> Execution update: PR #67 is merged at `8da2101`; protected Preview `dpl_9QdKsovZZcASrdgCqENysSF9XSNd` serves `/` and `/status` with `200`/`noindex`. Earlier PR #58 checklist evidence is retained below; runtime providers, product acceptance, support, public rollout, and DNS remain unapproved.

## Product stewardship

- [ ] Recipient accepts ORAN as chat-first guided navigation to verified providers/services, not a generic resource directory.
- [ ] Guided intake and matching account for need, location, age, urgency, eligibility, relevant household context, transportation/access, language/accessibility, and service domain.
- [ ] North Idaho/Eastern Washington protected MVP scope, source classes, citations/provenance, stale thresholds, issue reporting, agentic sourcing controls, human/volunteer/admin review, and verification workflow are accepted.
- [ ] Urgent/crisis escalation routes to appropriate services without ORAN claiming to provide emergency advice.
- [ ] No user/behavioral tracking or pixels exist; operational health logging is privacy-scrubbed and safety-only.
- [ ] No medical/legal/political/emergency advice or implied partnership appears, and named support/correction/removal/escalation owners are accepted.

## Authority and code

- [ ] Recipient controls AutomatedEmpires/Open-Resource-Access-Network or its approved successor.
- [ ] The migration branch is merged, abandoned, or preserved with an explicit decision.
- [x] Hardening is published in draft PR #58 at exact head `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da`; required core checks are green.
- [ ] Codecov patch, Visual Regression, and runbook freshness are repaired/dispositioned, and exact-SHA Preview, data-lane, and rollback evidence are recorded before merge.
- [x] Strict ORAN core checks, linear/squash history, conversation resolution, no force push/deletion, automation bypass, vulnerability alerts, and Dependabot updates are configured; CI environment/recipient/rollback ownership remains transfer-specific.

## Runtime and data

- [ ] Canonical runtime is named and healthy; the broken Azure public target is no longer ambiguous.
- [ ] Vercel project oran is connected/deployed only if the migration was approved.
- [ ] Supabase project fingerprint `…vajusuryw` ownership, region, backups, migrations, RLS intent, service roles, and recovery are demonstrated.
- [ ] The 53-repository-migration versus one-managed-ledger mismatch is reconciled before Preview writes.
- [ ] Development, staging, and production data/environment strategy is documented.
- [ ] Every retained Azure resource, subscription/RBAC owner, cost, data-retention duty, and deletion gate is inventoried.

## Secrets and providers

- [ ] Doppler oran dev/stg/prd ownership is transferred and configs contain only ORAN resources.
- [ ] No secret value is placed in this pack, repository, or transfer ticket.
- [ ] Separate ORAN Sentry project/governance/Doppler bindings are recorded; Vercel event remains. Maps, mail, auth, AI, and Azure integrations are classified as keep, migrate, or retire.
- [ ] Authenticated registrar/full zone are transferred; auto-renew-off decision, recovery, TLS, apex/www, and Mailgun records are resolved.

## Acceptance

- [ ] Recipient can deploy a non-production build and run the smoke suite.
- [ ] Recipient can exercise protected guided intake through a source-cited, eligibility/location-relevant provider recommendation and report a bad/stale record through the review queue.
- [ ] Recipient can restore the last known-good runtime and database recovery point.
- [ ] Cron/webhook endpoints reject unauthorized calls and point only to ORAN resources.
- [ ] No other venture's runtime account, data, identity, payment, mail, analytics, media, map, or webhook credential is required.
- [ ] Public access and DNS remain disabled until product, data, runtime, support, and recovery gates pass and a separate launch decision is recorded.
