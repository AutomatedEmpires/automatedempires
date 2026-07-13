import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { ASSET_REQUIREMENTS, BRANDS, LEGAL_DISCLOSURE } from './brand-data.mjs';
import { RENDERER_METADATA } from './generate-assets.mjs';
import { validateAssetTree } from './validate-assets.mjs';

const GENERATED_AT = '2026-07-12T00:00:00.000Z';
const LEGAL_STATUS =
  'P0 concept; founder refinement, similarity review, trademark clearance, and applicable legal/compliance review required before final adoption.';

const BRAND_FOLDER_NAMES = Object.freeze({
  automatedempires: '00 Parent — AutomatedEmpires',
  'explore-and-earn': '01 Explore&Earn',
  oran: '02 ORAN',
  bidspace: '03 BidSpace',
  'lake-and-pine': '04 Lake & Pine',
  sweepza: '05 Sweepza',
  logloads: '06 LogLoads',
  'komfort-killz': '07 Komfort Killz',
  'just-jesus-bro': '08 Just Jesus Bro',
});

const SHARED_CANVA_FOLDERS = Object.freeze([
  '90 Shared Templates',
  '91 Icons and Illustration Library',
  '92 Photography Library',
  '93 Favicons and App Icons',
  '94 Social Covers and Profile Images',
  '95 Open Graph and Website Images',
  '96 Archived',
  '97 Retired Assets',
]);

export const DEFAULT_CANVA_STATE = Object.freeze({
  status: 'not-yet-created',
  rootFolderName: 'AutomatedEmpires Brand System',
  rootFolderId: null,
  folders: Object.freeze([
    ...Object.entries(BRAND_FOLDER_NAMES).map(([brand, name]) =>
      Object.freeze({
        kind: 'brand',
        brand,
        name,
        status: 'not-yet-created',
        folderId: null,
        brandBoardDesignId: null,
        pitchOnePagerDesignId: null,
      }),
    ),
    ...SHARED_CANVA_FOLDERS.map((name) =>
      Object.freeze({
        kind: 'shared',
        brand: null,
        name,
        status: 'not-yet-created',
        folderId: null,
        brandBoardDesignId: null,
        pitchOnePagerDesignId: null,
      }),
    ),
  ]),
});

const sha256 = (buffer) => createHash('sha256').update(buffer).digest('hex');

const altFor = (brand, role) => {
  const descriptions = {
    'primary-logo': `${brand.name} stacked logo`,
    'horizontal-logo': `${brand.name} horizontal logo`,
    'icon-mark': `${brand.name} icon mark: ${brand.mark}`,
    favicon: `${brand.name} favicon mark`,
    'app-icon': `${brand.name} app icon`,
    'social-profile': `${brand.name} social profile graphic`,
    'facebook-cover': `${brand.name} Facebook cover with the message: ${brand.copy.public}`,
    'open-graph': `${brand.name} Open Graph graphic with the message: ${brand.copy.public}`,
    'email-header': `${brand.name} email header with the message: ${brand.copy.public}`,
    'pitch-one-pager': `${brand.name} P0 pitch one-pager`,
    'brand-board': `${brand.name} P0 brand direction board`,
  };
  return descriptions[role] ?? `${brand.name} brand asset`;
};

const limitationsFor = (brand) =>
  [
    ...brand.legalNotes,
    `Canonical render environment: ${RENDERER_METADATA.canonicalEnvironment}.`,
    RENDERER_METADATA.liveTextPolicy,
    RENDERER_METADATA.fontFallbackLimitation,
    RENDERER_METADATA.canonicalBytesPolicy,
  ].join(' ');

/** Read Task 2 outputs without regenerating or modifying them. */
export const collectAssetRecords = async (root, brands = BRANDS) => {
  const records = [];
  for (const brand of brands) {
    for (const requirement of ASSET_REQUIREMENTS) {
      const bytes = await readFile(
        join(root, 'assets', brand.slug, ...requirement.relativePath.split('/')),
      );
      records.push({
        brand: brand.slug,
        role: requirement.role,
        path: requirement.relativePath,
        format: requirement.format,
        width: requirement.width,
        height: requirement.height,
        alpha: requirement.alpha,
        alt: altFor(brand, requirement.role),
        provenance:
          `Original deterministic SVG geometry and text rendered locally; no external imagery or font URLs. Renderer metadata: ${RENDERER_METADATA.id}.`,
        status: 'P0 concept',
        limitations: limitationsFor(brand),
        sha256: sha256(bytes),
      });
    }
  }
  return records;
};

