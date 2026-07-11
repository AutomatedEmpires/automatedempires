# PostHog Project Matrix

**Verified provider snapshot:** 2026-07-10
**Security note:** Project keys, personal API values, session data, and credential fingerprints are intentionally excluded.

Live management access was confirmed through the connected provider for organization `AutomatedEmpires`. Exactly one project exists: `exploreandearn`, project ID `291166`. Its provider metadata reports `ingested_event: true`, and a live query returned 39 `$pageview` events in the preceding 30 days. Organization settings require founder/owner re-authentication, so no management write or project creation was attempted. No project key is reproduced here.

Documentation references and environment-variable names remain insufficient proof by themselves that events reach a live PostHog project.

## Current venture boundaries

| Venture | Current evidence | Environment separation | Contamination status | Pass 3 classification | Safe next action |
|---|---|---|---|---|---|
| AutomatedEmpires | The authenticated organization exists, but exactly one child project exists and it belongs to Explore&Earn; there is no parent project | Not applicable until parent analytics is approved | No cross-venture sharing confirmed | **requires founder decision** | Create a parent project only when the public site has an approved analytics requirement and consent policy. |
| Explore&Earn | Live project `exploreandearn`, ID `291166`, is confirmed through management access. Provider metadata reports event ingestion, and the live 30-day query returned 39 pageviews | The active project is verified, but production-versus-development labeling, retention, session replay, owner, and consent settings remain unverified | It is the only project in the organization; no cross-venture project sharing was found | **completed** for live project identity and ingestion verification; policy/ownership still **requires founder decision** | Record the owner, environment strategy, retention/session-replay policy, consent posture, and a named release/test event before calling the full analytics control plane complete. |
| ORAN | No ORAN project exists in the authenticated organization | Not configured | No contamination confirmed | **requires founder decision** | Decide whether product analytics are required, including civic-product privacy constraints, before provisioning. |
| BidSpace | Analytics is present in integration intent, but no project exists in the authenticated organization | Not configured | No cross-venture contamination; the planned resource is absent | **requires founder decision** | Create a BidSpace-specific project only when event names, consent, and domain are defined. |
| Lake & Pine | PostHog is planned, but no project exists in the authenticated organization | Not configured | No cross-venture contamination; the planned resource is absent | **requires founder decision** | Defer provisioning until the application runtime and consent requirements exist. |
| Sweepza | **Confirmed runtime gap:** there is no Sweepza project. Its configured public key is empty in `dev`, `stg`, and `prd`, hosts are present, and application health/readiness reported PostHog as false | All three lanes are intentionally inactive because the required key/project is absent | No cross-venture contamination; analytics is not active | **requires founder decision** | If analytics is required, create a Sweepza-specific project, map only its key and host through Sweepza environments, send a controlled test event, and re-check health. Do not copy Explore&Earn configuration. |
| LogLoads | PostHog is an intended integration, but no project exists and no ingestion proof is available | Not configured | No cross-venture contamination; the planned resource is absent | **requires founder decision** | Provision only with LogLoads-specific ownership, event taxonomy, consent, and environment labeling. |

## Verification standard

A project is not fully operationally governed until the portfolio record identifies its venture owner, region/host, project name or non-secret resource ID, environment strategy, retention/session-replay policy, consent posture, and a verified test/release event. Explore&Earn is demonstrably ingesting, but its governance fields remain incomplete. No PostHog cross-venture project contamination exists in this one-project snapshot.
