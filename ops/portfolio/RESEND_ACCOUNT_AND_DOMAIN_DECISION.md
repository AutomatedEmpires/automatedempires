# Resend Account and Domain Decision

**Prepared:** 2026-07-10

**Pass 3 state:** Explore&Earn DNS and provider-domain verification were completed without changing credentials or runtime.

**Pass 4 state:** A sending-only/domain-restricted Explore&Earn replacement was created and transferred without display into all approved Doppler and Vercel lanes; the superseded temporary replacement was revoked, while the broad provider key remains rollback. Explicit From/Reply-To identities and green source commits are complete. No delivery smoke, paid plan/team, or LogLoads/Sweepza transactional activation is claimed.

## Authenticated state

The current team is at its one-domain limit (`1/1`). It contains only verified `exploreandearn.com` in `us-east-1`, with sending enabled and receiving disabled. Explore&Earn now has a sending-only/domain-restricted runtime key. The previous broad Explore&Earn key is retained only for rollback pending delivery proof; the distinct LogLoads legacy key still has broad same-team authority. This remains account reputation, quota, billing, and transfer coupling even though the values differ.

## Mailbox identities

| Purpose | Identity | Boundary |
|---|---|---|
| AutomatedEmpires owner/admin | `jackson@automatedempires.com` | Human/admin mailbox; not a reason to create a parent Resend sender |
| Explore&Earn support/reply | `support@exploreandearn.com` | Configured Reply-To; transactional From remains `notifications@exploreandearn.com` |
| LogLoads support/reply | `support@logloads.com` | Real mailbox, but not a Resend sending-domain entitlement |
| Additional paid mailbox allocation | Unassigned | Do not assign to Sweepza, Lake & Pine, or another venture without a later explicit decision |

| Venture | Product/runtime evidence | Current boundary | Classification |
|---|---|---|---|
| Explore&Earn | Transactional mail package exists; From is `notifications@exploreandearn.com` and Reply-To is `support@exploreandearn.com` | Domain/key/lanes and merged source are green; exact-source Preview passed; real delivery is not authorized/proven; broad key retained | Credential/source/environment separation **safely fixed now**; delivery and broad-key retirement **blocked by production risk** |
| Sweepza | Approval/hold and winner publication paths call Resend | Key/from absent in every lane; calls must no-op truthfully | Truthful skip handling from PR #47 is retained in current `main` `4c0aad183fe9442e4546985b373b26498e38e6e7`; production `dpl_9N57qj7PHDteARUpVFWCKAxYutts` is `READY`, while a controlled skipped-behavior runtime smoke remains open. Independent team/domain is **blocked by payment/plan** under the explicit no-upgrade decision |
| LogLoads | `support@logloads.com` exists; feature source can send contact inquiries after saving an in-app notification | Supabase-canonical source is merged and production provenance is clean, but no LogLoads sending domain exists; the legacy broad same-team key is not an acceptable production boundary; mailbox existence does not provide transactional sending | Activation intentionally deferred; independent boundary **blocked by payment/plan** and delivery/rollback proof |
| ORAN | Existing DNS uses Mailgun | No Resend requirement | Preserve Mailgun unless a separately approved provider migration exists |
| AutomatedEmpires | No transactional-mail consumer established | No resource | Do not provision speculatively |
| BidSpace | No owned final domain | No resource | **Blocked by missing domain** |
| Lake & Pine | `lakeandpinecleaning.com` is owned; clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` is `READY`, but no transactional consumer is proven | No resource | Domain/source provenance blockers resolved; mail activation remains **blocked by production risk** until a reviewed consumer and delivery/rollback path exist |

## Paid-capacity decision

Keep the current team for Explore&Earn. For each additional mail-sending venture, the recommended transfer-grade boundary is a separate team/account with its own billing, recovery admins, domain, usage, and keys. Upgrading one parent team may add domains but retains co-tenancy and is not the permanent target.

Explicit payment approval is required for recurring cost, with named owner/recovery administrators for LogLoads and Sweepza. The current no-purchase decision means those production mail features remain disabled or truthfully report `skipped`; they must never reuse Explore&Earn's sending identity.

## Execution order

1. Explore&Earn: scoped key, lanes, identities, merged source, and exact-source Preview are complete. After separate authorization, prove delivery, SPF/DKIM/DMARC alignment, reply/bounce/complaint behavior, and application logging. Revoke broad key only after zero-use verification.
2. Sweepza: truthful skip handling is merged and present in `main`/`READY` production. Verify a controlled no-key flow returns `skipped`, never reports `sent`, and leaves `sent_at` null before treating runtime behavior as complete.
3. After payment approval, create a separate Sweepza team and scoped sending subdomain while preserving Microsoft 365 root MX. Install key/from values first in `stg`, smoke delivery, then promote.
4. After payment approval, create a separate LogLoads team/domain, remove the testing-sender fallback as a production path, install a scoped key/from/contact identity in `stg`, and smoke delivery/rollback on the accepted Supabase-canonical runtime before `prd`.
5. Never delete the existing team/domain or revoke either broad key until all dependent deployments are identified and replacement paths are verified.

## No-go conditions

- Do not add another venture to the Explore&Earn sending identity by default.
- Do not claim a no-op email was sent.
- Do not alter root Microsoft 365 or Mailgun MX during transactional-sending setup.
- Do not activate LogLoads mail on an unreproducible or architecturally unsafe production artifact.
- Do not record API/DKIM/SMTP values in Git, documentation, screenshots, or chat.
