import "./globals.css";
import { resume } from "@/data/resume";

export const metadata = {
  title: `${resume.name} — ${resume.title}`,
  description: resume.tagline,
  openGraph: {
    title: `${resume.name} — ${resume.title}`,
    description: resume.tagline,
    type: "website",
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
