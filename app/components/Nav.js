import { resume } from "@/data/resume";

const sections = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Work", "#projects"],
  ["LeetCode", "#leetcode"],
];

export default function Nav() {
  return (
    <nav className="nav no-print" aria-label="Primary">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          {resume.name.split(" ")[0]}
        </a>
        <div className="nav-links">
          {sections.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <a className="btn btn-secondary" href={`mailto:${resume.email}`}>
            Email
          </a>
          <a className="btn btn-primary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
