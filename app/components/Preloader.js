// Pure-CSS intro curtain: a 0→100 counter, then the panel wipes up and the
// hero name rises. No JS involved, so it can never get stuck covering the page.
export default function Preloader({ name }) {
  return (
    <div className="preloader no-print" aria-hidden="true">
      <div className="preloader-inner">
        <span className="preloader-name">{name}</span>
        <span className="preloader-count mono" />
      </div>
      <span className="preloader-bar" />
    </div>
  );
}