const canvaForBrand = (canva, slug) => {
  const folder = canva.folders.find((entry) => entry.brand === slug);
  return {
    status: folder?.status ?? 'not-yet-created',
    folderName: folder?.name ?? BRAND_FOLDER_NAMES[slug],
    folderId: folder?.folderId ?? null,
    brandBoardDesignId: folder?.brandBoardDesignId ?? null,
    pitchOnePagerDesignId: folder?.pitchOnePagerDesignId ?? null,
  };
};

const buildManifest = (brands, assets, canva) => ({
  schemaVersion: 1,
  generatedAt: GENERATED_AT,
  sourceOfTruth: 'ops/brand-assets/tools/brand-data.mjs and committed local exports',
  legalDisclosure: LEGAL_DISCLOSURE,
  canva: {
    status: canva.status,
    rootFolderName: canva.rootFolderName,
    rootFolderId: canva.rootFolderId,
    folders: canva.folders,
  },
  brands: brands.map((brand) => ({
    ...brand,
    legalStatus: LEGAL_STATUS,
    canva: canvaForBrand(canva, brand.slug),
  })),
  assets,
});

const markdownTable = (headers, rows) => [
  `| ${headers.join(' | ')} |`,
  `| ${headers.map(() => '---').join(' | ')} |`,
  ...rows.map((row) => `| ${row.join(' | ')} |`),
];

const documentHeader = (title) => [
  `# ${title}`,
  '',
  '> Generated from the committed brand data and asset manifest. Do not hand-edit generated status values.',
  '',
  `Generated evidence timestamp: \`${GENERATED_AT}\``,
  '',
];

const inventoryDocument = ({ brands, assets, validation, canva }) => {
  const rows = brands.map((brand) => {
    const records = assets.filter(({ brand: slug }) => slug === brand.slug);
    const report = validation.brands?.find(({ slug }) => slug === brand.slug);
    return [
      brand.name,
      `\`${brand.slug}\``,
      String(records.length),
      report?.status ?? validation.status,
      canvaForBrand(canva, brand.slug).status,
      'P0 / review required',
    ];
  });
  const roleRows = [...new Set(ASSET_REQUIREMENTS.map(({ role }) => role))].map((role) => [
    `\`${role}\``,
    String(ASSET_REQUIREMENTS.filter((asset) => asset.role === role).length),
    String(assets.filter((asset) => asset.role === role).length),
    'present locally',
  ]);
  return [
    ...documentHeader('Brand asset inventory'),
    '## Portfolio status',
    '',
    ...markdownTable(
      ['Brand', 'Slug', 'Tracked assets', 'Validation', 'Canva', 'Legal'],
      rows,
    ),
    '',
    `Local inventory: **${brands.length} brands, ${assets.length} tracked assets, ${brands.length} pack READMEs, ${assets.length + brands.length} total generated pack files**.`,
    '',
    '## Required asset classes',
    '',
    ...markdownTable(['Class', 'Files per brand', 'Portfolio files', 'Status'], roleRows),
    '',
    '## Source-of-truth boundary',
    '',
    '- Brand direction and export requirements: `tools/brand-data.mjs`.',
    '- Canonical generated bytes: `assets/<brand>/` plus recorded SHA-256 values in `manifests/brand-assets.json`.',
    '- Export evidence: `manifests/export-validation.json`.',
    '- Canva remains an editable collaboration surface, not the repository source of truth.',
    '',
    `Legal disclosure: ${LEGAL_DISCLOSURE}`,
    '',
  ].join('\n');
};

