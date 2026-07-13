import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { promisify } from 'node:util';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { PDFDocument } from 'pdf-lib';
import sharp from 'sharp';

import { ASSET_REQUIREMENTS, BRANDS, LEGAL_DISCLOSURE } from './brand-data.mjs';

const exec = promisify(execFile);
const FIXED_GENERATED_AT = '2026-07-12T00:00:00.000Z';
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const FONT_BINARY = /\.(?:otf|ttf|ttc|woff2?|eot)$/i;
const APPLICATION_PATH = /^(?:app|components|lib|public)\//;
const ROOT_APPLICATION_FILE = /^(?:package\.json|pnpm-lock\.yaml|next\.config\.[^/]+|tailwind\.config\.[^/]+|tsconfig\.json)$/;
const REQUIRED_BRAND_FIELDS = [
  'slug',
  'name',
  'fullName',
  'mark',
  'palette',
  'type',
  'copy',
  'imagery',
  'dos',
  'donts',
  'legalNotes',
  'legalStatus',
  'canva',
];
const REQUIRED_ASSET_FIELDS = [
  'brand',
  'role',
  'path',
  'format',
  'width',
  'height',
  'alpha',
  'alt',
  'provenance',
  'status',
  'limitations',
  'sha256',
];
const VISUAL_QA = Object.freeze([
  ['favicon-16', '16 px favicon', 'exports/favicon/favicon-16.png'],
  ['favicon-32', '32 px favicon', 'exports/favicon/favicon-32.png'],
  ['touch-icon-180', '180 px touch icon', 'exports/favicon/apple-touch-icon.png'],
  ['social-circle-crop', 'Social profile circle crop', 'exports/social-profile/social-profile.png'],
  ['facebook-safe-area', 'Facebook cover crop-safe area', 'exports/facebook-cover/facebook-cover.png'],
  ['og-thumbnail', 'Open Graph thumbnail', 'exports/open-graph/open-graph.png'],
  ['email-half-size', 'Email header at 600 px width', 'exports/email-header/email-header.png'],
  ['pitch-phone-width', 'Pitch graphic at phone width', 'exports/pitch-one-pager/pitch-one-pager.png'],
]);

const posix = (path) => path.split(sep).join('/');
const sha256 = (buffer) => createHash('sha256').update(buffer).digest('hex');

const walkFiles = async (root) => {
  const output = [];
  const visit = async (current) => {
    let entries;
    try {
      entries = await readdir(current, { withFileTypes: true });
    } catch (error) {
      if (error.code === 'ENOENT') return;
      throw error;
    }
    for (const entry of entries) {
      const path = join(current, entry.name);
      if (entry.isDirectory()) await visit(path);
      else output.push(posix(relative(root, path)));
    }
  };
  await visit(root);
  return output.sort();
};

const walkDirectories = async (root) => {
  const output = [];
  const visit = async (current) => {
    let entries;
    try {
      entries = await readdir(current, { withFileTypes: true });
    } catch (error) {
      if (error.code === 'ENOENT') return;
      throw error;
    }
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const path = join(current, entry.name);
      output.push(posix(relative(root, path)));
      await visit(path);
    }
  };
  await visit(root);
  return output.sort();
};

const check = (name, description, errors, evidence = {}) => ({
  name,
  description,
  status: errors.length === 0 ? 'passed' : 'failed',
  errors,
  evidence,
});

const readJson = async (path) => {
  try {
    return { value: JSON.parse(await readFile(path, 'utf8')), error: null };
  } catch (error) {
    return { value: null, error: error.message };
  }
};

const expectedAssetKeys = () =>
  BRANDS.flatMap((brand) =>
    ASSET_REQUIREMENTS.map((asset) => `${brand.slug}:${asset.relativePath}`),
  );

