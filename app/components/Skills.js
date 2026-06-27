import { resume } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="band band--white">
      <div className="inner">
        <p className="eyebrow">Skills &amp; stack</p>
        <h2 className="t-h2" style={{ marginBottom: 36 }}>
          The whole pipeline.
        </h2>
        <div className="skills-grid">
          {resume.skills.map((group) => (
            <div className="skill-card" key={group.group}>
              <div className="label">{group.group}</div>
              <div className="items">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
