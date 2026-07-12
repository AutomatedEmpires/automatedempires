# Backup Admin and Recovery Plan

**Prepared:** 2026-07-12
**Scope:** GitHub, Vercel, GoDaddy, Doppler, Supabase, Stripe, Resend, Sentry, Cloudinary, and Mapbox
**Mode:** Documentation only; no invitation, role change, MFA change, recovery change, credential rotation, billing change, DNS change, or provider mutation is authorized by this plan.

## Purpose and evidence rules

This plan converts the 2026-07-12 account-governance findings into a safe implementation sequence. It records roles and evidence, never passwords, recovery addresses, phone numbers, recovery codes, hardware-key serials, account IDs, payment details, customer identities, or secret values.

- **Known** means directly observed or established by the supplied governance evidence.
- **Unknown** means not verified; it does not mean absent or disabled.
- **Blocked** means the needed surface required re-authentication, valid provider access, or a permission not available during the audit.
- A project, repository, folder, token, application, mailbox, or billing contact is not an independent backup administrator.

## Minimum portfolio recovery standard

A critical provider meets the minimum only after all applicable items are evidenced:

1. Two named human privileged paths exist where the provider supports them: a routine owner and an independent emergency owner/admin. They must use separate identities and must not share a password or session.
2. Every privileged human has MFA enabled. Phishing-resistant MFA is preferred; recovery material is stored in the approved secure system with two controlled custodians.
3. The registry records only the recovery channel **type**, accountable role, last verification date, and next test date—not the private destination or recovery material.
4. A names-only export covers owners, admins, members, guests, contractors, delegated users, applications, service accounts, personal tokens, and integrations.
5. Billing, legal, data, domain/DNS, security, and emergency authorities are identified separately. Technical ownership must not be assumed to confer every authority.
6. Machine credentials have a venture, environment, purpose, accountable owner, last-use evidence, replacement sequence, and revocation condition.
7. A dated recovery exercise proves the emergency operator can sign in independently, reach the intended non-destructive control surface, and escalate through provider support. Production, DNS, money, data, and credentials remain unchanged during the test.
8. Transfer readiness additionally requires recipient acceptance, continuity proof, rollback, and a post-transfer removal plan. A recovery drill alone is not a transfer test.

## Implementation guardrails

- The actions below are recommendations for later, separately authorized change windows. They were not performed while preparing this document.
- Founder authentication and provider-supported delegation must be used. Never give another person the founder's password, active session, MFA factor, API token, or recovery code.
- Create and verify replacement access before removing or narrowing existing access.
- Do not test recovery against production data, live money, customer communications, domain routing, or active credentials.
- If a provider cannot support two owners, document the limitation and combine one MFA-protected owner with the strongest supported delegated administrator, secure recovery custody, and a tested official support-recovery path.
- Any paid seat, plan change, separate account, or new product environment remains a founder cost decision.

## Priority summary

