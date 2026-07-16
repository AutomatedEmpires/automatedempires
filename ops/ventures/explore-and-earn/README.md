# Explore & Earn infrastructure identity

Last reviewed: 2026-07-10

This pack records Explore&Earn as a seeker-first seasonal/work-travel marketplace runtime. It is operationally separated from AutomatedEmpires and every sibling venture.

## Canonical product boundary

Preserve the Discovery Card; Seek / Swipe / Map / Profile bottom navigation; exactly four categories—Farm, Maritime, Remote, and Seasonal; housing, meals, and pay clarity; host and seeker trust; and map/list/swipe discovery. Future design work should prioritize homepage composition, visual hierarchy, typography, colors, spacing, information placement, premium marketplace feel, dashboard surfaces, and responsive polish. Do not redesign core mechanics without repository evidence of a concrete failure and a dated decision.

Before an overhaul, locate and verify the local checkout and canonical GitHub repository, then inspect the real routes, layouts, components, content/data models, dashboards, responsive states, and current evidence. The result should be visionary and repo-grounded: more than polish, but never a from-scratch concept detached from what exists.

## Status vocabulary

- **Verified current** — explicitly supplied or live-verified provider fact.
- **Observed in repository** — supported by code or committed documentation, but not proof of live provider state.
- **Target state** — the intended separated operating model.
- **Unknown / provider-owner verification required** — requires an authenticated provider/account/billing/DNS owner to confirm.

## Identity snapshot

| Area | Status | Current statement | Evidence |
| --- | --- | --- | --- |
| GitHub | **Merged/protected** | Canonical repository `AutomatedEmpires/explore-and-earn`; current source includes #244/#245 through `5989853`; strict real-check protection/security configured. | Pass 4 plus execution-log reconciliation |
| Secrets | **Verified current** | Doppler project exists; scoped Resend identity spans all lanes and Stripe test contract is verified in `dev`/`stg`; broader parity remains incomplete. | Authenticated names-only/write evidence |
| Hosting | **Current source / prior deployed evidence verified** | Canonical project serves clean production `dpl_5HCPaCNCQuyip2iZTHpoMvSxjQFY` from prior source `b616b9e10fa434422dd34442f6cb24194cf8d5ec`; it is `READY`. Current source is later #245 `5989853` and requires deployment revalidation. | Authenticated Vercel/GitHub plus execution evidence |
| Database | **Verified current** | Dedicated Supabase fingerprint `…clafhmmr`; ledger/isolation proof remains open. | Provider evidence |
| Domain | **Verified current** | `exploreandearn.com` authenticated GoDaddy control; apex/`www` serve Vercel; Resend DNS is verified. | Authenticated registrar/provider evidence |
| Runtime surface | **Observed in repository** | Next.js monorepo with Supabase, Clerk, Stripe, Resend, PostHog, Cloudinary, Mapbox, Sentry, and AI integration points. | Explore & Earn `package.json`, `apps/web/package.json`, application and runbook paths |

## Current activation gates

These remaining activation gates are current after Pass 4 remediation.

| Gate | Status | Required outcome |
| --- | --- | --- |
| Production Clerk | **Provider identity fixed / runtime open** | Dark production instance DNS/SSL is verified; configure OAuth/JWT/webhook/admin, install only in dark Preview, and prove full auth before `prd`. |
| Migration ledger | **Production-risk gate** | Back up/reconcile the ledger and prove a green no-op workflow under an approved plan. |
| Resend delivery | **Credential/DNS/source fixed / delivery open** | Run a controlled custom-domain delivery/reply smoke, verify authentication/logs, then retire broad rollback only after zero use. |
| Stripe activation | **Accounts/catalog/test fixed / production open** | Prove production account identity without displaying keys, create the correct live webhook, and pass Preview before promotion. |

The strongest repository control surface is Explore & Earn `docs/runbooks/production-activation-gates.md` (prepared 2026-07-07). It should be read immediately before any production activation work.

## Older-document contradictions

- **Pass 4 correction** — Authenticated evidence proves dedicated E&E live/test accounts and the canonical catalog. The deployed production credential identity/live webhook remain unproven; never copy an older account conclusion forward.
- **Observed in repository** — `docs/audit/WORLDCLASS_SITE_REDESIGN_PLAN.md` says Stripe is ownership-checked. The later activation-gates runbook explicitly requires account identification and provisioning. Use the later gate.
- **Observed in repository** — `docs/runbooks/db-migrations-ci.md` documents an earlier reconciliation through migration 048 and characterizes legacy rows as harmless. The later activation gate identifies additional rows requiring repair. Use an exact backup/reconciliation plan and authorized operator.
- **Pass 4 correction** — The provider-verified five-product/ten-price catalog is current authority. Do not mix older documented price sets into runtime configuration.

## Separation rules

- **Target state** — Explore & Earn owns its provider projects, users, data, webhook endpoints, billing catalog, sending domain, analytics, media, maps, and error-monitoring resources.
- **Target state** — Production values are stored only in Explore & Earn's own secret/deployment environments and are never copied into the parent portfolio runtime.
- **Target state** — Every webhook is registered against the Explore & Earn resource and domain, with a named owner and environment.
- **Mixed verified/open state** — Registrar and Resend DNS are authenticated; dark production Clerk exists; dedicated Stripe accounts/catalog exist. Clerk runtime, deployed Stripe identity/live webhook, real mail delivery, and billing/recovery ownership remain to be reconciled.

No secret values, key material, account credentials, connection strings, or signing material belong in this pack.
