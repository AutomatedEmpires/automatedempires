# Explore & Earn known limitations

Last reviewed: 2026-07-10
Pass 2 provider refresh: 2026-07-10; no provider state was changed.

## Current blockers and unknowns

| Limitation | Status | Operational consequence | Required next action |
| --- | --- | --- | --- |
| Only a Clerk development instance is configured; it has one user, no configured domain was returned, and no webhook signing name is present. | **Verified current** | Real authentication, profile synchronization, authenticated Supabase access, and admin access cannot be considered production-ready. Development users do not transfer directly to production. | Complete Gate 1 with a production instance/domain/OAuth/webhook and plan separately for the dev user. |
| The production migration ledger requires repair. | **Verified current** | Database deployment automation cannot be treated as safely converged. | Founder approves and executes the latest repair plan, then proves a green no-op workflow. |
| Resend domain status is `failed`; one DKIM and two SPF checks failed. The configured key is broad/full-access and an explicit from-address is absent. | **Verified current** | Venture-domain transactional sending is not production-ready and the runtime has more account privilege than required. | Re-fetch provider records, correct DNS, reach `verified`, then deploy a sending-only/domain-restricted key and explicit sender before proving delivery. |
| Stripe production account identity and catalog provisioning are unresolved. | **Verified current** | Billing must remain fail-closed; checkout and entitlements are not production-ready. | Prove account/mode, provision the current catalog and webhook, map environments, and run end-to-end proofs. |
| `exploreandearn.com` is publicly verified at GoDaddy and correctly routes to Vercel, but authenticated registrar ownership was not available. | **Verified public / founder verification required** | Clerk and Resend activation still depend on account-level DNS authority; recovery and renewal risk remain. | Verify registrant, renewal, recovery, and record ownership in the authenticated account. |
| Supabase project ref exists, but non-production isolation and current backup/recovery ownership were not supplied. | **Unknown / founder verification required** | Development or staging could accidentally share production data or migration state. | Document separate projects/branches or another approved isolation mechanism and recovery owner. |
| PostHog is documented but not dashboard-verified; Cloudinary is Free and single-environment, Mapbox public access is shared and its server token unusable, while Sentry is verified but has active unresolved issues. | **Mixed verified state** | Analytics, media, maps, and error handling are not all transfer-ready. | Verify PostHog ingestion, keep Cloudinary assigned to Explore&Earn, obtain Mapbox management access for restricted replacements, and triage Sentry issues. |
| Distinct Explore&Earn and LogLoads Resend credentials have broad access to the same team; Explore&Earn's only domain is `failed`. | **Confirmed contamination** | The account cannot be transferred independently and transactional delivery is unproven. | Verify Explore&Earn DNS/delivery, replace its broad key, and move LogLoads to its own team/domain after founder approval. |
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
