# Sweepza provider links

Pass 2 provider refresh: 2026-07-10; sanitized status only.

| Provider | Resource locator | Status | Link / evidence |
|---|---|---|---|
| GitHub | #47/#48/#49 and rewritten #44 history; current source #53 `f2977cb` | **Repository convergence/protection fixed; later provider-hardening source merged** | https://github.com/AutomatedEmpires/sweepza/pulls |
| Doppler | Project `sweepza`; configs `dev`, `stg`, `prd` | **Verified current** | https://dashboard.doppler.com/ |
| Vercel | Project `sweepza` (`…W8AEuU`); corrected #53 Preview `dpl_b4bLyYvsoFLou5GxGYnapC14QPzX`; production `dpl_9N57qj7PHDteARUpVFWCKAxYutts` from prior source `4c0aad183fe9442e4546985b373b26498e38e6e7` | **Current-source Preview and older-source Production `READY`; no Production redeploy** | https://vercel.com/dashboard |
| Deployed aliases | `sweepza.com`, `www.sweepza.com`, `sweepza.vercel.app` | **Verified `READY`** | https://sweepza.com |
| Supabase | Project fingerprint `…nzisuomq` | **Verified current** | https://supabase.com/dashboard/projects |
| Custom domain | `sweepza.com` | **Authenticated GoDaddy control; privacy/renewal/full zone verified** | https://dcc.godaddy.com/ |
| Clerk | Dev `ins_3Eh…Gh4dSy`; dark production; route `/api/webhooks/clerk` | **Production DNS Verified/SSL Issued; dev/stg/prd reuse remains** | https://dashboard.clerk.com/ |
| Stripe | Sandbox `acct_1Te…88pB`; live `acct_1Sp…cxzo` | **Dedicated accounts/prices/lanes verified; residual foreign endpoint/objects** | https://dashboard.stripe.com/ |
| PostHog | Project `509084`; own key/host in Doppler/Vercel targets | **Provider/environment binding verified; runtime pending fresh deployment/event** | https://app.posthog.com/ |
| Sentry | Distinct Sweepza project/DSN in `automated-empires` | **Ownership/one alert/scrubbers/IP scrubbing fixed; no first event** | https://sentry.io/ |
| Resend | Legacy approval/hold and winner-notification consumers | **Present in source but non-canonical and inactive; no key/from/account/domain. Sweepza does not select winners** | https://resend.com/domains |
| Mapbox | No active Sweepza token configuration | **Not configured; do not inherit the shared portfolio token** | https://account.mapbox.com/ |
| Cloudinary | Empty `sweepza/` namespace in the Free product environment | **Required taxonomy created; no assets/credential** | https://console.cloudinary.com/ |

Do not treat the provider runbook's claim of configured variables as proof of resource ownership. Confirm each non-secret project/account ID before activation.

The truthful mail-skip fix merged through #47. Independent sender configuration remains a separate paid/production gate.

Provider resources are not product authority. Stripe or Resend may support approved platform-listing tools later, but they do not authorize entry processing, prize flows, official rules, eligibility decisions, winner selection, or other sweepstakes-operator behavior.
