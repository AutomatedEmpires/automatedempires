# BidSpace provider links

Pass 2 provider refresh: 2026-07-10; sanitized status only.

These are non-secret navigation aids. A dashboard link does not prove resource ownership or readiness.

| Provider | Resource locator | Status | Link / evidence |
|---|---|---|---|
| GitHub | `AutomatedEmpires/bidspace` | **Verified current** | https://github.com/AutomatedEmpires/bidspace |
| Doppler | Project `bidspace`; configs `dev`, `stg`, `prd` | **Verified current** | https://dashboard.doppler.com/ |
| Vercel | Project `bidspace` / `prj_ZumWyHo2GSF59j7dWQkkX6NGZlwO` | **Verified shell**; no deployment | https://vercel.com/dashboard |
| Supabase | Ref `hnjjcgxflxlfsqslgxcv` | **Verified current** | https://supabase.com/dashboard/project/hnjjcgxflxlfsqslgxcv |
| Clerk | Development instance `ins_3EhjtEaNHw8zCMMwPWby7O6tsWB` on `factual-puma-97` | **Verified development**; production missing | https://dashboard.clerk.com/ |
| Stripe | BidSpace-specific Connect platform/account | **Observed in repository**; account identity **unknown** | https://dashboard.stripe.com/ |
| Mapbox | Shared default token configured in `dev`; no consumer on `main`, active consumer on accepted feature `511b763…` | **Branch-qualified coupling; replacement waits for reviewed source/domain** | https://account.mapbox.com/ |
| Cloudinary | Free cloud `dwiwyt9vi`, empty BidSpace root folder | **Placeholder only; no assets and no BidSpace credential** | https://console.cloudinary.com/ |
| PostHog | Product analytics project | **Observed in repository**; project identity **unknown** | https://app.posthog.com/ |
| Sentry | Distinct BidSpace project/DSN in `automated-empires` | **Verified first production event; zero unresolved/14d; ownership routing open** | https://sentry.io/ |
| Domain/DNS | No discovered candidate | **Unknown / founder verification required** | No domain link recorded |

Repository evidence: BidSpace `docs/INTEGRATIONS.md`, `docs/ARCHITECTURE.md`, and `.env.example` names. Do not add a provider-generated endpoint as the venture's owned domain.
