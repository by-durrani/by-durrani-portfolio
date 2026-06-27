import { resume } from "@/data/resume";
import PrintButton from "./PrintButton";

export default function Contact() {
  const { github, linkedin, leetcode } = resume.links;
  return (
    <section id="contact" className="band band--sage">
      <div className="inner">
        <div className="contact-card">
          <h2 className="t-h2">Let&apos;s build something.</h2>
          <p className="sub t-lead">{resume.availability}</p>

          <div className="contact-cta">
            <a className="btn btn-primary" href={`mailto:${resume.email}`}>
              Email me
            </a>
            <PrintButton className="btn btn-tertiary" children="Download résumé" />
          </div>

          <div className="contact-social">
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            )}
            {leetcode && (
              <a href={leetcode} target="_blank" rel="noreferrer">
                LeetCode ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
