# BidSpace known limitations

Pass 2 provider refresh: 2026-07-10; no provider state was changed.

| Limitation | Classification | Operational effect |
|---|---|---|
| Production domain purchase is explicitly deferred | **Blocked by domain purchase / explicit decision** | DNS, branded email, OAuth redirect, and production webhook-domain work cannot be finalized |
| PR #62/#63 produced deployed source `2fe90a3eb8cd9bffd43be1ac401d151ae4ad39e8`, `READY` Preview `dpl_3vFJAPyiQqWr95woTY51mKBT1W1S`, and `READY` production `dpl_GQ2yhiJjwchgt7rJDSbU8Y8JuVDp`; current source later advanced through dependency-fix #64 at `69a53c4`, with no later deployment recorded | **Source/build fixed / deployed-source freshness and product-provider gate** | Revalidate current source before relying on the artifact; production identity/payments/email/domain remain incomplete |
| Supabase has 25 RLS-enabled application tables and no policies; 13 remote migrations are recorded | **Verified current / intent unknown** | Data API access is deny-all unless privileged server-only access is deliberate; no write is safe without comparison |
| Development Clerk verified; venture-specific Mapbox origin/local proof is green but protected Preview access is open; Cloudinary empty; Sentry governed; PostHog event proof open | **Mixed verified state** | Mapbox Production/domain and telemetry runtime remain incomplete |
| Runtime requires real Clerk configuration; authenticated routes also require Supabase server configuration | **Observed in repository** | A successful build is not a successful runtime smoke test |
| Hand-authored database types remain until generated against the real project | **Observed in repository** | Schema/type drift can reach runtime |
| Bidding, booking, and payment services are incomplete in the dated audit | **Observed in repository** | Do not market or operate the project as a finished marketplace |
| Stripe Connect can trigger identity, tax, payout, refund, and legal obligations | **Legal/business/tax/payout gate** | No account/platform creation or money movement without an approved operating model |
| Local/staging/production database separation is not documented | **Unknown / provider verification required** | Environment isolation is incomplete until proven |
| Current source consumes Mapbox and a scoped token is installed, but protected Preview access was client-side blocked and no final domain exists | **Access/domain blocker** | Verify through authorized Preview access; keep Production record/origin absent until domain decision |

Older planning language is evidence of intent, not a current provider-dashboard attestation. Re-verify this register after each provider is connected.
