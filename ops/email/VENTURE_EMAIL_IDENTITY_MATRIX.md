# Venture email identity matrix

**Contract date:** 2026-07-12

The From and Reply-To values below are the only approved cross-system identities for the listed ventures. A verified domain is not permission to send: the activation column controls runtime use.

| Venture | Approved From | Approved Reply-To | Mailbox evidence | Runtime activation |
|---|---|---|---|---|
| AutomatedEmpires | `AutomatedEmpires <notifications@automatedempires.com>` | `jackson@automatedempires.com` | Admin/billing address is confirmed; apex hosted-mail MX is preserved | **Disabled for delivery testing:** no notification surface is approved yet |
| Explore&Earn | `Explore&Earn <notifications@exploreandearn.com>` | `support@exploreandearn.com` | No apex receiving MX; inbox/reply route remains unproven | Domain verified; customer/public sending disabled pending runtime and delivery proof |
| Sweepza | `Sweepza <notifications@sweepza.com>` | `support@sweepza.com` | `support@sweepza.com` is the only founder-confirmed Sweepza address; Microsoft 365 MX exists, but receipt/delegation still needs proof | Domain verified; internal test only after scoped runtime wiring |
| LogLoads | `LogLoads <notifications@logloads.com>` | `support@logloads.com` | Microsoft 365 MX exists; inbox ownership, monitoring, and reply behavior remain to be confirmed | Domain verified; internal test only after scoped runtime wiring |
| Lake & Pine | `Lake & Pine <hello@lakeandpinecleaning.com>` | `hello@lakeandpinecleaning.com` | No apex MX; inbox receipt/reply remains unproven | Domain verified; internal test only after scoped runtime wiring |
| ORAN | `ORAN <updates@openresourceaccessnetwork.com>` | `support@openresourceaccessnetwork.com` | Existing Mailgun mail routing is preserved; target inbox confirmation is pending | Resend sending remains disabled; keep current Azure transport and click/open tracking disabled until migration approval |

The arrow-form contract consumed by application work is:

```text
AutomatedEmpires <notifications@automatedempires.com> -> jackson@automatedempires.com
Explore&Earn <notifications@exploreandearn.com> -> support@exploreandearn.com
Sweepza <notifications@sweepza.com> -> support@sweepza.com
LogLoads <notifications@logloads.com> -> support@logloads.com
Lake & Pine <hello@lakeandpinecleaning.com> -> hello@lakeandpinecleaning.com
ORAN <updates@openresourceaccessnetwork.com> -> support@openresourceaccessnetwork.com (pending inbox confirmation)
```

## Sweepza alias status

Only `support@sweepza.com` is founder-confirmed. Additional optional Sweepza aliases are available in principle, but their names, recipients, operators, and mailbox behavior have not been approved.

| Optional Sweepza alias set | Creation state | Mailbox state |
|---|---|---|
| Additional aliases (names not approved) | **Uncreated** | **Pending mailbox confirmation** |

Do not create, name, or publish an optional alias by assumption.

## Disabled ventures

| Venture | State | Re-enable gate |
|---|---|---|
| BidSpace | **Email-disabled** | Confirm the production domain and support inbox before adding a domain, key, or identity |
| Komfort Killz | **Email-disabled** | A new explicit venture decision must supersede the no-provider-write instruction |
| Just Jesus Bro | **Email-disabled** | A new explicit venture decision must supersede the no-provider-write instruction |

## Enforcement rules

1. The authenticated key domain, From domain, Reply-To venture, Doppler project, Vercel project, and application repository must all refer to the same venture.
2. Never use the Explore&Earn identity or Reply-To as a fallback for another venture.
3. Canonical runtime variables are `RESEND_API_KEY`, `RESEND_FROM`, `RESEND_REPLY_TO`, and `SUPPORT_EMAIL`. Legacy names may be read-only fallbacks during migration, but they do not change this matrix.
4. A mailbox marked pending or unproven cannot be described as delivery-ready until the internal test log records inbox receipt and a successful reply loop.
