# Transfer Blockers by Provider

**Prepared:** 2026-07-12
**Scope:** Every provider row in the canonical Provider Governance Registry, with detailed coverage for the ten priority control planes
**Mode:** Read-only synthesis. This register is not authorization to invite users, change roles, rotate credentials, change billing/DNS, transfer resources, move money/data, or delete anything.

## Decision rule

A provider is transfer-ready only when the accountable owner and recipient have evidenced all applicable ownership, billing, legal/data, MFA/recovery, least-privilege, resource/dependency, acceptance, continuity, rollback, and post-transfer removal requirements. A venture-named repository, project, application, folder, token, domain, or account label does not meet that standard by itself.

**Current result:** none of the 25 registry provider rows—and therefore no venture—can be classified transfer-ready from the available evidence.

## Blocker evidence status

- **known:** directly established by the 2026-07-12 evidence.
- **unknown:** not verified; transfer remains blocked until evidence exists.
- **inferred:** supported by names, configuration, or adjacent evidence but not confirmed at the authoritative provider surface.
- **blocked:** verification could not proceed because provider access or permission was unavailable.
- **needs founder:** legal, ownership, cost, or risk acceptance cannot be delegated to the audit.

Each blocker-table status cell uses exactly one of these values. Severity, conflicts, and provenance remain in the blocker prose or transfer-posture column.

## Priority-provider summary

| Provider | Transfer posture | Principal blocker | Founder decision needed |
|---|---|---|---|
| GitHub | **Blocked — critical** | Personal/single-owner control; no recipient-accepted organization boundary | Organization ownership model and migration order |
| Vercel | **Blocked — critical** | One Owner, conflicting MFA evidence, shared billing/session state | Second Owner, MFA resolution, spend and transfer policy |
| GoDaddy / DNS | **Blocked — critical** | Sign-in blocked; ten domains/DNS/mail/hosting share one unknown recovery boundary | Restore access, registrar governance, domain classification |
| Doppler | **Blocked — high** | Live workplace ownership/recovery inaccessible; secret custody unverified | Owner access restoration and workplace/unknown-project classification |
| Supabase | **Blocked — high** | Shared Pro organization; owners, backups, restore and recipient path unknown | Data ownership, backup target, PinnedAtlas and transfer model |
| Stripe | **Blocked — critical** | Legal, payout, tax, admin, recovery and residual-object authority unverified | Entity/money-flow model and account authority per venture |
| Resend | **Blocked — critical** | One Admin and cross-venture sending boundary; MFA/recovery/capacity unresolved | Backup Admin and separate LogLoads/Sweepza capacity/ownership |
| Sentry | **Blocked — high** | Human/billing/recovery posture unknown; owner-grade automation remains | Owner roster, observability budget and token replacement |
| Cloudinary | **Blocked — critical** | One shared Free environment; folders are not ownership boundaries | Parent-shared versus separate venture environment |
| Mapbox | **Blocked — high** | Parent token boundary, no account cap, unrestricted default token | Backup authority, monitoring threshold and retirement criteria |

## GitHub

| ID | Blocker | Evidence state | Clearance evidence required |
|---|---|---|---|
| GH-01 | All 13 visible repositories are owned through a personal account; there is no provider-level second co-owner. | **known** | Recipient-acceptable organization/control model with two independent MFA-protected Owners. |
| GH-02 | Personal-account MFA, recovery channels, recovery material custody, and official support-recovery test are not verified. | **unknown** | Sanitized MFA/recovery record and dated independent recovery exercise. |
| GH-03 | Organization teams, venture-scoped RBAC, external collaborators, contractors, and backup-owner governance do not exist in visible evidence. | **unknown** | Names-only owner/member/team/contractor export and least-privilege approval. |
| GH-04 | Rulesets/branch protection, environment permissions, deploy keys, personal access tokens, Actions secret owners, OAuth/GitHub Apps, and Marketplace scope are incomplete. | **unknown** | Complete names-only repository security/integration inventory with accountable owners. |
| GH-05 | GitHub plan, Actions/Packages/Codespaces/LFS/Copilot/Marketplace billing, invoice state, and billing owner are unknown. | **unknown** | Read-only billing export and recipient-approved cost ownership. |
| GH-06 | PinnedAtlas and four empty/unmapped public repositories are not canonically classified; aging/diverged branches may contain unique work. | **needs founder** | Founder classification plus repository/branch disposition evidence; no deletion is implied. |
| GH-07 | Repository transfer may not carry apps, secrets, rulesets, Pages/domains, CI, external integrations, recovery, or billing. | **unknown** | Per-repository dependency checklist, continuity test, rollback, and post-transfer access plan. |
| GH-08 | No recipient invitation/acceptance or end-to-end repository transfer rehearsal is recorded. | **known** | Accepted recipient access and founder-approved non-production/pilot transfer rehearsal. |

