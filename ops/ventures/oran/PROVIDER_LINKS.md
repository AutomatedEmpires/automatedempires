# ORAN provider links

| Provider | Resource | State | Control plane |
|---|---|---|---|
| GitHub | [Draft PR #58](https://github.com/AutomatedEmpires/Open-Resource-Access-Network/pull/58), exact head `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da`; default `main` `1dc1291d61cc9f27ee830f980e32eabd52248083` | Required core checks green; Codecov patch/Visual Regression/runbook freshness fail; draft data-lane/Preview/rollback gate remains | https://github.com/AutomatedEmpires/Open-Resource-Access-Network |
| Doppler | Project oran; dev/stg/prd | ORAN-only Sentry DSN/org/project identifiers installed; broader runtime config absent | https://dashboard.doppler.com/ |
| Vercel | Project `oran` (`…X9QLy`); Node 24, `live=false` | Zero deployments/domain; Preview blocked by safe data/credential lane, schema authority, and rollback | https://vercel.com/dashboard |
| Supabase | Project fingerprint `…vajusuryw` | Healthy; schema/ledger reconciliation required | https://supabase.com/dashboard/projects |
| Azure | Legacy/current resources described by repository docs; public A `20.115.232.12` | Authenticated live inventory not completed; public target is broken and is not a functional rollback | https://portal.azure.com/ |
| GoDaddy / DNS | openresourceaccessnetwork.com | Authenticated ownership/zone; auto-renew approved but toggle result unverified; web target broken | https://dcc.godaddy.com/ |
| Mailgun | MX/SPF visible in public DNS | Current operational intent unverified | https://app.mailgun.com/ |
| Sentry | Separate `oran` project; own identifiers in Doppler all lanes | Ownership/one alert/scrubbers/IP scrubbing fixed; traces `0`; Vercel event open | https://sentry.io/ |

Provider links are navigation aids, not credentials. Re-check ownership, billing owner, recovery owner, and environment before a transfer or cutover. Do not connect Vercel Git until a preview-approved branch is ready to replace the Azure-oriented default branch safely.
