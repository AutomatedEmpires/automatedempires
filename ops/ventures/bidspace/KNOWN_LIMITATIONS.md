# BidSpace known limitations

Pass 2 provider refresh: 2026-07-10; no provider state was changed.

| Limitation | Classification | Operational effect |
|---|---|---|
| No candidate production domain was discovered | **Unknown / founder verification required** | DNS, branded email, OAuth redirect, and webhook-domain work cannot be finalized |
| Vercel Git/main/root/framework settings are verified, but no deployment, alias, domain, or production environment exists | **Verified current** | The site is not production-ready |
| Supabase has 25 RLS-enabled application tables and no policies; 13 remote migrations are recorded | **Verified current / intent unknown** | Data API access is deny-all unless privileged server-only access is deliberate; no write is safe without comparison |
| Development Clerk is verified; the active public Mapbox token is shared with Explore&Earn/LogLoads and appears unrestricted by Origin; the free Cloudinary product environment has an empty BidSpace folder but no BidSpace credential. Stripe Connect/PostHog/Sentry production resources are absent or unverified | **Mixed verified state** | Existing shared/provider placeholders are not transfer-ready; no active BidSpace Cloudinary writes were found |
| Runtime requires real Clerk configuration; authenticated routes also require Supabase server configuration | **Observed in repository** | A successful build is not a successful runtime smoke test |
| Hand-authored database types remain until generated against the real project | **Observed in repository** | Schema/type drift can reach runtime |
| Bidding, booking, and payment services are incomplete in the dated audit | **Observed in repository** | Do not market or operate the project as a finished marketplace |
| Stripe Connect can trigger identity, tax, payout, refund, and legal obligations | **Founder gate** | No account/platform creation or money movement without explicit approval |
| Local/staging/production database separation is not documented | **Unknown / founder verification required** | Environment isolation is incomplete until proven |
| Current Mapbox authorization lacks `tokens:read` and `tokens:write`, while BidSpace has no final production domain | **Access and domain blocker** | Restrictions cannot be inventoried and a venture-specific origin-restricted token cannot be finalized |

Older planning language is evidence of intent, not a current provider-dashboard attestation. Re-verify this register after each provider is connected.
