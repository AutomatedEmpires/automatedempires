# AutomatedEmpires venture brand asset factory design

Date: 2026-07-12

Status: Approved direction; implementation pending specification review

Repository: `AutomatedEmpires/automatedempires`

Branch: `codex/brand-asset-foundation`

## Purpose

Create a minimum viable, usable brand foundation for AutomatedEmpires and eight ventures without treating any mark, palette, type system, or website styling as final. The work establishes production-ready file organization, provisional original identity concepts, deterministic exports, editable Canva masters, and an operational inventory.

The system must support immediate use in social profiles, link previews, email, lightweight pitch material, app placeholders, and founder review. It must not modify application code, overwrite venture design systems, introduce paid elements, use unlicensed imagery, or imply trademark clearance.

## Approved approach

Use a hybrid brand family:

- Each venture receives a distinct identity suited to its audience and category.
- Portfolio cohesion comes from shared construction rules, spacing, export standards, neutral typography, and restrained presentation—not repeated marks or a shared color scheme.
- Color palettes are provisional asset palettes only. They are not website UI tokens.
- Marks are original P0 concepts designed for small-size legibility and deterministic vector export.
- All marks remain subject to founder refinement, similarity review, and trademark clearance.

This approach avoids two weak extremes: a tightly templated family that makes unrelated ventures interchangeable, and nine unrelated identities that lose operational consistency.

## Deliverable architecture

The repository is the source of truth for documented brand status and local exports. Canva is the editable collaboration surface. Neither system overwrites product design systems.

```text
ops/brand-assets/
  BRAND_ASSET_INVENTORY.md
  CANVA_FOLDER_MAP.md
  LOGO_AND_FAVICON_STATUS.md
  OPEN_GRAPH_AND_SOCIAL_ASSET_STATUS.md
  BRAND_DIRECTION_NOTES.md
  EXPORT_REQUIREMENTS.md
  assets/
    automatedempires/
    explore-and-earn/
    sweepza/
    logloads/
    bidspace/
    lake-and-pine/
    oran/
    komfort-killz/
    just-jesus-bro/
  manifests/
    brand-assets.json
    export-validation.json
```

Each brand directory contains:

```text
source/
  primary-logo.svg
  horizontal-logo.svg
  icon-mark.svg
exports/
  logo/
  favicon/
  app-icon/
  social-profile/
  facebook-cover/
  open-graph/
  email-header/
  pitch-one-pager/
preview/
  brand-board.png
README.md
```

SVG files are the editable local masters. PNG files are deterministic raster exports. The per-brand README records palette, typography, copy, imagery, safe use, and known limitations.

## Required asset matrix

| Asset | Master/output | Working dimensions | Key constraints |
| --- | --- | --- | --- |
| Primary logo | SVG + transparent PNG | 1600 × 1600 artboard | Icon and name; usable on light backgrounds |
| Horizontal logo | SVG + transparent PNG | 2400 × 720 | Compact website/email lockup |
| Icon mark | SVG + transparent PNG | 1024 × 1024 | No text; clear at 16 px |
| Favicon | SVG, PNG, ICO | 16, 32, 48, 180, 192, 512 px | Simplified geometry; transparent SVG/PNG where appropriate |
| App icon | PNG | 1024 × 1024 | Opaque background and generous mask-safe margin |
| Social profile | PNG | 1080 × 1080 | Circle-safe mark placement; platform-neutral source |
| Facebook/Meta cover | PNG + optimized JPG | 1640 × 924 working master; 851 × 315 optimized export | Important content centered; left area remains noncritical because cropping and profile overlap vary |
| Open Graph | PNG + JPG | 1200 × 630 | Brand, short descriptor, high contrast, meaningful alt text in manifest |
| Email header | PNG + JPG | 1200 × 400 | Lightweight; readable when rendered near 600 px wide |
| Pitch one-pager | PNG + PDF | 1080 × 1350 and US Letter PDF | One promise, one support statement, three proof/use points, no unapproved claims |
| Brand board | PNG | 1920 × 1080 | Mark family, palette, typography, imagery, and do/don't summary |

Meta currently recommends a 320 px square Page profile source and documents a 16:9 Page cover that may be cropped, resized, and partially obscured. The factory deliberately keeps a larger working master and exports the lightweight 851 × 315 variant Meta identifies for fast loading. Apple documents a 1024 × 1024 app-icon layout for iOS, iPadOS, and macOS. Web app icons include 192 and 512 px exports, with 1024 retained as the common master. Open Graph records width, height, MIME type, and alt text in the manifest.

## Tooling data contract

