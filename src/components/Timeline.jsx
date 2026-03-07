import React from "react";

/**
 * Timeline
 * items: [{ org, role, meta, bullets[] }]
 */
export default function Timeline({ items = [] }) {
  return (
    <div className="timeline">
      {items.map((x, idx) => (
        <div key={idx} className="timelineItem">
          <div className="timelineDot" />
          <div className="timelineBody">
            <div className="timelineTop">
              <div className="timelineOrg">{x.org}</div>
              <div className="timelineRole">{x.role}</div>
            </div>
            {x.meta ? <div className="timelineMeta">{x.meta}</div> : null}
            {x.bullets?.length ? (
              <ul className="bullets">
                {x.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}