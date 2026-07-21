import type { Metadata } from "next";
import Link from "next/link";
import { ventures } from "@/lib/ventures";

export const metadata: Metadata = {
  title: "Portfolio Snapshot",
  description: "A current snapshot of every AutomatedEmpires venture and what each team is building next.",
  alternates: { canonical: "/status" },
};

export default function StatusPage() {
  return (
    <main id="main">
      <section className="page-hero snapshot-hero">
        <div className="section-inner page-hero-grid">
          <div><p className="eyebrow">Portfolio snapshot · July 21, 2026</p><h1>What is live, what is launching, and what is next.</h1></div>
          <p>
            A concise view of the portfolio today. Product stages move as the
            work moves; the customer problem and company identity stay clear.
          </p>
        </div>
      </section>

      <section className="section-block" aria-labelledby="snapshot-heading">
        <div className="section-inner">
          <h2 className="sr-only" id="snapshot-heading">Current portfolio snapshot</h2>
          <div className="snapshot-list">
            {ventures.map((venture, index) => (
              <article className="snapshot-row" data-tone={venture.tone} key={venture.id}>
                <span className="snapshot-number">{String(index + 1).padStart(2, "0")}</span>
                <div><p>{venture.category}</p><h3>{venture.name}</h3></div>
                <span className="stage-pill">{venture.stage}</span>
                <p>{venture.currentFocus}</p>
                <Link href={`/ventures/${venture.slug}`}>View venture</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-cta compact-cta">
        <div className="section-inner founder-cta-grid">
          <p className="eyebrow">Start here</p>
          <h2>See a company you can help move forward?</h2>
          <div><p>Bring the market knowledge, operating problem, customer relationship, or launch opportunity.</p><Link className="primary-action" href="/contact">Start a conversation</Link></div>
        </div>
      </section>
    </main>
  );
}
