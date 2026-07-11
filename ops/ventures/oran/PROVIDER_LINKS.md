# ORAN provider links

| Provider | Resource | State | Control plane |
|---|---|---|---|
| GitHub | Canonical repo; base `217cd962…`; local remediation `5ec356195eb2bc13efc1e07c536a83a76bf036e7` | Local checks pass; commit unpushed/no PR | https://github.com/AutomatedEmpires/Open-Resource-Access-Network |
| Doppler | Project oran; dev/stg/prd | Exists; metadata only | https://dashboard.doppler.com/ |
| Vercel | Project `oran`; `prj_pQlCLP4RXGr2eJTo7fzZyMPX9QLy`; Node 24, `live=false` | No Git/deploy/domain; Preview blocked by unpushed branch, scoped credentials/runtime vars, ledger | https://vercel.com/dashboard |
| Supabase | tpatxospkuqvajusuryw | Healthy; schema/ledger reconciliation required | https://supabase.com/dashboard/project/tpatxospkuqvajusuryw |
| Azure | Legacy/current resources described by repository docs; public A `20.115.232.12` | Authenticated live inventory not completed; public target is broken and is not a functional rollback | https://portal.azure.com/ |
| GoDaddy / DNS | openresourceaccessnetwork.com | Authenticated ownership/zone verified; auto-renew off; web target broken | https://dcc.godaddy.com/ |
| Mailgun | MX/SPF visible in public DNS | Current operational intent unverified | https://app.mailgun.com/ |
| Sentry | Integration referenced | ORAN project identity unverified | https://sentry.io/ |

Provider links are navigation aids, not credentials. Re-check ownership, billing owner, recovery owner, and environment before a transfer or cutover. Do not connect Vercel Git until a preview-approved branch is ready to replace the Azure-oriented default branch safely.