const canvaDocument = ({ brands, canva }) => {
  const folderRows = canva.folders.map((folder) => [
    folder.name,
    folder.kind,
    folder.brand ? `\`${folder.brand}\`` : '—',
    folder.status,
    folder.folderId ?? '—',
  ]);
  const importSections = brands.flatMap((brand) => {
    const folder = canvaForBrand(canva, brand.slug);
    return [
      `### ${brand.name}`,
      '',
      `Target folder: \`${canva.rootFolderName}/${folder.folderName}\``,
      '',
      `1. Upload \`assets/${brand.slug}/source/primary-logo.svg\`, \`assets/${brand.slug}/source/horizontal-logo.svg\`, and \`assets/${brand.slug}/source/icon-mark.svg\` as editable vector references.`,
      `2. Create a 1920 × 1080 design named \`${brand.name} — P0 Brand Board\`; use \`assets/${brand.slug}/preview/brand-board.png\` as the exact visual reference and rebuild text with the documented Canva fallback if a directed family is unavailable.`,
      `3. Create a US Letter portrait design named \`${brand.name} — P0 Pitch One-Pager\`; import \`assets/${brand.slug}/exports/pitch-one-pager/pitch-one-pager.pdf\` and compare it with the PNG in the same directory.`,
      '4. Use only generated geometry, founder-owned uploads, Canva Free elements, or licensed open-source type. Do not add stock imagery without recording its license.',
      '5. After creation succeeds, replace `not-yet-created` and the null folder/design IDs in the manifest and this map with the actual Canva values; never invent IDs.',
      '',
    ];
  });
  return [
    ...documentHeader('Canva folder map'),
    '## Current state',
    '',
    '**Canva creation is deferred to Task 4. Every Canva folder and design status is `not-yet-created`; every ID is null.**',
    '',
    `Required root folder: \`${canva.rootFolderName}\``,
    '',
    ...markdownTable(['Exact child folder', 'Kind', 'Brand', 'Status', 'Folder ID'], folderRows),
    '',
    '## Exact local import procedure',
    '',
    `1. In Canva, open **Projects → Folders** and create or reuse one root folder named exactly \`${canva.rootFolderName}\`. Do not move or rename existing flat folders.`,
    '2. Inside that root, create or reuse each child folder from the table exactly once, preserving numbering and punctuation.',
    '3. Follow the per-brand steps below. Cross-brand masters belong only in `90 Shared Templates`; shared export copies may also go in the numbered libraries.',
    '',
    ...importSections,
    '## Font substitution rule',
    '',
    'Keep brand names as live text. If Canva does not provide the directed family, substitute Arial or Canva Sans, preserve hierarchy and spacing, and record the substitution before export. No font binary is included in this repository.',
    '',
  ].join('\n');
};

const logoStatusDocument = ({ brands, assets, validation, canva }) => {
  const logoRoles = new Set(['primary-logo', 'horizontal-logo', 'icon-mark', 'favicon', 'app-icon']);
  const rows = brands.map((brand) => {
    const records = assets.filter(
      (asset) => asset.brand === brand.slug && logoRoles.has(asset.role),
    );
    const report = validation.brands?.find(({ slug }) => slug === brand.slug);
    return [
      brand.name,
      String(records.length),
      report?.status ?? validation.status,
      canvaForBrand(canva, brand.slug).status,
      'P0 / not trademark cleared',
    ];
  });
  return [
    ...documentHeader('Logo and favicon status'),
    '## Per-brand status',
    '',
    ...markdownTable(['Brand', 'Logo/icon files', 'Local validation', 'Canva', 'Clearance'], rows),
    '',
    'Each brand has primary, horizontal, and icon SVG masters; matching transparent PNG exports; SVG and 16/32/48/180/192/512 favicon variants; a PNG-compressed 16/32/48 multi-frame ICO; and an opaque 1024 px app icon.',
    '',
    '## Use boundary',
    '',
    '- SVG masters preserve live text and bundle no font binaries.',
    '- Transparent logo PNGs are for light-background placement; test contrast before other use.',
    '- App/touch icons are opaque. Favicon/logo transparency is validated separately.',
    '- Marks are original P0 directions, not similarity-reviewed or trademark cleared.',
    '- Inspect the 16 px and 32 px favicons manually before production adoption.',
    '',
  ].join('\n');
};

