import type { Metadata } from "next";
import Link from "next/link";
import { portfolioReservations, ventures } from "@/lib/ventures";

export const metadata: Metadata = {
  title: "Portfolio Status",
  description:
    "The current evidence-backed readiness, public availability, pilot posture, and next milestone for every represented AutomatedEmpires venture.",
  alternates: {
    canonical: "/status",
  },
};

export default function StatusPage() {
  return (
    <main id="main">
      <section className="page-hero status-hero">
        <div className="section-inner narrow">
          <p className="eyebrow">Portfolio status · verified 2026-07-21</p>
          <h1>Current enough to guide a conversation. Honest enough to change.</h1>
          <p>
            This view reconciles governed repository state, GitHub main and pull
            requests, Vercel deployments, public page behavior, and founder-locked
            activation boundaries. A READY build is not treated as a launch.
          </p>
        </div>
      </section>

      <section className="section-block status-policy" aria-labelledby="status-policy">
        <div className="section-inner status-policy-grid">
          <div>
            <p className="eyebrow">Evidence policy</p>
            <h2 id="status-policy">Five labels keep the portfolio legible.</h2>
          </div>
          <div className="policy-points">
            <p><strong>Live product</strong> means the control plane and public surface agree.</p>
            <p><strong>Public preview</strong> means people can inspect it, not that operations are launched.</p>
            <p><strong>No public demo</strong> means a build may exist but no safe URL is published.</p>
            <p><strong>Repository placeholder</strong> means the name exists without a verified product.</p>
            <p><strong>Gated</strong> means code or configuration exists but activation authority does not.</p>
          </div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="venture-status-heading">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Represented ventures</p>
            <h2 id="venture-status-heading">One portfolio. Nine explicit states.</h2>
          </div>
          <div className="status-card-grid">
            {ventures.map((venture) => (
              <article className="status-card" key={venture.id}>
                <header>
                  <div>
                    <p>{venture.category}</p>
                    <h3>{venture.name}</h3>
                  </div>
                  <span>{venture.publicAvailability}</span>
                </header>
                <dl>
                  <div>
                    <dt>Build stage</dt>
                    <dd>{venture.readiness}</dd>
                  </div>
                  <div>
                    <dt>Latest verified milestone</dt>
                    <dd>{venture.milestones[0]?.title ?? venture.publicStatus}</dd>
                  </div>
                  <div>
                    <dt>Next milestone</dt>
                    <dd>{venture.nextMilestones[0]}</dd>
                  </div>
                  <div>
                    <dt>Pilot readiness</dt>
                    <dd>{venture.pilotReadiness}</dd>
                  </div>
                  <div>
                    <dt>Marketing readiness</dt>
                    <dd>{venture.marketingReadiness}</dd>
                  </div>
                </dl>
                <footer>
                  <Link className="text-link" href={`/ventures/${venture.slug}`}>
                    Read full evidence
                  </Link>
                  {venture.website ? (
                    <a href={venture.website} rel="noreferrer" target="_blank">
                      {venture.publicAvailability === "Live product"
                        ? "Open live product"
                        : "Open preview"}
                    </a>
                  ) : null}
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block reservation-section" aria-labelledby="reservations-heading">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Additional portfolio inventory</p>
            <h2 id="reservations-heading">Reserved names and brand systems are not promoted into products.</h2>
            <p>
              These records leave room for future updates without inventing a
              market, user, runtime, or launch that does not exist.
            </p>
          </div>
          <div className="reservation-grid">
            {portfolioReservations.map((reservation) => (
              <article key={reservation.name}>
                <h3>{reservation.name}</h3>
                <p>{reservation.status}</p>
                <small>{reservation.evidence}</small>
                {reservation.href ? (
                  <a href={reservation.href} rel="noreferrer" target="_blank">
                    Open public evidence
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="boundary-section" aria-labelledby="portfolio-domain-state">
        <div className="section-inner case-grid">
          <div>
            <p className="eyebrow">Current portfolio domain state</p>
            <h2 id="portfolio-domain-state">The application is ready before the domain is cut over.</h2>
          </div>
          <div>
            <p>
              automatedempires.com still serves a GoDaddy “Launching Soon” page.
              The governed application is currently public at
              automatedempires.vercel.app. DNS cutover is intentionally outside
              this code-only update.
            </p>
            <Link className="primary-action compact" href="/contact">
              Ask about a venture
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
