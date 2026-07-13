# Venture Brand Asset Factory Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce, validate, document, publish to Canva, and propose for review a complete P0 operational asset pack for AutomatedEmpires and eight ventures.

**Architecture:** A self-contained Node.js asset tool under `ops/brand-assets/tools/` owns exact brand data, deterministic SVG composition, raster/PDF/ICO export, manifest generation, and validation. Generated assets live under `ops/brand-assets/assets/<brand>/`; Canva remains an editable collaboration surface, while repository manifests and status documents remain the source of truth.

**Tech Stack:** Node.js ESM, built-in `node:test`, Sharp for SVG/PNG/JPEG rendering, pdf-lib for one-page PDF creation and inspection, deterministic SVG geometry, Canva connector, Git/GitHub.

## Global Constraints

- Work only on branch `codex/brand-asset-foundation`.
- Do not modify application code, product design systems, website color tokens, or runtime dependencies.
- Do not use paid Canva elements, font binaries, external imagery, or unlicensed media.
- Every asset is a P0 concept: not trademark cleared, not a final UI palette, not legal/compliance approved, and requires founder refinement before final adoption.
- Use exact asset paths and dimensions from the approved specification and continuation handoff.
- Sweepza uses palette label `Process Teal`, conservative public copy “Giveaway campaign tools for businesses. Compliance review and vendor onboarding in progress.”, and no seals, badges, certification marks, casino, jackpot, lottery, or legal-approval cues.
- ORAN carries naming/O-RAN review; Sweepza carries trademark/promotion-law review; Komfort Killz carries platform-policy/reputational review; Just Jesus Bro carries faith-media/scripture-permission review.
- SVG masters retain live text and document font fallbacks; no font files are committed.
- No filename may contain `final`; filenames are lowercase kebab case.
- Local assets use deterministic geometry and copy only, with provenance recorded in the manifest.
- Canva folders reuse exact matches under the new root and never move or overwrite pre-existing flat venture folders.
- Repository verification commands remain `pnpm typecheck`, `pnpm lint`, and `pnpm build`.

---

### Task 1: Brand data contract and tooling harness

**Files:**
- Create: `ops/brand-assets/tools/package.json`
- Create: `ops/brand-assets/tools/brand-data.mjs`
- Create: `ops/brand-assets/tools/test/brand-data.test.mjs`
- Modify: `docs/superpowers/specs/2026-07-12-brand-asset-factory-design.md`

**Interfaces:**
- Produces: `BRANDS: readonly Brand[]`, `ASSET_REQUIREMENTS: readonly AssetRequirement[]`, `LEGAL_DISCLOSURE: string`, `getBrand(slug): Brand`.
- `Brand` fields: `slug`, `name`, `fullName`, `mark`, `palette`, `type`, `copy`, `imagery`, `dos`, `donts`, `legalNotes`.
- `AssetRequirement` fields: `id`, `relativePath`, `format`, `width`, `height`, `alpha`, `role`.

- [ ] **Step 1: Write the failing data-contract test**

Create a `node:test` suite that imports `BRANDS`, `ASSET_REQUIREMENTS`, and `getBrand`; asserts nine unique slugs; checks the required brand fields; asserts every palette has four hex colors; asserts all brands include the four-part legal disclosure; rejects filenames containing uppercase, spaces, or `final`; and asserts Sweepza uses `Process Teal`, the approved conservative public copy, and no public `verified` wording.

- [ ] **Step 2: Run the test and verify RED**

Run:

```powershell
node --test ops/brand-assets/tools/test/brand-data.test.mjs
```

Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `brand-data.mjs`.

- [ ] **Step 3: Create the isolated tooling package**

Create `ops/brand-assets/tools/package.json` with `"type": "module"`, scripts `test`, `generate`, `validate`, and `all`, and exact dependencies on Sharp and pdf-lib. Install only inside `ops/brand-assets/tools/`; do not alter the repository root package or lockfile.

- [ ] **Step 4: Implement the brand data module**

Define the approved nine directions, palettes, type stacks, internal/public copy, imagery guidance, do/don't notes, legal notes, and the complete asset requirement matrix. Export a frozen data structure and a throwing `getBrand(slug)` helper.

