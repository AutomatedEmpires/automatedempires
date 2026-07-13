# AutomatedEmpires Provider Independence Standard

- **Applies to:** AutomatedEmpires, Explore&Earn, Sweepza, LogLoads, Lake & Pine, BidSpace, ORAN, and future ventures
- **Purpose:** Define operational independence, acceptable parent ownership, contamination, transfer evidence, and protected-change boundaries
- **Evidence rule:** Record identifiers, names, owners, scopes, dates, tests, and controlled links—never secret values, recovery codes, cookies, signing material, private customer URLs, or customer data.

## Governing definitions

A venture is **operationally independent** when it can be built, deployed, monitored, supported, restored, and billed without another venture's production credentials, mutable resources, domains, users, data, quota, or runtime authority.

A venture is **transfer-ready** only when a recipient can assume administrator, billing, recovery, data, and runtime control without receiving access to another venture and can independently deploy, operate, restore, and roll back.

Shared parent ownership may be an acceptable interim operating state. It is never automatic evidence of transfer readiness.

A documented **no-resource decision** is acceptable when the product has no consumer. Do not create placeholder accounts or copied credentials merely to make provider rows look complete.

Use these provider-boundary classifications:

- `independent` — venture-specific boundary and runtime evidence pass;
- `temporary shared-parent` — parent tenancy is documented and risk-bounded, but recipient transfer is incomplete;
- `blocked` — a required boundary or proof is absent or contaminated;
- `no resource` — product-approved non-use with no hidden consumer;
- `unknown` — ownership, consumer, billing, recovery, or runtime state has not been authenticated.

## Universal rules

1. Resource existence is not runtime proof; runtime proof is not transfer proof.
2. Project/folder/config names are not access control.
3. Environment names do not prove environment isolation.
4. Another venture's credential, webhook, customer object, data, domain, quota, or recovery path is contamination even inside a parent account.
5. Parent organizations are acceptable only when access, usage, billing, logs, recovery, and transfer paths remain attributable by venture.
6. Replace credentials using create → install → deploy → verify → observe zero old use → retire. Never revoke first.
7. Transfer uses provider-supported invitations, ownership changes, and credential rotation; credentials are not copied into packets.
8. No destructive migration, account purchase, plan upgrade, live-data change, or live-money change occurs without explicit approval.
9. Every exception names risk, compensating control, owner, review date, and closure condition.
10. A venture passes only when the recipient can receive it without exposure to another venture.

## GitHub

- **Minimum acceptable separation:** One canonical repository per venture; protected default branch; required checks that exist and run; explicit production deploy path; venture-scoped environments, Actions permissions, deploy keys, GitHub Apps, and repository secret names/consumers.
- **Temporary acceptable shared parent ownership:** Repositories may remain in the AutomatedEmpires organization when source history, access, CI, release provenance, security alerts, and transfer procedure are distinct. Shared parent security governance and billing are acceptable.
- **Unacceptable contamination:** Foreign deploy keys/secrets; workflows that can deploy another venture; foreign webhooks; a personal fork acting as release authority; ambiguous duplicate repositories; unclassified branches/tags used as rollback; a monorepo with no deliberate build/access boundary.
- **Evidence of independence:** Repository ID, default SHA, clean status, branch/ruleset configuration, required check runs, security-alert disposition, Actions/environment/App inventory, production Git consumer, release/rollback SHA, administrators and recovery owners.
- **Evidence of transfer readiness:** Recipient admin accepts; repository or a complete provider-supported mirror includes history, issues, tags, releases, settings, protections, and licenses; CI secrets are recreated from the recipient-controlled authority; recipient runs checks and deploys the exact commit.
- **Do not change without approval:** Transfer, rename, visibility, deletion, branch/tag/release removal, history rewrite, protection/ruleset changes, active PR closure, secret/key removal, App permission changes, or disabling security scanning.

Current implication: seven canonical repositories and parent-organization ownership are an acceptable operating boundary. Resolve any documentation discrepancy about CLI authentication before relying on automation evidence.

## Vercel

