# Resend Multi-Venture Setup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Configure portfolio Resend domains, domain-scoped credentials, canonical sender contracts, app integrations, internal-only delivery checks, and durable operating documentation without cross-brand sending.

**Architecture:** Use the existing paid `exploreandearn` Resend team as the shared billing/control plane, with one verified domain and one sending-only domain-scoped API key per venture. Keep brand separation at the DNS, API-key, environment, From, Reply-To, and repository layers; preserve all legacy environment names as temporary fallbacks while the canonical `RESEND_API_KEY`, `RESEND_FROM`, `RESEND_REPLY_TO`, and `SUPPORT_EMAIL` names are deployed.

**Tech Stack:** Resend Transactional Pro, GoDaddy Domain Connect/DNS, Doppler, Vercel, TypeScript, Next.js, Vitest, Node test runner, GitHub CLI.

## Global Constraints

- Do not send marketing campaigns, customer emails, public launch emails, entrant emails, or public sweepstakes email.
- Do not delete existing Resend domains, revoke existing keys before replacements are proven, change apex MX records, or break existing mailbox routing.
- Every venture must have its own verified domain, domain-scoped sending key, `From`, and `Reply-To`; never reuse Explore&Earn identity or Reply-To elsewhere.
- Canonical environment names are `RESEND_API_KEY`, `RESEND_FROM`, `RESEND_REPLY_TO`, and `SUPPORT_EMAIL`; legacy names remain read-only fallbacks during migration.
- Sweepza sends internal tests only and uses this approved operational copy: “Sweepza is building tools for businesses to organize clearer, more trustworthy giveaway campaigns. Vendor onboarding and compliance review are in progress.”
- ORAN keeps click/open tracking disabled and remains on its current Azure transport until a separate provider-migration decision is approved.
- BidSpace remains email-disabled until its production domain and support inbox are confirmed.
- Komfort Killz and Just Jesus Bro remain email-disabled because their venture instructions explicitly require no provider writes.
- Never print, commit, log, or place API-key values in command-line arguments; use clipboard-to-stdin transfer and clear the clipboard immediately.
- Existing mailbox records for AutomatedEmpires, Sweepza, LogLoads, and ORAN must remain intact; Resend records are isolated at `send` and `resend._domainkey`.
- Work on the existing non-main Codex feature branches, open PRs, and never merge them without independent review.

---

### Task 1: Provider control plane and operating documentation

**Files:**
- Create: `ops/email/README.md`
- Create: `ops/email/RESEND_ACCOUNT_STATUS.md`
- Create: `ops/email/RESEND_DOMAIN_VERIFICATION.md`
- Create: `ops/email/VENTURE_EMAIL_IDENTITY_MATRIX.md`
- Create: `ops/email/RESEND_SECRET_AND_ENV_CONTRACT.md`
- Create: `ops/email/RESEND_DELIVERY_TEST_LOG.md`
- Create: `ops/email/SWEEPZA_EMAIL_COMPLIANCE_NOTES.md`
- Create: `ops/email/EMAIL_ROLLBACK_AND_KEY_ROTATION_RUNBOOK.md`

**Interfaces:**
- Consumes: Resend billing/team/domain/key metadata, public authoritative DNS, Doppler/Vercel project mappings.
- Produces: The durable portfolio email source of truth consumed by Tasks 2–6.

- [ ] **Step 1: Record the account strategy**

Write `RESEND_ACCOUNT_STATUS.md` with: team `exploreandearn`; admin/billing owner `jackson@automatedempires.com`; Transactional Pro `$20/month`; `50,000` messages/month; `10` custom-domain slots; account rate limit `10 requests/second`; shared-team decision; and the explicit trade-off that billing/reputation are shared while domain-scoped keys isolate sending authority.

- [ ] **Step 2: Add and authenticate confirmed domains**

In Resend, retain `exploreandearn.com` and add `automatedempires.com`, `sweepza.com`, `logloads.com`, `lakeandpinecleaning.com`, and `openresourceaccessnetwork.com` in `us-east-1`. Use GoDaddy Domain Connect to add only `resend._domainkey`, `send` MX, and `send` SPF records. Do not add a BidSpace domain.

