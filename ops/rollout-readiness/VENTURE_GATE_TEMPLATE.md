# Venture Rollout Gate Template

- **Venture:** `<name>`
- **Gate owner:** `<person>`
- **Transfer owner:** `<person>`
- **Candidate commit:** `<full SHA>`
- **Candidate Preview:** `<non-secret URL or deployment ID>`
- **Last-good Production:** `<deployment ID and commit>`
- **Rollback target:** `<deployment ID and commit>`
- **Review date:** `YYYY-MM-DD`
- **Decision:** `GO | NO-GO | EXCEPTION REQUIRED`

Use a fresh copy of this file for each venture and rollout candidate. Record identifiers and links, never credential values, customer data, private URLs, cookies, or recovery codes.

## Status rules

Every row must contain exactly one status:

- `pass` — the applicable behavior was exercised successfully and evidence is linked.
- `fail` — the behavior was exercised and produced an unacceptable result.
- `blocked` — the behavior is required but cannot yet be tested or lacks authoritative evidence.
- `deferred` — an authorized owner deliberately moved the requirement to a later pass; record owner, reason, expiry/review date, and risk acceptance.
- `not applicable` — the venture does not use or need the capability; record why. This is a product decision, not a substitute for missing evidence.

A section passes only when every applicable row is `pass`. Any `fail` or `blocked` makes the rollout a no-go. A `deferred` item requires written risk acceptance and cannot conceal a release-critical dependency. `not applicable` must be revalidated when product scope changes.

## Evidence record format

For every row, complete all columns. Prefer immutable evidence tied to the candidate SHA and timestamp.

| Check | Status | Evidence / artifact | Owner | Verified (UTC) | Exception / expiry |
|---|---|---|---|---|---|
| Example: exact-main Preview | `blocked` | `<deployment ID; commit; test record>` | `<name>` | `YYYY-MM-DD HH:MM` | `<none or approved exception>` |

## 1. Source

| Check | Status | Evidence / artifact | Owner | Verified (UTC) | Exception / expiry |
|---|---|---|---|---|---|
| Canonical repository and owning organization confirmed | `<status>` | `<repo URL/ID>` | `<owner>` | `<time>` | `<note>` |
| Default branch and full candidate SHA confirmed | `<status>` | `<branch; SHA>` | `<owner>` | `<time>` | `<note>` |
| `main` is clean and contains the intended release source | `<status>` | `<tree/status evidence>` | `<owner>` | `<time>` | `<note>` |
| No conflicting branches or PRs affect the candidate | `<status>` | `<PR/branch query>` | `<owner>` | `<time>` | `<note>` |
| Required checks are green at the candidate SHA | `<status>` | `<check run IDs>` | `<owner>` | `<time>` | `<note>` |
| Last-good rollback commit is known and retrievable | `<status>` | `<SHA/tag>` | `<owner>` | `<time>` | `<note>` |
| Open security alerts are classified by severity and disposition | `<status>` | `<alert register>` | `<owner>` | `<time>` | `<note>` |
| Dependency, license, and secret-scanning exceptions are accepted | `<status>` | `<register>` | `<owner>` | `<time>` | `<note>` |

## 2. Runtime

| Check | Status | Evidence / artifact | Owner | Verified (UTC) | Exception / expiry |
|---|---|---|---|---|---|
| Canonical Vercel project, team, root directory, and Git binding confirmed | `<status>` | `<project ID/map>` | `<owner>` | `<time>` | `<note>` |
| Exact-main Preview deployed from the recorded candidate SHA | `<status>` | `<deployment ID/SHA>` | `<owner>` | `<time>` | `<note>` |
| Preview passed a functional smoke, not only a build check | `<status>` | `<test record/screens/logs>` | `<owner>` | `<time>` | `<note>` |
| Current Production deployment, source SHA, and environment identified | `<status>` | `<deployment ID/SHA>` | `<owner>` | `<time>` | `<note>` |
| Functional rollback tested and recovery time recorded | `<status>` | `<drill record>` | `<owner>` | `<time>` | `<note>` |
| Domain, certificate, DNS, and canonical redirects verified | `<status>` | `<DNS/TLS evidence>` | `<owner>` | `<time>` | `<note>` |
| Mail records remain intact through web cutover testing | `<status>` | `<zone diff>` | `<owner>` | `<time>` | `<note>` |
| Doppler is the authoritative environment contract | `<status>` | `<project/config/name-only map>` | `<owner>` | `<time>` | `<note>` |
| Vercel bindings match the approved Doppler contract | `<status>` | `<names-only diff>` | `<owner>` | `<time>` | `<note>` |
| Logs and health checks contain no secret or private-data leakage | `<status>` | `<review record>` | `<owner>` | `<time>` | `<note>` |

