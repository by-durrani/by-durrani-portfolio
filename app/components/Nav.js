"use client";

import { useEffect, useState } from "react";
import { resume } from "@/data/resume";
import LocalTime from "./LocalTime";
import LogoMark from "./Logo";
import { Roll } from "./Text";

const sections = [
  ["About", "#about"],
  ["Stack", "#capabilities"],
  ["Work", "#projects"],
  ["Experience", "#experience"],
  ["Practice", "#practice"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav className="nav no-print" aria-label="Primary">
        <a href="#top" className="nav-logo" aria-label={`${resume.name} — home`}>
          <span className="nav-logo-mark">
            <LogoMark />
          </span>
          <span className="nav-logo-name">
            <Roll>{resume.name.split(" ").slice(-1)[0]}</Roll>
            <sup>©{String(new Date().getFullYear()).slice(-2)}</sup>
          </span>
        </a>

        <div className="nav-links">
          {sections.map(([label, href]) => (
            <a key={href} href={href}>
              <Roll>{label}</Roll>
            </a>
          ))}
        </div>

        <div className="nav-right">
          <LocalTime timeZone={resume.timezone} label={resume.timezoneLabel} />
          <a className="btn btn-accent btn-sm" href="#contact" data-magnetic="0.25">
            <Roll>Let&apos;s talk</Roll>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className="mobile-menu no-print" data-open={open} aria-hidden={!open}>
        <ul>
          {[...sections, ["Contact", "#contact"]].map(([label, href], i) => (
            <li key={href} style={{ "--i": i }}>
              <a href={href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                <span className="mono">0{i + 1}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-foot">
          <a href={`mailto:${resume.email}`} tabIndex={open ? 0 : -1}>
            {resume.email}
          </a>
          <LocalTime timeZone={resume.timezone} label={resume.timezoneLabel} />
        </div>
      </div>
    </>
  );
}
