import { resume } from "@/data/resume";
import { Heading, Highlight, SectionLabel } from "./Text";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionLabel index="01" label="About" />

        <div className="about-grid">
          <aside className="about-aside">
            <Heading text="Code, craft & a *real* business." className="h2" />
            <dl className="facts" data-reveal>
              {resume.facts.map((f) => (
                <div className="fact" key={f.k}>
                  <dt className="mono">{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="about-main">
            <Highlight text={resume.statement} className="statement" />

            <div className="about-body" data-reveal>
              {resume.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="about-now">
              <div className="now-card" data-reveal data-spotlight>
                <span className="mono now-label">
                  <span className="pulse" aria-hidden="true" /> Now building
                </span>
                <p>{resume.nowBuilding}</p>
              </div>
              <div className="leveling" data-reveal>
                <span className="mono">Currently leveling up</span>
                <ul className="chips">
                  {resume.learning.map((l) => (
                    <li className="chip" key={l}>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="motto serif" data-reveal>
              “{resume.motto}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