| Priority | Provider | Current evidence | Minimum safe backup path | Founder gate |
|---:|---|---|---|---|
| 1 | GitHub | **Known:** personal-account control of 13 visible repositories; MFA and recovery **unknown** | Recipient-acceptable organization with two MFA-protected owners; personal-account recovery secured during migration | Organization model, owners, possible plan/seat cost, migration window |
| 2 | Vercel | **Known:** one Owner; dashboard/API MFA conflict; shared Pro team | Second MFA-protected owner, reconciled security state, independent recovery drill | Owner seat/cost, security reconciliation, project transfer model |
| 3 | GoDaddy | Current dashboard access **blocked**; ten domains share registrar/DNS control | MFA-protected owner plus supported delegated emergency administrator and tested registrar recovery | Restore access, renewal/DNS authorities, retained-domain policy |
| 4 | Doppler | Live membership blocked by stale/invalid local credential; shared secrets plane | Two MFA-protected workplace owners/admins where supported; verified emergency path that does not expose secrets | Owner-approved access restoration and workplace classification |
| 5 | Supabase | Seven active projects in one Pro organization; membership, MFA, recovery, and restore authority **unknown** | Two privileged organization paths plus a named database recovery operator and tested non-production restore procedure | PinnedAtlas classification, backup/PITR posture, project transfer model |
| 6 | Stripe | Venture account boundaries exist for Explore&Earn and Sweepza; human, legal, payout, MFA, and recovery roles **unknown** | Two independent privileged humans per retained account, with legal/payout/billing/emergency roles explicitly separated | Legal representative, entity, payout/tax authority, money-flow decisions |
| 7 | Resend | **Known:** one Admin; MFA field blank; Explore&Earn and LogLoads authority is shared | Second MFA-protected admin, documented recovery, venture-owned sending boundary before transfer | Paid capacity/team/domain decisions for LogLoads and Sweepza |
| 8 | Sentry | Human roster, MFA, recovery, plan, and billing **unknown**; owner-grade build token remains | Two MFA-protected owners/admins and a scoped automation recovery path | Roster/billing inspection and staged token-replacement approval |
| 9 | Cloudinary | One shared Free environment; owner roster, MFA, recovery, and export/restore authority **unknown** | Two privileged human paths where supported plus documented asset export/restore authority | Parent-shared versus separate venture environment and cost |
| 10 | Mapbox | Parent account, human roster/MFA/recovery **unknown**; no account cap; default token unrestricted | Second privileged human where supported, MFA, official recovery, token/cost incident runbook | External monitoring threshold and old-token retirement criteria |

## 1. GitHub

**Current owner/admin risk.** **Known critical:** all 13 visible repositories are controlled by the `AutomatedEmpires` personal account rather than an organization. There is no organization-owner roster or second account owner. MFA, recovery channels, recovery material, collaborators, deploy keys, rulesets, personal tokens, and full app grants are **unknown**.

**Minimum safe backup-admin posture.** A personal account cannot provide a second co-owner of the account. The durable target is a recipient-acceptable GitHub organization with two independent human Owners, venture-scoped teams, least-privilege repository roles, and protected organization recovery. Until migration is approved, secure and test the personal account's official recovery path without sharing credentials, and name an emergency custodian of the procedure—not a second user of the founder account.

**MFA requirement.** Enable MFA for both organization Owners and require it for privileged organization members. Prefer separate phishing-resistant factors plus securely stored recovery material. Record only status and test date. Verify the personal owner's MFA before any repository move.

**Recovery documentation requirement.** Record the organization ownership model, emergency-owner role, personal-account transition dependency, support escalation, names-only repository/member/app inventory, branch and ruleset coverage, deploy-key and Actions-environment owners, Marketplace billing owner, and the sequence for transferring each repository and its integrations. Include acceptance, continuity, rollback, and post-transfer access removal.

**Founder must do manually in an authorized window.** Choose or create the organization; approve its legal/billing ownership and any seat cost; designate the routine and emergency Owners; authenticate to verify MFA/recovery; approve the repository migration order; and approve each recipient acceptance test. The founder must separately classify PinnedAtlas and the four empty/unmapped repositories before moving or disposing of them.

**Can later be delegated.** A governance operator can prepare names-only exports, map teams and applications, validate branch/ruleset coverage, inventory Actions/Marketplace cost, schedule quarterly access reviews, and run non-destructive continuity checks. Repository maintainers can verify CI and deployment after a founder-approved move but should not become organization Owners by default.

**Do not.** Do not share the personal-account password/session/MFA factor; do not transfer repositories before applications, secrets, rulesets, Pages/domains, CI, billing, and rollback are mapped; do not delete repositories or branches because they appear empty/stale; do not remove apps, deploy keys, or credentials before replacement proof; do not push directly to `main` or let the builder approve the governance PR.

## 2. Vercel

