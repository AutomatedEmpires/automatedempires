# Next Infrastructure Actions

**Prepared:** 2026-07-10 (Pass 4 execution order)

## Completed or safely fixed in Pass 4

1. E&E #242/#243, AutomatedEmpires #5, Lake #1, Sweep #47/#48/#49/#44, LogLoads #6, and BidSpace #62/#63 merged. Final defaults are E&E `b616b9e…`, Lake `1b6a877…`, Sweepza `4c0aad…`, LogLoads `9c9e107…` from final PR source `f280ef4…`, and BidSpace `2fe90a3…`; Bid #60 was closed corrupted with issues #53–57 preserved, and 27 other stale/superseded PRs were explicitly closed.
2. Explore&Earn now has a sending-only/domain-restricted Resend credential installed as restricted/sensitive in Doppler `dev`/`stg`/`prd` and Vercel Development/Preview/Production, with explicit From and support Reply-To identities. The broad credential remains rollback until delivery proof.
3. Dedicated Explore&Earn and Sweepza Stripe live/test accounts were verified. Explore&Earn test/catalog configuration and Sweepza price/environment alignment are complete without customer, invoice, payment, subscription, payout, or tax mutation.
4. Cloudinary's nine required top-level namespaces now exist; no media was moved or deleted. PostHog cross-app non-reuse is verified, and Explore&Earn source disables replay/console capture.
5. Six ventures have clean `READY` current-main productions: AutomatedEmpires `dpl_5sc…QLpzT`, E&E `dpl_5HC…xjQFY`, BidSpace `dpl_GQ2…JuVDp`, Lake & Pine `dpl_EHG…MDWVk`, Sweepza `dpl_9N5…Yutts`, and LogLoads `dpl_Xxr…8dPtF`. ORAN draft #58 head `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da` has zero deployments.
6. All seven repositories have strict real-check protections, linear/squash history, no force push/deletion, conversation resolution, automation bypass, vulnerability alerts, and Dependabot security updates. Ninety-seven proven-obsolete remote branches were explicitly deleted and ten known merged heads were auto-deleted, for 107 removed heads total. E&E, Sweepza, LogLoads, BidSpace, and Lake & Pine are remote `main`-only; AutomatedEmpires retains `main` plus active PR #6, and ORAN retains `main` plus draft PR #58. Three rejected Sweepza states are preserved through archive tags/issues #50–52.

## Completed in Pass 3

1. Authenticated GoDaddy ownership/control confirmed for ten domains; full Explore&Earn, Sweepza, and LogLoads zones inspected before safe writes.
2. Explore&Earn Resend DKIM/sending-MX/SPF records added, publicly resolved, and provider-verified.
3. Dark/default production Clerk instances created for Explore&Earn, Sweepza, and LogLoads. Five CNAMEs per venture resolve publicly; all three provider domains report DNS Verified and SSL Issued. Configuration, credentials, preview proof, and runtime replacement remain open.
4. At the Pass 3 snapshot, local remediations were validated but unpushed: Lake & Pine `a55ccff…`, ORAN `5ec3561…`, and Sweepza `89bbe121…`. Pass 4 later published or merged their accepted successors as recorded above.

## Immediate safe execution

1. Explore&Earn source/Preview checks are green. Obtain separate authorization for a controlled custom-domain mail smoke; verify reply routing and provider authentication/logging before broad-key retirement.
2. Prove Explore&Earn's production Stripe account identity without displaying the key; create the correct live webhook and preview it dark. Keep Sweepza's foreign E&E endpoint until that replacement is verified. Classify—but do not delete—the two customers and $0 draft invoice.
3. Complete GitHub CLI auth as operator tooling. Preserve the exact merged-main production evidence for Sweepza and LogLoads. Keep ORAN #58 draft until ancillary checks, its data lane, Preview, and rollback gates are green.
4. Complete AutomatedEmpires and Lake & Pine functional production-host/rollback smoke before any DNS change. Establish ORAN's scoped Preview data/credential lane and reconcile schema authority before its first deployment.
5. Configure each DNS/SSL-verified dark Clerk instance in isolated Preview and prove end-to-end auth before replacing any production binding.
6. LogLoads source, required checks, merge, and clean main-production provenance are green. Next prove backup/live-shape upgrade, environment provenance, distributed rate limiting, production rollback, and live migration safety before activating live data/providers or changing DNS.

## Payment, ownership, and destructive-action gates

1. No paid Resend upgrade: Sweepza and LogLoads transactional sending remain deferred, and neither may use Explore&Earn's sender identity.
2. No Cloudinary upgrade: folder taxonomy is complete, but transfer-grade product-environment separation remains a paid blocker. Media deletion/move remains a distinct destructive/production-risk gate.
3. Stripe account separation no longer needs an A/B/C retaining-account decision. Explicit approval is still required before deleting or irreversibly mutating the two Sweepza-account customers or $0 draft invoice, and legal/payout/tax state remains untouched.
4. Mapbox and PostHog writes currently require account-owner re-authentication. Resume after that confirmation; no upgrade is authorized.
5. BidSpace custom-domain purchase remains deferred. Continue dev/Preview provider setup on controlled local/Vercel origins.

## Provider separation after the gates

1. Mapbox: founder approval is recorded. After owner confirmation, create non-default public tokens with `styles:read`/`fonts:read` and exact venture origins. E&E dev/prd and branch-qualified LogLoads/BidSpace dev consumers are eligible; production remains gated by source/domain proof. Keep the shared token as rollback.
2. PostHog: after owner re-authentication, preserve project `exploreandearn` and create separate projects only when the no-upgrade plan permits and consent/event policy exists. Keep absent ventures keyless.
3. Sentry: retain seven distinct projects/DSNs and completed ownership/one-alert/scrubber/IP controls. Install new-project bindings into Vercel through an authorized write surface, prove controlled events/releases, then replace the owner-grade build token only after the narrow replacement is deployed and verified.
4. Cloudinary: finish classifying non-E&E objects and the 55 former icon raws, clone environment-specific fixed-prefix presets with overwrite disabled, switch one disposable fixture in Preview, and retire old presets only after zero use. Do not move or delete media until separately approved and reversible.

## Production and DNS gates

1. Lake & Pine: source/CI/Preview/`main` production are clean; prove functional rollback/DNS smoke before a reversible cutover of owned `lakeandpinecleaning.com`.
2. LogLoads: preserve default `9c9e107…` / production `dpl_Xxr…8dPtF`, then prove live upgrade/provenance/distributed rate limit, provider activation, and functional rollback before touching GoDaddy web records.
3. ORAN: repair the failing Codecov patch, Visual Regression, and runbook-freshness gates; then exact-SHA Preview, database reconciliation, observability, production candidate, and functional rollback must all pass before changing web DNS. Preserve Mailgun and other non-web records.
4. AutomatedEmpires: default `ed91ece…` / clean production `dpl_5sc…QLpzT` is `READY`; functional provider-host smoke and rollback must pass before replacing GoDaddy Website Builder.

## Transfer-ready definition

A venture is transfer-ready only when production repo, runtime, secrets, data, auth, money, email, telemetry/media/maps, DNS, webhooks, billing/recovery owners, and rollback are venture-specific or explicitly parent-governed—and every item is evidenced by provider state or a verified deployment, not merely a completed plan.
