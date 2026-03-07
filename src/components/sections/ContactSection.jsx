import React, { useState } from "react";
import Card from "../Card.jsx";
import ContactForm from "../ContactForm.jsx";
import TiltScreenModal from "../TiltScreenModal.jsx";
import { profile } from "../../data/profile.js";

export default function ContactSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="stack">
      <Card
        title="Contact"
        right={
          <button className="btn btn--ghost" onClick={() => setOpen(true)}>
            Quick message →
          </button>
        }
      >
        <p className="lead">
          For collaborations, research, or engineering work — email is best.
        </p>

        <div className="contactGrid">
          <a className="contactBox" href={`mailto:${profile.email}`}>
            <div className="contactLabel">Email</div>
            <div className="contactValue">{profile.email}</div>
          </a>

          <a className="contactBox" href={profile.links.linkedin} target="_blank" rel="noreferrer">
            <div className="contactLabel">LinkedIn</div>
            <div className="contactValue">linkedin.com/in/shirin-shujaa</div>
          </a>

          <a className="contactBox" href={profile.links.github} target="_blank" rel="noreferrer">
            <div className="contactLabel">GitHub</div>
            <div className="contactValue">github.com/shirin44</div>
          </a>

          <a className="contactBox" href={profile.links.orcid} target="_blank" rel="noreferrer">
            <div className="contactLabel">ORCID</div>
            <div className="contactValue">0009-0007-7408-3848</div>
          </a>
        </div>
      </Card>

      <TiltScreenModal open={open} title="Send a message" onClose={() => setOpen(false)}>
        <ContactForm email={profile.email} />
      </TiltScreenModal>
    </div>
  );
}