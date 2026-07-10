# Sweepza known limitations

Pass 2 provider refresh: 2026-07-10; no provider state was changed.

| Limitation | Classification | Operational effect |
|---|---|---|
| Provider runbook says `sweepza.com` is not attached, but Vercel/DNS/HTTP prove apex and `www` are live | **Stale documentation** | Operators following the runbook could misconfigure canonical URLs |
| Production Stripe account `acct_1SpxXpDtcwz0cxzo` is live and contains Sweepza products plus Explore&Earn branding/webhook | **Confirmed cross-venture contamination** | Billing is not independently transferable; do not delete endpoints or move customer data without approval |
| Dev/stg/prd point to the same one-user Clerk development instance `ins_3EhjrYiNBzhqkZlG9kIc2Gh4dSy` and reuse the same Doppler webhook signing configuration; deployed health reports the webhook absent | **Confirmed cross-environment contamination and deployment mismatch** | Production identity/user sync is not ready; development users do not transfer to production |
| Health reports PostHog, Sentry, and Notion absent; Stripe webhook is present | **Verified runtime state** | Analytics/error monitoring/workflow integration are incomplete despite a healthy page |
| Runbook's remaining-key list omits current Stripe price, Resend, and cron variables | **Observed documentation gap** | Following that runbook alone can produce an incomplete production environment |
| Supabase has 17 public tables with RLS/policies and eight migrations; backup/recovery and lane separation remain unverified | **Verified current / owner gap** | Migration writes still require comparison and approval |
| Current inspection checkout lacks `.vercel/project.json` | **Observed locally** | Guarded env sync requires `vercel link` first |
| No Resend key or from-address is present in any lane; no Sweepza-specific PostHog or Sentry project was provider-verified | **Confirmed missing email config / unknown analytics and errors** | Email is inactive; analytics/errors cannot be declared transfer-ready |
| Sweepza has no Mapbox or Cloudinary credential; its shared-cloud folder exists but is empty | **Verified placeholder only** | No active media/map contamination was found, but the placeholder must not be mistaken for a venture-owned resource |
| June 4 provider/product readiness reports call Clerk/Stripe/PostHog/Sentry/Doppler missing or future while current code/runbook shows them wired/provisioned in part | **Stale documentation** | Use current source and provider runbook, then verify dashboards |
| `dev_personal` is outside the portfolio-required three-config baseline | **Observed in repository** | Its purpose/access must be documented to avoid shadow configuration |
| The app degrades when provider groups are absent | **Observed in repository** | A successful page load can mask an incomplete production integration |

Cross-venture note: the shared live Stripe account is now provider-verified. Sweepza's explicit isolation rule remains the target; remediation requires founder-approved account/data migration.
