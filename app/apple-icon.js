import { ImageResponse } from "next/og";
import { LOGO_DOT, LOGO_PATH, LOGO_VIEWBOX } from "./components/Logo";

// iOS home-screen icon (iOS rounds the corners itself).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0a",
        }}
      >
        <svg width="85" height="120" viewBox={LOGO_VIEWBOX} style={{ marginLeft: 6 }}>
          <path d={LOGO_PATH} fill="#f2f0e9" />
          <circle cx={LOGO_DOT.cx} cy={LOGO_DOT.cy} r={LOGO_DOT.r} fill="#c8f560" />
        </svg>
      </div>
    ),
    size
  );
}
