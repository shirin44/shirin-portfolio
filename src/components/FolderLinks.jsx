// src/components/FolderLinks.jsx
import { profile } from "../data/profile.js";
import { FiGithub, FiMail, FiFileText, FiLinkedin } from "react-icons/fi";
import { SiOrcid } from "react-icons/si";

export default function FolderLinks({ dock = false }) {
  return (
    <div className={dock ? "folderLinks folderLinks--dock" : "folderLinks"} aria-label="Quick links">
      {dock ? (
        <a className="folderLink" href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <FiLinkedin />
        </a>
      ) : (
      /* LinkedIn uses your custom sticker image on the folder */
      <a
        className="folderLink folderLink--linkedin"
        href={profile.links.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <span className="liTape liTape--l" aria-hidden="true" />
        <span className="liTape liTape--r" aria-hidden="true" />
        <img
          src="images/links/linkedin.png"
          alt=""
          className="folderLinkImg folderLinkImg--linkedin"
        />
      </a>
      )}

      {/* Others use icons */}
      <a
        className="folderLink folderLink--github"
        href={profile.links.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <FiGithub />
      </a>

      <a
        className="folderLink folderLink--orcid"
        href={profile.links.orcid}
        target="_blank"
        rel="noreferrer"
        aria-label="ORCID"
        title="ORCID"
      >
        <SiOrcid />
      </a>

      <a
        className="folderLink folderLink--email"
        href={`mailto:${profile.email}`}
        aria-label="Email"
        title="Email"
      >
        <FiMail />
      </a>

      <a
        className="folderLink folderLink--cv"
        href="/shirin-portfolio/ShirinShujaa_CV.pdf"
        download
        aria-label="Download CV"
        title="Download CV"
      >
        <FiFileText />
        <span>CV</span>
      </a>
    </div>
  );
}