- **Minimum acceptable separation:** One canonical project per venture with correct Git repository, root directory, production branch, framework/runtime, aliases/domains, and venture-specific environment bindings.
- **Temporary acceptable shared parent ownership:** Projects may share the parent team and billing when deployments, domains, environment records, logs, access, usage, and cost are individually attributable.
- **Unacceptable contamination:** Foreign Git connection, domain/alias, environment value, or webhook; another venture's credentials; Preview using Production-only data without an approved lane; team-wide runtime token; duplicate project acting as ambiguous release authority.
- **Evidence of independence:** Project/team ID, Git/root/branch settings, names-only environment targets, exact-source Preview, functional smoke, current Production SHA/deployment, aliases/TLS/domains, logs, usage/cost, and functional rollback.
- **Evidence of transfer readiness:** Recipient team/admin/billing accepted; project is transferred or recreated; Git/domains/bindings are installed from the venture's Doppler project; recipient passes exact-source Preview, Production smoke, and rollback.
- **Do not change without approval:** Delete duplicate candidates; reconnect Git; change root/branch/build/runtime settings; promote/rollback Production; attach/move domains; change aliases/protection; replace environment records; delete deployments.

Current implication: `explore-and-earn-vercel-fix` and `sweepza-canary` remain `delete-review`, not deletion-authorized. Six `READY` Productions are artifact evidence, not full runtime proof; ORAN has no deployment.

## Doppler

- **Minimum acceptable separation:** One project per venture with explicit `dev`, `stg`, and `prd` contracts; venture/integration-scoped service tokens; documented variable names, purpose, owner, consumers, classification, and rotation without values.
- **Temporary acceptable shared parent ownership:** One parent workspace is acceptable when projects, roles, service tokens, audit history, integrations, and billing are separable.
- **Unacceptable contamination:** Bulk-copying another venture's config; personal config as Production; privileged shared service tokens; provider-admin credentials in runtime; undocumented identical Production values; config names presented as proof of data-lane isolation.
- **Evidence of independence:** Names-only contract, project/config IDs, service-token/integration scopes, authoritative consumer map, redacted parity checks, rotation owner, and deployment/runtime proof.
- **Evidence of transfer readiness:** Venture project is securely transferred/exported or recreated; recipient creates new service tokens; every consumer is redeployed and tested; old tokens reach zero use before revocation; recipient recovery/billing passes.
- **Do not change without approval:** Reveal values; overwrite write-only GitHub/Vercel values; copy configs; rotate/revoke credentials; delete configs/projects; change integrations; promote `dev` values into `prd`.

Current implication: seven project/config sets exist, but value authority remains incomplete. The unexplained `example-project` is `delete-review` only.

## Supabase

- **Minimum acceptable separation:** A venture-specific project wherever Supabase is used; explicit development/staging/Production data strategy; reconciled migrations; correct grants/RLS; scoped Auth, storage, functions, webhooks, queues/cron, backups, and restore path.
- **Temporary acceptable shared parent ownership:** Separate projects may share the parent organization and billing if database, keys, regions, backups, administrators, usage, and cost remain attributable.
- **Unacceptable contamination:** One database shared across ventures; unapproved non-Production access to Production data; service role in browser code; copied keys; cross-venture buckets/functions/writes; unreconciled live schema or managed ledger; blind migration replay.
- **Evidence of independence:** Project ref/region/health, repository binding, lane role, schema/ledger diff, RLS/policy inventory, anonymous/ordinary-user tests, Auth/storage/functions/webhooks/cron inventory, service-role consumers, backup/export, safe restore drill, costs, and owners.
- **Evidence of transfer readiness:** Provider project transfer or verified dump/restore reconciles schema, data, Auth users, storage, functions, policies, schedules, and webhooks; recipient admins/billing accept; new keys are deployed and tested.
- **Do not change without approval:** Schema/data writes; migration replay; pause/delete; key rotation; bucket mutation; Auth-user change; data copy; backup-policy change; destructive rollback.

