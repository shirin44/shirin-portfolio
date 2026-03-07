import { useMemo, useState } from "react";
import { skills } from "../../data/skills.js";

const GROUP_ACCENT = {
  "Programming":       { color: "#4D0213", border: "rgba(77,2,19,.55)"       },
  "AI & ML":           { color: "#76404E", border: "rgba(118,64,78,.55)"     },
  "Data & Research":   { color: "#B99366", border: "rgba(185,147,102,.75)"   },
  "Frontend & Design": { color: "#76404E", border: "rgba(118,64,78,.55)"     },
  "Testing & QA":      { color: "#4D0213", border: "rgba(77,2,19,.55)"       },
  "Tools & DevOps":    { color: "#555",    border: "rgba(0,0,0,.28)"         },
};

function SkillChip({ name, icon: Icon }) {
  return (
    <div className="skillChip">
      <Icon className="skillChipIcon" aria-hidden="true" />
      <span>{name}</span>
    </div>
  );
}

export default function SkillsSection() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return skills;
    const out = {};
    Object.entries(skills).forEach(([group, items]) => {
      const keep = items.filter(s => s.name.toLowerCase().includes(q));
      if (keep.length) out[group] = keep;
    });
    return out;
  }, [query]);

  const totalSkills = Object.values(skills).reduce((n, arr) => n + arr.length, 0);
  const groupCount  = Object.keys(skills).length;

  return (
    <div className="card skillsWrap">

      {/* ── Header ── */}
      <div className="commHeader" style={{ marginBottom: 10 }}>
        <div className="commHeaderTitle" style={{ fontSize: "clamp(22px, 3.2vw, 38px)" }}>
          Skills<br />&amp; Tools
        </div>
        <div className="commHeaderDesc">
          {totalSkills} skills &nbsp;·&nbsp; {groupCount} categories
        </div>
      </div>

      {/* ── Search ── */}
      <input
        className="pubSearch"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search skills…"
        style={{ marginBottom: 8 }}
      />

      {/* ── Category grid ── */}
      <div className="skillCatGrid">
        {Object.entries(filtered).map(([group, items]) => {
          const acc = GROUP_ACCENT[group] ?? { color: "#555", border: "rgba(0,0,0,.28)" };
          return (
            <div
              key={group}
              className="skillCatBlock"
              style={{ borderLeftColor: acc.border }}
            >
              <div className="skillCatTitle" style={{ color: acc.color }}>
                {group}
              </div>
              <div className="skillChips">
                {items.map(s => <SkillChip key={s.name} name={s.name} icon={s.icon} />)}
              </div>
            </div>
          );
        })}
      </div>

      {!Object.keys(filtered).length && (
        <div className="achEmpty">No skills match — try a different keyword.</div>
      )}

      {/* ── Banner ── */}
      {!query && (
        <div className="achBanner">
          <div className="achBannerArrow">→</div>
          <div className="achBannerText">
            Always learning and improving — currently deepening expertise in AI fairness, information retrieval, and full-stack development.
          </div>
        </div>
      )}

    </div>
  );
}
