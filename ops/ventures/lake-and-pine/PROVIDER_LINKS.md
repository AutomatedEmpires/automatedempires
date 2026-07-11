# Lake & Pine provider links

| Provider | Resource locator | Status | Link / evidence |
|---|---|---|---|
| GitHub | `AutomatedEmpires/lakeandpine`; `main` `0b7116f72878ba3f67e3ff9948a11da83cc5bab7`; base candidate `e1fe8f00…`; local validated head `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c` | **Local clean commit / unpushed; source convergence required** | https://github.com/AutomatedEmpires/lakeandpine |
| Doppler | Project `lake-and-pine`; dev metadata, stg/prd populated from verified runtime | **Verified current** | https://dashboard.doppler.com/ |
| Vercel | Project `lakeandpine` / `prj_vVueSPzV7THkp0O3xfqlKNt3FePz`; two READY production-target artifacts from dirty `122dd312`; latest `dpl_AaAEZZz9Ma442TDNygN6ypLsQCMt`; root `apps/web` | **Dirty source provenance; not exact `e1fe8f00`** | https://vercel.com/dashboard |
| Supabase | Ref `fftnqsvxxsxcsiwvtmwr` | **Verified current; preserve during source normalization** | https://supabase.com/dashboard/project/fftnqsvxxsxcsiwvtmwr |
| Domain | `lakeandpinecleaning.com` | **Authenticated owned / full 8-record zone verified; no MX/SPF** | https://dcc.godaddy.com/ |
| Mapbox | Optional `AreaMap.tsx` consumer with branded SVG fallback | **No active token; create restricted public token only after clean Preview** | https://account.mapbox.com/ |
| Clerk | Customer/staff auth is a production requirement | **Target state**; no app ID verified | https://dashboard.clerk.com/ |
| Stripe | Payment methods/invoices are a production requirement | **Target state**; no account ID verified | https://dashboard.stripe.com/ |
| Resend | Transactional email is a production requirement | **Target state**; no domain/API resource verified | https://resend.com/domains |
| PostHog | Product analytics | **Target state**; no project ID verified | https://app.posthog.com/ |
| Sentry | Error monitoring | **Target state**; no org/project ID verified | https://sentry.io/ |

The owned domain is not release authority. The current Vercel deployment is temporary rollback evidence, not a reproducible release, until the local CI/case repair is committed and a clean exact-SHA Preview plus main production deployment are recorded.
