import type { Metadata } from "next";
import { buildSignals } from "@/lib/build-log";

export const metadata: Metadata = {
  title: "Build Log",
  description:
    "A public evidence-of-shipping surface for AutomatedEmpires, translating real repository and production progress into product milestones.",
  alternates: {
    canonical: "/build",
  },
};

export default function BuildPage() {
  const ventureCount = new Set(buildSignals.map((signal) => signal.venture)).size;
  const latest = buildSignals[0]?.date;

  return (
    <main id="main">
      <section className="page-hero">
        <div className="section-inner narrow">
          <p className="eyebrow">Build log</p>
          <h1>Real progress, translated into product language.</h1>
          <p>
            This is not a raw commit dump. Each signal is grounded in repository
            history, production checks, or canonical docs, and framed by the
            actual maturity of the venture.
          </p>
          <p className="build-summary">
            <span>
              <b>{buildSignals.length}</b> recent signals
            </span>
            <span>
              across <b>{ventureCount}</b> ventures
            </span>
            {latest ? (
              <span>
                latest <b>{latest}</b>
              </span>
            ) : null}
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <div className="timeline">
            {buildSignals.map((signal) => (
              <article className="timeline-item" key={`${signal.venture}-${signal.title}`}>
                <time dateTime={signal.date}>{signal.date}</time>
                <div>
                  <span className="timeline-venture">{signal.venture}</span>
                  <h2>{signal.title}</h2>
                  <p>{signal.summary}</p>
                  <p className="proof-line">{signal.proof}</p>
                  {signal.href ? (
                    <a href={signal.href} rel="noreferrer" target="_blank">
                      Open source
                    </a>
                  ) : null}
                </div>
                <span
                  className={`build-state build-state-${signal.state
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {signal.state}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
