import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, it } from 'node:test';

import { BRANDS } from '../brand-data.mjs';
import { generateDocs } from '../generate-docs.mjs';

const BLOCKER =
  'Canva connector import-design-from-url accepts PDFs only from an already-public HTTPS URL; its direct local design_file path supports HTML/ZIP artifacts, not local PDFs. Security policy forbids publishing private local files solely for import.';

describe('Canva documentation generation', () => {
  const roots = [];

  afterEach(async () => {
    await Promise.all(roots.splice(0).map((root) => rm(root, { recursive: true, force: true })));
  });

  it('renders and mirrors the precise truthful partial Canva state', async () => {
    const root = await mkdtemp(join(tmpdir(), 'brand-docs-'));
    roots.push(root);
    const brand = BRANDS[0];
    const folder = {
      kind: 'brand',
      brand: brand.slug,
      name: '00 Parent — AutomatedEmpires',
      status: 'created',
      folderId: 'FAfolder123',
      folderUrl: 'https://www.canva.com/folder/FAfolder123',
      createdAt: '2026-07-12T01:01:00.000Z',
      updatedAt: '2026-07-12T01:01:00.000Z',
      brandBoardStatus: 'created',
      brandBoardDesignId: 'DAdesign123',
      brandBoardEditUrl: 'https://www.canva.com/d/edit123',
      brandBoardViewUrl: 'https://www.canva.com/d/view123',
      brandBoardSourcePath: 'assets/automatedempires/preview/brand-board.png',
      brandBoardCreatedAt: '2026-07-12T01:02:00.000Z',
      pitchOnePagerStatus: 'blocked',
      pitchOnePagerDesignId: null,
      pitchOnePagerEditUrl: null,
      pitchOnePagerViewUrl: null,
      pitchOnePagerSourcePath:
        'assets/automatedempires/exports/pitch-one-pager/pitch-one-pager.pdf',
      pitchOnePagerBlocker: BLOCKER,
      pitchOnePagerManualImportSteps: [
        'Open Canva Home → Create a design → Import file.',
        'Choose assets/automatedempires/exports/pitch-one-pager/pitch-one-pager.pdf.',
        'Move the imported design to AutomatedEmpires Brand System/00 Parent — AutomatedEmpires.',
      ],
    };
    const canva = {
      status: 'partial',
      rootFolderStatus: 'created',
      rootFolderName: 'AutomatedEmpires Brand System',
      rootFolderId: 'FAroot123',
      rootFolderUrl: 'https://www.canva.com/folder/FAroot123',
      createdAt: '2026-07-12T01:00:00.000Z',
      updatedAt: '2026-07-12T01:00:00.000Z',
      verifiedAt: '2026-07-12T01:30:00.000Z',
      folders: [folder],
    };
    const validation = {
      status: 'passed',
      checks: [],
      brands: [{ slug: brand.slug, status: 'passed' }],
      visualQa: [],
    };

    await generateDocs({ brands: [brand], assets: [], validation, canva, root });

    const map = await readFile(join(root, 'CANVA_FOLDER_MAP.md'), 'utf8');
    assert.match(map, /Canva status is `partial`/);
    assert.match(map, /DAdesign123/);
    assert.match(map, /https:\/\/www\.canva\.com\/d\/edit123/);
    assert.match(map, /pitch-one-pager\.pdf/);
    assert.match(map, /direct local design_file path supports HTML\/ZIP artifacts/);
    assert.doesNotMatch(map, /Canva creation is deferred to Task 4/);

    const manifest = JSON.parse(
      await readFile(join(root, 'manifests', 'brand-assets.json'), 'utf8'),
    );
    assert.equal(manifest.canva.status, 'partial');
    assert.equal(manifest.brands[0].canva.status, 'partial');
    assert.equal(manifest.brands[0].canva.folderStatus, 'created');
    assert.equal(manifest.brands[0].canva.brandBoardDesignId, 'DAdesign123');
    assert.equal(manifest.brands[0].canva.pitchOnePagerStatus, 'blocked');
    assert.equal(manifest.brands[0].canva.pitchOnePagerDesignId, null);

    const requirements = await readFile(join(root, 'EXPORT_REQUIREMENTS.md'), 'utf8');
    assert.match(
      requirements,
      /Approved asset-change baseline: `62c03b8875a361011478e8cf17ad1267782cf072`/,
    );
    assert.match(requirements, /communication-title crop repair/);
  });
});