const socialStatusDocument = ({ brands, assets, validation, canva }) => {
  const roles = new Set(['social-profile', 'facebook-cover', 'open-graph', 'email-header']);
  const rows = brands.map((brand) => {
    const records = assets.filter((asset) => asset.brand === brand.slug && roles.has(asset.role));
    const report = validation.brands?.find(({ slug }) => slug === brand.slug);
    return [
      brand.name,
      String(records.filter(({ role }) => role === 'social-profile').length),
      String(records.filter(({ role }) => role === 'facebook-cover').length),
      String(records.filter(({ role }) => role === 'open-graph').length),
      String(records.filter(({ role }) => role === 'email-header').length),
      report?.status ?? validation.status,
      canvaForBrand(canva, brand.slug).status,
    ];
  });
  return [
    ...documentHeader('Open Graph and social asset status'),
    '## Per-brand status',
    '',
    ...markdownTable(
      ['Brand', 'Profile', 'Facebook', 'Open Graph', 'Email', 'Validation', 'Canva'],
      rows,
    ),
    '',
    '## Delivery notes',
    '',
    '- Social profile source: opaque 1080 × 1080 PNG; verify a centered circle crop.',
    '- Facebook: 1640 × 924 PNG working master plus 851 × 315 optimized JPG; keep noncritical content out of crop/profile-overlap zones.',
    '- Open Graph: 1200 × 630 PNG and JPG with manifest dimensions, MIME format, and alt text.',
    '- Email: 1200 × 400 PNG and JPG; inspect at 600 px rendered width.',
    '- No external imagery is embedded. P0 copy remains subject to founder and applicable legal review.',
    '',
  ].join('\n');
};

const directionDocument = ({ brands }) => {
  const sections = brands.flatMap((brand) => [
    `## ${brand.name}`,
    '',
    `- **Status:** ${LEGAL_STATUS}`,
    `- **Mark:** ${brand.mark}`,
    `- **Palette:** ${brand.palette.map(({ name, hex }) => `${name} \`${hex}\``).join('; ')}.`,
    `- **Type direction:** ${brand.type.primary} / ${brand.type.secondary}; deterministic local fallback: ${brand.type.fallback}.`,
    `- **Public copy:** “${brand.copy.public}”`,
    `- **Internal copy:** “${brand.copy.internal}”`,
    `- **Imagery:** ${brand.imagery}`,
    `- **Do:** ${brand.dos.join(' ')}`,
    `- **Do not:** ${brand.donts.join(' ')}`,
    '- **Legal/review flags:**',
    ...brand.legalNotes.map((note) => `  - ${note}`),
    '',
  ]);
  return [
    ...documentHeader('Brand direction notes'),
    'These directions are a provisional asset system only. Palettes are not application UI tokens, copy is not a locked tagline system, and type families are recommendations without bundled font files.',
    '',
    ...sections,
  ].join('\n');
};

const exportRequirementsDocument = ({ validation }) => {
  const requirementRows = ASSET_REQUIREMENTS.map((asset) => [
    `\`${asset.id}\``,
    `\`${asset.relativePath}\``,
    asset.role,
    asset.format.toUpperCase(),
    `${asset.width} × ${asset.height}`,
    asset.alpha ? 'required' : 'opaque / not applicable',
  ]);
  return [
    ...documentHeader('Export requirements'),
    '## Exact export matrix',
    '',
    ...markdownTable(
      ['ID', 'Brand-relative path', 'Class', 'Format', 'Dimensions', 'Alpha'],
      requirementRows,
    ),
    '',
    '## Automated gates',
    '',
    ...validation.checks.map(
      (entry) => `- **${entry.name}: ${entry.status}** — ${entry.description}`,
    ),
    '',
    '## Naming, provenance, and licensing',
    '',
    '- Use lowercase kebab-case paths; never append an ambiguous `final` token.',
    '- Preserve the recorded SHA-256 values as canonical-byte evidence.',
    '- Every record needs brand-specific alt text, provenance, P0 status, and legal limitations.',
    '- Bundle no `.otf`, `.ttf`, `.ttc`, `.woff`, `.woff2`, or `.eot` font binaries.',
    '- Use original local geometry and text. Any future image or font addition requires a recorded source and license.',
    '',
    '## Visual-QA checklist',
    '',
    ...validation.visualQa.map(
      (item) => `- [ ] **${item.label}** — \`${item.asset}\`; status: \`${item.status}\`. ${item.instruction}`,
    ),
    '',
    'Human visual QA is intentionally not auto-approved. Complete and record these checks before final adoption or production rollout.',
    '',
  ].join('\n');
};

