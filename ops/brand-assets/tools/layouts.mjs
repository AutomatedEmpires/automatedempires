import { escapeXml, renderIconSvg } from './svg.mjs';

const SUPPORTED_LAYOUTS = new Set([
  'app-icon',
  'social-profile',
  'facebook-cover-master',
  'facebook-cover-optimized',
  'open-graph',
  'email-header',
  'pitch-one-pager',
  'brand-board',
]);

const assertDimension = (value, name) => {
  const number = Number(value);
  if (!Number.isInteger(number) || number <= 0) {
    throw new Error(`${name} must be a positive integer`);
  }
  return number;
};

const titleFit = (text, preferredSize, availableWidth) => {
  const characters = [...text].length;
  const overflowEstimate = characters * preferredSize * 0.52;
  if (overflowEstimate <= availableWidth) {
    return { size: preferredSize, status: 'preferred' };
  }
  const size = Math.max(1, Math.floor(availableWidth / (characters * 0.6)));
  return { size: Math.min(preferredSize, size), status: 'reduced' };
};

const wrapWords = (text, maxCharacters) => {
  const lines = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    const candidate = line ? `${line} ${word}` : word;
    if (line && candidate.length > maxCharacters) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
};

const textLines = (text, x, y, lineHeight, size, color, maxCharacters, extra = '') =>
  wrapWords(text, maxCharacters)
    .map(
      (line, index) =>
        `<text x="${x}" y="${y + index * lineHeight}" fill="${color}" font-size="${size}" ${extra}>${escapeXml(line)}</text>`,
    )
    .join('');

const iconAt = (brand, x, y, size, color, background = null) =>
  renderIconSvg(brand, { width: size, height: size, color, background }).replace(
    '<svg ',
    `<svg x="${x}" y="${y}" `,
  );

const pattern = (width, height, color) => {
  const step = Math.max(70, Math.round(Math.min(width, height) / 7));
  const verticals = [];
  for (let x = step; x < width; x += step) {
    verticals.push(`M${x} 0V${height}`);
  }
  const contours = [
    `M0 ${Math.round(height * 0.7)}C${Math.round(width * 0.25)} ${Math.round(height * 0.48)} ${Math.round(width * 0.62)} ${Math.round(height * 0.9)} ${width} ${Math.round(height * 0.58)}`,
    `M0 ${Math.round(height * 0.82)}C${Math.round(width * 0.3)} ${Math.round(height * 0.6)} ${Math.round(width * 0.7)} ${Math.round(height * 0.96)} ${width} ${Math.round(height * 0.7)}`,
  ];
  return `<g aria-hidden="true" fill="none" stroke="${color}" opacity="0.13"><path d="${verticals.join(' ')}"/><path d="${contours.join(' ')}" stroke-width="3"/></g>`;
};