Current implication: projects are venture-specific, but lane, backup/restore, and transfer proof remain incomplete. ORAN's schema/ledger mismatch is a hard stop; LogLoads needs live-shape backup/upgrade/rollback evidence.

## Clerk

- **Minimum acceptable separation:** Venture-specific application; Production instance separate from development; deliberate staging strategy; venture-owned domain/origins/redirects/OAuth, JWT templates, webhooks, users, roles, and recovery administrators.
- **Temporary acceptable shared parent ownership:** Separate applications may share the parent provider account. Ephemeral Previews may use venture development only when isolated from Production users/data and explicitly documented.
- **Unacceptable contamination:** Development instance serving Production; one Production app serving multiple ventures; shared signing secrets or OAuth apps; foreign callbacks/webhooks; undocumented shared users; Production keys in untrusted Preview.
- **Evidence of independence:** App/instance IDs and mode, user counts/classification, DNS/TLS, origin/redirect/OAuth/JWT/webhook inventory, role/claim tests, signup/login/logout/recovery smoke, webhook signatures/retries, admin/recovery and billing owners.
- **Evidence of transfer readiness:** Recipient ownership/recovery accepted; domain, OAuth, JWT, webhook, and administrative control moves; new runtime keys are installed; recipient passes auth, role, webhook, and recovery flows. Development identities are not promised as transferable Production users.
- **Do not change without approval:** Delete apps/users/domains; rotate keys/signing material; change OAuth/JWT/webhooks/origins; alter DNS; enable paid Phone/SMS MFA; cut over Production.

Current implication: dark Production resources are preparation, not activation. Sweepza remains environment-contaminated until Production no longer uses development Clerk.

## Stripe

- **Minimum acceptable separation:** Dedicated venture account for any live-money product; distinct test/live modes; venture-specific catalog, portal, endpoints/signing secrets, legal entity, payouts, tax, refunds, disputes, reconciliation, and runtime credentials.
- **Temporary acceptable shared parent ownership:** Separate accounts may remain under parent governance if legal/account identity, balances, objects, billing, administrators, and runtime bindings are distinct.
- **Unacceptable contamination:** Shared live account; foreign webhook/customer/catalog object; shared signing secret; test/live mixing; Connect before entity/liability/tax/payout design; an endpoint inside a shared account represented as account independence.
- **Evidence of independence:** Non-secret account identity/capabilities/legal owner, test/live catalog export, portal, webhook event/destination inventory, bindings, test Checkout/Billing and signed-event proof, live object counts/classification, payout/refund/dispute/tax owners.
- **Evidence of transfer readiness:** Provider-supported owner/legal/bank/tax transition; recipient reconciles customers, subscriptions, balances, disputes, payouts, catalog, and endpoints; recipient keys are deployed/tested; old access is removed only after acceptance.
- **Do not change without approval:** Customers, subscriptions, invoices, balances, payouts, disputes, tax, legal identity, products/prices, live endpoints, keys, bank details, account ownership, or any live money state.

Current implication: Explore&Earn and Sweepza have distinct accounts. Sweepza's foreign Explore&Earn webhook and two customers/one `$0` invoice remain contamination until replacement proof and approved classification; do not delete them.

## Resend

- **Minimum acceptable separation:** Prefer a separate team/account per sending venture; at minimum use a distinct verified domain/subdomain, domain-restricted sending-only key, explicit From/Reply-To, monitored support mailbox, isolated logs/usage, and bounce/suppression ownership.
- **Temporary acceptable shared parent ownership:** A parent team with a dedicated domain and scoped key is acceptable temporarily if it cannot send as another venture and usage is attributable. It is not the final transfer boundary.
- **Unacceptable contamination:** Broad key reaching another venture's domain; another venture's sender; quota/reputation coupling presented as independence; mailbox existence presented as transactional-mail readiness; root mailbox MX changed to enable API sending.
- **Evidence of independence:** Team/domain identity, SPF/DKIM/DMARC/sending records, key scope by name, environment placement, sender/reply/support identities, controlled delivery/reply/bounce/suppression/log proof, quota, cost, and recovery.
- **Evidence of transfer readiness:** Recipient team/domain/DNS and sender control; new keys and consumers; suppression/retention disposition; recipient delivery/reply smoke; broad/old key retires only after zero-use proof.
- **Do not change without approval:** Send real mail; purchase/upgrade plan; delete domain/key; revoke rollback credential; change sender; alter MX/SPF/DKIM/DMARC; clear suppressions.

