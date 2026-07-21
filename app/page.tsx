import Link from "next/link";
import { SystemsCanvas } from "@/components/SystemsCanvas";
import { VentureCard } from "@/components/VentureCard";
import { VentureVisual } from "@/components/VentureVisual";
import { portfolioUpdates } from "@/lib/build-log";
import { featuredVentures, getVenture, labVentures } from "@/lib/ventures";

export default function Home() {
  const oran = getVenture("oran");

  return (
    <main id="main">
      <section className="home-hero">
        <div className="section-inner home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow">Founder-led venture company</p>
            <h1>
              Companies for the <em>real world.</em>
            </h1>
            <p className="home-hero-lead">
              We build focused products for work, travel, logistics, local
              services, marketplaces, and civic access—the places where better
              software changes what people can actually do.
            </p>
            <div className="hero-actions">
              <Link className="primary-action" href="/ventures">
                Explore the portfolio
              </Link>
              <Link className="secondary-action" href="/contact">
                Talk to the founder
              </Link>
            </div>
          </div>
          <SystemsCanvas />
        </div>
      </section>

      <section className="portfolio-facts" aria-label="Portfolio facts">
        <div className="section-inner portfolio-facts-grid">
          <div><strong>09</strong><span>ventures represented</span></div>
          <div><strong>02</strong><span>live consumer products</span></div>
          <div><strong>05</strong><span>products on the build floor</span></div>
          <div><strong>01</strong><span>operating company behind it all</span></div>
        </div>
      </section>

      <section className="section-block portfolio-section" aria-labelledby="portfolio-heading">
        <div className="section-inner">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">The portfolio</p>
              <h2 id="portfolio-heading">One company. Several hard problems worth solving.</h2>
            </div>
            <p>
              Each venture has its own market, product logic, and identity. What
              they share is a bias toward useful software, visible progress, and
              work that holds up outside a pitch deck.
            </p>
          </div>
          <div className="venture-grid">
            {featuredVentures.map((venture) => (
              <VentureCard key={venture.id} venture={venture} />
            ))}
          </div>
          <div className="lab-line">
            <span>Also in the studio lab</span>
            {labVentures.map((venture) => (
              <Link href={`/ventures/${venture.slug}`} key={venture.id}>{venture.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {oran ? (
        <section className="mission-feature" aria-labelledby="oran-heading">
          <div className="section-inner mission-feature-grid">
            <div className="mission-feature-copy">
              <p className="eyebrow">Mission-built</p>
              <h2 id="oran-heading">Finding help should begin with being understood.</h2>
              <p>
                ORAN is civic resource navigation built around a simple idea: a
                person should be able to explain what is happening and quickly
                reach a verified next step that fits their need, location, and
                eligibility.
              </p>
              <Link className="light-action" href="/ventures/oran">Meet ORAN</Link>
            </div>
            <VentureVisual venture={oran} compact />
          </div>
        </section>
      ) : null}

      <section className="section-block updates-section" aria-labelledby="updates-heading">
        <div className="section-inner">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Latest momentum</p>
              <h2 id="updates-heading">What moved this week.</h2>
            </div>
            <p>
              A current view of product progress across the portfolio, updated
              July 21, 2026.
            </p>
          </div>
          <div className="update-grid">
            {portfolioUpdates.slice(0, 6).map((update) => (
              <article className="update-card" key={`${update.venture}-${update.title}`}>
                <div><span>{update.venture}</span><time dateTime={update.date}>{update.date}</time></div>
                <h3>{update.title}</h3>
                <p>{update.summary}</p>
                <Link href="/build">Read portfolio updates</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-cta">
        <div className="section-inner founder-cta-grid">
          <p className="eyebrow">Built from operations outward</p>
          <h2>Software gets better when the builder understands the work.</h2>
          <div>
            <p>
              AutomatedEmpires is led by Jackson Cole—a product builder and
              operator shaped by machinery, maintenance, construction,
              logistics, field coordination, and the systems people create when
              the official process is not good enough.
            </p>
            <Link className="primary-action" href="/founder">Founder story</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
