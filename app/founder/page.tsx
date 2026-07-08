import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "The founder story behind AutomatedEmpires: physical systems, operations, coordination, and the systems that should exist.",
  alternates: {
    canonical: "/founder",
  },
};

export default function FounderPage() {
  return (
    <main id="main">
      <section className="page-hero founder-hero">
        <div className="section-inner narrow">
          <p className="eyebrow">Founder</p>
          <h1>I learned systems from the physical world.</h1>
          <p>
            AutomatedEmpires comes from seeing machinery, maintenance,
            operations, remote infrastructure, coordination, and real-world
            failure up close.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner story-grid">
          <p className="story-lead">
            Physical work makes broken systems impossible to ignore.
          </p>
          <div>
            <p>
              When a process depends on the right person remembering the right
              detail at the right time, the system is not working. People
              compensate with calls, notes, spreadsheets, shortcuts, repeated
              explanations, and local memory.
            </p>
            <p>
              That pattern shows up in logistics, home services, opportunity
              discovery, commercial space, sweepstakes, and resource access. The
              industries change. The shape of the failure repeats.
            </p>
            <p>
              Now I build the systems I spent years wishing existed: products
              that make trust visible, coordination easier, opportunity easier
              to find, and operations less dependent on luck.
            </p>
            <Link className="text-link" data-analytics="founder_contact" href="/contact">
              Talk with AutomatedEmpires
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="pattern-heading">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">The pattern</p>
            <h2 id="pattern-heading">The same failure, wearing different clothes.</h2>
            <p>
              Across very different industries, the shape repeats: information is
              scattered, trust is invisible, and people compensate by hand. Each
              venture is that pattern, answered in a specific market.
            </p>
          </div>
          <div className="pattern-grid">
            {patternRows.map((row) => (
              <article className="pattern-row" key={row.slug}>
                <span className="pattern-domain">{row.domain}</span>
                <p>{row.failure}</p>
                <Link className="pattern-link" href={`/ventures/${row.slug}`}>
                  {row.venture}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="horizon-section" aria-labelledby="founder-close">
        <div className="section-inner horizon-grid">
          <div>
            <p className="eyebrow">Why a studio, not one company</p>
            <h2 id="founder-close">The instinct is portable. The markets are not.</h2>
          </div>
          <div>
            <p>
              One company would mean betting the whole instinct on a single
              market. A studio lets the same way of seeing move across logistics,
              opportunity, space, the outdoors, public help, and home services —
              and keeps the strongest engineering standards shared underneath.
            </p>
            <Link className="text-link" data-analytics="founder_ventures" href="/ventures">
              See the ecosystem it built
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const patternRows = [
  {
    domain: "Logistics",
    failure: "Loads and trucks that cannot find each other, moved by manual dispatch.",
    venture: "LogLoads",
    slug: "logloads",
  },
  {
    domain: "Opportunity",
    failure: "Work, housing, and pay scattered across boards, groups, and DMs.",
    venture: "Explore&Earn",
    slug: "explore-and-earn",
  },
  {
    domain: "Physical space",
    failure: "Commercial inventory discovered by luck, phone calls, and PDFs.",
    venture: "BidSpace",
    slug: "bidspace",
  },
  {
    domain: "The outdoors",
    failure: "Great places known only through forums and word of mouth.",
    venture: "PinnedAtlas",
    slug: "pinnedatlas",
  },
  {
    domain: "Public help",
    failure: "Resources that exist but cannot be found by the people who need them in time.",
    venture: "ORAN",
    slug: "oran",
  },
  {
    domain: "Home services",
    failure: "Trust, scheduling, and repeat quality stitched together by hand.",
    venture: "Lake & Pine",
    slug: "lake-and-pine",
  },
];
