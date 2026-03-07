import { profile } from "../../data/profile.js";
import ContactForm from "../ContactForm.jsx";
import { FaGithub } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin } from "react-icons/fi";

const LINKS = [
  { label: "Email",    value: profile.email,                         href: `mailto:${profile.email}`,     icon: HiOutlineMail },
  { label: "LinkedIn", value: "linkedin.com/in/shirin-shujaa",        href: profile.links.linkedin,        icon: FiLinkedin    },
  { label: "GitHub",   value: "github.com/shirin44",                  href: profile.links.github,          icon: FaGithub      },
  { label: "ORCID",    value: "0009-0007-7408-3848",                  href: profile.links.orcid,           icon: SiOrcid       },
];

export default function ContactSection() {
  return (
    <div className="card contactWrap">

      {/* ── Header ── */}
      <div className="commHeader" style={{ marginBottom: 16 }}>
        <div className="commHeaderTitle" style={{ fontSize: "clamp(22px, 3.2vw, 38px)" }}>
          Contact
        </div>
        <div className="commHeaderDesc">
          Open to research collaborations, internships &amp; opportunities.
        </div>
      </div>

      <div className="contactLayout">

        {/* ── Links ── */}
        <div className="contactLinks">
          <div className="achSectionLabel" style={{ marginBottom: 10 }}>Reach me at</div>
          {LINKS.map(({ label, value, href, icon: Icon }) => (
            <a key={label} className="contactBox" href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer">
              <Icon className="contactBoxIcon" />
              <div>
                <div className="contactLabel">{label}</div>
                <div className="contactValue">{value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* ── Form ── */}
        <div className="contactFormWrap">
          <div className="achSectionLabel" style={{ marginBottom: 10 }}>Send a message</div>
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
