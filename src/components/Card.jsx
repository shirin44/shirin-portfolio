import React from "react";

export default function Card({ title, children, right }) {
  return (
    <section className="card">
      {(title || right) && (
        <div className="cardTop">
          <div className="cardTitle">{title}</div>
          {right ? <div className="cardRight">{right}</div> : null}
        </div>
      )}
      <div className="cardBody">{children}</div>
    </section>
  );
}