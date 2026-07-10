# Cloudinary Transfer-Grade Separation Decision

**Prepared:** 2026-07-10  
**Current cloud:** `dwiwyt9vi`  
**Execution state:** Decision analysis complete; no media, preset, transformation, credential, folder, account, or delivery URL was changed.

## Current boundary

The inspected Free account has one product environment, a 25-credit monthly limit, current usage of 1.93 credits, and 1,165 objects in the provider usage snapshot. Of six root folders, only `explore-and-earn` contains assets; the BidSpace, LogLoads, Sweepza, AutomatedInterviewer, and Traffic placeholders are empty. Only Explore&Earn has confirmed active delivery and upload tooling in current source. Explore&Earn hardcodes the cloud name in its delivery helper and setup scripts, depends on `explore-and-earn/*` public IDs, and uses three signed `ee-*` upload presets plus named transformations. The presets do not enforce a folder and allow overwrite. BidSpace and LogLoads currently expose configuration placeholders but no active Cloudinary consumer was found; Sweepza is planning-only. Only Explore&Earn `dev` currently has Cloudinary credentials in Doppler, so no active cross-venture credential reuse was found.

Folder names are useful operating controls, but they do not create separate billing, administrators, credentials, quota, recovery, retention, or transfer ownership.

## Options

| Option | Cost / plan effect | Transfer quality | Risk | Decision |
|---|---|---|---|---|
| A — retain the shared Free environment with strict folder/preset rules | No provider upgrade | Not independently transferable | All ventures share account ownership, quota, credentials, and recovery; one bad write can affect another venture | Acceptable only as a documented temporary state |
| B — upgrade the parent account and create one product environment per active venture | Current public pricing lists Plus at $99/month ($89/month billed yearly) with two account/product-environment slots; more environments may require a larger plan or add-on | Better operational isolation, but still parent-owned and jointly billed | Migration and code changes are still required; parent account ownership remains a transfer dependency | Use when centralized parent billing is intentional and a later product-environment transfer is contractually supported |
| C — create a standalone Cloudinary account/environment per venture | May fit separate Free accounts initially, but capacity, migration traffic, backups, add-ons, and future usage can trigger independent plan cost | Strongest sale/transfer boundary | Requires a controlled asset and URL migration; duplicate storage/transformations can consume quota | **Recommended target for ventures intended to be sold independently**, beginning with Explore&Earn |

Cloudinary documentation states that Free accounts support one product environment; multiple product environments are a paid-plan capability. The Provisioning API is an Enterprise feature and is not available for automating this Free account. Cloudinary also permits separate accounts. Because multiple environments inside one parent account remain jointly owned, they improve operations but do not by themselves satisfy the requested independent-transfer standard.

## Founder decision

Choose one:

1. **Temporary shared boundary:** authorize A and accept that Cloudinary remains a documented transfer blocker.
2. **Parent-managed environments:** authorize a paid-plan quote/upgrade for B and confirm that joint billing is the intended ownership model.
3. **Standalone venture accounts:** authorize creation and recovery ownership for C. This is the recommended transfer-grade path; it does not authorize asset migration yet.

No purchase, upgrade, or new account was initiated in Pass 2.

## Safe controls while the decision is pending

1. Treat Explore&Earn as the only confirmed active consumer. Do not enable BidSpace, LogLoads, Sweepza, or another venture with shared write credentials merely because its folder exists.
2. Require venture-prefixed public IDs and signed, venture-specific presets. A preset must not write outside its venture prefix.
3. Keep upload credentials server-only in that venture's Doppler config. Do not copy the combined Cloudinary URL or API secret to another venture.
4. Inventory resources, named transformations, presets, structured metadata, access modes, backups, and external delivery references before any change.
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
