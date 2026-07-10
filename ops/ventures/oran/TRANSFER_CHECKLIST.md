# ORAN transfer checklist

## Authority and code

- [ ] Recipient controls AutomatedEmpires/Open-Resource-Access-Network or its approved successor.
- [ ] The migration branch is merged, abandoned, or preserved with an explicit decision.
- [ ] Branch protections, CI environments, review gates, owners, and rollback commits are recorded.

## Runtime and data

- [ ] Canonical runtime is named and healthy; the broken Azure public target is no longer ambiguous.
- [ ] Vercel project oran is connected/deployed only if the migration was approved.
- [ ] Supabase project tpatxospkuqvajusuryw ownership, region, backups, migrations, RLS intent, service roles, and recovery are demonstrated.
- [ ] Development, staging, and production data/environment strategy is documented.
- [ ] Every retained Azure resource, subscription/RBAC owner, cost, data-retention duty, and deletion gate is inventoried.

## Secrets and providers

- [ ] Doppler oran dev/stg/prd ownership is transferred and configs contain only ORAN resources.
- [ ] No secret value is placed in this pack, repository, or transfer ticket.
- [ ] Sentry, maps, mail, auth, AI, and any Azure integration are classified as keep, migrate, or retire.
- [ ] openresourceaccessnetwork.com registrar, renewal, recovery, DNS zone, TLS, apex/www, and Mailgun records are transferred.

## Acceptance

- [ ] Recipient can deploy a non-production build and run the smoke suite.
- [ ] Recipient can restore the last known-good runtime and database recovery point.
- [ ] Cron/webhook endpoints reject unauthorized calls and point only to ORAN resources.
- [ ] No other venture's runtime account, data, identity, payment, mail, analytics, media, map, or webhook credential is required.