- [ ] **Step 3: Verify mailbox preservation and domain state**

Use authoritative DNS queries for apex MX/SPF/DMARC plus Resend `send`/DKIM records. Record each domain as `verified`, `pending propagation`, or `blocked`; include the existing mailbox provider and state that apex MX was unchanged.

- [ ] **Step 4: Write the exact identity matrix**

Record these identities:

```text
AutomatedEmpires <notifications@automatedempires.com> -> jackson@automatedempires.com
Explore&Earn <notifications@exploreandearn.com> -> support@exploreandearn.com
Sweepza <notifications@sweepza.com> -> support@sweepza.com
LogLoads <notifications@logloads.com> -> support@logloads.com
Lake & Pine <hello@lakeandpinecleaning.com> -> hello@lakeandpinecleaning.com
ORAN <updates@openresourceaccessnetwork.com> -> support@openresourceaccessnetwork.com (pending inbox confirmation)
```

Mark BidSpace, Komfort Killz, and Just Jesus Bro disabled. Record only `support@sweepza.com` as founder-confirmed; list optional Sweepza aliases as uncreated/pending mailbox confirmation.

- [ ] **Step 5: Write the secret contract and rollback runbook**

Document per-venture domain-scoped `sending_access` keys, Doppler `dev/stg/prd` to Vercel `development/preview/production`, clipboard-to-stdin handling, validation order, replacement-key overlap, log filtering by key, rollback to the last proven key, and the rule that the old key is revoked only after all environments show successful use of the new key.

- [ ] **Step 6: Verify documentation completeness**

Run:

```powershell
$required = @(
  'ops/email/README.md',
  'ops/email/RESEND_ACCOUNT_STATUS.md',
  'ops/email/RESEND_DOMAIN_VERIFICATION.md',
  'ops/email/VENTURE_EMAIL_IDENTITY_MATRIX.md',
  'ops/email/RESEND_SECRET_AND_ENV_CONTRACT.md',
  'ops/email/RESEND_DELIVERY_TEST_LOG.md',
  'ops/email/SWEEPZA_EMAIL_COMPLIANCE_NOTES.md',
  'ops/email/EMAIL_ROLLBACK_AND_KEY_ROTATION_RUNBOOK.md'
)
$missing = $required | Where-Object { -not (Test-Path $_) }
if ($missing) { throw "Missing required email docs: $($missing -join ', ')" }
```

Expected: exit `0` and no output.

- [ ] **Step 7: Commit**

```powershell
git add docs/superpowers/plans/2026-07-12-resend-multi-venture-setup.md ops/email
git commit -m "docs: add portfolio Resend operating runbook"
```

---

### Task 2: Explore&Earn canonical environment contract

**Files:**
- Modify: `C:/Users/autom/Documents/Codex/2026-07-12/co-7/work/explore-and-earn/packages/mailer/src/index.ts`
- Modify: `C:/Users/autom/Documents/Codex/2026-07-12/co-7/work/explore-and-earn/packages/mailer/src/__tests__/sendMail.test.ts`

**Interfaces:**
- Consumes: canonical env names and Explore&Earn identity from Task 1.
- Produces: `sendMail()` precedence `explicit option > RESEND_FROM > RESEND_FROM_EMAIL > brand default` and Reply-To precedence `RESEND_REPLY_TO > RESEND_REPLY_TO_EMAIL > SUPPORT_EMAIL > brand default`.

- [ ] **Step 1: Write failing canonical-env tests**

Stub `RESEND_FROM`, `RESEND_REPLY_TO`, and `SUPPORT_EMAIL` to empty strings in `beforeEach`. Add tests proving `RESEND_FROM` overrides `RESEND_FROM_EMAIL`, `RESEND_REPLY_TO` overrides `RESEND_REPLY_TO_EMAIL`, and missing Reply-To variables use `support@exploreandearn.com`.

- [ ] **Step 2: Run the focused test and verify RED**

Run: `corepack pnpm --filter @explore-and-earn/mailer test`

Expected: the new precedence/default tests fail because only legacy variables are currently read.

