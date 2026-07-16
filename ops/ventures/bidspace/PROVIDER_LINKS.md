# BidSpace provider links

Pass 2 provider refresh: 2026-07-10; sanitized status only.

These are non-secret navigation aids. A dashboard link does not prove resource ownership or readiness.

| Provider | Resource locator | Status | Link / evidence |
|---|---|---|---|
| GitHub | `AutomatedEmpires/bidspace`; #62/#63 convergence through `2fe90a3…`; current `main` includes dependency-fix #64 at `69a53c4` | **Repository convergence/protection fixed; later source merged** | https://github.com/AutomatedEmpires/bidspace |
| Doppler | Project `bidspace`; configs `dev`, `stg`, `prd` | **Verified current** | https://dashboard.doppler.com/ |
| Vercel | Project `bidspace` (`…GZlwO`); accepted Preview `dpl_3vFJAPyiQqWr95woTY51mKBT1W1S`; clean production `dpl_GQ2yhiJjwchgt7rJDSbU8Y8JuVDp` from last deployed source `2fe90a3eb8cd9bffd43be1ac401d151ae4ad39e8` | **Deployed artifacts `READY`; current source #64 has no recorded later deployment; custom domain absent** | https://vercel.com/dashboard |
| Supabase | Project fingerprint `…fsqslgxcv` | **Verified current** | https://supabase.com/dashboard/projects |
| Clerk | Development instance `ins_3Eh…O6tsWB` | **Verified development**; production missing | https://dashboard.clerk.com/ |
| Stripe | Stripe Connect integration/configuration intent | **No platform/account identity verified; live payments and Connect are disabled pending legal/entity/operating/payment approval** | https://dashboard.stripe.com/ |
| Mapbox | Venture-specific public token; active `explore-map.tsx` consumer | **Doppler all lanes + Vercel Dev/Preview installed; origin/local proof green; protected Preview/domain gates open** | https://account.mapbox.com/ |
| Cloudinary | Free environment `dwi…t9vi`, empty `bidspace/` namespace | **Taxonomy only; no assets/credential** | https://console.cloudinary.com/ |
| PostHog | Project `509087`; own key/host in Doppler/Vercel targets | **Provider/environment binding verified; runtime pending fresh deployment/event** | https://app.posthog.com/ |
| Sentry | Distinct BidSpace project/DSN in `automated-empires` | **First event plus ownership/one alert/scrubbers/IP scrubbing fixed** | https://sentry.io/ |
| Domain/DNS | Purchase explicitly deferred | **Blocked by domain purchase for production only** | No domain link recorded |

Repository evidence: BidSpace `docs/INTEGRATIONS.md`, `docs/ARCHITECTURE.md`, and `.env.example` names. Do not add a provider-generated endpoint as the venture's owned domain.

`READY` deployments and production-class provider labels do not make BidSpace live. The product is a host–vendor temporary-space marketplace; all current bidding/application tests must remain synthetic/demo-only, and all payment/Connect work sandbox-only if separately approved.
