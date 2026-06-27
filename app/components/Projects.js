import { resume } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="band band--white">
      <div className="inner">
        <p className="eyebrow">Selected work</p>
        <h2 className="t-h2" style={{ marginBottom: 36 }}>
          Things I&apos;ve built.
        </h2>
        <div className="proj-grid">
          {resume.projects.map((p, i) => {
            // First project = the dark "promotional" polarity-flip card.
            const isFeatured = i === 0;
            return (
              <article
                className={isFeatured ? "card card--dark" : "card"}
                key={p.name}
              >
                <div className="ptop">
                  <h3>{p.name}</h3>
                  <span className="ptag">{p.tag}</span>
                </div>
                <p className="blurb t-body">{p.blurb}</p>
                <p className="stack">{p.stack.join("  ·  ")}</p>
                <div className="plinks">
                  {p.links.live && p.links.live !== "#" && (
                    <a href={p.links.live} target="_blank" rel="noreferrer">
                      Live ↗
                    </a>
                  )}
                  {p.links.code && (
                    <a href={p.links.code} target="_blank" rel="noreferrer">
                      Code ↗
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
