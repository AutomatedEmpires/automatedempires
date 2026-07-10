# Resend Account and Domain Decision

**Prepared:** 2026-07-10  
**Execution state:** Provider and DNS plan complete. No plan purchase, team creation, key creation/revocation, domain creation/deletion, DNS write, or production email was performed.

## Current verified state

| Venture | Team / key boundary | Domain and sender state | Classification |
|---|---|---|---|
| Explore&Earn | Its key and LogLoads' key are distinct, but both have broad access to the same Resend team | Sole team domain `exploreandearn.com` is `failed`: one DKIM and two SPF-related records are failed; sending is enabled in metadata but the domain is not verified. `RESEND_FROM_EMAIL` is absent | DNS setup is safe after authenticated GoDaddy access; account co-tenancy remains a transfer blocker |
| LogLoads | `dev` and `prd` reuse one broad key in the Explore&Earn team | No LogLoads domain; `LOGLOADS_EMAIL_FROM` is absent, so code falls back to Resend's testing sender | Blocked by team/domain quota and founder payment/ownership decision |
| Sweepza | No Resend key in dev/stg/prd | No Resend domain or configured sender; root domain has Microsoft 365 mail | Requires founder decision; if email is required, provision a separate team and sending subdomain without changing Outlook MX |
| ORAN | No Resend boundary is required by the current map | Existing Mailgun MX/SPF are live | Completed decision: preserve Mailgun during the ORAN migration unless a separate mail-provider project explicitly replaces it |
| AutomatedEmpires | No defined transactional-mail consumer | Microsoft 365 receives root-domain mail | Completed decision: do not provision speculative Resend resources |
| BidSpace | No owned final domain | Not applicable | Blocked by missing domain |
| Lake & Pine | Candidate domain is unregistered | Not applicable | Blocked by missing domain and purchase |

The API does not expose the current billing plan. The observed one-domain quota is consistent with Resend Free, but must be described as a current plan/domain-quota blocker rather than a confirmed paid-plan limit.

## Account decision

Resend teams are the operative transfer boundary: each team has its own keys, billing, and usage. Separate keys inside one team do not separate ownership, domain quota, reputation, administrators, or billing.

| Option | Current public cost | Transfer quality | Decision |
|---|---|---|---|
| Upgrade the existing team to Pro and add every venture domain | Pro is currently $20/month for 50,000 emails and up to 10 domains | Poor: ventures remain co-tenants and cannot be transferred without separating the team later | Not recommended as the permanent portfolio structure |
| Keep the existing team for Explore&Earn; create one independent team for each additional mail-sending venture | New teams require a paid plan; current Pro entry price is $20/month per paid team | Strong: separate keys, billing, usage, domains, administrators, and recovery | **Recommended.** Create LogLoads first; create Sweepza only when transactional email is confirmed as a production requirement |
| Create no additional team | $0 incremental | LogLoads and Sweepza remain non-production for email | Accept only as an explicit defer decision; do not reuse Explore&Earn's sender/domain |

**Founder approval required:** authorize the recurring cost and owner/recovery administrators for each new team. This Pass 2 did not incur a charge.

## Safe DNS sequence

### Explore&Earn

1. Keep the existing domain resource; do not delete/recreate it merely because verification failed.
2. In the authenticated GoDaddy zone, export the current records and compare the three provider-issued records by exact host, type, value, priority, and TTL.
3. Add or correct only the provider-issued DKIM TXT and `send` subdomain SPF/MX records. These records do not require changing root web A/CNAME records or adding a root mailbox MX.
4. Restart provider verification and wait for all three records and the domain to become `verified`.
5. Set an Explore&Earn-owned from address in Doppler `stg`, deploy preview, and send a controlled delivery to an approved test mailbox. Verify SPF, DKIM, DMARC alignment, reply behavior, bounce/complaint handling, and application logging.
6. Promote the verified sender to `prd`; keep the current key until the complete sending path passes. Then replace the broad key with the least-privilege application key and revoke the old key only after a zero-use review.

### LogLoads

1. Create a separate LogLoads team after payment approval and record its billing/recovery administrators.
2. Add a transactional subdomain such as `mail.logloads.com` unless the founder selects another explicit sending identity. The root domain remains on GoDaddy Website Builder during runtime remediation.
3. Publish only provider-issued records. No root MX currently exists; adding the Resend return-path MX on its scoped subdomain is not an inbound-mailbox decision.
4. Create a least-privilege LogLoads key, set a real LogLoads from address, install both in Doppler `stg`, and remove the testing-sender fallback as a production path.
5. Verify delivery from the selected production runtime before promoting to `prd`. Do not revoke the current broad key until no LogLoads consumer uses it.

### Sweepza

1. Confirm transactional email is a launch requirement and approve an independent team.
2. Use a scoped sending subdomain, for example `mail.sweepza.com`, to protect root-domain reputation and avoid colliding with Microsoft 365.
3. Preserve the root Microsoft 365 MX, SPF, and mailbox behavior. Add only provider-issued records under the sending subdomain.
4. Install a Sweepza-only key/from address through Doppler `stg`, verify delivery, then promote. Never copy the Explore&Earn or LogLoads key.

## No-go conditions

- Authenticated DNS zone has not been exported.
- A provider-issued record conflicts with an existing mailbox, return-path, or DKIM selector and the owner is unknown.
- Team billing/recovery ownership is not recorded.
- The from address does not belong to the verified venture domain.
- Verification is partial/failed or delivery authentication does not align.
- The proposed fix reuses Explore&Earn's domain as the LogLoads or Sweepza production sender.

## Provider references

- [Resend teams are distinct by keys, billing, and usage](https://resend.com/docs/dashboard/settings/team)
- [Resend domain verification and sending-subdomain guidance](https://resend.com/docs/dashboard/domains/introduction)
- [Resend pricing and domain limits](https://resend.com/pricing)
- [Resend DNS verification troubleshooting](https://resend.com/docs/knowledge-base/what-if-my-domain-is-not-verifying)
