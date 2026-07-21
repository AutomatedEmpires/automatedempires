import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { VentureVisual } from "@/components/VentureVisual";
import { getVenture, ventures } from "@/lib/ventures";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ventures.map((venture) => ({ slug: venture.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const venture = getVenture(slug);

  if (!venture) return { title: "Venture not found" };

  return {
    title: venture.name,
    description: venture.summary,
    alternates: { canonical: `/ventures/${venture.slug}` },
    openGraph: {
      title: `${venture.name} | AutomatedEmpires`,
      description: venture.summary,
      url: `/ventures/${venture.slug}`,
      type: "article",
    },
  };
}

export default async function VenturePage({ params }: PageProps) {
  const { slug } = await params;
  const venture = getVenture(slug);
  if (!venture) notFound();

  const style = {
    "--venture-ink": venture.palette.ink,
    "--venture-accent": venture.palette.accent,
    "--venture-soft": venture.palette.soft,
  } as CSSProperties;

  return (
    <main id="main" style={style}>
      <section className="venture-hero">
        <div className="section-inner venture-hero-grid">
          <div className="venture-hero-copy">
            <div className="venture-hero-meta">
              <span>{venture.category}</span>
              <span className="stage-pill">{venture.stage}</span>
            </div>
            <h1>{venture.name}</h1>
            <p className="venture-hero-tagline">{venture.tagline}</p>
            <p className="venture-hero-summary">{venture.summary}</p>
            <div className="hero-actions">
              {venture.website ? (
                <a className="primary-action" href={venture.website} rel="noreferrer" target="_blank">
                  {venture.websiteLabel ?? `Visit ${venture.name}`}
                </a>
              ) : (
                <Link className="primary-action" href="/contact">Start a conversation</Link>
              )}
              <Link className="secondary-action" href="/ventures">Back to portfolio</Link>
            </div>
          </div>
          <VentureVisual venture={venture} />
        </div>
      </section>

      <section className="venture-facts" aria-label={`${venture.name} at a glance`}>
        <div className="section-inner venture-facts-grid">
          <div><span>Stage</span><strong>{venture.stage}</strong></div>
          <div><span>Built for</span><strong>{venture.audience}</strong></div>
          <div><span>Current focus</span><strong>{venture.currentFocus}</strong></div>
        </div>
      </section>

      <section className="story-section" aria-labelledby="problem-heading">
        <div className="section-inner story-section-grid">
          <div><p className="eyebrow">The problem</p><h2 id="problem-heading">What people are still forced to piece together.</h2></div>
          <p className="large-copy">{venture.problem}</p>
        </div>
      </section>

      <section className="story-section product-story" aria-labelledby="product-heading">
        <div className="section-inner story-section-grid">
          <div><p className="eyebrow">The product</p><h2 id="product-heading">A system built around the work itself.</h2></div>
          <p className="large-copy">{venture.product}</p>
        </div>
      </section>

      <section className="section-block capability-showcase" aria-labelledby="capabilities-heading">
        <div className="section-inner">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Product shape</p><h2 id="capabilities-heading">What {venture.name} brings together.</h2></div>
            <p>{venture.summary}</p>
          </div>
          <div className="capability-grid">
            {venture.capabilities.map((capability, index) => (
              <article key={capability}><span>{String(index + 1).padStart(2, "0")}</span><h3>{capability}</h3></article>
            ))}
          </div>
        </div>
      </section>

      <section className="latest-venture-update" aria-labelledby="latest-update-heading">
        <div className="section-inner latest-update-grid">
          <div><p className="eyebrow">Latest update · {venture.latestDate}</p><h2 id="latest-update-heading">{venture.latestUpdate}</h2></div>
          <div>
            <p>{venture.currentFocus}</p>
            {venture.repository ? (
              <a href={venture.repository} rel="noreferrer" target="_blank">Follow the build on GitHub</a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="venture-vision" aria-labelledby="vision-heading">
        <div className="section-inner venture-vision-grid">
          <p className="eyebrow">The horizon</p>
          <h2 id="vision-heading">{venture.vision}</h2>
          <div>
            {venture.customerNote ? <p className="customer-note">{venture.customerNote}</p> : null}
            <Link className="light-action" href="/contact">Talk about {venture.name}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
