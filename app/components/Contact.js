import { resume } from "@/data/resume";
import PrintButton from "./PrintButton";
import CopyEmail from "./CopyEmail";
import { Heading, Roll, SectionLabel } from "./Text";

export const socials = () =>
  [
    ["GitHub", resume.links.github],
    ["LinkedIn", resume.links.linkedin],
    ["X / Twitter", resume.links.x],
    ["LeetCode", resume.links.leetcode],
  ].filter(([, href]) => href);

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionLabel index="06" label="Contact" />
        <Heading text="Let's build *something* real." className="contact-title" />

        <div className="contact-grid">
          <a className="contact-orb no-print" href={`mailto:${resume.email}`} data-magnetic="0.4" data-cursor-label="Say hi ✦">
            <span>Get in touch</span>
            <span aria-hidden="true">↗</span>
          </a>

          <div className="contact-side" data-reveal>
            <p className="lead">{resume.availability}. Based in {resume.location} — working with teams anywhere.</p>
            <CopyEmail email={resume.email} />
            <ul className="socials">
              {socials().map(([label, href]) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer">
                    <Roll>{label}</Roll> <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <PrintButton className="btn btn-ghost">Download résumé</PrintButton>
          </div>
        </div>
      </div>
    </section>
  );
}
