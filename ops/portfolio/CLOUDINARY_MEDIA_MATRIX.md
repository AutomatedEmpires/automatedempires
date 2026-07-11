# Cloudinary Media Matrix

**Verified provider snapshot:** 2026-07-10
**Pass 2 status:** Refreshed through read-only Cloudinary Admin API usage, configuration, folder, preset, and asset-presence checks.
**Pass 3 status:** Authenticated transfer-grade inventory refreshed; no account, environment, media, preset, credential, transformation, folder, or delivery configuration was changed.
**Pass 4 status:** The required top-level folder taxonomy was created: `automatedempires`, `explore-and-earn`, `oran`, `bidspace`, `lake-and-pine`, `sweepza`, `logloads`, `archived`, and `retired`. No source or derived asset was moved, renamed, archived, or deleted; no preset or credential changed.
**Security note:** Cloud credentials, delivery/upload values, signed parameters, and credential fingerprints are intentionally excluded.

Provider inspection confirmed one Free dynamic-folder product environment (fingerprint `dwi…t9vi`). Usage is 1.93 of 25 monthly credits (7.72%), last observed 2026-07-09. It contains 1,009 source and 156 derived resources. Of the source assets, 974 were in Explore&Earn and 35 outside it. Pass 4 created the folder taxonomy without moving assets. Fifty-five former icon raws are no longer runtime refs but need manifest/docs classification. Four signed presets remain folder-unbound and overwrite-enabled.

## Current venture boundaries

| Venture | Repository/product need | Current provider boundary | Contamination status | Pass 4 classification | Safe next action |
|---|---|---|---|---|---|
| AutomatedEmpires | Optional media provider reference only | Dedicated empty top-level `automatedempires/` namespace now exists; no credential or active consumer exists | No active use or contamination confirmed; folder is organization only | Namespace **safely fixed now**; future activation requires an implemented use case | Use local/static assets unless a managed-media requirement exists. Do not copy Explore&Earn write authority. |
| Explore&Earn | Active media integration is represented in the repository | Existing Explore&Earn assets remain unmoved; only Explore&Earn `dev` has credentials. Presets remain signed, folder-unbound, and overwrite-enabled | **Single-environment active ownership confirmed; no active cross-venture writes found.** Thirty-five outside-namespace assets and fifty-five former icon raws need classification before transfer/archive. The Free environment is not an access boundary | Folder taxonomy **safely fixed now**; transfer separation **blocked by payment/plan**; preset/media changes **blocked by production risk** | Finish manifest/docs/runtime reference classification. Clone rather than mutate presets into fixed-prefix, overwrite-off variants and prove disposable Preview fixtures before any switch. |
| ORAN | No active Cloudinary requirement was verified | Empty `oran/` namespace exists; no credential or active writes | No active use or contamination confirmed | Namespace **safely fixed now**; no-resource decision **completed** unless a use case appears | Do not add credentials merely for portfolio uniformity. |
| BidSpace | Marketplace media is an intended integration | Empty `bidspace/` namespace exists; no BidSpace credential in Doppler | Placeholder organization only; no active asset writes or credential reuse confirmed | Namespace **safely fixed now**; transfer separation **blocked by payment/plan** | Keep Preview media local/provider-neutral until an actual consumer and safe signed policy exist. |
| Lake & Pine | No active Cloudinary integration was verified | Empty `lake-and-pine/` namespace exists; no credential or active writes | No active use or contamination confirmed | Namespace **safely fixed now**; no-resource decision **completed** unless a use case appears | Keep media local/provider-neutral until a concrete requirement exists. |
| Sweepza | Cloudinary appears in planning material rather than verified runtime use | Empty `sweepza/` namespace exists; no credential in Doppler | Placeholder organization only; no active writes/reuse | Namespace **safely fixed now**; no-resource decision **completed** for the current product | Do not activate or copy Explore&Earn upload configuration without an implemented requirement. |
| LogLoads | Public media is an intended integration | Empty `logloads/` namespace exists; no credential in Doppler | Placeholder organization only; no active writes/reuse | Namespace **safely fixed now**; transfer separation **blocked by payment/plan** | Keep media inactive until the canonical source/runtime requires it; then define a venture-owned boundary and signed policy before production writes. |

## Free-account operating controls

1. Treat folder prefixes as organization only, not access control. The current Admin credential can see the entire product environment.
2. Treat Explore&Earn as the sole confirmed active consumer; do not distribute its Admin credential to placeholder ventures.
3. Do not mutate active presets in place. Clone them into environment-specific presets with fixed Explore&Earn prefixes and overwrite disabled, test disposable fixtures, switch application configuration, and retire old presets only after zero use is verified.
4. Classify the 35 source assets outside the Explore&Earn namespace and the 55 former icon raws before any transfer, archive, or cleanup. The empty venture namespaces do not require asset migration.
5. Free supports one product environment. Multiple product environments require paid capacity or separate accounts; purchase is an explicit payment/plan gate. Provisioning API automation is Enterprise-only on request.
