// src/components/FolderLinks.jsx
import React from "react";
import { profile } from "../data/profile.js";
import { FaGithub, FaRegFilePdf } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export default function FolderLinks() {
  return (
    <div className="folderLinks" aria-label="Quick links">
      {/* LinkedIn uses your custom image */}
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

      {/* Others use icons */}
      <a
        className="folderLink folderLink--github"
        href={profile.links.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <FaGithub />
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
        <HiOutlineMail />
      </a>

      <a
        className="folderLink folderLink--cv"
        href="/files/Shirin_Shujjaa_CV.pdf"
        download
        aria-label="Download CV"
        title="Download CV"
      >
        <FaRegFilePdf />
        <span>CV</span>
      </a>
    </div>
  );
}
