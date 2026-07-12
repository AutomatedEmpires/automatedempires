# Sweepza transfer checklist

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / provider-owner verification required**.

## Repository and environments

- [x] Strict `verify`/`design`/`dependency-review`, linear/squash history, conversation resolution, no force push/deletion, automation bypass, vulnerability alerts, and Dependabot updates are verified; recipient/emergency access remains transfer-specific.
- [ ] Doppler project `sweepza` and `dev`/`stg`/`prd` role boundaries are transferred.
- [ ] `dev_personal` purpose, owner, and retention are documented or retired safely.
- [ ] The recipient can perform a names-only configuration audit without revealing values.

## Deployment and data

- [ ] Vercel project `sweepza`, team, Git link, root, aliases, Preview, Production, and rollback access are verified; current release evidence is Preview `dpl_DyK72pRkkjYCjAzTd7RJNE9uV7iN` and `main` `4c0aad183fe9442e4546985b373b26498e38e6e7` / production `dpl_9N57qj7PHDteARUpVFWCKAxYutts`, both `READY`.
- [ ] Current deployed alias and custom-domain cutover state are recorded.
- [ ] Supabase fingerprint `…nzisuomq`, ownership, migration ledger, backups, RLS, storage, and data-retention obligations are reviewed.
- [ ] Cron path, schedule, authentication, last success, and alert owner are documented.

## Product providers

- [ ] Dark production Clerk DNS is Verified and SSL Issued; finish OAuth, events/webhook, admin owners, Preview proof, `prd` replacement, and dev-user re-registration.
- [ ] Dedicated live `acct_1Sp…cxzo` and sandbox `acct_1Te…88pB` boundaries/prices are recorded; classify the foreign endpoint/two customers/$0 draft invoice without destructive mutation and review legal/payout/refund ownership.
- [ ] PostHog project/key/host environment binding and Sentry governance are recorded; fresh-deploy and verify controlled events/releases/retention before transfer.
- [x] Truthful mail-skip source merged through #47 and is present in current-main production; until mail is funded/configured, execution proof must show `skipped` and null `sent_at`.
- [ ] Approve and verify an independent Resend team, sending identity/domain, scoped key, from-address ownership, delivery, and rollback.
- [ ] GitHub/Notion worker tokens are least-privilege, venture-specific, and assigned to named owners.

## Domain and acceptance

- [x] `sweepza.com` Vercel attachment plus authenticated GoDaddy ownership, privacy, auto-renew, Outlook MX, and full-zone evidence are recorded; recovery owner still transfers operationally.
- [ ] Preview smoke tests cover Clerk sync, Supabase RLS, Stripe disabled/enabled states, email, analytics, Sentry, and cron.
- [ ] A production rollback is rehearsed without exposing credentials.
- [ ] Sender and recipient confirm no cross-venture credential or runtime resource remains.