Current implication: LogLoads authority reaching the Explore&Earn team is unacceptable. `support@sweepza.com` is founder-owned and aliases are available, but Sweepza sending activation is still deferred to its specific pass.

## PostHog

- **Minimum acceptable separation:** Separate project/key/host per venture; environment/release attribution; privacy defaults; event taxonomy; consent; capture/replay/console policy; retention/data region; access; export; billing cap and owner.
- **Temporary acceptable shared parent ownership:** Separate projects may share the parent organization if access, events, dashboards, usage, retention, and costs/caps remain attributable.
- **Unacceptable contamination:** Shared project/key; foreign events; broad personal API token; sensitive properties; replay/autocapture/console collection without approval; paid features/caps changed without cost authority.
- **Evidence of independence:** Project ID, key/host names-only placement, privacy/capture settings, admins, retention/consent/region, caps, exact-release controlled event and provider ingestion, dashboard/alert and export path.
- **Evidence of transfer readiness:** Recipient ownership or verified export/recreation includes definitions, dashboards, integrations, access, retention, and billing; a new runtime key produces a controlled event.
- **Do not change without approval:** Delete projects/data; enable replay/autocapture/console; change masking, retention, consent, region, caps, or add-ons; rotate keys before replacement proof.

Current implication: six projects are separated and ORAN's absence is intentional. Controlled post-write ingestion remains required.

## Sentry

- **Minimum acceptable separation:** Separate project/DSN per venture; release/environment attribution; alert routing; ownership; scrubbers/IP policy; retention; source-map token scope; usage/cost owner.
- **Temporary acceptable shared parent ownership:** A shared Sentry organization is acceptable with distinct projects/DSNs, project access, alerts, issue routing, usage, and a documented transfer path.
- **Unacceptable contamination:** Shared project/DSN; owner-grade organization token in runtime; foreign events; unredacted secrets/PII; alerts routed only through another venture; unbounded project access.
- **Evidence of independence:** Project slug/ID, DSN placement by name, controlled release/environment event, alert-recipient test, ownership rules, scrubber/IP settings, unresolved-issue owner, retention, billing, and token scope.
- **Evidence of transfer readiness:** Project is transferred or recreated with an explicit issue/history disposition; recipient admins/billing/alerts accept; DSN/build token rotation follows deploy-event verification; old token then retires.
- **Do not change without approval:** Delete projects/issues/data; change scrubbers/retention/alerts/ownership; rotate DSN/build token; purge events; expand capture.

Current implication: seven projects under one parent organization are acceptable. Retention and current runtime/release events are incomplete; narrow the shared owner-grade build token only through safe replacement.

## Cloudinary

- **Minimum acceptable separation:** For true independence, a dedicated product environment or account with venture administrators, quota, billing, recovery, credentials, presets, transformations, metadata, exports, and assets.
- **Temporary acceptable shared parent ownership:** A separate product environment under a parent paid account may be operationally independent. Folder prefixes in one Free environment are organizational only and are not access control or transfer readiness.
- **Unacceptable contamination:** Shared admin/write credential; folder-unbound or overwrite-enabled preset; cross-venture asset; shared quota/recovery; hard-coded cloud identity; unattributable public IDs; multiple ventures writing into the same Free environment.
- **Evidence of independence:** Product-environment identity, administrators/billing/recovery, asset manifest/count/checksum/license, folders, presets, transformations, metadata, access modes, backups, usage, URL references, and no-cross-write proof.
- **Evidence of transfer readiness:** Recipient environment; reconciled assets/metadata/presets/transformations/access; configurable cloud identity; representative Preview/pages; reversible URL/dual-delivery cutover and rollback.
- **Do not change without approval:** Move, rename, overwrite, archive, or delete assets; mutate presets/transformations; revoke credentials; change cloud name/URLs; migrate; upgrade plan.

