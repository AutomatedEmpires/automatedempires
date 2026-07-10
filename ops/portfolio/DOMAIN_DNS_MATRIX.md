# Domain and DNS Matrix

**Public DNS/RDAP snapshot:** 2026-07-10
**Pass 2 provider-email snapshot:** 2026-07-10; Resend status was refreshed through its read-only API without recording DNS values.

This matrix records public registration and DNS observations. Public RDAP and DNS evidence does not prove authenticated control of a registrar account. DNS can change after the snapshot date, so record changes must be re-verified immediately before execution.

## Current public state

| Venture | Candidate domain | Registration / nameservers | Web routing | MX posture | DMARC | Resend DKIM observation | Domain state |
|---|---|---|---|---|---|---|---|
| AutomatedEmpires | `automatedempires.com` | Registered at GoDaddy; GoDaddy nameservers | Apex resolves to GoDaddy Website Builder; `www` redirects to the apex | Microsoft Outlook / Microsoft 365 MX | Present | No Resend DKIM selector found | Registered; multiple SPF records may conflict and authenticated account control still must be verified |
| Explore&Earn | `exploreandearn.com` | Registered at GoDaddy; GoDaddy nameservers | Apex and `www` resolve to Vercel | No MX records found | Present | Resend domain exists but is **`failed`**; provider reports one DKIM and two SPF checks failed | Registered and routed to the canonical web runtime; transactional sending is not verified |
| ORAN | `openresourceaccessnetwork.com` | Registered at GoDaddy; GoDaddy nameservers | Apex A record is `20.115.232.12`; HTTP returns Azure `404 Site Not Found` and HTTPS presents an invalid certificate | Mailgun MX | Present | No Resend DKIM selector found | Registered, but the public web target is broken; the old documented Azure hostname no longer resolves |
| BidSpace | No domain discovered | — | — | — | — | — | **Blocked:** final name/domain decision and purchase or ownership verification required |
| Lake & Pine | `lakepinecleaning.com` | Unregistered; no DNS | No owned-domain route; `lakeandpine.vercel.app` is a provider hostname only | None | None | None | **Blocked:** domain purchase requires human approval |
| Sweepza | `sweepza.com` | Registered at GoDaddy; GoDaddy nameservers | Apex and `www` resolve to Vercel | Microsoft Outlook / Microsoft 365 MX | Present | No Resend DKIM selector found | Registered and routed to the canonical web runtime |
| LogLoads | `logloads.com` | Registered at GoDaddy; GoDaddy nameservers | Apex resolves to GoDaddy Website Builder; `www` redirects to the apex | No MX records found | Present | No Resend DKIM selector found | Registered, but not cut over to the Vercel project |

DMARC was present on every registered candidate domain in the public snapshot. The later authenticated Resend check establishes that Explore&Earn's domain exists but failed its provider DNS checks; no record values are reproduced here. For other registered candidates, the lack of an observed Resend selector does not prove that no other email-provider DKIM records exist.

## Safe DNS actions and blockers

| Venture | Required next action | Safety constraint |
|---|---|---|
| AutomatedEmpires | Produce and verify a successful Vercel deployment, then decide whether the public site should replace the GoDaddy Website Builder route | Do not change apex or `www` until the Vercel deployment and rollback target are verified |
| Explore&Earn | Re-fetch the current provider-issued records, reconcile the one failed DKIM and two failed SPF checks, then complete provider verification and a delivery proof | Preserve the working Vercel web records and existing DMARC policy; the Resend domain is currently `failed` |
| ORAN | Repair or replace the broken public web target only after exact candidate `217cd962de1633321cae49327dbc089fc4ad7377` passes preview and production-host verification; confirm Mailgun remains intended | Do not change the A record or Mailgun MX until a **functional** rollback exists. Restoring Azure A `20.115.232.12` restores prior DNS state but not service because that target is already 404/invalid TLS |
| BidSpace | Select the final product/domain name and obtain purchase approval | Do not invent a domain or create placeholder production DNS |
| Lake & Pine | First normalize source and replace dirty deployment `dpl_AaAEZZz9Ma442TDNygN6ypLsQCMt` with a clean main-based release; then obtain approval to purchase `lakepinecleaning.com` or select another domain | Domain purchase is a founder gate; preserve the current provider deployment as temporary rollback evidence and do not configure fake DNS or production email beforehand |
| Sweepza | Confirm Microsoft 365 remains the intended mailbox provider; use a scoped sending subdomain if Resend is added | Do not overwrite Microsoft MX records when adding transactional email authentication |
| LogLoads | Decide and test the persistent-volume single-node versus stateless Vercel runtime before selecting a production host; only then plan an apex/`www` cutover and venture-owned sending identity | Do not promote Vercel production or change DNS merely after fixing `ENOENT`. Keep the existing Website Builder route as the current public rollback until the chosen runtime, state recovery, and rollback pass |

## Record-change checklist

Before changing any registered domain:

1. Confirm the domain is visible in the authenticated registrar account.
2. Export or record the existing DNS zone without exposing secret values.
3. Verify the intended Vercel/Azure target and its rollback target.
4. Preserve mailbox-provider MX records unless an approved mail migration is underway.
5. Validate SPF composition to avoid multiple conflicting SPF records.
6. Add provider-specific DKIM records exactly as issued; do not guess selector names.
7. Re-evaluate DMARC only after SPF and DKIM alignment are verified.
8. Verify apex, `www`, mail, and transactional sending independently after propagation.