- [ ] **Step 5: Run the data-contract tests and verify GREEN**

Run:

```powershell
pnpm --dir ops/brand-assets/tools test
```

Expected: all brand-data tests pass, with nine brands and no invalid asset filenames.

- [ ] **Step 6: Commit**

```powershell
git add docs/superpowers/specs/2026-07-12-brand-asset-factory-design.md ops/brand-assets/tools
git commit -m "brand: define asset factory data contract"
```

---

### Task 2: Deterministic SVG masters and export renderer

**Files:**
- Create: `ops/brand-assets/tools/svg.mjs`
- Create: `ops/brand-assets/tools/layouts.mjs`
- Create: `ops/brand-assets/tools/generate-assets.mjs`
- Create: `ops/brand-assets/tools/test/svg.test.mjs`
- Create: `ops/brand-assets/tools/test/generate-assets.test.mjs`
- Generate: `ops/brand-assets/assets/<brand>/source/*.svg`
- Generate: `ops/brand-assets/assets/<brand>/exports/**/*`
- Generate: `ops/brand-assets/assets/<brand>/preview/brand-board.png`
- Generate: `ops/brand-assets/assets/<brand>/README.md`

**Interfaces:**
- Consumes: `BRANDS`, `ASSET_REQUIREMENTS`, and `LEGAL_DISCLOSURE` from Task 1.
- Produces: `renderIconSvg(brand, options): string`, `renderLogoSvg(brand, orientation): string`, `renderLayoutSvg(brand, layout, width, height): string`, `renderBrand(brand, outputRoot): Promise<AssetRecord[]>`, `buildIco(entries): Buffer`.
- `AssetRecord` fields: `brand`, `role`, `path`, `format`, `width`, `height`, `alpha`, `alt`, `provenance`, `status`, `limitations`, `sha256`.

- [ ] **Step 1: Write failing SVG tests**

Assert every `renderIconSvg` result starts with an SVG element, has a nonempty numeric `viewBox`, contains the brand slug in accessible metadata, contains no external image/font URL, and differs by hash across all nine brands. Assert logo masters include the exact brand name and transparent background.

- [ ] **Step 2: Run the SVG tests and verify RED**

Run:

```powershell
node --test ops/brand-assets/tools/test/svg.test.mjs
```

Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `svg.mjs`.

- [ ] **Step 3: Implement original low-detail icon geometry**

Implement one bounded SVG function per approved metaphor:
- AutomatedEmpires: three interlocking right-angle rails around a command path.
- Explore&Earn: two offset contour/trail strokes and a subtle forward E.
- Sweepza: two sweep arcs and a neutral process dot, without badge or certification geometry.
- LogLoads: two log-end circles secured by a route bar.
- BidSpace: opposing bracket planes with a negative-space B.
- Lake & Pine: a continuous lake line folding into a pine chevron.
- ORAN: four equal civic tiles around an open public square.
- Komfort Killz: a soft rounded K interrupted by a hard diagonal.
- Just Jesus Bro: conversation brackets around a short upright stroke/open doorway.

All marks use no more than four principal shapes, include a 12.5% safe zone, and remain recognizable in one color.

- [ ] **Step 4: Implement logo and communication layouts**

Implement stacked primary, horizontal, icon-only, app icon, social profile, Facebook cover master/optimized, Open Graph, email header, pitch one-pager, and brand-board SVG layouts. Deterministic text owns all public copy. Use abstract line/grid/topography patterns only; use no external imagery.

- [ ] **Step 5: Write failing export tests**

In a temporary directory, call `renderBrand` for one fixture brand and assert the exact required file list; parse PNG IHDR dimensions; inspect JPEG SOF dimensions; inspect ICO directory entries 16/32/48; verify app-icon alpha is fully opaque; verify logo PNGs contain alpha; and load the PDF to assert one page.

- [ ] **Step 6: Run the export tests and verify RED**

Run:

```powershell
node --test ops/brand-assets/tools/test/generate-assets.test.mjs
```

Expected: FAIL because `generate-assets.mjs` does not yet exist.

