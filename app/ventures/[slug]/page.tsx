import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { VentureVisual } from "@/components/VentureVisual";
import { getVenture, ventures } from "@/lib/ventures";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return ventures.map((venture) => ({ slug: venture.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const venture = getVenture(slug);

  if (!venture) {
    return {
      title: "Venture not found",
    };
  }

  return {
    title: venture.name,
    description: venture.thesis,
    alternates: {
      canonical: `/ventures/${venture.slug}`,
    },
    openGraph: {
      title: `${venture.name} | AutomatedEmpires`,
      description: venture.thesis,
      url: `/ventures/${venture.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${venture.name} | AutomatedEmpires`,
      description: venture.thesis,
    },
  };
}

export default async function VenturePage({ params }: PageProps) {
  const { slug } = await params;
  const venture = getVenture(slug);

  if (!venture) {
    notFound();
  }

  const style = {
    "--venture-accent": venture.palette.accent,
    "--venture-base": venture.palette.base,
    "--venture-support": venture.palette.support,
    "--venture-wash": venture.palette.wash,
  } as CSSProperties;

  return (
    <main id="main" style={style}>
      <section className="venture-hero">
        <div className="section-inner venture-hero-grid">
          <div>
            <p className="eyebrow">{venture.category}</p>
            <h1>{venture.name}</h1>
            <p className="hero-statement">{venture.humanTruth}</p>
            <p className="hero-body">{venture.thesis}</p>
            <div className="hero-actions">
              {venture.website ? (
                <a
                  className="primary-action"
                  data-analytics={`visit_${venture.slug}`}
                  href={venture.website}
                  rel="noreferrer"
                  target="_blank"
                >
                  {venture.publicAvailability === "Live product"
                    ? "Open live product"
                    : "Open public preview"}
                </a>
              ) : null}
              {venture.repository ? (
                <a
                  className="secondary-action"
                  data-analytics={`repo_${venture.slug}`}
                  href={venture.repository}
                  rel="noreferrer"
                  target="_blank"
                >
                  Source proof
                </a>
              ) : null}
            </div>
          </div>
          <VentureVisual venture={venture} />
        </div>
      </section>

      <section className="readiness-band" aria-label={`${venture.name} current readiness`}>
        <div className="section-inner readiness-grid">
          <ReadinessBlock label="Build stage" value={venture.readiness} />
          <ReadinessBlock label="Public access" value={venture.publicAvailability} />
          <ReadinessBlock label="Pilot" value={venture.pilotReadiness} />
          <ReadinessBlock
            label={`Verified ${venture.verifiedAt}`}
            value={venture.verifiedRevision?.label ?? "Repository placeholder state"}
          />
        </div>
      </section>

      <section className="case-section" aria-labelledby="broken-system">
        <div className="section-inner case-grid">
          <div>
            <p className="eyebrow">Broken system</p>
            <h2 id="broken-system">What this market makes people do manually.</h2>
          </div>
          <p>{venture.problem}</p>
        </div>
      </section>

      <section className="case-section reveal-section" aria-labelledby="product-system">
        <div className="section-inner case-grid">
          <div>
            <p className="eyebrow">The system</p>
            <h2 id="product-system">What AutomatedEmpires is building.</h2>
          </div>
          <p>{venture.system}</p>
        </div>
      </section>

      <section className="case-section" aria-labelledby="core-workflows">
        <div className="section-inner case-grid">
          <div>
            <p className="eyebrow">Core workflows</p>
            <h2 id="core-workflows">What people can do, or what the approved product is designed to support.</h2>
          </div>
          <ul className="detail-list">
            {venture.coreWorkflows.map((workflow) => (
              <li key={workflow}>{workflow}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="case-section capability-section" aria-labelledby="capability-state">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Capability state</p>
            <h2 id="capability-state">Implemented and pending stay visibly separate.</h2>
          </div>
          <div className="detail-list-grid">
            <ListBlock
              label="Completed or verified on main"
              items={venture.completedCapabilities}
              tone="complete"
            />
            <ListBlock
              label="Pending, gated, or unmerged"
              items={venture.pendingCapabilities}
              tone="pending"
            />
          </div>
        </div>
      </section>

      <section className="case-section" aria-labelledby="system-model">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Model</p>
            <h2 id="system-model">Market, system, data, business, horizon.</h2>
          </div>
          <div className="model-grid">
            <ModelBlock label="Market" text={venture.problem} />
            <ModelBlock label="System" text={venture.system} />
            <ModelBlock label="Data or advantage" text={venture.dataAdvantage} />
            <ModelBlock label="Business" text={venture.business} />
            <ModelBlock label="Vision" text={venture.vision} />
          </div>
        </div>
      </section>

      <section className="case-section evidence-section" aria-labelledby="evidence">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Evidence</p>
            <h2 id="evidence">Truthful signals from the actual source material.</h2>
            <p>{venture.publicStatus}</p>
          </div>
          <div className="proof-grid">
            {venture.proof.map((item) => (
              <article className="proof-card" key={item.label}>
                <span>{item.label}</span>
                <p>{item.detail}</p>
                {item.href ? (
                  <a href={item.href} rel="noreferrer" target="_blank">
                    Open proof
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section" aria-labelledby="integrations">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Technical and provider state</p>
            <h2 id="integrations">Configured does not mean activated.</h2>
            <p>Stack: {venture.techStack.join(" · ")}</p>
          </div>
          <div className="integration-grid">
            {venture.integrations.map((integration) => (
              <article className="integration-card" key={integration.name}>
                <div>
                  <h3>{integration.name}</h3>
                  <span data-state={integration.state.toLowerCase()}>{integration.state}</span>
                </div>
                <p>{integration.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="boundary-section" aria-labelledby="operating-boundary">
        <div className="section-inner case-grid">
          <div>
            <p className="eyebrow">Operating boundary</p>
            <h2 id="operating-boundary">What this venture must not claim.</h2>
          </div>
          <p>{venture.operatingBoundary}</p>
        </div>
      </section>

      <section className="case-section" aria-labelledby="milestones">
        <div className="section-inner case-grid">
          <div>
            <p className="eyebrow">Build signals</p>
            <h2 id="milestones">Recent progress without fake metrics.</h2>
          </div>
          <div className="milestone-list">
            {venture.milestones.map((milestone) => (
              <article key={`${milestone.date}-${milestone.title}`}>
                <time dateTime={milestone.date}>{milestone.date}</time>
                <h3>{milestone.title}</h3>
                <p>{milestone.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="horizon-section" aria-labelledby="horizon">
        <div className="section-inner horizon-grid">
          <div>
            <p className="eyebrow">What this becomes</p>
            <h2 id="horizon">{venture.vision}</h2>
          </div>
          <div>
            <ul className="detail-list compact-list">
              {venture.nextMilestones.map((milestone) => (
                <li key={milestone}>{milestone}</li>
              ))}
            </ul>
            <p className="contact-context">Best contact path: {venture.contactIntent}.</p>
            <Link className="primary-action compact" href="/contact">
              Start a relevant conversation
            </Link>
            <Link className="text-link" href="/ventures">
              Back to portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ReadinessBlock({ label, value }: { label: string; value: string }) {
  return (
    <article className="readiness-block">
      <span>{label}</span>
      <p>{value}</p>
    </article>
  );
}

function ListBlock({
  label,
  items,
  tone,
}: {
  label: string;
  items: string[];
  tone: "complete" | "pending";
}) {
  return (
    <article className={`list-block ${tone}`}>
      <h3>{label}</h3>
      <ul className="detail-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function ModelBlock({ label, text }: { label: string; text: string }) {
  return (
    <article className="model-block">
      <span>{label}</span>
      <p>{text}</p>
    </article>
  );
}
