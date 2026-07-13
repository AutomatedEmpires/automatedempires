# AutomatedEmpires provider links

Last reviewed: 2026-07-10

Links are control-plane entry points. Project names are included only when verified or repository-observed; no account IDs or credential material are recorded.

| Provider | Resource locator | Status | Purpose / next check |
| --- | --- | --- | --- |
| GitHub | [AutomatedEmpires PR #5](https://github.com/AutomatedEmpires/automatedempires/pull/5); later rollout packet #12 | **Current `main` includes #12 at `408fca3`; protection/security fixed** | Strict `verify`/`design`, squash/linear, conversation resolution, no force push/deletion, automation bypass, security alerts. |
| Doppler | [Projects dashboard](https://dashboard.doppler.com/workplace/projects) — project `automatedempires`, configs `dev`, `stg`, `prd` | **Verified current** | Own Sentry DSN/org/project identifiers added write-only in all lanes; verify owners and intended Vercel sync path. |
| Vercel | [Vercel dashboard](https://vercel.com/dashboard) — project `automatedempires`; production `dpl_4b8tDpSmz71WTGmrgRigPb7k5bT9` | **Clean last-deployed source `READY`; current source is later** | Deployed settings/source verified at `664cda67bc7bc91e4f1577d76bbe7758290f3a2d`; current source #12 `408fca3` needs deployment revalidation; functional rollback/DNS smoke open. |
| Domain / DNS | [GoDaddy domains](https://dcc.godaddy.com/) — `automatedempires.com` | **Authenticated control / 23-record zone verified** | Website Builder and three `ppe-hosted.com` MX records are active; Microsoft service/verification records also exist. Preserve the consolidated SPF/mail route during any web cutover. |
| Resend | [Resend domains](https://resend.com/domains) | **Completed no-resource decision** | No transactional consumer; `jackson@automatedempires.com` is admin identity, not a Resend requirement. |
| PostHog | [PostHog](https://app.posthog.com/) — project `509081` | **Project/environment binding verified; runtime pending deployment** | Own key/host spans Doppler/Vercel targets; source consumes them. Fresh deployment/event proof remains. |
| Cloudinary | [Cloudinary console](https://console.cloudinary.com/) | **Parent namespace created; no credential/assets** | `automatedempires/` is organization only; keep site assets local until a managed-media consumer exists. |
| Sentry | [Sentry](https://sentry.io/) — separate `automatedempires` project | **Project/governance/Doppler fixed** | Ownership, one alert, scrubbers/IP scrubbing configured; Vercel install/runtime event open. |
| Supabase | Not applicable | **Verified current** | The current parent site has no Supabase requirement. Do not create one without a feature and dated decision. |

## Provider boundary

- **Target state** — Every resource above, if used, belongs to AutomatedEmpires rather than to a child venture.
- **Target state** — Dashboard access uses named people or managed groups with least privilege and MFA.
- **Transfer-specific owner verification** — Confirm billing owner, emergency owner, recovery channel, and transfer authority for Vercel and the domain.
