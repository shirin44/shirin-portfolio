// src/components/sections/CommunitySection.jsx
import { communitySpotlights, communityData } from "../../data/community.js";
import FileHeader from "../FileHeader.jsx";

const PLACEHOLDER = "images/achievements/placeholder.png";

function CommPhoto({ src, alt }) {
  return (
    <img
      className="achCompImg"
      loading="lazy"
      decoding="async"
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
  return (
    <div className="achRow">
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
      <FileHeader no={5} title="Community" meta="Volunteering, outreach & service" note="giving back ♥" />

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
