# BidSpace known limitations

Pass 2 provider refresh: 2026-07-10; no provider state was changed.

| Limitation | Classification | Operational effect |
|---|---|---|
| Production domain purchase is explicitly deferred | **Blocked by domain purchase / explicit decision** | DNS, branded email, OAuth redirect, and production webhook-domain work cannot be finalized |
| PR #62 merged as `c2c15f1582c1f47bcd589b601819597dd7bea767`; late findings were fixed in green PR #63, producing current `main` `2fe90a3eb8cd9bffd43be1ac401d151ae4ad39e8`, `READY` Preview `dpl_3vFJAPyiQqWr95woTY51mKBT1W1S`, and `READY` production `dpl_GQ2yhiJjwchgt7rJDSbU8Y8JuVDp`, but no custom domain or complete production provider environment exists | **Source/build fixed / product-provider gate** | Provider hostname works; production identity/payments/email/domain remain incomplete |
| Supabase has 25 RLS-enabled application tables and no policies; 13 remote migrations are recorded | **Verified current / intent unknown** | Data API access is deny-all unless privileged server-only access is deliberate; no write is safe without comparison |
| Development Clerk verified; shared public Mapbox value exists but inspected source use is branch-qualified; Cloudinary folder empty/no credential; Sentry distinct/ingesting/governed; Stripe Connect/PostHog absent/unverified | **Mixed verified state** | Placeholder Mapbox/Cloudinary are not resource readiness; Sentry boundary/governance is fixed |
| Runtime requires real Clerk configuration; authenticated routes also require Supabase server configuration | **Observed in repository** | A successful build is not a successful runtime smoke test |
| Hand-authored database types remain until generated against the real project | **Observed in repository** | Schema/type drift can reach runtime |
| Bidding, booking, and payment services are incomplete in the dated audit | **Observed in repository** | Do not market or operate the project as a finished marketplace |
| Stripe Connect can trigger identity, tax, payout, refund, and legal obligations | **Legal/business/tax/payout gate** | No account/platform creation or money movement without an approved operating model |
| Local/staging/production database separation is not documented | **Unknown / provider verification required** | Environment isolation is incomplete until proven |
| BidSpace `main` has no Mapbox runtime consumer, but accepted feature `511b763…` does; no final domain exists | **Branch/source/domain blocker** | Keep the default token as rollback; do not create a production token until reviewed source and final domain exist |

Older planning language is evidence of intent, not a current provider-dashboard attestation. Re-verify this register after each provider is connected.
