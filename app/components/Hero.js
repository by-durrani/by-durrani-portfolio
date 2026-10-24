import { resume } from "@/data/resume";
import { Chars, Accent, Roll } from "./Text";
import LocalTime from "./LocalTime";

export default function Hero() {
  const parts = resume.name.split(" ");
  const line1 = parts.slice(0, -1).join(" ");
  const line2 = parts.at(-1);
  const roles = [...resume.roles, resume.roles[0]]; // last = first for a seamless loop
  const { github, linkedin, website } = resume.links;

  return (
    <header id="top" className="hero" data-spotlight>
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-lines" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-top">
          <span className="pill">
            <span className="pulse" aria-hidden="true" />
            {resume.availability}
          </span>
          <span className="hero-meta mono">
            {resume.location} · <LocalTime timeZone={resume.timezone} label={resume.timezoneLabel} />
          </span>
        </div>

        <h1 className="hero-title" aria-label={resume.name}>
          <span className="hero-line">
            <Chars text={line1} />
          </span>
          <span className="hero-line hero-line--2">
            <Chars text={line2} start={line1.length} />
            <a href="#projects" className="badge no-print" data-magnetic="0.3" data-cursor-label="Work ↓" aria-label="Jump to selected work">
              <svg viewBox="0 0 120 120" aria-hidden="true">
                <defs>
                  <path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
                </defs>
                <text>
                  <textPath href="#badge-circle" textLength="286" lengthAdjust="spacing">
                    AVAILABLE FOR WORK ✦ FULL-STACK & AI ✦
                  </textPath>
                </text>
              </svg>
              <span className="badge-arrow">↓</span>
            </a>
          </span>
        </h1>

        <div className="hero-bottom">
          <div className="hero-role">
            <span className="hero-rotator mono" aria-label={resume.roles.join(", ")}>
              <span className="hero-rotator-track" aria-hidden="true">
                {roles.map((r, i) => (
                  <span key={i}>{r}</span>
                ))}
              </span>
            </span>
            <p className="hero-line-accent">
              <Accent text={resume.heroLine} />
            </p>
          </div>

          <div className="hero-side">
            <p className="hero-tagline">{resume.tagline}</p>
            <div className="hero-cta no-print">
              <a className="btn btn-accent" href="#projects" data-magnetic="0.3">
                <Roll>View work</Roll>
                <span className="btn-icon" aria-hidden="true">↘</span>
              </a>
              <a className="btn btn-ghost" href="#contact" data-magnetic="0.3">
                <Roll>Get in touch</Roll>
              </a>
            </div>
          </div>
        </div>

        <p className="print-only print-contact">
          {resume.email} · {github} · {linkedin} · {website}
        </p>
      </div>

      <a href="#about" className="scroll-cue mono no-print" aria-label="Scroll to about">
        <span className="scroll-cue-line" aria-hidden="true" />
        Scroll
      </a>
    </header>
  );
}
