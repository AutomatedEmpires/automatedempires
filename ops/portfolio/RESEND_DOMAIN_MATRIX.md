# Resend Domain Matrix

**Verified provider snapshot:** 2026-07-10
**Security note:** API values, DKIM material, SMTP credentials, and credential fingerprints are intentionally excluded.

A distinct API key does not create an independent account or sending-domain boundary. DNS verification must be established from current provider-issued records and authoritative DNS, not inferred from source code.

## Current venture boundaries

| Venture | Current account/domain evidence | Key separation | Contamination or blocker | Safe next action |
|---|---|---|---|---|
| AutomatedEmpires | No AutomatedEmpires-specific Resend domain was verified | Unknown | No contamination confirmed | Create a sending identity only for a defined parent-company mail use case; verify DNS ownership first. |
| Explore&Earn | The sole domain in the inspected one-domain Resend account is `exploreandearn.com`; provider status is `not_started`, sending is enabled, and receiving is disabled | **Confirmed distinct key from LogLoads**, but both keys enter the same account | **Confirmed account-level co-tenancy with LogLoads**; key duplication was not found and DNS verification is incomplete | Preserve the existing account/domain, publish only provider-issued DNS records, verify the domain, and prove delivery. Do not authorize LogLoads production mail from the Explore&Earn identity. |
| ORAN | No ORAN Resend domain/account resource was verified | Unknown | No Resend contamination confirmed | Reconcile the intended mail provider before adding Resend; preserve existing mailbox and transactional-mail records. |
| BidSpace | No final owned domain was verified, so a production sending domain cannot be selected safely | Not applicable | **Blocked:** domain decision and ownership | Do not invent a domain or create placeholder production mail resources. |
| Lake & Pine | The candidate production domain is not registered; no Resend resource was verified | Not applicable | **Blocked:** domain purchase or final naming decision | Obtain human approval for the domain decision before any Resend or DNS work. |
| Sweepza | No Sweepza-specific Resend account/domain was provider-verified; the registered domain also has an existing mailbox provider | Unknown | Unknown; no sharing was confirmed | If transactional email is required, use a scoped sending subdomain and preserve existing mailbox MX records. Do not reuse the Explore&Earn account by default. |
| LogLoads | A **separate LogLoads API key** exists in the same one-domain account used by Explore&Earn. Creating a LogLoads domain returned provider HTTP `403` because the paid plan's domain limit was reached | Key is distinct, but account and domain capacity are shared | **Confirmed account-level contamination and paid-plan blocker**; LogLoads has no independent sending domain | Founder chooses either a paid capacity change or a separate LogLoads account. Do not reuse the Explore&Earn from-address/domain as a production workaround. |

## Safe remediation sequence

1. Treat the LogLoads domain-capacity error as a paid-plan founder gate; do not retry around the quota.
2. Decide between a separate LogLoads account and an approved account upgrade based on transferability, billing, and recovery ownership.
3. Create the LogLoads domain only after the account boundary is decided and domain control is verified.
4. Add only provider-issued DNS records, preserve existing MX records, and verify SPF, DKIM, DMARC, and a real delivery independently.
5. Keep API access scoped per venture and environment even if a temporary account-level exception remains documented.
