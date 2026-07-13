import { createHash } from 'node:crypto';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { PDFDocument } from 'pdf-lib';
import sharp from 'sharp';

import { ASSET_REQUIREMENTS, BRANDS, LEGAL_DISCLOSURE } from './brand-data.mjs';
import { renderLayoutSvg } from './layouts.mjs';
import { renderIconSvg, renderLogoSvg } from './svg.mjs';

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const FIXED_PDF_DATE = new Date('2026-07-12T00:00:00.000Z');

const sha256 = (buffer) => createHash('sha256').update(buffer).digest('hex');

const isPng = (buffer) =>
  Buffer.isBuffer(buffer) &&
  buffer.length >= PNG_SIGNATURE.length &&
  buffer.subarray(0, PNG_SIGNATURE.length).equals(PNG_SIGNATURE);

/**
 * Construct a standards-compliant ICO containing PNG-compressed frames.
 * @param {{width: number, height: number, data: Buffer}[]} entries
 * @returns {Buffer}
 */
export const buildIco = (entries) => {
  if (!Array.isArray(entries) || entries.length === 0) {
    throw new Error('ICO requires at least one PNG entry');
  }

  const normalized = entries.map(({ width, height, data }) => {
    if (!Number.isInteger(width) || width < 1 || width > 256) {
      throw new Error(`Invalid ICO width: ${width}`);
    }
    if (!Number.isInteger(height) || height < 1 || height > 256) {
      throw new Error(`Invalid ICO height: ${height}`);
    }
    if (!isPng(data)) {
      throw new Error(`ICO ${width}x${height} entry must be PNG-compressed`);
    }
    return { width, height, data };
  });

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(normalized.length, 4);

  const directory = Buffer.alloc(normalized.length * 16);
  let imageOffset = header.length + directory.length;
  normalized.forEach(({ width, height, data }, index) => {
    const offset = index * 16;
    directory[offset] = width === 256 ? 0 : width;
    directory[offset + 1] = height === 256 ? 0 : height;
    directory[offset + 2] = 0;
    directory[offset + 3] = 0;
    directory.writeUInt16LE(1, offset + 4);
    directory.writeUInt16LE(32, offset + 6);
    directory.writeUInt32LE(data.length, offset + 8);
    directory.writeUInt32LE(imageOffset, offset + 12);
    imageOffset += data.length;
  });

  return Buffer.concat([header, directory, ...normalized.map(({ data }) => data)]);
};

const renderPng = async (svg, width, height, opaque = false, background = '#FFFFFF') => {
  let pipeline = sharp(Buffer.from(svg)).resize(width, height, {
    fit: 'fill',
    kernel: sharp.kernel.lanczos3,
  });
  pipeline = opaque
    ? pipeline.flatten({ background }).removeAlpha()
    : pipeline.ensureAlpha();
  return pipeline
    .png({ compressionLevel: 9, adaptiveFiltering: false, palette: false })
    .toBuffer();
};

const renderJpeg = (svg, width, height, background) =>
  sharp(Buffer.from(svg))
    .resize(width, height, { fit: 'fill', kernel: sharp.kernel.lanczos3 })
    .flatten({ background })
    .jpeg({ quality: 88, chromaSubsampling: '4:4:4', mozjpeg: false })
    .toBuffer();

const renderPdf = async (pngBytes, brand) => {
  const document = await PDFDocument.create({ updateMetadata: false });
  document.setTitle(`${brand.name} P0 pitch one-pager`);
  document.setAuthor('AutomatedEmpires deterministic brand asset factory');
  document.setSubject(brand.copy.public);
  document.setCreator('AutomatedEmpires brand asset factory');
  document.setProducer('pdf-lib 1.17.1');
  document.setCreationDate(FIXED_PDF_DATE);
  document.setModificationDate(FIXED_PDF_DATE);

  const page = document.addPage([612, 792]);
  const embedded = await document.embedPng(pngBytes);
  const scale = Math.min(612 / embedded.width, 792 / embedded.height);
  const width = embedded.width * scale;
  const height = embedded.height * scale;
  page.drawImage(embedded, {
    x: (612 - width) / 2,
    y: (792 - height) / 2,
    width,
    height,
  });
  return Buffer.from(await document.save({ useObjectStreams: false }));
};

const sourceSvg = (brand, id) => {
  if (id === 'primary-logo-svg') return renderLogoSvg(brand, 'stacked');
  if (id === 'horizontal-logo-svg') return renderLogoSvg(brand, 'horizontal');
  if (id === 'icon-mark-svg') return renderIconSvg(brand);
  if (id === 'favicon-svg') return renderIconSvg(brand, { width: 512, height: 512 });
  throw new Error(`No SVG source for ${id}`);
};

const pngSvg = (brand, id) => {
  if (id === 'primary-logo-png') return renderLogoSvg(brand, 'stacked');
  if (id === 'horizontal-logo-png') return renderLogoSvg(brand, 'horizontal');
  if (id === 'icon-mark-png' || /^favicon-(?:16|32|48)-png$/.test(id)) {
    return renderIconSvg(brand);
  }
  if (/^(?:apple-touch-icon|icon-192|icon-512)-png$/.test(id)) {
    return renderIconSvg(brand, { background: brand.palette[2].hex });
  }
  if (id === 'app-icon-png') return renderLayoutSvg(brand, 'app-icon', 1024, 1024);
  if (id === 'social-profile-png') {
    return renderLayoutSvg(brand, 'social-profile', 1080, 1080);
  }
  if (id === 'facebook-cover-png') {
    return renderLayoutSvg(brand, 'facebook-cover-master', 1640, 924);
  }
  if (id === 'open-graph-png') return renderLayoutSvg(brand, 'open-graph', 1200, 630);
  if (id === 'email-header-png') return renderLayoutSvg(brand, 'email-header', 1200, 400);
  if (id === 'pitch-one-pager-png') {
    return renderLayoutSvg(brand, 'pitch-one-pager', 1080, 1350);
  }
  if (id === 'brand-board-png') return renderLayoutSvg(brand, 'brand-board', 1920, 1080);
  throw new Error(`No PNG layout for ${id}`);
};

