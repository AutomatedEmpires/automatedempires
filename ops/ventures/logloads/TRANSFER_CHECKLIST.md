# LogLoads transfer checklist

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / provider-owner verification required**.

## Repository and governance

- [ ] Recipient has the required role on `AutomatedEmpires/logloads`.
- [x] Strict `verify`/`migrations`/`dependency-review`, linear/squash history, conversation resolution, no force push/deletion, automation bypass, vulnerability alerts, and Dependabot updates are verified; CODEOWNERS/emergency access remain transfer-specific.
- [ ] Recipient acknowledges the coordination-software boundary and subscription-only Stripe decision.

## Environments and deployment

- [ ] Doppler project `logloads` and `dev`/`stg`/`prd` access are transferred independently.
- [ ] Broad scaffold variables are classified as active, planned, or retired without revealing values.
- [x] Canonical work is published at final PR #6 source `f280ef4fef4b992f94457aad61cfe27e8ec91791`; historical review threads are resolved, required checks are green, and final-source Preview `dpl_8RY71TfokWZNaVZgbZgmDvMWyRf4` is `READY`.
- [x] PR #6 merged as current `main` `9c9e107082942e5bce782eac2ce71aa63eb7d9c0`; production `dpl_XxrZAJ1567EbtnkSg2XxWq88dPtF` is `READY`. Alias, live-data/provider, and functional rollback ownership remain open.

## Data and product providers

- [ ] Supabase fingerprint `…zfsjyxo`, schema, ledger, backups, RLS, storage, and PostGIS state are reviewed; local `135cff6…` upgrade is proven safely before live migration.
- [ ] Dark production Clerk DNS is Verified and SSL Issued; finish the host decision, role claims, OAuth/callbacks/webhook, isolated Preview, and runtime installation. Resolve dev/stg reuse.
- [ ] Venture-specific Mapbox is installed and local/origin verified; repair/re-smoke the Preview app path, retain MapLibre/old-token rollback, then remove the misleading server name only after zero use.
- [ ] Stripe account/mode/products/webhooks are proved LogLoads-specific and limited to subscriptions.
- [ ] LogLoads still needs separate Resend/domain delivery proof and Cloudinary decision. PostHog project/environment binding and Sentry governance exist; fresh deployment and first events/releases remain.
- [ ] Agent hooks and provider-admin tokens are least-privilege, venture-specific, and removed from runtime where unnecessary.

## Domain and acceptance

- [x] `logloads.com` authenticated ownership, privacy, auto-renew, full DNS zone, Website Builder route, and no-MX state are recorded; recovery/email/cutover transfer steps remain operationally open.
- [x] Local canonical E2E/smoke covers the implemented slice.
- [x] Remote final-source Preview `dpl_8RY71TfokWZNaVZgbZgmDvMWyRf4` is `READY`.
- [ ] Provider-failure smoke and production rollback remain.
- [ ] Production rollback and escalation owners are documented.
- [ ] No credential value or cross-venture runtime dependency was transferred in this repository.
