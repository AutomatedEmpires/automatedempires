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
  'P0 concept',
  'not trademark cleared',
  'not a final UI palette',
  'not legal/compliance approved',
];

const REQUIRED_ASSET_ROLES = [
  'primary-logo',
  'horizontal-logo',
  'icon-mark',
  'favicon',
  'app-icon',
  'social-profile',
  'facebook-cover',
  'open-graph',
  'email-header',
  'pitch-one-pager',
  'brand-board',
];

const REQUIRED_ASSET_PATHS = [
  'source/primary-logo.svg',
  'exports/logo/primary-logo.png',
  'source/horizontal-logo.svg',
  'exports/logo/horizontal-logo.png',
  'source/icon-mark.svg',
  'exports/logo/icon-mark.png',
  'exports/favicon/favicon.svg',
  'exports/favicon/favicon-16.png',
  'exports/favicon/favicon-32.png',
  'exports/favicon/favicon-48.png',
  'exports/favicon/apple-touch-icon.png',
  'exports/favicon/icon-192.png',
  'exports/favicon/icon-512.png',
  'exports/favicon/favicon.ico',
  'exports/app-icon/app-icon.png',
  'exports/social-profile/social-profile.png',
  'exports/facebook-cover/facebook-cover.png',
  'exports/facebook-cover/facebook-cover.jpg',
  'exports/open-graph/open-graph.png',
  'exports/open-graph/open-graph.jpg',
  'exports/email-header/email-header.png',
  'exports/email-header/email-header.jpg',
  'exports/pitch-one-pager/pitch-one-pager.png',
  'exports/pitch-one-pager/pitch-one-pager.pdf',
  'preview/brand-board.png',
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
    assert.deepEqual(
      ASSET_REQUIREMENTS.map(({ relativePath }) => relativePath),
      REQUIRED_ASSET_PATHS,
    );
    assert.deepEqual(
      [...new Set(ASSET_REQUIREMENTS.map(({ role }) => role))],
      REQUIRED_ASSET_ROLES,
    );
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

  it('keeps Sweepza public copy conservative and free of verified wording', () => {
    const sweepza = getBrand('sweepza');
    const processTeal = sweepza.palette.find(({ name }) => name === 'Process Teal');

    assert.deepEqual(processTeal, { name: 'Process Teal', hex: '#2A8A7E' });
    assert.equal(
      sweepza.copy.public,
      'Giveaway campaign tools for businesses. Compliance review and vendor onboarding in progress.',
    );
    assert.doesNotMatch(sweepza.copy.public, /verified/i);
  });
});
