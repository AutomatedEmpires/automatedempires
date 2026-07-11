# Explore & Earn provider links

Last reviewed: 2026-07-10
Pass 2 provider refresh: 2026-07-10; links and status only, with no credential material.

These links locate control planes without recording credentials or unverified account identifiers.

| Provider | Resource locator | Status | Purpose / next check |
| --- | --- | --- | --- |
| GitHub | [AutomatedEmpires/explore-and-earn](https://github.com/AutomatedEmpires/explore-and-earn) | **#242/#243 merged; current `main` `b616b9e10fa434422dd34442f6cb24194cf8d5ec`; protection/security fixed** | Preserve strict `verify`/`design`/`migration`, squash/linear history, conversation resolution, and read-only default workflow permissions. |
| Doppler | [Projects dashboard](https://dashboard.doppler.com/workplace/projects) — `explore-and-earn`, configs `dev`, `stg`, `prd` | **Verified current** | Verify access owners and name-only parity with Vercel; never export values into documentation. |
| Vercel | [Vercel dashboard](https://vercel.com/dashboard) — project `explore-and-earn`; production `dpl_5HCPaCNCQuyip2iZTHpoMvSxjQFY` | **Current-main production `READY`** | Git/main/root and custom domain are verified at `b616b9e10fa434422dd34442f6cb24194cf8d5ec`; reconcile write-only environment values with Doppler. |
| Supabase | [Projects dashboard](https://supabase.com/dashboard/projects) — fingerprint `…lafhmmr` | **Verified current** | Verify owners, environment role, backups, migration state, and RLS health. |
| Clerk | [Clerk dashboard](https://dashboard.clerk.com/) — dev `ins_3Eb…HpMLk`; dark production | **DNS Verified / SSL Issued; runtime pending** | Configure OAuth/JWT/webhook/admin recovery and prove Preview before `prd`. |
| Stripe | [Stripe dashboard](https://dashboard.stripe.com/) — test `acct_1Te…gdTF`; live `acct_1RM…pSG9` | **Dedicated accounts/catalogs verified; production binding pending** | Test contract seeded; live catalog prepared. Prove production account ID and correct webhook, then pass Preview before activation. |
| Resend | [Resend domains](https://resend.com/domains) — `exploreandearn.com` | **Domain/key/lanes/source/Preview green; delivery pending** | Real delivery is not authorized/proven. After authorization, smoke delivery/reply; keep broad key only until zero-use proof. |
| Domain / DNS | [GoDaddy domains](https://dcc.godaddy.com/) — `exploreandearn.com` | **Authenticated control / 16-record zone verified** | Resend records and five Clerk CNAMEs added without collision; Clerk DNS/SSL green. Retain recovery/renewal owners. |
| PostHog | [PostHog](https://app.posthog.com/) — project `exploreandearn` | **Identity/ingestion/non-reuse verified; privacy source fixed** | Numeric provider ID omitted; owner/retention/environment/consent management awaits re-authentication. |
| Cloudinary | [Cloudinary console](https://console.cloudinary.com/) — Free environment `dwi…t9vi` | **Explore&Earn active; nine namespaces created** | No media moved/deleted. Classify 55 icon raws and preview safer presets. |
| Mapbox | [Mapbox account](https://console.mapbox.com/) | **Replacement approved / blocked by owner confirmation** | Default token stays rollback. After account confirmation create minimal-scope exact-origin dev/prd replacements and verify before retirement. |
| Sentry | [Sentry](https://sentry.io/) — org `automated-empires`, project `explore-and-earn` | **Distinct active/governed project** | Ownership, one alert, scrubbers/IP scrubbing, and issue assignment fixed; replace owner-grade build token only after narrow replacement deploy/verification. |
| OpenAI / AI Gateway | [OpenAI platform](https://platform.openai.com/) and [Vercel AI Gateway](https://vercel.com/ai-gateway) | **Observed in repository** | AI integration points are referenced; intended production provider, project, limits, and data policy require verification. |

## Provider boundary

- **Target state** — Each provider resource is named for Explore & Earn and has a recorded business owner, technical owner, billing owner, recovery owner, and environment.
- **Target state** — Webhooks use the Explore & Earn domain and are registered separately for test/staging and production.
- **Provider-owner verification required where still open** — Verify account-level billing/recovery ownership and the remaining runtime bindings before production activation; current resource identities are documented above.
