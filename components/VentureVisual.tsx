import Image from "next/image";
import type { CSSProperties } from "react";
import type { Venture } from "@/lib/ventures";

export function VentureVisual({ venture, compact = false }: { venture: Venture; compact?: boolean }) {
  const style = {
    "--venture-ink": venture.palette.ink,
    "--venture-accent": venture.palette.accent,
    "--venture-soft": venture.palette.soft,
  } as CSSProperties;

  if (venture.visual === "explore") {
    return (
      <div className="venture-visual explore-visual" style={style}>
        <Image
          alt="Explore&Earn opportunity discovery experience"
          className="evidence-image"
          height={720}
          priority={!compact}
          src="/evidence/explore-home-desktop.png"
          width={1280}
        />
        <div className="visual-label-row">
          <span>Housing</span><span>Meals</span><span>Pay</span>
        </div>
      </div>
    );
  }

  if (venture.visual === "logloads") {
    return (
      <div className="venture-visual logloads-visual" style={style}>
        <Image
          alt="Timber road representing the LogLoads operating network"
          className="evidence-image"
          height={720}
          src="/evidence/logloads-hero-timber.jpg"
          width={1280}
        />
        <div className="route-overlay">
          <span>Landing</span><i aria-hidden="true" /><span>Assigned</span><i aria-hidden="true" /><span>Mill</span>
        </div>
      </div>
    );
  }

  if (venture.visual === "sweepza") {
    return (
      <div className="venture-visual sweepza-visual" style={style}>
        <div className="sweep-poster sweep-poster-a"><small>JUST ADDED</small><strong>Weekend escape</strong><span>Official source</span></div>
        <div className="sweep-poster sweep-poster-b"><small>ENDING SOON</small><strong>Gear drop</strong><span>Rules attached</span></div>
        <div className="sweep-poster sweep-poster-c"><small>SAVED</small><strong>Dream drive</strong><span>Reminder set</span></div>
      </div>
    );
  }

  if (venture.visual === "bidspace") {
    return (
      <div className="venture-visual bidspace-visual" style={style}>
        <div className="space-map">
          <span className="space venue">Main venue</span>
          <span className="space unit-a">A12</span>
          <span className="space unit-b">B04</span>
          <span className="space unit-c">C09</span>
          <strong className="space-offer">3 vendors shortlisted</strong>
        </div>
      </div>
    );
  }

  if (venture.visual === "lake") {
    const scheduleDate = new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "long",
      timeZone: "UTC",
      weekday: "long",
    }).format(new Date(`${venture.latestDate}T00:00:00Z`));

    return (
      <div className="venture-visual lake-visual" style={style}>
        <div className="care-board">
          <header><span>{scheduleDate}</span><strong>8 homes in motion</strong></header>
          <div><span>09:00</span><strong>Arrival window confirmed</strong><small>Team Cedar</small></div>
          <div><span>11:30</span><strong>Property profile ready</strong><small>3 rooms · 1 pet</small></div>
          <div><span>14:00</span><strong>Recurring care plan</strong><small>Every other week</small></div>
        </div>
      </div>
    );
  }

  if (venture.visual === "oran") {
    return (
      <div className="venture-visual oran-visual" style={style}>
        <div className="oran-conversation">
          <p>I need help finding safe housing near work.</p>
          <div><span>Need understood</span><span>Eligibility checked</span><span>3 verified matches</span></div>
          <strong>Start with the right next step.</strong>
        </div>
      </div>
    );
  }

  if (venture.visual === "atlas") {
    return (
      <div className="venture-visual atlas-visual" style={style}>
        <div className="atlas-map">
          <span className="atlas-pin pin-a">Waterfall</span>
          <span className="atlas-pin pin-b">Hot spring</span>
          <span className="atlas-pin pin-c">Cave</span>
          <i aria-hidden="true" className="atlas-route" />
        </div>
      </div>
    );
  }

  return (
    <div className="venture-visual concept-visual" style={style}>
      <span>{venture.category}</span>
      <strong>{venture.name}</strong>
      <p>{venture.tagline}</p>
    </div>
  );
}