## 3. Data

| Check | Status | Evidence / artifact | Owner | Verified (UTC) | Exception / expiry |
|---|---|---|---|---|---|
| Canonical Supabase project, region, and project ref verified if applicable | `<status>` | `<project map>` | `<owner>` | `<time>` | `<note>` |
| Environment/lane isolation is documented | `<status>` | `<lane map>` | `<owner>` | `<time>` | `<note>` |
| Repository migrations and managed migration ledger are reconciled | `<status>` | `<read-only diff>` | `<owner>` | `<time>` | `<note>` |
| Schema drift is classified before any replay or write | `<status>` | `<drift report>` | `<owner>` | `<time>` | `<note>` |
| RLS is enabled where intended and policies match product intent | `<status>` | `<policy inventory>` | `<owner>` | `<time>` | `<note>` |
| Anonymous and ordinary-user access tests enforce least privilege | `<status>` | `<test record>` | `<owner>` | `<time>` | `<note>` |
| Service-role consumers and key provenance are documented | `<status>` | `<consumer map>` | `<owner>` | `<time>` | `<note>` |
| Storage, functions, queues, cron, webhooks, and extensions are inventoried | `<status>` | `<resource map>` | `<owner>` | `<time>` | `<note>` |
| Backup/export completed and integrity verified | `<status>` | `<backup ID/checksum>` | `<owner>` | `<time>` | `<note>` |
| Restore path was exercised against a safe destination | `<status>` | `<restore drill>` | `<owner>` | `<time>` | `<note>` |
| Data retention, deletion, residency, and owner are documented | `<status>` | `<policy>` | `<owner>` | `<time>` | `<note>` |

## 4. Auth

| Check | Status | Evidence / artifact | Owner | Verified (UTC) | Exception / expiry |
|---|---|---|---|---|---|
| Canonical Clerk development/staging/Production apps verified if applicable | `<status>` | `<app IDs/map>` | `<owner>` | `<time>` | `<note>` |
| Production keys are installed only in the intended lane | `<status>` | `<names-only binding proof>` | `<owner>` | `<time>` | `<note>` |
| Allowed origins, redirects, OAuth callbacks, and custom domains pass | `<status>` | `<settings/test record>` | `<owner>` | `<time>` | `<note>` |
| Signup, login, logout, session refresh, and recovery pass | `<status>` | `<test record>` | `<owner>` | `<time>` | `<note>` |
| Email/phone verification and MFA policy are deliberate | `<status>` | `<policy/test>` | `<owner>` | `<time>` | `<note>` |
| Role, organization, and custom claims are least privilege and verified | `<status>` | `<claims matrix/tests>` | `<owner>` | `<time>` | `<note>` |
| Webhook destination, signature, retry, and idempotency behavior pass | `<status>` | `<webhook test>` | `<owner>` | `<time>` | `<note>` |
| User migration or re-registration path is documented | `<status>` | `<runbook>` | `<owner>` | `<time>` | `<note>` |
| Admin and lockout recovery are recipient-tested | `<status>` | `<recovery drill>` | `<owner>` | `<time>` | `<note>` |

## 5. Money

| Check | Status | Evidence / artifact | Owner | Verified (UTC) | Exception / expiry |
|---|---|---|---|---|---|
| Stripe account ID, mode, legal entity, and business identity verified if applicable | `<status>` | `<non-secret account proof>` | `<owner>` | `<time>` | `<note>` |
| Products, prices, currencies, tax behavior, and portal configuration verified | `<status>` | `<catalog export>` | `<owner>` | `<time>` | `<note>` |
| Test-mode Checkout/Billing/payment flow passes | `<status>` | `<test IDs/result>` | `<owner>` | `<time>` | `<note>` |
| Webhook endpoint, signing secret binding, event set, retry, and idempotency pass | `<status>` | `<test record>` | `<owner>` | `<time>` | `<note>` |
| Refund, cancellation, dispute, tax, payout, and reconciliation owners documented | `<status>` | `<operations map>` | `<owner>` | `<time>` | `<note>` |
| Connect charge model and liability are approved if applicable | `<status>` | `<legal/product decision>` | `<owner>` | `<time>` | `<note>` |
| Live customer, subscription, invoice, and money residue is classified | `<status>` | `<non-sensitive inventory>` | `<owner>` | `<time>` | `<note>` |
| No live customer or money state was touched without explicit approval | `<status>` | `<change log/approval>` | `<owner>` | `<time>` | `<note>` |
| Promotion and rollback avoid double charging or duplicate events | `<status>` | `<runbook/test>` | `<owner>` | `<time>` | `<note>` |

