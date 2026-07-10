# Sweepza provider links

Pass 2 provider refresh: 2026-07-10; sanitized status only.

| Provider | Resource locator | Status | Link / evidence |
|---|---|---|---|
| GitHub | `AutomatedEmpires/sweepza` | **Verified current** | https://github.com/AutomatedEmpires/sweepza |
| Doppler | Project `sweepza`; configs `dev`, `stg`, `prd` | **Verified current** | https://dashboard.doppler.com/ |
| Vercel | Project `sweepza` / `prj_RkvzmVMzo4kFUXbeO31dUtW8AEuU` | **Verified current** | https://vercel.com/dashboard |
| Deployed aliases | `sweepza.com`, `www.sweepza.com`, `sweepza.vercel.app` | **Verified `READY`** | https://sweepza.com |
| Supabase | Ref `ojwhsntcpmoxnzisuomq` | **Verified current** | https://supabase.com/dashboard/project/ojwhsntcpmoxnzisuomq |
| Custom domain | `sweepza.com` | **Verified public / authenticated registrar control pending** | https://dcc.godaddy.com/ |
| Clerk | Development instance `ins_3EhjrYiNBzhqkZlG9kIc2Gh4dSy`; webhook route `/api/webhooks/clerk` | **Verified dev/stg/prd reuse; one user; same Doppler webhook config; deployed webhook inactive** | https://dashboard.clerk.com/ |
| Stripe | Sandbox `acct_1TeqgHD7Yqq488pB`; mixed live `acct_1SpxXpDtcwz0cxzo` | **Verified contamination** | https://dashboard.stripe.com/ |
| PostHog | Sweepza-specific analytics project | **Not active in health / ID unverified** | https://app.posthog.com/ |
| Sentry | Sweepza org/project configuration required | **Not active in health / IDs unverified** | https://sentry.io/ |
| Resend | Sweepza sending identity required | **No key, from-address, account, or domain configured** | https://resend.com/domains |
| Mapbox | No active Sweepza token configuration | **Not configured; do not inherit the shared portfolio token** | https://account.mapbox.com/ |
| Cloudinary | Empty `sweepza` placeholder folder in the Free product environment | **No assets and no Sweepza credential** | https://console.cloudinary.com/ |

Do not treat the provider runbook's claim of configured variables as proof of resource ownership. Confirm each non-secret project/account ID before activation.