Current implication: the shared Free environment is not transfer-grade, regardless of folder taxonomy. Keep media unmoved until export/reference/license and rollback evidence exists.

## Mapbox

- **Minimum acceptable separation:** One least-scope public token per application, restricted to approved origins; secret authorizers remain server-only; styles/datasets/geocoders and cost are attributable. Environment-specific tokens are preferred when justified.
- **Temporary acceptable shared parent ownership:** Tokens/styles may share the parent account if every app has its own token, origins/scopes, usage, billing owner, and transfer path. A single venture token across lanes is a documented exception.
- **Unacceptable contamination:** One public token across ventures; secret token exposed as public; unrestricted scope/origins; another venture's style/dataset without inventory; old shared token retained without a closure gate.
- **Evidence of independence:** Token metadata/scopes/origins; approved-origin success and unrelated-origin denial; exact-source functional render; binding; style/dataset/geocoder inventory; usage and cost owner.
- **Evidence of transfer readiness:** Recipient account/token plus styles/datasets; origins reproduced; new binding deployed and rendered; old token reaches zero use before revocation; rollback token is retained.
- **Do not change without approval:** Revoke authorizers/rollback token; change scopes/origins; install Production bindings; delete styles/datasets; alter billing; retire old token.

Current implication: four replacement public tokens are separated, but old shared-token retirement requires successful Preview/Production proof and zero-use evidence.

## GoDaddy, domains, and DNS

- **Minimum acceptable separation:** Venture domain or explicit no-domain/deferred decision; authenticated registrar control; complete zone inventory/export; expiry/renewal/privacy/lock/nameserver/DNSSEC state; web/mail/service records; recovery and billing owner.
- **Temporary acceptable shared parent ownership:** Multiple domains may share the founder registrar account if independently attributable, recoverable, transferable, and protected from changes to other ventures.
- **Unacceptable contamination:** Public DNS/RDAP as ownership proof; foreign records without owner; guessed domain purchase; shared sole recovery; domain ambiguity; web cutover that modifies mail; expired/unknown renewal treated as safe.
- **Evidence of independence:** Authenticated registrar/domain inventory, renewal/privacy/lock, zone export/checksum, authoritative DNS, TLS/web routing, MX/SPF/DKIM/DMARC, recovery, cost, and web-only rollback.
- **Evidence of transfer readiness:** Recipient accepts registrar/recovery/billing; provider-supported transfer or account change completes; before/after zone and nameserver diff; web/TLS/mail/rollback smoke passes.
- **Do not change without approval:** Purchase, transfer, unlock, delete, change renewal/privacy/nameservers/DNS/DNSSEC, attach/move domain, or alter mail records.

Current implication: BidSpace remains domain-deferred. ORAN renewal requires verification. Website Builder and Vercel cutovers must preserve all mail records.

## Meta Business Suite

- **Minimum acceptable separation:** Venture-specific Page, Instagram professional account, ad account, pixel/dataset, catalog, domain verification, billing profile, app/system-user permissions, consent map, and two recoverable admins with 2FA.
- **Temporary acceptable shared parent ownership:** Assets may remain in the parent business portfolio with venture-scoped roles, distinct ad account/pixel/catalog, attributable spend, and documented transfer eligibility.
- **Unacceptable contamination:** Shared ad account/pixel/audience/customer list; founder profile as sole owner; foreign domain/catalog; shared app tokens; cross-venture billing; unclear Page/handle rights.
- **Evidence of independence:** Asset IDs/link graph/ownership, admins/partners/2FA/recovery, domain verification, event settings/consent, billing/spend limit, content/campaign/audience inventory.
- **Evidence of transfer readiness:** Recipient business accepts provider-supported ownership/partner access; admins/billing pass; archives/rights are captured; tracking/domain claims are tested; parent access removes only after acceptance.
- **Do not change without approval:** Remove admins; change ownership; disconnect accounts; delete Page/post/pixel/catalog/audience; publish; advertise; alter spend/billing.

