# ORAN Doppler Map

**Doppler project:** `oran`
**Names-only snapshot:** 2026-07-10
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

No application variables are present in any config. No variable is classified as `empty` because names-only inspection does not expose that state and no separate safe evidence established it.

## Architecture constraint

ORAN is in an unmerged Azure-to-Vercel transition. Populate this Doppler project only after the migration branch, Supabase schema/ledger, and retained Azure/Key Vault responsibilities are approved. Migrate only verified ORAN-owned values through a preview-first plan; do not copy generic Vercel, Supabase, Clerk, Stripe, or Mapbox values merely to match another venture.
