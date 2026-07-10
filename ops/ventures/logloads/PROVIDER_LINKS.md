# LogLoads provider links

Pass 2 provider refresh: 2026-07-10; sanitized status only.

| Provider | Resource locator | Status | Link / evidence |
|---|---|---|---|
| GitHub | `AutomatedEmpires/logloads` | **Verified current** | https://github.com/AutomatedEmpires/logloads |
| Doppler | Project `logloads`; configs `dev`, `stg`, `prd` | **Verified current** | https://dashboard.doppler.com/ |
| Vercel | Project `logloads` / `prj_PR8dD2yjARgzZE1AyfZzafl7qRW4`; preview `dpl_Ejx66Z9wZFJiPJ5341j61voT7cHF`; failed production `dpl_5LdZ4qWv7P1B68iYi3zZoJBM7wLN` | **Verified artifacts / production promotion prohibited pending architecture decision** | https://vercel.com/dashboard |
| Supabase | Ref `fdzohbiiyzgvjzfsjyxo` | **Verified snapshot mirror; not yet canonical transactional state** | https://supabase.com/dashboard/project/fdzohbiiyzgvjzfsjyxo |
| Current launch-host contract | One Node process with persistent `/data` volume; Fly.io/Railway/VM/Docker are documented candidates | **Dated decision; paid host not approved/provisioned** | Repository `docs/DECISIONS.md` and `docs/DEPLOYMENT.md` |
| Domain | `logloads.com` | **Verified public at GoDaddy; authenticated control pending** | https://dcc.godaddy.com/ |
| Clerk | Development instance `ins_3EhjpXH8SIg9bCKF9TYYv7RsHYW` on `unbiased-buffalo-23` | **Verified dev/stg reuse; zero users; prd absent** | https://dashboard.clerk.com/ |
| Stripe | Subscription-only account/products intended | **Observed in repository**; account ID **unknown** | https://dashboard.stripe.com/ |
| Mapbox | Current browser token shared with Explore&Earn and BidSpace | **Confirmed coupling; server-looking variable is the same public token; metadata/rotation scopes missing** | https://account.mapbox.com/ |
| Resend | Distinct but broad key in Explore&Earn's team; no LogLoads domain or explicit from-address | **Confirmed coupling / HTTP 403 current-plan quota blocker** | https://resend.com/domains |
| Cloudinary | Free cloud `dwiwyt9vi`, empty LogLoads root folder | **Placeholder only; no assets and no LogLoads credential** | https://console.cloudinary.com/ |
| PostHog | Product analytics intended | **Observed in repository**; project ID **unknown** | https://app.posthog.com/ |
| Sentry | Error monitoring intended | **Observed in repository**; org/project IDs **unknown** | https://sentry.io/ |

The repository's provider list is an architecture decision, not a dashboard inventory. Verify each resource before adding live configuration. A Vercel project association does not supersede the dated single-writer/persistent-volume launch contract.
