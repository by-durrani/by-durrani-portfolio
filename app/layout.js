import { Bricolage_Grotesque, Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { resume } from "@/data/resume";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const title = `${resume.name} — ${resume.title}`;

export const metadata = {
  metadataBase: new URL(resume.links.website),
  title: { default: title, template: `%s — ${resume.name}` },
  description: resume.tagline,
  applicationName: `${resume.name} — Portfolio`,
  authors: [{ name: resume.name, url: resume.links.website }],
  creator: resume.name,
  keywords: [
    resume.name,
    "full-stack engineer",
    "AI engineer",
    "Next.js developer",
    "React developer",
    "RAG",
    "Pakistan",
    "Durrani Arts",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: resume.tagline,
    url: "/",
    siteName: resume.name,
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: resume.tagline,
    creator: "@" + resume.links.x.split("/").pop(),
  },
};

export const viewport = {
  themeColor: "#0b0b0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// Structured data so search engines understand who this page is about.
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: resume.name,
  jobTitle: resume.title,
  email: `mailto:${resume.email}`,
  url: resume.links.website,
  address: { "@type": "PostalAddress", addressCountry: "PK" },
  sameAs: [resume.links.github, resume.links.linkedin, resume.links.x].filter(Boolean),
  knowsAbout: resume.skills.flatMap((g) => g.items).slice(0, 24),
  worksFor: { "@type": "Organization", name: "Durrani Arts" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Preloader name={resume.name} />
        <div className="progress no-print" aria-hidden="true" />
        {children}
        <div className="grain no-print" aria-hidden="true" />
        <Cursor />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </body>
    </html>
  );
}
