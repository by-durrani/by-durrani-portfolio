"use client";

import { useEffect, useRef } from "react";

// Custom cursor: a precise dot + a lagging ring that stretches with velocity.
//  - links / buttons          → ring swells and inverts what's beneath it
//  - [data-cursor-label="…"]  → ring becomes a solid accent disc with a label
//  - [data-magnetic]          → element is pulled toward the pointer
//  - [data-spotlight]         → receives --sx / --sy for a pointer-follow glow
//  - [data-tilt]              → subtle 3D tilt toward the pointer
// Only runs on fine pointers without reduced-motion; touch keeps the native UX.

const INTERACTIVE = "a, button, [role='button'], summary, label, input, textarea, select, [data-cursor]";

export default function Cursor() {
  const rootRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const html = document.documentElement;
    const root = rootRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    const label = labelRef.current;
    html.classList.add("has-cursor");

    let mx = -100, my = -100; // pointer
    let rx = -100, ry = -100; // ring (lerped)
    let shown = false;
    let raf = 0;
    let magnet = null;
    let tilt = null;

    const setState = (state, text = "") => {
      root.dataset.state = state;
      if (state === "label") label.textContent = text;
    };

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!shown) {
        shown = true;
        rx = mx;
        ry = my;
        root.classList.add("is-visible");
      }

      if (magnet) {
        const r = magnet.getBoundingClientRect();
        const s = parseFloat(magnet.dataset.magnetic) || 0.35;
        const x = (mx - (r.left + r.width / 2)) * s;
        const y = (my - (r.top + r.height / 2)) * s;
        magnet.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (mx - r.left) / r.width - 0.5;
        const py = (my - r.top) / r.height - 0.5;
        tilt.style.transform = `perspective(900px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg)`;
      }

      const spot = e.target.closest?.("[data-spotlight]");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--sx", `${mx - r.left}px`);
        spot.style.setProperty("--sy", `${my - r.top}px`);
      }
    };

    const onOver = (e) => {
      const t = e.target.closest?.(`[data-cursor-label], ${INTERACTIVE}`);
      if (!t) setState("default");
      else if (t.dataset.cursorLabel) setState("label", t.dataset.cursorLabel);
      else setState("hover");

      const m = e.target.closest?.("[data-magnetic]");
      if (m !== magnet) {
        if (magnet) magnet.style.transform = "";
        magnet = m;
      }

      const tl = e.target.closest?.("[data-tilt]");
      if (tl !== tilt) {
        if (tilt) tilt.style.transform = "";
        tilt = tl;
      }
    };

    const onLeaveWindow = (e) => {
      if (!e.relatedTarget) {
        root.classList.remove("is-visible");
        shown = false;
      }
    };

    const onDown = (e) => {
      root.classList.add("is-down");
      const ripple = document.createElement("span");
      ripple.className = "cursor-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      root.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
    };
    const onUp = () => root.classList.remove("is-down");

    const tick = () => {
      rx += (mx - rx) * 0.17;
      ry += (my - ry) * 0.17;

      // Stretch the ring along its direction of travel (not while labelled).
      const vx = mx - rx;
      const vy = my - ry;
      const labelled = root.dataset.state === "label";
      const stretch = labelled ? 0 : Math.min(Math.hypot(vx, vy) / 80, 0.45);
      const angle = Math.atan2(vy, vx);

      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      ring.style.transform =
        `translate3d(${rx}px, ${ry}px, 0) rotate(${angle}rad) ` +
        `scale(${1 + stretch}, ${1 - stretch * 0.5}) rotate(${-angle}rad)`;

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerout", onLeaveWindow, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onLeaveWindow);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      html.classList.remove("has-cursor");
    };
  }, []);

  return (
    <div ref={rootRef} className="cursor" data-state="default" aria-hidden="true">
      <div ref={ringRef} className="cursor-ring">
        <div className="cursor-ring-inner">
          <span ref={labelRef} className="cursor-label" />
        </div>
      </div>
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}