Current implication: no authenticated inventory exists. Classify Meta assets `unknown`, not independent.

## Canva

- **Minimum acceptable separation:** Venture-owned team/workspace or clearly scoped project; brand kit; editable sources/templates/assets/fonts; permission and license inventory; billing and recovery owner.
- **Temporary acceptable shared parent ownership:** A parent team may hold a dedicated venture kit/folder when permissions prevent foreign editing and licenses/assets remain attributable. A folder alone is not a transfer boundary.
- **Unacceptable contamination:** Shared editable masters; personal account as sole owner; public edit links; unclear stock/font rights; overwritten kits; cross-venture assets; exported-only files without source.
- **Evidence of independence:** Team/workspace, owner/access list, design/template IDs, brand kit, source/export inventory, fonts/assets/licenses, share links, billing and recovery.
- **Evidence of transfer readiness:** Recipient receives editable designs/kit; fonts/assets/licenses remain usable; source and representative exports verify; recipient ownership/recovery passes before old access removal.
- **Do not change without approval:** Delete/move/overwrite; change permissions/share links; publish; modify kit; buy plan/license.

Current implication: no authenticated Canva inventory exists. Classify it `unknown`.

## Email and mailboxes

- **Minimum acceptable separation:** Venture domain; real mailbox or documented shared mailbox; authenticated tenant; MFA/recovery; aliases/forwarding/delegation; retention/archive; MX/SPF/DKIM/DMARC; send/receive/reply smoke; license, billing, and support owner.
- **Temporary acceptable shared parent ownership:** Microsoft 365, Google Workspace, or another parent tenant may host distinct venture domains/mailboxes when access, usage, licensing, and billing are attributable and migration is documented.
- **Unacceptable contamination:** Shared password; alias presented as a transferable inbox; catch-all hiding ownership; foreign delegation/forwarding; SMTP credential reuse; mailbox presented as transactional API-send proof.
- **Evidence of independence:** Tenant/domain; mailbox/alias/shared-mailbox classification; admins/recovery/MFA; license/delegates/rules/retention; mail DNS; send/receive/reply smoke; cost and escalation.
- **Evidence of transfer readiness:** Supported tenant/mailbox migration or history export; domain/DNS plan; recipient admin/recovery; alias/rule/delegate inventory; before/after mail flow and archive verification.
- **Do not change without approval:** Delete mailbox/alias; reset credentials; remove admin; change forwarding/delegation/retention; change MX/authentication; activate transactional sending.

Current implication: `support@sweepza.com` is founder-owned and many aliases are available. Activation remains deferred. Microsoft/hosted/Google mail records elsewhere do not prove tenant ownership or transfer readiness.

## AI and developer tools

Applies to OpenAI, Anthropic, Vercel AI Gateway, Codex/Claude hooks, model providers, and automation credentials.

- **Minimum acceptable separation:** Venture-specific project/workspace or service account; least-privilege runtime/CI/admin credentials; model/version policy; budgets/rate limits; prompt/eval inventory; data/retention/training/region/DPA posture; logging, safety, fallback, and disable path.
- **Temporary acceptable shared parent ownership:** One parent organization is acceptable with separate projects/keys, scoped roles, attributable usage/cost, and no cross-venture prompts, files, stores, or logs.
- **Unacceptable contamination:** Personal subscription or broad org key in Production; provider-admin token in runtime; cross-venture data/store; unreviewed write-capable agent webhook; secrets/PII in prompts/logs; unlimited spend; silent model drift.
- **Evidence of independence:** Provider/org/project, credential purpose and secret location by name, consumers, models, usage/budget/rate limits, retention/training/region/DPA, prompts/evals, safety tests, fallbacks, and hook ownership.
- **Evidence of transfer readiness:** Recipient project/billing; keys installed; prompts/evals/config exported; model access confirmed; controlled request/fallback passes; old keys retire after zero use.
- **Do not change without approval:** Revoke keys; change models/budgets/rate limits; enable provider training/log sharing; activate write tools; alter webhooks; purchase capacity; expose prompt/session data.

