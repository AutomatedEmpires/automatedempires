# Sentry Project Matrix

**Verified snapshot:** 2026-07-10

A shared parent Sentry organization is acceptable only when each active venture has a separate project, ownership, alerts, retention policy, and data-scrubbing boundary. DSNs and auth tokens are intentionally excluded.

Authenticated provider inspection confirmed organization `automated-empires` and four distinct venture projects: BidSpace, Explore&Earn, LogLoads, and Sweepza. Their DSNs are distinct across ventures. LogLoads reuses its own one DSN across `dev`, `stg`, and `prd`, which is an environment-labeling concern but not cross-venture reuse. No Sentry provider write was performed.

| Venture | Current evidence | Separation state | Pass 3 classification | Safe next action |
|---|---|---|---|---|
| AutomatedEmpires | The parent organization is authenticated; no AutomatedEmpires application project exists | Parent organization is the shared control plane; no parent DSN is in active use | **completed** for organization inventory; a parent app project **requires founder decision** only if monitoring is needed | Create a parent project only with the first monitored parent deployment and assign explicit owners/alerts at creation |
| Explore&Earn | Project `explore-and-earn`, ID `4511510781624320`, is active in `production`, `vercel-production`, and `development`. In the last 14 days: production had 7 issues / 6,489 occurrences (5 high, 2 medium); `vercel-production` had 2 / 5 (both high); development had 5 / 1,024 (3 high, 2 medium). All are unassigned | Distinct venture project and DSN; environment labels exist, but alert ownership, routing, and retention are incomplete | Inventory is **completed**; credential replacement and production configuration are **blocked by production risk** until replacements are installed, deployed, and smoke-tested | Assign venture owners and routing, triage the high-volume issues, verify releases, and split the overprivileged credential into a parent read-only audit credential plus a narrow Explore&Earn build credential. Do not revoke the current credential until both replacements are verified. |
| ORAN | No ORAN project exists; Azure telemetry is also referenced in repository docs | Not configured | **requires founder decision** | Decide Sentry versus Azure telemetry roles before creating a separate ORAN project; avoid duplicate sensitive payloads |
| BidSpace | A distinct BidSpace project is verified. Its first production event was 2026-07-10, with 0 unresolved issues in the last 14 days | Distinct venture project and DSN; current ingestion is proven | **completed** for project identity and initial ingestion; routing ownership **requires founder decision** | Assign venture owners/alert routing and retain a controlled production smoke event as release evidence |
| Lake & Pine | No Lake & Pine project exists | Not configured | **requires founder decision** | Defer until the clean production source/deployment exists, then create only if monitoring is part of the approved release contract |
| Sweepza | A distinct Sweepza project exists, but it has no first event and no observed environments | Venture boundary exists; ingestion is inactive | **requires founder decision** on activation; rollout is **blocked by production risk** until a scoped preview smoke succeeds | Add only Sweepza-scoped configuration, emit a controlled preview event, verify environment/release/owner routing, then promote |
| LogLoads | A distinct LogLoads project exists. The same LogLoads DSN is reused across `dev`, `stg`, and `prd`, but no first event or provider environments were observed | No cross-venture reuse; environment separation is ineffective until events carry verified environment/release labels | **requires founder decision** on activation; rollout is **blocked by production risk** until runtime architecture is chosen | After the runtime decision, emit controlled lane-specific events and verify environment/release labels, owner routing, and alert delivery before production |

## Cross-project controls

- All four projects share the parent team and the same default email alert. No alert-rule owner is assigned. Routing falls back to IssueOwners/ActiveMembers.
- Ownership features are enabled with automatic assignment, fallthrough, and CODEOWNERS support, but zero ownership rules or targets are configured. All observed Explore&Earn issues are unassigned.
- No metric alerts are configured on any of the four projects.
- Data scrubbing is enabled on all four projects. IP-address scrubbing is disabled, and no custom safe-field or sensitive-field rules are configured.
- Retention was not exposed by the inspected provider surface and remains unverified.
- An owner-grade organization token is stored in Explore&Earn development configuration and is overprivileged across the organization. Its value is intentionally excluded. Replacement must follow create → install → deploy → verify → revoke; current production access must not be revoked first.

No cross-venture Sentry project or DSN sharing was found. Explore&Earn's incorrect development organization slug was corrected in Doppler and Vercel during Pass 2; Pass 3 added live project, ingestion, issue-volume, and control-plane evidence without changing provider state.
