# Explore & Earn provider links

Last reviewed: 2026-07-10
Pass 2 provider refresh: 2026-07-10; links and status only, with no credential material.

These links locate control planes without recording credentials or unverified account identifiers.

| Provider | Resource locator | Status | Purpose / next check |
| --- | --- | --- | --- |
| GitHub | [AutomatedEmpires/explore-and-earn](https://github.com/AutomatedEmpires/explore-and-earn) | **Observed in repository** | Verify admins, environments, Actions secrets by name, branch protection, and deploy integration. |
| Doppler | [Projects dashboard](https://dashboard.doppler.com/workplace/projects) — `explore-and-earn`, configs `dev`, `stg`, `prd` | **Verified current** | Verify access owners and name-only parity with Vercel; never export values into documentation. |
| Vercel | [Vercel dashboard](https://vercel.com/dashboard) — project `explore-and-earn` | **Verified current** | Git/main/root, custom domain, deployment, and health are verified; reconcile write-only environment values with Doppler. |
| Supabase | [Project dashboard](https://supabase.com/dashboard/project/mamosbzcbigcclafhmmr) — ref `mamosbzcbigcclafhmmr` | **Verified current** | Verify organization, billing/recovery owners, environment role, backups, migration state, and RLS health. |
| Clerk | [Clerk dashboard](https://dashboard.clerk.com/) — development instance `ins_3EbijmjwDxAGFSseSube1NHpMLk` | **Verified development / production missing** | One dev user; no configured domain returned; webhook signing name absent. Create production domain, OAuth, JWT, webhook, and admin recovery without assuming the dev user transfers. |
| Stripe | [Stripe dashboard](https://dashboard.stripe.com/) — dev `acct_1TepcWIUt5N2gdTF`; mixed live `acct_1SpxXpDtcwz0cxzo` | **Verified mixed state** | Prove the write-only production runtime key, then separate from Sweepza through an approved migration. |
| Resend | [Resend domains](https://resend.com/domains) — `exploreandearn.com` | **Verified `failed`** | Shared team with LogLoads; one DKIM and two SPF checks failed. Fix DNS, prove delivery, and replace the broad key with sending-only/domain-restricted access. |
| Domain / DNS | [GoDaddy domains](https://dcc.godaddy.com/) — `exploreandearn.com` | **Verified public / authenticated control pending** | Web routing works; verify account recovery/renewal and add Resend records safely. |
| PostHog | [PostHog](https://app.posthog.com/) — documented US project `exploreandearn` / `291166` | **Documented; live settings unverified** | Confirm owners, retention, environment separation, and a test event. |
| Cloudinary | [Cloudinary console](https://console.cloudinary.com/) — Free cloud `dwiwyt9vi` | **Verified Explore&Earn-active / placeholders empty** | Only Explore&Earn has assets and credentials. Bind signed presets to environment folders, review overwrite, and do not distribute the Admin credential. |
| Mapbox | [Mapbox account](https://console.mapbox.com/) | **Verified shared/unusable-server state** | Shared public token is active and apparently unrestricted; server token is unusable. Inventory with `tokens:read`, create replacements with `tokens:write`, and grant runtime read scopes only. |
| Sentry | [Sentry](https://sentry.io/) — org `automated-empires`, project `explore-and-earn` | **Verified current** | Confirm owners/alerts/scrubbing and triage unresolved production issues. |
| OpenAI / AI Gateway | [OpenAI platform](https://platform.openai.com/) and [Vercel AI Gateway](https://vercel.com/ai-gateway) | **Observed in repository** | AI integration points are referenced; intended production provider, project, limits, and data policy require verification. |

## Provider boundary

- **Target state** — Each provider resource is named for Explore & Earn and has a recorded business owner, technical owner, billing owner, recovery owner, and environment.
- **Target state** — Webhooks use the Explore & Earn domain and are registered separately for test/staging and production.
- **Unknown / founder verification required** — Verify account-level ownership for Clerk, Stripe, Resend, PostHog, Cloudinary, Mapbox, Sentry, DNS, and AI before production activation.
