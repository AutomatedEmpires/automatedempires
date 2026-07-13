# Resend secret and environment contract

**Contract date:** 2026-07-12

This contract separates venture sending authority even though all six domains share the `exploreandearn` Resend team. It records names and placement only; secret values must never be written here.

## Key scope

When provisioned, each venture receives its own Resend key with:

- permission: `Sending access`;
- domain restriction: exactly the venture's verified domain;
- runtime placement: only the matching venture project;
- no reuse by another venture, local script, shared fallback, or unrelated repository.

Planned or confirmed key names are identifiers, not key values:

| Venture | Key name | Allowed domain | Application sending state |
|---|---|---|---|
| AutomatedEmpires | `automatedempires-sending-v1` | `automatedempires.com` | Key may be retained; app sending disabled until a notification surface is approved |
| Explore&Earn | `explore-and-earn-sending-v3` | `exploreandearn.com` | Canonical runtime migration and delivery proof required |
| Sweepza | `sweepza-sending-v1` | `sweepza.com` | Internal test only after application/env changes |
| LogLoads | `logloads-sending-v1` | `logloads.com` | Internal test only after application/env changes |
| Lake & Pine | `lake-and-pine-sending-v1` | `lakeandpinecleaning.com` | Internal test only after application/env changes |
| ORAN | `oran-sending-v1` | `openresourceaccessnetwork.com` | Key may be retained; Resend transport disabled pending provider-migration approval |

Do not create or place keys for BidSpace, Komfort Killz, or Just Jesus Bro.

## Canonical variables

| Variable | Classification | Contract |
|---|---|---|
| `RESEND_API_KEY` | Restricted secret | Matching venture's domain-scoped `Sending access` key |
| `RESEND_FROM` | Non-secret configuration | Exact approved From identity in `VENTURE_EMAIL_IDENTITY_MATRIX.md` |
| `RESEND_REPLY_TO` | Non-secret configuration | Exact approved Reply-To address in the identity matrix |
| `SUPPORT_EMAIL` | Non-secret configuration | Venture support address; must agree with `RESEND_REPLY_TO` unless the application contract explicitly distinguishes them |

Legacy variable names remain read-only fallbacks during application migration. Do not overwrite the canonical values with another venture's legacy value, and do not remove a legacy fallback until the related application tests and deployments prove canonical precedence.

## Lane mapping

| Doppler config | Vercel target | Intended use |
|---|---|---|
| `dev` | `development` | Local/developer runtime |
| `stg` | `preview` | Branch and controlled Preview validation |
| `prd` | `production` | Production runtime after the same identity/key passed lower lanes |

For Explore&Earn, Sweepza, LogLoads, and Lake & Pine, all four canonical names must exist in all three matching lanes before activation. AutomatedEmpires and ORAN may retain configured scoped keys while their application sending stays disabled.

## Safe secret handling

1. Copy one key value directly from the provider UI.
2. Read it from the clipboard into a short-lived shell variable without displaying it.
3. Pipe the value through standard input to the Doppler or Vercel command. Never place it in a command-line value argument.
4. Confirm only the variable name, target project/config, and provider success state. Do not list or download the restricted value.
5. Clear the clipboard and remove the shell variable immediately.
6. Close or clear any terminal capture that could contain clipboard output. Never paste the value into chat, a report, a commit message, or a delivery log.

PowerShell handling pattern for Doppler is:

```powershell
$secret = Get-Clipboard
foreach ($config in @('dev', 'stg', 'prd')) {
  $secret | doppler secrets set RESEND_API_KEY --project $dopplerProject --config $config --visibility restricted --silent
}
Clear-Clipboard
Remove-Variable secret
```

Set `$dopplerProject` explicitly to the matching venture before running the loop. Use the same standard-input pattern for Vercel; API keys are sensitive in Preview/Production, and no command may include the credential value as an argument.

## Validation order

1. Confirm the domain is `Verified` in Resend and authoritative DNS still preserves the apex MX/mailbox records.
2. Confirm the new key's name, `Sending access` permission, and single-domain restriction without viewing or logging its value.
3. Place the canonical variables in Doppler `dev`, then `stg`, then `prd` for the matching project.
4. Place the corresponding variables in Vercel `development`, then `preview`, then `production` for the matching project.
5. Verify variable names and non-secret identity values; do not download the key.
6. Deploy and exercise the application in Development, then Preview. Confirm the expected From/Reply-To and use Resend logs filtered by key name/ID.
7. Send at most one approved internal test, then record provider acceptance, inbox receipt, and reply behavior in `RESEND_DELIVERY_TEST_LOG.md`.
8. Promote to Production only after lower-lane evidence is green. Verify successful use of the replacement key in every configured environment.

## Replacement overlap and revocation rule

During rotation, keep the last proven key available as rollback while the replacement is installed and validated. Filter Resend logs by key name or provider key identifier—never by the credential value—to distinguish old-key and new-key traffic.

**The old key may be revoked only after every configured environment shows successful use of the new key.** Until then, retain it, record the overlap, and use `EMAIL_ROLLBACK_AND_KEY_ROTATION_RUNBOOK.md` if validation fails.
