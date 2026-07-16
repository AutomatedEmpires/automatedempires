# Resend account status

**Observed:** 2026-07-12

**Resend team:** `exploreandearn`

**Admin and billing owner:** `jackson@automatedempires.com`

## Subscription and capacity

| Item | Current value |
|---|---|
| Plan | Transactional Pro |
| Price | `$20/month` |
| Included volume | `50,000` messages/month |
| Custom-domain slots | `10` |
| Configured domains | `6` verified domains |
| Remaining domain capacity | `4` slots |
| Account rate limit | `10 requests/second` |
| Region | All configured domains are `us-east-1` |

The six configured domains are `exploreandearn.com`, `automatedempires.com`, `sweepza.com`, `logloads.com`, `lakeandpinecleaning.com`, and `openresourceaccessnetwork.com`. No BidSpace domain has been confirmed or added.

## Account strategy

The portfolio uses the paid `exploreandearn` team as a shared billing and control plane. This avoids creating a paid Resend team for every venture while retaining a venture boundary at the authenticated domain and API-key layers.

The trade-off is explicit:

- billing, quota, account administration, and sending reputation are shared;
- a problem at the shared-team level can affect multiple ventures;
- domain-scoped keys with `Sending access` isolate which verified domain each runtime may send from;
- a domain-scoped key does not create separate billing or reputation and does not replace venture-specific monitoring, suppression review, or rollback evidence.

One venture must never receive another venture's key. The key name, permitted domain, From identity, Reply-To identity, Doppler project, Vercel project, and deployment lane must agree before sending is enabled.

## Control-plane decision record

| Decision | State | Rationale / constraint |
|---|---|---|
| Reuse the `exploreandearn` paid team | Approved/current | Shared Transactional Pro capacity is sufficient for the six confirmed domains |
| Authenticate each confirmed venture domain | Complete | Six domains are verified in `us-east-1` |
| Scope each application key to one domain | Complete for six keys | Limits sending authority even though billing/reputation remain shared |
| Add a BidSpace domain | Disabled | No production domain is confirmed; do not invent or purchase one |
| Enable Komfort Killz or Just Jesus Bro | Disabled | Venture instructions prohibit provider writes |
| Send public/customer email | Disabled | Only controlled internal tests may be used after the application and environment gates pass |

No credential value belongs in this file. Key creation, runtime wiring, and delivery results are recorded by name/state only in the companion operating documents.

## Task 6 reconciliation

Read-only reconciliation on 2026-07-12 confirmed all six domains still **Verified**, all six replacement keys still `Sending access`, and the expected Doppler/Vercel variable names still present. Four scoped keys completed founder-only delivery proof. AutomatedEmpires could not be exercised because its restricted Doppler value is not downloadable by the current CLI identity and no Vercel API key exists. No secret visibility, provider subscription, key, domain, DNS, or production setting was changed during reconciliation.
