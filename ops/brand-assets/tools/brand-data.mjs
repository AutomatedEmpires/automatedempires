/**
 * @typedef {object} Brand
 * @property {string} slug
 * @property {string} name
 * @property {string} fullName
 * @property {string} mark
 * @property {{name: string, hex: string}[]} palette
 * @property {{primary: string, secondary: string, fallback: string}} type
 * @property {{public: string, internal: string}} copy
 * @property {string} imagery
 * @property {string[]} dos
 * @property {string[]} donts
 * @property {string[]} legalNotes
 */

/**
 * @typedef {object} AssetRequirement
 * @property {string} id
 * @property {string} relativePath
 * @property {'svg'|'png'|'jpg'|'ico'|'pdf'} format
 * @property {number} width
 * @property {number} height
 * @property {boolean} alpha
 * @property {string} role
 */

const deepFreeze = (value) => {
  if (value && typeof value === 'object' && !Object.isFrozen(value)) {
    for (const child of Object.values(value)) {
      deepFreeze(child);
    }
    Object.freeze(value);
  }
  return value;
};

export const LEGAL_DISCLOSURE =
  'Every asset is a P0 concept: not trademark cleared, not a final UI palette, not legal/compliance approved, and requires founder refinement before final adoption.';

const brand = (definition) =>
  deepFreeze({
    ...definition,
    legalNotes: [LEGAL_DISCLOSURE, ...(definition.legalNotes ?? [])],
  });