- [ ] **Step 3: Implement canonical precedence**

Use these constants and resolver behavior:

```ts
const DEFAULT_FROM = "Explore&Earn <notifications@exploreandearn.com>";
const DEFAULT_REPLY_TO = "support@exploreandearn.com";

function firstNonBlank(...values: Array<string | undefined>): string | undefined {
  return values.map((value) => value?.trim()).find(Boolean);
}

function resolveFrom(override?: string): string {
  return firstNonBlank(
    override,
    process.env.RESEND_FROM,
    process.env.RESEND_FROM_EMAIL,
  ) ?? DEFAULT_FROM;
}

function resolveReplyTo(): string {
  return firstNonBlank(
    process.env.RESEND_REPLY_TO,
    process.env.RESEND_REPLY_TO_EMAIL,
    process.env.SUPPORT_EMAIL,
  ) ?? DEFAULT_REPLY_TO;
}
```

Always include `reply_to: resolveReplyTo()` in the Resend payload and update the env-contract comments.

- [ ] **Step 4: Run tests and verify GREEN**

Run: `corepack pnpm --filter @explore-and-earn/mailer test`

Expected: all mailer tests pass.

- [ ] **Step 5: Run typecheck**

Run: `corepack pnpm --filter @explore-and-earn/mailer typecheck`

Expected: exit `0`.

- [ ] **Step 6: Commit**

```powershell
git add packages/mailer/src/index.ts packages/mailer/src/__tests__/sendMail.test.ts
git commit -m "fix: standardize Explore and Earn email identity"
```

---

### Task 3: Sweepza sender and Reply-To isolation

**Files:**
- Modify: `C:/Users/autom/Documents/Codex/2026-07-12/co-3/work/sweepza/lib/env.ts`
- Modify: `C:/Users/autom/Documents/Codex/2026-07-12/co-3/work/sweepza/lib/email/send.ts`
- Create: `C:/Users/autom/Documents/Codex/2026-07-12/co-3/work/sweepza/lib/email/send.test.ts`

**Interfaces:**
- Consumes: canonical env contract and Sweepza identity from Task 1.
- Produces: Sweepza-only Resend payloads with no Explore&Earn identity leakage.

- [ ] **Step 1: Write failing payload tests**

Create tests that mock `fetch`, set a test API key, call `sendEmail`, parse the request JSON, and assert default `from` is `Sweepza <notifications@sweepza.com>`, default `reply_to` is `support@sweepza.com`, and canonical variables override legacy `RESEND_FROM_EMAIL`.

- [ ] **Step 2: Run the focused test and verify RED**

Run: `corepack pnpm vitest run lib/email/send.test.ts`

Expected: failures show the old `hello@sweepza.com` default and missing `reply_to`.

- [ ] **Step 3: Add environment schema fields**

Add optional string fields `RESEND_FROM`, `RESEND_REPLY_TO`, and `SUPPORT_EMAIL`, retaining `RESEND_FROM_EMAIL` as a compatibility fallback.

- [ ] **Step 4: Implement safe defaults and payload**

Use:

```ts
const DEFAULT_FROM = "Sweepza <notifications@sweepza.com>";
const DEFAULT_REPLY_TO = "support@sweepza.com";
const from = env.RESEND_FROM?.trim() || env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM;
const replyTo = env.RESEND_REPLY_TO?.trim() || env.SUPPORT_EMAIL?.trim() || DEFAULT_REPLY_TO;
```

Send `{ from, reply_to: replyTo, to, subject, html }`.

- [ ] **Step 5: Run focused and full tests**

Run:

```powershell
corepack pnpm vitest run lib/email/send.test.ts
corepack pnpm test
corepack pnpm typecheck
```

Expected: all commands exit `0`.

- [ ] **Step 6: Commit**

```powershell
git add lib/env.ts lib/email/send.ts lib/email/send.test.ts
git commit -m "fix: isolate Sweepza transactional sender"
```

---

### Task 4: LogLoads safe activation defaults

