import Image from "next/image";
import type { CSSProperties } from "react";
import type { Venture } from "@/lib/ventures";

export function VentureVisual({ venture, compact = false }: { venture: Venture; compact?: boolean }) {
  const style = {
    "--venture-accent": venture.palette.accent,
    "--venture-base": venture.palette.base,
    "--venture-support": venture.palette.support,
    "--venture-wash": venture.palette.wash,
  } as CSSProperties;

  if (venture.slug === "explore-and-earn") {
    return (
      <div className="venture-visual explore-visual" style={style}>
        <Image
          alt="Explore&Earn product surface screenshot"
          className="evidence-image"
          height={720}
          priority={!compact}
          src="/evidence/explore-home-desktop.png"
          width={1280}
        />
        <div className="triad-strip" aria-label="Explore&Earn core triad">
          <span>Housing</span>
          <span>Meals</span>
          <span>Pay</span>
        </div>
      </div>
    );
  }

  if (venture.slug === "logloads") {
    return (
      <div className="venture-visual logloads-visual" style={style}>
        <Image
          alt="Timber road environment used as LogLoads evidence"
          className="evidence-image"
          height={720}
          src="/evidence/logloads-hero-timber.jpg"
          width={1280}
        />
        <div className="route-overlay">
          <span className="route-point start">Landing</span>
          <span className="route-line" />
          <span className="route-point middle">Truck</span>
          <span className="route-line second" />
          <span className="route-point end">Mill</span>
        </div>
      </div>
    );
  }

  if (venture.slug === "bidspace") {
    return (
      <div className="venture-visual bidspace-visual" style={style}>
        <div className="map-field">
          <span className="market-block block-a">Venue</span>
          <span className="market-block block-b">Unit A</span>
          <span className="market-block block-c">Unit B</span>
          <span className="market-bid bid-a">$650</span>
          <span className="market-bid bid-b">$920</span>
          <span className="market-bid bid-c">shortlist</span>
        </div>
      </div>
    );
  }

  if (venture.slug === "sweepza") {
    return (
      <div className="venture-visual sweepza-visual" style={style}>
        <div className="sweep-card card-one">
          <span>Ending today</span>
          <strong>Weekend gear drop</strong>
          <small>Ready again in 4h</small>
        </div>
        <div className="sweep-card card-two">
          <span>Saved</span>
          <strong>Local adventure bundle</strong>
          <small>Photo-first listing</small>
        </div>
        <div className="sweep-card card-three">
          <span>Winner proof</span>
          <strong>Real posts, real reactions</strong>
          <small>Host quality signal</small>
        </div>
      </div>
    );
  }

  if (venture.slug === "pinnedatlas") {
    return (
      <div className="venture-visual atlas-visual" style={style}>
        <div className="atlas-field" aria-hidden="true">
          <span className="atlas-pin pin-a">
            <i />
            Waterfall
          </span>
          <span className="atlas-pin pin-b">
            <i />
            Cave
          </span>
          <span className="atlas-pin pin-c">
            <i />
            Hot spring
          </span>
          <span className="atlas-dot dot-a" />
          <span className="atlas-dot dot-b" />
          <span className="atlas-dot dot-c" />
          <span className="atlas-dot dot-d" />
          <span className="atlas-dot dot-e" />
          <span className="atlas-ping" />
        </div>
      </div>
    );
  }

  if (venture.slug === "lake-and-pine") {
    return (
      <div className="venture-visual lake-visual" style={style}>
        <div className="home-reset">
          <span className="room room-a">Estimate</span>
          <span className="room room-b">Schedule</span>
          <span className="room room-c">Notes</span>
          <span className="room room-d">Repeat</span>
        </div>
      </div>
    );
  }

  if (venture.slug === "oran") {
    return (
      <div className="venture-visual oran-visual" style={style}>
        <div className="evidence-network">
          <span className="need">Need</span>
          <span className="verify">Verify</span>
          <span className="score">Score</span>
          <span className="match">Match</span>
          <span className="action">Action</span>
        </div>
      </div>
    );
  }

  return (
    <div className="venture-visual interview-visual" style={style}>
      <div className="rubric-panel">
        <span>Question</span>
        <strong>Evidence</strong>
        <small>Criteria matched</small>
      </div>
      <div className="rubric-panel secondary">
        <span>Rubric</span>
        <strong>Score</strong>
        <small>Human decision</small>
      </div>
    </div>
  );
}
