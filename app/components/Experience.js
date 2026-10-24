import { resume } from "@/data/resume";
import { Heading, SectionLabel } from "./Text";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionLabel index="04" label="Experience" />
        <Heading text="Where I've *shipped*." className="h2 section-title" />

        <ol className="exp">
          {resume.experience.map((job) => (
            <li className="exp-row" key={`${job.role}-${job.company}`} data-reveal>
              <span className="exp-period mono">{job.period}</span>
              <div className="exp-main">
                <h3>
                  {job.role} <span className="exp-at serif">at</span> {job.company}
                </h3>
                <ul>
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
              <span className="exp-loc mono">{job.location}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