/**
 * Generate the six status documents and two machine-readable manifests.
 * @param {{brands: object[], assets: object[], validation: object, canva: object, root?: string}} input
 */
export const generateDocs = async ({
  brands,
  assets,
  validation,
  canva,
  root = resolve(dirname(fileURLToPath(import.meta.url)), '..'),
}) => {
  if (!Array.isArray(brands) || !Array.isArray(assets) || !validation || !canva) {
    throw new Error('generateDocs requires brands, assets, validation, and canva');
  }
  await mkdir(join(root, 'manifests'), { recursive: true });
  const manifest = buildManifest(brands, assets, canva);
  const documents = new Map([
    ['BRAND_ASSET_INVENTORY.md', inventoryDocument({ brands, assets, validation, canva })],
    ['CANVA_FOLDER_MAP.md', canvaDocument({ brands, canva })],
    ['LOGO_AND_FAVICON_STATUS.md', logoStatusDocument({ brands, assets, validation, canva })],
    [
      'OPEN_GRAPH_AND_SOCIAL_ASSET_STATUS.md',
      socialStatusDocument({ brands, assets, validation, canva }),
    ],
    ['BRAND_DIRECTION_NOTES.md', directionDocument({ brands })],
    ['EXPORT_REQUIREMENTS.md', exportRequirementsDocument({ validation })],
  ]);
  for (const [name, contents] of documents) {
    await writeFile(join(root, name), `${contents.trimEnd()}\n`);
  }
  await writeFile(
    join(root, 'manifests', 'brand-assets.json'),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
  await writeFile(
    join(root, 'manifests', 'export-validation.json'),
    `${JSON.stringify(validation, null, 2)}\n`,
  );
};

const pendingValidation = (brands, assets) => ({
  generatedAt: GENERATED_AT,
  status: 'pending',
  summary: { brands: brands.length, assets: assets.length, checks: 0, passed: 0, failed: 0 },
  checks: [],
  brands: brands.map((brand) => ({ slug: brand.slug, name: brand.name, status: 'pending' })),
  visualQa: [
    ['16 px favicon', 'assets/automatedempires/exports/favicon/favicon-16.png'],
    ['32 px favicon', 'assets/automatedempires/exports/favicon/favicon-32.png'],
    ['180 px touch icon', 'assets/automatedempires/exports/favicon/apple-touch-icon.png'],
    ['Social profile circle crop', 'assets/automatedempires/exports/social-profile/social-profile.png'],
    ['Facebook cover crop-safe area', 'assets/automatedempires/exports/facebook-cover/facebook-cover.png'],
    ['Open Graph thumbnail', 'assets/automatedempires/exports/open-graph/open-graph.png'],
    ['Email header at 600 px width', 'assets/automatedempires/exports/email-header/email-header.png'],
    ['Pitch graphic at phone width', 'assets/automatedempires/exports/pitch-one-pager/pitch-one-pager.png'],
  ].map(([label, asset]) => ({
    label,
    asset,
    status: 'pending-human-review',
    instruction: `Inspect ${label.toLowerCase()} for clipping, legibility, contrast, and unintended artifacts before final adoption.`,
  })),
  repositoryScope: { status: 'pending' },
});

const run = async () => {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
  const assets = await collectAssetRecords(root, BRANDS);
  await generateDocs({
    brands: BRANDS,
    assets,
    validation: pendingValidation(BRANDS, assets),
    canva: DEFAULT_CANVA_STATE,
    root,
  });
  const validation = await validateAssetTree(root);
  await generateDocs({
    brands: BRANDS,
    assets,
    validation,
    canva: DEFAULT_CANVA_STATE,
    root,
  });
  process.stdout.write(
    `Generated six brand documents and two manifests; validation ${validation.status}.\n`,
  );
  if (validation.status !== 'passed') process.exitCode = 1;
};

const entryUrl = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : '';
if (entryUrl === import.meta.url) await run();
