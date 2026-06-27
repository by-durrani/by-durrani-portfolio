import { resume } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="band band--sage">
      <div className="inner">
        <p className="eyebrow">Experience</p>
        <h2 className="t-h2" style={{ marginBottom: 40 }}>
          Where I&apos;ve shipped.
        </h2>
        <div className="exp">
          {resume.experience.map((job, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-meta">
                <div className="period">{job.period}</div>
                <div className="company">{job.company}</div>
                <div className="loc">{job.location}</div>
              </div>
              <div className="exp-body">
                <h3>{job.role}</h3>
                <ul>
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
