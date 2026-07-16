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

- [ ] Recipient acknowledges BidSpace is a non-live host–vendor temporary-space marketplace; production-class artifacts do not authorize public bidding/booking, live payments, or Stripe Connect.
- [ ] Host/vendor profiles, temporary-space listings, maps where relevant, bidding/application, communication/outreach, methods/terms verification, and marketplace-trust responsibilities are handed off.
- [ ] Vercel project `bidspace`, team, root directory, aliases, Preview, and Production access are verified; current source includes #64 at `69a53c4`, while last-deployed release evidence is `2fe90a3eb8cd9bffd43be1ac401d151ae4ad39e8` with Preview `dpl_3vFJAPyiQqWr95woTY51mKBT1W1S` and production `dpl_GQ2yhiJjwchgt7rJDSbU8Y8JuVDp`, both `READY`.
- [ ] Supabase fingerprint `…fsqslgxcv`, database ownership, backups, migration ledger, storage, and RLS are reviewed.
- [ ] Clerk application identity, domains, OAuth providers, webhook endpoint, and admin users are recorded.
- [ ] If a later approved host-fee model uses Stripe/Connect, recipient reviews the legal entity, operating/payment model, platform/account ownership, products, webhooks, payouts, refunds/disputes, and restricted access. Otherwise record a product-approved `no resource` state.
- [ ] Sentry/PostHog/Mapbox venture resources exist; Mapbox origin/local proof is green. Complete authorized protected-Preview verification, PostHog event proof, retention, and explicit Cloudinary non-use before transfer.

## Domain and communications

- [ ] A production domain decision is made and ownership is proved before DNS or email-domain work.
- [ ] Registrar, DNS host, renewal owner, and recovery contact are documented.
- [ ] Transactional-email provider and sending-domain plan are explicitly approved if/when implemented.

## Acceptance

- [ ] Recipient can run a names-only environment audit without revealing values.
- [ ] Preview smoke test passes with BidSpace-only resources and synthetic/demo-only host, vendor, space, bidding/application, and communication fixtures.
- [ ] Recipient confirms no real bids, bookings, charges, payouts, or connected accounts are accepted or represented as live.
- [ ] Production rollback owner and escalation contacts are recorded.
- [ ] Sender and recipient sign off that no credential was exchanged in this repository.
