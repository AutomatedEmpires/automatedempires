# Explore & Earn known limitations

Last reviewed: 2026-07-10
Pass 2 provider refresh: 2026-07-10; no provider state was changed.

## Current blockers and unknowns

| Limitation | Status | Operational consequence | Required next action |
| --- | --- | --- | --- |
| Dark production Clerk has DNS Verified/SSL Issued, but OAuth/JWT/webhook/admin config, runtime keys, and auth smoke are incomplete. | **Partially remediated** | Production auth remains inactive; dev user does not transfer. | Complete config, install dark Preview, prove end to end, then approve `prd`. |
| The production migration ledger requires repair. | **Verified current / production-risk gate** | Database deployment automation cannot be treated as safely converged. | Approve an exact backup/reconciliation plan, execute through an authorized operator, then prove a green no-op workflow. |
| Resend DNS/scoped credential/identities/lanes plus merged source and exact-source Preview are green; real delivery is not authorized/proven. | **Safely fixed configuration/source / production-risk gate** | Least privilege is installed, but delivery and broad-key retirement are unproven. | Obtain delivery authorization, run custom-domain/reply smoke, then retire broad key only after zero use. |
| Dedicated live/test Stripe accounts and catalogs are verified, but the deployed production credential/account ID and correct live webhook remain unproven. | **Safely fixed preparation / production-risk gate** | Billing stays fail-closed; no customer/invoice/payment/subscription state was changed. | Prove account ID without displaying the key, create/verify the live webhook, pass exact-SHA Preview, then activate deliberately. |
| `exploreandearn.com` authenticated GoDaddy control, auto-renew, full zone, web routing, safe DNS additions, Clerk DNS, and Clerk SSL are verified. | **Completed ownership/DNS/TLS evidence** | Registrar/provider-domain control is no longer the blocker; configuration/runtime proof remains. | Maintain recovery/renewal ownership and export zone before future cutovers. |
| Supabase project exists, but non-production isolation and current backup/recovery ownership were not supplied. | **Unknown / production-risk verification required** | Development or staging could accidentally share production data or migration state. | Document separate projects/branches or another approved isolation mechanism and recovery owner. |
| PostHog binding exists without event proof; Cloudinary remains shared Free; Mapbox token/origin/local proof is green but fresh Preview hits a pre-existing app error path; Sentry build token remains broad. | **Mixed verified state** | Analytics event, Preview map path, media, and narrow monitoring rollout remain non-transfer-ready. | Repair/re-smoke Preview, event-check PostHog, preserve rollbacks, then narrow Sentry after verified deployment. |
| Explore&Earn now uses a scoped key, but a legacy LogLoads broad key still reaches the same 1/1-domain team. | **Runtime key remediated / account coupling remains** | E&E delivery is unproven; LogLoads cannot transfer or send independently. | Prove E&E delivery/zero broad-key use; keep LogLoads transactional mail deferred until an independent paid boundary exists. |
| Dedicated E&E live account `acct_1RM…pSG9` is prepared, but current production runtime identity and correct live webhook are unproven; Sweepza's account retains a foreign E&E webhook. | **Separate accounts verified / residual config** | Production billing binding is not yet trustworthy. | Prove E&E runtime identity and replacement endpoint before retiring the foreign Sweepza-account endpoint. |
| A Cloudinary-shaped example URI is present in an older integration audit and was quarantined by the portfolio plan as a documentation-hygiene finding. | **Observed in repository** | It could be mistaken for a live shared identifier even if instructional. | Confirm provenance and replace it with an unmistakable neutral placeholder in a separate reviewed change. |
| Cloudinary's nine required namespaces exist and only Explore&Earn `dev` has Admin credentials; current signed presets do not enforce a folder and allow overwrite. | **Folder taxonomy safely fixed / preset risk remains** | No active cross-venture writes were found, but folders are not access control. Fifty-five former icon raws still need manifest/docs classification. | Classify references; preview fixed-prefix/overwrite-off preset clones with disposable fixtures; never copy Admin authority. |

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
