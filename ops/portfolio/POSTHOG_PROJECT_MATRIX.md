# PostHog Project Matrix

**Verified provider snapshot:** 2026-07-10
**Security note:** Project keys, personal API values, session data, and credential fingerprints are intentionally excluded.

Documentation references and environment-variable names are not proof that events reach a live PostHog project.

## Current venture boundaries

| Venture | Current evidence | Environment separation | Contamination status | Safe next action |
|---|---|---|---|---|
| AutomatedEmpires | PostHog is an optional documented provider family; no live project was verified | Unknown | No contamination confirmed | Create a parent project only when the public site has an approved analytics requirement and consent policy. |
| Explore&Earn | Repository operational docs identify US project `exploreandearn`, project ID `291166`; Doppler dev contains the expected names, but no personal management key was available to prove current ingestion/settings | Production environment mapping and live ingestion remain unverified | No cross-venture project sharing was confirmed | Verify the documented project in the dashboard, owners, retention, and a named test event before declaring analytics active. |
| ORAN | No live ORAN PostHog project was verified | Unknown | No contamination confirmed | Decide whether product analytics are required, including civic-product privacy constraints, before provisioning. |
| BidSpace | Analytics is present in integration intent, but no live project was verified | Unknown | Unknown | Create or verify a BidSpace-specific project only when event names, consent, and domain are defined. |
| Lake & Pine | PostHog is planned; no live project was verified | Unknown | Unknown | Defer provisioning until the application runtime and consent requirements exist. |
| Sweepza | **Confirmed runtime gap:** the inspected PostHog project key was absent and application health/readiness reported PostHog as false | No active environment was proven; dev, staging, and production separation is unknown | No cross-venture contamination confirmed; analytics activation is currently unproven | Verify or create a Sweepza-specific project, map the project key and host through Sweepza environments, send a controlled test event, and re-check health. Do not copy Explore&Earn configuration. |
| LogLoads | PostHog is an intended integration; no live project or ingestion proof was verified | Unknown | Unknown | Provision only with LogLoads-specific ownership, event taxonomy, consent, and environment labeling. |

## Verification standard

A project is not `active` until the portfolio record identifies its venture owner, region/host, project name or non-secret resource ID, environment strategy, retention/session-replay policy, and a verified test event. No PostHog cross-venture contamination was confirmed in this snapshot; for unverified ventures it remains unknown.
