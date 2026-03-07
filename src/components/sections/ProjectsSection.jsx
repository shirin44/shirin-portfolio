import { useMemo, useState } from "react";
import { projects } from "../../data/projects.js";

const CAT_ACCENT = {
  "AI & ML Projects":                { color: "#4D0213", border: "rgba(77,2,19,.55)",     bg: "rgba(77,2,19,.07)"     },
  "Engineering & Software Projects": { color: "#76404E", border: "rgba(118,64,78,.55)",   bg: "rgba(118,64,78,.06)"   },
};
const DEFAULT_ACCENT = { color: "#555", border: "rgba(0,0,0,.28)", bg: "rgba(0,0,0,.04)" };

function accent(cat) { return CAT_ACCENT[cat] ?? DEFAULT_ACCENT; }

const ALL_ITEMS = projects.flatMap(g => g.items.map(p => ({ ...p, _cat: g.category })));
const CATEGORIES = projects.map(g => g.category);

function ProjectCard({ p }) {
  const acc = accent(p._cat);
  return (
    <div className="projCard" style={{ borderLeftColor: acc.border }}>
      <div className="projCardTop">
        <span className="projCardCat" style={{ color: acc.color, background: acc.bg }}>
          {p._cat.replace(" Projects", "")}
        </span>
        {p.date && <span className="projCardDate">{p.date}</span>}
      </div>
      <div className="projCardTitle">{p.title}</div>
      <div className="projCardDesc">{p.description}</div>
      <div className="projCardFoot">
        <div className="skillChips" style={{ flex: 1 }}>
          {p.stack?.map((s, i) => <span key={i} className="projStackChip">{s}</span>)}
        </div>
        {p.link && p.link !== "#" && (
          <a className="pubReadLink" href={p.link} target="_blank" rel="noreferrer">
            View →
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [query,     setQuery]     = useState("");
  const [activeCat, setActiveCat] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_ITEMS.filter(p => {
      const catMatch = activeCat === "All" || p._cat === activeCat;
      const textMatch = !q || [p.title, p.description, p._cat, ...(p.stack ?? [])]
        .join(" ").toLowerCase().includes(q);
      return catMatch && textMatch;
    });
  }, [query, activeCat]);

  const total = ALL_ITEMS.length;

  return (
    <div className="card projWrap">

      {/* ── Header ── */}
      <div className="commHeader" style={{ marginBottom: 10 }}>
        <div className="commHeaderTitle" style={{ fontSize: "clamp(22px, 3.2vw, 38px)" }}>
          Projects
        </div>
        <div className="commHeaderDesc">
          {total} projects &nbsp;·&nbsp; {CATEGORIES.length} categories
        </div>
      </div>

      {/* ── Filters + search ── */}
      <div className="projFilterRow">
        {["All", ...CATEGORIES].map(cat => {
          const active = activeCat === cat;
          const acc    = cat === "All" ? DEFAULT_ACCENT : accent(cat);
          const label  = cat === "All" ? "All" : cat.replace(" Projects", "");
          return (
            <button
              key={cat}
              className={"projFilterChip" + (active ? " projFilterChip--active" : "")}
              style={active ? { background: acc.color, borderColor: acc.color, color: "#fff" } : {}}
              onClick={() => setActiveCat(cat)}
            >
              {label}
            </button>
          );
        })}
        <input
          className="pubSearch projSearch"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search projects…"
        />
      </div>

      {/* ── Grid ── */}
      <div className="projCardGrid">
        {filtered.map((p, i) => <ProjectCard key={i} p={p} />)}
      </div>

      {!filtered.length && (
        <div className="achEmpty">No projects match — try a different keyword or filter.</div>
      )}

    </div>
  );
}