const jpegSvg = (brand, id) => {
  if (id === 'facebook-cover-jpg') {
    return renderLayoutSvg(brand, 'facebook-cover-optimized', 851, 315);
  }
  if (id === 'open-graph-jpg') return renderLayoutSvg(brand, 'open-graph', 1200, 630);
  if (id === 'email-header-jpg') return renderLayoutSvg(brand, 'email-header', 1200, 400);
  throw new Error(`No JPEG layout for ${id}`);
};

const buildReadme = (brand, records) => {
  const lines = [
    `# ${brand.fullName} P0 brand asset pack`,
    '',
    '## Status',
    '',
    'P0 concept. Founder refinement, trademark review, and relevant legal/compliance review remain required before adoption.',
    '',
    '## Provenance',
    '',
    'Original deterministic SVG geometry and live text rendered locally with Sharp and pdf-lib. No external imagery, remote font files, templates, stock assets, or third-party marks are embedded.',
    '',
    '## Limitations',
    '',
    ...brand.legalNotes.map((note) => `- ${note}`),
    '',
    '## Direction',
    '',
    `- Mark: ${brand.mark}`,
    `- Approved public copy: ${brand.copy.public}`,
    `- Imagery: ${brand.imagery}`,
    '',
    '## Palette',
    '',
    '| Color | Hex |',
    '| --- | --- |',
    ...brand.palette.map(({ name, hex }) => `| ${name} | \`${hex}\` |`),
    '',
    '## Typography',
    '',
    `- Primary direction: ${brand.type.primary}`,
    `- Secondary direction: ${brand.type.secondary}`,
    `- Local deterministic fallback: ${brand.type.fallback}`,
    '- Recommended families are design direction only; this pack embeds no font files.',
    '',
    '## Do',
    '',
    ...brand.dos.map((instruction) => `- ${instruction}`),
    '',
    "## Don't",
    '',
    ...brand.donts.map((instruction) => `- ${instruction}`),
    '',
    '## Asset inventory',
    '',
    '| Path | Role | Format | Dimensions | Alpha | SHA-256 |',
    '| --- | --- | --- | --- | --- | --- |',
    ...records.map(
      (record) =>
        `| \`${record.path}\` | ${record.role} | ${record.format} | ${record.width} × ${record.height} | ${record.alpha ? 'yes' : 'no'} | \`${record.sha256}\` |`,
    ),
    '',
  ];
  return lines.join('\n');
};

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

/**
 * Render all required files for one approved brand.
 * @param {import('./brand-data.mjs').Brand} brand
 * @param {string} outputRoot
 * @returns {Promise<object[]>}
 */
export const renderBrand = async (brand, outputRoot) => {
  const brandRoot = join(outputRoot, brand.slug);
  await rm(brandRoot, { recursive: true, force: true });
  await mkdir(brandRoot, { recursive: true });

  const generated = new Map();
  const records = [];
  for (const requirement of ASSET_REQUIREMENTS) {
    let buffer;
    if (requirement.format === 'svg') {
      buffer = Buffer.from(sourceSvg(brand, requirement.id));
    } else if (requirement.format === 'png') {
      const opaque = !requirement.alpha;
      buffer = await renderPng(
        pngSvg(brand, requirement.id),
        requirement.width,
        requirement.height,
        opaque,
        brand.palette[2].hex,
      );
    } else if (requirement.format === 'jpg') {
      buffer = await renderJpeg(
        jpegSvg(brand, requirement.id),
        requirement.width,
        requirement.height,
        brand.palette[2].hex,
      );
    } else if (requirement.format === 'ico') {
      const sizes = [16, 32, 48];
      buffer = buildIco(
        sizes.map((size) => ({
          width: size,
          height: size,
          data: generated.get(`exports/favicon/favicon-${size}.png`),
        })),
      );
    } else if (requirement.format === 'pdf') {
      buffer = await renderPdf(
        generated.get('exports/pitch-one-pager/pitch-one-pager.png'),
        brand,
      );
    } else {
      throw new Error(`Unsupported asset format: ${requirement.format}`);
    }

    const destination = join(brandRoot, ...requirement.relativePath.split('/'));
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, buffer);
    generated.set(requirement.relativePath, buffer);
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
        'Original deterministic SVG geometry and text rendered locally; no external imagery or font URLs.',
      status: 'P0 concept',
      limitations: LEGAL_DISCLOSURE,
      sha256: sha256(buffer),
    });
  }

  await writeFile(join(brandRoot, 'README.md'), buildReadme(brand, records));
  return records;
};

const run = async () => {
  const toolsDirectory = dirname(fileURLToPath(import.meta.url));
  const outputRoot = resolve(toolsDirectory, '..', 'assets');
  const allRecords = [];
  for (const brand of BRANDS) {
    allRecords.push(...(await renderBrand(brand, outputRoot)));
  }
  process.stdout.write(
    `Generated ${BRANDS.length} brand packs with ${allRecords.length} tracked assets in ${outputRoot}\n`,
  );
};

const entryUrl = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : '';
if (entryUrl === import.meta.url) {
  await run();
}
