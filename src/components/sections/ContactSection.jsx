import { profile } from "../../data/profile.js";
import FileHeader from "../FileHeader.jsx";
import ContactForm from "../ContactForm.jsx";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import { SiOrcid } from "react-icons/si";

const LINKS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: FiMail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shirin-shujaa",
    href: profile.links.linkedin,
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/shirin44",
    href: profile.links.github,
    icon: FiGithub,
  },
  {
    label: "ORCID",
    value: "0009-0007-7408-3848",
    href: profile.links.orcid,
    icon: SiOrcid,
  },
];

export default function ContactSection() {
  return (
    <div className="card contactWrap">

      {/* ── Header ── */}
      <div className="contactHeader">
        <FileHeader no={8} title="Work with me on NLP & Responsible AI" note="don't be shy, say hi!" />
        <div className="contactAvail">
          <span className="contactAvailDot" />
          Open to research collaborations &amp; internships
        </div>
      </div>

      <div className="contactLayout">

        {/* ── Links ── */}
        <div className="contactLinks">
          {LINKS.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              className="contactBox"
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
            >
              <div className="contactBoxIconWrap">
                <Icon size={18} aria-hidden="true" />
              </div>
              <div className="contactBoxText">
                <div className="contactLabel">{label}</div>
                <div className="contactValue">{value}</div>
              </div>
              <FiArrowRight className="contactBoxArrow" aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* ── Form ── */}
        <div className="contactFormWrap">
          <div className="contactFormCard">
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  );
}
