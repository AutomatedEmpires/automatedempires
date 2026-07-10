# LogLoads provider links

| Provider | Resource locator | Status | Link / evidence |
|---|---|---|---|
| GitHub | `AutomatedEmpires/logloads` | **Verified current** | https://github.com/AutomatedEmpires/logloads |
| Doppler | Project `logloads`; configs `dev`, `stg`, `prd` | **Verified current** | https://dashboard.doppler.com/ |
| Vercel | Project `logloads` / `prj_PR8dD2yjARgzZE1AyfZzafl7qRW4` | **Verified preview; production `ERROR`** | https://vercel.com/dashboard |
| Supabase | Ref `fdzohbiiyzgvjzfsjyxo` | **Verified current** | https://supabase.com/dashboard/project/fdzohbiiyzgvjzfsjyxo |
| Domain | `logloads.com` | **Verified public at GoDaddy; authenticated control pending** | https://dcc.godaddy.com/ |
| Clerk | Development instance `ins_3EhjpXH8SIg9bCKF9TYYv7RsHYW` on `unbiased-buffalo-23` | **Verified dev/stg reuse; prd absent** | https://dashboard.clerk.com/ |
| Stripe | Subscription-only account/products intended | **Observed in repository**; account ID **unknown** | https://dashboard.stripe.com/ |
| Mapbox | Current browser token shared with Explore&Earn and BidSpace | **Confirmed coupling** | https://account.mapbox.com/ |
| Resend | Distinct credential in Explore&Earn's one-domain account; no LogLoads domain | **Confirmed coupling / HTTP 403 paid blocker** | https://resend.com/domains |
| Cloudinary | Shared free cloud `dwiwyt9vi`, LogLoads root folder | **Verified folder-only boundary** | https://console.cloudinary.com/ |
| PostHog | Product analytics intended | **Observed in repository**; project ID **unknown** | https://app.posthog.com/ |
| Sentry | Error monitoring intended | **Observed in repository**; org/project IDs **unknown** | https://sentry.io/ |

The repository's provider list is an architecture decision, not a dashboard inventory. Verify each resource before adding live configuration.
