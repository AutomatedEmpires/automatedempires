import type { Metadata } from "next";
import Link from "next/link";
import {
  platformProfiles,
  statusMeta,
  ventures,
  type VentureStatus,
} from "@/lib/ventures";

export const metadata: Metadata = {
  title: "Company",
  description:
    "How AutomatedEmpires operates: one repeatable method run in different markets, an honest maturity model, and a shared engineering standard across the venture portfolio.",
  alternates: {
    canonical: "/company",
  },
};

const method = [
  {
    title: "Find what is fragmented",
    detail:
      "Locate a market where information is scattered, trust is invisible, or access depends on who you know. The bigger the gap between how it works and how it should, the better.",
  },
  {
    title: "Understand who it fails",
    detail:
      "Name the specific person doing manual work to compensate — the dispatcher, the seeker, the vendor, the family looking for help. The system is designed around them, not the org chart.",
  },
  {
    title: "Build the system that should exist",
    detail:
      "The connective software: structured truth, visible trust, and the workflow that removes the manual step — built on one disciplined stack so quality is shared, not reinvented.",
  },
  {
    title: "Operate it in the open",
    detail:
      "Ship, verify against real infrastructure, and label maturity honestly. A product is only called live when it is reachable; everything else says exactly what it is.",
  },
];

const statusOrder: VentureStatus[] = ["Live", "Building", "Mission", "Concept"];

export default function CompanyPage() {
  const byStatus = statusOrder.map((status) => ({
    status,
    items: ventures.filter((venture) => venture.status === status),
  }));

  return (
    <main id="main">
      <section className="page-hero">
        <div className="section-inner narrow">
          <p className="eyebrow">Company</p>
          <h1>We build systems for markets and experiences the internet still handles badly.</h1>
          <p>
            AutomatedEmpires is an independent venture studio and operating
            company. The ventures are different because the underlying markets
            are different. The method that produces them is the same — and it is
            deliberately visible.
          </p>
        </div>
      </section>

      <section className="section-block" aria-labelledby="method-heading">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">The method</p>
            <h2 id="method-heading">One repeatable loop, run in different markets.</h2>
            <p>
              Every venture is the same four moves applied to a new market. The
              order matters: the market comes before the software, and honesty
              comes before the launch.
            </p>
          </div>
          <ol className="method-steps">
            {method.map((step, index) => (
              <li className="method-step" key={step.title}>
                <span className="method-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-block status-section" aria-labelledby="ladder-heading">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">How maturity is tracked</p>
            <h2 id="ladder-heading">Status is a design decision, not a slogan.</h2>
            <p>
              The portfolio never rounds up. Each venture carries one honest
              status, and the whole board is computed from it — so what you read
              here matches what is actually reachable today.
            </p>
          </div>
          <div className="status-board">
            {byStatus.map(({ status, items }) => (
              <article className={`status-column status-col-${status.toLowerCase()}`} key={status}>
                <header>
                  <span className="status-count">{items.length}</span>
                  <div>
                    <h3>{statusMeta[status].label}</h3>
                    <p>{statusMeta[status].blurb}</p>
                  </div>
                </header>
                <ul>
                  {items.map((venture) => (
                    <li key={venture.slug}>
                      <Link href={`/ventures/${venture.slug}`}>{venture.name}</Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="platform-heading">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">The shared platform</p>
            <h2 id="platform-heading">Consistency is what makes the next venture cheap.</h2>
            <p>
              One machine, one disciplined stack, one quality bar. Products share
              engineering standards and providers so a new venture inherits
              maturity instead of rebuilding it — while each still expresses its
              own world.
            </p>
          </div>
          <div className="profile-grid">
            {platformProfiles.map((profile) => (
              <article className="profile-card" key={profile.name}>
                <h3>{profile.name}</h3>
                <p>{profile.description}</p>
                <div className="profile-members">
                  {profile.members.map((member) => (
                    <span key={member}>{member}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="horizon-section" aria-labelledby="company-cta">
        <div className="section-inner case-grid">
          <div>
            <p className="eyebrow">Who should talk to us</p>
            <h2 id="company-cta">Investors, partners, collaborators, operators.</h2>
          </div>
          <div>
            <p>
              The right conversations are not generic. AutomatedEmpires is built
              around venture-specific opportunities, civic infrastructure,
              operating-business execution, and a founder-led build cadence.
            </p>
            <Link className="primary-action compact" data-analytics="company_contact" href="/contact">
              Start a relevant conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
