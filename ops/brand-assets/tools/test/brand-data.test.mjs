import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  ASSET_REQUIREMENTS,
  BRANDS,
  LEGAL_DISCLOSURE,
  getBrand,
} from '../brand-data.mjs';

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
];

const REQUIRED_ASSET_FIELDS = [
  'id',
  'relativePath',
  'format',
  'width',
  'height',
  'alpha',
  'role',
];

const LEGAL_DISCLOSURE_PARTS = [
  'not trademark cleared',
  'not a final UI palette',
  'not legal/compliance approved',
  'requires founder refinement before final adoption',
];

const expectedAsset = (id, relativePath, format, width, height, alpha, role) => ({
  id,
  relativePath,
  format,
  width,
  height,
  alpha,
  role,
});

const REQUIRED_ASSET_MATRIX = [
  expectedAsset('primary-logo-svg', 'source/primary-logo.svg', 'svg', 1600, 1600, true, 'primary-logo'),
  expectedAsset('primary-logo-png', 'exports/logo/primary-logo.png', 'png', 1600, 1600, true, 'primary-logo'),
  expectedAsset('horizontal-logo-svg', 'source/horizontal-logo.svg', 'svg', 2400, 720, true, 'horizontal-logo'),
  expectedAsset('horizontal-logo-png', 'exports/logo/horizontal-logo.png', 'png', 2400, 720, true, 'horizontal-logo'),
  expectedAsset('icon-mark-svg', 'source/icon-mark.svg', 'svg', 1024, 1024, true, 'icon-mark'),
  expectedAsset('icon-mark-png', 'exports/logo/icon-mark.png', 'png', 1024, 1024, true, 'icon-mark'),
  expectedAsset('favicon-svg', 'exports/favicon/favicon.svg', 'svg', 512, 512, true, 'favicon'),
  expectedAsset('favicon-16-png', 'exports/favicon/favicon-16.png', 'png', 16, 16, true, 'favicon'),
  expectedAsset('favicon-32-png', 'exports/favicon/favicon-32.png', 'png', 32, 32, true, 'favicon'),
  expectedAsset('favicon-48-png', 'exports/favicon/favicon-48.png', 'png', 48, 48, true, 'favicon'),
  expectedAsset('apple-touch-icon-png', 'exports/favicon/apple-touch-icon.png', 'png', 180, 180, false, 'favicon'),
  expectedAsset('icon-192-png', 'exports/favicon/icon-192.png', 'png', 192, 192, false, 'favicon'),
  expectedAsset('icon-512-png', 'exports/favicon/icon-512.png', 'png', 512, 512, false, 'favicon'),
  expectedAsset('favicon-ico', 'exports/favicon/favicon.ico', 'ico', 48, 48, true, 'favicon'),
  expectedAsset('app-icon-png', 'exports/app-icon/app-icon.png', 'png', 1024, 1024, false, 'app-icon'),
  expectedAsset('social-profile-png', 'exports/social-profile/social-profile.png', 'png', 1080, 1080, false, 'social-profile'),
  expectedAsset('facebook-cover-png', 'exports/facebook-cover/facebook-cover.png', 'png', 1640, 924, false, 'facebook-cover'),
  expectedAsset('facebook-cover-jpg', 'exports/facebook-cover/facebook-cover.jpg', 'jpg', 851, 315, false, 'facebook-cover'),
  expectedAsset('open-graph-png', 'exports/open-graph/open-graph.png', 'png', 1200, 630, false, 'open-graph'),
  expectedAsset('open-graph-jpg', 'exports/open-graph/open-graph.jpg', 'jpg', 1200, 630, false, 'open-graph'),
  expectedAsset('email-header-png', 'exports/email-header/email-header.png', 'png', 1200, 400, false, 'email-header'),
  expectedAsset('email-header-jpg', 'exports/email-header/email-header.jpg', 'jpg', 1200, 400, false, 'email-header'),
  expectedAsset('pitch-one-pager-png', 'exports/pitch-one-pager/pitch-one-pager.png', 'png', 1080, 1350, false, 'pitch-one-pager'),
  expectedAsset('pitch-one-pager-pdf', 'exports/pitch-one-pager/pitch-one-pager.pdf', 'pdf', 612, 792, false, 'pitch-one-pager'),
  expectedAsset('brand-board-png', 'preview/brand-board.png', 'png', 1920, 1080, false, 'brand-board'),
];

