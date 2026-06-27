import { resume } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="band band--sage">
      <div className="inner">
        <p className="eyebrow">About</p>
        <h2 className="t-h2" style={{ marginBottom: 28, maxWidth: "16ch" }}>
          Money-app calm, full-stack depth.
        </h2>
        <div className="about-body">
          {resume.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="leveling">
          <h3>Currently leveling up</h3>
          <div className="chips">
            {resume.learning.map((l) => (
              <span className="chip" key={l}>
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