**Current owner/admin risk.** **Known critical:** the shared Pro team has one visible Owner, zero access groups, and no SAML. The dashboard showed a 2FA badge while the API reported `mfa=false`; recovery is **unknown**. Pagination showed at least 100 personal/session token records, with seven active among the newest 100. Team billing, project ownership, domains, integrations, and recovery depend on the single owner.

**Minimum safe backup-admin posture.** Two independent MFA-protected team Owners, with routine work performed through lower-privilege project roles. The emergency Owner must be able to access team settings and support without using the routine owner's session. Project membership, domains, billing, Git integration, and token/session ownership must be recorded by venture.

**MFA requirement.** Reconcile the dashboard/API conflict on the authoritative owner security surface before recording a result. Require MFA for both Owners; record factor class, enforcement/status, verifier role, and date without recording private factor details.

**Recovery documentation requirement.** Record owner and billing roles, recovery channel type, support path, project/domain/member/integration map, names-only active-session register, billing cycle, and the unresolved `$1` notification-budget versus `$500` API spend-limit semantics. Include a recipient-accepted project transfer procedure and a continuity test for Git deployments, environment bindings, custom domains, and rollback.

**Founder must do manually in an authorized window.** Authenticate to the security surface; resolve MFA evidence; approve and add the emergency Owner if the plan/seat implications are acceptable; approve the billing/spend policy; decide PinnedAtlas and duplicate-review project ownership; and approve one project-transfer rehearsal.

**Can later be delegated.** A platform administrator can export members, project roles, domains, integrations, and session metadata; maintain the token/session register; prepare per-project cost allocation; and conduct quarterly least-privilege reviews. Project maintainers may receive scoped project roles, not team ownership, unless explicitly approved.

**Do not.** Do not treat the 2FA badge or API field alone as authoritative; do not assume either spend-control field is a hard cap; do not enable automatic production pause without a tested outage/rollback plan; do not revoke sessions or tokens until their consumers and replacement paths are proven; do not delete `sweepza-canary` or `explore-and-earn-vercel-fix`; do not transfer a project without domain, environment, integration, billing, and recipient checks.

## 3. GoDaddy / registrar and DNS

**Current owner/admin risk.** **Blocked critical:** current sign-in prevented verification of owner/admin count, delegated access, MFA, recovery, billing, renewals, Website Builder, and mail products. Ten domains share one registrar/DNS account. Historical evidence records privacy on all ten and auto-renew on nine; ORAN's final auto-renew state remains unverified.

**Minimum safe backup-admin posture.** One MFA-protected account owner plus an independent provider-supported delegated emergency administrator with the minimum domain/DNS/renewal visibility required for continuity. Registrar ownership, DNS operation, renewal payment, and emergency recovery roles must be separate in the registry even if one person currently holds several roles. If delegation cannot cover recovery, retain a tested official support-recovery path and two-person secure custody of the procedure.

**MFA requirement.** Verify MFA for the owner and every privileged delegate after owner-approved access is restored. Record only status, factor class, and review date. Verify that the recovery channel is controlled by the parent business and not dependent on a venture mailbox whose domain is in the same locked account.

**Recovery documentation requirement.** Record the ten-domain inventory, legal registrant role, DNS host, domain contacts by role, delegated users, transfer locks, renewal/expiry schedule, payment owner, auto-renew state, Website Builder/mail attachments, support escalation, recovery channel type, and a non-mutating access-test checklist. Store authorization codes only in an approved secure system when a separately authorized transfer requires them; never place them in this registry.

**Founder must do manually in an authorized window.** Use the official sign-in/recovery path; verify account ownership, MFA, recovery, delegated access, billing and renewal authority; designate the emergency delegate if supported; verify ORAN renewal state; classify all adjacent domains; and approve a quarterly expiry review. Any renewal, payment, protection, or delegation change requires separate approval.

