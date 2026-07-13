# Dependency Risk Register

Date: 2026-07-12. Versions are exact audited lockfile values unless a range is stated. “Checks” describes the existing update branch or the safe fix on `codex/security-ci-readiness`; it does not authorize a merge.

| Repo | Package | Severity | Direct/transitive | Current version | Fixed version | Existing PR | Checks | Breaking risk | Recommended action |
|---|---|---|---|---|---|---|---|---|---|
| AutomatedEmpires | `postcss` | Medium | Transitive runtime via Next; `pnpm-lock.yaml` | `8.4.31` | `8.5.10` | #7 merged a direct bump but left Next's nested copy | Branch audit/type/lint/build pass | Low-Medium | Merge tested exact pnpm override |
| AutomatedEmpires | `@eslint/plugin-kit` | Low | Transitive development via ESLint; `pnpm-lock.yaml` | `0.2.8` | `>=0.3.4`; branch resolves `0.4.1` | None | Branch audit/type/lint/build pass | Low | Merge same-major ESLint `9.39.5` update |
| ORAN | `next` | High | Direct runtime; `package.json`/`package-lock.json` | `16.1.6` | `>=16.2.6` | #64 uses `16.2.10` | Base test/audit/sync fail | Medium | Rerun #64 only after base gates are repaired |
| ORAN | `drizzle-orm` | High | Direct runtime | `0.45.1` | `0.45.2` | #65 | Removes one audit finding; base gates fail | Low-Medium | Rebase/rerun #65 after base fixes |
| ORAN | `vite` | High/Medium | Direct development | `6.4.1` | `6.4.3` | None | Not tested | Low | Isolated dev-tool patch and full suite |
| ORAN | `protobufjs` | Critical/High/Medium | Transitive runtime | `7.5.4` | `7.6.3` | None | Main-equivalent audit fails | Medium | Refresh owning parent/lock without force |
| ORAN | `@protobufjs/utf8` | Medium | Transitive runtime | `1.1.0` | `1.1.1` | None | Not tested | Low | Isolated lock refresh |
| ORAN | `@grpc/grpc-js` | High | Transitive runtime | `1.14.3` | `1.14.4` | None | Not tested | Low | Isolated patch refresh |
| ORAN | `@opentelemetry/core` | Medium | Transitive runtime | `2.1.0`, `2.2.0`, `2.5.1` | `2.8.0` | Dependabot updater failed | Production audit fails | High | Coordinate observability graph upgrade |
| ORAN | `@opentelemetry/sdk-node` / `exporter-prometheus` | High | Transitive runtime | `<0.217.0` | `0.217.0` | None | Production audit fails | High | Test with Application Insights graph; approval required |
| ORAN | `undici` | High/Medium/Low | Transitive runtime; root override | `7.24.3` | `7.28.0` | None | Not tested | Low-Medium | Update override and run full suite |
| ORAN | `uuid` | Medium | Transitive runtime | `8.3.2` | `11.1.1` | None | Force proposes breaking graph changes | High | Upgrade owning auth/telemetry parents; never force |
| ORAN | `ws` | High | Transitive development | `8.19.0` | `8.21.0` | None | Not tested | Low | Patch/minor lock refresh if range permits |
| ORAN | `postcss` | Medium | Transitive runtime via Next | `8.4.31` | `8.5.10` | #64 does not fix it | Audit still fails | Medium-High | Test supported override; never accept forced Next downgrade |
| ORAN | `@babel/core` | Low | Transitive development | `7.29.0` | `7.29.6` | None | Not tested | Low | Dev lock refresh |
| ORAN | `lodash` / `lodash-es` | High/Medium | Transitive development | `4.17.23` | `4.18.0` | None | Not tested | Medium | Update owning dev dependency and Storybook/tests |
| ORAN | `picomatch` | Medium | Transitive development | `2.3.1`, `4.0.3` | `2.3.2`, `4.0.4` | None | Not tested | Low | Parent/lock refresh |
| ORAN | `flatted` | High | Transitive development | `3.3.3` | `3.4.2` | None | Not tested | Low | Parent/lock refresh |
| ORAN | `esbuild` | Medium | Transitive development via deprecated `@esbuild-kit` | `0.18.20` nested | `>=0.25.0` | None | Not tested | Medium | Replace/update deprecated parent |
| ORAN | `@vitest/coverage-v8` / `vitest` | Freshness | Direct development | `4.1.0` | `4.1.10` | #66 | Base test/audit/sync fail; no prod-audit improvement | Low-Medium | Re-evaluate after base fixes |
| BidSpace | `tar` | 6 High + 1 Medium | Transitive development via Supabase CLI | `7.4.3` | `>=7.5.16` | Updater run only; no PR | `security_update_not_possible` | Medium-High | Test narrow override; otherwise approve Supabase CLI v2 |
| BidSpace | `js-yaml` | Medium | Transitive development via Changesets | `3.14.2` | `>=3.15.0` | Updater run only | `security_update_not_possible` | Low-Medium | Test narrow override/update with Changesets |
| BidSpace | `esbuild` | Low | Transitive development via `tsx` | `0.28.0` | `>=0.28.1` | Updater run only | `security_update_not_possible` | Low | Update/test direct parent `tsx` |
| BidSpace | `postcss` | Medium | Transitive runtime via Next `16.2.7` | `8.4.31` | `>=8.5.10` | #61 merged direct `8.5.16`, nested copy remains | Main CI green; audit fails | Low-Medium | Test exact override or supported Next release |
| Lake & Pine | `postcss` | Medium | Transitive runtime via Next `16.2.10` | `8.4.31` | `>=8.5.10` | Updater run only | `security_update_not_possible` | Low-Medium | Test exact override with build/runtime checks |
| Sweepza | None known | None | — | — | — | None | Frozen install/audit/CI green | — | Continue scheduled audits |
| LogLoads | `postcss` | Medium | Transitive runtime via Next | `8.4.31` | `>=8.5.10` | Updater run only | Main CI green; audit fails | Low-Medium | Test exact pnpm override through full CI/E2E |
| LogLoads | `esbuild` | Low | Transitive development via Vitest/Vite | `0.27.7` | `>=0.28.1` | Updater run only | Main CI green; audit fails | Medium-High | Test exact override; otherwise approve Vitest 4 upgrade |

## Guardrails

- No automatic major upgrades or `audit fix --force` commands were run.
- ORAN's forced fixes propose breaking downgrades (including old Next/NextAuth/Application Insights) and are explicitly rejected.
- GitHub alert counts and package-manager installed-tree counts differ because one advisory can create multiple alert records and development dependencies are excluded from production-only audits.
- AutomatedEmpires' GitHub alert will remain open on `main` until the tested branch is reviewed and merged.
