# Portfolio site audit — 2026-07-30

Audit of the public portfolio surface (`automatedempires.com`) plus the
`codex/founder-portfolio-current-state` rebuild, run across six dimensions
(content truth, design/UX/accessibility, code quality, SEO/performance, branch
reconciliation, live production) with adversarial verification.

**73 findings.** This document records the disposition of each theme. Fixes
landed on `claude/portfolio-optimize`, which is based on the rebuild branch.

## The headline finding

Production and the rebuild were both **understating the portfolio**. The
deployed site describes Explore&Earn as an unfinished "Active build" whose
status line reads *"canon still treats product truth as Notion-led"* — internal
audit shorthand rendered verbatim to the public — while the product has been
live with production payments since 2026-07-27. PinnedAtlas, a live product,
was absent from production entirely.

The rebuild fixes the internal-speak and adds PinnedAtlas, but was itself
stamped with a uniform `2026-07-21` date across nearly every venture and still
carried Explore&Earn as "Launch track / in launch preparation".

## What was fixed

### Content truth
| Venture | Was | Now |
|---|---|---|
| Explore&Earn | "Launch track", "in launch preparation", "Explore the preview" | **Live**, launch milestone dated 2026-07-29 |
| Lake & Pine | "Pilot build" ops platform promising booking, estimates, workforce ops | **Live** premium property-care business, consultation-first |
| Sweepza | "Verified promotion discovery", internal ops monitoring exposed | Official-source discovery, transparent listing states |
| LogLoads | "Direct offers and commitment lifecycle" (still in review) | Shipped scheduling work; non-broker boundary now stated |
| ORAN | Acronym never expanded | Full name rendered on the venture page |

The uniform `2026-07-21` stamps were replaced with real, individually-sourced
dates verified against each venture's own repository history.

Live product count on the home page went from 2 to 4 — it derives from stage,
so it corrected itself once the stages were true.

### Accessibility — every fix verified by computed contrast in a browser
| Surface | Before | After |
|---|---|---|
| `/build` hero copy | 1.70:1 | 6.41:1 |
| `/status`, `/company` heroes | 3.53:1 | 13.33:1 |
| Contact hero copy | 3.46:1 | 4.62:1 |
| Intent card on hover | 3.77:1 | ~7:1 (full inversion) |
| Focus ring on the founder CTA band | 1.0:1 (invisible) | Two-layer ink/paper ring |

Sub-10px labels were lifted to a 0.7rem floor, and `--muted` was darkened so
body copy on paper passes with margin rather than at 4.56:1.

### Typography
The entire display system is built on `font-weight: 900` with tight negative
tracking — requested from Arial, **which has no 900 weight**. Browsers were
substituting Bold 700, so the compressed cut the layout is designed around
never actually rendered; on Android neither Arial nor Georgia exists at all.
Archivo (400/500/800/900) and Fraunces italic are now loaded through
`next/font`, and the tightest display line-heights were opened up.

### Share and discovery surface
Every subpage rendered the **homepage's** OG and Twitter card — `/company`'s
`og:url` literally pointed at the homepage, contradicting its own canonical.
All page metadata now flows through one `pageMetadata()` helper. Added:

- Per-venture OG images (branded with each venture's palette, name, stage)
- Favicon and apple-icon (the site had none — generic icon in every tab and SERP)
- `founder` and `WebSite` JSON-LD; positioned homepage title
- Real sitemap `lastModified` dates instead of build-time-for-everything
- Security headers (XFO, nosniff, Referrer-Policy, Permissions-Policy)
- `/status` linked from the footer (it was in the sitemap but reachable from nowhere)

### Cleanup
`next` 15.5.19 → 15.5.21 (security patch — 4 High + 5 Moderate advisories).
Removed: the Tailwind toolchain (installed but completely inert — zero
`@tailwind` directives), the unimported `Hero.tsx` / `Nav.tsx` (off-brand copy,
hash links to anchors on no page), the unused `motion` dependency, the ignored
`.eslintrc.json`, and `sentry.client.config.ts`.

## Open items for founder decision

1. **Lake & Pine positioning is a genuine strategic fork.** The repo canon
   describes an ops platform; founder direction is a local lead-capture
   business; the live site is consultative with no online payment. The page now
   describes what a visitor actually finds — honest under either resolution —
   but the underlying fork is still unresolved.

2. **Live products are shown as fabricated CSS mockups.** `public/evidence/`
   holds real assets only for Explore&Earn and LogLoads. Sweepza and
   PinnedAtlas — the shipped products with real customer domains — are drawn as
   invented compositions. Real screenshots would invert this correctly.

3. **Browser error capture is off.** `sentry.client.config.ts` was dead code and
   was removed rather than left implying coverage. Enabling it needs an
   `instrumentation-client.ts`, which pulls ~80KB into every page of an
   otherwise almost-JS-free static site. Worth doing deliberately or not at all.

4. **`codex/brand-asset-foundation` holds unique brand assets** (favicons,
   logos, OG art for all nine entities) and was never opened as a PR. The icons
   added here are a typographic placeholder; those assets would supersede them.

5. **Public GitHub source links** expose the full production source of live
   commercial products. Intentional or not, it is worth a decision.

## Branch dispositions

| Branch | Verdict |
|---|---|
| `codex/founder-portfolio-current-state` | Clean superset of main — the base for this work |
| `dependabot/.../next-15.5.21` | Superseded (patch applied here) |
| `codex/brand-asset-foundation` | Unique brand assets, never PR'd — extract |
| `agent/meta-social-setup-system` (#15) | Clean docs-only, merge as-is |
| `agent/docs-operating-standards` (#16) | Unique AGENTS.md content; conflict note is stale (now 3 files) |
| `agent/align-venture-operating-definitions` (#18) | Superseded by main's #19 — close |
| `feat/signature-experience` | Superseded by the rebuild |
| `docs/canon-alignment`, `align/ci-runtime` | PRs already closed — delete refs |
| `codex/production-portfolio-redesign` (local) | Points exactly at main — delete |

## Verification

`pnpm typecheck`, `pnpm lint --max-warnings=0`, and `pnpm build` all pass. The
build produces 33 fully static routes. Contrast ratios above were measured in a
live browser against computed styles, not estimated.

Three adversarial verifier agents did not complete (usage limit), so the
design/a11y, content-truth, and branch findings carry the auditors' own
confidence rather than an independent second pass. Every fix applied was
verified directly against the running site or the build.
