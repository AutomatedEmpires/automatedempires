# Sentry Project Matrix

**Verified snapshot:** 2026-07-10 (Pass 4 authenticated API remediation)

The shared parent organization now contains seven distinct venture projects with distinct DSNs. Pass 4 created the previously missing AutomatedEmpires, Lake & Pine, and ORAN projects and preserved the existing Explore&Earn, BidSpace, Sweepza, and LogLoads projects. No DSN, auth token, full provider object ID, or credential fingerprint is recorded.

## Venture boundaries

| Venture | Current project/runtime evidence | Doppler | Governance and privacy | Classification / remaining gate |
|---|---|---|---|---|
| AutomatedEmpires | Separate `automatedempires` project created; no runtime event claimed | Own DSN/org/project identifiers installed write-only in `dev`/`stg`/`prd` | Ownership rule, one alert, scrubbers, IP scrubbing | Project/config/governance **fixed and verified**; Vercel install/event open |
| Explore&Earn | Existing active distinct project with historical production/provider-development ingestion | Existing venture configuration retained | Ownership rule, one alert, scrubbers, IP scrubbing; unresolved issues assigned to team | Governance **fixed and verified**; release proof and narrow-token replacement open |
| ORAN | Separate `oran` project created; traces remain `0`; no Vercel deployment | Own DSN/org/project identifiers installed write-only in `dev`/`stg`/`prd` | Ownership rule, one alert, scrubbers, IP scrubbing | Project/config/governance **fixed and verified**; runtime event waits for safe Preview |
| BidSpace | Existing distinct project; first production event verified; prior 14-day query had zero unresolved | Existing venture configuration retained | Ownership rule, one alert, scrubbers, IP scrubbing | **Fixed and verified**; retain controlled release smoke |
| Lake & Pine | Separate `lake-and-pine` project created; no runtime event claimed | Own DSN/org/project identifiers installed write-only in `dev`/`stg`/`prd` | Ownership rule, one alert, scrubbers, IP scrubbing | Project/config/governance **fixed and verified**; Vercel install/event open |
| Sweepza | Existing distinct project; no first event/environment observed | Existing venture configuration retained | Ownership rule, one alert, scrubbers, IP scrubbing | Governance **fixed and verified**; controlled runtime event open |
| LogLoads | Existing distinct project; one own DSN spans lanes; no first event/environment observed | Existing venture configuration retained | Ownership rule, one alert, scrubbers, IP scrubbing | Governance **fixed and verified**; lane/release event waits for accepted runtime |

No cross-venture Sentry project or DSN reuse exists.

## Controls applied

- Organization data scrubber, default scrubbers, and IP-address scrubbing are enabled.
- All seven projects use `path:** #automated-empires` ownership with fallthrough, Issue Owner auto-assignment, and CODEOWNERS sync.
- Every project has exactly one alert rule.
- Fifteen previously unassigned unresolved issues were assigned to the AutomatedEmpires team.
- Each new venture project received only its own DSN plus organization/project identifiers in Doppler `dev`/`stg`/`prd`, transferred without display.

## Remaining gates

- Vercel DSN installation/runtime smoke for the new and non-ingesting projects requires an authorized environment-write surface; it is not claimed.
- ORAN traces remain disabled at `0` until its privacy/performance posture and safe Preview exist.
- The existing owner-grade build token was not revoked. Replace it only through create → install → deploy → verify → revoke; never revoke working access first.
- Retention was not exposed by the inspected provider surface and remains unverified.