describe('brand data contract', () => {
  it('defines nine uniquely addressable brands with every required field', () => {
    assert.equal(BRANDS.length, 9);
    assert.equal(new Set(BRANDS.map(({ slug }) => slug)).size, 9);

    for (const brand of BRANDS) {
      assert.ok(Object.isFrozen(brand), `${brand.slug} must be frozen`);
      for (const field of REQUIRED_BRAND_FIELDS) {
        assert.ok(brand[field], `${brand.slug} is missing ${field}`);
      }

      assert.strictEqual(getBrand(brand.slug), brand);
    }

    assert.throws(() => getBrand('not-a-brand'), /Unknown brand slug: not-a-brand/);
  });

  it('defines four named hexadecimal palette colors for every brand', () => {
    for (const brand of BRANDS) {
      assert.equal(brand.palette.length, 4, `${brand.slug} must have four colors`);
      for (const color of brand.palette) {
        assert.match(color.name, /\S/, `${brand.slug} has an unnamed color`);
        assert.match(color.hex, /^#[0-9A-F]{6}$/, `${brand.slug} has invalid color ${color.hex}`);
      }
    }
  });

  it('includes the shared four-part legal disclosure on every brand', () => {
    assert.match(LEGAL_DISCLOSURE, /P0 concept/i);
    for (const part of LEGAL_DISCLOSURE_PARTS) {
      assert.match(LEGAL_DISCLOSURE, new RegExp(part, 'i'));
    }

    for (const brand of BRANDS) {
      assert.ok(
        brand.legalNotes.includes(LEGAL_DISCLOSURE),
        `${brand.slug} must include the shared legal disclosure`,
      );
    }
  });

  it('defines complete, uniquely named, lowercase asset requirements', () => {
    assert.deepEqual(ASSET_REQUIREMENTS, REQUIRED_ASSET_MATRIX);
    assert.ok(Object.isFrozen(ASSET_REQUIREMENTS));
    assert.equal(
      new Set(ASSET_REQUIREMENTS.map(({ id }) => id)).size,
      ASSET_REQUIREMENTS.length,
    );
    assert.equal(
      new Set(ASSET_REQUIREMENTS.map(({ relativePath }) => relativePath)).size,
      ASSET_REQUIREMENTS.length,
    );

    for (const asset of ASSET_REQUIREMENTS) {
      for (const field of REQUIRED_ASSET_FIELDS) {
        assert.notEqual(asset[field], undefined, `${asset.id} is missing ${field}`);
      }

      assert.doesNotMatch(asset.relativePath, /[A-Z\s]/);
      assert.doesNotMatch(asset.relativePath, /final/i);
      for (const segment of asset.relativePath.split('/')) {
        assert.match(segment, /^[a-z0-9]+(?:[.-][a-z0-9]+)*$/);
      }
    }
  });

  it('keeps Sweepza direction conservative and free of assurance cues', () => {
    const sweepza = getBrand('sweepza');
    const processTeal = sweepza.palette.find(({ name }) => name === 'Process Teal');
    const assuranceCue = /\b(?:verified|verification|badges?|seals?|certification)\b/i;

    assert.deepEqual(processTeal, { name: 'Process Teal', hex: '#2A8A7E' });
    assert.equal(
      sweepza.mark,
      'Two nested sweep arcs resolving into one neutral process dot.',
    );
    assert.equal(
      sweepza.copy.public,
      'Giveaway campaign tools for businesses. Compliance review and vendor onboarding in progress.',
    );

    for (const [field, text] of [
      ['mark', sweepza.mark],
      ['copy', Object.values(sweepza.copy).join(' ')],
      ["don'ts", sweepza.donts.join(' ')],
    ]) {
      assert.doesNotMatch(text, assuranceCue, `Sweepza ${field} contains an assurance cue`);
    }
  });
});
