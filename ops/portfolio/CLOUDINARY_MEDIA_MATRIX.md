# Cloudinary Media Matrix

**Verified provider snapshot:** 2026-07-10
**Pass 2 status:** Refreshed through read-only Cloudinary Admin API usage, configuration, folder, preset, and asset-presence checks.
**Security note:** Cloud credentials, delivery/upload values, signed parameters, and credential fingerprints are intentionally excluded.

Provider inspection confirmed one Free Cloudinary product environment, `dwiwyt9vi`, in dynamic-folder mode. Usage reports 1,165 objects and 1.93 of 25 monthly credits. Root folders are `explore-and-earn`, `bidspace`, `logloads`, `sweepza`, `automatedinterviewer`, and `traffic`; only `explore-and-earn` currently contains assets. Four upload presets exist—three Explore&Earn-specific plus the provider default. All are signed, none enforces a folder, and overwrite is enabled.

## Current venture boundaries

| Venture | Repository/product need | Current provider boundary | Contamination status | Safe next action |
|---|---|---|---|---|
| AutomatedEmpires | Optional media provider reference only | No AutomatedEmpires folder or credential was verified; the similarly named `automatedinterviewer` folder is empty and must not be treated as the parent venture | No active use or contamination confirmed | Use local/static assets unless a managed-media requirement is approved. Do not repurpose another venture's placeholder folder. |
| Explore&Earn | Active media integration is represented in the repository | The only folder with assets is `explore-and-earn`; only Explore&Earn `dev` has Cloudinary credentials. Presets are signed but not folder-bound | **Single-environment ownership confirmed; no active cross-venture writes found.** The Free product environment is not independently split by app or environment | Designate the current product environment as Explore&Earn, bind uploads/presets to `explore-and-earn/<environment>`, review overwrite behavior, and keep the Admin credential out of other ventures. |
| ORAN | No active Cloudinary requirement was verified | No dedicated environment; active writes were not verified | Unknown | Do not add Cloudinary merely for portfolio uniformity. |
| BidSpace | Marketplace media is an intended integration | The `bidspace` folder exists but is empty; no BidSpace Cloudinary credential is present in Doppler | Placeholder only; no active asset writes or credential reuse confirmed | Do not activate the empty shared folder. When media becomes real, use a BidSpace-owned account/product environment and signed policy. |
| Lake & Pine | No active Cloudinary integration was verified | No dedicated environment; active writes were not verified | Unknown | Keep media local or provider-neutral until a concrete managed-media requirement exists. |
| Sweepza | Cloudinary appears in planning material rather than verified active runtime use | The `sweepza` folder exists but is empty; no Sweepza Cloudinary credential is present in Doppler | Placeholder only; no active asset writes or credential reuse confirmed | Do not activate or copy Explore&Earn upload configuration without an approved product requirement. |
| LogLoads | Public media is an intended integration | The `logloads` folder exists but is empty; no LogLoads Cloudinary credential is present in Doppler | Placeholder only; no active asset writes or credential reuse confirmed | When media becomes real, use a LogLoads-owned account/product environment and define signed upload and transformation policy before production writes. |

## Free-account operating controls

1. Treat folder prefixes as organization only, not access control. The current Admin credential can see the entire product environment.
2. Keep the current product environment assigned to Explore&Earn; do not distribute its Admin credential to placeholder ventures.
3. Bind signed presets to an Explore&Earn environment folder and review whether overwrite should remain enabled.
4. Because the other venture folders are empty, no asset migration is currently required. Create a separate free account or paid product environment only when that venture has a real media workload.
5. Free supports one product environment. Multiple product environments require paid capacity (Plus begins at $99/month) or separate accounts; purchase is a founder gate. Provisioning API automation is Enterprise-only on request.
