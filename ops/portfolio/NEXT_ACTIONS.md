# Next Infrastructure Actions

**Prepared:** 2026-07-12 (Pass 5 execution order)

> Later execution source update: AutomatedEmpires #12 `408fca3`, Explore&Earn #245 `5989853`, ORAN #67 `8da2101`, BidSpace #64 `69a53c4`, Lake & Pine #3 `e65b3b6`, Sweepza #53 `f2977cb`, and LogLoads #22 `6f7ebcd` supersede the Pass 4 “final default/current-main” labels below. Pass 4 deployment IDs remain exact evidence for their older source SHAs.

## Completed or safely fixed in Pass 5

1. PostHog's existing PAYG plan was verified at `$0` base/current/projected cost with six projects allowed and no upgrade. Explore&Earn `291166` was preserved; separate AutomatedEmpires `509081`, Sweepza `509084`, LogLoads `509086`, BidSpace `509087`, and Lake & Pine `509088` projects were created.
2. Autocapture, session replay, and console capture are disabled on all five new PostHog projects. Twelve product billing caps are `$0`; no paid add-on or plan upgrade was enabled. Each active venture's own key/host pair is presence-verified in Doppler `dev`/`stg`/`prd` and matching Vercel Development plus combined Preview/Production. Ops draft PR #8 auto-triggered an AutomatedEmpires Preview; it is not a controlled analytics event/ingestion proof, and no production deployment is claimed.
3. Separate least-scope public Mapbox tokens were minted server-side and installed across Doppler lanes for Explore&Earn, LogLoads, BidSpace, and Lake & Pine, with matching Vercel scopes. ORAN/Sweepza authorizers were intentionally unused.
4. Exact origins, restriction counts, `200` allowed/`403` rejected enforcement, exact-main `READY` Previews, and real-Chrome local rendering were verified. Lake Preview passed; E&E/Log app error paths and Bid protected access remain. Shared provider token stays rollback.

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
3. GitHub CLI operator authentication is verified and was used to publish ops draft PR #8. Preserve the exact deployed-source evidence for Sweepza and LogLoads. Preserve ORAN #58 as historical lineage and #67 at `8da2101` as current merged source; its protected Preview is shell/build evidence only.
4. Complete AutomatedEmpires and Lake & Pine functional production-host/rollback smoke before any DNS change. Use ORAN's protected exact-SHA Preview to prove the scoped data/credential lane, chat-first MVP, schema authority, support, and rollback before any broader deployment or access.
5. Configure each DNS/SSL-verified dark Clerk instance in isolated Preview and prove end-to-end auth before replacing any production binding.
6. LogLoads source, required checks, merge, and clean main-production provenance are green. Next prove backup/live-shape upgrade, environment provenance, and shared atomic production rate-limit state across serverless instances: Supabase first, Vercel-integrated KV/Upstash only if Supabase is unsuitable, memory local/dev only. Then prove multi-instance/outage behavior, production rollback, and live migration safety before provider/DNS activation.

## Payment, ownership, and destructive-action gates

1. No paid Resend upgrade: Sweepza and LogLoads transactional sending remain deferred, and neither may use Explore&Earn's sender identity.
2. No Cloudinary upgrade: folder taxonomy is complete, but transfer-grade product-environment separation remains a paid blocker. Media deletion/move remains a distinct destructive/production-risk gate.
3. Stripe account separation no longer needs an A/B/C retaining-account decision. Explicit approval is still required before deleting or irreversibly mutating the two Sweepza-account customers or $0 draft invoice, and legal/payout/tax state remains untouched.
4. PostHog provisioning/environment writes and `$0` caps are complete; fresh events remain. Mapbox handoff/install/non-production verification is complete at `$0` increased spend; PAYG includes 50,000 free GL JS loads/month and no spending cap.
5. BidSpace custom-domain purchase remains deferred. Continue dev/Preview provider setup on controlled local/Vercel origins.

## Provider separation after the gates

1. Mapbox: repair and re-smoke the E&E/Log fresh Preview application paths; obtain authorized BidSpace protected-Preview access; preserve Lake's green Preview. Production remains a separate approval, BidSpace domain work stays deferred, and the old/shared provider token remains rollback until all Production gates and zero-use evidence pass.
2. PostHog: provider and environment separation are complete for six approved consumers. Fresh-deploy each exact consuming SHA, send a controlled non-sensitive event, and verify ingestion/environment health before calling runtime activation complete. Keep ORAN absent because behavioral analytics/pixels are product-prohibited for its MVP; never reuse Explore&Earn's project/key.
3. Sentry: retain seven distinct projects/DSNs and completed ownership/one-alert/scrubber/IP controls. Install new-project bindings into Vercel through an authorized write surface, prove controlled events/releases, then replace the owner-grade build token only after the narrow replacement is deployed and verified.
4. Cloudinary: finish classifying non-E&E objects and the 55 former icon raws, clone environment-specific fixed-prefix presets with overwrite disabled, switch one disposable fixture in Preview, and retire old presets only after zero use. Do not move or delete media until separately approved and reversible.

## Production and DNS gates

1. Lake & Pine: source/CI/Preview/`main` production are clean; prove functional rollback/DNS smoke before a reversible cutover of owned `lakeandpinecleaning.com`.
2. LogLoads: preserve current source #22 `6f7ebcd` and the prior deployed-source rollback artifact `9c9e107…` / `dpl_Xxr…8dPtF`; revalidate the later source, then prove live upgrade/provenance, the Supabase-first shared atomic limiter decision and multi-instance/outage behavior, provider activation, and functional rollback before touching GoDaddy web records.
3. ORAN: preserve the later protected exact-SHA candidate evidence from the execution log. Source-cited North Idaho/Eastern Washington resources, provenance, stale handling, verification, no behavioral tracking/pixels, advice/partnership safeguards, support, database reconciliation, recovery, and runtime gates must all pass before public access or web DNS. Preserve Mailgun and other non-web records.
4. AutomatedEmpires: current source includes #12 at `408fca3`; clean production `dpl_4b8…k5bT9` remains last-deployed evidence from `664cda6…`. Revalidate current source, then pass functional provider-host smoke and rollback before replacing GoDaddy Website Builder.

## Transfer-ready definition

A venture is transfer-ready only when production repo, runtime, secrets, data, auth, money, email, telemetry/media/maps, DNS, webhooks, billing/recovery owners, and rollback are venture-specific or explicitly parent-governed—and every item is evidenced by provider state or a verified deployment, not merely a completed plan.
