# Next Infrastructure Actions

**Prepared:** 2026-07-10 (Pass 3 execution order)

## Completed in Pass 3

1. Authenticated GoDaddy ownership/control confirmed for ten domains; full Explore&Earn, Sweepza, and LogLoads zones inspected before safe writes.
2. Explore&Earn Resend DKIM/sending-MX/SPF records added, publicly resolved, and provider-verified.
3. Dark/default production Clerk instances created for Explore&Earn, Sweepza, and LogLoads. Five CNAMEs per venture resolve publicly; all three provider domains report DNS Verified and SSL Issued. Configuration, credentials, preview proof, and runtime replacement remain open.
4. Local remediations validated and committed: Lake & Pine `a55ccff…` (pinned CI/Windows case fix), ORAN `5ec3561…`, and Sweepza `89bbe121…` (email truthfulness). None is pushed or deployed.

## Immediate safe execution

1. Configure each DNS/SSL-verified dark Clerk instance's OAuth, webhook/JWT templates, paths/origins, and recovery owner without changing live keys; install through Doppler only into isolated Preview; prove end to end before any `prd` replacement.
2. Explore&Earn Resend: create a sending-only/domain-restricted replacement, set explicit sender, deploy through Doppler Preview, and prove delivery/authentication/logging. Revoke the broad key only after the replacement is verified and old usage is zero.
3. Review and publish the three local code candidates through separate PRs:
   - Lake & Pine local `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c`; prove an exact-SHA Preview.
   - ORAN `5ec356195eb2bc13efc1e07c536a83a76bf036e7`; safely install Preview credentials/runtime vars, reconcile the database ledger, then run the exact-SHA workflow.
   - Sweepza `89bbe121…`; retain its truthful `skipped` behavior until an independent mail resource exists.
4. Review/merge AutomatedEmpires draft PR #6 only after human review; verify the resulting `main` deployment and rollback before DNS.

## Founder/payment decisions

1. Stripe: select option A/B/C, legal retaining owner, and disposition of two customers plus one draft invoice. Do not mutate live state until a separate explicit migration/cutover approval.
2. LogLoads: select persistent single-node hosting (recommended for current single-writer/local-authority design) or approve a database-canonical/stateless Vercel refactor.
3. Resend: approve recurring independent team/account cost and recovery owners for Sweepza and LogLoads. Do not share Explore&Earn's sender identity.
4. Cloudinary: choose designated shared-E&E, paid parent product environments, or standalone venture accounts before preset hardening/media migration.
5. ORAN: confirm auto-renew intent and named rollback operator. BidSpace: choose an owned final domain.
6. Sentry/PostHog: name venture owners, environment/retention/consent/routing policy, and authorize narrowly scoped management/build credentials.

## Provider separation after the gates

1. Mapbox: after explicit credential-action approval, use the authenticated owner dashboard to create non-default public tokens with `styles:read`/`fonts:read`; restrict by exact venture origin. E&E dev/prd and LogLoads dev are prepared; E&E staging waits for one canonical hostname; Lake follows a clean Preview; BidSpace waits for domain/source approval.
2. PostHog: reauthorize management, preserve the live E&E project and 39-pageview baseline, then create a distinct Sweepza project only after owner/policy approval and prove a named release event.
3. Sentry: retain four distinct projects/DSNs; split the owner-grade token, assign venture teams/issue owners/alert rules, decide IP scrubbing, and prove first events for LogLoads/Sweepza.
4. Cloudinary: classify 35 non-E&E source objects, clone environment-specific fixed-prefix presets with overwrite disabled, switch one disposable fixture in Preview, and retire old presets only after zero use. Do not migrate media until approved.

## Production and DNS gates

1. Lake & Pine: clean source/CI/Preview/`main` before a reversible cutover of owned `lakeandpinecleaning.com`; retain the current dirty provider artifact as temporary rollback evidence.
2. LogLoads: converge its 8/22 histories after architecture selection; test persistence/restart/concurrency, then produce a clean artifact before touching GoDaddy web records.
3. ORAN: exact-SHA Preview, database reconciliation, observability, production candidate, and functional rollback must all pass before changing web DNS; preserve Mailgun and other non-web records.
4. AutomatedEmpires: clean `main` production provider host and rollback must pass before replacing GoDaddy Website Builder.

## Transfer-ready definition

A venture is transfer-ready only when production repo, runtime, secrets, data, auth, money, email, telemetry/media/maps, DNS, webhooks, billing/recovery owners, and rollback are venture-specific or explicitly parent-governed—and every item is evidenced by provider state or a verified deployment, not merely a completed plan.
