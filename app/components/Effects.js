"use client";

import { useEffect } from "react";

// One client island for every scroll-driven effect on the page:
//  - [data-reveal]      fades/slides in once (children of [data-split] mask-reveal)
//  - [data-count]       counts up when it enters the viewport
//  - [data-highlight]   words brighten as the block scrolls through (--p 0→1)
//  - html --progress    page scroll progress (top bar)
//  - html --vel         smoothed scroll velocity (marquee skew)
//  - html.nav-hidden    nav tucks away while scrolling down
//  - nav [data-active]  current section
// Without JS (or with reduced motion) everything simply renders in place.

export default function Effects() {
  useEffect(() => {
    const html = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---- counters -------------------------------------------------------
    const fmt = (el, n) =>
      String(Math.round(n)).padStart(Number(el.dataset.pad || 0), "0") + (el.dataset.suffix || "");
    const runCount = (el) => {
      const to = Number(el.dataset.count);
      const from = Number(el.dataset.from || 0);
      if (reduce) return void (el.textContent = fmt(el, to));
      const t0 = performance.now();
      const dur = 1600;
      const step = (t) => {
        const k = Math.min(1, (t - t0) / dur);
        const e = 1 - Math.pow(1 - k, 4);
        el.textContent = fmt(el, from + (to - from) * e);
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    // ---- reveal ---------------------------------------------------------
    if (!reduce) {
      html.classList.add("reveal-ready");
      document.querySelectorAll("[data-count]").forEach((el) => {
        el.textContent = fmt(el, Number(el.dataset.from || 0));
      });
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target;
          el.classList.add("in-view");
          if (el.dataset.count) runCount(el);
          io.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll("[data-reveal], [data-split], [data-count]").forEach((el) => io.observe(el));

    // ---- active section in nav -----------------------------------------
    const links = new Map();
    document.querySelectorAll(".nav-links a[href^='#']").forEach((a) => links.set(a.getAttribute("href").slice(1), a));
    const sectionIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const a = links.get(entry.target.id);
          if (a && entry.isIntersecting) {
            links.forEach((l) => l.removeAttribute("data-active"));
            a.setAttribute("data-active", "");
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((_, id) => {
      const s = document.getElementById(id);
      if (s) sectionIO.observe(s);
    });

    // ---- scroll loop ----------------------------------------------------
    const highlights = [...document.querySelectorAll("[data-highlight]")];
    let lastY = window.scrollY;
    let vel = 0;
    let raf = 0;

    const frame = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      html.style.setProperty("--progress", max > 0 ? (y / max).toFixed(4) : "0");

      const dy = y - lastY;
      vel += (dy - vel) * 0.12;
      if (Math.abs(vel) < 0.01) vel = 0;
      html.style.setProperty("--vel", Math.max(-12, Math.min(12, vel * 0.35)).toFixed(3));

      if (y > 120 && dy > 2) html.classList.add("nav-hidden");
      else if (dy < -2 || y <= 120) html.classList.remove("nav-hidden");
      html.classList.toggle("scrolled", y > 24);
      lastY = y;

      const vh = window.innerHeight;
      for (const el of highlights) {
        const r = el.getBoundingClientRect();
        const start = vh * 0.85;
        const end = vh * 0.35;
        const p = (start - r.top) / (start - end + r.height * 0.6);
        el.style.setProperty("--p", reduce ? "1" : Math.max(0, Math.min(1, p)).toFixed(3));
      }

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      sectionIO.disconnect();
    };
  }, []);

  return null;
}
