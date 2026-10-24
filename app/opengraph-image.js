import { ImageResponse } from "next/og";
import { resume } from "@/data/resume";
import { LOGO_DOT, LOGO_PATH, LOGO_VIEWBOX } from "./components/Logo";

// Social preview card (LinkedIn, X, Slack…), generated at build time.
export const alt = `${resume.name} — ${resume.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const parts = resume.name.split(" ");
  const first = parts.slice(0, -1).join(" ");
  const last = parts.at(-1);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "radial-gradient(circle at 80% 45%, #253211 0%, #0b0b0a 52%)",
          color: "#f2f0e9",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#c8f560" }}>
            <div style={{ width: 14, height: 14, borderRadius: 14, background: "#c8f560" }} />
            {resume.availability}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 100, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>{first}</div>
            <div style={{ fontSize: 100, fontWeight: 700, letterSpacing: -4, lineHeight: 1.05 }}>{last}</div>
            <div style={{ fontSize: 34, color: "#bdbbb2", marginTop: 26 }}>
              {`${resume.title} · ${resume.location}`}
            </div>
          </div>

          <div style={{ display: "flex", gap: 40, fontSize: 24, color: "#8a887f" }}>
            <span>{new URL(resume.links.website).host}</span>
            <span>github.com/by-durrani</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 360 }}>
          <svg width="320" height="451" viewBox={LOGO_VIEWBOX}>
            <path d={LOGO_PATH} fill="#f2f0e9" />
            <circle cx={LOGO_DOT.cx} cy={LOGO_DOT.cy} r={LOGO_DOT.r} fill="#c8f560" />
          </svg>
        </div>
      </div>
    ),
    size
  );
}
