"use client";

import { motion, useReducedMotion } from "motion/react";

const fragments = [
  { label: "stale listings", x: 7, y: 22 },
  { label: "phone calls", x: 23, y: 8 },
  { label: "spreadsheets", x: 51, y: 15 },
  { label: "unpriced space", x: 76, y: 24 },
  { label: "manual dispatch", x: 13, y: 58 },
  { label: "unclear trust", x: 39, y: 47 },
  { label: "hidden eligibility", x: 66, y: 59 },
  { label: "missed timing", x: 83, y: 77 },
];

const systems = [
  { label: "market", x: 22, y: 34 },
  { label: "evidence", x: 45, y: 28 },
  { label: "route", x: 62, y: 43 },
  { label: "workflow", x: 38, y: 66 },
  { label: "action", x: 67, y: 72 },
];

export function SystemsCanvas() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="systems-canvas" aria-hidden="true">
      <div className="canvas-grid" />
      {fragments.map((fragment, index) => (
        <motion.div
          animate={
            reduceMotion
              ? false
              : {
                  x: index % 2 === 0 ? [0, 10, -4, 0] : [0, -8, 5, 0],
                  y: index % 3 === 0 ? [0, -6, 4, 0] : [0, 5, -3, 0],
                  opacity: [0.65, 0.96, 0.78],
                }
          }
          className="signal-node fragment-node"
          key={fragment.label}
          style={{ left: `${fragment.x}%`, top: `${fragment.y}%` }}
          transition={{
            duration: 7 + index,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          {fragment.label}
        </motion.div>
      ))}
      <motion.div
        animate={reduceMotion ? false : { scale: [1, 1.03, 1] }}
        className="system-core"
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>complexity</span>
        <strong>system</strong>
      </motion.div>
      {systems.map((system, index) => (
        <motion.div
          animate={
            reduceMotion
              ? false
              : {
                  opacity: [0.7, 1, 0.85],
                  x: index % 2 === 0 ? [0, -5, 0] : [0, 6, 0],
                }
          }
          className="signal-node system-node"
          key={system.label}
          style={{ left: `${system.x}%`, top: `${system.y}%` }}
          transition={{
            delay: index * 0.25,
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {system.label}
        </motion.div>
      ))}
      <span className="canvas-line line-a" />
      <span className="canvas-line line-b" />
      <span className="canvas-line line-c" />
      <span className="canvas-line line-d" />
    </div>
  );
}
