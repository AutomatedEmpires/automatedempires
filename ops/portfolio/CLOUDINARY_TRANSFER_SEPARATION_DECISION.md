# Cloudinary Transfer-Grade Separation Decision

**Prepared:** 2026-07-10  
**Current cloud:** `dwiwyt9vi`  
**Execution state:** **requires founder decision**; authenticated inventory is complete, but no media, preset, transformation, credential, folder, account, product environment, or delivery URL was changed. Media migration remains **blocked by production risk** until asset classification, destination ownership/capacity, verification, and rollback gates pass.

## Current boundary

The inspected Free account has one dynamic-folder product environment, a 25-credit monthly limit, current usage of 1.93 credits (7.72%), and last usage observed 2026-07-09. It contains 1,009 source assets plus 156 derived resources, or 1,165 objects in total. Of the source assets, 974 are in the Explore&Earn namespace and 35 are outside it: 31 sample/provider assets and 4 root assets requiring classification. The BidSpace, LogLoads, Sweepza, AutomatedInterviewer, and other venture-shaped placeholders are empty, and no AutomatedEmpires parent folder exists. Only Explore&Earn has confirmed active delivery and upload tooling in current source.

Explore&Earn hardcodes the cloud name in its delivery helper and setup scripts, depends on `explore-and-earn/*` public IDs, and uses three signed `ee-*` upload presets plus named transformations. Those presets and the signed provider default are folder- and asset-folder-unbound and allow overwrite; the Explore&Earn presets also lack explicit filename/unique-filename controls. BidSpace and LogLoads currently expose configuration placeholders but no active Cloudinary consumer was found; Sweepza is planning-only. Only Explore&Earn `dev` currently has Cloudinary credentials in Doppler, so no active cross-venture credential reuse was found.

Folder names are useful operating controls, but they do not create separate billing, administrators, credentials, quota, recovery, retention, or transfer ownership.

## Options

| Option | Cost / plan effect | Transfer quality | Risk | Decision |
|---|---|---|---|---|
| A — retain the shared Free environment with strict folder/preset rules | No provider upgrade | Not independently transferable | All ventures share account ownership, quota, credentials, and recovery; one bad write can affect another venture | **requires founder decision**; acceptable only as a documented temporary state |
| B — upgrade the parent account and create one product environment per active venture | Current public pricing lists Plus at $99/month ($89/month billed yearly) with two account/product-environment slots; more environments may require a larger plan or add-on | Better operational isolation, but still parent-owned and jointly billed | Migration and code changes are still required; parent account ownership remains a transfer dependency | **blocked by payment/plan** and **requires founder decision**; use only when centralized parent billing is intentional and later transfer support is contractually confirmed |
| C — create a standalone Cloudinary account/environment per venture | May fit separate Free accounts initially, but capacity, migration traffic, backups, add-ons, and future usage can trigger independent plan cost | Strongest sale/transfer boundary | Requires a controlled asset and URL migration; duplicate storage/transformations can consume quota | **requires founder decision**; recommended target for independently saleable ventures, beginning with Explore&Earn. Migration remains **blocked by production risk** until all gates pass |

Cloudinary documentation states that Free accounts support one product environment; multiple product environments are a paid-plan capability. The Provisioning API is an Enterprise feature and is not available for automating this Free account, and the inspected access did not provide safe product-environment provisioning authority. Cloudinary also permits separate accounts. Because multiple environments inside one parent account remain jointly owned, they improve operations but do not by themselves satisfy the requested independent-transfer standard.

## Founder decision

Choose one:

1. **Temporary shared boundary:** authorize A, designate the current environment as Explore&Earn, and accept that Cloudinary remains a documented transfer blocker.
2. **Parent-managed environments:** authorize a paid-plan quote/upgrade for B and confirm that joint billing is the intended ownership model. This is **blocked by payment/plan** until approved.
3. **Standalone venture accounts:** authorize account creation and recovery ownership for C. This is the recommended transfer-grade path; it does not authorize asset migration.

No purchase, upgrade, new account, product environment, or media migration was initiated in Pass 2 or this Pass 3 evidence refresh.

## Safe controls while the decision is pending

1. Treat Explore&Earn as the only confirmed active consumer. Do not enable BidSpace, LogLoads, Sweepza, or another venture with shared write credentials merely because its folder exists.
2. Clone rather than mutate the active presets. Require venture/environment-prefixed public IDs, bind both folder and asset folder, disable overwrite, set explicit filename uniqueness, and test only disposable fixtures before switching application configuration.
3. Keep upload credentials server-only in that venture's Doppler config. Do not copy the combined Cloudinary URL or API secret to another venture.
4. Classify the 31 sample/provider and 4 root source assets, then inventory resources, named transformations, presets, structured metadata, access modes, backups, and external delivery references before any change.
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
