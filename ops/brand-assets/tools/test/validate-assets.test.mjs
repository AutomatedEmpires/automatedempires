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

const CANVA_FOLDERS = [
  ['brand', 'automatedempires', '00 Parent — AutomatedEmpires'],
  ['brand', 'explore-and-earn', '01 Explore&Earn'],
  ['brand', 'oran', '02 ORAN'],
  ['brand', 'bidspace', '03 BidSpace'],
  ['brand', 'lake-and-pine', '04 Lake & Pine'],
  ['brand', 'sweepza', '05 Sweepza'],
  ['brand', 'logloads', '06 LogLoads'],
  ['brand', 'komfort-killz', '07 Komfort Killz'],
  ['brand', 'just-jesus-bro', '08 Just Jesus Bro'],
  ['shared', null, '90 Shared Templates'],
  ['shared', null, '91 Icons and Illustration Library'],
  ['shared', null, '92 Photography Library'],
  ['shared', null, '93 Favicons and App Icons'],
  ['shared', null, '94 Social Covers and Profile Images'],
  ['shared', null, '95 Open Graph and Website Images'],
  ['shared', null, '96 Archived'],
  ['shared', null, '97 Retired Assets'],
].map(([kind, brand, name]) => ({
  kind,
  brand,
  name,
  status: 'not-yet-created',
  folderId: null,
  brandBoardDesignId: null,
  pitchOnePagerDesignId: null,
}));

const PARTIAL_CANVA_BLOCKER =
  'Canva connector import-design-from-url accepts PDFs only from an already-public HTTPS URL; its direct local design_file path supports HTML/ZIP artifacts, not local PDFs. Security policy forbids publishing private local files solely for import.';

const applyPartialCanvaFixture = (manifest) => {
  manifest.canva.status = 'partial';
  manifest.canva.rootFolderStatus = 'created';
  manifest.canva.rootFolderId = 'FAroot123';
  manifest.canva.rootFolderUrl = 'https://www.canva.com/folder/FAroot123';
  manifest.canva.createdAt = '2026-07-12T01:00:00.000Z';
  manifest.canva.updatedAt = '2026-07-12T01:00:00.000Z';
  manifest.canva.verifiedAt = '2026-07-12T01:30:00.000Z';

  for (const [index, folder] of manifest.canva.folders.entries()) {
    folder.status = 'created';
    folder.folderId = `FAfolder${index}`;
    folder.folderUrl = `https://www.canva.com/folder/FAfolder${index}`;
    folder.createdAt = '2026-07-12T01:01:00.000Z';
    folder.updatedAt = '2026-07-12T01:01:00.000Z';
    if (folder.kind !== 'brand') continue;
    const brand = manifest.brands.find(({ slug }) => slug === folder.brand);
    folder.brandBoardStatus = 'created';
    folder.brandBoardDesignId = `DAdesign${index}`;
    folder.brandBoardEditUrl = `https://www.canva.com/d/edit${index}`;
    folder.brandBoardViewUrl = `https://www.canva.com/d/view${index}`;
    folder.brandBoardSourcePath = `assets/${folder.brand}/preview/brand-board.png`;
    folder.brandBoardCreatedAt = '2026-07-12T01:02:00.000Z';
    folder.pitchOnePagerStatus = 'blocked';
    folder.pitchOnePagerDesignId = null;
    folder.pitchOnePagerEditUrl = null;
    folder.pitchOnePagerViewUrl = null;
    folder.pitchOnePagerSourcePath =
      `assets/${folder.brand}/exports/pitch-one-pager/pitch-one-pager.pdf`;
    folder.pitchOnePagerBlocker = PARTIAL_CANVA_BLOCKER;
    folder.pitchOnePagerManualImportSteps = [
      'Open Canva Home → Create a design → Import file.',
      `Choose assets/${folder.brand}/exports/pitch-one-pager/pitch-one-pager.pdf.`,
      `Move the imported design to AutomatedEmpires Brand System/${folder.name}.`,
    ];
    brand.canva = {
      status: 'partial',
      folderName: folder.name,
      folderStatus: folder.status,
      folderId: folder.folderId,
      folderUrl: folder.folderUrl,
      folderCreatedAt: folder.createdAt,
      folderUpdatedAt: folder.updatedAt,
      brandBoardStatus: folder.brandBoardStatus,
      brandBoardDesignId: folder.brandBoardDesignId,
      brandBoardEditUrl: folder.brandBoardEditUrl,
      brandBoardViewUrl: folder.brandBoardViewUrl,
      brandBoardSourcePath: folder.brandBoardSourcePath,
      brandBoardCreatedAt: folder.brandBoardCreatedAt,
      pitchOnePagerStatus: folder.pitchOnePagerStatus,
      pitchOnePagerDesignId: folder.pitchOnePagerDesignId,
      pitchOnePagerEditUrl: folder.pitchOnePagerEditUrl,
      pitchOnePagerViewUrl: folder.pitchOnePagerViewUrl,
      pitchOnePagerSourcePath: folder.pitchOnePagerSourcePath,
      pitchOnePagerBlocker: folder.pitchOnePagerBlocker,
      pitchOnePagerManualImportSteps: folder.pitchOnePagerManualImportSteps,
    };
  }
};

