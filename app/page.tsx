import Link from "next/link";
import { SystemsCanvas } from "@/components/SystemsCanvas";
import { VentureCard } from "@/components/VentureCard";
import { VentureVisual } from "@/components/VentureVisual";
import { buildSignals } from "@/lib/build-log";
import { activeCompanies, missionSystems, operatingBusinesses, platformProfiles } from "@/lib/ventures";

export default function Home() {
  const oran = missionSystems[0];
  const lakeAndPine = operatingBusinesses[0];

  return (
    <main id="main">
      <section className="hero-section">
        <div className="section-inner hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Independent venture studio and operating company</p>
            <h1>AutomatedEmpires</h1>
            <p className="hero-statement">
              The world is full of systems that almost work.
            </p>
            <p className="hero-body">
              Different industries. Same instinct. Find what is fragmented,
              understand who it fails, and build the system that should exist.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <Link className="primary-action" data-analytics="hero_ventures" href="/ventures">
                Explore the portfolio
              </Link>
              <Link className="secondary-action" data-analytics="hero_build" href="/build">
                See what shipped
              </Link>
            </div>
          </div>
          <SystemsCanvas />
        </div>
      </section>

      <section className="thesis-band" aria-labelledby="thesis-heading">
        <div className="section-inner thesis-grid">
          <div>
            <p className="eyebrow">Company thesis</p>
            <h2 id="thesis-heading">Different industries. Same instinct.</h2>
          </div>
          <div className="manifesto-list" aria-label="AutomatedEmpires manifesto">
            <p>Find what is fragmented.</p>
            <p>Understand who it fails.</p>
            <p>Build the system that should exist.</p>
          </div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="active-heading">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Active companies</p>
            <h2 id="active-heading">Different markets, separate product physics.</h2>
            <p>
              These are not one template wearing different colors. Each product
              expresses a different world while sharing a disciplined operating
              standard.
            </p>
          </div>
          <div className="venture-grid">
            {activeCompanies.map((venture) => (
              <VentureCard key={venture.id} venture={venture} />
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section" aria-labelledby="mission-heading">
        <div className="section-inner mission-grid">
          <div>
            <p className="eyebrow">Mission system</p>
            <h2 id="mission-heading">Some systems are built because failure has a human cost.</h2>
            <p>
              ORAN is treated as civic infrastructure, not a commercial app in a
              different wrapper. It is retrieval-first, verification-led,
              crisis-aware, and intentionally Azure-first.
            </p>
            <Link className="text-link" data-analytics="home_oran" href="/ventures/oran">
              Open ORAN
            </Link>
          </div>
          <VentureVisual venture={oran} compact />
        </div>
      </section>

      <section className="section-block split-feature" aria-labelledby="operating-heading">
        <div className="section-inner split-grid">
          <VentureVisual venture={lakeAndPine} compact />
          <div>
            <p className="eyebrow">Operating business</p>
            <h2 id="operating-heading">Software judgment grounded in a real service company.</h2>
            <p>
              Lake & Pine shows the same systems instinct applied to booking,
              trust, communication, scheduling, service quality, and repeatable
              operations in the physical world.
            </p>
            <Link
              className="text-link"
              data-analytics="home_lake_and_pine"
              href="/ventures/lake-and-pine"
            >
              View Lake & Pine
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="platform-heading">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Architecture posture</p>
            <h2 id="platform-heading">Shared operating standards. Independent product profiles.</h2>
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

      <section className="build-preview" aria-labelledby="build-heading">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Build evidence</p>
            <h2 id="build-heading">Recent progress, translated out of commit syntax.</h2>
          </div>
          <div className="build-list">
            {buildSignals.slice(0, 4).map((signal) => (
              <article className="build-item" key={`${signal.venture}-${signal.title}`}>
                <time dateTime={signal.date}>{signal.date}</time>
                <div>
                  <span>{signal.venture}</span>
                  <h3>{signal.title}</h3>
                  <p>{signal.summary}</p>
                </div>
              </article>
            ))}
          </div>
          <Link className="primary-action compact" data-analytics="home_build_log" href="/build">
            Open build log
          </Link>
        </div>
      </section>

      <section className="founder-preview" aria-labelledby="founder-heading">
        <div className="section-inner founder-grid">
          <div>
            <p className="eyebrow">Founder story</p>
            <h2 id="founder-heading">I learned systems from the physical world.</h2>
          </div>
          <div>
            <p>
              Machinery, maintenance, operations, remote infrastructure, and
              real-world coordination teach a practical lesson: many
              organizations survive because people manually compensate for poor
              systems.
            </p>
            <p>
              AutomatedEmpires is the answer to that pattern: build the systems
              the work kept proving should exist.
            </p>
            <Link className="text-link" data-analytics="home_founder" href="/founder">
              Read the founder story
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
