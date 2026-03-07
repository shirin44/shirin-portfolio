import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = "service_914pi4u";
const TEMPLATE_ID = "template_duwhh3o";
const PUBLIC_KEY  = "8ZRDaEyS2_t72DkFZ";

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus("sent");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form className="form" ref={formRef} onSubmit={handleSubmit}>
      <label className="field">
        <span className="fieldLabel">Your name</span>
        <input
          className="fieldInput"
          name="from_name"
          placeholder="e.g. Jane Doe"
          required
        />
      </label>

      <label className="field">
        <span className="fieldLabel">Your email</span>
        <input
          className="fieldInput"
          name="from_email"
          type="email"
          placeholder="you@example.com"
          required
        />
      </label>

      <label className="field">
        <span className="fieldLabel">Message</span>
        <textarea
          className="fieldInput fieldInput--area"
          name="message"
          placeholder="Write a short message…"
          required
        />
      </label>

      <div className="formActions">
        {status === "sent" ? (
          <div className="formSuccess">Message sent! I'll get back to you soon.</div>
        ) : (
          <button
            className="btn"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send message →"}
          </button>
        )}
        {status === "error" && (
          <div className="formError">Something went wrong — try emailing directly.</div>
        )}
      </div>
    </form>
  );
}
