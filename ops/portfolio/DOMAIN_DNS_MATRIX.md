# Domain and DNS Matrix

**Public DNS/RDAP snapshot:** 2026-07-10

This matrix records public registration and DNS observations. Public RDAP and DNS evidence does not prove authenticated control of a registrar account. DNS can change after the snapshot date, so record changes must be re-verified immediately before execution.

## Current public state

| Venture | Candidate domain | Registration / nameservers | Web routing | MX posture | DMARC | Resend DKIM observation | Domain state |
|---|---|---|---|---|---|---|---|
| AutomatedEmpires | `automatedempires.com` | Registered at GoDaddy; GoDaddy nameservers | Apex resolves to GoDaddy Website Builder; `www` redirects to the apex | Microsoft Outlook / Microsoft 365 MX | Present | No Resend DKIM selector found | Registered; multiple SPF records may conflict and authenticated account control still must be verified |
| Explore&Earn | `exploreandearn.com` | Registered at GoDaddy; GoDaddy nameservers | Apex and `www` resolve to Vercel | No MX records found | Present | No Resend DKIM selector found | Registered and routed to the canonical web runtime |
| ORAN | `openresourceaccessnetwork.com` | Registered at GoDaddy; GoDaddy nameservers | Apex A record is `20.115.232.12`; HTTP returns Azure `404 Site Not Found` and HTTPS presents an invalid certificate | Mailgun MX | Present | No Resend DKIM selector found | Registered, but the public web target is broken; the old documented Azure hostname no longer resolves |
| BidSpace | No domain discovered | — | — | — | — | — | **Blocked:** final name/domain decision and purchase or ownership verification required |
| Lake & Pine | `lakepinecleaning.com` | Unregistered; no DNS | No owned-domain route; `lakeandpine.vercel.app` is a provider hostname only | None | None | None | **Blocked:** domain purchase requires human approval |
| Sweepza | `sweepza.com` | Registered at GoDaddy; GoDaddy nameservers | Apex and `www` resolve to Vercel | Microsoft Outlook / Microsoft 365 MX | Present | No Resend DKIM selector found | Registered and routed to the canonical web runtime |
| LogLoads | `logloads.com` | Registered at GoDaddy; GoDaddy nameservers | Apex resolves to GoDaddy Website Builder; `www` redirects to the apex | No MX records found | Present | No Resend DKIM selector found | Registered, but not cut over to the Vercel project |

DMARC was present on every registered candidate domain in this snapshot. No registered candidate exposed the expected evidence of a Resend DKIM selector. This does not prove that no other email provider DKIM records exist.

## Safe DNS actions and blockers

| Venture | Required next action | Safety constraint |
|---|---|---|
| AutomatedEmpires | Produce and verify a successful Vercel deployment, then decide whether the public site should replace the GoDaddy Website Builder route | Do not change apex or `www` until the Vercel deployment and rollback target are verified |
| Explore&Earn | Publish the exact provider-issued records for the existing Resend domain and complete provider verification | Preserve the working Vercel web records and existing DMARC policy; the Resend domain is currently `not_started` |
| ORAN | Repair or replace the broken public web target only after the Vercel-convergence branch passes preview verification; confirm Mailgun remains the intended mail provider | Do not change the A record or Mailgun MX until a tested rollback/cutover plan exists |
| BidSpace | Select the final product/domain name and obtain purchase approval | Do not invent a domain or create placeholder production DNS |
| Lake & Pine | Obtain approval to purchase `lakepinecleaning.com` or select another final domain | Domain purchase is a founder gate; do not configure fake DNS or production email beforehand |
| Sweepza | Confirm Microsoft 365 remains the intended mailbox provider; use a scoped sending subdomain if Resend is added | Do not overwrite Microsoft MX records when adding transactional email authentication |
| LogLoads | Repair and verify the Vercel production deployment, then plan an apex/`www` cutover from GoDaddy Website Builder; provision a venture-owned sending identity after the Resend account/domain blocker is resolved | Do not cut over DNS while production remains `ERROR`; preserve a rollback path and do not claim email readiness without MX/DKIM |

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
