import Link from "next/link";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Capabilities",
  description:
    "The reusable systems behind the AutomatedEmpires portfolio — marketplaces, payments rails, geographic products, and truth-enforcing engineering practice, each verified in a live product.",
  path: "/capabilities",
});

// Every capability below names the shipped, checkable system that proves it.
// Nothing here is aspirational; if a venture page can't evidence it, it isn't listed.
const capabilities = [
  {
    title: "Marketplace systems",
    proof:
      "Four distinct two-sided marketplaces are built and deployed: seasonal work (Explore&Earn, live), promotion discovery (Sweepza, live), forestry logistics (LogLoads, pre-launch), and temporary vendor space (BidSpace, built end-to-end in test). Each has real listing, application or bidding, and moderation workflows — not shared boilerplate.",
  },
  {
    title: "Payments engineering, activated honestly",
    proof:
      "Subscription and marketplace billing is implemented across five ventures — checkout, portals, metered plans, settlement loops — and every one is deliberately gated until its activation checklist proves the money path with a real account. No venture claims revenue it has not taken.",
  },
  {
    title: "Geographic and mapping products",
    proof:
      "PinnedAtlas serves 228 real destinations from a PostGIS layer with hourly live-conditions scoring; ORAN matches people to verified services by need, eligibility, and location; LogLoads and BidSpace carry route and site geography as first-class product objects.",
  },
  {
    title: "Trust, provenance, and verification mechanics",
    proof:
      "ORAN records carry source provenance, verification timestamps, and confidence scores with automated freshness and regression scans. Sweepza links every promotion to its official source and labels what is self-reported. Explore&Earn gates listings on evidence like verified housing photos.",
  },
  {
    title: "AI-readable product surfaces",
    proof:
      "Explore&Earn ships llms.txt, JSON-LD, a public listings API, and a public MCP server in production — the marketplace is legible to AI agents as well as people. This portfolio site publishes its own machine-readable registry the same way.",
  },
  {
    title: "Truth-enforcing engineering practice",
    proof:
      "CI across the estate enforces honesty as much as correctness: accessibility gates, visual regression, bundle budgets, design guardrails that block unqualified trust badges, production smoke checks every six hours, and copy that must match enforcement. Several ventures' tests literally assert their own README claims.",
  },
  {
    title: "Multi-venture operating infrastructure",
    proof:
      "One control plane governs eight repositories: single-writer leases, canonical clones, secret-scanned push-verified sessions, squash-aware branch verification, and daily automated estate health checks. It exists because parallel AI-agent development broke the naive setup — and it is why this portfolio can be rebuilt with evidence.",
  },
];

const caseStudies = [
  {
    title: "Explore&Earn: from fragmented build to live production system",
    body:
      "A marketplace that had accumulated competing implementations and untrusted claims was converged, audited claim-by-claim, and taken live: production identity, payments rails built and gated behind an activation runbook, a four-wave experience redesign, and honest empty states. The launch philosophy is visible on the site itself — the feed reports exactly what hosts have published, and the billing webhook refuses to charge until the founder proves the payment account.",
    venture: "explore-and-earn",
  },
  {
    title: "LogLoads: aligning public claims with enforced reality",
    body:
      "An audit found the public site overstating driver pay and a data layer that could not support its own promises. The realignment program rebuilt the operating loop — host-stated pay only, scheduling with explicit commitment semantics, subscription billing proven in test mode behind a pilot activation ledger — and rewrote the public surface so every pricing and boundary claim matches what the code enforces.",
    venture: "logloads",
  },
  {
    title: "The estate itself: agent-governed development that holds up",
    body:
      "Running many AI agents against one portfolio produced clone sprawl, unpushed work, and competing truths. The response was infrastructure: a control plane with atomic repository leases, push-verified session finishes, content-based branch verdicts that survive squash merges, and scheduled estate health reports. The same discipline produced this site: every venture page states when it was verified and against what.",
    venture: null,
  },
];

export default function CapabilitiesPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="section-inner page-hero-grid">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h1>Systems that repeat across the portfolio.</h1>
            <p>
              Each capability below exists in at least one shipped product you
              can open. That is the standard for this page: verified in a live
              system, or it is not listed.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="capabilities-list-heading">
        <div className="section-inner">
          <h2 className="sr-only" id="capabilities-list-heading">
            Verified capabilities
          </h2>
          <div className="proof-list">
            {capabilities.map((capability, index) => (
              <article className="proof-row" key={capability.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{capability.title}</h3>
                <p>{capability.proof}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block case-section" aria-labelledby="cases-heading">
        <div className="section-inner">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Case studies</p>
              <h2 id="cases-heading">Three pieces of work worth reading closely.</h2>
            </div>
            <p>
              Written from repository history and production verification, not
              retrospective polish. Outcomes include the parts that are not
              finished.
            </p>
          </div>
          <div className="case-grid">
            {caseStudies.map((caseStudy) => (
              <article key={caseStudy.title}>
                <h3>{caseStudy.title}</h3>
                <p>{caseStudy.body}</p>
                {caseStudy.venture ? (
                  <Link className="light-action" href={`/ventures/${caseStudy.venture}`}>
                    See the venture
                  </Link>
                ) : (
                  <Link className="light-action" href="/company">
                    How the studio works
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-cta compact-cta">
        <div className="section-inner founder-cta-grid">
          <p className="eyebrow">Put it to work</p>
          <h2>These systems are looking for their operators.</h2>
          <div>
            <p>
              The portfolio&apos;s current asks — pilots, operators, partners,
              investment conversations — are published venture by venture.
            </p>
            <Link className="primary-action" href="/invest">
              See the current asks
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
