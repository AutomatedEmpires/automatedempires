# Lake & Pine provider links

| Provider | Resource locator | Status | Link / evidence |
|---|---|---|---|
| GitHub | `AutomatedEmpires/lakeandpine`; PR #1 deployed baseline `1b6a877…`; PRs #2/#3 current source through `e65b3b6` | **Merged; protection/security fixed; later test/backend source present** | https://github.com/AutomatedEmpires/lakeandpine |
| Doppler | Project `lake-and-pine`; dev metadata, stg/prd populated from verified runtime | **Verified current** | https://dashboard.doppler.com/ |
| Vercel | Project `lakeandpine` (`…t3FePz`); Preview `dpl_BBy…` and clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` from last deployed source `1b6a877…` are `READY` | **Current source `e65b3b6` is later; deployment revalidation and functional rollback/domain smoke open** | https://vercel.com/dashboard |
| Supabase | Project fingerprint `…vtmwr` | **Verified current; preserve during source normalization** | https://supabase.com/dashboard/projects |
| Domain | `lakeandpinecleaning.com` | **Authenticated owned / full 8-record zone verified; no MX/SPF** | https://dcc.godaddy.com/ |
| Mapbox | Venture-specific public token for `AreaMap.tsx`; SVG fallback retained | **Installed across lanes; origin/local/fresh protected Preview verified; Production unchanged** | https://account.mapbox.com/ |
| Clerk | Customer/staff auth is a production requirement | **Target state**; no app ID verified | https://dashboard.clerk.com/ |
| Stripe | Phase 2 payment methods/invoices only | **Phase 2 target state**; no account ID verified and no Phase 1 requirement | https://dashboard.stripe.com/ |
| Resend | Transactional email is a production requirement | **Target state**; no domain/API resource verified | https://resend.com/domains |
| PostHog | Project `509088`; own key/host in Doppler/Vercel targets | **Provider/environment binding verified; runtime pending fresh deployment/event** | https://app.posthog.com/ |
| Sentry | Separate `lake-and-pine` project; own identifiers in Doppler all lanes | **Project/governance fixed; Vercel install/runtime event open** | https://sentry.io/ |

The owned domain is not release authority. GitHub/main/Vercel provenance is clean; functional provider-host smoke and rollback acceptance still precede domain work.