The isolated ESM package under `ops/brand-assets/tools/` is the single machine-readable source for approved brand directions and export requirements. It exports immutable `BRANDS` and `ASSET_REQUIREMENTS` collections, the shared `LEGAL_DISCLOSURE`, and a throwing `getBrand(slug)` lookup. Brand records include slug, display names, mark direction, four named palette colors, type stack, public and internal copy, imagery, do/don't guidance, and legal notes. Asset records include a stable ID, brand-relative path, format, dimensions, alpha expectation, and one of the eleven required asset roles.

The shared disclosure is: “Every asset is a P0 concept: not trademark cleared, not a final UI palette, not legal/compliance approved, and requires founder refinement before final adoption.” Every brand record includes this disclosure in addition to any venture-specific review boundary.

The asset contract covers SVG and PNG primary, horizontal, and icon marks; SVG, 16/32/48/180/192/512 px PNG, and multi-frame ICO favicon outputs; opaque 1024 px app icon and 1080 px social profile; 1640 × 924 PNG and 851 × 315 JPG Facebook covers; 1200 × 630 PNG/JPG Open Graph images; 1200 × 400 PNG/JPG email headers; 1080 × 1350 PNG and one-page US Letter PDF pitch sheets; and a 1920 × 1080 PNG brand board. Paths use lowercase kebab case and never use an ambiguous `final` suffix.

## Shared construction system

### Geometry

- Use low-detail, original geometric marks with a maximum of four principal shapes.
- Prefer strong filled silhouettes or consistent monoline geometry.
- Use an internal safe zone equal to at least 12.5% of the icon canvas.
- Avoid fine strokes, gradients, clipping-dependent effects, shadows, and literal category clichés.
- Derive favicon and app-icon versions from the same underlying geometry, simplifying where necessary.

### Typography

- Use open-source type directions or system-safe fallbacks.
- Do not redistribute proprietary font files.
- Keep exact brand names as live text in editable masters and document substitution behavior for Canva.
- Use at most two type families per brand direction.
- Treat recommendations as direction until the founder approves final licensing, hosting, and application use.

### Color

- Each palette contains one dark anchor, one secondary neutral, one light field, and one restrained accent.
- Marks must also work in one-color black and one-color white.
- Accent color is optional in product/UI use; these palettes do not replace existing design tokens.
- Validate text-bearing compositions to WCAG AA contrast where the composition acts as readable communication.

### Copy

- Keep venture claims specific but modest.
- Do not invent certifications, endorsements, partners, user counts, outcomes, legal compliance, or guarantees.
- One-page pitches use a headline, one support sentence, and three grounded points based on current venture descriptions.
- Copy is a v0 working bank, not a locked tagline system.

## Brand directions

### AutomatedEmpires

- Mark: three interlocking right-angle rails forming a central command path.
- Palette: Command Ink `#161A1D`, Steel `#5F6B73`, Mist `#E9ECEB`, Signal Brass `#B58A3A`.
- Type: Inter Tight; IBM Plex Mono for operational labels.
- Pitch: “We build systems that turn durable ideas into operating ventures.”
- Imagery: architectural systems, engineered materials, restrained command-center views, and real operators.
- Do: use disciplined modular geometry and whitespace.
- Don't: use robots, circuit brains, crowns, eagles, conquest maps, or imperial symbolism.

### Explore&Earn

- Mark: two offset contour lines forming an open trail and a subtle forward E.
- Palette: Trail Pine `#20362F`, Alpine Gray `#6F8176`, Sand `#E8E1D3`, Camp Amber `#C98245`.
- Type: Manrope; Source Serif 4 for editorial storytelling.
- Pitch: “Go farther. Earn along the way.”
- Imagery: documentary work-travel, human-scale landscapes, practical gear, and real destinations.
- Do: balance aspiration with credible human activity.
- Don't: use cartoon badges, coins, money trails, influencer poses, or generic SaaS gradients.

### Sweepza

- Mark: two nested sweep arcs resolving into one neutral process dot.
- Palette: Clean Ink `#172126`, Slate `#6B7880`, Frost `#EEF4F3`, Process Teal `#2A8A7E`.
- Type: Plus Jakarta Sans; Inter for dense information.
- Pitch: “Giveaways, run cleanly.”
- Imagery: organized products, genuine recipients, crisp tabletop compositions, and restrained celebration.
- Do: emphasize B2B campaign infrastructure, process clarity, and traceable steps.
- Don't: use approval-style emblems, third-party assurance motifs, roulette, slots, jackpots, lottery motifs, cash rain, casino neon, or claims of legal approval, guaranteed legality, or fairness.
- Public-safe copy: “Giveaway campaign tools for businesses. Compliance review and vendor onboarding in progress.”
- Internal pitch only: “Giveaways, run cleanly.”

