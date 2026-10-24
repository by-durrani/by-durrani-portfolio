// The by-durrani mark: ∂ (the partial-derivative "d" — rate of change) plus a
// lime full stop. The glyph is EB Garamond Italic 800 (SIL OFL) converted to an
// outline, so it renders identically everywhere without loading a font.
// Ink box: 0–71 × 0–100; the baseline sits at y≈98.

export const LOGO_VIEWBOX = "0 0 71 100";
export const LOGO_DOT = { cx: 63, cy: 90.5, r: 7.5 };
export const LOGO_PATH =
  "M18.1 100Q12.9 100 8.5 97.4Q4.2 94.9 1.9 90.5Q-0.4 86.1 0.1 80.8Q0.6 73.9 3.5 66.3Q6.3 58.8 11.4 52.2Q16.5 45.5 23.5 41.4Q30.5 37.3 39.4 37.3Q40.5 37.3 41.4 37.4Q42.3 37.6 43.2 37.8Q43.9 38 44.4 38.2Q45 38.4 45.4 38.4Q46.1 38.4 46.5 36Q46.9 33.5 46.9 31.7Q46.9 26.4 46 20.9Q45 15.3 42.4 11.1Q39.8 6.8 35.3 5.8Q33 5.3 32 4.7Q30.9 4 30.9 3.1Q30.9 1.3 32.5 0.6Q34 0 36.4 0Q46.2 0 52.9 4.4Q59.6 8.8 63 16.3Q66.4 23.9 66.4 33.5Q66.4 42.3 63.9 51.6Q61.4 60.9 56.8 69.5Q52.2 78.2 46.2 85Q40.1 91.9 33 96Q25.8 100 18.1 100ZM21.3 94.3Q24 94.3 27 91.2Q30 88 32.9 82.9Q35.8 77.7 38.4 71.6Q41 65.4 42.6 59.2Q44.3 53 44.7 48Q45 45.2 44 43.9Q43 42.6 40.8 42.6Q38.6 42.6 35.7 45.7Q32.7 48.8 29.8 54Q26.8 59.1 24.1 65.3Q21.3 71.5 19.5 77.6Q17.7 83.7 17.3 88.7Q17 91.5 18.2 92.9Q19.4 94.3 21.3 94.3Z";

// ∂ takes currentColor; the dot uses .logo-dot (lime by default).
export default function LogoMark({ className = "", title }) {
  return (
    <svg
      className={`logo-mark ${className}`}
      viewBox={LOGO_VIEWBOX}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : "true"}
    >
      {title && <title>{title}</title>}
      <path d={LOGO_PATH} fill="currentColor" />
      <circle className="logo-dot" {...LOGO_DOT} />
    </svg>
  );
}