## 6. Email

| Check | Status | Evidence / artifact | Owner | Verified (UTC) | Exception / expiry |
|---|---|---|---|---|---|
| Sending domain and owning Resend team/account verified | `<status>` | `<domain/team map>` | `<owner>` | `<time>` | `<note>` |
| SPF, DKIM, DMARC, MX, and verification state pass | `<status>` | `<DNS evidence>` | `<owner>` | `<time>` | `<note>` |
| Scoped key is bound only to the intended venture/lane | `<status>` | `<names-only proof>` | `<owner>` | `<time>` | `<note>` |
| `From` identity is verified and product-appropriate | `<status>` | `<identity>` | `<owner>` | `<time>` | `<note>` |
| `Reply-To` resolves to an owned, monitored mailbox | `<status>` | `<mailbox evidence>` | `<owner>` | `<time>` | `<note>` |
| Support mailbox exists with named operators and recovery | `<status>` | `<mailbox/runbook>` | `<owner>` | `<time>` | `<note>` |
| Controlled delivery and human reply smoke pass | `<status>` | `<message IDs/timestamps>` | `<owner>` | `<time>` | `<note>` |
| Bounce, complaint, suppression, abuse, and reputation handling documented | `<status>` | `<runbook>` | `<owner>` | `<time>` | `<note>` |
| Broad or legacy keys remain until scoped replacement has zero-use proof | `<status>` | `<retirement gate>` | `<owner>` | `<time>` | `<note>` |

## 7. Observability

| Check | Status | Evidence / artifact | Owner | Verified (UTC) | Exception / expiry |
|---|---|---|---|---|---|
| Venture-specific Sentry project and DSN installed in intended lanes | `<status>` | `<project/binding map>` | `<owner>` | `<time>` | `<note>` |
| Candidate release is attributed to the exact SHA | `<status>` | `<release ID/SHA>` | `<owner>` | `<time>` | `<note>` |
| Controlled runtime event reaches the correct project/environment | `<status>` | `<event ID>` | `<owner>` | `<time>` | `<note>` |
| Source maps and stack traces are usable without exposing source secrets | `<status>` | `<event review>` | `<owner>` | `<time>` | `<note>` |
| Scrubbing excludes secrets, tokens, customer content, and sensitive PII | `<status>` | `<scrubber test>` | `<owner>` | `<time>` | `<note>` |
| Alert recipients, severity routing, retention, and escalation are verified | `<status>` | `<alert test/policy>` | `<owner>` | `<time>` | `<note>` |
| Build/release tokens are scoped and rotation is tested | `<status>` | `<token governance record>` | `<owner>` | `<time>` | `<note>` |

## 8. Analytics

| Check | Status | Evidence / artifact | Owner | Verified (UTC) | Exception / expiry |
|---|---|---|---|---|---|
| Venture-specific PostHog project, host, and lane labels verified if applicable | `<status>` | `<project/binding map>` | `<owner>` | `<time>` | `<note>` |
| One controlled non-sensitive event reaches the intended project/lane | `<status>` | `<event/time>` | `<owner>` | `<time>` | `<note>` |
| Event taxonomy and owner are documented | `<status>` | `<taxonomy>` | `<owner>` | `<time>` | `<note>` |
| Autocapture, session replay, console capture, masking, and sampling are documented | `<status>` | `<settings/policy>` | `<owner>` | `<time>` | `<note>` |
| Consent, privacy, retention, deletion, residency, and opt-out posture are approved | `<status>` | `<policy>` | `<owner>` | `<time>` | `<note>` |
| Billing caps/alerts and usage owner are recorded | `<status>` | `<billing evidence>` | `<owner>` | `<time>` | `<note>` |

## 9. Maps

