# Sentry Project Matrix

**Verified snapshot:** 2026-07-10

A shared parent Sentry organization is acceptable only when each active venture has a separate project, ownership, alerts, retention policy, and data-scrubbing boundary. DSNs and auth tokens are intentionally excluded.

| Venture | Current evidence | Separation state | Safe next action |
|---|---|---|---|
| AutomatedEmpires | Provider family is allowed by repo policy; no active project verified | Not applicable until monitoring is used | Create a parent project only with the first monitored deployment |
| Explore&Earn | Verified org automated-empires, project explore-and-earn, project ID 4511510781624320; five unresolved issues observed | Separate project inside parent org is acceptable; alert/retention ownership still needs review | Triage current CSP/Not Found/server-component issues and verify alerts, owners, releases, scrubbing, and retention |
| ORAN | Integration referenced; current Azure telemetry also exists in repo docs | Sentry project identity unverified | Decide Sentry versus Azure telemetry roles, then verify/create a separate ORAN project and avoid duplicate sensitive payloads |
| BidSpace | DSN/org/project names exist in development configuration | Live project identity unverified | Verify a BidSpace project before deployment; do not reuse Explore&Earn's DSN |
| Lake & Pine | Planned only | No project verified | Defer until the clean production source/deployment exists |
| Sweepza | Production health reports Sentry false | Not active | Create/verify a Sweepza project, add scoped configuration through Doppler, deploy, emit a controlled test event, and verify alert delivery |
| LogLoads | SENTRY_DSN name exists across Doppler configs, but provider identity/ingestion is unverified | Unknown | Verify the project behind each lane or replace it with LogLoads-specific projects before production |

No cross-venture Sentry project sharing was confirmed. Explore&Earn's incorrect development organization slug was corrected in Doppler and Vercel during this pass.
