# Venture Transfer Packet Template

- **Venture:** `<name>`
- **Current owner/entity:** `<owner>`
- **Proposed recipient/entity:** `<recipient>`
- **Transfer coordinator:** `<person>`
- **Evidence snapshot date:** `YYYY-MM-DD`
- **Target acceptance date:** `YYYY-MM-DD`
- **Packet version:** `<version>`
- **Transfer state:** `draft | rehearsal | accepted | post-transfer closeout`

This packet is the minimum evidence required before Explore&Earn, Sweepza, LogLoads, Lake & Pine, BidSpace, ORAN, or AutomatedEmpires can be called transfer-ready or, where relevant, sale-ready. Delete no section. Mark an unused or product-prohibited capability `not applicable` with an owner-approved rationale.

Do not place passwords, API keys, signing secrets, recovery codes, private customer URLs, customer data, cookies, or raw database exports in this packet. Transfer secrets through the provider's supported invitation/rotation mechanism. Link only to appropriately access-controlled artifacts.

## Packet controls

| Control | Required value |
|---|---|
| Canonical packet location | `<controlled repository/document ID>` |
| Coordinator and backup | `<names/contact route>` |
| Recipient technical owner | `<name>` |
| Recipient billing/legal owner | `<name>` |
| Evidence freshness limit | `<days>` |
| Accepted exceptions register | `<link>` |
| Sensitive-artifact handoff channel | `<provider-supported method>` |
| Post-transfer access-removal date | `<date>` |

## 1. Venture overview

- Canonical definition and dated authority: `<link to docs/VENTURE_OPERATING_DEFINITIONS.md plus any later approved decision>`
- Product thesis and current customer promise: `<text>`
- Explicit non-goals, prohibited capabilities, and phase boundaries: `<text>`
- Known implementation/provider conflicts with the canonical definition and disposition: `<keep/repurpose/retire plan>`
- Current lifecycle: `concept | demo | Preview | Production | paused | redevelopment`
- Current public surfaces and applications: `<inventory>`
- User types and operator roles: `<inventory>`
- Revenue model and money flows: `<inventory or not applicable>`
- Data classes and highest sensitivity: `<classification>`
- Current release SHA, deployment, and last-good rollback: `<identifiers>`
- Known active users/customers and handling restrictions: `<non-sensitive count/classification>`
- In-scope and out-of-scope assets: `<list>`
- Known blockers to transfer: `<list>`

## 2. Legal and entity ownership

| Item | Current state | Transfer action | Owner | Acceptance evidence |
|---|---|---|---|---|
| Operating entity and jurisdiction | `<state>` | `<action>` | `<owner>` | `<evidence>` |
| IP/code/design ownership | `<state>` | `<action>` | `<owner>` | `<evidence>` |
| Trademarks/names/licenses | `<state>` | `<action>` | `<owner>` | `<evidence>` |
| Terms, privacy policy, DPAs, subprocessors | `<state>` | `<action>` | `<owner>` | `<evidence>` |
| Customer/vendor contracts | `<state>` | `<action>` | `<owner>` | `<evidence>` |
| Tax, refund, dispute, and payout liability | `<state>` | `<action>` | `<owner>` | `<evidence>` |
| Open claims, obligations, or restrictions | `<state>` | `<action>` | `<owner>` | `<evidence>` |

## 3. Domains and DNS

- Registrar account/team and registrant entity: `<non-secret IDs>`
- Domains, purpose, expiry, auto-renew, billing owner: `<table/link>`
- Recovery owners and MFA custody: `<roles>`
- Current nameservers and DNSSEC state: `<state>`
- Zone export with timestamp/checksum: `<artifact>`
- Web records and hosting destination: `<map>`
- MX, SPF, DKIM, DMARC, verification, and other mail records: `<map>`
- Approved cutover and rollback procedure: `<runbook>`
- Recipient rehearsal: import/reconstruct the zone safely and verify mail preservation: `<result>`

## 4. GitHub repository

