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
- [ ] Dev/stg Clerk reuse is resolved and a LogLoads production instance, role claims, OAuth settings, callbacks, and webhook are recorded.
- [ ] Shared Mapbox token is replaced with LogLoads/environment-specific tokens and allowed origins are recorded.
- [ ] Stripe account/mode/products/webhooks are proved LogLoads-specific and limited to subscriptions.
- [ ] LogLoads has a separate Resend account/domain, a documented Cloudinary transfer boundary, and venture-specific PostHog/Sentry resources or explicit non-use decisions.
- [ ] Agent hooks and provider-admin tokens are least-privilege, venture-specific, and removed from runtime where unnecessary.

## Domain and acceptance

- [ ] `logloads.com` public GoDaddy state is recorded and authenticated ownership, DNS, renewal, recovery, MX/email plan, and Vercel cutover are verified.
- [ ] Preview smoke test covers the actually implemented slice and verifies safe missing-provider behavior.
- [ ] Production rollback and escalation owners are documented.
- [ ] No credential value or cross-venture runtime dependency was transferred in this repository.
