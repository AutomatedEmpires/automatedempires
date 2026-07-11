# LogLoads transfer checklist

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / founder verification required**.

## Repository and governance

- [ ] Recipient has the required role on `AutomatedEmpires/logloads`.
- [ ] Branch protection, required CI, CODEOWNERS, emergency access, and open foundation work are reviewed.
- [ ] Recipient acknowledges the coordination-software boundary and subscription-only Stripe decision.

## Environments and deployment

- [ ] Doppler project `logloads` and `dev`/`stg`/`prd` access are transferred independently.
- [ ] Broad scaffold variables are classified as active, planned, or retired without revealing values.
- [ ] Vercel project, canonical repo/main/root, healthy Preview, repaired Production, aliases, and rollback owners are verified.

## Data and product providers

- [ ] Supabase ref `fdzohbiiyzgvjzfsjyxo`, schema, migration ledger, backups, RLS, storage, and PostGIS state are reviewed.
- [ ] Dark production Clerk DNS is Verified and SSL Issued; finish the host decision, role claims, OAuth/callbacks/webhook, isolated Preview, and runtime installation. Resolve dev/stg reuse.
- [ ] Decide whether Mapbox remains after source convergence; if so replace shared token with restricted public token. Otherwise record/test MapLibre fallback and remove misleading server name.
- [ ] Stripe account/mode/products/webhooks are proved LogLoads-specific and limited to subscriptions.
- [ ] LogLoads has a separate Resend account/domain/scoped key plus explicit sender/contact identity and delivery proof; record Cloudinary non-use/transfer decision, create PostHog only if required, and activate the distinct Sentry project/owner routing.
- [ ] Agent hooks and provider-admin tokens are least-privilege, venture-specific, and removed from runtime where unnecessary.

## Domain and acceptance

- [x] `logloads.com` authenticated ownership, privacy, auto-renew, full DNS zone, Website Builder route, and no-MX state are recorded; recovery/email/cutover transfer steps remain operationally open.
- [ ] Preview smoke test covers the actually implemented slice and verifies safe missing-provider behavior.
- [ ] Production rollback and escalation owners are documented.
- [ ] No credential value or cross-venture runtime dependency was transferred in this repository.