- Owning organization, canonical repository, and transfer rights: `<IDs>`
- Default branch and accepted commit: `<branch/SHA>`
- Branch protection, required checks, rulesets, environments, and reviewers: `<map>`
- Open PRs, issues, Dependabot/security alerts, accepted risks, and licenses: `<register>`
- GitHub Apps, deploy keys, Actions variables, and secret **names/consumers**: `<names-only inventory>`
- CI/runtime versions and reproducible local build instructions: `<runbook>`
- Repository transfer/fork procedure and rollback: `<runbook>`
- Recipient rehearsal: clone, install, run checks, build, and open a test PR: `<result>`

## 5. Vercel project

- Team and canonical project ID/name: `<IDs>`
- Git repository/root directory/default branch binding: `<map>`
- Preview/Production domains and protection policy: `<map>`
- Environment variable names, targets, and authoritative Doppler config: `<names-only map>`
- Last-good Preview and Production deployment IDs/SHAs: `<IDs>`
- Build/install commands, runtime regions, functions/cron, and limits: `<map>`
- Domain attachment/certificate state: `<state>`
- Logs, usage, billing owner, and escalation route: `<map>`
- Rollback drill and recovery time: `<evidence>`
- Recipient rehearsal: deploy the exact accepted SHA to Preview and invoke safe rollback: `<result>`

## 6. Doppler project

- Venture project and `dev`/`stg`/`prd` configs: `<IDs>`
- RBAC, administrators, recovery, service accounts/tokens, and integrations: `<roles/IDs>`
- Variable names, purpose, owner, consumers, rotation class, and last review: `<names-only contract>`
- Vercel/GitHub/local consumer mapping: `<map>`
- Legacy/rollback credential retirement gates: `<register>`
- Export/escrow policy and incident access process: `<runbook>`
- Recipient rehearsal: receive least-privilege access and run a names-only contract check: `<result>`

## 7. Supabase project

- Team/project/region/ref and billing owner: `<IDs>`
- Environment/lane strategy: `<map>`
- Schemas, extensions, functions, cron, queues, webhooks, storage buckets, and auth usage: `<inventory>`
- Repository migration history versus managed ledger: `<reconciliation>`
- RLS tables/policies and ordinary-user negative/positive tests: `<evidence>`
- Service-role consumers and rotation path: `<names-only map>`
- Data classes, residency, retention, deletion, privacy-request, and legal owners: `<policy>`
- Backup/export artifact, timestamp, checksum, encryption/custody: `<evidence>`
- Restore drill against a safe destination and measured recovery time/objective: `<evidence>`
- Recipient rehearsal: inspect schema/RLS and restore a safe backup without Production writes: `<result>`

## 8. Clerk app

- Development/staging/Production app IDs and ownership: `<IDs>`
- Domains, origins, redirects, OAuth callbacks/providers, JWT templates, and claims: `<map>`
- Webhook endpoints/event set/signature owner/retry behavior: `<map>`
- User, organization, role, and admin model: `<model>`
- Signup/login/logout/recovery/MFA test record: `<evidence>`
- Current user migration or re-registration plan: `<runbook>`
- Billing, plan limits, SMS/MFA cost owner, admins, recovery, and escalation: `<map>`
- Recipient rehearsal: administer the app and pass auth/role/webhook/recovery flows in a safe lane: `<result>`

## 9. Stripe account, products, and webhooks

- Live/test account IDs, legal entity, country/currency, business profile, and owners: `<non-secret evidence>`
- Products, prices, coupons, tax, portal, Checkout/Billing, and Connect configuration: `<catalog/config export>`
- Webhook endpoints, modes, event sets, destination consumers, and signing-secret owners: `<map>`
- Customer/subscription/invoice/payment/refund/dispute residue: `<non-sensitive inventory and disposition>`
- Payout bank ownership and reconciliation process: `<controlled evidence>`
- Refund, cancellation, tax, dispute, fraud, payout, and support owners: `<operations map>`
- Test-mode end-to-end evidence and idempotency/retry behavior: `<evidence>`
- Live customer/money migration plan and explicit approval, if needed: `<approval>`
- Recipient rehearsal: test Checkout/Billing/webhook/refund without live money: `<result>`

