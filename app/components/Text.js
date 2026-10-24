// Typographic helpers (server components). Splitting happens at render time so
// markup is stable for hydration; CSS drives the motion via the --i index.
// Split pieces are aria-hidden and the whole string is exposed via aria-label.

// "Things I've *built*." → [{ word: "Things", accent: false }, …, { word: "built.", accent: true }]
function tokens(text) {
  return text.split(" ").map((raw) => {
    const accent = /\*/.test(raw);
    return { word: raw.replace(/\*/g, ""), accent };
  });
}

export const plain = (text) => text.replace(/\*/g, "");

// Inline text with *accent* words in the italic serif face, no motion.
export function Accent({ text }) {
  return tokens(text).map(({ word, accent }, i) => (
    <span key={i}>
      {accent ? <em className="serif">{word}</em> : word}
      {" "}
    </span>
  ));
}

// Character split for the hero name: each char rises from a mask.
export function Chars({ text, start = 0 }) {
  let i = start;
  return (
    <span className="chars" aria-hidden="true">
      {text.split(" ").map((word, w) => (
        <span key={w}>
          {w > 0 && " "}
          <span className="chars-word">
            {[...word].map((ch, c) => (
              <span className="char" key={c} style={{ "--i": i++ }}>
                {ch}
              </span>
            ))}
          </span>
        </span>
      ))}
    </span>
  );
}

// Word-masked heading that reveals when scrolled into view.
export function Heading({ as: Tag = "h2", text, className = "" }) {
  return (
    <Tag className={`split ${className}`} data-split aria-label={plain(text)}>
      {tokens(text).map(({ word, accent }, i) => (
        <span key={i} aria-hidden="true">
          {i > 0 && " "}
          <span className="w-mask">
            <span className={accent ? "w serif" : "w"} style={{ "--i": i }}>
              {word}
            </span>
          </span>
        </span>
      ))}
    </Tag>
  );
}

// Words that brighten with scroll progress (driven by Effects → --p).
export function Highlight({ text, className = "" }) {
  const words = text.split(" ");
  return (
    <p className={`highlight ${className}`} data-highlight style={{ "--n": words.length }}>
      {words.map((w, i) => (
        <span className="hw" key={i} style={{ "--i": i }}>
          {w}{" "}
        </span>
      ))}
    </p>
  );
}

// Text that rolls up to a duplicate of itself on hover (parent link/button).
export function Roll({ children }) {
  return (
    <span className="roll" data-text={children}>
      <span>{children}</span>
    </span>
  );
}

// Section label row: "(01)  About  ————"
export function SectionLabel({ index, label }) {
  return (
    <div className="section-label" data-reveal>
      <span className="mono">({index})</span>
      <span className="mono">{label}</span>
      <span className="rule" />
    </div>
  );
}