const canvas = (brand, layout, width, height, content) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="${brand.slug}-${layout}-title ${brand.slug}-${layout}-description ${brand.slug}-${layout}-copy" data-brand="${brand.slug}" data-layout="${layout}" data-background="opaque"><title id="${brand.slug}-${layout}-title">${escapeXml(brand.name)} ${escapeXml(layout)} layout</title><desc id="${brand.slug}-${layout}-description">Original deterministic layout using abstract line and grid geometry.</desc><desc id="${brand.slug}-${layout}-copy">${escapeXml(brand.copy.public)}</desc><metadata>brand:${brand.slug}; layout:${layout}; original deterministic vector; no external imagery</metadata>${content}</svg>`;

const renderAppIcon = (brand, width, height) => {
  const [ink, , paper, accent] = brand.palette.map(({ hex }) => hex);
  const size = Math.round(Math.min(width, height) * 0.72);
  const x = Math.round((width - size) / 2);
  const y = Math.round((height - size) / 2);
  return `<rect width="${width}" height="${height}" fill="${paper}"/>${pattern(width, height, accent)}${iconAt(brand, x, y, size, ink)}`;
};

const renderSocialProfile = (brand, width, height) => {
  const [ink, , paper, accent] = brand.palette.map(({ hex }) => hex);
  const iconSize = Math.round(Math.min(width, height) * 0.54);
  const fontSize = Math.max(30, Math.round(width / Math.max(11, brand.name.length * 1.25)));
  return `<rect width="${width}" height="${height}" fill="${paper}"/>${pattern(width, height, accent)}${iconAt(brand, Math.round((width - iconSize) / 2), Math.round(height * 0.12), iconSize, ink)}<text x="${width / 2}" y="${Math.round(height * 0.88)}" text-anchor="middle" fill="${ink}" font-family="${escapeXml(brand.type.fallback)}" font-size="${fontSize}" font-weight="700">${escapeXml(brand.name)}</text>`;
};

const renderLandscape = (brand, width, height) => {
  const [ink, slate, paper, accent] = brand.palette.map(({ hex }) => hex);
  const margin = Math.round(width * 0.07);
  const iconSize = Math.round(Math.min(height * 0.64, width * 0.29));
  const titleX = margin + iconSize + Math.round(width * 0.055);
  const preferredTitleSize = Math.max(42, Math.min(Math.round(height * 0.19), Math.round(width / Math.max(9, brand.name.length * 0.82))));
  const title = titleFit(brand.name, preferredTitleSize, width - titleX - margin);
  const copySize = Math.max(20, Math.round(height * 0.065));
  const copyWidth = Math.max(18, Math.round((width - titleX - margin) / (copySize * 0.58)));
  return `<rect width="${width}" height="${height}" fill="${paper}"/>${pattern(width, height, slate)}<rect x="0" y="0" width="${Math.max(12, Math.round(width * 0.018))}" height="${height}" fill="${accent}"/>${iconAt(brand, margin, Math.round((height - iconSize) / 2), iconSize, ink)}<text data-role="brand-name" data-title-fit="${title.status}" data-safe-right-margin="${margin}" x="${titleX}" y="${Math.round(height * 0.43)}" fill="${ink}" font-family="${escapeXml(brand.type.fallback)}" font-size="${title.size}" font-weight="700">${escapeXml(brand.name)}</text>${textLines(brand.copy.public, titleX, Math.round(height * 0.58), Math.round(copySize * 1.28), copySize, ink, copyWidth, `font-family="${escapeXml(brand.type.fallback)}"`)}`;
};

const renderPitch = (brand, width, height) => {
  const [ink, slate, paper, accent] = brand.palette.map(({ hex }) => hex);
  const margin = Math.round(width * 0.085);
  const iconSize = Math.round(width * 0.25);
  const preferredTitleSize = Math.max(58, Math.round(width / Math.max(11, brand.name.length * 0.9)));
  const titleX = margin + iconSize + Math.round(width * 0.055);
  const title = titleFit(brand.name, preferredTitleSize, width - titleX - margin);
  const copySize = Math.round(width * 0.04);
  const copy = textLines(
    brand.copy.public,
    margin,
    Math.round(height * 0.4),
    Math.round(copySize * 1.35),
    copySize,
    ink,
    38,
    `font-family="${escapeXml(brand.type.fallback)}" font-weight="600"`,
  );
  const notes = textLines(
    brand.imagery,
    margin,
    Math.round(height * 0.68),
    Math.round(copySize * 0.95),
    Math.round(copySize * 0.66),
    slate,
    62,
    `font-family="${escapeXml(brand.type.fallback)}"`,
  );
  return `<rect width="${width}" height="${height}" fill="${paper}"/>${pattern(width, height, slate)}<rect x="0" y="0" width="${width}" height="${Math.round(height * 0.035)}" fill="${accent}"/>${iconAt(brand, margin, Math.round(height * 0.08), iconSize, ink)}<text data-role="brand-name" data-title-fit="${title.status}" data-safe-right-margin="${margin}" x="${titleX}" y="${Math.round(height * 0.2)}" fill="${ink}" font-family="${escapeXml(brand.type.fallback)}" font-size="${title.size}" font-weight="700">${escapeXml(brand.name)}</text>${copy}<line x1="${margin}" y1="${Math.round(height * 0.58)}" x2="${width - margin}" y2="${Math.round(height * 0.58)}" stroke="${accent}" stroke-width="5"/><text x="${margin}" y="${Math.round(height * 0.64)}" fill="${ink}" font-family="${escapeXml(brand.type.fallback)}" font-size="${Math.round(copySize * 0.62)}" font-weight="700" letter-spacing="2">IMAGERY DIRECTION</text>${notes}<text x="${margin}" y="${Math.round(height * 0.9)}" fill="${slate}" font-family="${escapeXml(brand.type.fallback)}" font-size="${Math.round(copySize * 0.5)}">P0 identity concept — founder refinement and clearance required.</text>`;
};

const renderBrandBoard = (brand, width, height) => {
  const [ink, slate, paper, accent] = brand.palette.map(({ hex }) => hex);
  const margin = Math.round(width * 0.055);
  const iconSize = Math.round(height * 0.42);
  const rightX = Math.round(width * 0.48);
  const swatchWidth = Math.round(width * 0.1);
  const swatchY = Math.round(height * 0.48);
  const titleSize = Math.max(58, Math.round(width / Math.max(18, brand.name.length * 1.35)));
  const palette = brand.palette
    .map(
      ({ name, hex }, index) =>
        `<rect x="${rightX + index * swatchWidth}" y="${swatchY}" width="${swatchWidth}" height="${Math.round(height * 0.13)}" fill="${hex}"/><text x="${rightX + index * swatchWidth}" y="${swatchY + Math.round(height * 0.17)}" fill="${ink}" font-family="${escapeXml(brand.type.fallback)}" font-size="18">${escapeXml(name)}</text><text x="${rightX + index * swatchWidth}" y="${swatchY + Math.round(height * 0.195)}" fill="${slate}" font-family="monospace" font-size="17">${hex}</text>`,
    )
    .join('');
  return `<rect width="${width}" height="${height}" fill="${paper}"/>${pattern(width, height, slate)}<rect x="0" y="0" width="${width}" height="${Math.round(height * 0.022)}" fill="${accent}"/>${iconAt(brand, margin, Math.round(height * 0.16), iconSize, ink)}<text x="${rightX}" y="${Math.round(height * 0.17)}" fill="${ink}" font-family="${escapeXml(brand.type.fallback)}" font-size="${titleSize}" font-weight="700">${escapeXml(brand.name)}</text>${textLines(brand.copy.public, rightX, Math.round(height * 0.25), 42, 31, ink, 64, `font-family="${escapeXml(brand.type.fallback)}" font-weight="600"`)}${textLines(brand.mark, rightX, Math.round(height * 0.36), 30, 22, slate, 78, `font-family="${escapeXml(brand.type.fallback)}"`)}${palette}<text x="${rightX}" y="${Math.round(height * 0.78)}" fill="${ink}" font-family="${escapeXml(brand.type.fallback)}" font-size="26" font-weight="700">TYPE</text><text x="${rightX}" y="${Math.round(height * 0.83)}" fill="${ink}" font-family="${escapeXml(brand.type.fallback)}" font-size="24">${escapeXml(brand.type.primary)} / ${escapeXml(brand.type.secondary)}</text><text x="${rightX}" y="${Math.round(height * 0.91)}" fill="${slate}" font-family="${escapeXml(brand.type.fallback)}" font-size="18">P0 concept · no external imagery · original deterministic geometry</text>`;
};

/**
 * Render one deterministic, self-contained communication-layout SVG.
 * @param {import('./brand-data.mjs').Brand} brand
 * @param {string} layout
 * @param {number} width
 * @param {number} height
 * @returns {string}
 */
export const renderLayoutSvg = (brand, layout, width, height) => {
  if (!SUPPORTED_LAYOUTS.has(layout)) {
    throw new Error(`Unsupported layout: ${layout}`);
  }
  const safeWidth = assertDimension(width, 'width');
  const safeHeight = assertDimension(height, 'height');

  let content;
  if (layout === 'app-icon') {
    content = renderAppIcon(brand, safeWidth, safeHeight);
  } else if (layout === 'social-profile') {
    content = renderSocialProfile(brand, safeWidth, safeHeight);
  } else if (layout === 'pitch-one-pager') {
    content = renderPitch(brand, safeWidth, safeHeight);
  } else if (layout === 'brand-board') {
    content = renderBrandBoard(brand, safeWidth, safeHeight);
  } else {
    content = renderLandscape(brand, safeWidth, safeHeight);
  }

  return canvas(brand, layout, safeWidth, safeHeight, content);
};
