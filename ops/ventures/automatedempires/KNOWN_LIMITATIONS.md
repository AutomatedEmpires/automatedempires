# AutomatedEmpires known limitations

Last reviewed: 2026-07-10

| Limitation | Status | Operational consequence | Required next action |
| --- | --- | --- | --- |
| Vercel team, Git binding, branch, root, framework, and Node version are verified, but no preview/production deployment or custom domain exists. | **Verified current** | A repository merge has no proven production target yet. | Deploy and verify a preview and provider hostname before planning domain cutover. |
| Doppler `dev`, `stg`, and `prd` exist, but the supplied inventory found metadata only. | **Verified current** | There is no basis to assume runtime configuration is populated or synchronized. | Decide whether the site needs values; keep configs empty if it does not. |
| `automatedempires.com` is publicly registered at GoDaddy and serves Website Builder, but authenticated account control is unverified; multiple SPF records may conflict. | **Verified public / founder verification required** | Renewal/DNS recovery remains unproven and careless SPF or web changes could disrupt mail/site. | Verify the account, export the zone, repair SPF only after mail review, and attach Vercel only after a tested deployment. |
| The agent contract references `.github/workflows/ci.yml`, but no `.github` directory was present in the inspected checkout. | **Observed in repository** | The documented CI gate cannot be assumed to exist on this branch. | Reconcile the checkout with the remote default branch and add/restore CI through review if actually missing. |
| `README.md` notes that a lockfile still needs to be generated and committed. | **Observed in repository** | Frozen, reproducible dependency installation is not yet evidenced. | Generate and review the pnpm lockfile in a normal feature PR. |
| Resend, PostHog, Cloudinary, and Sentry are policy-approved but no AutomatedEmpires resources were live-verified. | **Unknown / founder verification required** | Optional integrations must be treated as absent from the operational inventory until verified. | Verify only when a current feature uses the provider; do not create speculative resources. |
| The current code has no application-level environment-variable reads. | **Observed in repository** | Adding configuration without a consuming feature would create unused operational surface. | Introduce variables only with the feature, owner, environment map, and removal plan. |
| The parent site has no Supabase requirement. | **Verified current** | A database would add unnecessary cost and access surface. | Preserve the no-database design unless a dated product decision requires one. |

## Evidence notes

- Repository scan: `README.md`, `AGENTS.md`, `package.json`, `app/layout.tsx`, `app/`, `components/`, `lib/`, and `next.config.mjs`.
- Portfolio context: `EMPIRE_INFRA_ALIGNMENT_PLAN.md`.
- Provider facts labeled **Verified current** were supplied for this alignment pass; no secret-bearing provider pages were copied into this repository.