| Check | Status | Evidence / artifact | Owner | Verified (UTC) | Exception / expiry |
|---|---|---|---|---|---|
| Venture-specific Mapbox token and required minimum scopes verified if applicable | `<status>` | `<token name/scope>` | `<owner>` | `<time>` | `<note>` |
| Allowed origins include only approved Preview/Production hosts | `<status>` | `<origin test>` | `<owner>` | `<time>` | `<note>` |
| Denied-origin behavior is verified | `<status>` | `<negative test>` | `<owner>` | `<time>` | `<note>` |
| Exact candidate renders the required map flows | `<status>` | `<functional test>` | `<owner>` | `<time>` | `<note>` |
| Production binding and usage attribution are verified | `<status>` | `<deployment/usage evidence>` | `<owner>` | `<time>` | `<note>` |
| Billing monitoring and overage owner are recorded | `<status>` | `<billing runbook>` | `<owner>` | `<time>` | `<note>` |
| Old-token retirement requires zero-use evidence and a working rollback token | `<status>` | `<retirement gate>` | `<owner>` | `<time>` | `<note>` |

## 10. Media

| Check | Status | Evidence / artifact | Owner | Verified (UTC) | Exception / expiry |
|---|---|---|---|---|---|
| Cloudinary/media account, environment, folders, consumers, and admins documented | `<status>` | `<boundary map>` | `<owner>` | `<time>` | `<note>` |
| Folder separation is not misrepresented as access control | `<status>` | `<risk classification>` | `<owner>` | `<time>` | `<note>` |
| Upload presets, transformations, signed/unsigned policy, and origins reviewed | `<status>` | `<preset review>` | `<owner>` | `<time>` | `<note>` |
| Assets, references, licensing, checksums, and export path inventoried | `<status>` | `<export/reference map>` | `<owner>` | `<time>` | `<note>` |
| Quota, billing, retention, deletion, and support owner documented | `<status>` | `<operations map>` | `<owner>` | `<time>` | `<note>` |
| Transfer-grade gap is classified and accepted | `<status>` | `<decision>` | `<owner>` | `<time>` | `<note>` |
| No destructive media migration occurs without URL, rollback, and founder approval | `<status>` | `<approval/change log>` | `<owner>` | `<time>` | `<note>` |

## 11. Operations

| Check | Status | Evidence / artifact | Owner | Verified (UTC) | Exception / expiry |
|---|---|---|---|---|---|
| Primary and backup administrators have least-privilege access | `<status>` | `<RBAC map>` | `<owner>` | `<time>` | `<note>` |
| Admin lockout and recovery drill passes | `<status>` | `<drill>` | `<owner>` | `<time>` | `<note>` |
| Support intake, severity, response targets, and escalation are documented | `<status>` | `<support runbook>` | `<owner>` | `<time>` | `<note>` |
| Privacy notice, consent, retention, deletion, and request handling are approved | `<status>` | `<policy>` | `<owner>` | `<time>` | `<note>` |
| Incident response runbook and provider escalation paths are current | `<status>` | `<runbook>` | `<owner>` | `<time>` | `<note>` |
| Backup/export/restore runbook is recipient-executable | `<status>` | `<runbook/drill>` | `<owner>` | `<time>` | `<note>` |
| Deployment and rollback runbooks are candidate-specific | `<status>` | `<runbook/drill>` | `<owner>` | `<time>` | `<note>` |
| Credential rotation preserves create → install → verify → retire order | `<status>` | `<rotation runbook>` | `<owner>` | `<time>` | `<note>` |
| Monthly cost, billing account, alerts, and cost owner are recorded | `<status>` | `<cost sheet>` | `<owner>` | `<time>` | `<note>` |
| Transfer owner, provider owners, and post-transfer removal plan are named | `<status>` | `<ownership map>` | `<owner>` | `<time>` | `<note>` |
| Known exceptions have owners, risks, review dates, and expiry dates | `<status>` | `<exception register>` | `<owner>` | `<time>` | `<note>` |

## 12. Promotion and sign-off

Record the final pre-promotion snapshot:

| Item | Value |
|---|---|
| Candidate SHA / Preview deployment | `<value>` |
| Current Production SHA / deployment | `<value>` |
| Rollback SHA / deployment | `<value>` |
| Authoritative Doppler config | `<value>` |
| Backup/export artifact | `<value>` |
| Open accepted exceptions | `<value>` |
| Planned promotion window | `<value>` |
| Rollback trigger and decision owner | `<value>` |

Approvals:

| Role | Name | Decision | Timestamp | Evidence |
|---|---|---|---|---|
| Technical verifier | `<name>` | `<go/no-go>` | `<time>` | `<link>` |
| Operations/data owner | `<name>` | `<go/no-go>` | `<time>` | `<link>` |
| Money/legal owner, if applicable | `<name>` | `<go/no-go>` | `<time>` | `<link>` |
| Founder/release owner | `<name>` | `<go/no-go>` | `<time>` | `<link>` |

The builder does not approve their own release. Promotion is a separate authorized action after this gate is complete.
