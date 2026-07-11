# Clerk Application Matrix

**Verified provider snapshot:** 2026-07-10
**Pass 2 status:** Refreshed through read-only Clerk Backend API checks and Doppler environment mapping; no credential material is recorded.
**Pass 3 status:** Dark production instances were created for Explore&Earn, Sweepza, and LogLoads. Clerk's development-instance clone path was payment-gated by the existing Phone/SMS MFA configuration, so each production instance remains on dark/default configuration rather than being represented as a dev clone. No production key has been installed or deployed, and development users were untouched.
**Security note:** Publishable values, secret values, webhook signing material, and credential fingerprints are intentionally excluded.

Clerk application intent in source code is not proof of a live provider instance. Environment findings below are limited to instance identity and separation.

## Current venture boundaries

| Venture | Current provider evidence | Environment separation | Contamination status | Safe next action |
|---|---|---|---|---|
| AutomatedEmpires | No parent-site Clerk application was verified, and the current public portfolio site does not establish an auth requirement | Not applicable | No contamination confirmed | Keep auth out of the parent runtime unless a defined private product requires it. |
| Explore&Earn | Dev instance `ins_3EbijmjwDxAGFSseSube1NHpMLk` has one user. Separate dark production instance (`app_3Ebij…` / `ins_3GKoZ5…`) exists for `exploreandearn.com`; all five CNAMEs resolve, Clerk DNS is **Verified**, and SSL is **Issued** | Provider identity/DNS/TLS are separated; only `dev` is configured at runtime. No production key is installed | No cross-venture sharing. **Provider resource/DNS/SSL safely fixed; OAuth/JWT/webhook/admin/runtime proof incomplete.** Dev user untouched | Configure production domain/OAuth/Supabase JWT/webhook/admin ownership. Install only in dark Preview and prove full auth before `prd`; plan dev-user re-registration separately. |
| ORAN | No authoritative ORAN Clerk application/instance was provider-verified in this matrix | Unknown | Unknown | Reconcile the current auth architecture and migration branch before provisioning or copying configuration. |
| BidSpace | Verified development instance `ins_3EhjtEaNHw8zCMMwPWby7O6tsWB` on the provider development domain `factual-puma-97` | Development is identified; staging and production resources were not verified | No cross-venture sharing found; production identity is missing | Create a BidSpace-specific production instance only after the product domain is selected; document redirect and webhook boundaries. |
| Lake & Pine | Clerk is a planned production dependency; no app identity was verified | Unknown | Unknown | Provision only when the production auth flow and domain are settled. Use Lake & Pine-specific ownership and callbacks. |
| Sweepza | `dev`/`stg`/`prd` still use one-user dev instance `ins_3EhjrYiNBzhqkZlG9kIc2Gh4dSy`. Separate dark production instance (`app_3Ehjr…` / `ins_3GKoNMM…`) exists; five CNAMEs resolve, DNS is **Verified**, SSL **Issued** | Provider identity/DNS/TLS exist; no production key is installed. Live separation defect remains until `prd` replacement; staging reuses dev | **Provider setup safely fixed; runtime cutover blocked by production risk.** Dev user untouched | Configure OAuth/webhook/admin settings, install in dark Preview, prove role/profile/webhook flows, then replace `prd`; define staging strategy. |
| LogLoads | `dev`/`stg` use zero-user dev instance `ins_3EhjpXH8SIg9bCKF9TYYv7RsHYW`; `prd` absent. Separate dark production instance (`app_3Ehjp…` / `ins_3GKnzb…`) exists; five CNAMEs resolve, DNS **Verified**, SSL **Issued** | Provider identity/DNS/TLS exist; no production key installed. Staging reuses dev and production waits on runtime decision | **Provider setup safely fixed; runtime activation blocked by production risk.** Dev instance untouched | Choose runtime/staging strategy, configure callbacks/webhooks/admin settings, then prove auth in isolated Preview before activation. |

## Separation requirements

- A venture's production instance must not serve another venture.
- Development and production must never resolve to the same development instance.
- Staging must have a documented isolation strategy; reusing development is not transfer-ready.
- Clerk has no native staging instance. Strict staging requires a separate application/domain; provider-hosted previews may deliberately use development identity only when that exception is documented.
- Development instances are capped at 100 users and are not production-safe. Development users cannot be transferred directly into production.
- Domains, redirect URLs, OAuth credentials, JWT templates, webhook endpoints, subscribed events, and admin owners must be recorded per instance.
- Rotate or replace configuration only after the new instance is proven end to end; do not strand existing users or webhook consumers.
- A production instance existing in Clerk, or its DNS resolving, is not equivalent to a production runtime deployment. Record credential installation, deployment, and smoke verification as separate gates.
- The current production instances use dark/default configuration because cloning the Phone/SMS MFA configuration is payment-gated. Do not describe them as clones or activate paid SMS functionality without founder approval.
