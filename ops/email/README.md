# Portfolio email operations

**Source-of-truth date:** 2026-07-12 (America/Los_Angeles)

This directory is the operating source of truth for transactional email across the AutomatedEmpires portfolio. It records the shared Resend control plane, venture identities, DNS/mailbox boundaries, environment contract, test evidence, and safe rollback procedure without storing credential values.

## Current control-plane state

- Resend team `exploreandearn` is on Transactional Pro.
- All six configured custom domains are verified in `us-east-1`: `exploreandearn.com`, `automatedempires.com`, `sweepza.com`, `logloads.com`, `lakeandpinecleaning.com`, and `openresourceaccessnetwork.com`.
- Resend authentication is isolated under `send` and `resend._domainkey`; existing apex mailbox MX records were not changed.
- A BidSpace domain has not been confirmed and was not added.
- BidSpace, Komfort Killz, and Just Jesus Bro remain email-disabled.
- Domain verification is not delivery proof. Runtime credentials and internal-only delivery/reply tests remain separate gates.

## Execution history and audit boundary

The accepted AutomatedEmpires portfolio execution record merged at `c537651` is the canonical audit baseline. This scoped Resend follow-on does not reopen, duplicate, or replace that audit.

Before commit `444467c`, the root execution session upgraded the existing team, added five Resend domains, submitted their isolated records with GoDaddy Domain Connect, and observed all six team domains verified. The documentation implementer then recorded that observed state and made no provider, DNS, browser, secret, or delivery mutation.

`exploreandearn.com` and its Resend DNS records predated this follow-on. The five domains added in the root execution session were `automatedempires.com`, `sweepza.com`, `logloads.com`, `lakeandpinecleaning.com`, and `openresourceaccessnetwork.com`; their exact additions are inventoried in `RESEND_DOMAIN_VERIFICATION.md`.

## Document map

| Document | Purpose |
|---|---|
| [RESEND_ACCOUNT_STATUS.md](RESEND_ACCOUNT_STATUS.md) | Team, plan, capacity, ownership, and shared-account trade-offs |
| [RESEND_DOMAIN_VERIFICATION.md](RESEND_DOMAIN_VERIFICATION.md) | Verified domains, isolated Resend records, preserved apex mail, and DNS cautions |
| [VENTURE_EMAIL_IDENTITY_MATRIX.md](VENTURE_EMAIL_IDENTITY_MATRIX.md) | Approved From/Reply-To identities and activation state |
| [RESEND_SECRET_AND_ENV_CONTRACT.md](RESEND_SECRET_AND_ENV_CONTRACT.md) | Domain-scoped key rules and Doppler/Vercel lane mapping |
| [RESEND_DELIVERY_TEST_LOG.md](RESEND_DELIVERY_TEST_LOG.md) | Internal-only acceptance, inbox, and reply evidence |
| [SWEEPZA_EMAIL_COMPLIANCE_NOTES.md](SWEEPZA_EMAIL_COMPLIANCE_NOTES.md) | Sweepza-specific content and recipient restrictions |
| [EMAIL_ROLLBACK_AND_KEY_ROTATION_RUNBOOK.md](EMAIL_ROLLBACK_AND_KEY_ROTATION_RUNBOOK.md) | Replacement-key overlap, rollback, validation, and revocation |

## Operating invariants

1. Use one domain-scoped Resend key with `Sending access` per venture. Never reuse a venture key, From identity, or Reply-To identity across brands.
2. Do not place a key value in a file, terminal argument, log, ticket, screenshot, or commit. Transfer copied values through standard input and clear the clipboard immediately.
3. Preserve apex mailbox routing. Resend sending records belong only at `send` and `resend._domainkey` unless a separately approved mail migration says otherwise.
4. Do not send customer, entrant, marketing, public-launch, or sweepstakes messages during infrastructure verification. Use one non-sensitive internal test only after the venture's runtime and domain gates are green.
5. ORAN keeps click/open tracking disabled and stays on its current Azure transport until a separate migration decision is approved.
6. Do not revoke an old key until every configured environment has demonstrated successful use of its replacement.
7. DNS is now frozen. Do not make more DNS changes, launch or advertise a venture, enable live-money flows, or retire any key in this documentation lane.

## Evidence and change control

The domain state in this directory combines the 2026-07-12 Resend dashboard observation with authoritative DNS evidence supplied during the root execution session. Any later activation requires a separately authorized re-check; it is not authorized by this documentation and must honor the DNS freeze and hard gates above.