## 10. Resend, mail domain, and support inbox

- Team/account, sending domain, billing, admins, recovery: `<IDs/roles>`
- SPF/DKIM/DMARC/MX verification: `<evidence>`
- Scoped key name/owner/consumer/rotation path: `<names only>`
- Approved `From`, `Reply-To`, and support identities: `<identities>`
- Mailbox provider, license, delegates, MFA, recovery, retention, and escalation: `<map>`
- Template inventory, triggered flows, and data classification: `<inventory>`
- Delivery/reply/bounce/complaint/suppression smoke: `<evidence>`
- Reputation/warm-up/abuse handling and sender rollback: `<runbook>`
- Recipient rehearsal: send a controlled message and complete a human reply/escalation: `<result>`

## 11. PostHog project

- Organization/project/host, environments, owners, billing caps/alerts: `<IDs/map>`
- API key consumers and rotation path: `<names-only map>`
- Event taxonomy, dashboards, feature flags, experiments, and data owner: `<inventory>`
- Autocapture/replay/console capture/masking/sampling policy: `<policy>`
- Consent, privacy, retention, deletion, residency, opt-out: `<policy>`
- Controlled event tied to candidate/lane: `<evidence>`
- Export procedure and recipient rehearsal: `<result>`

## 12. Sentry project

- Organization/team/project, DSN consumers, and owners: `<IDs/map>`
- Release/source-map pipeline and build-token governance: `<map>`
- Environment and release naming: `<contract>`
- Scrubbing, sampling, traces/replay, retention, and privacy settings: `<policy>`
- Alerts, recipients, ownership rules, escalation, and billing owner: `<map>`
- Controlled event and exact release attribution: `<evidence>`
- Recipient rehearsal: receive alert, triage event, locate release, and resolve/escalate: `<result>`

## 13. Cloudinary and media

- Account/product environment, folders, admins, RBAC, billing/quota owner: `<map>`
- Active consumers, URLs/public IDs, upload presets, transformations, and allowed origins: `<inventory>`
- Signed/unsigned upload policy and unsafe-preset disposition: `<review>`
- Asset ownership/licensing, classification, export, checksums, and reference map: `<evidence>`
- Folder separation versus actual access-control limitation: `<risk acceptance>`
- Standalone-environment or migration decision: `<decision>`
- URL-preserving migration, rollback, and legacy-retirement plan: `<runbook>`
- Recipient rehearsal: export and validate a representative safe asset set: `<result>`

## 14. Mapbox token

- Account/team, token name/ID, purpose, scopes, allowed origins: `<non-secret map>`
- Doppler/Vercel bindings and lane ownership: `<names-only map>`
- Positive and denied-origin tests: `<evidence>`
- Production map-flow proof and usage attribution: `<evidence>`
- Billing/overage monitoring and owner: `<runbook>`
- Rollback token and old-token zero-use retirement criteria: `<evidence>`
- Recipient rehearsal: render intended map flows and validate origin restriction: `<result>`

## 15. Meta and Instagram assets

- Business portfolio, pages, Instagram accounts, domains, pixels/datasets, ad accounts, catalogs: `<IDs/inventory or product-prohibited/not applicable; ORAN MVP prohibits tracking/pixels>`
- Ownership classification: `parent | venture | personal | duplicate | unknown`
- Admins, partners, recovery, MFA, billing, spend, and policy restrictions: `<map>`
- Content/creative rights and exports: `<evidence>`
- Transfer eligibility and provider-supported procedure: `<runbook>`
- Recipient rehearsal: accept correct role and verify recovery without running ads: `<result>`

## 16. Canva, brand kit, and design assets

