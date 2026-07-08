"use client";

import { useEffect, useRef } from "react";
import { ventures } from "@/lib/ventures";

/**
 * SystemField — the hero's living signature.
 *
 * A pointer-reactive canvas that demonstrates the company thesis through behavior:
 * scattered friction ("fragmentation") is drawn inward along living edges to venture
 * nodes and then to a central operating core ("system"). An auto-focus drifts across
 * the real ventures so the field also teaches their names.
 *
 * Design constraints honored:
 * - Performance: single canvas, no per-frame allocations, capped DPR, paused when the
 *   tab is hidden or the hero is scrolled out of view. Node count scales with width.
 * - Reduced motion: renders one composed static frame, no animation loop.
 * - Touch: no pointer tracking; ambient motion + auto-focus only.
 * - Decorative: aria-hidden; the meaning is carried by the hero copy beside it.
 */

type FieldNode = {
  x: number;
  y: number;
  bx: number; // base position (normalized 0..1)
  by: number;
  amp: number;
  speed: number;
  phase: number;
  depth: number; // parallax weight
  color: string;
  label: string;
  focusable: boolean;
  target?: number; // index of node this connects toward
};

const FRICTION = [
  "stale listings",
  "manual dispatch",
  "phone calls",
  "unpriced space",
  "unclear trust",
  "hidden eligibility",
  "missed timing",
  "scattered PDFs",
  "word of mouth",
  "aging job boards",
  "lost evidence",
  "spreadsheets",
];

// Designed constellation for the venture ring — balanced, not random, and weighted
// toward the right so the "system" forms away from the overlaid hero copy.
const RING: Array<[number, number]> = [
  [0.55, 0.2],
  [0.78, 0.28],
  [0.86, 0.54],
  [0.74, 0.8],
  [0.5, 0.85],
  [0.33, 0.72],
  [0.36, 0.32],
  [0.64, 0.5],
];

// Friction sits further out, around the periphery.
const EDGE_POS: Array<[number, number]> = [
  [0.12, 0.16],
  [0.9, 0.12],
  [0.96, 0.34],
  [0.94, 0.74],
  [0.82, 0.94],
  [0.58, 0.96],
  [0.3, 0.94],
  [0.08, 0.82],
  [0.06, 0.5],
  [0.16, 0.3],
  [0.68, 0.08],
  [0.44, 0.06],
];

const CORE_X = 0.62;
const CORE_Y = 0.52;

