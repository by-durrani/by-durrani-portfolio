"use client";

export default function PrintButton({
  className = "btn btn-pill-ghost",
  children = "Download résumé",
}) {
  return (
    <button
      type="button"
      className={`${className} no-print`}
      onClick={() => window.print()}
    >
      {children}
    </button>
  );
}
