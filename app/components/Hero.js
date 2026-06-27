import { resume } from "@/data/resume";

export default function Hero() {
  const snap = [
    { dot: "#9fe870", label: "Role", val: resume.title },
    { dot: "#38c8ff", label: "Based", val: resume.location },
    { dot: "#ffc091", label: "Experience", val: resume.stats[0].value },
    { dot: "#c5edab", label: "Focus", val: "Full-stack · AI/ML" },
  ];

  return (
    <header id="top" className="band band--sage hero">
      <div className="inner">
        <div className="hero-grid">
          <div className="hero-left">
            <span className="eyebrow avail">{resume.availability}</span>
            <h1 className="t-hero">{resume.name}</h1>
            <p className="role t-display-sm body-c">{resume.title}</p>
            <p className="tagline t-lead">{resume.tagline}</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#projects">
                View work
              </a>
              <a className="btn btn-tertiary" href="#contact">
                Get in touch
              </a>
            </div>
          </div>

          <aside className="snapshot" aria-label="At a glance">
            <div className="snap-head">At a glance</div>
            {snap.map((r) => (
              <div className="snap-row" key={r.label}>
                <span className="left">
                  <span className="dot" style={{ background: r.dot }} />
                  {r.label}
                </span>
                <span className="val">{r.val}</span>
              </div>
            ))}
            <a className="btn btn-primary" href={`mailto:${resume.email}`}>
              Let&apos;s talk →
            </a>
          </aside>
        </div>
      </div>
    </header>
  );
}
