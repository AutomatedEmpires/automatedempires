# Domain and DNS Matrix

**Public DNS/RDAP snapshot:** 2026-07-10
**Pass 2 provider-email snapshot:** 2026-07-10; Resend status was refreshed through its read-only API without recording DNS values.
**Pass 3 authenticated registrar snapshot:** 2026-07-10; authenticated GoDaddy portfolio control was confirmed. Full zones were inspected for all ten owned domains. Explore&Earn, Sweepza, and LogLoads were captured before the listed additions, and every newly added record was checked in authoritative public DNS without recording provider key material.

This matrix records both public registration/DNS observations and the explicitly labeled authenticated registrar evidence. Public RDAP and DNS evidence alone does not prove control of a registrar account. DNS can change after the snapshot date, so record changes must be re-verified immediately before execution.

## Authenticated GoDaddy portfolio

All ten domains below were visible in the authenticated GoDaddy account. GoDaddy is the registrar and authoritative nameserver provider for each, and domain privacy is on for each. Auto-renew is on for nine domains and off only for ORAN.

| Domain | Venture / role | Privacy | Auto-renew | Pass 3 classification |
|---|---|---:|---:|---|
| `exploreandearn.com` | Explore&Earn | On | On | **completed** — authenticated ownership and full-zone inspection |
| `automatedempires.com` | AutomatedEmpires | On | On | **completed** — authenticated ownership |
| `sweepza.com` | Sweepza | On | On | **completed** — authenticated ownership |
| `logloads.com` | LogLoads | On | On | **completed** — authenticated ownership |
| `automatedstartups.com` | Parent portfolio domain | On | On | **completed** — authenticated ownership |
| `theresumebot.com` | Adjacent portfolio domain | On | On | **completed** — authenticated ownership |
| `automatedinterviewer.com` | Adjacent portfolio domain | On | On | **completed** — authenticated ownership |
| `pinnedatlas.com` | Adjacent portfolio domain | On | On | **completed** — authenticated ownership |
| `lakeandpinecleaning.com` | Lake & Pine | On | On | **completed** — authenticated ownership; this replaces the incorrect Pass 2 candidate `lakepinecleaning.com` |
| `openresourceaccessnetwork.com` | ORAN | On | Observed **Off** before Pass 4 | Renewal intent **completed** (approved); provider toggle result still requires authenticated verification |

## Current public state

| Venture | Candidate domain | Registration / nameservers | Web routing | MX posture | DMARC | Resend DKIM observation | Domain state |
|---|---|---|---|---|---|---|---|
| AutomatedEmpires | `automatedempires.com` | Registered at GoDaddy; authenticated account control confirmed; GoDaddy nameservers | Apex resolves to GoDaddy Website Builder; `www` redirects to the apex | Three-MX `ppe-hosted.com` set; Microsoft records are service/verification records, not the MX target | Present | No Resend DKIM selector found | **completed** for ownership verification; web-route replacement remains **blocked by production risk** until reviewed production/rollback proof |
| Explore&Earn | `exploreandearn.com` | Registered at GoDaddy; authenticated account control/full zone; GoDaddy nameservers | Apex/`www` Vercel | No root MX; Resend sending MX only under `send` | Present | Provider-verified | **safely fixed now** — Resend verified; Clerk DNS Verified and SSL Issued. Both runtime activations remain incomplete |
| ORAN | `openresourceaccessnetwork.com` | Registered at GoDaddy; authenticated control; GoDaddy nameservers; auto-renew was observed off, founder now approves enabling it, but final toggle state is unverified | Apex A record is `20.115.232.12`; HTTP returns Azure `404 Site Not Found` and HTTPS presents an invalid certificate | Mailgun MX | Present | No Resend DKIM selector found | Ownership/renewal decision **completed**; provider auto-renew verification and routing remain open, with routing **blocked by production risk** |
| BidSpace | No domain discovered; purchase explicitly deferred | — | — | — | — | — | Production domain/email **blocked by missing domain**; dev/Preview setup may proceed |
| Lake & Pine | `lakeandpinecleaning.com` | Registered at GoDaddy; authenticated control; 8-record full zone | Two Vercel apex A records and Vercel `www` CNAME; clean venture release still not approved | No MX or root SPF | DMARC quarantine | None found | Ownership/zone **completed**; cutover **blocked by production risk**, not missing domain |
| Sweepza | `sweepza.com` | Registered at GoDaddy; authenticated control/full zone | Apex/`www` Vercel | Microsoft 365 preserved | Present | None found | **safely fixed now** — five Clerk CNAMEs resolve; Clerk DNS Verified and SSL Issued. Runtime activation incomplete |
| LogLoads | `logloads.com` | Registered at GoDaddy; authenticated control/full zone | GoDaddy Website Builder; `www` apex | No MX | Present | None found | **safely fixed now** — five Clerk CNAMEs resolve; Clerk DNS Verified and SSL Issued. Runtime/web cutover remains production-risk gated |

DMARC was present on every registered candidate domain in the public snapshot. The later authenticated Resend check establishes that Explore&Earn's domain existed but failed its provider DNS checks before Pass 3 repair; no provider-issued key material is reproduced here. For other registered candidates, the lack of an observed Resend selector does not prove that no other email-provider DKIM records exist.

## Explore&Earn authenticated zone evidence

Before the Pass 3 change, the full authenticated zone contained eight records:

