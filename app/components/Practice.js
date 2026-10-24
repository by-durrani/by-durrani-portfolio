import { resume } from "@/data/resume";
import { Heading, SectionLabel } from "./Text";

export default function Practice() {
  const { intro, tracks, focus } = resume.practice;
  const { leetcode } = resume.links;

  return (
    <section id="practice" className="section practice">
      <div className="container">
        <SectionLabel index="05" label="Practice" />
        <div className="practice-grid">
          <div className="practice-intro">
            <Heading text="Fundamentals, kept *sharp*." className="h2" />
            <p className="lead" data-reveal>
              {intro}
            </p>
            <ul className="chips" data-reveal>
              {focus.map((f) => (
                <li className="chip" key={f}>
                  {f}
                </li>
              ))}
            </ul>
            {leetcode && (
              <a className="btn btn-ghost no-print" href={leetcode} target="_blank" rel="noreferrer" data-magnetic="0.25">
                LeetCode profile <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>

          <ul className="tracks">
            {tracks.map((t, i) => (
              <li key={t.name} data-reveal style={{ "--d": i }}>
                <a className="track" href={t.href} target="_blank" rel="noreferrer" data-spotlight data-cursor-label="Open ↗">
                  <span className="track-n mono">0{i + 1}</span>
                  <span className="track-text">
                    <strong>{t.name}</strong>
                    <span>{t.detail}</span>
                  </span>
                  <span className="track-arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