### LogLoads

- Mark: two abstract log-end circles secured by one horizontal route bar.
- Palette: Bark `#26231F`, Iron `#6F685D`, Kraft `#D8CCB8`, Working Moss `#64725A`.
- Type: Roboto Slab; Source Sans 3 for operational copy.
- Pitch: “Move timber with fewer loose ends.”
- Imagery: documentary forestry operations, equipment in use, timber textures, route details, and real crews using safe practices.
- Do: prioritize function and legibility.
- Don't: use cartoon trucks, lumberjack mascots, smiling logs, unsafe work, or excessive hazard striping.

### BidSpace

- Mark: two opposing bracket planes creating an open transaction window and a negative-space B.
- Palette: Market Ink `#1E2428`, Ledger Blue `#596A75`, Auction Ivory `#F3F0E8`, Copper `#B56C45`.
- Type: IBM Plex Sans; IBM Plex Mono for prices, identifiers, and timestamps.
- Pitch: “A clearer place to bid and sell.”
- Imagery: real goods and equipment, inspection details, orderly lots, and clean catalog framing.
- Do: make hierarchy and transactional states obvious.
- Don't: use gavels, dollar signs, handshake clichés, shouting auctioneers, or dark luxury-fintech styling.

### Lake & Pine

- Mark: one continuous lake line folding upward into a minimal pine chevron.
- Palette: Deep Pine `#24332D`, Lake Gray `#728889`, Fog `#EDF0EC`, Shore Sand `#C7B89D`.
- Type: DM Sans; Lora sparingly for warm editorial accents.
- Pitch: “Local work, handled with care.”
- Imagery: real local environments, hands-on service work, clean homes or properties, and soft natural light.
- Do: show quiet competence and lived-in places.
- Don't: create a generic pine badge or drift into resort, spa, cabin-rental, or luxury-lodge language.

### ORAN

- Mark: four equal civic tiles arranged around an open public square.
- Palette: Civic Navy `#20313A`, Public Slate `#6E7F86`, Paper `#F1F3F0`, Wayfinding Amber `#C78B3B`.
- Type: Public Sans; Source Serif 4 for long-form public-interest content.
- Pitch: “Public systems, made easier to understand.”
- Imagery: libraries, transit nodes, sidewalks, public wayfinding, community spaces, and ordinary civic life.
- Do: use plain language, accessible hierarchy, and inclusive depictions.
- Don't: use flags, party colors, campaign imagery, podiums, seals, crests, or advice/affiliation implications.

### Komfort Killz

- Mark: a soft rounded K interrupted by one precise hard diagonal.
- Palette: Near Black `#181719`, Smoke `#757177`, Bone `#ECE7DF`, Electric Plum `#8B5B7C`.
- Type: Space Grotesk; IBM Plex Mono for captions and episodic labels.
- Pitch: “Comfort is where the story starts.”
- Imagery: high-contrast editorial photography, domestic details, tactile materials, flash-lit objects, and composed visual tension.
- Do: create edge through wit, contrast, and typography.
- Don't: use guns, blades, blood, skulls, targets, gore, hate, harassment, crime, or dangerous-behavior glorification.

### Just Jesus Bro

- Mark: two conversation brackets surrounding a short upright stroke, suggesting dialogue, presence, and an open doorway without a literal crucifix.
- Palette: Humble Ink `#222422`, Stone `#77786F`, Warm Paper `#F3EFE6`, Muted Clay `#A9795A`.
- Type: Instrument Sans; Source Serif 4 for quotations and reflective text.
- Pitch: “Faith, in plain language.”
- Imagery: quiet documentary community, honest portraits, shared tables, everyday service, books, notes, and natural light.
- Do: sound conversational and humble; use generous whitespace.
- Don't: use clip-art crosses, fish, crowns, doves, glowing clouds, faux-script church branding, prosperity cues, or denominational endorsements.

## Canva architecture

Create a new root folder named `AutomatedEmpires Brand System` and create the required child folders exactly as specified:

- `00 Parent — AutomatedEmpires`
- `01 Explore&Earn`
- `02 ORAN`
- `03 BidSpace`
- `04 Lake & Pine`
- `05 Sweepza`
- `06 LogLoads`
- `07 Komfort Killz`
- `08 Just Jesus Bro`
- `90 Shared Templates`
- `91 Icons and Illustration Library`
- `92 Photography Library`
- `93 Favicons and App Icons`
- `94 Social Covers and Profile Images`
- `95 Open Graph and Website Images`
- `96 Archived`
- `97 Retired Assets`