const applyCreatedCanvaFixture = (manifest) => {
  applyPartialCanvaFixture(manifest);
  manifest.canva.status = 'created';
  for (const [index, folder] of manifest.canva.folders.entries()) {
    if (folder.kind !== 'brand') continue;
    folder.pitchOnePagerStatus = 'created';
    folder.pitchOnePagerDesignId = `DApitch${index}`;
    folder.pitchOnePagerEditUrl = `https://www.canva.com/d/pitch-edit${index}`;
    folder.pitchOnePagerViewUrl = `https://www.canva.com/d/pitch-view${index}`;
    folder.pitchOnePagerBlocker = null;
    folder.pitchOnePagerManualImportSteps = [];
    const brandCanva = manifest.brands.find(({ slug }) => slug === folder.brand).canva;
    brandCanva.status = 'created';
    brandCanva.pitchOnePagerStatus = folder.pitchOnePagerStatus;
    brandCanva.pitchOnePagerDesignId = folder.pitchOnePagerDesignId;
    brandCanva.pitchOnePagerEditUrl = folder.pitchOnePagerEditUrl;
    brandCanva.pitchOnePagerViewUrl = folder.pitchOnePagerViewUrl;
    brandCanva.pitchOnePagerBlocker = folder.pitchOnePagerBlocker;
    brandCanva.pitchOnePagerManualImportSteps = folder.pitchOnePagerManualImportSteps;
  }
};

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
    canva: {
      status: 'not-yet-created',
      rootFolderName: 'AutomatedEmpires Brand System',
      rootFolderId: null,
      folders: CANVA_FOLDERS,
    },
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
  let baselineCommit;

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
    baselineCommit = (await exec('git', ['rev-parse', 'HEAD'], { cwd: repositoryRoot })).stdout.trim();
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

  it('fails alpha-expectations for a fully opaque RGBA logo PNG', async () => {
    const path = join(
      brandAssetsRoot,
      'assets',
      'sweepza',
      'exports',
      'logo',
      'primary-logo.png',
    );
    const original = await readFile(path);
    const opaqueRgba = await sharp(original)
      .flatten({ background: '#ffffff' })
      .ensureAlpha()
      .png()
      .toBuffer();
    assert.equal((await sharp(opaqueRgba).metadata()).hasAlpha, true);
    await writeFile(path, opaqueRgba);
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

  it('fails canva-status for a fabricated root folder ID before creation', async () => {
    await mutateManifest((manifest) => {
      manifest.canva.rootFolderId = 'fabricated-root-id';
    });
    try {
      assert.ok(failedCheck(await validateAssetTree(brandAssetsRoot), 'canva-status'));
    } finally {
      await restoreManifest();
    }
  });

  it('fails canva-status for a fabricated shared folder ID before creation', async () => {
    await mutateManifest((manifest) => {
      manifest.canva.folders.find(({ kind }) => kind === 'shared').folderId =
        'fabricated-shared-folder-id';
    });
    try {
      assert.ok(failedCheck(await validateAssetTree(brandAssetsRoot), 'canva-status'));
    } finally {
      await restoreManifest();
    }
  });

  it('fails canva-status when the exact 17-folder inventory changes', async () => {
    await mutateManifest((manifest) => {
      manifest.canva.folders[0].name = '00 Parent Final';
    });
    try {
      assert.ok(failedCheck(await validateAssetTree(brandAssetsRoot), 'canva-status'));
    } finally {
      await restoreManifest();
    }
  });

  it('fails canva-status when created state has null root, folder, or design IDs', async () => {
    await mutateManifest((manifest) => {
      manifest.canva.status = 'created';
      for (const folder of manifest.canva.folders) folder.status = 'created';
      for (const brand of manifest.brands) brand.canva.status = 'created';
    });
    try {
      const report = await validateAssetTree(brandAssetsRoot);
      const failure = failedCheck(report, 'canva-status');
      assert.ok(failure);
      assert.ok(failure.errors.some((error) => error.includes('rootFolderId')));
      assert.ok(failure.errors.some((error) => error.includes('folderId')));
      assert.ok(failure.errors.some((error) => error.includes('brandBoardDesignId')));
      assert.ok(failure.errors.some((error) => error.includes('pitchOnePagerDesignId')));
    } finally {
      await restoreManifest();
    }
  });

  it('passes the precise partial Canva state for created folders and brand boards with blocked local PDFs', async () => {
    await mutateManifest(applyPartialCanvaFixture);
    try {
      const report = await validateAssetTree(brandAssetsRoot);
      assert.equal(
        report.status,
        'passed',
        JSON.stringify(report.checks.filter(({ status }) => status === 'failed'), null, 2),
      );
      assert.equal(report.summary.failed, 0);
    } finally {
      await restoreManifest();
    }
  });

  it('fails partial Canva state when two child folders reuse the same folder ID', async () => {
    await mutateManifest((manifest) => {
      applyPartialCanvaFixture(manifest);
      const [first, second] = manifest.canva.folders;
      second.folderId = first.folderId;
      second.folderUrl = first.folderUrl;
      const brandCanva = manifest.brands.find(({ slug }) => slug === second.brand).canva;
      brandCanva.folderId = second.folderId;
      brandCanva.folderUrl = second.folderUrl;
    });
    try {
      const failure = failedCheck(await validateAssetTree(brandAssetsRoot), 'canva-status');
      assert.ok(failure);
      assert.ok(
        failure.errors.some(
          (error) => error.includes('duplicate Canva folder ID') && error.includes('FAfolder0'),
        ),
      );
    } finally {
      await restoreManifest();
    }
  });

  it('fails partial Canva state when a child folder ID conflicts with the root folder ID', async () => {
    await mutateManifest((manifest) => {
      applyPartialCanvaFixture(manifest);
      const folder = manifest.canva.folders[0];
      folder.folderId = manifest.canva.rootFolderId;
      folder.folderUrl = manifest.canva.rootFolderUrl;
      const brandCanva = manifest.brands.find(({ slug }) => slug === folder.brand).canva;
      brandCanva.folderId = folder.folderId;
      brandCanva.folderUrl = folder.folderUrl;
    });
    try {
      const failure = failedCheck(await validateAssetTree(brandAssetsRoot), 'canva-status');
      assert.ok(failure);
      assert.ok(
        failure.errors.some(
          (error) => error.includes('duplicate Canva folder ID') && error.includes('FAroot123'),
        ),
      );
    } finally {
      await restoreManifest();
    }
  });

  it('fails partial Canva state when two created brand boards reuse the same design ID', async () => {
    await mutateManifest((manifest) => {
      applyPartialCanvaFixture(manifest);
      const [first, second] = manifest.canva.folders;
      second.brandBoardDesignId = first.brandBoardDesignId;
      manifest.brands.find(({ slug }) => slug === second.brand).canva.brandBoardDesignId =
        second.brandBoardDesignId;
    });
    try {
      const failure = failedCheck(await validateAssetTree(brandAssetsRoot), 'canva-status');
      assert.ok(failure);
      assert.ok(
        failure.errors.some(
          (error) =>
            error.includes('duplicate created Canva design ID') &&
            error.includes('DAdesign0'),
        ),
      );
    } finally {
      await restoreManifest();
    }
  });

  it('passes a complete created Canva state with unique board and pitch design IDs', async () => {
    await mutateManifest(applyCreatedCanvaFixture);
    try {
      const report = await validateAssetTree(brandAssetsRoot);
      assert.equal(
        report.status,
        'passed',
        JSON.stringify(report.checks.filter(({ status }) => status === 'failed'), null, 2),
      );
    } finally {
      await restoreManifest();
    }
  });

  it('fails created Canva state when two pitch one-pagers reuse the same design ID', async () => {
    await mutateManifest((manifest) => {
      applyCreatedCanvaFixture(manifest);
      const [first, second] = manifest.canva.folders;
      second.pitchOnePagerDesignId = first.pitchOnePagerDesignId;
      manifest.brands.find(({ slug }) => slug === second.brand).canva.pitchOnePagerDesignId =
        second.pitchOnePagerDesignId;
    });
    try {
      const failure = failedCheck(await validateAssetTree(brandAssetsRoot), 'canva-status');
      assert.ok(failure);
      assert.ok(
        failure.errors.some(
          (error) =>
            error.includes('duplicate created Canva design ID') &&
            error.includes('DApitch0'),
        ),
      );
    } finally {
      await restoreManifest();
    }
  });

  it('fails created Canva state when a pitch one-pager reuses a brand-board design ID', async () => {
    await mutateManifest((manifest) => {
      applyCreatedCanvaFixture(manifest);
      const folder = manifest.canva.folders[0];
      folder.pitchOnePagerDesignId = folder.brandBoardDesignId;
      manifest.brands.find(({ slug }) => slug === folder.brand).canva.pitchOnePagerDesignId =
        folder.pitchOnePagerDesignId;
    });
    try {
      const failure = failedCheck(await validateAssetTree(brandAssetsRoot), 'canva-status');
      assert.ok(failure);
      assert.ok(
        failure.errors.some(
          (error) =>
            error.includes('duplicate created Canva design ID') &&
            error.includes('DAdesign0'),
        ),
      );
    } finally {
      await restoreManifest();
    }
  });

  it('fails partial Canva state when a created brand board has an invalid ID or missing edit URL', async () => {
    await mutateManifest((manifest) => {
      applyPartialCanvaFixture(manifest);
      manifest.canva.folders[0].brandBoardDesignId = 'fabricated-design-id';
      manifest.canva.folders[0].brandBoardEditUrl = null;
    });
    try {
      const failure = failedCheck(await validateAssetTree(brandAssetsRoot), 'canva-status');
      assert.ok(failure);
      assert.ok(failure.errors.some((error) => error.includes('brandBoardDesignId')));
      assert.ok(failure.errors.some((error) => error.includes('brandBoardEditUrl')));
    } finally {
      await restoreManifest();
    }
  });

  it('fails partial Canva state when a blocked pitch PDF has IDs or lacks blocker/manual guidance', async () => {
    await mutateManifest((manifest) => {
      applyPartialCanvaFixture(manifest);
      const folder = manifest.canva.folders[0];
      folder.pitchOnePagerDesignId = 'DAfabricated';
      folder.pitchOnePagerEditUrl = 'https://www.canva.com/d/fabricated';
      folder.pitchOnePagerBlocker = '';
      folder.pitchOnePagerManualImportSteps = [];
    });
    try {
      const failure = failedCheck(await validateAssetTree(brandAssetsRoot), 'canva-status');
      assert.ok(failure);
      assert.ok(failure.errors.some((error) => error.includes('pitchOnePagerDesignId')));
      assert.ok(failure.errors.some((error) => error.includes('pitchOnePagerEditUrl')));
      assert.ok(failure.errors.some((error) => error.includes('pitchOnePagerBlocker')));
      assert.ok(
        failure.errors.some((error) => error.includes('pitchOnePagerManualImportSteps')),
      );
    } finally {
      await restoreManifest();
    }
  });

  it('fails partial Canva state when the per-brand record diverges from its folder evidence', async () => {
    await mutateManifest((manifest) => {
      applyPartialCanvaFixture(manifest);
      manifest.brands[0].canva.brandBoardDesignId = 'DAinconsistent';
    });
    try {
      const failure = failedCheck(await validateAssetTree(brandAssetsRoot), 'canva-status');
      assert.ok(failure);
      assert.ok(failure.errors.some((error) => error.includes('must match its folder record')));
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

  it('fails canonical-asset-scope for an asset-byte diff from an explicit base', async () => {
    const path = join(
      brandAssetsRoot,
      'assets',
      'sweepza',
      'exports',
      'favicon',
      'favicon-16.png',
    );
    const original = await readFile(path);
    const changed = Buffer.from(original);
    changed[changed.length - 1] ^= 1;
    await writeFile(path, changed);
    try {
      const report = await validateAssetTree(brandAssetsRoot, {
        changeBase: baselineCommit,
      });
      assert.ok(failedCheck(report, 'canonical-asset-scope'));
      assert.equal(report.repositoryScope.changeBase, baselineCommit);
      assert.deepEqual(report.repositoryScope.assetPackChanges, [
        'ops/brand-assets/assets/sweepza/exports/favicon/favicon-16.png',
      ]);
    } finally {
      await writeFile(path, original);
    }
  });
});