/** @type {readonly Brand[]} */
export const BRANDS = deepFreeze([
  brand({
    slug: 'automatedempires',
    name: 'AutomatedEmpires',
    fullName: 'AutomatedEmpires',
    mark: 'Three interlocking right-angle rails forming a central command path.',
    palette: [
      { name: 'Command Ink', hex: '#161A1D' },
      { name: 'Steel', hex: '#5F6B73' },
      { name: 'Mist', hex: '#E9ECEB' },
      { name: 'Signal Brass', hex: '#B58A3A' },
    ],
    type: {
      primary: 'Inter Tight',
      secondary: 'IBM Plex Mono',
      fallback: 'Arial, sans-serif',
    },
    copy: {
      public: 'We build systems that turn durable ideas into operating ventures.',
      internal: 'We build systems that turn durable ideas into operating ventures.',
    },
    imagery:
      'Architectural systems, engineered materials, restrained command-center views, and real operators.',
    dos: ['Use disciplined modular geometry and whitespace.'],
    donts: [
      'Do not use robots, circuit brains, crowns, eagles, conquest maps, or imperial symbolism.',
    ],
  }),
  brand({
    slug: 'explore-and-earn',
    name: 'Explore&Earn',
    fullName: 'Explore&Earn',
    mark: 'Two offset contour lines forming an open trail and a subtle forward E.',
    palette: [
      { name: 'Trail Pine', hex: '#20362F' },
      { name: 'Alpine Gray', hex: '#6F8176' },
      { name: 'Sand', hex: '#E8E1D3' },
      { name: 'Camp Amber', hex: '#C98245' },
    ],
    type: {
      primary: 'Manrope',
      secondary: 'Source Serif 4',
      fallback: 'Arial, sans-serif',
    },
    copy: {
      public: 'Go farther. Earn along the way.',
      internal: 'Go farther. Earn along the way.',
    },
    imagery:
      'Documentary work-travel, human-scale landscapes, practical gear, and real destinations.',
    dos: ['Balance aspiration with credible human activity.'],
    donts: [
      'Do not use cartoon badges, coins, money trails, influencer poses, or generic SaaS gradients.',
    ],
  }),
  brand({
    slug: 'sweepza',
    name: 'Sweepza',
    fullName: 'Sweepza',
    mark: 'Two nested sweep arcs resolving into one verification dot.',
    palette: [
      { name: 'Clean Ink', hex: '#172126' },
      { name: 'Slate', hex: '#6B7880' },
      { name: 'Frost', hex: '#EEF4F3' },
      { name: 'Process Teal', hex: '#2A8A7E' },
    ],
    type: {
      primary: 'Plus Jakarta Sans',
      secondary: 'Inter',
      fallback: 'Arial, sans-serif',
    },
    copy: {
      public:
        'Giveaway campaign tools for businesses. Compliance review and vendor onboarding in progress.',
      internal: 'Giveaways, run cleanly.',
    },
    imagery:
      'Organized products, genuine recipients, crisp tabletop compositions, and restrained celebration.',
    dos: [
      'Emphasize B2B campaign infrastructure, process clarity, and traceable steps.',
    ],
    donts: [
      'Do not use visual badges, seals, certification marks, roulette, slots, jackpots, lottery motifs, cash rain, casino neon, or claims of legal approval, guaranteed legality, or fairness.',
    ],
    legalNotes: [
      'Requires trademark and promotion-law review; copy cannot promise legality, fairness, eligibility, or compliance.',
    ],
  }),
  brand({
    slug: 'logloads',
    name: 'LogLoads',
    fullName: 'LogLoads',
    mark: 'Two abstract log-end circles secured by one horizontal route bar.',
    palette: [
      { name: 'Bark', hex: '#26231F' },
      { name: 'Iron', hex: '#6F685D' },
      { name: 'Kraft', hex: '#D8CCB8' },
      { name: 'Working Moss', hex: '#64725A' },
    ],
    type: {
      primary: 'Roboto Slab',
      secondary: 'Source Sans 3',
      fallback: 'Arial, sans-serif',
    },
    copy: {
      public: 'Move timber with fewer loose ends.',
      internal: 'Move timber with fewer loose ends.',
    },
    imagery:
      'Documentary forestry operations, equipment in use, timber textures, route details, and real crews using safe practices.',
    dos: ['Prioritize function and legibility.'],
    donts: [
      'Do not use cartoon trucks, lumberjack mascots, smiling logs, unsafe work, or excessive hazard striping.',
    ],
  }),
  brand({
    slug: 'bidspace',
    name: 'BidSpace',
    fullName: 'BidSpace',
    mark:
      'Two opposing bracket planes creating an open transaction window and a negative-space B.',
    palette: [
      { name: 'Market Ink', hex: '#1E2428' },
      { name: 'Ledger Blue', hex: '#596A75' },
      { name: 'Auction Ivory', hex: '#F3F0E8' },
      { name: 'Copper', hex: '#B56C45' },
    ],
    type: {
      primary: 'IBM Plex Sans',
      secondary: 'IBM Plex Mono',
      fallback: 'Arial, sans-serif',
    },
    copy: {
      public: 'A clearer place to bid and sell.',
      internal: 'A clearer place to bid and sell.',
    },
    imagery:
      'Real goods and equipment, inspection details, orderly lots, and clean catalog framing.',
    dos: ['Make hierarchy and transactional states obvious.'],
    donts: [
      'Do not use gavels, dollar signs, handshake clichés, shouting auctioneers, or dark luxury-fintech styling.',
    ],
  }),
  brand({
    slug: 'lake-and-pine',
    name: 'Lake & Pine',
    fullName: 'Lake & Pine',
    mark: 'One continuous lake line folding upward into a minimal pine chevron.',
    palette: [
      { name: 'Deep Pine', hex: '#24332D' },
      { name: 'Lake Gray', hex: '#728889' },
      { name: 'Fog', hex: '#EDF0EC' },
      { name: 'Shore Sand', hex: '#C7B89D' },
    ],
    type: {
      primary: 'DM Sans',
      secondary: 'Lora',
      fallback: 'Arial, sans-serif',
    },
    copy: {
      public: 'Local work, handled with care.',
      internal: 'Local work, handled with care.',
    },
    imagery:
      'Real local environments, hands-on service work, clean homes or properties, and soft natural light.',
    dos: ['Show quiet competence and lived-in places.'],
    donts: [
      'Do not create a generic pine badge or drift into resort, spa, cabin-rental, or luxury-lodge language.',
    ],
  }),
  brand({
    slug: 'oran',
    name: 'ORAN',
    fullName: 'ORAN',
    mark: 'Four equal civic tiles arranged around an open public square.',
    palette: [
      { name: 'Civic Navy', hex: '#20313A' },
      { name: 'Public Slate', hex: '#6E7F86' },
      { name: 'Paper', hex: '#F1F3F0' },
      { name: 'Wayfinding Amber', hex: '#C78B3B' },
    ],
    type: {
      primary: 'Public Sans',
      secondary: 'Source Serif 4',
      fallback: 'Arial, sans-serif',
    },
    copy: {
      public: 'Public systems, made easier to understand.',
      internal: 'Public systems, made easier to understand.',
    },
    imagery:
      'Libraries, transit nodes, sidewalks, public wayfinding, community spaces, and ordinary civic life.',
    dos: ['Use plain language, accessible hierarchy, and inclusive depictions.'],
    donts: [
      'Do not use flags, party colors, campaign imagery, podiums, seals, crests, or advice or affiliation implications.',
    ],
    legalNotes: [
      'Requires the highest-priority naming review because the acronym is crowded, including established O-RAN telecom usage.',
    ],
  }),
  brand({
    slug: 'komfort-killz',
    name: 'Komfort Killz',
    fullName: 'Komfort Killz',
    mark: 'A soft rounded K interrupted by one precise hard diagonal.',
    palette: [
      { name: 'Near Black', hex: '#181719' },
      { name: 'Smoke', hex: '#757177' },
      { name: 'Bone', hex: '#ECE7DF' },
      { name: 'Electric Plum', hex: '#8B5B7C' },
    ],
    type: {
      primary: 'Space Grotesk',
      secondary: 'IBM Plex Mono',
      fallback: 'Arial, sans-serif',
    },
    copy: {
      public: 'Comfort is where the story starts.',
      internal: 'Comfort is where the story starts.',
    },
    imagery:
      'High-contrast editorial photography, domestic details, tactile materials, flash-lit objects, and composed visual tension.',
    dos: ['Create edge through wit, contrast, and typography.'],
    donts: [
      'Do not use guns, blades, blood, skulls, targets, gore, hate, harassment, crime, or dangerous-behavior glorification.',
    ],
    legalNotes: [
      'Requires platform-policy, advertising, merchandising, and reputational review because the violent reading remains possible.',
    ],
  }),
  brand({
    slug: 'just-jesus-bro',
    name: 'Just Jesus Bro',
    fullName: 'Just Jesus Bro',
    mark:
      'Two conversation brackets surrounding a short upright stroke, suggesting dialogue, presence, and an open doorway without a literal crucifix.',
    palette: [
      { name: 'Humble Ink', hex: '#222422' },
      { name: 'Stone', hex: '#77786F' },
      { name: 'Warm Paper', hex: '#F3EFE6' },
      { name: 'Muted Clay', hex: '#A9795A' },
    ],
    type: {
      primary: 'Instrument Sans',
      secondary: 'Source Serif 4',
      fallback: 'Arial, sans-serif',
    },
    copy: {
      public: 'Faith, in plain language.',
      internal: 'Faith, in plain language.',
    },
    imagery:
      'Quiet documentary community, honest portraits, shared tables, everyday service, books, notes, and natural light.',
    dos: ['Sound conversational and humble; use generous whitespace.'],
    donts: [
      'Do not use clip-art crosses, fish, crowns, doves, glowing clouds, faux-script church branding, prosperity cues, or denominational endorsements.',
    ],
    legalNotes: [
      'Requires faith-media, ministry, podcast, and merchandise searches; scripture quotations require translation-specific permission review.',
    ],
  }),
]);

