# AutomatedEmpires Doppler Map

**Doppler project:** `automatedempires`
**Names-only snapshot:** 2026-07-12
**Configs inspected:** `dev`, `stg`, `prd`

Inventory used Doppler CLI names-only JSON mode with environment reads disabled. No secret value was requested, returned, or documented.

## Status legend

- `configured` — non-empty configuration was established by separate safe verification; the value is not recorded here.
- `empty` — an empty value was safely established without displaying it.
- `metadata` — Doppler-managed project/config/environment metadata.
- `unknown` — the name exists, but names-only output cannot establish whether its value is configured or empty.

## Variable inventory

| Variable | Purpose | Configs present | Status |
|---|---|---|---|
| `DOPPLER_CONFIG` | Identifies the active Doppler config | `dev`, `stg`, `prd` | `metadata` |
| `DOPPLER_ENVIRONMENT` | Identifies the active Doppler environment | `dev`, `stg`, `prd` | `metadata` |
| `DOPPLER_PROJECT` | Identifies the Doppler project | `dev`, `stg`, `prd` | `metadata` |
| `NEXT_PUBLIC_POSTHOG_HOST` | Browser-visible PostHog ingestion host | `dev`, `stg`, `prd` | `configured` |
| `NEXT_PUBLIC_POSTHOG_KEY` | Browser-visible AutomatedEmpires PostHog project key | `dev`, `stg`, `prd` | `configured` |
| `SENTRY_DSN` | Venture-specific Sentry event endpoint | `dev`, `stg`, `prd` | `configured` |
| `SENTRY_ORG` | Sentry organization slug | `dev`, `stg`, `prd` | `configured` |
| `SENTRY_PROJECT` | AutomatedEmpires Sentry project slug | `dev`, `stg`, `prd` | `configured` |

Pass 4 installed only the AutomatedEmpires-specific Sentry runtime identity beyond metadata, without displaying values. No variable is classified as `empty` because names-only inspection does not expose that state and no separate safe evidence established it.

## Pass 5 provider delta

PostHog project `509081` exists with autocapture, replay, and console capture disabled. In Doppler `dev`, both PostHog entries have restricted visibility: CLI returns `null` by design, while authenticated browser write-and-save confirms presence. They are not empty or independently readable. `stg`/`prd` presence checks passed. Vercel Development was repaired directly in authenticated UI and both entries were reopened/exact-match verified without output; combined Preview/Production is present. Ops PR #8 auto-triggered a Preview, but no controlled event/ingestion smoke or production deployment occurred.

## Next action

Install the prepared Sentry identity into Vercel only through an authorized write surface and verify one controlled event. Fresh-deploy AutomatedEmpires before calling PostHog runtime-active, then verify one minimal event reaches project `509081`. Define other variables only for deployed features; do not copy another venture's credentials.