**Files:**
- Modify: `C:/Users/autom/Documents/Codex/2026-07-12/co-4/work/logloads/apps/web/lib/notify.ts`
- Create: `C:/Users/autom/Documents/Codex/2026-07-12/co-4/work/logloads/apps/web/lib/notify.test.ts`
- Modify: `C:/Users/autom/Documents/Codex/2026-07-12/co-4/work/logloads/docs/ACTIVATION_RESEND.md`

**Interfaces:**
- Consumes: canonical env contract and LogLoads identity from Task 1.
- Produces: LogLoads-only `deliverEmail()` payload and aligned activation documentation.

- [ ] **Step 1: Write failing payload tests**

Add Vitest tests proving default `from` is `LogLoads <notifications@logloads.com>`, default `reply_to` is `support@logloads.com`, canonical variables override `LOGLOADS_EMAIL_FROM`/`LOGLOADS_EMAIL_REPLY_TO`, and an absent key returns `false` without calling `fetch`.

- [ ] **Step 2: Run the focused test and verify RED**

Run: `corepack pnpm --filter @logloads/web vitest run lib/notify.test.ts`

Expected: the default sender assertion fails on `onboarding@resend.dev` and canonical precedence fails.

- [ ] **Step 3: Implement canonical precedence**

Use:

```ts
const from = process.env.RESEND_FROM?.trim()
  || process.env.LOGLOADS_EMAIL_FROM?.trim()
  || "LogLoads <notifications@logloads.com>";
const replyTo = process.env.RESEND_REPLY_TO?.trim()
  || process.env.SUPPORT_EMAIL?.trim()
  || process.env.LOGLOADS_EMAIL_REPLY_TO?.trim()
  || "support@logloads.com";
```

Keep the existing best-effort/no-throw behavior and timeout.

- [ ] **Step 4: Align the activation runbook**

Replace the cross-account/`noreply@send.logloads.com` guidance with the domain-scoped key requirement and the exact `notifications@logloads.com`/`support@logloads.com` identity.

- [ ] **Step 5: Run focused and full tests**

Run:

```powershell
corepack pnpm --filter @logloads/web vitest run lib/notify.test.ts
corepack pnpm --filter @logloads/web test
corepack pnpm --filter @logloads/web typecheck
```

Expected: all commands exit `0`.

- [ ] **Step 6: Commit**

```powershell
git add apps/web/lib/notify.ts apps/web/lib/notify.test.ts docs/ACTIVATION_RESEND.md
git commit -m "fix: scope LogLoads Resend configuration"
```

---

### Task 5: Lake & Pine Reply-To contract

**Files:**
- Modify: `C:/Users/autom/Documents/Codex/2026-07-12/co-4/work/lakeandpine/apps/web/src/lib/email.ts`
- Modify: `C:/Users/autom/Documents/Codex/2026-07-12/co-4/work/lakeandpine/apps/web/src/lib/email-service.ts`
- Modify: `C:/Users/autom/Documents/Codex/2026-07-12/co-4/work/lakeandpine/apps/web/src/lib/email-service.test.ts`

**Interfaces:**
- Consumes: canonical env contract and Lake & Pine identity from Task 1.
- Produces: typed `EmailMessage.replyTo` mapped to Resend SDK `replyTo` without conflating the public business inbox with sender configuration.

- [ ] **Step 1: Write a failing Reply-To test**

Configure the harness with `replyTo: "hello@example.invalid"`; after ordinary delivery assert every captured message has `replyTo === "hello@example.invalid"`.

- [ ] **Step 2: Run the focused test and verify RED**

Run: `corepack pnpm --dir apps/web test`

Expected: type/test failure because `replyTo` is absent from the service contract and payload.

- [ ] **Step 3: Add Reply-To to the service contract**

Add `replyTo: string` to `EmailMessage` and the service config. Include `replyTo: config.replyTo` in booking and ops payloads.

- [ ] **Step 4: Resolve canonical runtime values**

In `email.ts`, use:

```ts
const FROM = process.env.RESEND_FROM?.trim()
  || process.env.RESEND_FROM_EMAIL?.trim()
  || `Lake & Pine <${BUSINESS_EMAIL}>`;
const REPLY_TO = process.env.RESEND_REPLY_TO?.trim()
  || process.env.SUPPORT_EMAIL?.trim()
  || BUSINESS_EMAIL;
```

