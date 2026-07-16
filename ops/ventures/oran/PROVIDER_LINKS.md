# ORAN provider links

| Provider | Resource | State | Control plane |
|---|---|---|---|
| GitHub | [Historical PR #58](https://github.com/AutomatedEmpires/Open-Resource-Access-Network/pull/58) at `6d5caf2…`; merged PR #67/current source `8da2101` | Required checks and reviewed baselines accepted through #67; product/data/runtime/support/rollback gates remain | https://github.com/AutomatedEmpires/Open-Resource-Access-Network |
| Doppler | Project oran; dev/stg/prd | ORAN-only Sentry DSN/org/project identifiers installed; broader runtime config absent | https://dashboard.doppler.com/ |
| Vercel | Project `oran` (`…X9QLy`); protected noindex Preview `dpl_9QdKsovZZcASrdgCqENysSF9XSNd` at `8da2101` | `/` and `/status` return `200`; runtime provider variables are empty; no custom domain, public rollout, product acceptance, or functional rollback | https://vercel.com/dashboard |
| Supabase | Project fingerprint `…vajusuryw` | Healthy; schema/ledger reconciliation required | https://supabase.com/dashboard/projects |
| Azure | Legacy/current resources described by repository docs; public A `20.115.232.12` | Authenticated live inventory not completed; public target is broken and is not a functional rollback | https://portal.azure.com/ |
| GoDaddy / DNS | openresourceaccessnetwork.com | Authenticated ownership/zone; auto-renew approved but toggle result unverified; web target broken | https://dcc.godaddy.com/ |
| Mailgun | MX/SPF visible in public DNS | Current operational intent unverified | https://app.mailgun.com/ |
| Sentry | Separate `oran` project; own identifiers in Doppler all lanes | Ownership/one alert/scrubbers/IP scrubbing fixed; traces `0`; Vercel event open | https://sentry.io/ |

Provider links are navigation aids, not credentials. Re-check ownership, billing owner, recovery owner, and environment before a transfer or cutover. Preserve the protected exact-SHA Preview as evidence; do not attach DNS or open access until the chat-first MVP, data, runtime, support, and rollback gates pass.