**Clearance owner:** founder for the ownership model, Owners, public-repository classification, cost, and transfer authorization; governance/platform operators may prepare inventories and continuity evidence later.

**Do not clear by:** sharing the personal-account credential, merely adding a repository collaborator, deleting unclassified repositories/branches, or moving a repository before its apps/secrets/CI/domains are mapped.

## Vercel

| ID | Blocker | Evidence state | Clearance evidence required |
|---|---|---|---|
| VE-01 | The parent Pro team has one visible Owner and no independent emergency owner. | **known** | Second independent MFA-protected Owner and dated recovery test. |
| VE-02 | Dashboard `2FA` evidence conflicts with API `mfa=false`; recovery channel and support-recovery path are unknown. | **known** | Authoritative security-surface record and sanitized recovery procedure. |
| VE-03 | Team/project members, contractors, project-specific roles, access groups, and token/session owners are incomplete. | **unknown** | Names-only access export and venture-scoped least-privilege map. |
| VE-04 | At least 100 personal/session token records exist; seven of the newest 100 were active across browser, CLI and AI-linked categories. Consumer and offboarding ownership is incomplete. | **unknown** | Names-only session register, consumer mapping, replacement and revocation conditions. |
| VE-05 | One parent team couples all projects, domains, integrations, recovery, and billing; venture projects are not independent ownership boundaries. | **known** | Recipient-accepted project/team boundary with domain/integration/billing ownership documented. |
| VE-06 | Spend controls conflict (`$1` notification budget with pause off versus `$500` API field) and usage views conflict; the effective ceiling is unknown. | **known** | Founder-approved billing policy after authoritative control semantics are verified. |
| VE-07 | PinnedAtlas is off-registry; `sweepza-canary` and `explore-and-earn-vercel-fix` remain duplicate-review candidates; project protection is incomplete for some paths. | **unknown** | Founder classification plus aliases/traffic/deployment/protection/billing/rollback inventory. |
| VE-08 | No accepted recipient project-transfer procedure or continuity rehearsal covers Git integration, environment bindings, domains, deployment protection, and rollback. | **known** | Dated recipient acceptance and pilot transfer rehearsal with no production mutation. |

**Clearance owner:** founder for Owner addition, MFA determination, billing policy, off-registry/duplicate classification, and transfer authorization; platform operators may prepare exports, cost allocation, and rehearsals later.

**Do not clear by:** assuming either MFA or spend field is authoritative, revoking sessions before consumer proof, enabling automatic production pause without continuity testing, or deleting review-candidate projects.

## GoDaddy / DNS (registrar and DNS)

| ID | Blocker | Evidence state | Clearance evidence required |
|---|---|---|---|
| GD-01 | Current dashboard sign-in is blocked, so authoritative account state cannot be reverified. | **blocked** | Founder-restored official access and dated read-only verification. |
| GD-02 | Owner/admin count, delegated users, contractor access, MFA, recovery channel, and emergency registrar path are unknown. | **blocked** | Names-only access export, MFA record, supported emergency delegate, and recovery exercise. |
| GD-03 | Ten domains share one registrar/DNS control plane, concentrating portfolio continuity and transfer authority. | **known** | Domain-by-domain legal owner, operating owner, DNS authority, billing owner, and recipient model. |
| GD-04 | Renewal dates/prices, payment owner, invoice state, protection, transfer locks, and current auto-renew state are incomplete; ORAN's final toggle is unverified. | **blocked** | Sanitized renewal/lock/payment-authority export and founder retention policy. |
| GD-05 | Website Builder, mail products, Microsoft/Google/Mailgun routes, DNS dependencies, and product-to-domain billing remain incomplete; AutomatedEmpires and LogLoads may still depend on Website Builder routes. | **unknown** | Domain/product/mail/DNS dependency map, working replacement, rollback and archive evidence. |
| GD-06 | Adjacent domains and PinnedAtlas are not fully classified by legal owner, purpose and cost center. | **needs founder** | Founder classification as retained parent asset, venture, defensive registration, sale candidate, or retirement review. |
| GD-07 | Registrant/contact roles, recipient eligibility, transfer locks, authorization process, and recipient acceptance are not documented. | **unknown** | Provider-supported transfer checklist and accepted recipient path; private codes remain outside the registry. |
| GD-08 | Recovery may depend on mail or domains controlled by the same account, creating circular lockout risk. | **unknown** | Independent parent-controlled recovery channel type and tested support escalation. |

