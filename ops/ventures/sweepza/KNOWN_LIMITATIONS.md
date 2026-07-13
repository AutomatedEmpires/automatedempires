# Sweepza known limitations

Pass 2 provider refresh: 2026-07-10; no provider state was changed.

| Limitation | Classification | Operational effect |
|---|---|---|
| Provider runbook says `sweepza.com` is not attached, but Vercel/DNS/HTTP prove apex and `www` are live | **Stale documentation** | Operators following the runbook could misconfigure canonical URLs |
| Dedicated live `acct_1Sp…cxzo` and sandbox `acct_1Te…88pB` are verified; prices/lanes align, but live retains a foreign E&E webhook, two unclassified customers, and one $0 draft invoice | **Separation safely fixed / residual contamination** | Keep the foreign endpoint until E&E replacement proof; classify but do not delete/mutate customers/invoice without explicit approval |
| Dev/stg/prd still use the same one-user Clerk dev instance; the dark production instance is DNS Verified/SSL Issued, but configuration/runtime proof are incomplete | **Partially remediated contamination** | Production identity remains unsafe; dev user does not transfer automatically |
| Historical health reports PostHog, Sentry, and Notion absent; PostHog project/environment bindings now exist, but no fresh deployment/event followed the writes | **Provider/config fixed / runtime gap** | Analytics/error ingestion and workflow integration remain incomplete despite healthy page |
| Runbook's remaining-key list omits current Stripe price, Resend, and cron variables | **Observed documentation gap** | Following that runbook alone can produce an incomplete production environment |
| Supabase has 17 public tables with RLS/policies and eight migrations; backup/recovery and lane separation remain unverified | **Verified current / owner gap** | Migration writes still require comparison and approval |
| Current inspection checkout lacks `.vercel/project.json` | **Observed locally** | Guarded env sync requires `vercel link` first |
| No Resend key/from exists, but the recorded production code invokes approval/hold and winner mail; prior helper/logs recorded no-ops as `sent` | **Source defect safely fixed / recorded production contains fix** | The truthful `skipped`/null `sent_at` fix merged through PR #47 and is included in production `dpl_9N57qj7PHDteARUpVFWCKAxYutts`; an execution smoke and any separately approved non-operator mail boundary remain open |
| Sweepza has separate PostHog project `509084`, own environment bindings, and no cross-app reuse; distinct Sentry governance also exists, but neither has post-write event proof | **Provider/config completed / runtime events open** | Fresh-deploy and verify controlled PostHog/Sentry events before transfer |
| Sweepza has no Mapbox/Cloudinary credential; required empty `sweepza/` namespace now exists | **Folder taxonomy safely fixed / no-resource state** | No active media/map contamination; folder is not an access boundary |
| June 4 provider/product readiness reports call Clerk/Stripe/PostHog/Sentry/Doppler missing or future while current code/runbook shows them wired/provisioned in part | **Stale documentation** | Use current source and provider runbook, then verify dashboards |
| `dev_personal` is outside the portfolio-required three-config baseline | **Observed in repository** | Its purpose/access must be documented to avoid shadow configuration |
| The app degrades when provider groups are absent | **Observed in repository** | A successful page load can mask an incomplete production integration |
| Entry, winner, approval, and host-billing surfaces exist without the canonical source-status/link-out model | **Product-definition conflict** | Treat routes and resources as implementation evidence; require `sourced_unverified`, `source_verified`, `host_claimed`, `partner_verified`, `expired`, `removed`, or `disputed`, official rules/entry link-outs, disclaimers, and a keep/repurpose/retire decision before rollout |

Cross-venture note: Pass 4 corrected the shared-account interpretation. Sweepza has dedicated live/sandbox accounts. Only the foreign E&E endpoint and unclassified non-money objects remain; irreversible cleanup still requires explicit approval.

Product note: dedicated accounts, prices, webhooks, routes, or database tables do not authorize Sweepza to run promotions, determine eligibility, process entries/payments, select winners, guarantee legality/odds, or imply partnerships.
