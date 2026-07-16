# LogLoads provider links

Pass 2 provider refresh: 2026-07-10; sanitized status only.

| Provider | Resource locator | Status | Link / evidence |
|---|---|---|---|
| GitHub | `AutomatedEmpires/logloads`; PR #6 deployed baseline `9c9e107…`; current source includes #21/#22 through `6f7ebcd` | **Merged; protection/security fixed; later hardening source present** | https://github.com/AutomatedEmpires/logloads |
| Doppler | Project `logloads`; configs `dev`, `stg`, `prd` | **Verified current** | https://dashboard.doppler.com/ |
| Vercel | Project `logloads` (`…l7qRW4`); Preview `dpl_8RY71TfokWZNaVZgbZgmDvMWyRf4` and production `dpl_XxrZAJ1567EbtnkSg2XxWq88dPtF` from last deployed source `9c9e107…` | **Both `READY`; current source `6f7ebcd` needs deployment revalidation; live data/provider cutover remains gated** | https://vercel.com/dashboard |
| Supabase | Project fingerprint `…fsjyxo` | **Dedicated; live unchanged, published canonical migration green locally** | https://supabase.com/dashboard/projects |
| Runtime contract | Canonical `135cff673255cfc1b99c66552479e32cba370940` work; Supabase atomic authority/retry/cold-start/concurrency verified | **Safely fixed, merged, and source-deployed; not migrated/activated live** | Repository evidence |
| Domain | `logloads.com` | **Authenticated GoDaddy control / 12-record post-change zone** | https://dcc.godaddy.com/ |
| Clerk | Dev instance `ins_3Eh…RsHYW`; dark production | **DNS Verified/SSL Issued; runtime absent** | https://dashboard.clerk.com/ |
| Stripe | Subscription-only account/products intended | **Observed in repository**; account ID **unknown** | https://dashboard.stripe.com/ |
| Mapbox | Venture-specific public token plus MapLibre/Carto fallback | **Installed/origin/local verified; Preview app error path open; server-looking legacy name remains misleading** | https://account.mapbox.com/ |
| Resend | Distinct broad key in E&E 1/1-domain team; contact-inquiry consumer; no LogLoads domain/from/contact identity | **Payment/account coupling; runtime activation deferred** | https://resend.com/domains |
| Cloudinary | Free environment `dwi…t9vi`, empty `logloads/` namespace | **Taxonomy created; no assets/credential** | https://console.cloudinary.com/ |
| PostHog | Project `509086`; own key/host in Doppler/Vercel targets | **Provider/environment binding verified; runtime pending fresh deployment/event** | https://app.posthog.com/ |
| Sentry | Distinct LogLoads project/DSN | **Ownership/one alert/scrubbers/IP scrubbing fixed; no first event/environment** | https://sentry.io/ |

The recorded #6 Preview and production are provider proof for that source/build only. Revalidate current #22 source, then verify backup/live upgrade, environment provenance, the Supabase-first shared-limiter decision plus exact-SHA multi-instance/outage behavior, functional production rollback, and controlled telemetry before live data/provider activation.
