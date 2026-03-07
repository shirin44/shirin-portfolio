// src/components/sections/AboutSection.jsx
import { profile } from "../../data/profile.js";

const METRICS = [
  { num: "5",      label: "Papers Published",  sub: "ACM/IEEE · Springer · IEEE", fill: 85 },
  { num: "3",      label: "Research Venues",   sub: "Top-tier conferences",        fill: 70 },
  { num: "Top 3%", label: "Kaggle Ranking",    sub: "House Price Prediction",      fill: 97 },
  { num: "1st",    label: "AI Hackathon",      sub: "CoverGo 2025",                fill: 100 },
];

const GLANCE = [
  { k: "Research", v: "Cultural Bias · LLM Evaluation · Low-Resource NLP" },
  { k: "Stack",    v: "Python · PyTorch · HuggingFace · scikit-learn" },
  { k: "Tools",    v: "Git · Docker · Linux · Jupyter" },
  { k: "Languages",v: "English (IELTS 8.0) · Arabic (Native) · French (B1)" },
];

const FOCUS = [
  "Bias detection & LLM evaluation — cultural and linguistic fairness in generative models",
  "Generative AI for Vietnamese — low-resource NLP pipelines and dataset documentation",
  "Human-centred AI — fairness, transparency, real-world deployment constraints",
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
          <div className="ab__name">{profile.name}</div>
          <div className="ab__role">{profile.headline}</div>
        </div>
        <span className="chip chip--accent">NLP · Responsible AI</span>
      </div>

      <hr className="ab__rule" />

      {/* ── Bio row: photo | statement | quick glance ── */}
      <div className="ab__bioRow">

        <div className="ab__photoWrap">
          <img
            src="images/me.png"
            alt={profile.name}
            className="ab__photo"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <div className="ab__photoCaption">Research · AI Engineering</div>
        </div>

        <div className="ab__statement">
          <div className="ab__sectionLabel">Personal Statement</div>
          <p className="ab__bio">
            <strong>Second-year MSc Artificial Intelligence</strong> student at RMIT University,
            specialising in <strong>NLP</strong> and <strong>Responsible AI</strong>.
            My research focuses on <strong>cultural &amp; linguistic bias in LLMs</strong>,
            evaluation frameworks for generative models, and AI for{" "}
            <strong>low-resource languages</strong>. I care about building technology
            that is <strong>fair, transparent, and human-centred</strong>.
          </p>
          <div className="tagRow" style={{ marginTop: 8 }}>
            <span className="tag">Responsible GenAI</span>
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

      <hr className="ab__rule" />

      {/* ── Metrics ── */}
      <div className="ab__sectionLabel">Metrics</div>
      <div className="ab__metrics">
        {METRICS.map((m) => (
          <div className="ab__metric" key={m.label}>
            <div className="ab__metricNum">{m.num}</div>
            <div className="ab__metricLabel">{m.label}</div>
            <div className="ab__metricSub">{m.sub}</div>
            <div className="ab__metricBar">
              <div className="ab__metricFill" style={{ width: `${m.fill}%` }} />
            </div>
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
              MSc Artificial Intelligence
              <span className="ab__eduBadge">2nd Year</span>
            </div>
            <div className="ab__eduOrg">RMIT University Vietnam · 2026</div>
          </div>
          <div className="ab__eduItem">
            <div className="ab__eduDeg">BSc Software Engineering (Hons)</div>
            <div className="ab__eduOrg">Minor in AI &amp; ML · RMIT Vietnam</div>
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
    </div>
  );
}
