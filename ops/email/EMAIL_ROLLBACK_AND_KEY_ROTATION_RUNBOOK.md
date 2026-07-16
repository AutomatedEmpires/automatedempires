# Email rollback and key rotation runbook

**Scope:** Resend sending keys and canonical email environment values

**Safety rule:** preserve the last proven key until the replacement succeeds in every configured environment

Use this runbook for planned key rotation, suspected key exposure, incorrect venture identity, provider authentication failure, or a deployment that cannot send with the newly installed key. It does not authorize apex MX changes, provider migration, public email, or cross-brand fallback.

## Preconditions

- Identify the venture, repository, Resend domain, key name, Doppler project, Vercel project, and affected lanes.
- Confirm the venture's domain is `Verified` and authoritative DNS still preserves existing apex mailbox records.
- Record the current proven key by name/provider identifier only. Never display, export, or log its value.
- Confirm the exact From and Reply-To in `VENTURE_EMAIL_IDENTITY_MATRIX.md`.
- For a planned rotation, leave the current key active while creating a new domain-scoped `Sending access` key.
- If exposure is suspected, disable the affected application send path or deployment while the safe replacement is validated; do not substitute another venture's key.

## Planned rotation

1. Create a replacement key with `Sending access`, restricted to exactly the same venture domain. Use the next versioned key name.
2. Copy the value once and transfer it by clipboard-to-standard-input. Never put the value in a command argument, file, log, or report.
3. Update Doppler in order: `dev`, `stg`, `prd` for the venture project.
4. Update Vercel in order: `development`, `preview`, `production` for the venture project.
5. Clear the clipboard and remove the short-lived shell variable immediately after each provider placement.
6. Verify names and non-secret values only. The four canonical variables must resolve to the same venture identity in every lane.
7. Deploy Development, then Preview, then Production. At each stage, inspect application and Resend outcomes filtered by the replacement key name/provider ID.
8. When allowed, send one internal-only test and record the redacted result, inbox receipt, and Reply-To behavior.
9. Confirm every configured environment shows successful use of the replacement key and no environment is still using the previous key.
10. Only then revoke the old key. Record its name, revocation time, approver/operator, and evidence references without storing values.

## Validation checklist

| Check | Required evidence |
|---|---|
| Key boundary | `Sending access` and the exact venture domain |
| Doppler placement | Variable name exists in `dev`, `stg`, and `prd` for the matching project |
| Vercel placement | Variable name exists in `development`, `preview`, and `production` for the matching project |
| Identity | Exact venture From and Reply-To; no other-brand fallback |
| Runtime | Successful application use in each configured lane |
| Provider | Resend log filtered by replacement key name/provider ID, with no credential value logged |
| Delivery | When authorized, provider acceptance plus internal inbox and reply-loop evidence |
| Old-key use | Zero remaining configured environments using the previous key |

## Roll back a failed replacement

Trigger rollback if the new key is rejected, scoped to the wrong domain, installed in the wrong project, causes cross-brand identity, fails in any configured lane, or cannot be distinguished in provider logs.

1. Stop promotion and public/customer sending. Preserve diagnostic metadata without capturing secret values or sensitive message content.
2. Restore the last proven key to the affected venture lanes using clipboard-to-standard-input handling.
3. Restore the last proven non-secret `RESEND_FROM`, `RESEND_REPLY_TO`, and `SUPPORT_EMAIL` values if they changed.
4. Redeploy only the affected venture/environment, working from Development to Preview before Production.
5. Filter Resend logs by the last proven key name/provider ID and verify the expected venture/domain. If authorized, run one internal test and record it.
6. Leave the failed replacement key active only long enough to collect safe diagnostic metadata, then revoke it after rollback is proven and no environment references it.
7. Document the failure, rollback time, affected lanes, evidence, and follow-up owner. Do not record either credential value.

## Compromise handling

If a key may be exposed, first prevent the application from sending with it and start a same-domain replacement. Do not solve the incident by borrowing another venture's key or broadening key scope. Validate the replacement through the lane sequence as quickly as safely possible, confirm every environment uses it, then revoke the exposed key. If safe validation cannot complete, keep sending disabled and escalate to the admin/billing owner rather than re-enabling an unproven credential.

## Non-negotiable revocation gate

The old key is revoked **only after all configured environments show successful use of the new key**. Successful use means runtime evidence tied to the new key name/provider identifier, not merely that a variable name exists. Until the gate passes, retain the previous key as rollback or keep sending disabled.

## Rotation record template

| Field | Record |
|---|---|
| Venture / domain | |
| Old key name/provider ID | |
| New key name/provider ID | |
| Reason | Planned / suspected exposure / scope correction / other |
| Doppler lanes verified | `dev` / `stg` / `prd` |
| Vercel lanes verified | `development` / `preview` / `production` |
| Internal test reference | |
| Old-key zero-use evidence | |
| Revocation time and operator | |
| Rollback needed / outcome | |
