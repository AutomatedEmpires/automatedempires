# Resend Domain Matrix

**Verified provider snapshot:** 2026-07-10
**Pass 2 status:** Refreshed through read-only Resend API calls and environment mapping. Billing-plan identity is not exposed by the API.
**Security note:** API values, DKIM material, SMTP credentials, and credential fingerprints are intentionally excluded.

A distinct API key does not create an independent account or sending-domain boundary. DNS verification must be established from current provider-issued records and authoritative DNS, not inferred from source code.

## Current venture boundaries

| Venture | Current account/domain evidence | Key separation | Contamination or blocker | Safe next action |
|---|---|---|---|---|
| AutomatedEmpires | No AutomatedEmpires-specific Resend domain was verified | Unknown | No contamination confirmed | Create a sending identity only for a defined parent-company mail use case; verify DNS ownership first. |
| Explore&Earn | The sole domain in the inspected Resend team is `exploreandearn.com`; provider status is **`failed`**, with one DKIM and two SPF checks failed. Sending is enabled in metadata and receiving is disabled, but the domain is not verified | **Confirmed distinct key from LogLoads**. Both keys can list administrative resources, so both are broad/full-access rather than sending-only | **Confirmed account-level co-tenancy with LogLoads**; key duplication was not found. `RESEND_FROM_EMAIL` is absent | Preserve the domain while publishing only current provider-issued DNS records. Reach `verified` and prove delivery, then replace the broad runtime key with a sending-only, domain-restricted key. Do not authorize LogLoads production mail from this identity. |
| ORAN | No ORAN Resend domain/account resource was verified | Unknown | No Resend contamination confirmed | Reconcile the intended mail provider before adding Resend; preserve existing mailbox and transactional-mail records. |
| BidSpace | No final owned domain was verified, so a production sending domain cannot be selected safely | Not applicable | **Blocked:** domain decision and ownership | Do not invent a domain or create placeholder production mail resources. |
| Lake & Pine | The candidate production domain is not registered; no Resend resource was verified | Not applicable | **Blocked:** domain purchase or final naming decision | Obtain human approval for the domain decision before any Resend or DNS work. |
| Sweepza | No Sweepza-specific Resend account/domain was provider-verified, and no Resend key or from-address name is present in `dev`, `stg`, or `prd`; the registered domain also has an existing mailbox provider | Not configured | No sharing was confirmed; transactional email is inactive | If transactional email is required, use a Sweepza-owned team/domain or scoped sending subdomain and preserve existing mailbox MX records. Do not reuse the Explore&Earn team by default. |
| LogLoads | A **separate LogLoads API key** exists in the same team used by Explore&Earn. `dev` and `prd` reuse that LogLoads key; there is no LogLoads domain. A prior create attempt returned HTTP `403` at the current domain quota | Key differs from Explore&Earn, but it is broad/full-access and account capacity is shared. `LOGLOADS_EMAIL_FROM` is absent | **Confirmed account-level contamination and current-plan/domain-quota blocker**; code otherwise falls back to the provider's testing sender | Prefer a separate LogLoads team/account for transferability. If the founder instead approves a plan upgrade, create and verify a LogLoads-owned domain, replace the broad key with a sending-only domain-restricted key, and configure an explicit from-address before production use. |

## Safe remediation sequence

1. Treat the LogLoads domain-capacity error as a current-plan quota and purchase gate; do not retry around it. The observed one-domain behavior is consistent with Free, but the billing dashboard must confirm the actual plan.
2. Prefer a separate LogLoads team/account for independent transfer. An approved upgrade can increase domain capacity but does not create account ownership separation.
3. Fix the failed Explore&Earn DNS state before declaring any sending path ready. Create the LogLoads domain only after its account boundary and domain control are decided.
4. Add only provider-issued DNS records, preserve existing MX records, and verify SPF, DKIM, DMARC, and a real delivery independently.
5. Replace runtime full-access keys with sending-only, domain-restricted keys. Deploy and verify replacements before removing current keys.

At this snapshot, published pricing lists one domain on Free and ten domains on Pro. A Pro upgrade is a paid founder gate; a separate team/account remains the cleaner transfer boundary.
