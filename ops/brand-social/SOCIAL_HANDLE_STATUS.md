# Social Handle Status

**Verified snapshot:** 2026-07-12
**Scope:** authenticated Meta inventory, public profile observation, repository evidence, and proposed naming
**Rule:** availability is not ownership; no handle was claimed, renamed, or reserved in this pass

## Status definitions

- **Portfolio connected** — displayed inside the authenticated `AutomatedEmpires` business portfolio.
- **Authenticated-switcher observed** — visible to the authenticated founder in Meta Business Suite, but ownership, shared-access state, and group-assignment authority remain unresolved.
- **Public observed** — visible on a public social profile, but portfolio ownership or transfer rights may still be unverified.
- **Code-only candidate** — present in source metadata but not verified in the authenticated provider.
- **Proposed** — preferred naming for founder review; availability has not been checked or reserved.
- **Not found** — absent from the authenticated Meta switcher used in this pass. This is not proof that no account exists elsewhere.

## Portfolio handle registry

| Brand | Facebook | Instagram | Other observed/candidate handles | Preferred normalized handle | Status and action |
|---|---|---|---|---|---|
| AutomatedEmpires | No Page visible | No profile visible | GitHub organization/user naming exists; no social URL proved | `@automatedempires` | **Proposed.** Check existing founder-controlled accounts before creating or claiming anything. |
| Explore&Earn | Page exists: [public profile `61588924325326`](https://www.facebook.com/profile.php?id=61588924325326); internal Meta asset `1027674570438216`; no custom username observed | No connected profile visible | Source metadata proposes `@exploreandearn` on Facebook, Instagram, Threads, and X, but this is not provider ownership proof | `@exploreandearn` | **Facebook authenticated-switcher observed; other platforms code-only candidates.** After 2FA, confirm owned/shared status and group-assignment authority, then verify whether the candidate usernames are controlled before connecting Instagram. |
| Sweepza | No Page visible | No profile visible | None verified | `@sweepza` | **Proposed.** Do not describe the account as a live sweepstakes operator; do not create promotions or accept entries through social. |
| LogLoads | No Page visible | No profile visible | None verified | `@logloads` | **Proposed.** Position as coordination software in development; do not imply freight brokerage, carrier authority, or payment services. |
| BidSpace | No Page visible | No profile visible | None verified | `@bidspace` | **Proposed.** Do not publish a website field or live-marketplace claim until a domain and operating model are approved. |
| Lake & Pine | No Page visible | No profile visible | None verified | `@lakeandpinecleaning` | **Proposed.** Verify existing business-name use and current service availability before publishing. |
| ORAN | No Page visible | No profile visible | Example placeholder links exist in venture source and are not accounts | `@openresourceaccessnetwork`; compact fallback `@oranetwork` | **Proposed.** Keep naming nonpartisan; do not imply medical, legal, political, or emergency-advice authority. |
| Komfort Killz | Page exists: [public profile `61559844830194`](https://www.facebook.com/profile.php?id=61559844830194); internal Page `329566720232752`; no custom Facebook username observed | [`@komfort.killz`](https://www.instagram.com/komfort.killz) | Public Page links TikTok `@komfort.killz`, X `@komfort_killz`, and `komfortkillz@gmail.com` | Keep `@komfort.killz` where supported; `@komfort_killz` fallback | **Facebook/Instagram portfolio connected and public observed.** Preserve existing usernames unless founder approves a rename; verify ownership of TikTok/X separately. |
| Just Jesus Bro | Page exists: [public profile `61560404762891`](https://www.facebook.com/profile.php?id=61560404762891); internal Page `330382103492515`; no custom username observed | No connected profile visible | Public Page links `justjesusbro.com`; candidate `@justjesusbro` is not verified | `@justjesusbro` | **Facebook authenticated-switcher observed; Instagram proposed.** Preserve existing Page content and identity; after 2FA confirm owned/shared status and group-assignment authority before portfolio organization or cross-platform expansion. |

## Observed profile-state notes

### Explore&Earn

- The Page is visible in Meta Business Suite but listed under **Other assets**, not the `AutomatedEmpires` business portfolio.
- The public profile resolves through a numeric URL rather than a verified custom username.
- `exploreandearn.com` is linked on the Page.
- No connected Instagram account was visible in Meta Business Suite.

### Komfort Killz

- The Facebook Page and Instagram `@komfort.killz` appear as one connected asset inside the `AutomatedEmpires` portfolio.
- Public contact information includes `komfortkillz@gmail.com` and links to Instagram/TikTok `@komfort.killz` and X `@komfort_killz`.
- Existing public content is present. This is an active social identity, not a blank placeholder.

### Just Jesus Bro

- The Facebook Page is visible under **Other assets** and is not currently grouped inside the business portfolio.
- The public Page links `justjesusbro.com`, contains the phrase “fashion with compassion,” and has prior public posts.
- No connected Instagram account was visible in Meta Business Suite.

## Handle normalization policy

1. Prefer the same handle across Facebook, Instagram, Threads, TikTok, X, YouTube, and LinkedIn when the exact name is controlled and appropriate.
2. Preserve punctuation already established for Komfort Killz; a cross-platform cleanup is a separate founder decision.
3. Never append `official`, a location, or a legal suffix unless it is intentionally part of the brand and does not create a misleading identity claim.
4. Do not use a domain-like username for BidSpace until a final domain exists.
5. Treat ORAN as the public abbreviation only when the full name **Open Resource Access Network** is present in the profile name or bio.
6. Before claiming any handle, check trademark/brand conflict, existing founder-controlled accounts, recovery email, MFA, and whether the platform allows a transfer-grade business administrator.
7. Record the platform, exact username, profile URL, asset/account ID, owner versus shared status, primary admin, backup admin, MFA posture, and recovery owner after every successful claim or connection.

## Founder handle workflow

For each **Proposed** or **Code-only candidate** handle:

1. Search the platform while signed into the founder-controlled business profile.
2. If an account already exists, stop and inventory its owner, admins, recovery, content, and business relationship. Do not create a duplicate.
3. If a third party controls the name, do not impersonate, threaten, file a report, or purchase the handle as part of this work. Escalate the naming decision.
4. If the handle is available and the founder approves account creation, create it with a venture-approved email/recovery path and MFA; do not use an unrelated personal mailbox by default.
5. Add the resulting Meta asset to the matching group in [`META_ASSET_GROUP_MAP.md`](META_ASSET_GROUP_MAP.md).
6. Do not publish launch copy until the relevant venture status and contact/website fields are truthful.

## Remaining unknowns

- Business Settings ownership versus shared-access state for the three observed Pages.
- Current people, partners, backup admins, recovery methods, and transfer rights.
- Custom Facebook usernames for the observed numeric-profile Pages.
- Ownership of the Explore&Earn code-level candidates outside Facebook.
- Any social accounts for AutomatedEmpires, Sweepza, LogLoads, BidSpace, Lake & Pine, or ORAN that exist outside the current authenticated switcher.
- Registrar and mailbox control behind `justjesusbro.com` despite the public Page link.
