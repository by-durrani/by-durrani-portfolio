const ROW_A = ["React", "Next.js", "Node.js", "Bun", "TypeScript", "Three.js", "PostgreSQL", "Docker"];
const ROW_B = ["RAG systems", "LLM agents", "Python", "Computer vision", "System design", "Branding", "Google Cloud"];

function Row({ words, reverse, outline }) {
  const items = [...words, ...words];
  return (
    <div className={`marquee-row${reverse ? " marquee-row--rev" : ""}${outline ? " marquee-row--outline" : ""}`}>
      <div className="marquee-track">
        {items.map((w, i) => (
          <span className="marquee-item" key={i}>
            {w}
            <i aria-hidden="true">✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}

// Decorative two-row ticker; skews with scroll velocity (--vel from Effects).
export default function Marquee() {
  return (
    <section className="marquee no-print" aria-hidden="true">
      <Row words={ROW_A} />
      <Row words={ROW_B} reverse outline />
    </section>
  );
}
