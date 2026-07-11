# Sweepza provider links

Pass 2 provider refresh: 2026-07-10; sanitized status only.

| Provider | Resource locator | Status | Link / evidence |
|---|---|---|---|
| GitHub | #47/#48/#49 merged; #49 squash `005af4fdd09ffab279ece37e8d0426847b02ff5b`; rewritten #44 source `d0f5a3abef0dd6c268e57da4e2a91f3449661517` merged green as current `main` `4c0aad183fe9442e4546985b373b26498e38e6e7` | **Repository convergence/protection fixed; auto-delete-on-merge enabled** | https://github.com/AutomatedEmpires/sweepza/pulls |
| Doppler | Project `sweepza`; configs `dev`, `stg`, `prd` | **Verified current** | https://dashboard.doppler.com/ |
| Vercel | Project `sweepza` (`…W8AEuU`); final #44 Preview `dpl_DyK72pRkkjYCjAzTd7RJNE9uV7iN`; current production `dpl_9N57qj7PHDteARUpVFWCKAxYutts` from `4c0aad183fe9442e4546985b373b26498e38e6e7` | **Final-source Preview and current-main production `READY`** | https://vercel.com/dashboard |
| Deployed aliases | `sweepza.com`, `www.sweepza.com`, `sweepza.vercel.app` | **Verified `READY`** | https://sweepza.com |
| Supabase | Project fingerprint `…nzisuomq` | **Verified current** | https://supabase.com/dashboard/projects |
| Custom domain | `sweepza.com` | **Authenticated GoDaddy control; privacy/renewal/full zone verified** | https://dcc.godaddy.com/ |
| Clerk | Dev `ins_3Eh…Gh4dSy`; dark production; route `/api/webhooks/clerk` | **Production DNS Verified/SSL Issued; dev/stg/prd reuse remains** | https://dashboard.clerk.com/ |
| Stripe | Sandbox `acct_1Te…88pB`; live `acct_1Sp…cxzo` | **Dedicated accounts/prices/lanes verified; residual foreign endpoint/objects** | https://dashboard.stripe.com/ |
| PostHog | No Sweepza project; key is empty | **Verified absent/non-reused; creation owner-reauth/current-plan blocked** | https://app.posthog.com/ |
| Sentry | Distinct Sweepza project/DSN in `automated-empires` | **Ownership/one alert/scrubbers/IP scrubbing fixed; no first event** | https://sentry.io/ |
| Resend | Approval/hold and winner-notification consumers | **Required by code; no key/from/account/domain** | https://resend.com/domains |
| Mapbox | No active Sweepza token configuration | **Not configured; do not inherit the shared portfolio token** | https://account.mapbox.com/ |
| Cloudinary | Empty `sweepza/` namespace in the Free product environment | **Required taxonomy created; no assets/credential** | https://console.cloudinary.com/ |

Do not treat the provider runbook's claim of configured variables as proof of resource ownership. Confirm each non-secret project/account ID before activation.

The truthful mail-skip fix merged through #47. Independent sender configuration remains a separate paid/production gate.
