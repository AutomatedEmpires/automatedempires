# Resend domain verification

**Snapshot:** 2026-07-12 (America/Los_Angeles)

The Resend Domains page reported six domains total, all **Verified** in `us-east-1`. GoDaddy Domain Connect submitted only the Resend records required for isolated sending: DKIM at `resend._domainkey`, an MX record at `send`, and an SPF record at `send`. Existing apex MX records were not edited.

This is a sending-authentication record. A Resend `Verified` state does not prove that a Reply-To mailbox exists, accepts mail, or is monitored.

## Verification and mailbox-preservation matrix

| Domain | Resend state / region | Existing apex mailbox and policy evidence | Preservation result |
|---|---|---|---|
| `exploreandearn.com` | **Verified** / `us-east-1` | No apex MX or apex SPF; DMARC is present. Resend receiving is disabled, so `support@exploreandearn.com` has no proven receiving route. | No apex MX existed to replace. Isolated Resend `send` MX/SPF and `resend._domainkey` records are verified. |
| `automatedempires.com` | **Verified** / `us-east-1` | Three apex MX records route to `ppe-hosted.com`. Apex SPF includes `_spf-usg2.ppe-hosted.com` and `secureserver.net`; DMARC is present. | The three hosted-mail MX records and apex policy were unchanged. Resend records are isolated below the apex. |
| `sweepza.com` | **Verified** / `us-east-1` | Apex MX is `0 sweepza-com.mail.protection.outlook.com` (Microsoft 365). The visible apex SPF authorizes only `secureserver.net` with `-all`; DMARC is present. | Microsoft 365 MX was unchanged. The SPF/MX mismatch is an alignment caution to investigate separately, not authorization to edit DNS here. |
| `logloads.com` | **Verified** / `us-east-1` | Apex MX is `0 logloads-com.mail.protection.outlook.com` (Microsoft 365). The visible apex SPF authorizes only `secureserver.net` with `-all`; DMARC is present. | Microsoft 365 MX was unchanged. The SPF/MX mismatch is an alignment caution to investigate separately, not authorization to edit DNS here. |
| `lakeandpinecleaning.com` | **Verified** / `us-east-1` | No apex MX or apex SPF; DMARC quarantine policy is present. No receiving mailbox provider is confirmed by DNS. | No apex MX existed to replace. Resend records are isolated below the apex. |
| `openresourceaccessnetwork.com` | **Verified** / `us-east-1` | Existing Mailgun MX pair at priority `60`, root Mailgun SPF, DKIM, and DMARC quarantine. | Existing Mailgun mail records were unchanged. Resend records are isolated below the apex; application transport remains Azure pending a separate migration decision. |

## Evidence notes

- The final Resend dashboard observation supersedes the earlier propagation state: all six domains are now verified.
- Authoritative DNS evidence for Sweepza and LogLoads confirms their Microsoft 365 MX records and the separate SPF caution shown above.
- Authoritative and authenticated-zone evidence for AutomatedEmpires confirms the three hosted-mail MX records and existing SPF includes.
- Earlier repository snapshots that say a new Resend selector was not found predate this execution and are superseded for the six domains' current Resend state only. They remain historical evidence for the pre-change apex mailbox posture.
- No provider-issued DKIM value is reproduced here.

## Prohibited inference

Do not infer any of the following from `Verified`: inbox ownership, reply delivery, runtime key placement, customer-send approval, suppression health, or provider migration completion. Those gates belong in the identity matrix, environment contract, and delivery test log.

## Deferred or disabled domains

| Venture | State | Reason |
|---|---|---|
| BidSpace | **Blocked / not added** | No confirmed production domain |
| Komfort Killz | **Disabled** | Venture instructions prohibit provider writes |
| Just Jesus Bro | **Disabled** | Venture instructions prohibit provider writes |
