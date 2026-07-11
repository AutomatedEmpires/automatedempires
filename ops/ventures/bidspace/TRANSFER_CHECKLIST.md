# BidSpace transfer checklist

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / provider-owner verification required**.

Complete with two people where the provider supports role transfer. Record names/IDs only, never credentials.

## Repository and governance

- [ ] Recipient has the required GitHub role on `AutomatedEmpires/bidspace`.
- [x] Strict `verify`/`design`, linear/squash history, conversation resolution, no force push/deletion, automation bypass, vulnerability alerts, and Dependabot updates are verified; CODEOWNERS/emergency access remain transfer-specific.
- [ ] Open work, data-migration risk, and legal/paid/destructive gates are handed off.

## Secrets and environments

- [ ] Doppler project `bidspace` ownership is transferred or shared appropriately.
- [ ] `dev`, `stg`, and `prd` access policies are verified independently.
- [ ] Only BidSpace variable names/resources are present; cross-venture references are removed after replacement verification.

## Runtime providers

- [ ] Vercel project `bidspace`, team, root directory, aliases, Preview, and Production access are verified; current release evidence is Preview `dpl_3vFJAPyiQqWr95woTY51mKBT1W1S` and `main` `2fe90a3eb8cd9bffd43be1ac401d151ae4ad39e8` / production `dpl_GQ2yhiJjwchgt7rJDSbU8Y8JuVDp`, both `READY`.
- [ ] Supabase fingerprint `…fsqslgxcv`, database ownership, backups, migration ledger, storage, and RLS are reviewed.
- [ ] Clerk application identity, domains, OAuth providers, webhook endpoint, and admin users are recorded.
- [ ] Stripe Connect platform/account ownership, legal entity, payout settings, products, webhook endpoints, and restricted access are reviewed by the recorded business/billing owner.
- [x] Record Sentry's distinct project/first event, ownership, one alert, scrubbers, and IP scrubbing; retention/runtime release remains transfer-specific. Record explicit non-use for Mapbox/Cloudinary/PostHog or create venture resources only when implemented.

## Domain and communications

- [ ] A production domain decision is made and ownership is proved before DNS or email-domain work.
- [ ] Registrar, DNS host, renewal owner, and recovery contact are documented.
- [ ] Transactional-email provider and sending-domain plan are explicitly approved if/when implemented.

## Acceptance

- [ ] Recipient can run a names-only environment audit without revealing values.
- [ ] Preview smoke test passes with BidSpace-only resources.
- [ ] Production rollback owner and escalation contacts are recorded.
- [ ] Sender and recipient sign off that no credential was exchanged in this repository.
