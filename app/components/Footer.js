import { resume } from "@/data/resume";

export default function Footer() {
  const { github, linkedin, leetcode } = resume.links;
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="inner">
        <div className="footer-cols">
          <div>
            <div className="brand">{resume.name}</div>
            <p style={{ marginTop: 10, maxWidth: 320, fontSize: 14, color: "rgba(232,235,230,0.72)" }}>
              {resume.tagline}
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Work</a></li>
              <li><a href="#leetcode">LeetCode</a></li>
            </ul>
          </div>

          <div>
            <h4>Connect</h4>
            <ul>
              <li><a href={`mailto:${resume.email}`}>Email</a></li>
              {github && <li><a href={github} target="_blank" rel="noreferrer">GitHub</a></li>}
              {linkedin && <li><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>}
              {leetcode && <li><a href={leetcode} target="_blank" rel="noreferrer">LeetCode</a></li>}
            </ul>
          </div>
        </div>

        <div className="footer-legal">
          <span>© {year} {resume.name}. {resume.footerNote}</span>
          <span>Built with Next.js.</span>
        </div>
      </div>
    </footer>
  );
}