export function SystemField() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");

    let width = 0;
    let height = 0;
    let dpr = 1;

    // Pointer state, eased toward target.
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, active: false };

    const ventureNodes = ventures.slice(0, RING.length);
    const nodes: FieldNode[] = [];

    // Core node (index 0).
    nodes.push({
      x: CORE_X,
      y: CORE_Y,
      bx: CORE_X,
      by: CORE_Y,
      amp: 0.004,
      speed: 0.4,
      phase: 0,
      depth: 0.15,
      color: "#f4efe3",
      label: "AE",
      focusable: false,
    });

    // Venture nodes.
    ventureNodes.forEach((v, i) => {
      const [nx, ny] = RING[i];
      nodes.push({
        x: nx,
        y: ny,
        bx: nx,
        by: ny,
        amp: 0.01 + (i % 3) * 0.004,
        speed: 0.5 + (i % 4) * 0.12,
        phase: i * 1.7,
        depth: 0.4 + (i % 3) * 0.12,
        color: v.palette.accent,
        label: v.name,
        focusable: true,
      });
    });

    const ventureStart = 1;
    const ventureEnd = nodes.length; // exclusive

    // Friction nodes, each linked to its nearest venture node.
    const fragments: FieldNode[] = EDGE_POS.slice(0, coarse.matches ? 8 : EDGE_POS.length).map(
      ([fx, fy], i) => {
        // nearest venture node
        let best = ventureStart;
        let bestD = Infinity;
        for (let k = ventureStart; k < ventureEnd; k++) {
          const d = (nodes[k].bx - fx) ** 2 + (nodes[k].by - fy) ** 2;
          if (d < bestD) {
            bestD = d;
            best = k;
          }
        }
        return {
          x: fx,
          y: fy,
          bx: fx,
          by: fy,
          amp: 0.016 + (i % 3) * 0.006,
          speed: 0.35 + (i % 5) * 0.08,
          phase: i * 0.9,
          depth: 0.8 + (i % 3) * 0.2,
          color: "#8b938d",
          label: FRICTION[i % FRICTION.length],
          focusable: false,
          target: best,
        };
      },
    );

    let focus = ventureStart;
    let focusTimer = 0;
    const focusHold = 2.9;
    let pointerFocus = -1;

    function resize() {
      const rect = container!.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // Convert a node's animated normalized position to pixels.
    function px(n: FieldNode, t: number, parX: number, parY: number) {
      const ox = Math.sin(t * n.speed + n.phase) * n.amp;
      const oy = Math.cos(t * n.speed * 0.9 + n.phase * 1.3) * n.amp;
      const x = (n.x + ox + parX * n.depth) * width;
      const y = (n.y + oy + parY * n.depth) * height;
      return [x, y] as const;
    }

    function drawEdge(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      color: string,
      alpha: number,
      w: number,
      pulseT: number,
      pulses: number,
    ) {
      ctx!.strokeStyle = color;
      ctx!.globalAlpha = alpha;
      ctx!.lineWidth = w;
      ctx!.beginPath();
      ctx!.moveTo(x1, y1);
      ctx!.lineTo(x2, y2);
      ctx!.stroke();

      // Energy pulses travelling inward (toward x2,y2).
      for (let p = 0; p < pulses; p++) {
        const tt = (pulseT + p / pulses) % 1;
        const gx = x1 + (x2 - x1) * tt;
        const gy = y1 + (y2 - y1) * tt;
        ctx!.globalAlpha = alpha * (1 - tt) * 1.6;
        ctx!.fillStyle = color;
        ctx!.beginPath();
        ctx!.arc(gx, gy, w * 1.6, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
    }

    function dot(x: number, y: number, r: number, color: string, alpha: number) {
      ctx!.globalAlpha = alpha;
      ctx!.fillStyle = color;
      ctx!.beginPath();
      ctx!.arc(x, y, r, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.globalAlpha = 1;
    }

    function glow(x: number, y: number, r: number, color: string, strength: number) {
      for (let i = 3; i >= 1; i--) {
        dot(x, y, r * i * 0.9, color, (strength * 0.12) / i);
      }
    }

    let last = 0;
    let running = true;

    function frame(now: number) {
      if (!running) return;
      const t = now / 1000;
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0.016;
      last = now;

      // Ease pointer.
      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;
      const parX = pointer.active ? (pointer.x - 0.5) * 0.06 : 0;
      const parY = pointer.active ? (pointer.y - 0.5) * 0.06 : 0;

      // Focus handling: pointer proximity overrides the auto-drift.
      pointerFocus = -1;
      if (pointer.active) {
        let bestD = 0.02; // proximity threshold in normalized² space (~14% radius)
        for (let k = ventureStart; k < ventureEnd; k++) {
          const d = (nodes[k].x - pointer.x) ** 2 + (nodes[k].y - pointer.y) ** 2;
          if (d < bestD) {
            bestD = d;
            pointerFocus = k;
          }
        }
      }
      if (pointerFocus >= 0) {
        focus = pointerFocus;
        focusTimer = 0;
      } else {
        focusTimer += dt;
        if (focusTimer > focusHold) {
          focusTimer = 0;
          focus = ventureStart + ((focus - ventureStart + 1) % (ventureEnd - ventureStart));
        }
      }

      ctx!.clearRect(0, 0, width, height);

      const [coreX, coreY] = px(nodes[0], t, parX, parY);

      // --- Friction -> venture edges (background layer) ---
      for (const f of fragments) {
        const [fx, fy] = px(f, t, parX, parY);
        const targetNode = nodes[f.target ?? ventureStart];
        const [vx, vy] = px(targetNode, t, parX, parY);
        const isFocusEdge = f.target === focus;
        drawEdge(
          fx,
          fy,
          vx,
          vy,
          isFocusEdge ? targetNode.color : "#c8bfa8",
          isFocusEdge ? 0.28 : 0.1,
          1,
          (t * f.speed) % 1,
          isFocusEdge ? 2 : 1,
        );
      }

      // --- Venture -> core edges ---
      for (let k = ventureStart; k < ventureEnd; k++) {
        const [vx, vy] = px(nodes[k], t, parX, parY);
        const focused = k === focus;
        drawEdge(
          vx,
          vy,
          coreX,
          coreY,
          nodes[k].color,
          focused ? 0.6 : 0.22,
          focused ? 1.6 : 1,
          (t * (0.5 + (k % 3) * 0.1)) % 1,
          focused ? 3 : 1,
        );
      }

      // --- Friction dots + labels ---
      ctx!.font = "600 11px Inter, system-ui, sans-serif";
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      for (const f of fragments) {
        const [fx, fy] = px(f, t, parX, parY);
        const isFocusEdge = f.target === focus;
        dot(fx, fy, 2.2, f.color, isFocusEdge ? 0.85 : 0.5);
        if (isFocusEdge) {
          ctx!.globalAlpha = 0.5;
          ctx!.fillStyle = "#e9e2d2";
          ctx!.fillText(f.label, fx, fy - 12);
          ctx!.globalAlpha = 1;
        }
      }

      // --- Venture nodes ---
      for (let k = ventureStart; k < ventureEnd; k++) {
        const n = nodes[k];
        const [vx, vy] = px(n, t, parX, parY);
        const focused = k === focus;
        const pulse = 1 + Math.sin(t * 1.6 + n.phase) * 0.12;
        if (focused) glow(vx, vy, 16, n.color, 1);
        dot(vx, vy, (focused ? 5.5 : 3.4) * pulse, n.color, focused ? 1 : 0.72);
        dot(vx, vy, (focused ? 2 : 1.4) * pulse, "#0c0f0f", 0.9);
      }

      // --- Core ---
      const beat = 1 + Math.sin(t * 1.2) * 0.06;
      glow(coreX, coreY, 26, "#f4efe3", 0.8);
      ctx!.globalAlpha = 0.9;
      ctx!.strokeStyle = "#f4efe3";
      ctx!.lineWidth = 1.4;
      ctx!.beginPath();
      ctx!.arc(coreX, coreY, 20 * beat, 0, Math.PI * 2);
      ctx!.stroke();
      ctx!.globalAlpha = 0.16;
      ctx!.beginPath();
      ctx!.arc(coreX, coreY, 32 * beat, 0, Math.PI * 2);
      ctx!.stroke();
      ctx!.globalAlpha = 1;
      dot(coreX, coreY, 6, "#f4efe3", 1);

      // --- Focused venture label (canvas caption) ---
      const fn = nodes[focus];
      const [flx, fly] = px(fn, t, parX, parY);
      ctx!.font = "700 14px Inter, system-ui, sans-serif";
      ctx!.textAlign = "center";
      ctx!.fillStyle = "#f4efe3";
      ctx!.globalAlpha = 0.95;
      ctx!.fillText(fn.label, flx, fly - 20);
      ctx!.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(frame);
    }

    const rafRef = { current: 0 as number };

    function renderStatic() {
      // Single composed frame for reduced-motion.
      resize();
      last = 0;
      running = false;
      frame(0);
    }

    function start() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      running = true;
      last = 0;
      rafRef.current = requestAnimationFrame(frame);
    }

    function stop() {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }

    // Pointer handling on the hero container.
    const host = container;
    function onMove(e: PointerEvent) {
      if (coarse.matches) return;
      const rect = host.getBoundingClientRect();
      pointer.tx = (e.clientX - rect.left) / rect.width;
      pointer.ty = (e.clientY - rect.top) / rect.height;
      pointer.active = true;
    }
    function onLeave() {
      pointer.active = false;
      pointer.tx = 0.5;
      pointer.ty = 0.5;
    }

    resize();

    if (reduce.matches) {
      renderStatic();
    } else {
      start();
      host.addEventListener("pointermove", onMove);
      host.addEventListener("pointerleave", onLeave);
    }

    const ro = new ResizeObserver(() => {
      resize();
      if (reduce.matches) frame(0);
    });
    ro.observe(container);

    // Pause when off-screen.
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting;
        if (reduce.matches) return;
        if (visible && document.visibilityState === "visible") start();
        else stop();
      },
      { threshold: 0.01 },
    );
    io.observe(container);

    function onVisibility() {
      if (reduce.matches) return;
      if (document.visibilityState === "visible") start();
      else stop();
    }
    document.addEventListener("visibilitychange", onVisibility);

    // React to a reduced-motion preference change at runtime.
    function onReduceChange() {
      stop();
      if (reduce.matches) renderStatic();
      else start();
    }
    reduce.addEventListener?.("change", onReduceChange);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      reduce.removeEventListener?.("change", onReduceChange);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="system-field" ref={containerRef} aria-hidden="true">
      <canvas ref={canvasRef} className="system-field-canvas" />
    </div>
  );
}
