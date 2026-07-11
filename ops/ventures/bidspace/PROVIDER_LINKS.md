# BidSpace provider links

Pass 2 provider refresh: 2026-07-10; sanitized status only.

These are non-secret navigation aids. A dashboard link does not prove resource ownership or readiness.

| Provider | Resource locator | Status | Link / evidence |
|---|---|---|---|
| GitHub | `AutomatedEmpires/bidspace`; #62 merged as `c2c15f1582c1f47bcd589b601819597dd7bea767`; green #63 produced current `main` `2fe90a3eb8cd9bffd43be1ac401d151ae4ad39e8` | **Repository convergence/protection fixed** | https://github.com/AutomatedEmpires/bidspace |
| Doppler | Project `bidspace`; configs `dev`, `stg`, `prd` | **Verified current** | https://dashboard.doppler.com/ |
| Vercel | Project `bidspace` (`…GZlwO`); accepted Preview `dpl_3vFJAPyiQqWr95woTY51mKBT1W1S`; clean production `dpl_GQ2yhiJjwchgt7rJDSbU8Y8JuVDp` from `2fe90a3eb8cd9bffd43be1ac401d151ae4ad39e8` | **Preview/current-main production `READY`; custom domain absent** | https://vercel.com/dashboard |
| Supabase | Project fingerprint `…fsqslgxcv` | **Verified current** | https://supabase.com/dashboard/projects |
| Clerk | Development instance `ins_3Eh…O6tsWB` | **Verified development**; production missing | https://dashboard.clerk.com/ |
| Stripe | BidSpace-specific Connect platform/account | **Observed in repository**; account identity **unknown** | https://dashboard.stripe.com/ |
| Mapbox | Shared default token configured in `dev`; no consumer on `main`, active consumer on accepted feature `511b763…` | **Branch-qualified coupling; replacement waits for reviewed source/domain** | https://account.mapbox.com/ |
| Cloudinary | Free environment `dwi…t9vi`, empty `bidspace/` namespace | **Taxonomy only; no assets/credential** | https://console.cloudinary.com/ |
| PostHog | Product analytics project | **Observed in repository**; project identity **unknown** | https://app.posthog.com/ |
| Sentry | Distinct BidSpace project/DSN in `automated-empires` | **First event plus ownership/one alert/scrubbers/IP scrubbing fixed** | https://sentry.io/ |
| Domain/DNS | Purchase explicitly deferred | **Blocked by domain purchase for production only** | No domain link recorded |

Repository evidence: BidSpace `docs/INTEGRATIONS.md`, `docs/ARCHITECTURE.md`, and `.env.example` names. Do not add a provider-generated endpoint as the venture's owned domain.
