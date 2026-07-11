# Cloudinary Transfer-Grade Separation Decision

**Prepared:** 2026-07-10

**Current environment fingerprint:** `dwi…t9vi`
**Execution state:** Pass 4 safely created the nine required top-level namespaces without moving or deleting media. No preset, transformation, credential, account, product environment, or delivery URL changed. Transfer separation remains **blocked by payment/plan**; media/preset mutation remains **blocked by production risk** until classification, destination ownership/capacity, verification, and rollback gates pass.

## Current boundary

The inspected Free account has one dynamic-folder product environment, a 25-credit monthly limit, current usage of 1.93 credits (7.72%), and last usage observed 2026-07-09. It contains 1,009 source assets plus 156 derived resources, or 1,165 objects in total. Of the source assets, 974 were in the Explore&Earn namespace and 35 outside it: 31 sample/provider assets and 4 root assets requiring classification. Pass 4 created `automatedempires/`, `explore-and-earn/`, `oran/`, `bidspace/`, `lake-and-pine/`, `sweepza/`, `logloads/`, `archived/`, and `retired/` without moving assets. Only Explore&Earn has confirmed active delivery/upload tooling. Fifty-five former Explore&Earn icon raws are no longer runtime icon references but still need manifest/documentation classification.

Explore&Earn hardcodes the cloud name in its delivery helper and setup scripts, depends on `explore-and-earn/*` public IDs, and uses three signed `ee-*` upload presets plus named transformations. Those presets and the signed provider default are folder- and asset-folder-unbound and allow overwrite; the Explore&Earn presets also lack explicit filename/unique-filename controls. BidSpace and LogLoads currently expose configuration placeholders but no active Cloudinary consumer was found; Sweepza is planning-only. Only Explore&Earn `dev` currently has Cloudinary credentials in Doppler, so no active cross-venture credential reuse was found.

Folder names are useful operating controls, but they do not create separate billing, administrators, credentials, quota, recovery, retention, or transfer ownership.

## Options

| Option | Cost / plan effect | Transfer quality | Risk | Decision |
|---|---|---|---|---|
| A — retain the shared Free environment with strict folder/preset rules | No provider upgrade | Not independently transferable | Shared account/quota/recovery; folder names are not access control | **Current Pass 4 operating decision.** Nine namespaces created; media/preset proof still open |
| B — upgrade the parent account and create one product environment per active venture | Paid plan | Better operational isolation, still parent-owned/jointly billed | Migration/code changes still required | **Blocked by payment/plan** and explicitly deferred |
| C — create standalone venture environments/accounts | May fit Free separately but can create future cost/ownership work | Strongest sale/transfer boundary | Controlled asset/URL migration required | **Deferred**; migration remains **blocked by production risk** and any paid capacity by payment/plan |

Cloudinary documentation states that Free accounts support one product environment; multiple product environments are a paid-plan capability. The Provisioning API is an Enterprise feature and is not available for automating this Free account, and the inspected access did not provide safe product-environment provisioning authority. Cloudinary also permits separate accounts. Because multiple environments inside one parent account remain jointly owned, they improve operations but do not by themselves satisfy the requested independent-transfer standard.

## Pass 4 operating decision

Retain the Free environment temporarily, with Explore&Earn as the only confirmed active consumer and the nine top-level namespaces as organizational controls. Do not upgrade. Do not grant placeholder ventures shared write authority. This explicitly accepts that Cloudinary remains a transfer blocker.

Paid parent environments and standalone venture-account migration are deferred options, not active work. Neither option authorizes asset movement or deletion.

No purchase, upgrade, new account, product environment, preset change, or media migration was initiated in Passes 2–4. Pass 4 changed folder structure only.

## Safe controls under the Free-plan decision

1. Treat Explore&Earn as the only confirmed active consumer. Do not enable BidSpace, LogLoads, Sweepza, or another venture with shared write credentials merely because its folder exists.
2. Clone rather than mutate the active presets. Require venture/environment-prefixed public IDs, bind both folder and asset folder, disable overwrite, set explicit filename uniqueness, and test only disposable fixtures before switching application configuration.
3. Keep upload credentials server-only in that venture's Doppler config. Do not copy the combined Cloudinary URL or API secret to another venture.
4. Classify the 31 sample/provider and 4 root source assets plus the 55 former icon raws, then inventory resources, named transformations, presets, structured metadata, access modes, backups, and external delivery references before any change.
5. Do not rename or move fixed-folder assets: that can change public IDs and break production URLs.

## Migration plan after approval

1. Create the destination account/product environment with venture-owned billing, administrators, recovery, and region/retention settings.
2. Export a source inventory containing resource type, delivery type, public ID, version, bytes/checksum where available, tags/context/metadata, access mode, and last delivery. Do not export API secrets.
3. Recreate signed upload presets, named transformations, structured metadata fields, and access controls in the destination. Test them on non-production fixtures.
4. Copy only the venture prefix. Preserve public IDs and resource/delivery types. Cloudinary's clone tooling does not preserve every metadata type, so compare metadata explicitly rather than assuming fidelity.
5. Verify source/destination counts and checksums, transformation parity, signed/private delivery, cache behavior, and a representative page set.
6. Remove the hardcoded cloud name from Explore&Earn source and setup scripts. Make it an environment contract, deploy a preview against the destination, and verify all manifests and generated URLs.
7. Use a reversible dual-delivery or controlled URL cutover. Retain the source assets and credentials through the observation window.
8. Retire old write access only after zero unexplained source writes and complete delivery verification. Asset deletion is a separate destructive approval.

## No-go conditions

- Destination capacity, cost, account ownership, backup, or recovery is unknown.
- Counts/checksums or metadata/preset/transform parity do not reconcile.
- Production code still hardcodes the old cloud name without a tested switch.
- A venture's source folder contains unclassified or cross-venture assets.
- Rollback relies on deleting or moving source media.

## Provider references

- [Cloudinary product environments](https://cloudinary.com/documentation/dam_digital_asset_management)
- [Cloudinary migration guide](https://cloudinary.com/documentation/migration)
- [Cloudinary CLI clone and migration limitations](https://cloudinary.com/documentation/cloudinary_cli)
- [Cloudinary billing and plan controls](https://cloudinary.com/documentation/billing_and_plans)
- [Cloudinary public pricing](https://cloudinary.com/pricing)
