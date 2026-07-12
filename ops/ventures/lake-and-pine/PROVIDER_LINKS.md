# Lake & Pine provider links

| Provider | Resource locator | Status | Link / evidence |
|---|---|---|---|
| GitHub | `AutomatedEmpires/lakeandpine`; [PR #1](https://github.com/AutomatedEmpires/lakeandpine/pull/1), source `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c`, merge `1b6a877bc054a9239c2a430aaf668996de8a0302` | **Merged; protection/security fixed** | https://github.com/AutomatedEmpires/lakeandpine |
| Doppler | Project `lake-and-pine`; dev metadata, stg/prd populated from verified runtime | **Verified current** | https://dashboard.doppler.com/ |
| Vercel | Project `lakeandpine` (`…t3FePz`); Preview `dpl_BBy…` and clean current-main production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` are `READY` | **Source/main provenance fixed; functional rollback/domain smoke open** | https://vercel.com/dashboard |
| Supabase | Project fingerprint `…vtmwr` | **Verified current; preserve during source normalization** | https://supabase.com/dashboard/projects |
| Domain | `lakeandpinecleaning.com` | **Authenticated owned / full 8-record zone verified; no MX/SPF** | https://dcc.godaddy.com/ |
| Mapbox | Optional `AreaMap.tsx` consumer with branded SVG fallback | **No active token; fallback retained; owner confirmation required before any scoped token** | https://account.mapbox.com/ |
| Clerk | Customer/staff auth is a production requirement | **Target state**; no app ID verified | https://dashboard.clerk.com/ |
| Stripe | Payment methods/invoices are a production requirement | **Target state**; no account ID verified | https://dashboard.stripe.com/ |
| Resend | Transactional email is a production requirement | **Target state**; no domain/API resource verified | https://resend.com/domains |
| PostHog | Project `509088`; own key/host in Doppler/Vercel targets | **Provider/environment binding verified; runtime pending fresh deployment/event** | https://app.posthog.com/ |
| Sentry | Separate `lake-and-pine` project; own identifiers in Doppler all lanes | **Project/governance fixed; Vercel install/runtime event open** | https://sentry.io/ |

The owned domain is not release authority. GitHub/main/Vercel provenance is clean; functional provider-host smoke and rollback acceptance still precede domain work.