| Type | Name | Target / policy | TTL |
|---|---|---|---:|
| A | `@` | `216.150.1.1` | 1800 |
| A | `@` | `216.150.16.1` | 600 |
| NS | `@` | `ns21.domaincontrol.com` | 3600 |
| NS | `@` | `ns22.domaincontrol.com` | 3600 |
| CNAME | `www` | `7b99ac6b0e816456.vercel-dns-017.com` | 3600 |
| CNAME | `_domainconnect` | `_domainconnect.gd.domaincontrol.com` | 3600 |
| SOA | `@` | Primary nameserver `ns21.domaincontrol.com` | 3600 |
| TXT | `_dmarc` | Quarantine policy with relaxed DKIM/SPF alignment and GoDaddy aggregate reporting | 3600 |

There was no root MX or SPF record. Pass 3 added three provider-issued Resend records and five non-colliding Clerk CNAMEs. All resolve exactly; Resend is verified, Clerk DNS is Verified, and Clerk SSL is Issued. Zone increased 8→16. No runtime key was installed/deployed.

## Sweepza authenticated zone evidence

The authenticated zone contained 19 records before remediation. Five non-colliding Clerk CNAMEs were added without modifying web/Microsoft mail/service records, increasing it to 24. All resolve; Clerk DNS is Verified and SSL Issued. Production auth is not deployed and the dev user is untouched.

## LogLoads authenticated zone evidence

The authenticated zone contained seven records before remediation: Website Builder apex, `www`, `_domainconnect`, two NS, SOA, DMARC. Five non-colliding Clerk CNAMEs increased it to 12. All resolve; Clerk DNS is Verified and SSL Issued. Production auth is not deployed and dev remains untouched.

## Additional authenticated zone summaries

| Domain | Records | Web / service routing | Mail and policy |
|---|---:|---|---|
| `automatedempires.com` | 23 | Website Builder apex; `www` apex; Microsoft/GoDaddy service CNAMEs; GoDaddy NS25/26 | Hosted-mail three-MX set, Microsoft/OpenAI verification, one consolidated root SPF, DMARC monitoring, two SIP SRV |
| `openresourceaccessnetwork.com` | 14 | Broken Azure apex A; `www` apex; Mailgun `email`; GoDaddy NS11/12 | Mailgun MX pair priority 60, root Mailgun SPF, DKIM, DMARC quarantine |
| `lakeandpinecleaning.com` | 8 | Dual Vercel apex A; `www` to Vercel; GoDaddy NS39/40/domain-connect/SOA | DMARC quarantine; no MX/SPF |
| `automatedstartups.com` | 13 | Website Builder apex; `www` apex; Mailgun `email`; payment/service CNAMEs; GoDaddy NS75/76 | Mailgun MX pair priority 60, root Mailgun SPF, DKIM, DMARC quarantine |
| `theresumebot.com` | 15 | Vercel apex/`www`; GoDaddy NS21/22/domain-connect/SOA | Google Workspace five-MX set, verification TXT, consolidated SPF; no DMARC visible |
| `automatedinterviewer.com` | 8 | Website Builder apex/`www`; payment/service CNAMEs; GoDaddy NS47/48 | DMARC quarantine; no MX/SPF |
| `pinnedatlas.com` | 18 | Dual Vercel apex A; Vercel `www`; Microsoft/GoDaddy service CNAMEs; GoDaddy NS53/54 | Microsoft 365 MX/verification, root SPF, DMARC quarantine, two SIP SRV |

No key material is reproduced.

## Safe DNS actions and blockers

| Venture | Required next action | Safety constraint |
|---|---|---|
| AutomatedEmpires | Default `ed91ece…` has clean merged-main production `dpl_5sc…QLpzT` `READY`; verify functional provider-host smoke and rollback, then replace the GoDaddy Website Builder route reversibly | Source/main provenance **fixed**; DNS cutover **blocked by production risk** until functional smoke/rollback |
| Explore&Earn | Scoped Resend key/identities/source/Preview are green; obtain separate delivery authorization and prove mail, while configuring dark Clerk auth in Preview | DNS/SSL and scoped mail configuration are **completed**; mail delivery and auth activation **blocked by production risk**; preserve rollback keys |
| ORAN | Required checks are green on draft PR #58 head `6d5caf2…`, but ancillary checks, the data lane, exact-SHA Preview, production host, and rollback remain red; confirm Mailgun remains intended | Do not change A/Mailgun records until a **functional** rollback exists. Current Azure target is already 404/invalid TLS |
| BidSpace | Keep production custom-domain/DNS work deferred; use controlled local/Vercel Preview origins | **blocked by missing domain** for production only; do not invent or purchase a domain in this pass |
| Lake & Pine | PR #1 merged as default `1b6a877…`; clean main production `dpl_EHG…MDWVk` is `READY`. Complete functional rollback/domain smoke before changing web records | Source/main provenance **fixed**; DNS/email cutover **blocked by production risk**, not missing domain |
| Sweepza | Configure the DNS/SSL-verified production instance, then install production keys only in a dark/preview environment and prove the auth/webhook flow before production replacement; confirm Microsoft 365 remains the intended mailbox provider | The five Clerk CNAMEs, provider DNS verification, and SSL are **safely fixed now**, but runtime activation is **blocked by production risk**. Do not alter Microsoft MX records or the live development-backed auth environment |
| LogLoads | PR #6 final source `f280ef4…` is merged to default `9c9e107…` and main production `dpl_Xxr…8dPtF` is `READY`. Prove live-upgrade/provenance/rate-limit/provider activation/rollback before identity or web cutover | Clerk DNS/SSL and source/production provenance **fixed**; live data, runtime, and web cutover **blocked by production risk** |

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