- Team, folders, brand kits, templates, designs, domains/apps: `<IDs/inventory>`
- Owners, admins, recovery, billing, and seat allocation: `<map>`
- Font/photo/video/illustration licenses and transfer restrictions: `<register>`
- Master exports and editable source custody: `<artifact map>`
- Transfer/copy procedure and link-access review: `<runbook>`
- Recipient rehearsal: open/edit/export a representative asset with correct permissions: `<result>`

## 17. Additional providers and integrations

Repeat this block for Azure, Mailgun, Microsoft/Google mail, Notion, AI/API providers, queues/workers, monitoring, social, legal, accounting, or any provider discovered.

| Field | Value |
|---|---|
| Provider / capability | `<name>` |
| Account, organization, project, and owner | `<non-secret IDs>` |
| Venture and environment consumers | `<map>` |
| Data classes/scopes/retention | `<policy>` |
| Billing/renewal/alerts | `<map>` |
| Admin/recovery/escalation | `<map>` |
| Export/transfer/rotation/rollback | `<runbook>` |
| Recipient acceptance test | `<result>` |

## 18. Documentation and runbooks

Attach current, executable copies of:

- system architecture and data-flow diagram;
- environment and provider map;
- local setup and CI/release process;
- deploy, promote, and functional rollback;
- incident triage, communications, and provider escalation;
- database backup/export/restore and disaster recovery;
- auth administration and lockout recovery;
- customer support and privacy-request handling;
- payment reconciliation/refund/dispute/payout/tax handling;
- email bounce/complaint/suppression and sender recovery;
- credential rotation using create → install → verify → retire;
- monitoring/analytics operations and privacy controls;
- monthly cost review and budget alerts;
- dependency/security alert triage;
- domain/DNS renewal/cutover/rollback;
- media export/migration/rollback;
- transfer rehearsal and post-transfer access removal.

Each runbook must list owner, backup owner, prerequisites, safe/unsafe steps, expected output, rollback, escalation, last exercise, and next review date.

## 19. Billing and costs

| Provider | Account/project | Current base | MTD | Forecast | Renewal/term | Cap/alert | Cost owner | Transfer action |
|---|---|---:|---:|---:|---|---|---|---|
| `<provider>` | `<ID>` | `<amount>` | `<amount>` | `<amount>` | `<date>` | `<setting>` | `<owner>` | `<action>` |

Also record taxes, credits, minimum terms, usage-based exposure, duplicate resources, unpaid invoices, payment methods, and the exact effective date for recipient billing responsibility.

## 20. Backup, export, and restore register

| Asset | Backup/export ID | Timestamp | Checksum | Custodian | Restore destination | Last drill | RPO/RTO | Result |
|---|---|---|---|---|---|---|---|---|
| `<asset>` | `<ID>` | `<time>` | `<checksum>` | `<owner>` | `<safe target>` | `<date>` | `<targets>` | `<pass/fail>` |

## 21. Rollback plan

- Last-good source SHA and deployment: `<IDs>`
- Last-good environment contract: `<version/artifact>`
- Data rollback/forward-fix boundary: `<decision>`
- Auth/email/payment/webhook dual-running or replacement rule: `<rule>`
- Rollback triggers and monitoring window: `<criteria>`
- Decision owner and backup: `<names>`
- Procedure and measured recovery time: `<runbook/evidence>`
- Provider escalation routes: `<map>`
- Evidence that rollback does not double-charge, lose writes, break mail, or invalidate users: `<tests>`

## 22. Admin and recovery access

| Provider/resource | Primary admin | Backup admin | Recipient role | MFA/recovery custodian | Last recovery test | Removal date |
|---|---|---|---|---|---|---|
| `<resource>` | `<role>` | `<role>` | `<role>` | `<role>` | `<date>` | `<date>` |

Use named role holders in the access-controlled register; this public packet may use roles. No single personal account may be the only recovery path.

## 23. Security and privacy posture