**Can later be delegated.** A domain administrator can maintain the sanitized renewal calendar, names-only product/domain mapping, DNS change log, Website Builder/mail dependency map, and quarterly access/expiry evidence. A finance operator can verify invoices and payment health without DNS authority if the provider supports that separation.

**Do not.** Do not change DNS, nameservers, MX, forwarding, Website Builder routing, contacts, locks, auto-renew, protection, or billing while restoring access; do not copy the founder credential to create a backup path; do not use a same-domain mailbox as the only recovery channel; do not cancel a product because a Vercel project exists; do not request transfer codes before an approved recipient and transfer window exist.

## 4. Doppler

**Current owner/admin risk.** **Blocked high/critical:** the local credential is stale or invalid, so the live workplace name, plan, owners, roles, MFA, recovery, service accounts/tokens, integrations, and billing cannot be verified. Recorded venture projects/configs exist, but `example-project`, PinnedAtlas evidence, and the Sweepza `dev_personal` boundary remain unclassified.

**Minimum safe backup-admin posture.** Two independent MFA-protected workplace Owners/admins where the plan supports them, with daily work delegated through venture/project/config-specific roles. At least one emergency administrator must be able to reach the workplace through an independent human identity; no recovery path may depend on reading or copying secret values.

**MFA requirement.** Verify individual MFA and any workplace enforcement for privileged humans. Record the status, enforcement surface, verifier, and date. A valid CLI token or application service token does not satisfy human MFA or recovery.

**Recovery documentation requirement.** Record workplace ownership, billing owner, recovery channel type, support escalation, members/groups/project grants, config access, and names-only service-token/integration inventory. For each machine credential record venture, environment, consumer, owner, purpose, last use, replacement sequence, and revocation condition. Document how runtime bindings are restored from the authoritative project/config without exposing values.

**Founder must do manually in an authorized window.** Authenticate through the official owner-approved path; verify the correct workplace and plan; designate the emergency owner/admin if supported; verify MFA/recovery; classify `example-project`, `dev_personal`, and PinnedAtlas; and approve any paid seat or ownership change.

**Can later be delegated.** A secrets administrator can produce names-only access exports, map integrations and service tokens to consumers, review config grants, verify audit events, and prepare staged replacements. Venture maintainers can receive time-bounded project/config access, never blanket workplace ownership by default.

**Do not.** Do not use the stale local credential as proof of access; do not display, copy, compare, or export secret values into governance records; do not rotate or revoke tokens before exact consumers and replacements are proven; do not delete `example-project` or `dev_personal` because their names look temporary; do not create parallel sources of truth in GitHub or Vercel.

## 5. Supabase

**Current owner/admin risk.** **Known:** seven active projects share one Pro organization. Organization members, owner count, MFA, recovery, exact billing, database ownership, backup/PITR settings, restore authority, and recipient acceptance are **unknown**. PinnedAtlas is active but off-registry.

**Minimum safe backup-admin posture.** Two independent MFA-protected privileged organization paths where supported, plus a named primary and backup database-recovery operator for each project. Operational developers should use project-specific least privilege. The emergency path must cover organization access, provider support, billing visibility, and documented restoration authority without relying on a runtime `service_role` credential.

**MFA requirement.** Require MFA for privileged dashboard identities and verify any organization enforcement. Record status and test date only. Database credentials and service roles are not MFA substitutes and must not be used as human recovery access.

**Recovery documentation requirement.** For every project record venture/legal owner, billing cost center, human roles, database owner, backup/PITR/retention posture, restoration operator, export requirements, data classification, edge/function/storage/auth dependencies, support escalation, recovery channel type, and recipient invitation/transfer path. Maintain a sanitized restore runbook and evidence from a disposable/non-production restoration exercise.

**Founder must do manually in an authorized window.** Authenticate to verify organization owners and MFA; classify PinnedAtlas; approve the emergency owner/admin and any seat/plan implications; identify the accountable data owner for each venture; approve retention/backup/PITR targets; and approve a recipient acceptance plus non-production restore rehearsal.

