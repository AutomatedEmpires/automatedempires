const escapeXml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const boundedNumber = (value, fallback) => {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : fallback;
};

const safeColor = (value, fallback) => {
  const color = String(value ?? '');
  return /^(?:#[0-9a-f]{3}(?:[0-9a-f]{3})?|[a-z]+)$/i.test(color) ? color : fallback;
};

const ICON_GEOMETRY = Object.freeze({
  automatedempires: {
    count: 3,
    content: (color) => `
      <path d="M180 480V250H480" fill="none" stroke="${color}" stroke-width="92" stroke-linecap="square" stroke-linejoin="miter"/>
      <path d="M520 180H820V480" fill="none" stroke="${color}" stroke-width="92" stroke-linecap="square" stroke-linejoin="miter"/>
      <path d="M820 520V750H520V820H180V520" fill="none" stroke="${color}" stroke-width="92" stroke-linecap="square" stroke-linejoin="miter"/>
    `,
  },
  'explore-and-earn': {
    count: 3,
    content: (color) => `
      <path d="M170 700C300 560 390 600 500 470C610 340 700 380 830 240" fill="none" stroke="${color}" stroke-width="82" stroke-linecap="round"/>
      <path d="M160 825C310 700 420 735 530 600C640 465 730 500 840 400" fill="none" stroke="${color}" stroke-width="46" stroke-linecap="round"/>
      <path d="M595 260H825M595 260V510M595 385H765" fill="none" stroke="${color}" stroke-width="54" stroke-linecap="round" stroke-linejoin="round"/>
    `,
  },
  sweepza: {
    count: 3,
    content: (color) => `
      <path d="M175 420C270 205 630 155 825 345" fill="none" stroke="${color}" stroke-width="78" stroke-linecap="round"/>
      <path d="M195 610C320 815 665 835 820 625" fill="none" stroke="${color}" stroke-width="78" stroke-linecap="round"/>
      <circle cx="760" cy="500" r="62" fill="${color}"/>
    `,
  },
  logloads: {
    count: 3,
    content: (color) => `
      <circle cx="350" cy="500" r="185" fill="none" stroke="${color}" stroke-width="74"/>
      <circle cx="650" cy="500" r="185" fill="none" stroke="${color}" stroke-width="74"/>
      <path d="M170 500H830" fill="none" stroke="${color}" stroke-width="82" stroke-linecap="round"/>
    `,
  },
  bidspace: {
    count: 2,
    content: (color) => `
      <path d="M455 175H205V825H455V690H340V555H455" fill="${color}"/>
      <path d="M545 175H795V825H545V690H660V555H545V445H690V310H545Z" fill="${color}"/>
    `,
  },
  'lake-and-pine': {
    count: 1,
    content: (color) => `
      <path d="M165 650C245 570 330 720 450 625L610 500L735 310L835 500H755L825 650C735 595 660 700 540 645C430 595 350 735 235 660C205 640 185 640 165 650Z" fill="none" stroke="${color}" stroke-width="70" stroke-linecap="round" stroke-linejoin="round"/>
    `,
  },
  oran: {
    count: 4,
    content: (color) => `
      <rect x="155" y="155" width="285" height="285" rx="22" fill="${color}"/>
      <rect x="560" y="155" width="285" height="285" rx="22" fill="${color}"/>
      <rect x="155" y="560" width="285" height="285" rx="22" fill="${color}"/>
      <rect x="560" y="560" width="285" height="285" rx="22" fill="${color}"/>
    `,
  },
  'komfort-killz': {
    count: 2,
    content: (color) => `
      <path d="M260 180V820M260 500H430C595 500 705 385 705 250C705 205 670 180 625 180C580 180 545 205 545 250C545 320 490 385 410 385H260" fill="none" stroke="${color}" stroke-width="98" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M485 500L740 795" fill="none" stroke="${color}" stroke-width="98" stroke-linecap="square"/>
    `,
  },
  'just-jesus-bro': {
    count: 3,
    content: (color) => `
      <path d="M420 210H190V790H420" fill="none" stroke="${color}" stroke-width="82" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M580 210H810V790H580" fill="none" stroke="${color}" stroke-width="82" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M500 365V635" fill="none" stroke="${color}" stroke-width="82" stroke-linecap="round"/>
    `,
  },
});

const geometryFor = (brand, color) => {
  const definition = ICON_GEOMETRY[brand.slug];
  if (!definition) {
    throw new Error(`No icon geometry for brand: ${brand.slug}`);
  }
  return { count: definition.count, content: definition.content(color).trim() };
};

/**
 * Render a deterministic, self-contained icon SVG with a 12.5% safe zone.
 * @param {import('./brand-data.mjs').Brand} brand
 * @param {{width?: number, height?: number, color?: string, background?: string|null}} [options]
 * @returns {string}
 */
export const renderIconSvg = (brand, options = {}) => {
  const width = boundedNumber(options.width, 1024);
  const height = boundedNumber(options.height, 1024);
  const color = safeColor(options.color, brand.palette[0].hex);
  const background = options.background
    ? safeColor(options.background, brand.palette[2].hex)
    : null;
  const geometry = geometryFor(brand, color);
  const backgroundElement = background
    ? `<rect data-canvas-background="true" x="0" y="0" width="1000" height="1000" fill="${background}"/>`
    : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 1000 1000" role="img" aria-labelledby="${brand.slug}-icon-title ${brand.slug}-icon-description" data-brand="${brand.slug}" data-safe-zone="12.5%" data-principal-shapes="${geometry.count}" data-background="${background ? 'opaque' : 'transparent'}"><title id="${brand.slug}-icon-title">${escapeXml(brand.name)} icon</title><desc id="${brand.slug}-icon-description">${escapeXml(brand.mark)}</desc><metadata>brand:${brand.slug}; original deterministic vector; safe-zone:12.5%</metadata>${backgroundElement}<g aria-hidden="true">${geometry.content}</g></svg>`;
};

/**
 * Render a transparent stacked or horizontal logo master.
 * @param {import('./brand-data.mjs').Brand} brand
 * @param {'stacked'|'horizontal'} orientation
 * @returns {string}
 */
export const renderLogoSvg = (brand, orientation = 'stacked') => {
  if (!['stacked', 'horizontal'].includes(orientation)) {
    throw new Error(`Unsupported logo orientation: ${orientation}`);
  }

  const color = safeColor(brand.palette[0].hex, '#161A1D');
  const geometry = geometryFor(brand, color);
  const horizontal = orientation === 'horizontal';
  const width = horizontal ? 2400 : 1600;
  const height = horizontal ? 720 : 1600;
  const transform = horizontal ? 'translate(110 60) scale(0.6)' : 'translate(350 165) scale(0.9)';
  const textX = horizontal ? 800 : 800;
  const textY = horizontal ? 430 : 1310;
  const anchor = horizontal ? 'start' : 'middle';
  const maxSize = horizontal ? 260 : 205;
  const available = horizontal ? 1450 : 1320;
  const fontSize = Math.min(maxSize, Math.floor(available / Math.max(4, brand.name.length) * 1.65));

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="${brand.slug}-${orientation}-title ${brand.slug}-${orientation}-description" data-brand="${brand.slug}" data-orientation="${orientation}" data-background="transparent"><title id="${brand.slug}-${orientation}-title">${escapeXml(brand.name)} ${orientation} logo</title><desc id="${brand.slug}-${orientation}-description">${escapeXml(brand.mark)}</desc><metadata>brand:${brand.slug}; original deterministic vector; transparent logo master</metadata><g transform="${transform}" aria-hidden="true">${geometry.content}</g><text x="${textX}" y="${textY}" text-anchor="${anchor}" fill="${color}" font-family="${escapeXml(brand.type.fallback)}" font-size="${fontSize}" font-weight="700" letter-spacing="-3">${escapeXml(brand.name)}</text></svg>`;
};

export { escapeXml };
