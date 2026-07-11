# LogLoads provider links

Pass 2 provider refresh: 2026-07-10; sanitized status only.

| Provider | Resource locator | Status | Link / evidence |
|---|---|---|---|
| GitHub | `AutomatedEmpires/logloads` | **Verified current** | https://github.com/AutomatedEmpires/logloads |
| Doppler | Project `logloads`; configs `dev`, `stg`, `prd` | **Verified current** | https://dashboard.doppler.com/ |
| Vercel | Project `logloads` / `prj_PR8dD2yjARgzZE1AyfZzafl7qRW4`; preview `dpl_Ejx66Z9wZFJiPJ5341j61voT7cHF`; failed production `dpl_5LdZ4qWv7P1B68iYi3zZoJBM7wLN` | **Verified artifacts / production promotion prohibited pending architecture decision** | https://vercel.com/dashboard |
| Supabase | Ref `fdzohbiiyzgvjzfsjyxo` | **Verified snapshot mirror; not yet canonical transactional state** | https://supabase.com/dashboard/project/fdzohbiiyzgvjzfsjyxo |
| Current launch-host contract | One Node process with persistent `/data` volume; Fly.io/Railway/VM/Docker are documented candidates | **Dated decision; paid host not approved/provisioned** | Repository `docs/DECISIONS.md` and `docs/DEPLOYMENT.md` |
| Domain | `logloads.com` | **Authenticated GoDaddy control / 12-record post-change zone** | https://dcc.godaddy.com/ |
| Clerk | Dev `ins_3EhjpXH8SIg9bCKF9TYYv7RsHYW`; dark production | **DNS Verified/SSL Issued; runtime absent** | https://dashboard.clerk.com/ |
| Stripe | Subscription-only account/products intended | **Observed in repository**; account ID **unknown** | https://dashboard.stripe.com/ |
| Mapbox | Shared public token in feature candidate; MapLibre/Carto fallback | **Actual optional consumer; server-looking name duplicates public token** | https://account.mapbox.com/ |
| Resend | Distinct broad key in E&E 1/1-domain team; contact-inquiry consumer; no LogLoads domain/from/contact identity | **Payment/account coupling; runtime activation deferred** | https://resend.com/domains |
| Cloudinary | Free cloud `dwiwyt9vi`, empty LogLoads root folder | **Placeholder only; no assets and no LogLoads credential** | https://console.cloudinary.com/ |
| PostHog | No LogLoads project in the live organization | **Verified absent** | https://app.posthog.com/ |
| Sentry | Distinct LogLoads project/DSN | **Verified resource; no first event/environment/owner routing** | https://sentry.io/ |

The repository's provider list is an architecture decision, not a dashboard inventory. Verify each resource before adding live configuration. A Vercel project association does not supersede the dated single-writer/persistent-volume launch contract.
