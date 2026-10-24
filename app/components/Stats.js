import { resume } from "@/data/resume";

export default function Stats() {
  return (
    <section className="stats-band" aria-label="At a glance">
      <div className="container">
        <ul className="stats">
          {resume.stats.map((s, i) => (
            <li className="stat" key={s.label} data-reveal style={{ "--d": i }}>
              <span
                className="stat-val"
                data-count={s.value}
                data-from={s.from}
                data-pad={s.pad}
                data-suffix={s.suffix}
              >
                {String(s.value).padStart(s.pad || 0, "0")}
                {s.suffix}
              </span>
              <span className="stat-lbl">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
