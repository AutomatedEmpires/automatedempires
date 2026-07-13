# Venture email identity matrix

**Contract date:** 2026-07-12

The From and Reply-To values below are the only approved cross-system identities for the listed ventures. A verified domain is not permission to send: the activation column controls runtime use.

| Venture | Approved From | Approved Reply-To | Mailbox evidence | Runtime activation |
|---|---|---|---|---|
| AutomatedEmpires | `AutomatedEmpires <notifications@automatedempires.com>` | `jackson@automatedempires.com` | Founder-confirmed owned and accessible inbox; apex hosted-mail MX is preserved | **Disabled:** no application notification surface; internal provider test blocked by inaccessible restricted key |
| Explore&Earn | `Explore&Earn <notifications@exploreandearn.com>` | `support@exploreandearn.com` | Founder-confirmed owned and accessible inbox. Founder recipient received the sender test and the Reply-To header was correct; an actual reply loop was not run | Founder-only sender test passed; customer/public sending remains disabled |
| Sweepza | `Sweepza <notifications@sweepza.com>` | `support@sweepza.com` | Founder-confirmed owned and accessible inbox. Founder recipient received the sender test and the Reply-To header was correct; an actual reply loop was not run | Founder-only sender test passed; public/campaign sending remains disabled |
| LogLoads | `LogLoads <notifications@logloads.com>` | `support@logloads.com` | Founder-confirmed owned and accessible inbox. Founder recipient received the sender test and the Reply-To header was correct; an actual reply loop was not run | Founder-only administrative sender test passed; broker/payment/public use remains disabled |
| Lake & Pine | `Lake & Pine <hello@lakeandpinecleaning.com>` (outbound identity only) | **Missing / not approved** | No founder-confirmed accessible branded inbox. Receipt at `jackson@automatedempires.com` proves only the earlier outbound internal test; it does not prove `hello@lakeandpinecleaning.com` exists or receives replies | Sender/domain preparation only; customer/booking sending and branded reply routing remain disabled |
| ORAN | `ORAN <updates@openresourceaccessnetwork.com>` (dormant outbound identity only) | **Missing / not approved** | No founder-confirmed accessible civic support inbox. Existing Mailgun records are preserved, but the application remains on Azure | Resend remains dormant; no migration or sending until a civic inbox is approved |

The arrow-form contract consumed by application work is:

```text
AutomatedEmpires <notifications@automatedempires.com> -> jackson@automatedempires.com
Explore&Earn <notifications@exploreandearn.com> -> support@exploreandearn.com
Sweepza <notifications@sweepza.com> -> support@sweepza.com
LogLoads <notifications@logloads.com> -> support@logloads.com
Lake & Pine <hello@lakeandpinecleaning.com> -> [branded Reply-To missing; do not activate]
ORAN <updates@openresourceaccessnetwork.com> -> [civic Reply-To missing; Resend dormant]
```

## Founder-confirmed inbox inventory

As of 2026-07-12, the only founder-confirmed owned and accessible inboxes are:

- `support@logloads.com`
- `support@sweepza.com`
- `support@exploreandearn.com`
- `jackson@automatedempires.com`

Do not infer mailbox ownership or accessibility for any other address. GoDaddy redirected the read-only inventory attempt to sign-in, and the connected Microsoft delegated-mailbox surface did not recognize the three support addresses as delegated Microsoft users. Those provider limitations do not override the founder confirmation and do not prove the addresses are absent; they mean provider-side delegation and reply delivery were not independently verified in this session.

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
4. Founder-confirmed ownership/access, Reply-To header correctness, and a successful reply loop are separate evidence fields. Do not claim reply delivery unless the reply destination actually receives a separately authorized test.
