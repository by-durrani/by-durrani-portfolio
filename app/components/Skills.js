import { resume } from "@/data/resume";
import { Heading, SectionLabel } from "./Text";

export default function Skills() {
  return (
    <section id="capabilities" className="section">
      <div className="container">
        <SectionLabel index="02" label="Capabilities" />
        <Heading text="The whole *pipeline*." className="h2 section-title" />

        <div className="services">
          {resume.services.map((s, i) => (
            <article className="service" key={s.title} data-reveal data-spotlight style={{ "--d": i }}>
              <span className="service-n mono">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul className="tools">
                {s.tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="stack">
          {resume.skills.map((g) => (
            <div className="stack-row" key={g.group} data-reveal>
              <h3 className="mono">{g.group}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
