# Export requirements

> Generated from the committed brand data and asset manifest. Do not hand-edit generated status values.

Generated evidence timestamp: `2026-07-12T00:00:00.000Z`

## Exact export matrix

| ID | Brand-relative path | Class | Format | Dimensions | Alpha |
| --- | --- | --- | --- | --- | --- |
| `primary-logo-svg` | `source/primary-logo.svg` | primary-logo | SVG | 1600 × 1600 | required |
| `primary-logo-png` | `exports/logo/primary-logo.png` | primary-logo | PNG | 1600 × 1600 | required |
| `horizontal-logo-svg` | `source/horizontal-logo.svg` | horizontal-logo | SVG | 2400 × 720 | required |
| `horizontal-logo-png` | `exports/logo/horizontal-logo.png` | horizontal-logo | PNG | 2400 × 720 | required |
| `icon-mark-svg` | `source/icon-mark.svg` | icon-mark | SVG | 1024 × 1024 | required |
| `icon-mark-png` | `exports/logo/icon-mark.png` | icon-mark | PNG | 1024 × 1024 | required |
| `favicon-svg` | `exports/favicon/favicon.svg` | favicon | SVG | 512 × 512 | required |
| `favicon-16-png` | `exports/favicon/favicon-16.png` | favicon | PNG | 16 × 16 | required |
| `favicon-32-png` | `exports/favicon/favicon-32.png` | favicon | PNG | 32 × 32 | required |
| `favicon-48-png` | `exports/favicon/favicon-48.png` | favicon | PNG | 48 × 48 | required |
| `apple-touch-icon-png` | `exports/favicon/apple-touch-icon.png` | favicon | PNG | 180 × 180 | opaque / not applicable |
| `icon-192-png` | `exports/favicon/icon-192.png` | favicon | PNG | 192 × 192 | opaque / not applicable |
| `icon-512-png` | `exports/favicon/icon-512.png` | favicon | PNG | 512 × 512 | opaque / not applicable |
| `favicon-ico` | `exports/favicon/favicon.ico` | favicon | ICO | 48 × 48 | required |
| `app-icon-png` | `exports/app-icon/app-icon.png` | app-icon | PNG | 1024 × 1024 | opaque / not applicable |
| `social-profile-png` | `exports/social-profile/social-profile.png` | social-profile | PNG | 1080 × 1080 | opaque / not applicable |
| `facebook-cover-png` | `exports/facebook-cover/facebook-cover.png` | facebook-cover | PNG | 1640 × 924 | opaque / not applicable |
| `facebook-cover-jpg` | `exports/facebook-cover/facebook-cover.jpg` | facebook-cover | JPG | 851 × 315 | opaque / not applicable |
| `open-graph-png` | `exports/open-graph/open-graph.png` | open-graph | PNG | 1200 × 630 | opaque / not applicable |
| `open-graph-jpg` | `exports/open-graph/open-graph.jpg` | open-graph | JPG | 1200 × 630 | opaque / not applicable |
| `email-header-png` | `exports/email-header/email-header.png` | email-header | PNG | 1200 × 400 | opaque / not applicable |
| `email-header-jpg` | `exports/email-header/email-header.jpg` | email-header | JPG | 1200 × 400 | opaque / not applicable |
| `pitch-one-pager-png` | `exports/pitch-one-pager/pitch-one-pager.png` | pitch-one-pager | PNG | 1080 × 1350 | opaque / not applicable |
| `pitch-one-pager-pdf` | `exports/pitch-one-pager/pitch-one-pager.pdf` | pitch-one-pager | PDF | 612 × 792 | opaque / not applicable |
| `brand-board-png` | `preview/brand-board.png` | brand-board | PNG | 1920 × 1080 | opaque / not applicable |

## Automated gates

- **manifest-completeness: passed** — Manifest contains nine complete brand records and exactly 225 required asset records.
- **brand-inventory: passed** — All nine brand packs contain exactly the required files.
- **filename-policy: passed** — Asset paths use lowercase kebab case and no ambiguous final suffix.
- **svg-viewbox: passed** — SVG files parse and contain a nonempty numeric viewBox.
- **raster-dimensions: passed** — PNG and JPEG dimensions and encodings match the contract.
- **alpha-expectations: passed** — Transparent logos retain alpha and opaque compositions contain no transparent pixels.
- **ico-frames: passed** — Every ICO contains valid PNG-compressed 16, 32, and 48 px frames.
- **pdf-pages: passed** — Pitch PDFs open as one-page US Letter documents.
- **provenance: passed** — Every asset declares original image and font provenance.
- **alt-text: passed** — Every asset record contains meaningful alt text.
- **legal-status: passed** — Every brand and asset remains a P0 concept with explicit review boundaries.
- **canva-status: passed** — Canva fields remain not-yet-created with no fabricated IDs.
- **content-integrity: passed** — Every manifest SHA-256 matches the committed asset bytes.
- **font-binary-absence: passed** — No font binaries are bundled in brand packs.
- **repository-scope: passed** — Branch and working-tree changes do not touch application code or root runtime manifests.

## Naming, provenance, and licensing

- Use lowercase kebab-case paths; never append an ambiguous `final` token.
- Preserve the recorded SHA-256 values as canonical-byte evidence.
- Every record needs brand-specific alt text, provenance, P0 status, and legal limitations.
- Bundle no `.otf`, `.ttf`, `.ttc`, `.woff`, `.woff2`, or `.eot` font binaries.
- Use original local geometry and text. Any future image or font addition requires a recorded source and license.

## Visual-QA checklist

- [ ] **16 px favicon** — `assets/automatedempires/exports/favicon/favicon-16.png`; status: `pending-human-review`. Inspect 16 px favicon for clipping, legibility, contrast, and unintended artifacts before final adoption.
- [ ] **32 px favicon** — `assets/automatedempires/exports/favicon/favicon-32.png`; status: `pending-human-review`. Inspect 32 px favicon for clipping, legibility, contrast, and unintended artifacts before final adoption.
- [ ] **180 px touch icon** — `assets/automatedempires/exports/favicon/apple-touch-icon.png`; status: `pending-human-review`. Inspect 180 px touch icon for clipping, legibility, contrast, and unintended artifacts before final adoption.
- [ ] **Social profile circle crop** — `assets/automatedempires/exports/social-profile/social-profile.png`; status: `pending-human-review`. Inspect social profile circle crop for clipping, legibility, contrast, and unintended artifacts before final adoption.
- [ ] **Facebook cover crop-safe area** — `assets/automatedempires/exports/facebook-cover/facebook-cover.png`; status: `pending-human-review`. Inspect facebook cover crop-safe area for clipping, legibility, contrast, and unintended artifacts before final adoption.
- [ ] **Open Graph thumbnail** — `assets/automatedempires/exports/open-graph/open-graph.png`; status: `pending-human-review`. Inspect open graph thumbnail for clipping, legibility, contrast, and unintended artifacts before final adoption.
- [ ] **Email header at 600 px width** — `assets/automatedempires/exports/email-header/email-header.png`; status: `pending-human-review`. Inspect email header at 600 px width for clipping, legibility, contrast, and unintended artifacts before final adoption.
- [ ] **Pitch graphic at phone width** — `assets/automatedempires/exports/pitch-one-pager/pitch-one-pager.png`; status: `pending-human-review`. Inspect pitch graphic at phone width for clipping, legibility, contrast, and unintended artifacts before final adoption.

Human visual QA is intentionally not auto-approved. Complete and record these checks before final adoption or production rollout.
