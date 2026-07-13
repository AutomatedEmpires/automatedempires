# Meta Asset Group Map

**Prepared:** 2026-07-12
**Target portfolio:** `AutomatedEmpires` (`810019010639432`)
**Current execution state:** prepared, not created; Meta Business Settings requires founder 2FA

## Group map

An asset group is an organizational container inside the existing Meta business portfolio. Creating one must not create a new Page, change Page ownership, add billing, or grant a partner access.

| Exact group name | Purpose | Assets observed today | Conditional initial membership | Future membership after separate verification |
|---|---|---|---|---|
| `AE | Parent` | AutomatedEmpires parent-company social assets | No parent Page or Instagram profile visible | None until an approved parent asset exists | AutomatedEmpires Facebook Page and matching Instagram profile |
| `AE | Explore&Earn` | Explore&Earn brand presence | Facebook Page `1027674570438216` / public profile `61588924325326` | Existing Facebook Page only after Business Settings confirms owned/shared status and group-assignment authority | Matching Instagram profile after authenticated ownership and handle review |
| `AE | Sweepza` | Sweepza brand presence | None visible | Empty if Meta permits | Approved Sweepza Page/profile; no ad account or commerce asset without separate approval |
| `AE | LogLoads` | LogLoads brand presence | None visible | Empty if Meta permits | Approved LogLoads Page/profile after legal/entity positioning is approved |
| `AE | BidSpace` | BidSpace brand presence | None visible | Empty if Meta permits | Approved BidSpace Page/profile after domain and marketplace model decisions |
| `AE | Lake & Pine` | Lake & Pine brand presence | None visible | Empty if Meta permits | Approved Lake & Pine Page/profile after service-availability and contact routing decisions |
| `AE | ORAN` | ORAN civic-resource presence | None visible | Empty if Meta permits | Approved ORAN Page/profile; never add a Pixel or tracking dataset in this workstream |
| `AE | Komfort Killz` | Komfort Killz brand presence | Facebook Page `329566720232752` / public profile `61559844830194`; Instagram `@komfort.killz` | Existing Facebook Page and connected Instagram profile after Business Settings confirms group-assignment authority | Other verified brand-owned assets only after an ownership review |
| `AE | Just Jesus Bro` | Just Jesus Bro brand presence | Facebook Page `330382103492515` / public profile `61560404762891` | Existing Facebook Page only after Business Settings confirms owned/shared status and group-assignment authority | Matching Instagram profile after authenticated ownership and brand-positioning review |
| `AE | Archive / Legacy` | Preserve inactive or superseded assets without deleting them | None classified as archive | Empty | Founder-approved legacy assets only; preserve IDs and ownership evidence |

## Current topology

```text
AutomatedEmpires business portfolio (810019010639432)
├── Portfolio asset
│   └── Komfort Killz
│       ├── Facebook Page 329566720232752
│       └── Instagram @komfort.killz
└── Other assets (outside the portfolio grouping shown in the switcher)
    ├── Explore&Earn Facebook Page 1027674570438216
    └── Just Jesus Bro Facebook Page 330382103492515
```

This topology records what the authenticated asset switcher displayed. It does not determine legal ownership, transferability, billing responsibility, or whether an asset is owned versus shared. Those fields must be verified after founder 2FA unlocks Business Settings.

## Founder creation sequence

1. Complete the founder-only 2FA flow described in [`META_BUSINESS_SETUP_LOG.md`](META_BUSINESS_SETUP_LOG.md).
2. Open [Meta Business Settings](https://business.facebook.com/settings/?business_id=810019010639432) and select **AutomatedEmpires**.
3. Open **Accounts → Business asset groups**. If the current interface exposes **Business asset groups** at the top level, use that equivalent entry.
4. Choose **Add** or **Create business asset group**.
5. Enter one exact group name from the table. Do not abbreviate, remove the `AE |` prefix, or replace `&` with `and`.
6. If Meta presents a group-type choice, select the ordinary brand/business-asset grouping option. Do not choose a campaign, line of business, or regulated category merely to continue.
7. Add a conditional initial member only after Business Settings confirms its owned/shared status and the current founder's group-assignment authority. If either remains unresolved, leave the group pending. Skip ad accounts, Pixels, datasets, catalogs, domains, apps, WhatsApp accounts, and payment assets.
8. If Meta requires any person selection, permission assignment, invitation, or role change, stop. Obtain explicit founder approval for that access mutation in a separate step; do not use it merely to finish group creation.
9. Save, reopen the group, and verify the exact name and asset IDs.
10. Repeat for the remaining groups. If the wizard requires a member asset, leave empty groups pending rather than creating placeholder Pages.

## Post-creation verification table

Complete this table in a follow-up change after the founder-attended run.

| Group | Created | Verified member assets | Ownership/shared status checked | Notes |
|---|---|---|---|---|
| `AE | Parent` | ☐ |  | ☐ |  |
| `AE | Explore&Earn` | ☐ |  | ☐ |  |
| `AE | Sweepza` | ☐ |  | ☐ |  |
| `AE | LogLoads` | ☐ |  | ☐ |  |
| `AE | BidSpace` | ☐ |  | ☐ |  |
| `AE | Lake & Pine` | ☐ |  | ☐ |  |
| `AE | ORAN` | ☐ |  | ☐ |  |
| `AE | Komfort Killz` | ☐ |  | ☐ |  |
| `AE | Just Jesus Bro` | ☐ |  | ☐ |  |
| `AE | Archive / Legacy` | ☐ |  | ☐ |  |

## Governance rules

- Asset groups organize access; they are not proof of legal ownership or transfer readiness.
- One venture's Page and Instagram profile belong in its matching group only.
- Parent operators may retain portfolio administration, but venture-level access should remain least-privileged and documented.
- Never use `AE | Archive / Legacy` as a deletion queue. Moving an asset there requires explicit founder approval and a recorded reason.
- Do not move an asset between portfolios or transfer ownership as part of group cleanup.
- Do not attach an ad account by default. This setup does not authorize advertising.
- ORAN must remain free of Meta Pixel/dataset installation under this mission's rules.
- A proposed handle, source-code URL, or public Page name is not sufficient ownership evidence; verify it in Business Settings.