const parseIco = (buffer) => {
  if (buffer.length < 6) throw new Error('ICO header is truncated');
  if (buffer.readUInt16LE(0) !== 0 || buffer.readUInt16LE(2) !== 1) {
    throw new Error('ICO header type must be icon');
  }
  const count = buffer.readUInt16LE(4);
  if (count < 1 || buffer.length < 6 + count * 16) {
    throw new Error('ICO directory is truncated');
  }
  return Array.from({ length: count }, (_, index) => {
    const offset = 6 + index * 16;
    const width = buffer[offset] || 256;
    const height = buffer[offset + 1] || 256;
    const planes = buffer.readUInt16LE(offset + 4);
    const bitCount = buffer.readUInt16LE(offset + 6);
    const size = buffer.readUInt32LE(offset + 8);
    const imageOffset = buffer.readUInt32LE(offset + 12);
    if (size < 24 || imageOffset < 6 + count * 16 || imageOffset + size > buffer.length) {
      throw new Error(`ICO frame ${index} points outside the file`);
    }
    const frame = buffer.subarray(imageOffset, imageOffset + size);
    if (!frame.subarray(0, PNG_SIGNATURE.length).equals(PNG_SIGNATURE)) {
      throw new Error(`ICO frame ${index} is not PNG-compressed`);
    }
    if (frame.subarray(12, 16).toString('ascii') !== 'IHDR') {
      throw new Error(`ICO frame ${index} has no PNG IHDR`);
    }
    const embeddedWidth = frame.readUInt32BE(16);
    const embeddedHeight = frame.readUInt32BE(20);
    if (embeddedWidth !== width || embeddedHeight !== height) {
      throw new Error(
        `ICO frame ${index} declares ${width}x${height} but embeds ${embeddedWidth}x${embeddedHeight}`,
      );
    }
    return { width, height, planes, bitCount, size, imageOffset };
  });
};

const alphaEvidence = async (path, shouldHaveAlpha) => {
  const metadata = await sharp(path).metadata();
  if (shouldHaveAlpha) {
    return {
      valid: metadata.hasAlpha === true,
      detail: `hasAlpha=${Boolean(metadata.hasAlpha)}`,
    };
  }

  const { data, info } = await sharp(path).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let transparentPixels = 0;
  for (let offset = 3; offset < data.length; offset += info.channels) {
    if (data[offset] !== 255) transparentPixels += 1;
  }
  return {
    valid: transparentPixels === 0,
    detail: `transparentPixels=${transparentPixels}`,
  };
};