**Clearance owner:** founder for restoring access, domain ownership/retention, renewal/payment policy, emergency delegation, and transfer authorization; domain/finance operators may maintain inventories later.

**Do not clear by:** changing DNS, MX, nameservers, contacts, locks, renewals, Website Builder, or mail while recovering access; sharing credentials; or cancelling a legacy route because a new project exists.

## Doppler

| ID | Blocker | Evidence state | Clearance evidence required |
|---|---|---|---|
| DO-01 | The local credential is stale/invalid; live workplace ownership and membership cannot be read. | **blocked** | Founder-approved official sign-in and authoritative workplace identity. |
| DO-02 | Owner/admin count, founder role, MFA enforcement, recovery, support path, billing plan and seat exposure are unknown. | **blocked** | Names-only owner/member/billing export, MFA record and tested recovery. |
| DO-03 | Venture projects/configs share a parent control plane; per-person roles, groups, contractors and project/config grants are unverified. | **unknown** | Least-privilege member/group/project/config matrix accepted by recipient. |
| DO-04 | Service-token/service-account names, scopes, integrations, owners, consumers, last use and rotation paths were not provider-verified. | **unknown** | Names-only machine-access register with venture/environment ownership. |
| DO-05 | `example-project`, Sweepza `dev_personal`, and local PinnedAtlas evidence are unclassified. | **needs founder** | Founder classification and non-secret dependency/activity inventory. |
| DO-06 | Legacy GitHub/Vercel/deployment bindings cannot yet be reconciled to the intended Doppler source-of-truth without consumer proof. | **unknown** | Exact-source consumer map, replacement deployment, observation and rollback evidence. |
| DO-07 | No recipient invitation/acceptance or project/config transfer rehearsal exists. | **known** | Recipient-accepted least-privilege access and documented restore/cutover/revocation sequence. |

**Clearance owner:** founder for workplace restoration, ownership, cost and unknown-project classification; a secrets administrator may build the names-only access and consumer maps later.

**Do not clear by:** using the stale credential, exposing or copying secret values, deleting sample-looking configs, or rotating/revoking before replacements and consumers are verified.

## Supabase

| ID | Blocker | Evidence state | Clearance evidence required |
|---|---|---|---|
| SU-01 | Organization owners, admins, project members, contractors and founder status are unknown. | **unknown** | Names-only organization/project role export and two independent privileged paths where supported. |
| SU-02 | Human MFA/enforcement, recovery channel, emergency administrator and provider support path are unknown. | **unknown** | MFA/recovery record and dated independent access exercise. |
| SU-03 | Seven active projects share one Pro organization and billing; exact base, compute, storage, egress, backups, add-ons, invoice state and chargeback are unknown. | **unknown** | Project-level billing/usage export and accepted cost ownership. |
| SU-04 | Backup/PITR/retention posture, restore authority, recovery objectives and a successful non-production restoration are unverified. | **unknown** | Per-project backup standard and disposable restore evidence. |
| SU-05 | Database owner, project-level privilege, broad runtime authority, environment isolation and scoped server identities are incomplete. | **unknown** | Human/database/machine role map and least-privilege remediation plan. |
| SU-06 | PinnedAtlas is active but absent from the canonical venture registry. | **needs founder** | Founder classification, accountable data owner, budget and transfer intent. |
| SU-07 | Data classification, retention/export duties, auth/storage/functions/integration dependencies, and recipient operational capability are not fully documented. | **unknown** | Sanitized data/dependency inventory, export/restore plan and recipient sign-off. |
| SU-08 | No recipient invitation/acceptance or project-transfer/restore rehearsal is recorded. | **known** | Provider-supported acceptance plus continuity and rollback exercise. |

**Clearance owner:** founder/data owner for legal ownership, PinnedAtlas, retention/backups, cost and transfer; a database operator may produce inventories and disposable restore evidence later.

