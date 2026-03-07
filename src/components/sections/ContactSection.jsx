import { profile } from "../../data/profile.js";
import ContactForm from "../ContactForm.jsx";
import { FaGithub } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin } from "react-icons/fi";

const LINKS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: HiOutlineMail,
    color: "#EA4335",
    bg: "rgba(234,67,53,.09)",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shirin-shujaa",
    href: profile.links.linkedin,
    icon: FiLinkedin,
    color: "#0A66C2",
    bg: "rgba(10,102,194,.09)",
  },
  {
    label: "GitHub",
    value: "github.com/shirin44",
    href: profile.links.github,
    icon: FaGithub,
    color: "#24292e",
    bg: "rgba(36,41,46,.07)",
  },
  {
    label: "ORCID",
    value: "0009-0007-7408-3848",
    href: profile.links.orcid,
    icon: SiOrcid,
    color: "#7db700",
    bg: "rgba(125,183,0,.10)",
  },
];

export default function ContactSection() {
  return (
    <div className="card contactWrap">

      {/* ── Header ── */}
      <div className="contactHeader">
        <div className="commHeaderTitle" style={{ fontSize: "clamp(22px, 3.2vw, 38px)" }}>
          Let's Connect
        </div>
        <div className="commHeaderDesc">
          Open to research collaborations, internships &amp; opportunities.
          I'm always happy to chat!
        </div>
        <div className="contactAvail">
          <span className="contactAvailDot" />
          Available for opportunities
        </div>
      </div>

      <div className="contactLayout">

        {/* ── Links ── */}
        <div className="contactLinks">
          <div className="achSectionLabel" style={{ marginBottom: 12 }}>Reach me at</div>
          {LINKS.map(({ label, value, href, icon: Icon, color, bg }) => (
            <a
              key={label}
              className="contactBox"
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
            >
              <div className="contactBoxIconWrap" style={{ background: bg }}>
                <Icon style={{ color, fontSize: 18 }} />
              </div>
              <div className="contactBoxText">
                <div className="contactLabel">{label}</div>
                <div className="contactValue">{value}</div>
              </div>
              <span className="contactBoxArrow">→</span>
            </a>
          ))}
        </div>

        {/* ── Form ── */}
        <div className="contactFormWrap">
          <div className="achSectionLabel" style={{ marginBottom: 12 }}>Send a message</div>
          <div className="contactFormCard">
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  );
}
