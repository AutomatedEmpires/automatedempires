import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Studio",
  description: "How AutomatedEmpires turns fragmented real-world work into focused software companies.",
  alternates: { canonical: "/company" },
};

const principles = [
  ["Start with the work", "We study the calls, spreadsheets, workarounds, handoffs, and local knowledge holding a market together."],
  ["Build the whole loop", "A useful product connects discovery, decision, coordination, and follow-through instead of polishing one isolated screen."],
  ["Earn trust in the details", "Clear facts, thoughtful defaults, visible context, and dependable operations matter more than inflated claims."],
  ["Ship like an operator", "Products are built to run: monitored, supported, maintained, and improved from what real use teaches us."],
];

export default function CompanyPage() {
  return (
    <main id="main">
      <section className="page-hero studio-page-hero">
        <div className="section-inner page-hero-grid">
          <div><p className="eyebrow">The studio</p><h1>We turn fragmented work into focused companies.</h1></div>
          <div><p>AutomatedEmpires is a founder-led venture company. We find markets where people are compensating for weak systems, then build the product, brand, operating model, and launch path around the real work.</p><Link className="primary-action" href="/ventures">See the portfolio</Link></div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="principles-heading">
        <div className="section-inner">
          <div className="section-heading split-heading"><div><p className="eyebrow">How we build</p><h2 id="principles-heading">Product judgment with operational depth.</h2></div><p>The portfolio spans different industries, but the work starts from the same discipline: understand the system before trying to replace it.</p></div>
          <div className="principle-grid">
            {principles.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="studio-model" aria-labelledby="studio-model-heading">
        <div className="section-inner studio-model-grid">
          <div><p className="eyebrow">The model</p><h2 id="studio-model-heading">Shared leverage. Independent products.</h2></div>
          <div className="model-steps">
            <div><strong>01</strong><span>Find a market with expensive friction.</span></div>
            <div><strong>02</strong><span>Build the narrow product that changes the workflow.</span></div>
            <div><strong>03</strong><span>Prove it with the people doing the work.</span></div>
            <div><strong>04</strong><span>Turn the product into a durable company.</span></div>
          </div>
        </div>
      </section>

      <section className="founder-cta compact-cta">
        <div className="section-inner founder-cta-grid"><p className="eyebrow">Work with us</p><h2>Bring a hard problem and a reason it matters.</h2><div><p>We want conversations with customers, launch partners, operators, domain experts, investors, and exceptional builders.</p><Link className="primary-action" href="/contact">Start a conversation</Link></div></div>
      </section>
    </main>
  );
}
