# AutomatedEmpires provider links

Last reviewed: 2026-07-10

Links are control-plane entry points. Project names are included only when verified or repository-observed; no account IDs or credential material are recorded.

| Provider | Resource locator | Status | Purpose / next check |
| --- | --- | --- | --- |
| GitHub | [AutomatedEmpires PR #5](https://github.com/AutomatedEmpires/automatedempires/pull/5) | **Merged as `bb9a063e0cf4c08175cd698dbc6611abbbbca802`; current `main` `ed91ece423583318fd7481278a7478311d867add`; protection/security fixed** | Strict `verify`/`design`, squash/linear, conversation resolution, no force push/deletion, automation bypass, security alerts. |
| Doppler | [Projects dashboard](https://dashboard.doppler.com/workplace/projects) — project `automatedempires`, configs `dev`, `stg`, `prd` | **Verified current** | Own Sentry DSN/org/project identifiers added write-only in all lanes; verify owners and intended Vercel sync path. |
| Vercel | [Vercel dashboard](https://vercel.com/dashboard) — project `automatedempires`; production `dpl_5scDXWyVV2wq1ypwhcjmiBkQLpzT` | **Clean current-main production `READY`** | Canonical settings/source verified at `ed91ece423583318fd7481278a7478311d867add`; functional rollback/DNS smoke open. |
| Domain / DNS | [GoDaddy domains](https://dcc.godaddy.com/) — `automatedempires.com` | **Authenticated control / 23-record zone verified** | Website Builder and three `ppe-hosted.com` MX records are active; Microsoft service/verification records also exist. Preserve the consolidated SPF/mail route during any web cutover. |
| Resend | [Resend domains](https://resend.com/domains) | **Completed no-resource decision** | No transactional consumer; `jackson@automatedempires.com` is admin identity, not a Resend requirement. |
| PostHog | [PostHog](https://app.posthog.com/) | **Verified absent/non-reused** | No parent key/project; creation requires owner re-auth/current-plan access and an event/consent need. |
| Cloudinary | [Cloudinary console](https://console.cloudinary.com/) | **Parent namespace created; no credential/assets** | `automatedempires/` is organization only; keep site assets local until a managed-media consumer exists. |
| Sentry | [Sentry](https://sentry.io/) — separate `automatedempires` project | **Project/governance/Doppler fixed** | Ownership, one alert, scrubbers/IP scrubbing configured; Vercel install/runtime event open. |
| Supabase | Not applicable | **Verified current** | The current parent site has no Supabase requirement. Do not create one without a feature and dated decision. |

## Provider boundary

- **Target state** — Every resource above, if used, belongs to AutomatedEmpires rather than to a child venture.
- **Target state** — Dashboard access uses named people or managed groups with least privilege and MFA.
- **Transfer-specific owner verification** — Confirm billing owner, emergency owner, recovery channel, and transfer authority for Vercel and the domain.
