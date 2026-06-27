import { resume } from "@/data/resume";

export default function Stats() {
  return (
    <section className="band band--white">
      <div className="inner">
        <div className="stats">
          {resume.stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="val">{s.value}</div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
