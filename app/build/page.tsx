import type { Metadata } from "next";
import { portfolioUpdates } from "@/lib/build-log";

export const metadata: Metadata = {
  title: "Updates",
  description: "The latest product progress across the AutomatedEmpires portfolio.",
  alternates: { canonical: "/build" },
};

export default function BuildPage() {
  return (
    <main id="main">
      <section className="page-hero updates-page-hero">
        <div className="section-inner page-hero-grid">
          <div><p className="eyebrow">Portfolio updates</p><h1>The work is moving. Here is what changed.</h1></div>
          <p>
            Product progress across AutomatedEmpires, written for the people who
            use, partner with, and believe in these companies—not for a commit log.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <div className="updates-timeline">
            {portfolioUpdates.map((update, index) => (
              <article className="updates-timeline-item" key={`${update.venture}-${update.title}`}>
                <div className="update-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="update-meta"><span>{update.venture}</span><time dateTime={update.date}>{update.date}</time></div>
                <div><h2>{update.title}</h2><p>{update.summary}</p></div>
                <a href={update.href} rel="noreferrer" target="_blank">{update.status}<span aria-hidden="true"> ↗</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
