# PostHog Project Matrix

**Verified provider snapshot:** 2026-07-10
**Security note:** Project keys, personal API values, session data, and credential fingerprints are intentionally excluded.

Live management access confirmed exactly one project, `exploreandearn`; its numeric provider ID is intentionally omitted. Provider metadata reports ingestion and a live query returned 39 pageviews in 30 days. Organization settings require owner re-authentication, so no management write/project creation occurred. No key is reproduced.

Pass 4 names-only Doppler verification confirms that every other venture project has no PostHog key; no cross-app reuse into Explore&Earn was found. Explore&Earn commit `7893756…` disables session replay and console capture, and its tests, typecheck, and lint pass. New project management remains blocked by account-owner re-authentication/current-plan access; no upgrade was purchased.

Documentation references and environment-variable names remain insufficient proof by themselves that events reach a live PostHog project.

## Current venture boundaries

| Venture | Current evidence | Environment separation | Contamination status | Pass 4 classification | Safe next action |
|---|---|---|---|---|---|
| AutomatedEmpires | No parent project/key exists | Inactive | No cross-venture sharing confirmed | Absence/non-reuse **completed**; any project creation **blocked by MFA/account-owner confirmation/current plan** | Keep analytics off unless an implemented event/consent requirement exists; after re-authentication, create a separate no-upgrade project only if needed. |
| Explore&Earn | Live project `exploreandearn` is confirmed with ingestion and the 39-pageview baseline; numeric provider ID omitted. Source disables replay/console capture at `7893756…` | Active project verified; environment labeling, retention, owner, consent remain | Only project; no cross-venture key sharing | Identity/ingestion/non-reuse **completed**; privacy source **safely fixed**; management **MFA-blocked** | After re-authentication, record owner, environment, retention, consent, and a named release event. |
| ORAN | No ORAN project/key exists | Inactive | No contamination confirmed | Absence/non-reuse **completed**; creation **blocked by MFA/account-owner confirmation/current plan** | Preserve the civic-product privacy posture; create only after re-authentication and an implemented minimal event/consent contract. |
| BidSpace | Integration intent exists, but no project/key exists | Inactive | No contamination confirmed | Absence/non-reuse **completed**; creation **blocked by MFA/account-owner confirmation/current plan** | Continue dev/Preview without analytics or create a separate no-upgrade project after re-authentication and an event/consent contract. Custom domain is not required for project creation. |
| Lake & Pine | Planned only; no project/key exists | Inactive | No contamination confirmed | Absence/non-reuse **completed**; creation **blocked by MFA/account-owner confirmation/current plan** | Defer until the clean runtime has an event/consent contract; do not borrow Explore&Earn. |
| Sweepza | There is no Sweepza project. Its key is empty in `dev`, `stg`, and `prd`; health reported PostHog false | All three lanes are intentionally inactive | No cross-venture contamination; analytics is not active | Absence/non-reuse **completed**; project creation **blocked by MFA/account-owner confirmation/current plan** | If no-upgrade creation becomes available after re-authentication, create a separate project, map only its key/host, send a controlled test event, and re-check health. |
| LogLoads | Intended integration only; no project/key or ingestion proof exists | Inactive | No contamination confirmed | Absence/non-reuse **completed**; creation **blocked by MFA/account-owner confirmation/current plan** | Finish source/runtime convergence; after re-authentication, provision only a separate no-upgrade project with event taxonomy, consent, and environment labeling. |

## Verification standard

A project is not fully operationally governed until the portfolio record identifies its venture owner, region/host, project name or non-secret resource ID, environment strategy, retention/session-replay policy, consent posture, and a verified test/release event. Explore&Earn is demonstrably ingesting and now has safer source defaults, but its management fields remain incomplete behind owner re-authentication. No PostHog cross-venture project/key contamination exists in this one-project snapshot.
