# Clerk Application Matrix

**Verified provider snapshot:** 2026-07-10
**Pass 2 status:** Refreshed through read-only Clerk Backend API checks and Doppler environment mapping; no credential material is recorded.
**Security note:** Publishable values, secret values, webhook signing material, and credential fingerprints are intentionally excluded.

Clerk application intent in source code is not proof of a live provider instance. Environment findings below are limited to instance identity and separation.

## Current venture boundaries

| Venture | Current provider evidence | Environment separation | Contamination status | Safe next action |
|---|---|---|---|---|
| AutomatedEmpires | No parent-site Clerk application was verified, and the current public portfolio site does not establish an auth requirement | Not applicable | No contamination confirmed | Keep auth out of the parent runtime unless a defined private product requires it. |
| Explore&Earn | Verified development instance `ins_3EbijmjwDxAGFSseSube1NHpMLk` on the provider development domain `calm-panther-70`; it contains one user, no configured Clerk domain was returned, and no Clerk webhook signing name is present in Doppler | Only `dev` is configured; `stg` and `prd` contain metadata only | No cross-venture sharing found; **production identity and webhook activation are missing** | Create or verify the venture-owned production instance, domain, OAuth providers, Supabase JWT template, webhook, and admin ownership. Plan for the development user separately because Clerk does not transfer development users to production. |
| ORAN | No authoritative ORAN Clerk application/instance was provider-verified in this matrix | Unknown | Unknown | Reconcile the current auth architecture and migration branch before provisioning or copying configuration. |
| BidSpace | Verified development instance `ins_3EhjtEaNHw8zCMMwPWby7O6tsWB` on the provider development domain `factual-puma-97` | Development is identified; staging and production resources were not verified | No cross-venture sharing found; production identity is missing | Create a BidSpace-specific production instance only after the product domain is selected; document redirect and webhook boundaries. |
| Lake & Pine | Clerk is a planned production dependency; no app identity was verified | Unknown | Unknown | Provision only when the production auth flow and domain are settled. Use Lake & Pine-specific ownership and callbacks. |
| Sweepza | **Confirmed:** `dev`, `stg`, and `prd` point to development instance `ins_3EhjrYiNBzhqkZlG9kIc2Gh4dSy` on `apt-cattle-80`; it contains one user. All three Doppler configs also reuse the same webhook signing configuration, while the deployed health check previously reported the webhook inactive | Production and staging are not isolated from development; provider endpoint activation remains unproven | **Confirmed cross-environment contamination within Sweepza**; no cross-venture app sharing was confirmed | Create or activate the Sweepza production instance, configure production-only domain/OAuth/webhook settings, prove the role and webhook flows, then replace `prd`. Give `stg` an explicit separate-app or preview strategy; do not change `dev` first. |
| LogLoads | **Confirmed:** `dev` and `stg` point to development instance `ins_3EhjpXH8SIg9bCKF9TYYv7RsHYW` on `unbiased-buffalo-23`; it contains zero users and `prd` has no Clerk configuration | Staging is not isolated from development; production identity is absent | **Confirmed cross-environment contamination within LogLoads**; no cross-venture app sharing was confirmed | Choose an explicit staging strategy and create production identity only after the production runtime is stable. The zero-user state lowers migration risk, but callbacks/webhooks still require independent smoke tests. |

## Separation requirements

- A venture's production instance must not serve another venture.
- Development and production must never resolve to the same development instance.
- Staging must have a documented isolation strategy; reusing development is not transfer-ready.
- Clerk has no native staging instance. Strict staging requires a separate application/domain; provider-hosted previews may deliberately use development identity only when that exception is documented.
- Development instances are capped at 100 users and are not production-safe. Development users cannot be transferred directly into production.
- Domains, redirect URLs, OAuth credentials, JWT templates, webhook endpoints, subscribed events, and admin owners must be recorded per instance.
- Rotate or replace configuration only after the new instance is proven end to end; do not strand existing users or webhook consumers.