const gitLines = async (cwd, args) => {
  try {
    const { stdout } = await exec('git', ['-C', cwd, ...args], {
      encoding: 'utf8',
      maxBuffer: 16 * 1024 * 1024,
    });
    return stdout
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
};

const repositoryEvidence = async (root) => {
  const repositoryRoots = await gitLines(root, ['rev-parse', '--show-toplevel']);
  if (repositoryRoots.length === 0) {
    return {
      status: 'failed',
      repositoryRoot: null,
      basis: ['git repository discovery failed'],
      evaluatedFileCount: 0,
      changedFiles: [],
      disallowedFiles: ['<repository-not-found>'],
    };
  }

  const repositoryRoot = resolve(repositoryRoots[0]);
  const changed = new Set();
  for (const args of [
    ['diff', '--name-only'],
    ['diff', '--cached', '--name-only'],
    ['ls-files', '--others', '--exclude-standard'],
  ]) {
    for (const path of await gitLines(repositoryRoot, args)) {
      changed.add(path.replaceAll('\\', '/'));
    }
  }

  let comparison = null;
  for (const candidate of ['main', 'origin/main']) {
    const mergeBase = await gitLines(repositoryRoot, ['merge-base', 'HEAD', candidate]);
    if (mergeBase.length > 0) {
      comparison = `${mergeBase[0]}..HEAD`;
      for (const path of await gitLines(repositoryRoot, ['diff', '--name-only', comparison])) {
        changed.add(path.replaceAll('\\', '/'));
      }
      break;
    }
  }

  const changedFiles = [...changed].sort();
  const disallowedFiles = changedFiles.filter(
    (path) => APPLICATION_PATH.test(path) || ROOT_APPLICATION_FILE.test(path),
  );
  return {
    status: disallowedFiles.length === 0 ? 'passed' : 'failed',
    repositoryRoot: posix(repositoryRoot),
    basis: [comparison ? `branch diff ${comparison}` : 'working tree status only', 'working tree status'],
    evaluatedFileCount: changedFiles.length,
    changedFiles,
    disallowedFiles,
  };
};

const validateManifest = (manifest) => {
  const errors = [];
  if (!manifest || typeof manifest !== 'object') return ['manifest is not a JSON object'];
  if (manifest.schemaVersion !== 1) errors.push('schemaVersion must equal 1');
  if (!Array.isArray(manifest.brands)) errors.push('brands must be an array');
  if (!Array.isArray(manifest.assets)) errors.push('assets must be an array');
  const brands = Array.isArray(manifest.brands) ? manifest.brands : [];
  const assets = Array.isArray(manifest.assets) ? manifest.assets : [];
  const expectedSlugs = BRANDS.map(({ slug }) => slug).sort();
  const actualSlugs = brands.map(({ slug }) => slug).sort();
  if (JSON.stringify(actualSlugs) !== JSON.stringify(expectedSlugs)) {
    errors.push(`manifest brand slugs must equal ${expectedSlugs.join(', ')}`);
  }
  for (const brand of brands) {
    for (const field of REQUIRED_BRAND_FIELDS) {
      if (brand[field] === undefined || brand[field] === null || brand[field] === '') {
        errors.push(`${brand.slug ?? '<unknown>'} is missing ${field}`);
      }
    }
    if (!Array.isArray(brand.palette) || brand.palette.length !== 4) {
      errors.push(`${brand.slug ?? '<unknown>'} must have four palette entries`);
    }
    if (!brand.type?.primary || !brand.type?.secondary || !brand.type?.fallback) {
      errors.push(`${brand.slug ?? '<unknown>'} has incomplete type direction`);
    }
    if (!brand.copy?.public || !brand.copy?.internal) {
      errors.push(`${brand.slug ?? '<unknown>'} has incomplete copy direction`);
    }
    if (!Array.isArray(brand.dos) || !Array.isArray(brand.donts)) {
      errors.push(`${brand.slug ?? '<unknown>'} has incomplete do/don't direction`);
    }
  }
  const expectedKeys = expectedAssetKeys().sort();
  const actualKeys = assets.map((asset) => `${asset.brand}:${asset.path}`).sort();
  if (JSON.stringify(actualKeys) !== JSON.stringify(expectedKeys)) {
    errors.push(`manifest asset keys must contain exactly ${expectedKeys.length} required entries`);
  }
  for (const asset of assets) {
    for (const field of REQUIRED_ASSET_FIELDS) {
      if (asset[field] === undefined || asset[field] === null || asset[field] === '') {
        errors.push(`${asset.brand ?? '<unknown>'}:${asset.path ?? '<unknown>'} is missing ${field}`);
      }
    }
    const requirement = ASSET_REQUIREMENTS.find(({ relativePath }) => relativePath === asset.path);
    if (
      requirement &&
      (asset.role !== requirement.role ||
        asset.format !== requirement.format ||
        asset.width !== requirement.width ||
        asset.height !== requirement.height ||
        asset.alpha !== requirement.alpha)
    ) {
      errors.push(`${asset.brand}:${asset.path} does not match the asset requirement`);
    }
  }
  return errors;
};

/**
 * Validate a complete ops/brand-assets directory without mutating its generated assets.
 * @param {string} root
 * @returns {Promise<object>}
 */
export const validateAssetTree = async (root) => {
  const brandAssetsRoot = resolve(root);
  const assetsRoot = join(brandAssetsRoot, 'assets');
  const manifestPath = join(brandAssetsRoot, 'manifests', 'brand-assets.json');
  const manifestResult = await readJson(manifestPath);
  const manifest = manifestResult.value;
  const manifestAssets = Array.isArray(manifest?.assets) ? manifest.assets : [];
  const checks = [];

  checks.push(
    check(
      'manifest-completeness',
      'Manifest contains nine complete brand records and exactly 225 required asset records.',
      manifestResult.error ? [manifestResult.error] : validateManifest(manifest),
      {
        manifest: posix(relative(brandAssetsRoot, manifestPath)),
        brandRecords: Array.isArray(manifest?.brands) ? manifest.brands.length : 0,
        assetRecords: manifestAssets.length,
      },
    ),
  );

  const allAssetFiles = await walkFiles(assetsRoot);
  const allAssetDirectories = await walkDirectories(assetsRoot);
  const expectedFiles = BRANDS.flatMap((brand) => [
    `${brand.slug}/README.md`,
    ...ASSET_REQUIREMENTS.map(({ relativePath }) => `${brand.slug}/${relativePath}`),
  ]).sort();
  const expectedDirectories = [
    ...new Set(
      expectedFiles.flatMap((path) => {
        const segments = path.split('/');
        return segments.slice(0, -1).map((_, index) => segments.slice(0, index + 1).join('/'));
      }),
    ),
  ].sort();
  const inventoryErrors = [];
  const actualSet = new Set(allAssetFiles);
  const expectedSet = new Set(expectedFiles);
  for (const path of expectedFiles) {
    if (!actualSet.has(path)) inventoryErrors.push(`missing ${path}`);
  }
  for (const path of allAssetFiles) {
    if (!expectedSet.has(path)) inventoryErrors.push(`unexpected ${path}`);
  }
  const actualDirectorySet = new Set(allAssetDirectories);
  const expectedDirectorySet = new Set(expectedDirectories);
  for (const path of expectedDirectories) {
    if (!actualDirectorySet.has(path)) inventoryErrors.push(`missing directory ${path}`);
  }
  for (const path of allAssetDirectories) {
    if (!expectedDirectorySet.has(path)) inventoryErrors.push(`unexpected directory ${path}`);
  }
  checks.push(
    check('brand-inventory', 'All nine brand packs contain exactly the required files.', inventoryErrors, {
      expectedFiles: expectedFiles.length,
      actualFiles: allAssetFiles.length,
      expectedDirectories: expectedDirectories.length,
      actualDirectories: allAssetDirectories.length,
      requiredAssetClasses: [...new Set(ASSET_REQUIREMENTS.map(({ role }) => role))].sort(),
    }),
  );

  const filenameErrors = [];
  for (const path of allAssetFiles) {
    const segments = path.split('/');
    for (const segment of segments) {
      if (segment === 'README.md') continue;
      if (!/^[a-z0-9]+(?:[.-][a-z0-9]+)*$/.test(segment)) {
        filenameErrors.push(`${path} contains invalid segment ${segment}`);
      }
      if (/(?:^|[-_.])final(?:[-_.]|$)/i.test(segment)) {
        filenameErrors.push(`${path} contains ambiguous final token`);
      }
    }
  }
  checks.push(
    check(
      'filename-policy',
      'Asset paths use lowercase kebab case and no ambiguous final suffix.',
      filenameErrors,
      { inspectedFiles: allAssetFiles.length },
    ),
  );

  const svgErrors = [];
  let svgInspected = 0;
  for (const brand of BRANDS) {
    for (const requirement of ASSET_REQUIREMENTS.filter(({ format }) => format === 'svg')) {
      const label = `${brand.slug}/${requirement.relativePath}`;
      const path = join(assetsRoot, ...label.split('/'));
      try {
        const buffer = await readFile(path);
        const source = buffer.toString('utf8');
        if (!/^\s*<svg\b/i.test(source)) throw new Error('root element is not svg');
        const match = source.match(/\bviewBox\s*=\s*["']([^"']*)["']/i);
        if (!match || !match[1].trim()) throw new Error('viewBox is missing or empty');
        const values = match[1].trim().split(/[\s,]+/).map(Number);
        if (values.length !== 4 || values.some((value) => !Number.isFinite(value))) {
          throw new Error(`viewBox is not four finite numbers: ${match[1]}`);
        }
        if (values[2] <= 0 || values[3] <= 0) throw new Error('viewBox width and height must be positive');
        await sharp(buffer).metadata();
        svgInspected += 1;
      } catch (error) {
        svgErrors.push(`${label}: ${error.message}`);
      }
    }
  }
  checks.push(
    check('svg-viewbox', 'SVG files parse and contain a nonempty numeric viewBox.', svgErrors, {
      expected: BRANDS.length * ASSET_REQUIREMENTS.filter(({ format }) => format === 'svg').length,
      inspected: svgInspected,
    }),
  );

  const rasterErrors = [];
  let rastersInspected = 0;
  for (const brand of BRANDS) {
    for (const requirement of ASSET_REQUIREMENTS.filter(({ format }) => ['png', 'jpg'].includes(format))) {
      const label = `${brand.slug}/${requirement.relativePath}`;
      try {
        const metadata = await sharp(join(assetsRoot, ...label.split('/'))).metadata();
        if (metadata.width !== requirement.width || metadata.height !== requirement.height) {
          throw new Error(
            `expected ${requirement.width}x${requirement.height}, received ${metadata.width}x${metadata.height}`,
          );
        }
        if (metadata.format !== (requirement.format === 'jpg' ? 'jpeg' : 'png')) {
          throw new Error(`expected ${requirement.format}, received ${metadata.format}`);
        }
        rastersInspected += 1;
      } catch (error) {
        rasterErrors.push(`${label}: ${error.message}`);
      }
    }
  }
  checks.push(
    check('raster-dimensions', 'PNG and JPEG dimensions and encodings match the contract.', rasterErrors, {
      expected: BRANDS.length * ASSET_REQUIREMENTS.filter(({ format }) => ['png', 'jpg'].includes(format)).length,
      inspected: rastersInspected,
    }),
  );

  const alphaErrors = [];
  let alphaInspected = 0;
  for (const brand of BRANDS) {
    for (const requirement of ASSET_REQUIREMENTS.filter(({ format }) => format === 'png')) {
      const label = `${brand.slug}/${requirement.relativePath}`;
      try {
        const result = await alphaEvidence(
          join(assetsRoot, ...label.split('/')),
          requirement.alpha,
        );
        if (!result.valid) {
          throw new Error(
            requirement.alpha
              ? `transparent export must retain an alpha channel (${result.detail})`
              : `opaque export contains transparent pixels (${result.detail})`,
          );
        }
        alphaInspected += 1;
      } catch (error) {
        alphaErrors.push(`${label}: ${error.message}`);
      }
    }
  }
  checks.push(
    check('alpha-expectations', 'Transparent logos retain alpha and opaque compositions contain no transparent pixels.', alphaErrors, {
      expected: BRANDS.length * ASSET_REQUIREMENTS.filter(({ format }) => format === 'png').length,
      inspected: alphaInspected,
    }),
  );

  const icoErrors = [];
  const icoEvidence = [];
  for (const brand of BRANDS) {
    const label = `${brand.slug}/exports/favicon/favicon.ico`;
    try {
      const entries = parseIco(await readFile(join(assetsRoot, ...label.split('/'))));
      const frameSizes = entries.map(({ width, height }) => `${width}x${height}`);
      if (JSON.stringify(frameSizes) !== JSON.stringify(['16x16', '32x32', '48x48'])) {
        throw new Error(`expected 16x16, 32x32, 48x48; received ${frameSizes.join(', ')}`);
      }
      if (entries.some(({ planes, bitCount }) => planes !== 1 || bitCount !== 32)) {
        throw new Error('each frame must declare one plane and 32 bits');
      }
      icoEvidence.push({ brand: brand.slug, frames: frameSizes });
    } catch (error) {
      icoErrors.push(`${label}: ${error.message}`);
    }
  }
  checks.push(
    check('ico-frames', 'Every ICO contains valid PNG-compressed 16, 32, and 48 px frames.', icoErrors, {
      files: icoEvidence,
    }),
  );

  const pdfErrors = [];
  const pdfEvidence = [];
  for (const brand of BRANDS) {
    const label = `${brand.slug}/exports/pitch-one-pager/pitch-one-pager.pdf`;
    try {
      const document = await PDFDocument.load(await readFile(join(assetsRoot, ...label.split('/'))));
      if (document.getPageCount() !== 1) {
        throw new Error(`expected one page, received ${document.getPageCount()}`);
      }
      const size = document.getPage(0).getSize();
      if (size.width !== 612 || size.height !== 792) {
        throw new Error(`expected US Letter 612x792, received ${size.width}x${size.height}`);
      }
      pdfEvidence.push({ brand: brand.slug, pages: 1, width: size.width, height: size.height });
    } catch (error) {
      pdfErrors.push(`${label}: ${error.message}`);
    }
  }
  checks.push(
    check('pdf-pages', 'Pitch PDFs open as one-page US Letter documents.', pdfErrors, {
      files: pdfEvidence,
    }),
  );

  const provenanceErrors = [];
  const altErrors = [];
  const legalErrors = [];
  const canvaErrors = [];
  for (const asset of manifestAssets) {
    const key = `${asset.brand ?? '<unknown>'}:${asset.path ?? '<unknown>'}`;
    if (typeof asset.provenance !== 'string' || !asset.provenance.trim()) {
      provenanceErrors.push(`${key} is missing provenance`);
    } else {
      if (!/(?:original|deterministic)/i.test(asset.provenance)) {
        provenanceErrors.push(`${key} does not identify original/deterministic origin`);
      }
      if (!/no external imagery/i.test(asset.provenance) || !/font/i.test(asset.provenance)) {
        provenanceErrors.push(`${key} does not disclose image and font provenance`);
      }
    }
    if (typeof asset.alt !== 'string' || !asset.alt.trim()) altErrors.push(`${key} is missing alt text`);
    if (asset.status !== 'P0 concept') legalErrors.push(`${key} must be marked P0 concept`);
    if (typeof asset.limitations !== 'string' || !asset.limitations.includes(LEGAL_DISCLOSURE)) {
      legalErrors.push(`${key} limitations omit the shared legal disclosure`);
    }
  }
  if (manifest?.legalDisclosure !== LEGAL_DISCLOSURE) {
    legalErrors.push('manifest legalDisclosure does not match the approved shared disclosure');
  }
  for (const brand of Array.isArray(manifest?.brands) ? manifest.brands : []) {
    if (typeof brand.legalStatus !== 'string' || !/P0 concept/i.test(brand.legalStatus) || !/review/i.test(brand.legalStatus)) {
      legalErrors.push(`${brand.slug ?? '<unknown>'} legalStatus must state P0 concept and review requirement`);
    }
    if (!Array.isArray(brand.legalNotes) || !brand.legalNotes.includes(LEGAL_DISCLOSURE)) {
      legalErrors.push(`${brand.slug ?? '<unknown>'} legalNotes omit the shared legal disclosure`);
    }
    if (brand.canva?.status !== 'not-yet-created') {
      canvaErrors.push(`${brand.slug ?? '<unknown>'} Canva status must remain not-yet-created`);
    }
    for (const field of ['folderId', 'brandBoardDesignId', 'pitchOnePagerDesignId']) {
      if (brand.canva?.[field] !== null) canvaErrors.push(`${brand.slug ?? '<unknown>'} Canva ${field} must remain null`);
    }
  }
  checks.push(
    check('provenance', 'Every asset declares original image and font provenance.', provenanceErrors, {
      inspectedRecords: manifestAssets.length,
    }),
  );
  checks.push(
    check('alt-text', 'Every asset record contains meaningful alt text.', altErrors, {
      inspectedRecords: manifestAssets.length,
    }),
  );
  checks.push(
    check('legal-status', 'Every brand and asset remains a P0 concept with explicit review boundaries.', legalErrors, {
      inspectedBrands: Array.isArray(manifest?.brands) ? manifest.brands.length : 0,
      inspectedAssets: manifestAssets.length,
    }),
  );
  checks.push(
    check('canva-status', 'Canva fields remain not-yet-created with no fabricated IDs.', canvaErrors, {
      expectedStatus: 'not-yet-created',
    }),
  );

  const integrityErrors = [];
  let hashesInspected = 0;
  for (const asset of manifestAssets) {
    const label = `${asset.brand}/${asset.path}`;
    try {
      const digest = sha256(await readFile(join(assetsRoot, ...label.split('/'))));
      if (digest !== asset.sha256) throw new Error(`expected ${asset.sha256}, received ${digest}`);
      hashesInspected += 1;
    } catch (error) {
      integrityErrors.push(`${label}: ${error.message}`);
    }
  }
  checks.push(
    check('content-integrity', 'Every manifest SHA-256 matches the committed asset bytes.', integrityErrors, {
      inspected: hashesInspected,
    }),
  );

  const brandAssetTreeFiles = await walkFiles(brandAssetsRoot);
  const fontFiles = brandAssetTreeFiles.filter((path) => FONT_BINARY.test(path));
  checks.push(
    check('font-binary-absence', 'No font binaries are bundled in brand packs.', fontFiles, {
      forbiddenExtensions: ['otf', 'ttf', 'ttc', 'woff', 'woff2', 'eot'],
    }),
  );

  const repositoryScope = await repositoryEvidence(brandAssetsRoot);
  checks.push(
    check(
      'repository-scope',
      'Branch and working-tree changes do not touch application code or root runtime manifests.',
      repositoryScope.disallowedFiles,
      repositoryScope,
    ),
  );

  const failed = checks.filter(({ status }) => status === 'failed').length;
  const passed = checks.length - failed;
  const brandReports = BRANDS.map((brand) => {
    const prefix = `${brand.slug}/`;
    const errors = checks.flatMap(({ name, errors: checkErrors }) =>
      checkErrors.filter((error) => error.includes(prefix) || error.includes(`${brand.slug}:`)).map((error) => ({ check: name, error })),
    );
    return {
      slug: brand.slug,
      name: brand.name,
      status: errors.length === 0 ? 'passed' : 'failed',
      requiredAssets: ASSET_REQUIREMENTS.length,
      manifestAssets: manifestAssets.filter(({ brand: slug }) => slug === brand.slug).length,
      errors,
    };
  });

  return {
    generatedAt: manifest?.generatedAt ?? FIXED_GENERATED_AT,
    status: failed === 0 ? 'passed' : 'failed',
    summary: {
      brands: BRANDS.length,
      assets: manifestAssets.length,
      checks: checks.length,
      passed,
      failed,
      missingOrInvalidRequiredArtifacts: inventoryErrors.length + svgErrors.length + rasterErrors.length + icoErrors.length + alphaErrors.length + pdfErrors.length,
    },
    checks,
    brands: brandReports,
    visualQa: VISUAL_QA.map(([id, label, asset]) => ({
      id,
      label,
      representativeBrand: 'automatedempires',
      asset: `assets/automatedempires/${asset}`,
      status: 'pending-human-review',
      instruction: `Inspect ${label.toLowerCase()} for clipping, legibility, contrast, and unintended artifacts before final adoption.`,
    })),
    repositoryScope,
  };
};

const run = async () => {
  const toolsDirectory = dirname(fileURLToPath(import.meta.url));
  const root = resolve(toolsDirectory, '..');
  const report = await validateAssetTree(root);
  const destination = join(root, 'manifests', 'export-validation.json');
  await writeFile(destination, `${JSON.stringify(report, null, 2)}\n`);
  process.stdout.write(
    `Brand asset validation ${report.status}: ${report.summary.passed}/${report.summary.checks} checks passed; ${report.summary.missingOrInvalidRequiredArtifacts} missing/invalid required artifacts.\n`,
  );
  if (report.status !== 'passed') process.exitCode = 1;
};

const entryUrl = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : '';
if (entryUrl === import.meta.url) await run();
