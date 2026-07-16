# Naming and Filing Standard

## File by primary decision surface

- Portfolio comparison, registry, blocker, or status: `01-portfolio/`
- One venture's durable operating documentation: `02-ventures/<venture>/`
- Provider ownership, transfer, billing, or secret-name contract: `03-providers/`
- Sequencing, readiness gates, or rollout templates: `04-rollout/`
- Human access, recovery, account governance, or founder decisions: `05-governance/`
- Security, dependency, CI, risk, or security approval: `06-security/`
- Task coordination, intake, merge log, or cross-venture execution: `07-execution/`
- Superseded copy, immutable package, or historical delivery artifact: `08-archive/`

## Names and lifecycle

- Use uppercase snake case for durable reports and registers: `PROVIDER_RESOURCE_MATRIX.md`.
- Use lowercase kebab case for venture directories: `explore-and-earn/`.
- Do not add `FINAL`, `LATEST`, or `NEW` to filenames. Record the observation date and lifecycle in the document.
- Keep one canonical pathname per artifact. Link from indexes instead of copying a report into multiple areas.
- New reports state title, observation date, scope, lifecycle (`draft`, `open PR`, `merged`, or `historical`), source/PR, evidence basis, and explicit limits.

Do not silently rewrite historical evidence. Never place secrets, recovery codes, payment details, customer identities, or private provider URLs in this tree.