**Do not clear by:** handing over project keys, using `service_role` as human recovery, testing against production, or assuming separate projects convey billing/data ownership.

## Stripe

| ID | Blocker | Evidence state | Clearance evidence required |
|---|---|---|---|
| ST-01 | Account owners/admins, legal representative, business owner, billing, payout, tax, refund/dispute and emergency authorities are unknown per account. | **unknown** | Names-only role/authority export approved by founder/legal/finance. |
| ST-02 | Privileged-user MFA, enforcement, recovery channel, support-recovery and independent backup administrator are unknown. | **unknown** | MFA/recovery evidence and two independent eligible privileged users. |
| ST-03 | Dedicated Explore&Earn/Sweepza boundaries do not prove the correct legal owner, recipient eligibility or transferable payout/tax obligations; other venture accounts are absent/unverified. | **unknown** | Legal-entity and account-mode map plus recipient legal eligibility/acceptance. |
| ST-04 | Runtime account/mode bindings, restricted service accounts, key owners, webhook owners and replacement paths are incomplete. | **unknown** | Names-only live/test integration inventory and test-mode continuity proof. |
| ST-05 | Sweepza retains a foreign-venture webhook, two unclassified customer objects and a zero-value draft invoice with unresolved retention/disposition. | **needs founder** | Non-sensitive classification, traffic/dependency proof, legal retention review and separate mutation approval if later needed. |
| ST-06 | Current plan/product fees, invoice state, enabled products and fee exposure are incomplete. | **unknown** | Read-only billing/product export and recipient-approved cost model. |
| ST-07 | Refund, dispute, tax, payout, data retention, privacy and customer-support obligations have no accepted handoff. | **unknown** | Dated legal/finance/operations handoff and recipient acceptance. |
| ST-08 | No end-to-end recipient transfer test exists that avoids live money and customer-data mutation. | **known** | Provider-supported test-mode acceptance, continuity, rollback and post-transfer access plan. |

**Clearance owner:** founder plus legal/finance for entity, payout/tax authority, residual objects, cost and transfer; operators may prepare test-mode integration evidence later.

**Do not clear by:** sharing dashboard credentials or live keys, moving money, changing legal/payout/tax state, deleting residual objects, disabling webhooks, or treating an account label as legal ownership.

## Resend

| ID | Blocker | Evidence state | Clearance evidence required |
|---|---|---|---|
| RE-01 | The visible team has one Admin and no proven independent emergency administrator. | **known** | Second independent MFA-protected Admin where supported and recovery exercise. |
| RE-02 | The Admin MFA field is blank; MFA state, recovery channel and support-recovery procedure are unknown. | **unknown** | Authoritative MFA record and sanitized recovery procedure. |
| RE-03 | Explore&Earn's domain and LogLoads legacy authority share one team, so account/admin/billing/recovery remain cross-venture. | **known** | Venture-owned, recipient-accepted team/domain/billing boundary for any transferred sender. |
| RE-04 | LogLoads lacks an independent verified sending domain/team; Sweepza has no Resend sender. | **known** | Founder-approved venture boundary, domain verification, capacity and recipient ownership before activation. |
| RE-05 | Historical 1/1 domain evidence conflicts with live `0 / 0` usage limits; true capacity and transfer cost are unresolved. | **known** | Authoritative plan/capacity record and approved billing owner/budget. |
| RE-06 | Explore&Earn broad rollback and LogLoads legacy broad credentials remain; key owners, last use and replacement proof are incomplete. | **unknown** | Names-only key/consumer inventory and staged narrow replacement verification. |
| RE-07 | DNS authority, sender identity, suppression/retention, deliverability, monitoring and recipient operational acceptance are incomplete. | **unknown** | Domain/DNS/operations handoff, continuity test, rollback and recipient sign-off. |
| RE-08 | No accepted team/domain transfer rehearsal is recorded. | **known** | Recipient acceptance without copying founder/admin credentials. |

**Clearance owner:** founder for backup Admin, cost, venture team/domain decisions and transfer; email operators may later manage scoped senders, inventories and deliverability.

**Do not clear by:** enabling PAYG, activating Sweepza, adding DNS/domains, sending test mail to real recipients, sharing keys, or revoking broad keys before replacement proof.

## Sentry

