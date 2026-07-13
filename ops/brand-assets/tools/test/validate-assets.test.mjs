import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFile } from 'node:child_process';
import {
  cp,
  mkdir,
  mkdtemp,
  readFile,
  rm,
  unlink,
  writeFile,
} from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { promisify } from 'node:util';
import { after, before, describe, it } from 'node:test';

import { PDFDocument } from 'pdf-lib';
import sharp from 'sharp';

import { ASSET_REQUIREMENTS, BRANDS, LEGAL_DISCLOSURE } from '../brand-data.mjs';
import { validateAssetTree } from '../validate-assets.mjs';

const exec = promisify(execFile);
const toolsRoot = resolve(import.meta.dirname, '..');
const canonicalAssets = resolve(toolsRoot, '..', 'assets');

const sha256 = (buffer) => createHash('sha256').update(buffer).digest('hex');

const makeManifest = async (assetsRoot) => {
  const assets = [];
  for (const brand of BRANDS) {
    for (const requirement of ASSET_REQUIREMENTS) {
      const bytes = await readFile(
        join(assetsRoot, brand.slug, ...requirement.relativePath.split('/')),
      );
      assets.push({
        brand: brand.slug,
        role: requirement.role,
        path: requirement.relativePath,
        format: requirement.format,
        width: requirement.width,
        height: requirement.height,
        alpha: requirement.alpha,
        alt: `${brand.name} ${requirement.role} asset`,
        provenance:
          'Original deterministic SVG geometry and text rendered locally; no external imagery or font URLs. Renderer metadata: automatedempires-brand-assets/v1.',
        status: 'P0 concept',
        limitations: brand.legalNotes.join(' '),
        sha256: sha256(bytes),
      });
    }
  }

  return {
    schemaVersion: 1,
    generatedAt: '2026-07-12T00:00:00.000Z',
    legalDisclosure: LEGAL_DISCLOSURE,
    brands: BRANDS.map((brand) => ({
      ...brand,
      legalStatus: 'P0 concept; founder, similarity, trademark, and legal review required.',
      canva: {
        status: 'not-yet-created',
        folderId: null,
        brandBoardDesignId: null,
        pitchOnePagerDesignId: null,
      },
    })),
    assets,
  };
};

const failedCheck = (report, name) =>
  report.checks.find((check) => check.name === name && check.status === 'failed');

