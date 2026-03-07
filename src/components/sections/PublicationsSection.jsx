// src/components/sections/PublicationsSection.jsx
import React, { useMemo, useState } from "react";
import { publicationsData } from "../../data/publications.js";

const STATUS_STYLE = {
  published: { bg: "rgba(77,2,19,.10)",     border: "rgba(77,2,19,.25)",     color: "#4D0213" },
  accepted:  { bg: "rgba(185,147,102,.22)", border: "rgba(185,147,102,.50)", color: "#76404E" },
};

function statusStyle(status = "") {
  return status.toLowerCase().includes("published")
    ? STATUS_STYLE.published
    : STATUS_STYLE.accepted;
}

function buildDoiUrl(doi) {
  if (!doi) return null;
  const clean = doi.trim();
  if (!clean) return null;
  if (clean.startsWith("http://") || clean.startsWith("https://")) return clean;
  return `https://doi.org/${clean}`;
}

function getPrimaryReadLink(p) {
  if (p.link && p.link.trim() && p.link.trim() !== "#") return p.link.trim();
  return buildDoiUrl(p.doi);
}

function PubItem({ p }) {
  const doiUrl  = buildDoiUrl(p.doi);
  const readUrl = getPrimaryReadLink(p);
  const ss      = statusStyle(p.status);

  return (
    <div className="pubItem">
      <div className="pubThumb2">
        <img
          src={p.image || "images/pubs/placeholder.png"}
          alt={p.title}
          onError={e => { e.currentTarget.src = "images/pubs/placeholder.png"; }}
        />
      </div>

      <div className="pubBody">
        <div className="pubItemTop">
          <span className="pubStatusBadge" style={{ background: ss.bg, borderColor: ss.border, color: ss.color }}>
            {p.status}
          </span>
          <span className="pubYear">{p.year}</span>
        </div>

        <div className="pubItemTitle">{p.title}</div>
        <div className="pubItemAuthors">{p.authors}</div>
        <div className="pubVenuePill">{p.venue}</div>

        <div className="pubItemFoot">
          {doiUrl && (
            <a className="pubDOILink" href={doiUrl} target="_blank" rel="noreferrer">
              DOI ↗
            </a>
          )}
          {!doiUrl && <span className="pubDOILink" style={{ opacity: .45 }}>DOI pending</span>}
          {readUrl && (
            <a className="pubReadLink" href={readUrl} target="_blank" rel="noreferrer">
              Read →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PublicationsSection() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return publicationsData;
    return publicationsData.filter(p =>
      [p.title, p.authors, p.venue, p.year, p.status, p.doi]
        .filter(Boolean).join(" ").toLowerCase().includes(q)
    );
  }, [query]);

  const publishedCount = publicationsData.filter(p => p.status?.toLowerCase().includes("published")).length;
  const acceptedCount  = publicationsData.length - publishedCount;

  return (
    <div className="card pubWrap">

      {/* ── Header ── */}
      <div className="commHeader">
        <div className="commHeaderTitle">Publications<br />&amp; Research</div>
        <div className="commHeaderDesc">
          {publicationsData.length} papers &nbsp;·&nbsp; {publishedCount} published &nbsp;·&nbsp; {acceptedCount} accepted
        </div>
      </div>

      {/* ── Search ── */}
      <input
        className="pubSearch"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search title, venue, author…"
      />

      {/* ── List ── */}
      <div className="pubList">
        {filtered.map((p, i) => <PubItem key={i} p={p} />)}
      </div>

      {!filtered.length && (
        <div className="achEmpty">No results — try a different keyword.</div>
      )}

    </div>
  );
}
