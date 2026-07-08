"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { StatusBadge } from "@/components/StatusBadge";
import {
  allThreads,
  threadMeta,
  ventures,
  type Venture,
  type VentureThread,
} from "@/lib/ventures";

// Designed constellation (normalized % within the stage) — stable, legible, and
// weighted so related ventures sit near each other.
const POSITIONS: Record<string, [number, number]> = {
  "explore-and-earn": [20, 30],
  bidspace: [46, 18],
  pinnedatlas: [76, 24],
  logloads: [86, 56],
  sweepza: [64, 76],
  "lake-and-pine": [38, 82],
  oran: [15, 62],
  "automated-interviewer": [56, 50],
};

function positionFor(slug: string, index: number): [number, number] {
  if (POSITIONS[slug]) return POSITIONS[slug];
  const angle = (index / Math.max(1, ventures.length)) * Math.PI * 2;
  return [50 + Math.cos(angle) * 34, 50 + Math.sin(angle) * 34];
}

type Edge = {
  a: string;
  b: string;
  threads: VentureThread[];
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

export function EcosystemMap() {
  const [activeThread, setActiveThread] = useState<VentureThread | null>(null);
  const [activeVenture, setActiveVenture] = useState<string | null>(null);

  const positioned = useMemo(
    () =>
      ventures.map((venture, index) => {
        const [x, y] = positionFor(venture.slug, index);
        return { venture, x, y };
      }),
    [],
  );

  const edges = useMemo<Edge[]>(() => {
    const list: Edge[] = [];
    for (let i = 0; i < positioned.length; i++) {
      for (let j = i + 1; j < positioned.length; j++) {
        const a = positioned[i];
        const b = positioned[j];
        const shared = a.venture.threads.filter((t) => b.venture.threads.includes(t));
        if (shared.length > 0) {
          list.push({
            a: a.venture.slug,
            b: b.venture.slug,
            threads: shared,
            x1: a.x,
            y1: a.y,
            x2: b.x,
            y2: b.y,
          });
        }
      }
    }
    return list;
  }, [positioned]);

  const focused = activeVenture
    ? ventures.find((v) => v.slug === activeVenture) ?? null
    : null;

  function nodeMode(venture: Venture): "on" | "off" | "base" {
    if (activeThread) {
      return venture.threads.includes(activeThread) ? "on" : "off";
    }
    if (focused) {
      if (venture.slug === focused.slug) return "on";
      return venture.threads.some((t) => focused.threads.includes(t)) ? "on" : "off";
    }
    return "base";
  }

  function edgeVisible(edge: Edge): "on" | "off" | "base" {
    if (activeThread) {
      return edge.threads.includes(activeThread) ? "on" : "off";
    }
    if (focused) {
      return edge.a === focused.slug || edge.b === focused.slug ? "on" : "off";
    }
    return "base";
  }

  const activeThreadMembers = activeThread
    ? ventures.filter((v) => v.threads.includes(activeThread))
    : [];

  return (
    <div className="ecosystem">
      <div
        className="ecosystem-filters"
        role="group"
        aria-label="Filter ventures by shared instinct"
      >
        <button
          type="button"
          className={`thread-filter${activeThread === null ? " is-active" : ""}`}
          aria-pressed={activeThread === null}
          onClick={() => setActiveThread(null)}
        >
          All threads
        </button>
        {allThreads.map((thread) => (
          <button
            type="button"
            key={thread}
            className={`thread-filter${activeThread === thread ? " is-active" : ""}`}
            aria-pressed={activeThread === thread}
            onClick={() => setActiveThread((current) => (current === thread ? null : thread))}
          >
            {thread}
          </button>
        ))}
      </div>

      <div className="ecosystem-body">
        <div
          className={`ecosystem-stage${activeThread || focused ? " is-lensed" : ""}`}
          onMouseLeave={() => setActiveVenture(null)}
        >
          <svg className="ecosystem-edges" aria-hidden="true" preserveAspectRatio="none">
            {edges.map((edge) => {
              const mode = edgeVisible(edge);
              return (
                <line
                  key={`${edge.a}-${edge.b}`}
                  className={`eco-edge eco-edge-${mode}`}
                  x1={`${edge.x1}%`}
                  y1={`${edge.y1}%`}
                  x2={`${edge.x2}%`}
                  y2={`${edge.y2}%`}
                />
              );
            })}
          </svg>

          <div className="ecosystem-core" aria-hidden="true">
            <span>AE</span>
          </div>

          <ul className="eco-nodes">
            {positioned.map(({ venture, x, y }, index) => {
              const mode = nodeMode(venture);
              const style = {
                "--x": `${x}%`,
                "--y": `${y}%`,
                "--i": index,
                "--venture-accent": venture.palette.accent,
              } as CSSProperties;
              return (
                <li key={venture.slug} className={`eco-node eco-node-${mode}`} style={style}>
                  <Link
                    href={`/ventures/${venture.slug}`}
                    data-analytics={`eco_${venture.slug}`}
                    className="eco-node-hit"
                    onMouseEnter={() => setActiveVenture(venture.slug)}
                    onFocus={() => setActiveVenture(venture.slug)}
                    onBlur={() => setActiveVenture(null)}
                  >
                    <span className="eco-dot" aria-hidden="true" />
                    <span className="eco-label">
                      <span className="eco-name">{venture.name}</span>
                      <span className="eco-status" data-status={venture.status}>
                        {venture.status}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <aside className="ecosystem-readout" aria-live="polite">
          {focused ? (
            <div className="readout-venture" style={{ "--venture-accent": focused.palette.accent } as CSSProperties}>
              <StatusBadge status={focused.status} />
              <h3>{focused.name}</h3>
              <p>{focused.oneLiner}</p>
              <div className="readout-threads">
                {focused.threads.map((thread) => (
                  <span key={thread} className="thread-chip">
                    {thread}
                  </span>
                ))}
              </div>
              <Link className="text-link" href={`/ventures/${focused.slug}`}>
                Open case study
              </Link>
            </div>
          ) : activeThread ? (
            <div className="readout-thread">
              <p className="eyebrow">Shared instinct</p>
              <h3>{activeThread}</h3>
              <p>{threadMeta[activeThread].description}</p>
              <ul className="readout-members">
                {activeThreadMembers.map((venture) => (
                  <li key={venture.slug}>
                    <Link href={`/ventures/${venture.slug}`}>{venture.name}</Link>
                    <span className="readout-status" data-status={venture.status}>
                      {venture.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="readout-default">
              <p className="eyebrow">How to read this</p>
              <h3>Different markets. Shared instincts.</h3>
              <p>
                Every venture attacks a different broken market, but the same
                instincts recur. Choose a thread to see which products share it, or
                hover a node to trace its connections.
              </p>
              <div className="readout-legend">
                {allThreads.map((thread) => (
                  <button
                    key={thread}
                    type="button"
                    className="thread-chip is-interactive"
                    onClick={() => setActiveThread(thread)}
                  >
                    {thread}
                  </button>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
