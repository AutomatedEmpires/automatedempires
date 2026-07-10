# Cloudinary Media Matrix

**Verified provider snapshot:** 2026-07-10
**Security note:** Cloud credentials, delivery/upload values, signed parameters, and credential fingerprints are intentionally excluded.

Provider inspection confirmed one free Cloudinary cloud, `dwiwyt9vi`, with 1,009 resources. Root folders include `explore-and-earn`, `bidspace`, `logloads`, `sweepza`, `automatedinterviewer`, and `traffic`; signed presets include `ee-illustrations`, `ee-icons`, `ee-photos`, and the provider default. Separation is currently available only through folder-level namespaces; no venture-specific environment or subaccount boundary was verified.

## Current venture boundaries

| Venture | Repository/product need | Current provider boundary | Contamination status | Safe next action |
|---|---|---|---|---|
| AutomatedEmpires | Optional media provider reference only | No dedicated environment; active writes were not verified | Shared-account exposure is possible but usage is unknown | Use local/static assets unless a managed-media requirement is approved. If used, enforce the parent folder namespace and a parent-specific preset. |
| Explore&Earn | Active media integration is represented in the repository | Shared free account; folder namespace is the only verified separation layer | **Confirmed account-level co-tenancy**; cross-folder writes and credential reuse were not proven | Inventory the exact folder, presets, transformations, and consumers. Enforce venture-specific upload rules before considering account separation. |
| ORAN | No active Cloudinary requirement was verified | No dedicated environment; active writes were not verified | Unknown | Do not add Cloudinary merely for portfolio uniformity. |
| BidSpace | Marketplace media is an intended integration | No dedicated environment; folder-only separation is the available shared-account model | Account-level co-tenancy is confirmed globally; BidSpace asset use is unverified | Define a BidSpace folder prefix and signed upload policy before enabling writes. A final domain is needed for production restrictions. |
| Lake & Pine | No active Cloudinary integration was verified | No dedicated environment; active writes were not verified | Unknown | Keep media local or provider-neutral until a concrete managed-media requirement exists. |
| Sweepza | Cloudinary appears in planning material rather than verified active runtime use | No dedicated environment; active writes were not verified | Unknown | Do not provision or copy another venture's upload configuration without an active product requirement. |
| LogLoads | Public media is an intended integration | No dedicated environment; folder-only separation is the available shared-account model | Account-level co-tenancy is confirmed globally; LogLoads asset use is unverified | Define a LogLoads folder prefix, upload preset, and transformation policy before any production writes. |

## Free-account operating controls

1. Treat folder prefixes as mandatory namespaces, not a substitute for ownership separation.
2. Use venture-specific signed upload presets where server signing is available; do not allow one venture's preset to target another venture's folder.
3. Inventory existing assets and transformations by folder before moving or deleting anything.
4. Record whether credentials are shared; this audit confirmed account sharing but did not prove credential reuse.
5. For an independently transferable venture, plan a dedicated account/environment and provider-supported asset migration. Any paid upgrade is a founder gate.