**Can later be delegated.** A database/platform operator can export names-only roles, document projects and dependencies, validate backup status, run approved disposable restore exercises, report per-project usage/cost, and maintain recovery evidence. Venture teams may receive project-level roles and scoped server identities.

**Do not.** Do not test restore against production, overwrite a live database, expose project URLs/keys or data, assume `anon`/`service_role` implies an accountable operator, delete an apparently idle project, or transfer a project before data, auth, storage, functions, custom integrations, billing, and recipient acceptance are proven.

## 6. Stripe

**Current owner/admin risk.** **Known partial:** Explore&Earn and Sweepza have dedicated account/test boundaries. Owners/admins, legal representatives, billing owners, payout/tax/dispute authority, MFA, recovery, and named restricted machine access are **unknown**. Sweepza retains a foreign venture webhook, two unclassified customer objects, and one zero-value draft invoice. Other venture account boundaries are unverified.

**Minimum safe backup-admin posture.** Two independent MFA-protected privileged humans for each retained Stripe account, subject to provider/legal eligibility, with separate documented business/legal representative, payout, tax, billing, support, security, and emergency roles. Daily operations should use the narrowest supported roles. The backup administrator must not share founder credentials and must not be granted unnecessary payout or live-money authority.

**MFA requirement.** Verify MFA for all privileged users and any account enforcement. Prefer phishing-resistant factors for people with live-mode, payout, or identity authority. Record only status, role, and date; never record private recovery or financial details.

**Recovery documentation requirement.** Maintain a sanitized account-by-venture/mode map; legal and business owner roles; billing, payout, tax, refund/dispute, and emergency authorities; recovery channel type; provider support path; users/roles; restricted service accounts; runtime/webhook ownership; retention obligations; and recipient eligibility/acceptance. Recovery and transfer exercises must remain in test mode and must not move money or customer data.

**Founder must do manually in an authorized window.** Authenticate to each account; verify its business/legal representative and account ownership; designate the backup privileged user and separate finance/legal roles; verify MFA/recovery; classify Sweepza residual objects; and approve every venture's legal entity and money-flow model before live activation or transfer.

**Can later be delegated.** Finance/legal operators can maintain invoices, tax/payout/dispute runbooks and recipient documentation using narrowly scoped roles. A platform operator can map test/live credentials and webhook consumers by name, prepare restricted replacements, and verify test-mode events. None may change live money without explicit authority.

**Do not.** Do not move funds, change payout/bank/tax/legal state, activate products, create live flows, expose keys or customer identities, delete residual objects, disable a webhook, or treat a dedicated account name as proof of the correct legal owner. Do not copy the founder credential to a buyer or backup operator.

## 7. Resend

**Current owner/admin risk.** **Known critical:** the visible Free team has one Admin. Its MFA field was blank, which does not prove enabled or disabled MFA; recovery is **unknown**. Explore&Earn has the only verified sending domain, while LogLoads retains legacy same-team authority. Sweepza has no activated Resend sender. Historical 1/1 domain evidence and the live `0 / 0` display conflict, so capacity is not established.

**Minimum safe backup-admin posture.** Two independent MFA-protected admins where supported, with routine senders and automation separated from team administration. A venture intended for transfer must have its own accepted team/domain/billing/recovery boundary; shared keys or a domain inside another venture's team are insufficient.

**MFA requirement.** Verify the blank field through the authoritative identity/security surface. Require MFA for both admins if supported, or document the strongest individual-identity MFA available. Record status and date without private factor/recovery details.

**Recovery documentation requirement.** Record team owner/admin and billing roles, recovery channel type, domain/DNS authority, support path, names-only domain and credential inventory, key owner/consumer/last use, sending limits, PAYG state, suppression/retention obligations, and a recipient team/domain acceptance procedure. Include delivery continuity and rollback before any key retirement.