| ID | Blocker | Evidence state | Clearance evidence required |
|---|---|---|---|
| SE-01 | Organization owner/admin/member, team, contractor and founder role rosters are unknown. | **unknown** | Names-only organization/team/project access export and two privileged paths. |
| SE-02 | MFA/enforcement, recovery channel, emergency owner and support-recovery procedure are unknown. | **unknown** | MFA/recovery record and independent recovery exercise. |
| SE-03 | Seven venture projects share a parent organization; distinct projects/DSNs do not create independent ownership, billing or recovery. | **known** | Recipient-accepted project/team boundary and parent-versus-venture ownership map. |
| SE-04 | Plan, seats, retention, events/traces/replays/logs, quotas, projected overage, invoices and billing owner are unknown. | **blocked** | Read-only billing/usage export and approved sampling/retention/budget. |
| SE-05 | An owner-grade build/release token remains; its consumers and scoped replacement path are incomplete. | **unknown** | Consumer map and `create -> install -> deploy -> verify -> observe` evidence before separate revocation approval. |
| SE-06 | Project/team permissions, auth-token owners, release automation, DSN consumers and alert recipients are not fully inventoried. | **unknown** | Names-only machine/human access and operational owner register. |
| SE-07 | Data retention/export and recipient operational obligations are not accepted. | **unknown** | Retention/privacy/export handoff and recipient sign-off. |
| SE-08 | No recipient project transfer/access rehearsal with continuity and rollback is recorded. | **known** | Provider-supported acceptance and non-destructive transfer rehearsal. |

**Clearance owner:** founder for owners, cost/retention and token-replacement authorization; observability operators may prepare scoped access and continuity evidence later.

**Do not clear by:** revoking the owner-grade token first, exposing DSNs/tokens, increasing telemetry spend, or deleting quiet projects.

## Cloudinary

| ID | Blocker | Evidence state | Clearance evidence required |
|---|---|---|---|
| CL-01 | One shared Free product environment contains portfolio media; folders are not separate RBAC, quota, billing, recovery or ownership boundaries. | **known** | Founder-approved parent/shared or standalone venture boundary with recipient acceptance. |
| CL-02 | Owner/admin/member/contractor roster, MFA, recovery channel, emergency administrator and support path are unknown. | **unknown** | Names-only access export, MFA/recovery record and independent exercise. |
| CL-03 | Shared Admin authority and signed upload presets are not mapped to human/machine owners; four folder-unbound overwrite-enabled presets broaden write risk. | **unknown** | Credential/preset consumer map and approved fixed-scope replacement plan. |
| CL-04 | Only Explore&Earn is a confirmed active consumer; placeholder folders do not establish venture ownership or need. | **known** | Consumer and venture/legal owner classification for every retained namespace. |
| CL-05 | Asset transfer inventory is incomplete: shared source/derived assets, assets outside the main namespace, former icon sources and external delivery dependencies require classification. | **unknown** | Sanitized manifest with ownership, checksums, delivery/reference evidence and retention. |
| CL-06 | Backup/export, restoration authority, recipient import, URL continuity and migration rollback are untested. | **unknown** | Disposable export/restore rehearsal and accepted continuity/rollback plan. |
| CL-07 | Current billing owner, renewal, credit threshold/alerts and cost of a separate transfer-grade environment are unresolved. | **needs founder** | Billing export, monitoring owner and approved separation budget. |
| CL-08 | No recipient account/environment acceptance or controlled migration rehearsal exists. | **known** | Recipient-accepted destination and founder-approved non-production migration rehearsal. |

**Clearance owner:** founder for ownership model, paid separation, admins, retention and transfer; a media operator may prepare manifests, monitoring and disposable restore evidence later.

**Do not clear by:** giving the shared Admin credential to a recipient, calling a folder transferable, mutating active presets in place, moving/deleting assets, or buying capacity without approval.

## Mapbox

