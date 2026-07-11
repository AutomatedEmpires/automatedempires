# Sweepza provider links

Pass 2 provider refresh: 2026-07-10; sanitized status only.

| Provider | Resource locator | Status | Link / evidence |
|---|---|---|---|
| GitHub | `AutomatedEmpires/sweepza` | **Verified current** | https://github.com/AutomatedEmpires/sweepza |
| Doppler | Project `sweepza`; configs `dev`, `stg`, `prd` | **Verified current** | https://dashboard.doppler.com/ |
| Vercel | Project `sweepza` / `prj_RkvzmVMzo4kFUXbeO31dUtW8AEuU` | **Verified current** | https://vercel.com/dashboard |
| Deployed aliases | `sweepza.com`, `www.sweepza.com`, `sweepza.vercel.app` | **Verified `READY`** | https://sweepza.com |
| Supabase | Ref `ojwhsntcpmoxnzisuomq` | **Verified current** | https://supabase.com/dashboard/project/ojwhsntcpmoxnzisuomq |
| Custom domain | `sweepza.com` | **Authenticated GoDaddy control; privacy/renewal/full zone verified** | https://dcc.godaddy.com/ |
| Clerk | Dev `ins_3EhjrYiNBzhqkZlG9kIc2Gh4dSy`; dark production; route `/api/webhooks/clerk` | **Production DNS Verified/SSL Issued; dev/stg/prd reuse remains until runtime cutover** | https://dashboard.clerk.com/ |
| Stripe | Sandbox `acct_1TeqgHD7Yqq488pB`; mixed live `acct_1SpxXpDtcwz0cxzo` | **Verified contamination** | https://dashboard.stripe.com/ |
| PostHog | No Sweepza project; key is empty | **Verified absent** | https://app.posthog.com/ |
| Sentry | Distinct Sweepza project/DSN in `automated-empires` | **Verified resource; no first event/owner routing** | https://sentry.io/ |
| Resend | Approval/hold and winner-notification consumers | **Required by code; no key/from/account/domain** | https://resend.com/domains |
| Mapbox | No active Sweepza token configuration | **Not configured; do not inherit the shared portfolio token** | https://account.mapbox.com/ |
| Cloudinary | Empty `sweepza` placeholder folder in the Free product environment | **No assets and no Sweepza credential** | https://console.cloudinary.com/ |

Do not treat the provider runbook's claim of configured variables as proof of resource ownership. Confirm each non-secret project/account ID before activation.

Local repository candidate `89bbe121…` fixes false `sent` logging but is not remote or deployed; provider configuration remains a separate paid/production gate.
