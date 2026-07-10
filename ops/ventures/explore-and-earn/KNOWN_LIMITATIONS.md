# Explore & Earn known limitations

Last reviewed: 2026-07-10

## Current blockers and unknowns

| Limitation | Status | Operational consequence | Required next action |
| --- | --- | --- | --- |
| Production Clerk is not activated and proven. | **Verified current** | Real authentication, profile synchronization, authenticated Supabase access, and admin access cannot be considered production-ready. | Complete Gate 1 in `RUNBOOK.md` and the detailed repository activation runbook. |
| The production migration ledger requires repair. | **Verified current** | Database deployment automation cannot be treated as safely converged. | Founder approves and executes the latest repair plan, then proves a green no-op workflow. |
| Resend domain DNS is not verified. | **Verified current** | Venture-domain transactional sending is not production-ready. | Add provider-issued DNS records and prove domain verification plus delivery. |
| Stripe production account identity and catalog provisioning are unresolved. | **Verified current** | Billing must remain fail-closed; checkout and entitlements are not production-ready. | Prove account/mode, provision the current catalog and webhook, map environments, and run end-to-end proofs. |
| `exploreandearn.com` is publicly verified at GoDaddy and correctly routes to Vercel, but authenticated registrar ownership was not available. | **Verified public / founder verification required** | Clerk and Resend activation still depend on account-level DNS authority; recovery and renewal risk remain. | Verify registrant, renewal, recovery, and record ownership in the authenticated account. |
| Supabase project ref exists, but non-production isolation and current backup/recovery ownership were not supplied. | **Unknown / founder verification required** | Development or staging could accidentally share production data or migration state. | Document separate projects/branches or another approved isolation mechanism and recovery owner. |
| PostHog is documented but not dashboard-verified; Cloudinary is shared, Mapbox public access is shared and its server token revoked, while Sentry is verified but has active unresolved issues. | **Mixed verified state** | Analytics, media, maps, and error handling are not all transfer-ready. | Verify PostHog ingestion, decide Cloudinary separation, create restricted Mapbox replacements, and triage Sentry issues. |
| Distinct Explore&Earn and LogLoads Resend credentials reach the same one-domain account; Explore&Earn's domain status is `not_started`. | **Confirmed contamination** | The account cannot be transferred independently and transactional delivery is unproven. | Verify Explore&Earn DNS/delivery and move LogLoads to its own account/domain after founder approval. |
| Live Stripe account `acct_1SpxXpDtcwz0cxzo` contains Explore&Earn and Sweepza webhooks/resources; Explore&Earn's current production runtime key is write-only. | **Confirmed mixed resource / unknown runtime identity** | Billing ownership and transfer cannot be trusted. | Prove runtime account identity and execute a founder-approved separate-account migration. |
| A Cloudinary-shaped example URI is present in an older integration audit and was quarantined by the portfolio plan as a documentation-hygiene finding. | **Observed in repository** | It could be mistaken for a live shared identifier even if instructional. | Confirm provenance and replace it with an unmistakable neutral placeholder in a separate reviewed change. |

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