const asset = (id, relativePath, format, width, height, alpha, role) =>
  deepFreeze({ id, relativePath, format, width, height, alpha, role });

/** @type {readonly AssetRequirement[]} */
export const ASSET_REQUIREMENTS = deepFreeze([
  asset('primary-logo-svg', 'source/primary-logo.svg', 'svg', 1600, 1600, true, 'primary-logo'),
  asset('primary-logo-png', 'exports/logo/primary-logo.png', 'png', 1600, 1600, true, 'primary-logo'),
  asset('horizontal-logo-svg', 'source/horizontal-logo.svg', 'svg', 2400, 720, true, 'horizontal-logo'),
  asset('horizontal-logo-png', 'exports/logo/horizontal-logo.png', 'png', 2400, 720, true, 'horizontal-logo'),
  asset('icon-mark-svg', 'source/icon-mark.svg', 'svg', 1024, 1024, true, 'icon-mark'),
  asset('icon-mark-png', 'exports/logo/icon-mark.png', 'png', 1024, 1024, true, 'icon-mark'),
  asset('favicon-svg', 'exports/favicon/favicon.svg', 'svg', 512, 512, true, 'favicon'),
  asset('favicon-16-png', 'exports/favicon/favicon-16.png', 'png', 16, 16, true, 'favicon'),
  asset('favicon-32-png', 'exports/favicon/favicon-32.png', 'png', 32, 32, true, 'favicon'),
  asset('favicon-48-png', 'exports/favicon/favicon-48.png', 'png', 48, 48, true, 'favicon'),
  asset('apple-touch-icon-png', 'exports/favicon/apple-touch-icon.png', 'png', 180, 180, false, 'favicon'),
  asset('icon-192-png', 'exports/favicon/icon-192.png', 'png', 192, 192, false, 'favicon'),
  asset('icon-512-png', 'exports/favicon/icon-512.png', 'png', 512, 512, false, 'favicon'),
  asset('favicon-ico', 'exports/favicon/favicon.ico', 'ico', 48, 48, true, 'favicon'),
  asset('app-icon-png', 'exports/app-icon/app-icon.png', 'png', 1024, 1024, false, 'app-icon'),
  asset('social-profile-png', 'exports/social-profile/social-profile.png', 'png', 1080, 1080, false, 'social-profile'),
  asset('facebook-cover-png', 'exports/facebook-cover/facebook-cover.png', 'png', 1640, 924, false, 'facebook-cover'),
  asset('facebook-cover-jpg', 'exports/facebook-cover/facebook-cover.jpg', 'jpg', 851, 315, false, 'facebook-cover'),
  asset('open-graph-png', 'exports/open-graph/open-graph.png', 'png', 1200, 630, false, 'open-graph'),
  asset('open-graph-jpg', 'exports/open-graph/open-graph.jpg', 'jpg', 1200, 630, false, 'open-graph'),
  asset('email-header-png', 'exports/email-header/email-header.png', 'png', 1200, 400, false, 'email-header'),
  asset('email-header-jpg', 'exports/email-header/email-header.jpg', 'jpg', 1200, 400, false, 'email-header'),
  asset('pitch-one-pager-png', 'exports/pitch-one-pager/pitch-one-pager.png', 'png', 1080, 1350, false, 'pitch-one-pager'),
  asset('pitch-one-pager-pdf', 'exports/pitch-one-pager/pitch-one-pager.pdf', 'pdf', 612, 792, false, 'pitch-one-pager'),
  asset('brand-board-png', 'preview/brand-board.png', 'png', 1920, 1080, false, 'brand-board'),
]);

const brandsBySlug = new Map(BRANDS.map((entry) => [entry.slug, entry]));

/**
 * Return one approved brand direction by its lowercase slug.
 * @param {string} slug
 * @returns {Brand}
 */
export const getBrand = (slug) => {
  const found = brandsBySlug.get(slug);
  if (!found) {
    throw new Error(`Unknown brand slug: ${slug}`);
  }
  return found;
};