| ID | Blocker | Evidence state | Clearance evidence required |
|---|---|---|---|
| MB-01 | Owner/member/admin roster, founder role, MFA/enforcement, recovery channel and emergency administrator are unknown. | **unknown** | Names-only access export, MFA/recovery record and tested independent path. |
| MB-02 | One parent account controls venture-named tokens; token separation does not convey human ownership, billing or recovery. | **known** | Recipient-accepted account/team ownership and token-transition model. |
| MB-03 | There is no account-level monthly spending cap, so transfer cost exposure lacks a provider hard stop. | **known** | External monitoring, accountable responder, founder-approved threshold and incident runbook. |
| MB-04 | The active old/default public token showed no origin restriction and remains a shared rollback dependency. | **known** | Complete consumer map, scoped replacements, sustained zero use, rollback and separate retirement approval. |
| MB-05 | Token scopes, origins, owners, consumers, last use and provider usage attribution are incomplete; stale/mislabelled deployment bindings remain. | **unknown** | Names-only token/binding/usage register reconciled across source, Doppler and Vercel. |
| MB-06 | Current invoices are $0, but SKU usage, future terms, venture chargeback and billing owner are incomplete. | **unknown** | Read-only usage/billing export and accepted cost ownership. |
| MB-07 | Recipient token/account setup, origin cutover, continuity, rollback and post-transfer revocation are untested. | **unknown** | Recipient acceptance and exact-source non-production transition rehearsal. |
| MB-08 | Emergency abuse/cost actions are not approved; an improvised shutdown could break maps. | **needs founder** | Dated incident authority, thresholds, communication and safe-degradation procedure. |

**Clearance owner:** founder for backup authority, budget/incident policy and old-token retirement; platform/map operators may prepare inventories, alerts and staged replacements later.

**Do not clear by:** relying on $0 invoices, claiming a hard cap, handing a token to the recipient as ownership, revoking the default token early, or deleting stale bindings before exact-source proof.

## Additional registry providers

The following compact rows cover every canonical registry provider not included in the ten detailed sections above. A single row may consolidate several related blockers, but every ownership, billing, recovery, MFA, venture-boundary, shared-control, and recipient-acceptance issue from the canonical registry remains explicit.

