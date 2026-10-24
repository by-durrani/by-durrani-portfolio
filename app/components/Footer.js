import { resume } from "@/data/resume";
import LocalTime from "./LocalTime";
import { socials } from "./Contact";
import { Roll } from "./Text";

const explore = [
  ["About", "#about"],
  ["Capabilities", "#capabilities"],
  ["Work", "#projects"],
  ["Experience", "#experience"],
  ["Practice", "#practice"],
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer no-print">
      <div className="container">
        <div className="footer-top">
          <p className="footer-motto serif">“{resume.motto}”</p>
          <div className="footer-cols">
            <div>
              <h4 className="mono">Explore</h4>
              <ul>
                {explore.map(([label, href]) => (
                  <li key={href}>
                    <a href={href}>
                      <Roll>{label}</Roll>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mono">Connect</h4>
              <ul>
                <li>
                  <a href={`mailto:${resume.email}`}>
                    <Roll>Email</Roll>
                  </a>
                </li>
                {socials().map(([label, href]) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noreferrer">
                      <Roll>{label}</Roll>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mono">Local time</h4>
              <p className="footer-time">
                <LocalTime timeZone={resume.timezone} label={resume.timezoneLabel} />
              </p>
              <a href="#top" className="to-top" data-magnetic="0.35" aria-label="Back to top">
                ↑
              </a>
            </div>
          </div>
        </div>

        <div className="footer-giant" aria-hidden="true">
          {resume.name.split(" ").at(-1)}
        </div>

        <div className="footer-legal mono">
          <span>
            © {year} {resume.name}. {resume.footerNote}
          </span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
