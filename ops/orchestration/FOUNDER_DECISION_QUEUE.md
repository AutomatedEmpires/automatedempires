# Founder Decision Queue

**Snapshot:** 2026-07-12
**Rule:** A recommendation is not approval. Record the decision, owner, date, conditions, and review/expiry date where applicable.

| Priority | Decision | Current evidence | Recommended default | If approved / next action |
|---:|---|---|---|---|
| 1 | Can AutomatedEmpires PR #8 merge? | Open draft, mergeable, CI/Vercel green; docs-only Pass 5; Sweepza support note present | **Approve after content review** if claims remain evidence-scoped | Independent reviewer marks ready/merges; no provider or Production inference |
| 2 | Can AutomatedEmpires PR #9 merge? | Open draft, mergeable, CI/Vercel green; five reports plus dependency/lock changes | **Approve after #8 and fresh revalidation** | Update against post-#8 main, rerun checks, independent merge |
| 3 | Should Agent 2 rollout docs be pushed? | Six files committed locally as `87965f0e`; no PR; original worktree has mode drift | **Yes, docs-only** | Cherry-pick the one commit onto a fresh post-merge branch and open a draft PR |
| 4 | Should Agent 3 governance reports be pushed? | Five complete untracked reports; no PR; original worktree has mode drift | **Yes, docs-only** | Copy only five files to a fresh branch, secret-scan, commit, open draft PR |
| 5 | Should Explore&Earn Phase 2 run immediately? | An uncommitted Phase 2 freeze already exists in the Agent 1 worktree | **Confirm the existing writer now; authorize only named dark/test/disposable steps** | Founder attends Clerk decisions; no Production, live money/data, or credential retirement |
| 6 | Should Sweepza run next in parallel? | Its preflight is already active; dependencies overlap E&E Stripe/email state | **Allow evidence-only preflight; defer provider activation** | Complete docs/current-main Preview evidence; wait for E&E replacement endpoint and residue decisions |
| 7 | What is the governance fix priority for GitHub, Vercel, and GoDaddy? | GitHub is a personal-account dependency; Vercel shows one owner/MFA conflict; GoDaddy recovery/renewal governance is incomplete | **GitHub first, Vercel second, GoDaddy third**, with a non-secret registry immediately | Accept registry; plan provider-specific founder-attended backup-admin/recovery sessions without exposing recovery details |
| 8 | What is the Sweepza Stripe residue disposition? | Foreign E&E webhook, two unclassified customer objects, one `$0` draft invoice; no money activity recorded | **Classify and preserve; delete nothing** | Replace/prove E&E endpoint first, prove Sweepza endpoint/test flow, then approve each object action separately |
| 9 | Should Sweepza aliases/Resend capacity be activated? | `support@sweepza.com` owned; aliases available; no independent Resend send/delivery proof | **Keep inactive until mailbox purpose, operators, account capacity, and delivery/reply plan are approved** | Choose aliases and human owners; fund capacity only if required; prove scoped send/reply safely |
| 10 | Retain or retire ORAN Azure and Mailgun? | Broken/deferred Azure target may still cost money; Mailgun DNS exists; live ownership/billing unknown | **Retain unchanged while read-only inventory runs** | Decide after subscription/resource/billing/recovery and mail-dependency evidence; no DNS/resource deletion by inference |
| 11 | What are BidSpace's domain, legal entity, and Stripe Connect model? | No final domain; Production auth/mail absent; Connect liability/model undefined | **Decision work before purchase/provisioning** | Approve name/domain budget, operating entity, charge model, tax/payout/refund/dispute/fraud/support owners |
| 12 | When should the Explore&Earn design pass begin? | Current design is explicitly non-final; readiness baseline still NO-GO; future brief exists | **After Phase 2 preserves a stable runtime/rollback baseline** | Approve design brief and separate design branch; do not mix design acceptance with Production approval |

## Immediate decisions caused by active overlap

Three follow-on lanes were already present at intake. The founder should confirm their single writers before any further execution:

- Explore&Earn Phase 2 in the existing Agent 1 worktree.
- Provider governance registry on `codex/provider-governance-registry`.
- Sweepza preflight on `codex/sweepza-independence-preflight`.

Until confirmed, each lane may preserve and report evidence but must not broaden scope or perform provider mutations.

## Decision record template

| Decision | Choice | Owner | Decided (UTC) | Conditions | Review / expiry |
|---|---|---|---|---|---|
| `<item>` | `<approve / reject / defer>` | `<name>` | `<timestamp>` | `<scope and exclusions>` | `<date>` |

