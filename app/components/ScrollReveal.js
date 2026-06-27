"use client";

import { useEffect } from "react";

// Each group is animated together; `step` cascades the children (ms).
// The hero is intentionally excluded — it uses a pure-CSS load animation.
const GROUPS = [
  { sel: ".stats .stat", step: 80 },
  { sel: ".about-body", step: 0 },
  { sel: ".leveling h3", step: 0 },
  { sel: ".chips .chip", step: 45 },
  { sel: "#skills .eyebrow, #skills h2", step: 90 },
  { sel: ".skill-card", step: 70 },
  { sel: "#experience .eyebrow, #experience h2", step: 90 },
  { sel: ".exp-item", step: 90 },
  { sel: "#projects .eyebrow, #projects h2", step: 90 },
  { sel: ".proj-grid .card", step: 80 },
  { sel: "#leetcode .eyebrow, #leetcode h2", step: 90 },
  { sel: ".lc-wrap", step: 0 },
  { sel: ".lc-extra .box", step: 70 },
  { sel: ".lc-focus", step: 0 },
  { sel: ".contact-card", step: 0 },
  { sel: ".footer-cols > *", step: 70 },
];

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;

    // If the visitor prefers reduced motion, do nothing — content stays visible.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    root.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    const vh = window.innerHeight;
    GROUPS.forEach(({ sel, step }) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.classList.add("reveal");
        if (step) el.style.animationDelay = `${i * step}ms`;

        // Already on screen at load? reveal it immediately (no flash, no anim).
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) {
          el.classList.add("in-view");
        } else {
          io.observe(el);
        }
      });
    });

    return () => io.disconnect();
  }, []);

  return null;
}
