# Explore & Earn known limitations

Last reviewed: 2026-07-10
Pass 2 provider refresh: 2026-07-10; no provider state was changed.

## Current blockers and unknowns

| Limitation | Status | Operational consequence | Required next action |
| --- | --- | --- | --- |
| Dark production Clerk has DNS Verified/SSL Issued, but OAuth/JWT/webhook/admin config, runtime keys, and auth smoke are incomplete. | **Partially remediated** | Production auth remains inactive; dev user does not transfer. | Complete config, install dark Preview, prove end to end, then approve `prd`. |
| The production migration ledger requires repair. | **Verified current** | Database deployment automation cannot be treated as safely converged. | Founder approves and executes the latest repair plan, then proves a green no-op workflow. |
| Resend DNS/domain is verified, but the configured key is broad/full-access and an explicit from-address, runtime synchronization, and delivery smoke are absent. | **Partially remediated** | DNS is complete; production sending and least privilege are not. | Create/install scoped replacement, explicit sender, deploy/smoke, then retire broad key only after zero use. |
| Stripe production account identity and catalog provisioning are unresolved. | **Verified current** | Billing must remain fail-closed; checkout and entitlements are not production-ready. | Prove account/mode, provision the current catalog and webhook, map environments, and run end-to-end proofs. |
| `exploreandearn.com` authenticated GoDaddy control, auto-renew, full zone, web routing, safe DNS additions, Clerk DNS, and Clerk SSL are verified. | **Completed ownership/DNS/TLS evidence** | Registrar/provider-domain control is no longer the blocker; configuration/runtime proof remains. | Maintain recovery/renewal ownership and export zone before future cutovers. |
| Supabase project ref exists, but non-production isolation and current backup/recovery ownership were not supplied. | **Unknown / founder verification required** | Development or staging could accidentally share production data or migration state. | Document separate projects/branches or another approved isolation mechanism and recovery owner. |
| PostHog live ingestion is verified, but ownership/policy is open; Cloudinary is Free/single-environment with unbound overwrite presets; Mapbox public access is shared; Sentry has high unassigned production volume and overprivileged dev management access. | **Mixed verified state** | Telemetry/media/maps/errors remain non-transfer-ready despite live resource identity. | Record PostHog policy, decide Cloudinary boundary, create restricted Mapbox public tokens, split Sentry access/ownership and triage production. |
| Distinct Explore&Earn and LogLoads broad keys reach the same 1/1-domain team; Explore&Earn domain is now verified. | **Confirmed account coupling / DNS remediated** | Account cannot transfer independently; runtime delivery remains unproven. | Replace E&E key after smoke and move LogLoads to an approved separate team/domain. |
| Live Stripe account `acct_1SpxXpDtcwz0cxzo` contains Explore&Earn and Sweepza webhooks/resources; Explore&Earn's current production runtime key is write-only. | **Confirmed mixed resource / unknown runtime identity** | Billing ownership and transfer cannot be trusted. | Prove runtime account identity and execute a founder-approved separate-account migration. |
| A Cloudinary-shaped example URI is present in an older integration audit and was quarantined by the portfolio plan as a documentation-hygiene finding. | **Observed in repository** | It could be mistaken for a live shared identifier even if instructional. | Confirm provenance and replace it with an unmistakable neutral placeholder in a separate reviewed change. |
| Cloudinary's other venture folders are empty and only Explore&Earn `dev` has Admin credentials; current signed presets do not enforce a folder and allow overwrite. | **Verified current** | No active cross-venture asset writes were found, but a broad preset/credential can bypass folder conventions. | Bind presets/uploads to Explore&Earn environment folders, review overwrite, and never copy the Admin credential to placeholder ventures. |

## Explicit historical contradictions

| Older statement | Stronger current interpretation | Status |
| --- | --- | --- |
| `docs/audit/STRIPE_PRODUCTION_VERIFICATION.md` says a CLI account was confirmed for Explore & Earn. | The later `docs/runbooks/production-activation-gates.md` shows production uses a different account and requires authoritative account identification. Do not copy the older account identifier. | **Observed in repository** |
| `docs/audit/WORLDCLASS_SITE_REDESIGN_PLAN.md` calls Stripe ownership-checked. | Stripe account identity/provisioning remains a supplied current blocker. | **Verified current** |
| `docs/runbooks/db-migrations-ci.md` describes reconciliation through 048 and legacy rows as harmless. | The later activation runbook requires repair for subsequent numbered and timestamp ledger entries. | **Observed in repository** |
| Older Stripe material defines nine price variables and three announcement durations. | The later activation runbook defines the current six subscription prices and one announcement product for provisioning. | **Observed in repository** |
| The latest activation runbook describes some infrastructure as verified operating. | Those statements are strong repository evidence, but they are not reclassified as live provider proof in this portfolio pack unless explicitly supplied or dashboard-verified. | **Observed in repository** |

## Evidence notes

- Strongest current repository source: Explore & Earn `docs/runbooks/production-activation-gates.md`.
- Historical sources are retained for context but do not override later evidence.
- No provider secret values, account credentials, database locators, signing material, or key-shaped strings are reproduced here.
