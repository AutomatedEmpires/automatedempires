"use client";

import { useEffect } from "react";

// Elements that gently rise into view on first scroll. Kept as a selector list so
// pages stay clean JSX — no wrapper components, no data attributes to maintain.
const SELECTOR = [
  ".section-heading",
  ".manifesto-list p",
  ".venture-card",
  ".profile-card",
  ".proof-card",
  ".model-block",
  ".build-item",
  ".timeline-item",
  ".milestone-list article",
  ".intent-card",
  ".story-lead",
  ".story-grid > div",
  ".mission-grid > div",
  ".split-grid > div",
  ".founder-grid > div",
  ".horizon-grid > div",
  ".pattern-row",
].join(", ");

export function ScrollReveal() {
  useEffect(() => {
    // Robust + flash-free: we only ever HIDE elements that are already below the
    // fold when this runs (post-hydration). Above-the-fold content is never
    // touched, and with JS off or slow the page renders fully visible — the
    // reveal is a pure enhancement, never a gate on content.
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      return;
    }

    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    if (els.length === 0) return;

    const armLine = window.innerHeight * 0.85;
    const armed: HTMLElement[] = [];
    for (const el of els) {
      if (el.getBoundingClientRect().top > armLine) {
        el.classList.add("will-reveal");
        armed.push(el);
      }
    }
    if (armed.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    armed.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