| Provider | Provider-level blocker(s) | Evidence status | Clearance evidence | Clearance owner / do not clear by |
|---|---|---|---|---|
| Clerk | **Critical.** One Owner and only one of three seats occupied; owner MFA, recovery, break-glass access, and recipient acceptance are unknown. Six venture/unclear applications share the workspace, including the unclassified `traffic` boundary and three dark production environments. Per-app roles are unverified, and production phone/SMS, B2B, admin features, seats, or add-ons can create cost. | **known** | Second independent MFA-protected administrator; sanitized recovery test; per-app human/machine role export; `traffic` and dark-app classification; approved billing/features policy; recipient acceptance and continuity proof. | **Founder.** Do not treat product-user SMS MFA as admin MFA, enable paid features, activate dark apps, or delete `traffic` merely because use is unclear. |
| PostHog | **High.** Owner/member inspection and recovery are blocked by re-authentication; MFA, personal-token owners, project access, and recipient acceptance are unverified. Six projects share parent administration and billing; ORAN and PinnedAtlas are absent. All visible paid-product caps are $0 but mutable. | **blocked** | Owner-approved re-authentication; names-only owners/members/tokens/project-access export; backup owner and recovery evidence; billing owner; recipient path; venture budget/privacy approval for any cap change. | **Founder.** Do not lift $0 caps, create missing projects, or infer absence of access from the re-authentication gate. |
| Meta Business Suite | **Potentially critical for affected brands.** Business/account identity, people, partners, contractors, pages, Instagram assets, ad accounts, pixels, billing liability, recovery, business verification, admin 2FA, and recipient eligibility were not obtained. AutomatedEmpires, Komfort Killz, and Just Jesus Bro mappings are unclassified, and personal-admin/shared-ad-billing dependence may exist. | **blocked** | Read-only business, people/partner, asset, ad-spend, and payment-liability export; legal owner classification per asset; two-admin recovery; 2FA evidence; recipient eligibility and acceptance. | **Founder.** Keep ads off; do not post, claim, invite, alter roles/billing, or transfer assets from an incomplete roster. |
| Canva | **High for design-dependent ventures.** Team, owner/admin/guest/contractor, permission, plan/seat/billing, recovery, and MFA evidence is missing. The connector returned no brand kits but one `komfort_killz` folder, conflicting with local brand-kit claims; a folder does not establish ownership, rights, or recipient acceptance. | **unknown** | Team/role/billing export; MFA/recovery evidence; brand-kit discrepancy reconciliation; parent-versus-venture asset and rights inventory; copy/transfer rehearsal that preserves originals. | **Founder.** Do not change teams, permissions, folders, templates, or originals, and do not treat the folder name as transfer ownership. |
| Gmail / Google Workspace | **High if operationally relied upon.** A readable mailbox does not establish whether the account is consumer Gmail or Workspace, tenant identity, super-admins, delegates, OAuth grants, service accounts, licenses, billing, MFA/enforcement, recovery, mailbox/domain mapping, or recipient tenant authority. Central provider notices or recovery may remain parent-dependent. | **unknown** | Account-type and tenant verification; names-only admins/users/aliases/groups/delegation/OAuth/service-account/license export; billing and recovery evidence; domain-by-domain mail ownership; recipient acceptance. | **Founder.** Do not treat mailbox access as tenant administration, expose message content, alter routing/aliases/grants, or use an unverified mailbox as the sole recovery path. |
| Microsoft 365 / Outlook | **High.** One AutomatedEmpires-domain mailbox profile does not establish tenant identity, global/mailbox admins, licenses/billing, MFA/conditional access, break-glass recovery, forwarding/delegation, aliases, app grants, or recipient tenant authority. Parent management is inferred across several mail-enabled domains; Sweepza activation remains deferred. | **unknown** | Tenant/admin/license/billing export without message content; MFA/conditional-access and break-glass evidence; domain/mailbox/alias/forwarding/app-grant matrix; parent-versus-venture decision; recipient acceptance. | **Founder.** Do not activate Sweepza mail, add aliases, change forwarding/MX, expose messages, or treat address ownership as active transferable service. |
| Azure | **Critical if retained.** Tenant, subscriptions, ORAN resources, owners/RBAC/service principals, billing, MFA/conditional access, break-glass recovery, backups/restore, data, locks, dependencies, and recipient boundaries are inaccessible or unknown. Historical cost estimates are not current evidence, and a broken public route does not prove stopped billing or absent data. | **blocked** | Read-only tenant/subscription/resource/RBAC/service-principal/cost export; data and dependency classification; backup/restore evidence; MFA/break-glass recovery; founder retain/migrate/retire decision; ORAN recipient-accepted boundary. | **Founder.** Do not stop/delete resources, alter DNS, assume the estate is idle, or retire a rollback/data path before live inventory and explicit approval. |
| Mailgun | **High.** Account/team, owners/admins, billing, MFA, recovery, credentials, domains, routes, webhooks, logs, suppressions/retention, sending activity, and recipient access are unverified. DNS implies ORAN and AutomatedStartups use, but active records do not prove account ownership or intended operation. | **unknown** | Read-only team/domain/route/credential-name/volume/billing export; recovery and billing owners; retention and sender classification; recipient access; explicit retain/migrate decision. | **Founder.** Preserve mail DNS; do not remove MX/SPF/DKIM/routes, send mail, expose credentials, or infer retirement from absent account access. |
| Fly.io | **High if present.** No authenticated organization/app roster exists; owners, roles, deploy identities, billing, MFA, recovery, machines, volumes, IPs, databases, traffic, data, and recipient path are unknown. Legacy LogLoads configuration suggests a possible minimum machine with auto-stop disabled, so cost, data, or rollback value may remain. | **inferred** | Organization/app/resource/role/billing/last-use export; machine/volume/data/traffic inventory; MFA/recovery evidence; source/DNS dependency and rollback map; recipient acceptance or founder-approved retirement. | **Founder.** Do not delete apps, machines, volumes, data, certificates, or IPs, and do not infer nonexistence from the missing authenticated surface. |
| OpenAI | **High if activated.** Organization/project topology, owners/users/service-account owners, budgets/caps/credits/auto-recharge/invoices, MFA/recovery, credential consumers, venture allocation, data policy, and recipient acceptance are unknown. Configuration references do not prove a venture-owned, capped, transferable boundary; personal/parent credentials may span ventures. | **inferred** | Account/project/user/billing and names-only credential-owner inventory; scoped venture projects; approved budgets and data policy; two-owner recovery where supported; recipient acceptance and runtime transition proof. | **Founder.** Do not expose/copy keys, activate spend, treat configuration names as account proof, or transfer a personal credential. |
| Anthropic / Claude | **Transfer risk unknown until existence is verified.** No provider account/workspace was confirmed; a Claude-linked Vercel session and local references do not establish owners, projects, service accounts, consumers, budgets, usage, invoices, MFA/recovery, data policy, or recipient access. Personal-session or parent-billing dependence may exist. | **inferred** | Confirm whether live resources exist; if present, export workspace/project/users/billing and names-only credential consumers; document MFA/recovery, data policy, venture scope, recipient acceptance, and removal path. | **Founder.** Do not treat a linked session as ownership/billing proof, copy a personal session, enable spend, or cancel resources before consumer verification. |
| Vercel AI Gateway / Vercel Agent | **Medium-high.** These tools inherit Vercel's single Owner, disputed MFA state, shared billing/recovery, sessions, and transfer dependence. AI Gateway has a $5 balance with auto-reload off; Agent usage billing is disabled with no remaining credit. Venture consumer allocation, credential owners, data policy, and recipient continuity are unproven. | **known** | Clear the Vercel owner/MFA/recovery blockers; map consumers and credentials; approve data policy, venture allocation, billing owner and budget; document recipient transition and rollback. | **Founder.** Keep auto-reload and Agent billing off; do not infer transferability from team inclusion or enable paid use without approval. |
| Notion | **High.** Workspace identity, owners/members/guests/contractors, billing, MFA/recovery, integrations, page/database grants, and recipient authority are unknown. Parent product/vision truth and BidSpace/Sweepza integration references may remain attached to a parent workspace or personal integration after code transfer. | **inferred** | Workspace/owner/member/guest/billing/integration/page-grant export; MFA/recovery evidence; parent-versus-venture space classification; venture-scoped least-privilege integrations; recipient content/automation acceptance. | **Founder.** Do not move/delete pages or databases, expose content/tokens, duplicate source-of-truth authority, or revoke integrations before consumer proof. |
| GitHub Marketplace / CodeRabbit / review tools | **High.** Installation owners/approvers, users, repository/project scope, permissions, seats/subscriptions/invoices, last use, app recovery, and transfer/removal procedures are incomplete. Apps inherit the GitHub personal-account or parent Vercel boundary; zero returned assignments is not proof of no access, use, cost, or dependency. | **known** | Full GitHub/OAuth/Marketplace and Vercel-integration export; permissions, assignments, billing, last use and accountable owner per app; recipient reinstall/continuity and removal plan. | **Founder.** Do not uninstall/narrow apps from zero assignments alone or transfer repositories/projects before app continuity and billing ownership are accepted. |
| Codecov / other worker-cloud tools | **Transfer risk unknown.** ORAN Codecov use is historical/inferred, while complete live account, owner/member, credential, plan/billing/cap, MFA/recovery, consumer, and recipient inventories are absent. Other worker/cloud tooling may be personal, parent-shared, free, paid, or inactive. | **inferred** | Confirm live accounts from billing and installation records; assign owner, consumer, venture, cost center, MFA/recovery, credential scope, last use, and recipient/removal procedure for every retained tool. | **Founder.** Do not remove integrations or credentials, assume free/inactive status, or transfer ORAN without proving CI/reporting continuity. |

