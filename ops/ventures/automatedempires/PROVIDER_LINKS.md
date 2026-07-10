# AutomatedEmpires provider links

Last reviewed: 2026-07-10

Links are control-plane entry points. Project names are included only when verified or repository-observed; no account IDs or credential material are recorded.

| Provider | Resource locator | Status | Purpose / next check |
| --- | --- | --- | --- |
| GitHub | [AutomatedEmpires/automatedempires](https://github.com/AutomatedEmpires/automatedempires) | **Observed in repository** | Canonical source repository per `EMPIRE_INFRA_ALIGNMENT_PLAN.md`. Verify admins, branch protection, and deploy integration. |
| Doppler | [Projects dashboard](https://dashboard.doppler.com/workplace/projects) — project `automatedempires`, configs `dev`, `stg`, `prd` | **Verified current** | Project/config existence is supplied; the inventory found metadata only. Verify owners and intended sync path. |
| Vercel | [Vercel dashboard](https://vercel.com/dashboard) — project `automatedempires` | **Verified current** | Canonical Git/main/root/Next.js/Node 24 settings are verified; deploy a preview and production provider host before attaching the domain. |
| Domain / DNS | [GoDaddy domains](https://dcc.godaddy.com/) — `automatedempires.com` | **Verified public / authenticated control pending** | Registered at GoDaddy, serves Website Builder, Outlook MX present, possible duplicate SPF; export the zone before changes. |
| Resend | [Resend domains](https://resend.com/domains) | **Observed in repository** | Approved email provider family only; no AutomatedEmpires sending domain or account resource is live-verified. |
| PostHog | [PostHog](https://app.posthog.com/) | **Observed in repository** | Approved analytics provider family only; project identity is unverified. |
| Cloudinary | [Cloudinary console](https://console.cloudinary.com/) | **Observed in repository** | Approved media provider family only; cloud identity is unverified. |
| Sentry | [Sentry](https://sentry.io/) | **Observed in repository** | Approved error provider family only; organization/project identity is unverified. |
| Supabase | Not applicable | **Verified current** | The current parent site has no Supabase requirement. Do not create one without a feature and dated decision. |

## Provider boundary

- **Target state** — Every resource above, if used, belongs to AutomatedEmpires rather than to a child venture.
- **Target state** — Dashboard access uses named people or managed groups with least privilege and MFA.
- **Unknown / founder verification required** — Confirm billing owner, emergency owner, recovery channel, and transfer authority for Vercel and the domain.
