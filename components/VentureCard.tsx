import Link from "next/link";
import type { CSSProperties } from "react";
import { StatusBadge } from "@/components/StatusBadge";
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
        <StatusBadge status={venture.status} />
        <span className="venture-profile">{venture.platformProfile}</span>
      </div>
      <h3>{venture.name}</h3>
      <p className="venture-oneliner">{venture.oneLiner}</p>
      <div className="venture-threads" aria-label={`${venture.name} shared instincts`}>
        {venture.threads.slice(0, 4).map((thread) => (
          <span className="thread-chip" key={thread}>
            {thread}
          </span>
        ))}
      </div>
      <div className="venture-card-foot">
        <Link
          className="text-link"
          data-analytics={`venture_${venture.slug}`}
          href={`/ventures/${venture.slug}`}
        >
          Open case study
        </Link>
        {venture.website ? (
          <a
            className="venture-live-link"
            data-analytics={`venture_live_${venture.slug}`}
            href={venture.website}
            rel="noreferrer"
            target="_blank"
          >
            Visit live
          </a>
        ) : null}
      </div>
    </article>
  );
}