## Cross-provider blockers that must be cleared together

1. **Identity concentration:** GitHub, Vercel, Clerk, and Resend have known single-human control; most other registry providers lack enough evidence to disprove it.
2. **Circular recovery:** registrar, mail and provider recovery may depend on domains or mailboxes governed by the same locked parent control plane.
3. **Shared billing:** a recipient cannot accept cost liability while Vercel, Supabase, Resend, Sentry, Cloudinary, Mapbox, domains and other shared services lack complete venture attribution.
4. **Machine authority:** broad or shared credentials in Resend, Sentry, Cloudinary, Mapbox and legacy deployment stores require staged replacement, not immediate revocation.
5. **Recipient acceptance:** no provider has a complete accepted recipient path, continuity proof, rollback and post-transfer access-removal record.
6. **Unknown is blocking evidence:** lack of a visible user, invoice, backup, dependency or event is not proof that it is absent, free, recoverable, unused or safe to delete.

## Transfer evidence packet

Before marking any provider `transfer-ready`, attach a sanitized packet containing:

- provider-supported ownership/recipient eligibility and accepted access;
- two independent privileged paths where supported, MFA status and dated recovery exercise;
- names-only human, contractor, application and machine-access export;
- billing/legal/data/domain authorities and accepted cost ownership;
- complete venture resource and dependency inventory;
- backup/export/restore or continuity evidence appropriate to the provider;
- cutover, validation, rollback and post-transfer removal procedure;
- explicit founder authorization for the named provider and venture.

This register does not claim rollout-readiness and does not authorize a transfer.