Current implication: provider references exist, but authenticated account, billing, scope, data-policy, and runtime evidence do not.

## Azure and related ORAN services

Includes Azure tenant/subscription/resource groups, App Service, PostgreSQL, Key Vault, managed identities, networking, Maps, AI, and Communication Services.

- **Minimum acceptable separation:** ORAN-specific subscription or bounded resource group; RBAC, identities, vaults, compute, data, networks, backups, logs, costs, tags, and retention inventoried.
- **Temporary acceptable shared parent ownership:** Shared tenant/subscription is acceptable only with ORAN-scoped resources/RBAC/budget/tags/logs and no shared secrets/data.
- **Unacceptable contamination:** Shared Key Vault/identity/database; unknown live resources; another venture's networking/secrets; broken Azure endpoint treated as rollback.
- **Evidence of independence:** Authenticated resource graph/dependencies/roles/costs/data/backups/logs/DNS/TLS plus a recovery test.
- **Evidence of transfer readiness:** Recipient subscription/resource migration or verified rebuilt equivalent with reconciled data, identity, networking, billing, and runtime.
- **Do not change without approval:** Delete/move resource groups, vaults, databases, identities, apps, networks, DNS, logs, backups, or credentials; stop services; alter billing.

Current implication: no authenticated Azure inventory exists; this is a major ORAN transfer blocker.

## Mailgun

- **Minimum acceptable separation:** Venture account/subaccount or distinct sending domain; scoped key; sender identity; routes/webhooks; logs/suppressions; DNS; billing and recovery.
- **Temporary acceptable shared parent ownership:** Parent account may host a distinct venture domain/routes/credential/usage boundary with named owners.
- **Unacceptable contamination:** Shared key/domain; cross-venture route/catch-all; public DNS treated as account control; suppression/reputation coupling hidden.
- **Evidence of independence:** Authenticated account/domain, DNS, credential scope by name, routes/webhooks, delivery/reply/bounce/suppression smoke, admins, quotas, and billing.
- **Evidence of transfer readiness:** Recipient team/domain; routes/webhooks/suppressions transfer or recreation; new key deployment; end-to-end mail flow.
- **Do not change without approval:** Alter MX/SPF/DKIM/DMARC, routes, webhooks, suppressions, senders, keys, account, plan, or existing mail flow.

Current implication: ORAN has public Mailgun DNS evidence only; operational ownership remains `unknown`.

## Legacy hosting and mail platforms

Includes GoDaddy Website Builder, Microsoft 365/Outlook, hosted mail, Google Workspace, and any retained legacy host.

- **Minimum acceptable separation:** Authenticated site/tenant/resource identity, content/mailbox inventory, consumers, plan/cost, administrators/recovery, export, retention, dependencies, and retirement/transfer path.
- **Temporary acceptable shared parent ownership:** Parent tenancy is acceptable when venture resources, permissions, billing, and export are attributable.
- **Unacceptable contamination:** DNS record as ownership proof; unknown live dependency; foreign site/mailbox; shared password; decommission before export/rollback; conflicting mail authentication.
- **Evidence of independence:** Account/resource IDs, current routing/consumer proof, content or mailbox export, admin/recovery, billing, retention, and health smoke.
- **Evidence of transfer readiness:** Recipient resource or verified export/import; DNS/mail continuity; recipient recovery/billing; tested rollback before old service retirement.
- **Do not change without approval:** Remove Website Builder, tenant, mail, forwarding, verification, SIP, content, billing, DNS, or legacy host.

Current implication: AutomatedEmpires and LogLoads still publicly use Website Builder in the accepted evidence. Web cutover cannot disturb mail.

## Notion, Figma, and agent integrations

