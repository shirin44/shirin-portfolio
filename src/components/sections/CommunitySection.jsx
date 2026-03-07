// src/components/sections/CommunitySection.jsx
import { communitySpotlights, communityData } from "../../data/community.js";

const PLACEHOLDER = "images/achievements/placeholder.png";

const COMM_BADGE = {
  Membership: { bg: "rgba(77,2,19,.10)",     border: "rgba(77,2,19,.25)",     color: "#4D0213", text: "Mbr" },
  Service:    { bg: "rgba(118,64,78,.12)",   border: "rgba(118,64,78,.30)",   color: "#76404E", text: "Svc" },
  Community:  { bg: "rgba(180,185,190,.28)", border: "rgba(160,165,170,.55)", color: "#555",    text: "Hub" },
  Funding:    { bg: "rgba(185,147,102,.22)", border: "rgba(185,147,102,.50)", color: "#76404E", text: "Fund" },
};

function commBadge(item) {
  const tags = item.tags || [];
  for (const t of tags) if (COMM_BADGE[t]) return COMM_BADGE[t];
  return COMM_BADGE.Community;
}

function CommPhoto({ src, alt }) {
  return (
    <img
      className="achCompImg"
      src={src}
      alt={alt}
      onError={e => { e.currentTarget.src = PLACEHOLDER; }}
    />
  );
}

function CommCard({ item }) {
  return (
    <div className="achCompCard">
      <div className="achCompImages">
        <CommPhoto src={item.images[0]} alt={item.name} />
        <CommPhoto src={item.images[1] || item.images[0]} alt={item.name} />
      </div>
      <div className="achCompName">{item.name}</div>
      <div className="achCompDescriptor">({item.role})</div>
      <p className="achCompStory">{item.story}</p>
      <div className="achCompFoot">
        {item.tags?.map((t, i) => <span key={i} className="tag achTag">{t}</span>)}
        {item.link && (
          <a className="achRowLink" href={item.link} target="_blank" rel="noreferrer">
            View →
          </a>
        )}
      </div>
    </div>
  );
}

function CommRow({ item }) {
  const b = commBadge(item);
  return (
    <div className="achRow">
      <div className="achBadge" style={{ background: b.bg, borderColor: b.border, color: b.color }}>
        {b.text}
      </div>
      <div className="achRowBody">
        <div className="achRowTop">
          <div className="achRowTitle">{item.title}</div>
          <div className="achRowMeta">{item.org}{item.year ? ` · ${item.year}` : ""}</div>
        </div>
        {item.description && <div className="achRowDesc">{item.description}</div>}
        <div className="achRowFoot">
          {item.tags?.map((t, i) => <span key={i} className="tag achTag">{t}</span>)}
          {item.link && (
            <a className="achRowLink" href={item.link} target="_blank" rel="noreferrer">
              {item.linkText || "Open"} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CommunitySection() {
  return (
    <div className="card commWrap">

      {/* ── Header ── */}
      <div className="commHeader">
        <div className="commHeaderTitle">Community<br />Engagement</div>
        <div className="commHeaderDesc">
          Through volunteering, outreach, and public speaking, I represent
          RMIT with empathy, professionalism, and student-centered impact.
        </div>
      </div>

      {/* ── 2-column spotlight grid ── */}
      <div className="commSpotlightGrid">
        {communitySpotlights.map((item, i) => <CommCard key={i} item={item} />)}
      </div>

      <hr className="achRule" />

      {/* ── Memberships & Service ── */}
      <div className="achSectionLabel">Memberships &amp; Service</div>
      <div className="achList">
        {communityData.map((c, i) => <CommRow key={i} item={c} />)}
      </div>

    </div>
  );
}
