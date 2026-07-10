# Explore & Earn infrastructure identity

Last reviewed: 2026-07-10

This pack records Explore & Earn as a standalone marketplace runtime. It is operationally separated from AutomatedEmpires and every sibling venture.

## Status vocabulary

- **Verified current** — explicitly supplied or live-verified provider fact.
- **Observed in repository** — supported by code or committed documentation, but not proof of live provider state.
- **Target state** — the intended separated operating model.
- **Unknown / founder verification required** — requires a provider dashboard, account owner, billing owner, or DNS owner to confirm.

## Identity snapshot

| Area | Status | Current statement | Evidence |
| --- | --- | --- | --- |
| GitHub | **Observed in repository** | Canonical repository is `AutomatedEmpires/explore-and-earn`. | `EMPIRE_INFRA_ALIGNMENT_PLAN.md` §2 |
| Secrets | **Verified current** | Doppler project `explore-and-earn` exists; `dev` is populated by name while `stg` and `prd` contain metadata only. | Authenticated Doppler names-only inventory |
| Hosting | **Verified current** | Canonical Vercel project is connected to the repository, branch `main`, root `apps/web`, and serves a `READY` production deployment. | Authenticated Vercel inventory and HTTP checks |
| Database | **Verified current** | Supabase project ref is `mamosbzcbigcclafhmmr`. | Provider fact supplied for this alignment pass |
| Domain | **Verified current** | `exploreandearn.com` is registered at GoDaddy, routes apex/`www` to Vercel, and serves the application and health endpoint. | Public RDAP/DNS and HTTP checks |
| Runtime surface | **Observed in repository** | Next.js monorepo with Supabase, Clerk, Stripe, Resend, PostHog, Cloudinary, Mapbox, Sentry, and AI integration points. | Explore & Earn `package.json`, `apps/web/package.json`, application and runbook paths |

## Current activation gates

These four blockers were supplied as current facts for this alignment pass.

| Gate | Status | Required outcome |
| --- | --- | --- |
| Production Clerk | **Verified current** | Provision and prove a production Clerk instance, custom-domain flow, OAuth configuration, Supabase JWT template, webhook, and admin access. |
| Migration ledger | **Verified current** | Complete the founder-approved ledger repair and prove the database migration workflow is green. |
| Resend DNS | **Verified current** | Add provider-issued DNS records, verify the sending domain, and prove delivery from the venture domain. |
| Stripe identity and provisioning | **Verified current** | Identify the actual production account and mode, then provision the venture-specific catalog, webhook, environment mapping, and end-to-end billing proof. |

The strongest repository control surface is Explore & Earn `docs/runbooks/production-activation-gates.md` (prepared 2026-07-07). It should be read immediately before any production activation work.

## Older-document contradictions

- **Observed in repository** — `docs/audit/STRIPE_PRODUCTION_VERIFICATION.md` (2026-06-15) says a particular CLI account was confirmed for Explore & Earn. The later activation-gates runbook says production uses a different, still-unidentified account. The older account conclusion is not current production proof and its account identifier must not be copied forward.
- **Observed in repository** — `docs/audit/WORLDCLASS_SITE_REDESIGN_PLAN.md` says Stripe is ownership-checked. The later activation-gates runbook explicitly requires account identification and provisioning. Use the later gate.
- **Observed in repository** — `docs/runbooks/db-migrations-ci.md` documents an earlier reconciliation through migration 048 and characterizes legacy rows as harmless. The later activation-gates runbook identifies additional numbered migrations and legacy rows that still require ledger repair. Use the later gate and obtain founder approval.
- **Observed in repository** — Older Stripe documentation describes nine price variables and multiple announcement durations. The later activation-gates runbook defines six subscription prices plus one announcement price for the current provisioning pass. Do not mix the catalogs.

## Separation rules

- **Target state** — Explore & Earn owns its provider projects, users, data, webhook endpoints, billing catalog, sending domain, analytics, media, maps, and error-monitoring resources.
- **Target state** — Production values are stored only in Explore & Earn's own secret/deployment environments and are never copied into the parent portfolio runtime.
- **Target state** — Every webhook is registered against the Explore & Earn resource and domain, with a named owner and environment.
- **Unknown / founder verification required** — Authenticated registrar authority, production Clerk, the actual production Stripe runtime identity, Resend DNS, and account billing/recovery owners remain to be reconciled.

No secret values, key material, account credentials, connection strings, or signing material belong in this pack.