- Threat/data-flow model and highest-risk paths: `<artifact>`
- Open vulnerability/security-alert register and disposition: `<artifact>`
- Secret scanning, dependency updates, access review, and audit-log cadence: `<policy>`
- Encryption in transit/at rest and key ownership: `<map>`
- RLS/authorization/ordinary-user test evidence: `<artifact>`
- Logging, analytics, replay, consent, retention, deletion, and data-subject request posture: `<policy>`
- Incident history and outstanding corrective work: `<register>`
- Subprocessor and cross-border data map: `<register>`
- Recipient security owner acceptance: `<sign-off>`

## 24. Known exceptions

| Exception | Risk | Affected flow | Compensating control | Owner | Accepted by | Review date | Expiry/closure condition |
|---|---|---|---|---|---|---|---|
| `<exception>` | `<level>` | `<flow>` | `<control>` | `<owner>` | `<approver>` | `<date>` | `<condition>` |

An exception without an owner, review date, and closure condition is a blocker.

## 25. Recipient acceptance checklist

The recipient, not the builder, performs or witnesses each applicable test.

| Acceptance test | Status | Recipient evidence | Date | Exception |
|---|---|---|---|---|
| Accept legal/IP/contract inventory and known obligations | `<status>` | `<evidence>` | `<date>` | `<note>` |
| Receive registrar access; verify recovery, renewal, zone export, and mail records | `<status>` | `<evidence>` | `<date>` | `<note>` |
| Clone canonical repo; run required checks/build; open a test PR | `<status>` | `<evidence>` | `<date>` | `<note>` |
| Receive Vercel/Doppler access; deploy the exact accepted SHA to Preview | `<status>` | `<evidence>` | `<date>` | `<note>` |
| Execute functional rollback and confirm measured recovery time | `<status>` | `<evidence>` | `<date>` | `<note>` |
| Inspect Supabase schema/RLS; restore a safe backup | `<status>` | `<evidence>` | `<date>` | `<note>` |
| Administer Clerk; pass login/logout/recovery/role/webhook flows | `<status>` | `<evidence>` | `<date>` | `<note>` |
| Run Stripe test-mode checkout/billing/webhook/refund flow | `<status>` | `<evidence>` | `<date>` | `<note>` |
| Send and reply to controlled mail; inspect bounce/suppression handling | `<status>` | `<evidence>` | `<date>` | `<note>` |
| Verify Sentry release/event/alert and PostHog controlled event/privacy policy | `<status>` | `<evidence>` | `<date>` | `<note>` |
| Verify Mapbox intended/denied origins and Production usage attribution | `<status>` | `<evidence>` | `<date>` | `<note>` |
| Export and validate representative media/brand assets and licenses | `<status>` | `<evidence>` | `<date>` | `<note>` |
| Receive support, incident, provider-escalation, and privacy-request ownership | `<status>` | `<evidence>` | `<date>` | `<note>` |
| Accept billing methods, renewals, caps, current spend, and forecast | `<status>` | `<evidence>` | `<date>` | `<note>` |
| Accept security backlog, data obligations, and every known exception | `<status>` | `<evidence>` | `<date>` | `<note>` |
| Confirm primary/backup admins and recovery for every provider | `<status>` | `<evidence>` | `<date>` | `<note>` |
| Approve post-transfer access-removal and credential-rotation schedule | `<status>` | `<evidence>` | `<date>` | `<note>` |

## 26. Acceptance and closeout

| Role | Name | Decision | Timestamp | Conditions |
|---|---|---|---|---|
| Current owner | `<name>` | `<accept/reject>` | `<time>` | `<conditions>` |
| Recipient technical owner | `<name>` | `<accept/reject>` | `<time>` | `<conditions>` |
| Recipient legal/billing owner | `<name>` | `<accept/reject>` | `<time>` | `<conditions>` |
| Transfer coordinator | `<name>` | `<accept/reject>` | `<time>` | `<conditions>` |

Transfer-ready means the recipient completed all applicable tests, accepted every time-bounded exception, owns billing and recovery, and can deploy, restore, operate, and roll back without the founder's personal credentials. Documentation alone is not acceptance.