**Founder must do manually in an authorized window.** Verify MFA/recovery and current capacity; approve the second admin; decide whether LogLoads and Sweepza receive separate teams/domains and approve any associated cost; identify the billing owner; and approve the staged disposition of broad rollback/legacy keys only after replacement evidence.

**Can later be delegated.** An email administrator can maintain domain verification, names-only credential mappings, usage/deliverability reporting, suppression/retention procedures, and quarterly access reviews. Venture operators may own sending-only, domain-restricted credentials without team-admin access.

**Do not.** Do not invite anyone during this documentation pass; do not enable PAYG or Sweepza mail, buy capacity, add domains, send email, change DNS, expose keys, or revoke broad/legacy keys before replacements are deployed and verified. Do not treat the owned `support@sweepza.com` mailbox as transactional-sending authority or Resend capacity.

## 8. Sentry

**Current owner/admin risk.** **Known partial:** seven venture projects and distinct DSNs exist in one shared organization. Owner/admin/member and contractor rosters, MFA, recovery, plan, seats, retention, usage, invoices, and recipient transfer support are **unknown**. One owner-grade build/release token remains an active dependency until proven otherwise.

**Minimum safe backup-admin posture.** Two independent MFA-protected organization Owners/admins, with daily project operations delegated to venture-scoped teams and automation performed by narrow project/release credentials. The emergency owner must have independent provider access and documented support recovery.

**MFA requirement.** Verify individual MFA and any organization enforcement for privileged humans. Record status, enforcement surface, verifier, and date. A DSN or auth token is not a backup administrator.

**Recovery documentation requirement.** Record organization/team/project roles, billing owner, support/recovery path, retention/sampling/quotas, alert recipients, project/DSN consumers by name, auth-token owner/scope/last use, release automation, data export/retention duties, and recipient project-transfer acceptance. The token replacement runbook must be `create -> install -> deploy -> verify -> observe -> separately approve revoke`.

**Founder must do manually in an authorized window.** Authenticate to obtain the owner/member and billing roster; approve the emergency owner; verify MFA/recovery; approve sampling/retention/seat budgets; and approve the staged replacement and eventual separate revocation of the owner-grade token.

**Can later be delegated.** An observability administrator can inventory teams/projects/tokens, maintain least-privilege mappings, monitor quota/retention, verify alerts and releases, and run approved recipient-access tests. Venture maintainers should receive only their project/team scope.

**Do not.** Do not revoke the owner-grade token before every consumer has a verified replacement; do not expose token or DSN values; do not increase sampling, traces, replay, retention, or seats without budget approval; do not assume distinct projects create independent ownership; do not delete a project because events are absent.

## 9. Cloudinary

**Current owner/admin risk.** **Known:** one shared Free product environment contains portfolio media; folder prefixes are taxonomy, not RBAC. Human owner/admin count, MFA, recovery, contractor access, billing owner, export/restore authority, and recipient acceptance are **unknown**. Only Explore&Earn is a confirmed active consumer. Shared Admin authority and four active folder-unbound, overwrite-enabled presets increase the blast radius.

**Minimum safe backup-admin posture.** Two independent MFA-protected privileged humans where the plan supports them, or the strongest supported owner plus delegated emergency path and tested official recovery. One named asset-recovery operator and backup must be able to produce and validate a sanitized manifest/export procedure. Transferable ventures require a separately accepted account/product-environment boundary, not only a folder.

**MFA requirement.** Verify MFA for privileged account identities and any enforcement. Record status and date only. Admin API credentials and signed upload presets do not satisfy human MFA or recovery.

**Recovery documentation requirement.** Record owners/roles, billing and support contacts by role, recovery channel type, environment and folder ownership, credential/preset owners, asset manifests, delivery dependencies, backup/export and restoration procedure, quota/credit monitoring, retention, migration rollback, and recipient acceptance. Keep public IDs and detailed asset metadata in controlled manifests rather than the governance summary when sensitive.