- [ ] **Step 7: Implement raster, ICO, PDF, and README generation**

Use Sharp to render SVG masters to exact PNG/JPG dimensions. Construct a standards-compliant ICO with PNG-compressed 16, 32, and 48 px frames. Embed the pitch PNG on one US Letter PDF page using pdf-lib. Compute SHA-256 for every artifact. Write per-brand README files from the approved data with status, provenance, limitations, palette, typography, imagery, and do/don't sections.

- [ ] **Step 8: Run generator tests and verify GREEN**

Run:

```powershell
pnpm --dir ops/brand-assets/tools test
```

Expected: all data, SVG, and export tests pass.

- [ ] **Step 9: Generate all nine packs**

Run:

```powershell
pnpm --dir ops/brand-assets/tools generate
```

Expected: nine brand directories and every required source/export/preview file are created.

- [ ] **Step 10: Commit**

```powershell
git add ops/brand-assets/assets ops/brand-assets/tools
git commit -m "brand: generate venture identity asset packs"
```

---

### Task 3: Manifests, documentation, and deterministic validation

**Files:**
- Create: `ops/brand-assets/tools/validate-assets.mjs`
- Create: `ops/brand-assets/tools/generate-docs.mjs`
- Create: `ops/brand-assets/tools/test/validate-assets.test.mjs`
- Create: `ops/brand-assets/BRAND_ASSET_INVENTORY.md`
- Create: `ops/brand-assets/CANVA_FOLDER_MAP.md`
- Create: `ops/brand-assets/LOGO_AND_FAVICON_STATUS.md`
- Create: `ops/brand-assets/OPEN_GRAPH_AND_SOCIAL_ASSET_STATUS.md`
- Create: `ops/brand-assets/BRAND_DIRECTION_NOTES.md`
- Create: `ops/brand-assets/EXPORT_REQUIREMENTS.md`
- Create: `ops/brand-assets/manifests/brand-assets.json`
- Create: `ops/brand-assets/manifests/export-validation.json`

**Interfaces:**
- Consumes: Task 2 `AssetRecord[]` and files.
- Produces: `validateAssetTree(root): Promise<ValidationReport>`, `generateDocs({brands, assets, validation, canva}): Promise<void>`.
- `ValidationReport` fields: `generatedAt`, `status`, `summary`, `checks`, `brands`, `visualQa`, `repositoryScope`.

- [ ] **Step 1: Write failing validator tests**

Create corrupt fixtures for missing files, empty SVG viewBox, incorrect PNG dimensions, malformed ICO entries, transparent app icon, opaque logo PNG, two-page PDF, uppercase/`final` filename, missing provenance/alt/legal status, and a simulated application-code diff. Assert each produces a named failed check.

- [ ] **Step 2: Run validator tests and verify RED**

Run:

```powershell
node --test ops/brand-assets/tools/test/validate-assets.test.mjs
```

Expected: FAIL because `validate-assets.mjs` does not exist.

- [ ] **Step 3: Implement deterministic validation**

Implement full-tree validation for nine brands, exact classes, XML/viewBox, raster dimensions, ICO frame sizes, alpha expectations, PDF page count, filenames, font/image provenance, manifest completeness, legal status, and git-scope rules. Write the exact validation evidence to `export-validation.json`.

- [ ] **Step 4: Implement documentation generation**

Generate all six required Markdown documents from the same data/manifest. Include per-brand status tables, Canva fields explicitly set to `not-yet-created` until Task 4 replaces them, export requirements, legal flags, visual-QA checklist, and exact local Canva import instructions.

- [ ] **Step 5: Run tests and full validation**

Run:

```powershell
pnpm --dir ops/brand-assets/tools test
pnpm --dir ops/brand-assets/tools validate
```

Expected: all tool tests pass and validation reports zero missing/invalid required artifacts.

- [ ] **Step 6: Commit**

```powershell
git add ops/brand-assets
git commit -m "docs: inventory and validate brand asset exports"
```

---

### Task 4: Canva folder hierarchy and editable masters

**Files:**
- Modify: `ops/brand-assets/CANVA_FOLDER_MAP.md`
- Modify: `ops/brand-assets/manifests/brand-assets.json`

