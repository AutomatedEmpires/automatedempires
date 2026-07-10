# ORAN provider links

| Provider | Resource | State | Control plane |
|---|---|---|---|
| GitHub | `AutomatedEmpires/Open-Resource-Access-Network`; `main` `1dc1291d61cc9f27ee830f980e32eabd52248083`; candidate `217cd962de1633321cae49327dbc089fc4ad7377` | Canonical repository / migration review required | https://github.com/AutomatedEmpires/Open-Resource-Access-Network |
| Doppler | Project oran; dev/stg/prd | Exists; metadata only | https://dashboard.doppler.com/ |
| Vercel | Project `oran`; `prj_pQlCLP4RXGr2eJTo7fzZyMPX9QLy`; root `.`; Node 24 | Empty deferred shell; no Git/deploy/variables/domain; exact-SHA preview pending | https://vercel.com/dashboard |
| Supabase | tpatxospkuqvajusuryw | Healthy; schema/ledger reconciliation required | https://supabase.com/dashboard/project/tpatxospkuqvajusuryw |
| Azure | Legacy/current resources described by repository docs; public A `20.115.232.12` | Authenticated live inventory not completed; public target is broken and is not a functional rollback | https://portal.azure.com/ |
| GoDaddy / DNS | openresourceaccessnetwork.com | Public registration/DNS verified; authenticated control unverified | https://dcc.godaddy.com/ |
| Mailgun | MX/SPF visible in public DNS | Current operational intent unverified | https://app.mailgun.com/ |
| Sentry | Integration referenced | ORAN project identity unverified | https://sentry.io/ |

Provider links are navigation aids, not credentials. Re-check ownership, billing owner, recovery owner, and environment before a transfer or cutover. Do not connect Vercel Git until a preview-approved branch is ready to replace the Azure-oriented default branch safely.