**Founder must do manually in an authorized window.** Decide whether the shared Free environment remains parent-owned or a venture receives a paid/separate boundary; approve the emergency administrator and any plan/seat cost; verify MFA/recovery; approve credit thresholds; and approve any future controlled migration or preset replacement.

**Can later be delegated.** A media administrator can export users/roles, build names-only credential/preset maps, classify unassigned and legacy assets, maintain manifests/checksums, monitor credits, and rehearse restoration in a disposable destination. Venture operators can receive fixed-folder, non-overwrite upload authority after approval.

**Do not.** Do not treat folders as access, billing, recovery, or transfer boundaries; do not share the Admin credential; do not move, rename, overwrite, or delete assets; do not modify active presets in place; do not grant placeholder ventures shared write authority; do not buy or migrate environments without a founder-approved requirement and rollback.

## 10. Mapbox

**Current owner/admin risk.** **Known partial:** a parent account contains eleven token records by name/type, including an active old/default public token with no displayed origin restriction and newer venture-scoped tokens. Human owner/member count, MFA, recovery, and recipient acceptance are **unknown**. There is no account-level monthly spending cap; current observed invoices were $0.

**Minimum safe backup-admin posture.** Two independent MFA-protected privileged humans if supported; otherwise one MFA-protected owner plus the strongest supported team/delegated administrator and tested official support recovery. Daily token operations should be least privilege. Recovery must include an external cost/abuse incident path because the provider offers no account hard cap.

**MFA requirement.** Verify MFA for privileged identities and any team enforcement. Record status and date only. A secret token, public token, origin restriction, or $0 invoice does not provide human-account recovery.

**Recovery documentation requirement.** Record owner/member roles, billing owner, recovery channel type, support path, names-only token inventory, scopes, origins, venture/environment, consumer and last use, external usage-alert owner, founder-approved emergency threshold, incident actions, replacement/revocation conditions, and recipient account/token transition procedure. Preserve a documented rollback path while the old token remains a consumer.

**Founder must do manually in an authorized window.** Authenticate to verify the human roster, MFA, recovery, and billing authority; approve the emergency administrator if supported; approve external monitoring thresholds and emergency cost policy; and approve the criteria and later change window for retiring the default token after sustained zero use.

**Can later be delegated.** A platform/map administrator can export names-only token metadata and usage, map consumers across source/Doppler/Vercel, review origins/scopes, operate external alerts, and prepare staged replacements. Venture operators should manage only their scoped tokens.

**Do not.** Do not assume $0 invoices mean no future exposure; do not claim a provider hard cap exists; do not revoke the default token or remove stale bindings until every consumer, exact-source deployment, observation period, and rollback is proven; do not expose token values; do not treat token naming or origin restriction as account ownership.

## Recovery exercise record template

Use one sanitized record per provider. Private destinations, codes, credentials, identifiers, and payment details stay in the approved secure system.

| Field | Required record |
|---|---|
| Provider and scope | Provider plus parent/venture boundary tested |
| Routine owner role | Role or approved business identity only |
| Emergency owner/admin role | Independent role or approved business identity only |
| MFA evidence | Enabled/enforced/unknown, factor class, verifier, date |
| Recovery channel | Channel type and accountable custodian roles only |
| Support path | Documented/unknown and last verification date |
| Exercise | Independent sign-in and non-destructive control-surface access tested |
| Production impact | Must be `none` for the governance exercise |
| Exceptions | Provider limitations, cost gate, or unresolved evidence |
| Next review | Named role and date |

## Current conclusion

None of the ten providers has a fully evidenced combination of two independent privileged human paths, verified MFA, documented recovery, complete least-privilege inventory, tested recovery, and recipient acceptance. This plan does not establish rollout-readiness or transfer-readiness; it defines the founder-approved work needed to reach those states.