**Interfaces:**
- Consumes: validated brand-board PNGs and pitch-one-pager PDFs from Tasks 2–3.
- Produces: one root folder ID, seventeen child folder IDs, up to eighteen imported design IDs/edit URLs, and per-item Canva status.

- [ ] **Step 1: Re-audit only the intended root**

Search Canva for an exact folder named `AutomatedEmpires Brand System`. Reuse it only if exact and founder-owned; otherwise create it. Do not touch existing flat venture folders.

- [ ] **Step 2: Create or reuse the seventeen exact child folders**

Create the approved numbered venture/shared folders under the new root. Record exact IDs and timestamps.

- [ ] **Step 3: Import editable venture masters**

For each brand, import `preview/brand-board.png` and `exports/pitch-one-pager/pitch-one-pager.pdf` when Canva supports the file. Rename consistently and move each design to its venture folder. If an import is unsupported, preserve local assets and record the exact blocker and manual import path.

- [ ] **Step 4: Record Canva results**

Update `CANVA_FOLDER_MAP.md` and the manifest with folder/design IDs, edit URLs, status, and blockers. Never record tokens or private connector metadata.

- [ ] **Step 5: Commit**

```powershell
git add ops/brand-assets/CANVA_FOLDER_MAP.md ops/brand-assets/manifests/brand-assets.json
git commit -m "brand: map Canva venture asset library"
```

---

### Task 5: Visual QA, repository verification, and PR

**Files:**
- Modify: `ops/brand-assets/manifests/export-validation.json`
- Modify: `ops/brand-assets/LOGO_AND_FAVICON_STATUS.md`
- Modify: `ops/brand-assets/OPEN_GRAPH_AND_SOCIAL_ASSET_STATUS.md`
- Create outside repository for founder review: `outputs/brand-asset-factory-contact-sheet.png`
- Create outside repository for founder review: `outputs/brand-asset-factory-delivery-index.md`

**Interfaces:**
- Consumes: all local exports, Canva results, validation output.
- Produces: documented visual QA, clean repo verification, pushed branch, and one PR titled `brand: add venture asset foundation`.

- [ ] **Step 1: Build the overall contact sheet**

Create a deterministic contact sheet showing each brand's 32 px icon, social profile, Facebook cover, OG image, email header, pitch graphic, and brand board. Save only the review copy under `outputs/`; canonical assets remain in the repository.

- [ ] **Step 2: Inspect required visual states**

Inspect and record all nine brands at 16 px favicon, 32 px favicon, 180 px touch icon, social circle crop, Facebook cover crop-safe area, OG thumbnail, email half-size, and pitch phone width. Any legibility or cropping failure returns to Task 2 with a failing regression test.

- [ ] **Step 3: Run fresh asset verification**

Run:

```powershell
pnpm --dir ops/brand-assets/tools test
pnpm --dir ops/brand-assets/tools validate
git diff --check origin/main...HEAD
```

Expected: tests pass, validation status is `pass`, and diff check is clean.

- [ ] **Step 4: Run repository checks**

Run:

```powershell
pnpm typecheck
pnpm lint
pnpm build
```

Expected: all exit 0. Record the pinned Node warning separately if the host patch version differs, without claiming a failure.

- [ ] **Step 5: Verify scope**

Run `git diff --name-only origin/main...HEAD` and assert every changed path is under `ops/brand-assets/` or `docs/superpowers/`. Assert no font binary extensions and no filename containing `final`.

- [ ] **Step 6: Commit final QA evidence**

```powershell
git add ops/brand-assets docs/superpowers
git commit -m "brand: record asset QA and Canva status"
```

Skip the commit only if there is no new tracked evidence.

- [ ] **Step 7: Push and open/update PR**

Push `codex/brand-asset-foundation`. Search for an existing PR with that head and update it if present; otherwise create one PR titled `brand: add venture asset foundation`. Do not merge it.

- [ ] **Step 8: Write the founder delivery index**

Create a concise output index with asset counts, Canva status, validation and QA results, the PR link, incomplete items, and remaining founder decisions.
