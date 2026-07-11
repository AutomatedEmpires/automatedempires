# BidSpace transfer checklist

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / founder verification required**.

Complete with two people where the provider supports role transfer. Record names/IDs only, never credentials.

## Repository and governance

- [ ] Recipient has the required GitHub role on `AutomatedEmpires/bidspace`.
- [ ] Default branch protection, required CI, CODEOWNERS, and emergency access are verified.
- [ ] Open work, data-migration risk, and founder gates are handed off.

## Secrets and environments

- [ ] Doppler project `bidspace` ownership is transferred or shared appropriately.
- [ ] `dev`, `stg`, and `prd` access policies are verified independently.
- [ ] Only BidSpace variable names/resources are present; cross-venture references are removed after replacement verification.

## Runtime providers

- [ ] Vercel project `bidspace`, team, root directory, aliases, Preview, and Production access are verified.
- [ ] Supabase ref `hnjjcgxflxlfsqslgxcv`, database ownership, backups, migration ledger, storage, and RLS are reviewed.
- [ ] Clerk application identity, domains, OAuth providers, webhook endpoint, and admin users are recorded.
- [ ] Stripe Connect platform/account ownership, legal entity, payout settings, products, webhook endpoints, and restricted access are reviewed by the founder.
- [ ] Record Sentry's distinct project/first event and assign owner/alerts; record explicit non-use for current Mapbox/Cloudinary/PostHog or create venture resources only when implemented.

## Domain and communications

- [ ] A production domain decision is made and ownership is proved before DNS or email-domain work.
- [ ] Registrar, DNS host, renewal owner, and recovery contact are documented.
- [ ] Transactional-email provider and sending-domain plan are explicitly approved if/when implemented.

## Acceptance

- [ ] Recipient can run a names-only environment audit without revealing values.
- [ ] Preview smoke test passes with BidSpace-only resources.
- [ ] Production rollback owner and escalation contacts are recorded.
- [ ] Sender and recipient sign off that no credential was exchanged in this repository.