- **Minimum acceptable separation:** Venture-scoped workspace/file/database; source-of-truth declaration; service account/integration; permission map; exports; automation consumers; billing/recovery.
- **Temporary acceptable shared parent ownership:** Parent workspaces are acceptable when venture records/assets are permission-scoped and cross-venture content is not exposed.
- **Unacceptable contamination:** Personal sole ownership; public edit links; shared integration token; automation able to mutate another venture; undocumented canonical source; inaccessible editable design/source.
- **Evidence of independence:** Workspace/file/database IDs, owners/access, integration/token purpose by name, schemas, automations, links, exports, billing, and recovery.
- **Evidence of transfer readiness:** Recipient editable sources and ownership; exports/schema/integration inventory; automations run under recipient tokens; old access removes after validation.
- **Do not change without approval:** Delete/move pages/files/databases; change sharing/ownership; rotate integrations; publish; run cross-venture automation; purchase seats.

Current implication: repository references exist, but there is no authenticated ownership/transfer inventory.

## Leaflet, OpenStreetMap, and tile/geocoding services

- **Minimum acceptable separation:** Inventory the actual tile/geocoder provider, endpoint, credentials if any, attribution/license, privacy, caching, rate limits, usage terms, cost, monitoring, and fallback.
- **Temporary acceptable shared parent ownership:** Shared public tile infrastructure is acceptable only within published terms; paid providers require attributable venture account/token/usage.
- **Unacceptable contamination:** Missing attribution; undisclosed commercial endpoint; foreign token; abusive public-tile traffic; location data sent without privacy review; no fallback or rate policy.
- **Evidence of independence:** Library/provider/version, endpoint/token ownership, attribution smoke, usage/privacy/license review, limits, monitoring, and functional map test.
- **Evidence of transfer readiness:** Recipient has configuration, provider rights, licenses/attribution, cost owner, and tested fallback with no foreign credential.
- **Do not change without approval:** Swap providers, remove attribution, change endpoints/tokens/cache, purchase tiles, or retire a fallback.

Current implication: ORAN intentionally uses Leaflet/OpenStreetMap rather than Mapbox; the underlying tile/geocoding dependency still needs transfer evidence.

## Evidence required before independence can be claimed

For every applicable provider, the venture packet must contain:

1. exact account/organization/project/resource ID and environment purpose;
2. current business, technical, billing, recovery, security/privacy, and support owners;
3. access/RBAC/MFA and backup-admin evidence;
4. names-only credential/integration/webhook/consumer inventory;
5. venture-specific usage, quota, cost, renewal, and alert ownership;
6. functional positive and negative runtime tests tied to exact source/deployment;
7. export/backup and recipient-executable restore/recreation path;
8. tested transfer or least-privilege recipient rehearsal;
9. legacy dependency retirement criteria and rollback;
10. accepted exceptions with expiry.

If any required resource is `unknown`, foreign, shared without a bounded parent model, or unusable by the recipient without founder credentials, the provider gate is not independent.

## Portfolio evidence gaps to close

- Meta Business Suite and Canva have no authenticated inventories.
- Mailbox tenant admins, recovery, delegates, retention, licenses, and export paths are incomplete.
- AI/dev-tool accounts, budgets, data handling, key scopes, and runtime behavior are unverified.
- ORAN Azure/Key Vault/Mailgun resources and costs are not authenticated.
- Notion/Figma/agent integration ownership and transfer maps are absent.
- Supabase lane, migration, backup/restore, and ordinary-user evidence remains incomplete.
- Dark Clerk apps lack full runtime/role/webhook/recovery proof.
- Stripe legal/payout/tax/dispute/recipient evidence remains incomplete; Sweepza retains foreign/unclassified objects.
- Resend delivery/reply/suppression evidence remains incomplete; LogLoads retains cross-team authority.
- PostHog controlled ingestion and Sentry retention/least-privilege token proof remain open.
- Cloudinary remains structurally shared and transfer-blocked.
- Mapbox Production proof and old-token retirement remain open.
- No venture has completed end-to-end recipient acceptance.

This standard treats a documented shared-parent boundary as an interim operating control. It never upgrades a venture to transfer-ready without recipient proof.