describe('deterministic asset-tree validator', () => {
  let repositoryRoot;
  let brandAssetsRoot;
  let manifestPath;
  let baselineManifest;

  before(async () => {
    repositoryRoot = await mkdtemp(join(tmpdir(), 'brand-validator-'));
    brandAssetsRoot = join(repositoryRoot, 'ops', 'brand-assets');
    manifestPath = join(brandAssetsRoot, 'manifests', 'brand-assets.json');
    await mkdir(dirname(manifestPath), { recursive: true });
    await cp(canonicalAssets, join(brandAssetsRoot, 'assets'), { recursive: true });
    baselineManifest = await makeManifest(join(brandAssetsRoot, 'assets'));
    await writeFile(manifestPath, `${JSON.stringify(baselineManifest, null, 2)}\n`);
    await mkdir(join(repositoryRoot, 'app'), { recursive: true });
    await writeFile(join(repositoryRoot, 'app', 'page.tsx'), 'export default () => null;\n');

    await exec('git', ['init', '--quiet'], { cwd: repositoryRoot });
    await exec('git', ['config', 'user.email', 'validator@example.invalid'], {
      cwd: repositoryRoot,
    });
    await exec('git', ['config', 'user.name', 'Asset Validator'], { cwd: repositoryRoot });
    await exec('git', ['add', '.'], { cwd: repositoryRoot });
    await exec('git', ['commit', '--quiet', '-m', 'fixture'], { cwd: repositoryRoot });
  });

  after(async () => {
    if (repositoryRoot) await rm(repositoryRoot, { recursive: true, force: true });
  });

  const restoreManifest = () =>
    writeFile(manifestPath, `${JSON.stringify(baselineManifest, null, 2)}\n`);

  const mutateManifest = async (mutator) => {
    const manifest = structuredClone(baselineManifest);
    mutator(manifest);
    await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  };

  it('passes a complete nine-brand fixture', async () => {
    const report = await validateAssetTree(brandAssetsRoot);
    assert.equal(report.status, 'passed');
    assert.equal(report.summary.failed, 0);
    assert.equal(report.summary.brands, 9);
    assert.equal(report.summary.assets, 225);
  });

  it('fails brand-inventory when one required file is missing', async () => {
    const path = join(
      brandAssetsRoot,
      'assets',
      'sweepza',
      'exports',
      'logo',
      'primary-logo.png',
    );
    const original = await readFile(path);
    await unlink(path);
    try {
      assert.ok(failedCheck(await validateAssetTree(brandAssetsRoot), 'brand-inventory'));
    } finally {
      await writeFile(path, original);
    }
  });

  it('fails svg-viewbox for an empty SVG viewBox', async () => {
    const path = join(brandAssetsRoot, 'assets', 'sweepza', 'source', 'icon-mark.svg');
    const original = await readFile(path);
    const corrupt = original.toString('utf8').replace(/viewBox="[^"]+"/, 'viewBox=""');
    await writeFile(path, corrupt);
    try {
      assert.ok(failedCheck(await validateAssetTree(brandAssetsRoot), 'svg-viewbox'));
    } finally {
      await writeFile(path, original);
    }
  });

  it('fails raster-dimensions for an incorrectly sized PNG', async () => {
    const path = join(
      brandAssetsRoot,
      'assets',
      'sweepza',
      'exports',
      'favicon',
      'favicon-32.png',
    );
    const original = await readFile(path);
    await writeFile(path, await sharp(original).resize(31, 32).png().toBuffer());
    try {
      assert.ok(failedCheck(await validateAssetTree(brandAssetsRoot), 'raster-dimensions'));
    } finally {
      await writeFile(path, original);
    }
  });

  it('fails ico-frames for malformed ICO entries', async () => {
    const path = join(
      brandAssetsRoot,
      'assets',
      'sweepza',
      'exports',
      'favicon',
      'favicon.ico',
    );
    const original = await readFile(path);
    await writeFile(path, Buffer.from([0, 0, 1, 0, 3, 0, 16]));
    try {
      assert.ok(failedCheck(await validateAssetTree(brandAssetsRoot), 'ico-frames'));
    } finally {
      await writeFile(path, original);
    }
  });

  it('fails alpha-expectations for a transparent app icon', async () => {
    const path = join(
      brandAssetsRoot,
      'assets',
      'sweepza',
      'exports',
      'app-icon',
      'app-icon.png',
    );
    const original = await readFile(path);
    const transparent = await sharp({
      create: {
        width: 1024,
        height: 1024,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
    })
      .png()
      .toBuffer();
    await writeFile(path, transparent);
    try {
      assert.ok(failedCheck(await validateAssetTree(brandAssetsRoot), 'alpha-expectations'));
    } finally {
      await writeFile(path, original);
    }
  });

  it('fails alpha-expectations for an opaque logo PNG', async () => {
    const path = join(
      brandAssetsRoot,
      'assets',
      'sweepza',
      'exports',
      'logo',
      'primary-logo.png',
    );
    const original = await readFile(path);
    await writeFile(path, await sharp(original).flatten({ background: '#ffffff' }).png().toBuffer());
    try {
      assert.ok(failedCheck(await validateAssetTree(brandAssetsRoot), 'alpha-expectations'));
    } finally {
      await writeFile(path, original);
    }
  });

  it('fails pdf-pages for a two-page pitch PDF', async () => {
    const path = join(
      brandAssetsRoot,
      'assets',
      'sweepza',
      'exports',
      'pitch-one-pager',
      'pitch-one-pager.pdf',
    );
    const original = await readFile(path);
    const document = await PDFDocument.create();
    document.addPage([612, 792]);
    document.addPage([612, 792]);
    await writeFile(path, await document.save());
    try {
      assert.ok(failedCheck(await validateAssetTree(brandAssetsRoot), 'pdf-pages'));
    } finally {
      await writeFile(path, original);
    }
  });

  it('fails filename-policy for uppercase and ambiguous final names', async () => {
    const path = join(
      brandAssetsRoot,
      'assets',
      'sweepza',
      'exports',
      'logo',
      'Primary-Logo-final.PNG',
    );
    await writeFile(path, 'corrupt fixture');
    try {
      assert.ok(failedCheck(await validateAssetTree(brandAssetsRoot), 'filename-policy'));
    } finally {
      await unlink(path);
    }
  });

  it('fails provenance when an asset source record is missing', async () => {
    await mutateManifest((manifest) => delete manifest.assets[0].provenance);
    try {
      assert.ok(failedCheck(await validateAssetTree(brandAssetsRoot), 'provenance'));
    } finally {
      await restoreManifest();
    }
  });

  it('fails alt-text when an asset description is missing', async () => {
    await mutateManifest((manifest) => delete manifest.assets[0].alt);
    try {
      assert.ok(failedCheck(await validateAssetTree(brandAssetsRoot), 'alt-text'));
    } finally {
      await restoreManifest();
    }
  });

  it('fails legal-status when a brand clearance status is missing', async () => {
    await mutateManifest((manifest) => delete manifest.brands[0].legalStatus);
    try {
      assert.ok(failedCheck(await validateAssetTree(brandAssetsRoot), 'legal-status'));
    } finally {
      await restoreManifest();
    }
  });

  it('fails font-binary-absence when a font binary is present', async () => {
    const path = join(brandAssetsRoot, 'assets', 'sweepza', 'source', 'brand-font.otf');
    await writeFile(path, 'font fixture');
    try {
      assert.ok(failedCheck(await validateAssetTree(brandAssetsRoot), 'font-binary-absence'));
    } finally {
      await unlink(path);
    }
  });

  it('fails repository-scope for a simulated application-code diff', async () => {
    const path = join(repositoryRoot, 'app', 'page.tsx');
    const original = await readFile(path);
    await writeFile(path, 'export default () => "changed";\n');
    try {
      assert.ok(failedCheck(await validateAssetTree(brandAssetsRoot), 'repository-scope'));
    } finally {
      await writeFile(path, original);
    }
  });
});
