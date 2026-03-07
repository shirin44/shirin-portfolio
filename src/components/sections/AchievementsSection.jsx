// src/components/sections/AchievementsSection.jsx
import { awardSpotlights, certificationsData, competitionSpotlights } from "../../data/achievements.js";

const PLACEHOLDER = "images/achievements/placeholder.png";

const ACCENT_COLOR = {
  gold: "#76404E",
  silver: "#555",
  deep: "#4D0213",
  accent: "#76404E",
};

function CompPhoto({ src, alt }) {
  return (
    <img
      className="achCompImg"
      src={src}
      alt={alt}
      onError={e => { e.currentTarget.src = PLACEHOLDER; }}
    />
  );
}

function CompCard({ item }) {
  const resultColor = ACCENT_COLOR[item.accent] ?? "#555";
  return (
    <div className="achCompCard">
      <div className="achCompImages">
        <CompPhoto src={item.images[0]} alt={item.name} />
        <CompPhoto src={item.images[1] || item.images[0]} alt={item.name} />
      </div>
      <div className="achCompName">{item.name}</div>
      <div className="achCompResult" style={{ color: resultColor }}>{item.result}</div>
      <div className="achCompDescriptor">({item.descriptor})</div>
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

function AwardCard({ item }) {
  const resultColor = ACCENT_COLOR[item.accent] ?? "#555";
  const imgs = item.images ?? (item.image ? [item.image] : []);
  return (
    <div className="achCompCard">
      {imgs.length === 1 ? (
        <img className="achCompImg achCompImgFull" src={imgs[0]} alt={item.name}
          onError={e => { e.currentTarget.src = PLACEHOLDER; }} />
      ) : (
        <div className="achCompImages achCompImages--3">
          {imgs.map((src, i) => <CompPhoto key={i} src={src} alt={`${item.name} ${i + 1}`} />)}
        </div>
      )}
      <div className="achCompName">{item.name}</div>
      <div className="achCompResult" style={{ color: resultColor }}>{item.org}</div>
      <div className="achCompDescriptor">({item.descriptor}{item.date ? ` · ${item.date}` : ""})</div>
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

function CertCard({ item }) {
  return (
    <div className="certCard">
      <div className="certTop">
        <span className="certIssuer">{item.issuer}</span>
        {item.date && <span className="certDate">{item.date}</span>}
      </div>
      <div className="certTitle">{item.title}</div>
      <div className="certFoot">
        {item.tags?.map((t, i) => <span key={i} className="tag achTag">{t}</span>)}
        {item.link && (
          <a className="certLink" href={item.link} target="_blank" rel="noreferrer">Verify →</a>
        )}
      </div>
    </div>
  );
}

export default function AchievementsSection() {
  return (
    <div className="card achWrap">

      {/* ── Header ── */}
      <div className="commHeader">
        <div className="commHeaderTitle">Competitions<br />&amp; Achievements</div>
        
      </div>

      {/* ── Competition spotlight grid ── */}
      <div className="achCompGrid">
        {competitionSpotlights.map((item, i) => <CompCard key={i} item={item} />)}
      </div>

      {/* ── Motivational banner ── */}
      

      <hr className="achRule" />

      {/* ── Awards & Grants as single-image cards ── */}
      <div className="achSectionLabel">Awards &amp; Recognition</div>
      <div className="achAwardGrid">
        {awardSpotlights.map((item, i) => <AwardCard key={i} item={item} />)}
      </div>

      <hr className="achRule" />

      {/* ── Certifications ── */}
      <div className="achSectionLabel">Certifications</div>
      <div className="certGrid">
        {certificationsData.map((c, i) => <CertCard key={i} item={c} />)}
      </div>

    </div>
  );
}
