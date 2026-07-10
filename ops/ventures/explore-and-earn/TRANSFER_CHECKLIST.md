# Explore & Earn transfer checklist

Last reviewed: 2026-07-10

This checklist transfers control, not secret values. Use provider membership, RBAC, and recovery workflows rather than copying credentials.

## Authority and scope

- [ ] **Target state** — Record transferor, transferee, effective date, business owner, technical owner, billing owner, data owner, and emergency contact.
- [ ] **Target state** — Confirm the transfer covers only Explore & Earn resources.
- [ ] **Unknown / founder verification required** — Obtain founder approval for money-moving, database-ledger, DNS/domain, identity, deletion, or ownership-transfer actions.

## Core access

- [ ] **Observed in repository** — Confirm canonical GitHub repository `AutomatedEmpires/explore-and-earn`, protected branches, environments, Actions workflows, and current pull requests.
- [ ] **Verified current** — Transfer least-privilege access to Doppler project `explore-and-earn` and configs `dev`, `stg`, `prd`.
- [ ] **Verified current** — Transfer least-privilege access to Vercel project `explore-and-earn` and demonstrate Preview, Production, logs, and rollback.
- [ ] **Verified current** — Transfer least-privilege access to Supabase project `mamosbzcbigcclafhmmr`; verify backups, migration controls, and emergency database owner.

## Open production gates

- [ ] **Verified current** — Resolve production Clerk and prove custom-domain auth, OAuth, Supabase JWT template, webhook lifecycle, protected routes, and admin access.
- [ ] **Verified current** — Complete the founder-approved migration-ledger repair and produce a green migration workflow result.
- [ ] **Verified current** — Verify Resend DNS and prove delivery from the venture domain.
- [ ] **Verified current** — Prove the production Stripe account and mode before provisioning the current catalog, portal, webhook, environment mapping, and billing flow.

## Domain and provider ownership

- [ ] **Observed in repository** — Confirm the intended domain is `exploreandearn.com`.
- [ ] **Unknown / founder verification required** — Verify registrar, authoritative DNS, registrant, renewal billing, recovery, and current record inventory.
- [ ] **Unknown / founder verification required** — Reconcile Clerk, Stripe, Resend, PostHog, Cloudinary, Mapbox, Sentry, and AI resources with `PROVIDER_LINKS.md`.
- [ ] **Target state** — For every resource, record only provider, resource name, environment, owner roles, and verification date.

## Configuration integrity

- [ ] **Target state** — Compare Doppler, Vercel, GitHub Actions, and provider configuration by variable name and environment without displaying values.
- [ ] **Target state** — Confirm staging uses test-mode payment and isolated webhook resources.
- [ ] **Target state** — Confirm production callbacks and webhooks point only to the production Explore & Earn domain.
- [ ] **Target state** — Rotate sensitive material through providers after access transfer when policy or risk requires it; deploy and verify replacements before revocation.

## End-to-end acceptance

- [ ] **Target state** — Recipient can run repository checks and deploy a harmless Preview change.
- [ ] **Target state** — Recipient can identify and restore the last known-good production deployment.
- [ ] **Target state** — Recipient can prove auth, authenticated data access, email, billing, analytics, media, maps, cron, and error reporting appropriate to production.
- [ ] **Target state** — Recipient and transferor sign the non-secret inventory and access-removal schedule.
