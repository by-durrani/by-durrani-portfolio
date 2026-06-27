import { resume } from "@/data/resume";

export default function LeetCode() {
  const lc = resume.leetcode;
  return (
    <section id="leetcode" className="band band--ink">
      <div className="inner">
        <p className="eyebrow">LeetCode / DSA</p>
        <h2 className="t-h2" style={{ marginBottom: 44, color: "var(--primary)" }}>
          Fundamentals, kept sharp.
        </h2>

        <div className="lc-wrap">
          <div className="lc-total center">
            <div className="big">{lc.total}</div>
            <div className="lbl">problems solved</div>
          </div>

          <div className="lc-bars">
            {lc.breakdown.map((b) => {
              const pct = Math.min(100, Math.round((b.solved / b.of) * 100));
              return (
                <div className="lc-bar" key={b.level}>
                  <div className="row">
                    <span>{b.level}</span>
                    <span className="n">
                      {b.solved} / {b.of}
                    </span>
                  </div>
                  <div className="lc-track">
                    <div
                      className="lc-fill"
                      style={{ width: `${pct}%`, background: b.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lc-extra">
          {lc.extra.map((e) => (
            <div className="box" key={e.label}>
              <div className="v">{e.value}</div>
              <div className="l">{e.label}</div>
            </div>
          ))}
        </div>

        <p className="lc-focus">
          {lc.focus.map((f, i) => (
            <span key={f}>
              {f}
              {i < lc.focus.length - 1 && <span className="dot">·</span>}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
