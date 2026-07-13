import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { describe, it } from 'node:test';

import sharp from 'sharp';

import { BRANDS } from '../brand-data.mjs';
import { renderLayoutSvg } from '../layouts.mjs';
import { renderIconSvg, renderLogoSvg } from '../svg.mjs';

const EXTERNAL_RESOURCE =
  /(?:\b(?:href|src)=["']https?:\/\/|@import\s|url\s*\(|<image\b|<foreignObject\b)/i;
const escapeXml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

const normalizeText = (value) => value.replace(/\s+/g, ' ').trim();

const decodeXml = (value) =>
  value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'");

const visibleText = (svg) =>
  normalizeText(
    [...svg.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/gi)]
      .map(([, content]) => decodeXml(content.replace(/<[^>]+>/g, ' ')))
      .join(' '),
  );

const geometryMarkup = (svg) => {
  const withoutAccessibleMetadata = svg.replace(
    /<(title|desc|metadata)\b[^>]*>[\s\S]*?<\/\1>/gi,
    '',
  );
  const match = withoutAccessibleMetadata.match(
    /<g\b[^>]*\baria-hidden="true"[^>]*>([\s\S]*?)<\/g>/i,
  );
  assert.ok(match, 'icon must expose a principal geometry group');
  return normalizeText(match[1]);
};

const principalShapeCount = (svg) =>
  [...geometryMarkup(svg).matchAll(/<(?:circle|ellipse|line|path|polygon|polyline|rect)\b/gi)]
    .length;

const sha = (value) => createHash('sha256').update(value).digest('hex');

const assertNumericViewBox = (svg, label) => {
  const match = svg.match(/\bviewBox="([^"]+)"/);
  assert.ok(match, `${label} must have a viewBox`);

  const values = match[1].trim().split(/\s+/).map(Number);
  assert.equal(values.length, 4, `${label} viewBox must contain four numbers`);
  assert.ok(values.every(Number.isFinite), `${label} viewBox must be numeric`);
  assert.ok(values[2] > 0 && values[3] > 0, `${label} viewBox must be nonempty`);
};

