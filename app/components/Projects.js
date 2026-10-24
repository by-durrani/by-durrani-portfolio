import { resume } from "@/data/resume";
import { Heading, SectionLabel } from "./Text";

const FEATURED = 4;
const pad = (n) => String(n).padStart(2, "0");

// What a link looks like in the cover's fake address bar.
function displayUrl(href) {
  const u = new URL(href);
  return u.host === "github.com" ? `github.com${u.pathname}` : u.host;
}

function FeaturedCard({ p, i }) {
  const primary = p.links.live || p.links.code;
  const isLive = Boolean(p.links.live);
  return (
    <article className="pcard" data-reveal style={{ "--d": i % 2 }}>
      <a
        className="pcover"
        href={primary}
        target="_blank"
        rel="noreferrer"
        data-tilt
        data-cursor-label={isLive ? "Visit ↗" : "Code ↗"}
        style={{ "--h": p.hue }}
        aria-label={`${p.name} — ${isLive ? "open live site" : "view source"}`}
      >
        <span className="pcover-bg" aria-hidden="true" />
        <span className="pcover-grid" aria-hidden="true" />
        <span className="pcover-index" aria-hidden="true">{pad(i + 1)}</span>
        <span className="pcover-window" aria-hidden="true">
          <span className="pcover-bar">
            <i />
            <i />
            <i />
            <span className="pcover-url mono">{displayUrl(primary)}</span>
          </span>
          <span className="pcover-body">
            <span className="pcover-tag mono">{p.tag}</span>
            <span className="pcover-title">{p.short || p.name}</span>
            <span className="pcover-lines">
              <i />
              <i />
              <i />
            </span>
          </span>
        </span>
      </a>

      <div className="pmeta">
        <div className="pmeta-top">
          <h3>{p.name}</h3>
          <span className="mono">{p.year}</span>
        </div>
        <p>{p.blurb}</p>
        <ul className="pstack">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <div className="plinks">
          {p.links.live && (
            <a href={p.links.live} target="_blank" rel="noreferrer">
              Live ↗<span className="print-only"> {p.links.live}</span>
            </a>
          )}
          {p.links.code && (
            <a href={p.links.code} target="_blank" rel="noreferrer">
              Code ↗<span className="print-only"> {p.links.code}</span>
            </a>
          )}
          {p.links.model && (
            <a href={p.links.model} target="_blank" rel="noreferrer">
              Model API ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = resume.projects.slice(0, FEATURED);
  const rest = resume.projects.slice(FEATURED);
  const years = resume.projects.map((p) => p.year);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionLabel index="03" label="Selected work" />
        <div className="work-head">
          <Heading text="Things I've *built*." className="h2" />
          <p className="work-count mono" data-reveal>
            ({pad(resume.projects.length)}) projects · {Math.min(...years)} — {Math.max(...years)}
          </p>
        </div>

        <div className="featured">
          {featured.map((p, i) => (
            <FeaturedCard p={p} i={i} key={p.name} />
          ))}
        </div>

        <div className="index">
          <div className="index-head mono" data-reveal>
            <span>More work</span>
            <span className="index-cols" aria-hidden="true">
              <span>Type</span>
              <span>Year</span>
            </span>
          </div>
          <ul className="index-list">
            {rest.map((p, i) => {
              const primary = p.links.live || p.links.code;
              return (
                <li className="irow" key={p.name} data-reveal>
                  <a
                    href={primary}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-label={p.links.live ? "Visit ↗" : "Code ↗"}
                  >
                    <span className="irow-n mono">{pad(i + FEATURED + 1)}</span>
                    <span className="irow-main">
                      <span className="irow-name">{p.name}</span>
                      <span className="irow-blurb">{p.blurb}</span>
                    </span>
                    <span className="irow-tag mono">{p.tag}</span>
                    <span className="irow-year mono">{p.year}</span>
                    <span className="irow-arrow" aria-hidden="true">↗</span>
                    <span className="print-only irow-url">{primary}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="work-more no-print" data-reveal>
          <a className="btn btn-ghost" href={resume.links.github} target="_blank" rel="noreferrer" data-magnetic="0.25">
            Every repo on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
