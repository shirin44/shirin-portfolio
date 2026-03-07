import { useMemo, useState } from "react";
import { experience } from "../../data/experience.js";

const ORG_ACCENT = {
  "RMIT University Vietnam":           { color: "#4D0213", border: "rgba(77,2,19,.55)",    bg: "rgba(77,2,19,.07)"    },
  "DIGI-TEXX (Ho Chi Minh City, Vietnam)": { color: "#76404E", border: "rgba(118,64,78,.55)", bg: "rgba(118,64,78,.07)" },
  "Intel Vietnam":                     { color: "#0068B5", border: "rgba(0,104,181,.45)",  bg: "rgba(0,104,181,.07)"  },
  "Wareflex (Ho Chi Minh City, Vietnam)":  { color: "#2B6CB0", border: "rgba(43,108,176,.45)", bg: "rgba(43,108,176,.07)" },
};
const DEFAULT_ACCENT = { color: "#555", border: "rgba(0,0,0,.25)", bg: "rgba(0,0,0,.04)" };

function accent(org) { return ORG_ACCENT[org] ?? DEFAULT_ACCENT; }

function ExperienceCard({ item }) {
  const acc = accent(item.org);
  return (
    <div className="expCard" style={{ borderLeftColor: acc.border }}>
      <div className="expCardHead">
        <div className="expCardLogoWrap">
          <img
            src={item.logo || "images/logos/placeholder.png"}
            alt={item.org}
            onError={e => { e.currentTarget.src = "images/logos/placeholder.png"; }}
          />
        </div>
        <div className="expCardHeadText">
          <div className="expCardOrg">{item.org}</div>
          <div className="expCardRole">{item.role}</div>
          {item.meta && <div className="expCardMeta">{item.meta}</div>}
        </div>
        {item.period && (
          <span className="expCardPeriod" style={{ background: acc.bg, borderColor: acc.border, color: acc.color }}>
            {item.period}
          </span>
        )}
      </div>

      {item.bullets?.length > 0 && (
        <ul className="bullets expCardBullets">
          {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </div>
  );
}

export default function ExperienceSection() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return experience;
    return experience.filter(x =>
      [x.org, x.role, x.meta, ...(x.bullets ?? [])].filter(Boolean).join(" ").toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="card expWrap">

      {/* ── Header ── */}
      <div className="commHeader" style={{ marginBottom: 10 }}>
        <div className="commHeaderTitle" style={{ fontSize: "clamp(22px, 3.2vw, 38px)" }}>
          Experience
        </div>
        <div className="commHeaderDesc">
          {experience.length} roles &nbsp;·&nbsp; Research, AI/NLP, automation &amp; full-stack
        </div>
      </div>

      {/* ── Search ── */}
      <input
        className="pubSearch"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search role, org, skill…"
        style={{ marginBottom: 14 }}
      />

      {/* ── Cards ── */}
      <div className="expCardList">
        {filtered.map((x, i) => <ExperienceCard key={i} item={x} />)}
      </div>

      {!filtered.length && (
        <div className="achEmpty">No results — try a different keyword.</div>
      )}

    </div>
  );
}