describe('SVG master rendering', () => {
  it('renders an accessible, self-contained icon master for every brand', () => {
    for (const brand of BRANDS) {
      const svg = renderIconSvg(brand);

      assert.match(svg, /^<svg\b/, `${brand.slug} icon must start with an SVG element`);
      assertNumericViewBox(svg, `${brand.slug} icon`);
      assert.match(
        svg,
        new RegExp(`<metadata>[^<]*${brand.slug}[^<]*<\\/metadata>`),
        `${brand.slug} must appear in accessible metadata`,
      );
      assert.match(svg, /\brole="img"/);
      assert.match(svg, /<title\b[^>]*>\S[\s\S]*<\/title>/);
      assert.match(svg, /\bdata-safe-zone="12\.5%"/);
      const shapeCount = principalShapeCount(svg);
      assert.ok(shapeCount >= 1 && shapeCount <= 4, `${brand.slug} must use at most four shapes`);
      assert.equal(
        Number(svg.match(/\bdata-principal-shapes="(\d+)"/)?.[1]),
        shapeCount,
        `${brand.slug} declared shape count must match its actual geometry`,
      );
      assert.doesNotMatch(svg, EXTERNAL_RESOURCE, `${brand.slug} icon must be self-contained`);
    }
  });

  it('gives all nine brands distinct deterministic icon geometry', () => {
    const firstPass = BRANDS.map((brand) =>
      geometryMarkup(renderIconSvg(brand, { color: '#000000' })),
    );
    const secondPass = BRANDS.map((brand) =>
      geometryMarkup(renderIconSvg(brand, { color: '#000000' })),
    );
    assert.deepEqual(secondPass, firstPass);

    const hashes = firstPass.map(sha);
    assert.equal(new Set(hashes).size, BRANDS.length);
  });

  it('proves geometry hashes and shape counts cannot be satisfied by metadata mutations', () => {
    const svg = renderIconSvg(BRANDS[0]);
    const metadataMutation = svg
      .replace(/<title\b[^>]*>[\s\S]*?<\/title>/, '<title>mutated title</title>')
      .replace(/<desc\b[^>]*>[\s\S]*?<\/desc>/, '<desc>mutated description</desc>')
      .replace(/<metadata>[\s\S]*?<\/metadata>/, '<metadata>mutated metadata</metadata>');
    assert.notEqual(sha(metadataMutation), sha(svg));
    assert.equal(sha(geometryMarkup(metadataMutation)), sha(geometryMarkup(svg)));

    const dishonestShapeDeclaration = svg
      .replace(/data-principal-shapes="\d+"/, 'data-principal-shapes="1"')
      .replace('</g>', `${'<circle cx="500" cy="500" r="1"/>'.repeat(5)}</g>`);
    assert.equal(
      Number(dishonestShapeDeclaration.match(/data-principal-shapes="(\d+)"/)?.[1]),
      1,
    );
    assert.ok(principalShapeCount(dishonestShapeDeclaration) > 4);
  });

  it('keeps rendered icon pixels inside the declared 12.5% safe zone', async () => {
    const canvasSize = 1000;
    const safeZone = 125;
    for (const brand of BRANDS) {
      const { data, info } = await sharp(Buffer.from(renderIconSvg(brand)))
        .resize(canvasSize, canvasSize)
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

      for (let y = 0; y < canvasSize; y += 1) {
        for (let x = 0; x < canvasSize; x += 1) {
          if (x < safeZone || y < safeZone || x >= canvasSize - safeZone || y >= canvasSize - safeZone) {
            const alpha = data[(y * canvasSize + x) * info.channels + 3];
            assert.equal(alpha, 0, `${brand.slug} crosses the safe zone at ${x},${y}`);
          }
        }
      }
    }
  });

  it('renders stacked and horizontal logo masters with exact names and transparency', () => {
    for (const brand of BRANDS) {
      for (const orientation of ['stacked', 'horizontal']) {
        const svg = renderLogoSvg(brand, orientation);

        assert.match(svg, /^<svg\b/);
        assertNumericViewBox(svg, `${brand.slug} ${orientation} logo`);
        assert.ok(
          svg.includes(`>${escapeXml(brand.name)}</text>`),
          `${brand.slug} must use its exact name`,
        );
        assert.match(svg, /data-background="transparent"/);
        assert.doesNotMatch(svg, /<rect\b[^>]*\bdata-canvas-background=/i);
        assert.doesNotMatch(svg, EXTERNAL_RESOURCE);
      }
    }
  });

  it('renders deterministic self-contained communication layouts with approved copy', () => {
    const layouts = [
      ['app-icon', 1024, 1024, false],
      ['social-profile', 1080, 1080, false],
      ['facebook-cover-master', 1640, 924, true],
      ['facebook-cover-optimized', 851, 315, true],
      ['open-graph', 1200, 630, true],
      ['email-header', 1200, 400, true],
      ['pitch-one-pager', 1080, 1350, true],
      ['brand-board', 1920, 1080, true],
    ];

    for (const brand of BRANDS) {
      for (const [layout, width, height, includesCopy] of layouts) {
        const svg = renderLayoutSvg(brand, layout, width, height);
        const renderedText = visibleText(svg);
        assert.match(svg, /^<svg\b/);
        assert.match(svg, new RegExp(`viewBox="0 0 ${width} ${height}"`));
        if (layout !== 'app-icon') {
          assert.ok(renderedText.includes(brand.name));
        }
        if (includesCopy) {
          assert.ok(renderedText.includes(brand.copy.public));
        }
        assert.doesNotMatch(svg, EXTERNAL_RESOURCE);
        assert.equal(renderLayoutSvg(brand, layout, width, height), svg);
      }
    }

    const sweepza = BRANDS.find(({ slug }) => slug === 'sweepza');
    assert.throws(
      () => renderLayoutSvg(sweepza, 'unsupported-layout', 100, 100),
      /Unsupported layout/,
    );
  });

  it('does not treat approved copy in descriptions as visible layout text', () => {
    const brand = BRANDS.find(({ slug }) => slug === 'sweepza');
    const metadataOnly = `<svg><desc>${escapeXml(brand.copy.public)}</desc><text>Other visible words</text></svg>`;
    assert.equal(visibleText(metadataOnly), 'Other visible words');
    assert.ok(!visibleText(metadataOnly).includes(brand.copy.public));
  });
});