Pass `replyTo: REPLY_TO` into `createEmailService` and map it to the Resend SDK `replyTo` field in the transport adapter.

- [ ] **Step 5: Run tests and typecheck**

Run:

```powershell
corepack pnpm test
corepack pnpm typecheck
```

Expected: both commands exit `0`.

- [ ] **Step 6: Commit**

```powershell
git add apps/web/src/lib/email.ts apps/web/src/lib/email-service.ts apps/web/src/lib/email-service.test.ts
git commit -m "fix: add Lake and Pine Reply-To isolation"
```

---

### Task 6: Scoped keys, Doppler/Vercel wiring, delivery checks, and PRs

**Files:**
- Modify: `ops/email/RESEND_DOMAIN_VERIFICATION.md`
- Modify: `ops/email/RESEND_SECRET_AND_ENV_CONTRACT.md`
- Modify: `ops/email/RESEND_DELIVERY_TEST_LOG.md`
- Modify: `ops/email/VENTURE_EMAIL_IDENTITY_MATRIX.md`

**Interfaces:**
- Consumes: verified domains and app support for canonical env variables from Tasks 1–5.
- Produces: deployed environment configuration, internal delivery evidence, and reviewable GitHub PRs.

- [ ] **Step 1: Create sending-only domain-scoped keys**

Create or confirm keys named `automatedempires-sending-v1`, `explore-and-earn-sending-v3`, `sweepza-sending-v1`, `logloads-sending-v1`, `lake-and-pine-sending-v1`, and `oran-sending-v1`. Permission must be `Sending access`; domain must match the venture. Do not revoke any older key.

- [ ] **Step 2: Wire each key to Doppler using stdin**

For each active venture and each shared config (`dev`, `stg`, `prd`), place the copied key in the clipboard, set `$dopplerProject` to one of `explore-and-earn`, `sweepza`, `logloads`, or `lake-and-pine`, and run without echoing it:

```powershell
$secret = Get-Clipboard
foreach ($config in @('dev', 'stg', 'prd')) {
  $secret | doppler secrets set RESEND_API_KEY --project $dopplerProject --config $config --visibility restricted --silent
}
Clear-Clipboard
Remove-Variable secret
```

Use the same stdin pattern for `RESEND_FROM`, `RESEND_REPLY_TO`, and `SUPPORT_EMAIL` with their exact Task 1 identity values.

- [ ] **Step 3: Wire Vercel using stdin**

Set `VERCEL_ORG_ID` and the exact project ID, then add/replace each canonical variable in `development`, `preview`, and `production`. Use `--sensitive` for preview/production API keys and `--no-sensitive` for development; never use `--value` or `--token`.

- [ ] **Step 4: Verify names and non-secret values**

List variable names from Doppler and Vercel without downloading restricted API-key values. Confirm all four canonical names exist in all three lanes for Explore&Earn, Sweepza, LogLoads, and Lake & Pine. AutomatedEmpires and ORAN may retain configured keys while app sending stays disabled; BidSpace, Komfort Killz, and Just Jesus Bro must not receive keys.

- [ ] **Step 5: Send internal-only tests after verification**

Send exactly one non-sensitive test per verified active venture to the founder/internal address. Sweepza’s body must use the approved operational copy from Global Constraints. Confirm Resend acceptance, inbox delivery when visible, and Reply-To routing; record message IDs only in redacted form.

- [ ] **Step 6: Record blocked tests accurately**

Do not test pending domains, ORAN before provider migration, BidSpace without a domain, AutomatedEmpires without a notification surface, or deferred brands. Record the exact blocker instead of claiming a pass.

- [ ] **Step 7: Run final verification**

Run the focused tests and typechecks from Tasks 2–5 again, check authoritative DNS and Resend dashboard status, inspect `git diff --check` in every changed repo, and verify no secret-like `re_` token appears in tracked files.

- [ ] **Step 8: Open PRs**

Push each changed non-main branch and open one scoped PR per repository. Include the exact test commands/results, domain/env separation summary, and a statement that no customer/public email was sent. Do not merge the PRs.
