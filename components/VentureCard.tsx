import Link from "next/link";
import type { CSSProperties } from "react";
import type { Venture } from "@/lib/ventures";

export function VentureCard({ venture }: { venture: Venture }) {
  const style = {
    "--venture-accent": venture.palette.accent,
    "--venture-base": venture.palette.base,
    "--venture-support": venture.palette.support,
  } as CSSProperties;

  return (
    <article className={`venture-card ${venture.classification}`} style={style}>
      <div className="venture-card-top">
        <span>{venture.stage}</span>
        <span>{venture.platformProfile}</span>
      </div>
      <h3>{venture.name}</h3>
      <p className="venture-thesis">{venture.thesis}</p>
      <div className="venture-physics" aria-label={`${venture.name} visual physics`}>
        {venture.visualPhysics.slice(0, 3).map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <p className="venture-status">{venture.publicStatus}</p>
      <Link
        className="text-link"
        data-analytics={`venture_${venture.slug}`}
        href={`/ventures/${venture.slug}`}
      >
        View case study
      </Link>
    </article>
  );
}
