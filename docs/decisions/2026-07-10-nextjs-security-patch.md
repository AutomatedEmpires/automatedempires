# 2026-07-10 — Next.js security patch

## Context

The first Vercel preview for the AutomatedEmpires project compiled, typed, and prerendered successfully, then Vercel rejected the deployment because Next.js 15.1.6 is vulnerable to the React Server Components security advisories.

The official January 2026 advisory establishes the security baseline, while the current package audit identifies additional 2026 fixes available only in the maintained Next.js 15.5 line. Next.js 15.5.20 is the current stable 15.x patch in the package registry. The React advisory identifies React 19.0.4 as the safe 19.0 release. AutomatedEmpires has no application secrets or database runtime today, so there is no parent-site runtime credential to rotate.

References:

- https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components
- https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components
- https://nextjs.org/blog/security-update-2025-12-11

## Decision

- Stay on Next.js 15 and React 19.0 to avoid a major-version migration.
- Move to the current patched Next.js 15.5 maintenance release, 15.5.20.
- Pin React and React DOM 19.0.4.
- Pin PostCSS 8.5.16 and use a pnpm override for Next.js's older transitive PostCSS pin.
- Generate and commit the pnpm lockfile with the repository-pinned pnpm 10.12.4.
- Do not introduce feature, UI, routing, or provider behavior changes in this patch.

## Consequences

- Vercel can deploy a patched App Router build and the production dependency audit has no known vulnerabilities.
- Local and CI installs become reproducible with pnpm.
- A later Next.js major/minor upgrade remains a separate reviewed decision.