Existing flat Canva folders remain untouched. Each venture folder receives an editable brand board and pitch one-pager. Cross-brand templates live only in `90 Shared Templates`; exports or copies can also be placed in the relevant shared asset library without moving the venture master.

Use only generated geometry, locally produced assets, founder-owned uploads, Canva free elements, or licensed open-source typography. Record Canva design IDs and folder IDs in `CANVA_FOLDER_MAP.md` without exposing private tokens.

## Generation and production workflow

1. Produce a logo exploration sheet with distinct original geometry for each approved direction.
2. Select the strongest P0 direction against category fit, small-size clarity, distinctiveness, and risk notes.
3. Construct deterministic SVG masters from the selected geometry.
4. Render PNG/JPG/ICO/PDF exports from those masters and the approved copy bank.
5. Validate dimensions, transparency/opacity expectations, raster readability, file naming, and image integrity.
6. Create Canva folders and editable brand/pitch assets, preserving existing folders.
7. Record every artifact, status, source, Canva link/ID, and limitation in the required documentation.
8. Commit only brand assets and documentation. Do not alter application code or design systems.
9. Push the branch and open the PR titled `brand: add venture asset foundation`.

## Error handling and fallback behavior

- If a Canva folder already exists under the new root with the exact name, reuse it instead of creating a duplicate.
- If Canva generation or import fails, retain validated local exports, record the failure and retry path, and provide explicit import instructions.
- If a font is unavailable in Canva, preserve layout using the documented fallback and flag the substitution.
- If a raster conversion fails, keep the SVG master, mark the export incomplete, and do not claim the pack is complete.
- If any generated logo resembles an existing mark, reject it and regenerate or reconstruct a different concept.
- If imagery rights cannot be proven, use abstract geometry and text-only layouts rather than an image placeholder.

## Validation

Automated validation must confirm:

- all nine brand directories exist;
- all eleven required asset classes exist for every brand;
- SVG files parse and contain a nonempty view box;
- PNG/JPG dimensions match the manifest;
- favicon PNGs include all required sizes and the ICO contains 16, 32, and 48 px frames;
- app icons are square, opaque, and mask-safe;
- transparent logo exports retain alpha;
- pitch PDFs open and contain one page;
- filenames are lowercase kebab case and contain no ambiguous `final` suffix;
- the manifest includes palette, type direction, copy, imagery, do/don't, provenance, status, and alt text;
- Canva folder IDs are recorded when creation succeeds;
- repository scope contains no application-code changes.

Visual QA must inspect at least the 16 px favicon, 32 px favicon, 180 px touch icon, social circle crop, Facebook crop-safe area, OG thumbnail, email half-size rendering, and pitch graphic at phone width.

Repository checks remain `pnpm typecheck`, `pnpm lint`, and `pnpm build`, even though no runtime code is expected to change.

## Clearance and founder-decision boundaries

- No asset is trademark cleared. Clear names, wordmarks, icon silhouettes, domains, handles, app-store names, and relevant commercial classes before final adoption.
- ORAN receives the highest-priority naming review because the acronym is crowded, including established O-RAN telecom usage.
- Sweepza requires trademark and promotion-law review; copy cannot promise legality, fairness, eligibility, or compliance.
- Komfort Killz requires platform-policy, advertising, merchandising, and reputational review because the violent reading remains possible.
- Just Jesus Bro requires faith-media, ministry, podcast, and merchandise searches; scripture quotations require translation-specific permission review.
- Avoid seals, certification shapes, verified badges, or government-affiliation cues for ORAN and Sweepza.
- Preserve OFL notices for open-source fonts if font files are ever added. This P0 pack will document type directions without bundling font binaries.
- Founder decisions deferred from P0: final trademark counsel, final preferred logo route, final tagline approval, final typography hosting, final website palettes, and any paid Canva or photography purchases.

## Acceptance criteria

The work is complete when:

- all nine brands have the required local masters and exports;
- the required Canva hierarchy exists or every blocker is documented with local import instructions;
- all six required status/direction/export documents are complete;
- deterministic validation passes with no missing required artifacts;
- visual QA is documented;
- application code and product design systems remain unchanged;
- the branch is pushed and a reviewable PR titled `brand: add venture asset foundation` is open.

## Source references for platform constraints

- Meta Page profile and cover dimensions: https://www.facebook.com/help/125379114252045/
- Apple app icon specifications: https://developer.apple.com/design/human-interface-guidelines/app-icons/
- Web app manifest icon guidance: https://web.dev/learn/pwa/web-app-manifest
- Open Graph image metadata: https://ogp.me/
