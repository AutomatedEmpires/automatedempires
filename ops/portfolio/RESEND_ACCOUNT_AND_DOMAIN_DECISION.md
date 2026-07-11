# Resend Account and Domain Decision

**Prepared:** 2026-07-10  
**Pass 3 state:** Explore&Earn DNS and provider-domain verification are complete. No API key was created/revoked, no runtime value was synchronized, no message was sent, and no paid plan/team was created.

## Authenticated state

The current team is at its one-domain limit (`1/1`). It contains only verified `exploreandearn.com` in `us-east-1`, with sending enabled and receiving disabled. Two existing API keys are distinct but both are broad/full-access: one is used by Explore&Earn `dev`; the other is reused by LogLoads `dev`/`prd`. This is account authority, reputation, quota, billing, and transfer coupling even though the key values differ.

| Venture | Product/runtime evidence | Current boundary | Classification |
|---|---|---|---|
| Explore&Earn | Transactional mail package exists; explicit sender is absent | Domain DKIM/MX/SPF now resolve and Resend reports `verified`; existing key remains broad, runtime sync/smoke pending | DNS **completed**; scoped key and delivery **blocked by production risk** |
| Sweepza | Approval/hold and winner publication paths call Resend | Key/from names are absent in every lane, so calls no-op; current code falsely logs these skips as `sent` | Email is a real product dependency. Local commit `89bbe121…` safely fixes result reporting, but is not pushed/deployed. Independent team/domain is **blocked by payment/plan** and **requires founder decision** |
| LogLoads | Feature `cce1c449…` sends contact inquiries after saving an in-app notification | Broad key in `dev`/`prd`, absent `stg`; no LogLoads domain/from address; provider testing sender fallback | Activation intentionally deferred by runtime/source risk; independent boundary **blocked by payment/plan** |
| ORAN | Existing DNS uses Mailgun | No Resend requirement | Preserve Mailgun unless a separately approved provider migration exists |
| AutomatedEmpires | No transactional-mail consumer established | No resource | Do not provision speculatively |
| BidSpace | No owned final domain | No resource | **Blocked by missing domain** |
| Lake & Pine | `lakeandpinecleaning.com` is owned; clean deployment not established | No resource | Domain blocker resolved; mail decision intentionally deferred until clean deployment |

## Founder decision

Keep the current team for Explore&Earn. For each additional mail-sending venture, the recommended transfer-grade boundary is a separate team/account with its own billing, recovery admins, domain, usage, and keys. Upgrading one parent team may add domains but retains co-tenancy and is not the permanent target.

Founder approval is required for recurring cost and owner/recovery administrators for LogLoads and Sweepza. A no-purchase decision means those production mail features must remain disabled or explicitly report `skipped`; they must never reuse Explore&Earn's sending identity.

## Execution order

1. Explore&Earn: create a sending-only, domain-restricted replacement key; store it in the approved Doppler lane; configure an explicit venture sender; deploy Preview; prove delivery, SPF/DKIM/DMARC alignment, reply/bounce/complaint behavior, and application logging. Revoke the broad key only after zero-use verification.
2. Sweepza: review/push local commit `89bbe121…`, which returns `skipped` without a key, returns `sent` only after a 2xx response, and leaves `sent_at` null when skipped. Its 124 tests, lint, route type generation, typecheck, and production build pass locally; the remote/deployment gate remains open.
3. After payment approval, create a separate Sweepza team and scoped sending subdomain while preserving Microsoft 365 root MX. Install key/from values first in `stg`, smoke delivery, then promote.
4. After LogLoads hosting/source convergence and payment approval, create a separate LogLoads team/domain, remove the testing-sender fallback as a production path, install a scoped key/from/contact identity in `stg`, and smoke the selected runtime before `prd`.
5. Never delete the existing team/domain or revoke either broad key until all dependent deployments are identified and replacement paths are verified.

## No-go conditions

- Do not add another venture to the Explore&Earn sending identity by default.
- Do not claim a no-op email was sent.
- Do not alter root Microsoft 365 or Mailgun MX during transactional-sending setup.
- Do not activate LogLoads mail on an unreproducible or architecturally unsafe production artifact.
- Do not record API/DKIM/SMTP values in Git, documentation, screenshots, or chat.
