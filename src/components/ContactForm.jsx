import React, { useMemo, useState } from "react";

/**
 * ContactForm (stub)
 * - No backend needed: opens mailto with subject/body
 */
export default function ContactForm({ email }) {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Hello Shirin — Portfolio Contact (${name || "Anonymous"})`);
    const body = encodeURIComponent(msg || "");
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [email, name, msg]);

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <label className="field">
        <span className="fieldLabel">Your name</span>
        <input
          className="fieldInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., John Doe"
        />
      </label>

      <label className="field">
        <span className="fieldLabel">Message</span>
        <textarea
          className="fieldInput fieldInput--area"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Write a short message…"
        />
      </label>

      <div className="formActions">
        <a className="btn" href={mailto}>
          Send email →
        </a>
      </div>
    </form>
  );
}