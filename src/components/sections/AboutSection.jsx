// src/components/sections/AboutSection.jsx
import { profile } from "../../data/profile.js";
import { press } from "../../data/press.js";

const METRICS = [
  { num: "7",      label: "Papers & Chapters", sub: "ACM/IEEE · Springer · Elsevier" },
  { num: "4",      label: "Research Venues",   sub: "Top-tier conferences" },
  { num: "Top 3%", label: "Kaggle Ranking",    sub: "House Price Prediction" },
  { num: "1st",    label: "AI Hackathon",      sub: "CoverGo 2025" },
];

const GLANCE = [
  { k: "Research", v: "AI Alignment · LLM Evaluation · Low-Resource NLP" },
  { k: "Stack",    v: "Python · PyTorch · HuggingFace · scikit-learn" },
  { k: "Tools",    v: "Git · Docker · Linux · Jupyter" },
  { k: "Languages",v: "English (IELTS 8.0) · Arabic (Native) · French (B1)" },
];

const FOCUS = [
  "AI alignment & LLM evaluation — model behavior, robustness, fairness, and reliability",
  "Generative AI for Vietnamese — low-resource NLP pipelines and dataset documentation",
  "Human-centred AI — fairness, transparency, alignment, and real-world deployment constraints",
];

const RECOGNITION = [
  { badge: "SIGIR",  label: "ACM Travel Grant · 2025" },
  { badge: "1st",    label: "CoverGo AI Hackathon · 2025" },
  { badge: "Chair",  label: "ICADL 2025 Session Chair" },
  { badge: "ACM",    label: "SIGIR Member · 2025" },
];

export default function AboutSection() {
  return (
    <div className="ab">

      {/* ── Header ── */}
      <div className="ab__header">
        <div>
          <div className="fileHead__no">File 01</div>
          <h2 className="ab__name">{profile.name}</h2>
          <div className="ab__role">{profile.headline}</div>
        </div>
        <div className="handNote ab__note" aria-hidden="true">hi, nice to meet you!</div>
      </div>

      {/* ── Bio row: photo | statement | quick glance ── */}
      <div className="ab__bioRow">

        <div className="ab__photoWrap">
          <img
            src="images/MENEW.jpg"
            alt={profile.name}
            className="ab__photo"
            decoding="async"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </div>

        <div className="ab__statement">
          <p className="ab__bio">
            <strong>AI Research Engineer</strong> and second-year{" "}
            <strong>Master of AI</strong> student at RMIT University,
            specialising in <strong>NLP</strong> and <strong>Responsible AI</strong>.
            My research focuses on <mark>AI alignment</mark>, LLM evaluation,
            and generative AI for{" "}
            <mark>low-resource languages</mark>. I care about building technology
            that is <mark>fair, transparent, aligned, and human-centred</mark>.
          </p>
          <div className="tagRow" style={{ marginTop: 8 }}>
            <span className="tag">AI Alignment</span>
            <span className="tag">Bias &amp; Fairness</span>
            <span className="tag">Low-Resource NLP</span>
            <span className="tag">Human–AI Interaction</span>
          </div>
        </div>

        <div className="ab__quickGlance">
          <div className="ab__sectionLabel">Quick Glance</div>
          {GLANCE.map(({ k, v }) => (
            <div className="ab__glanceRow" key={k}>
              <span className="ab__glanceKey">{k}</span>
              <span className="ab__glanceVal">{v}</span>
            </div>
          ))}
        </div>

      </div>

      {/* ── Metrics ── */}
      <div className="ab__metrics">
        {METRICS.map((m) => (
          <div className="ab__metric" key={m.label}>
            <div className="ab__metricNum">{m.num}</div>
            <div className="ab__metricLabel">{m.label}</div>
            <div className="ab__metricSub">{m.sub}</div>
          </div>
        ))}
      </div>

      <hr className="ab__rule" />

      {/* ── Bottom: Education | Focus | Recognition ── */}
      <div className="ab__bottomGrid">

        <div className="ab__bottomCol">
          <div className="ab__sectionLabel">Education</div>
          <div className="ab__eduItem">
            <div className="ab__eduDeg">
              Master of Artificial Intelligence
              <span className="ab__eduBadge">2nd Year</span>
            </div>
            <div className="ab__eduOrg">RMIT University · Feb–Dec 2026</div>
          </div>
          <div className="ab__eduItem">
            <div className="ab__eduDeg">BSc Software Engineering (Hons)</div>
            <div className="ab__eduOrg">Minor in AI &amp; ML · RMIT University · Nov 2022–Feb 2026</div>
            <div className="ab__scholarship">Academic Excellence Scholarship · 2022–2026</div>
          </div>
        </div>

        <div className="ab__bottomCol">
          <div className="ab__sectionLabel">Core Focus</div>
          {FOCUS.map((f) => (
            <div className="ab__focusRow" key={f}>
              <span className="ab__focusDash" />
              <span>{f}</span>
            </div>
          ))}
        </div>

        <div className="ab__bottomCol">
          <div className="ab__sectionLabel">Recognition</div>
          {RECOGNITION.map((r) => (
            <div className="ab__recogRow" key={r.label}>
              <span className="ab__recogBadge">{r.badge}</span>
              <span className="ab__recogLabel">{r.label}</span>
            </div>
          ))}
        </div>

      </div>

      {/* ── In the news: press clippings ── */}
      <hr className="ab__rule" />
      <div className="ab__sectionLabel">In the News</div>
      <div className="clippings">
        {press.map((a) => (
          <a className="clipping" key={a.link} href={a.link} target="_blank" rel="noreferrer">
            <div className="clipping__outlet">
              {a.outlet}{a.date ? ` · ${a.date}` : ""}
            </div>
            <div className="clipping__title">{a.title}</div>
            <p className="clipping__blurb">{a.blurb}</p>
            <span className="clipping__read">Read article →</span>
          </a>
        ))}
      </div>
    </div>
  );
}
