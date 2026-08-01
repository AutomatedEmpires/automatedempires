import Link from "next/link";
import type { CSSProperties } from "react";
import type { Venture } from "@/lib/ventures";

export function VentureCard({ venture }: { venture: Venture }) {
  const style = {
    "--venture-ink": venture.palette.ink,
    "--venture-accent": venture.palette.accent,
    "--venture-soft": venture.palette.soft,
  } as CSSProperties;

  return (
    <article className="venture-card" data-tone={venture.tone} style={style}>
      <div className="venture-card-meta">
        <span>{venture.category}</span>
        <span className="stage-pill">{venture.stage}</span>
      </div>
      <div className="venture-card-copy">
        <h3>{venture.name}</h3>
        <p className="venture-tagline">{venture.tagline}</p>
        <p className="venture-summary">{venture.summary}</p>
      </div>
      <div className="venture-card-footer">
        <Link href={`/ventures/${venture.slug}`}>Meet {venture.name}</Link>
        {venture.website ? (
          <a href={venture.website} rel="noreferrer" target="_blank">
            {venture.websiteLabel ?? "Visit product"}
          </a>
        ) : (
          <span>Building at AutomatedEmpires</span>
        )}
      </div>
    </article>
  );
}
