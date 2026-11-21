import { useEffect, useRef, useState } from "react";
import Tab from "./components/Tab.jsx";
import FolderLinks from "./components/FolderLinks.jsx";
import AboutSection from "./components/sections/AboutSection.jsx";
import PublicationsSection from "./components/sections/PublicationsSection.jsx";
import ProjectsSection from "./components/sections/ProjectsSection.jsx";
import CommunitySection from "./components/sections/CommunitySection.jsx";
import AchievementsSection from "./components/sections/AchievementsSection.jsx";
import SkillsSection from "./components/sections/SkillsSection.jsx";
import ExperienceSection from "./components/sections/ExperienceSection.jsx";
import ContactSection from "./components/sections/ContactSection.jsx";

const TABS = [
  { name: "About",        color: "#10b981" }, // emerald-500
  { name: "Publications", color: "#60a5fa" }, // blue-400
  { name: "Experience",   color: "#f472b6" }, // pink-400
  { name: "Projects",     color: "#f87171" }, // red-400
  { name: "Community",    color: "#fbbf24" }, // amber-400
  { name: "Achievements", color: "#34d399" }, // emerald-400
  { name: "Skills",       color: "#818cf8" }, // indigo-400
  { name: "Contact",      color: "#60a5fa" }, // blue-400
];

export default function App() {
  // Deep links: /#publications opens that tab directly
  const [activeTab, setActiveTab] = useState(() => {
    const h = window.location.hash.slice(1).toLowerCase();
    return TABS.find(t => t.name.toLowerCase() === h)?.name ?? null;
  });
  // A deep-linked tab starts pulled out of the folder, same as after a click
  const [animationClass, setAnimationClass] = useState(() => (window.location.hash.length > 1 ? "animate-pull-over" : ""));

  useEffect(() => {
    const next = activeTab ? `#${activeTab.toLowerCase()}` : " ";
    if (window.location.hash !== next) history.replaceState(null, "", next === " " ? window.location.pathname : next);
  }, [activeTab]);
  const [isAnimating, setIsAnimating] = useState(false);

  const scrollContainerRef = useRef(null);
  const folderContainerRef = useRef(null);

  const animDuration = () => window.innerWidth <= 1024 ? 320 : 800;

  const closeTab = () => {
    if (isAnimating || !activeTab) return;
    setIsAnimating(true);
    setAnimationClass("animate-put-back");
    setTimeout(() => setActiveTab(null), animDuration());
  };

  const playPageSound = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const duration = 0.28;
      const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        const t = i / data.length;
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 1.6);
      }
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(2400, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + duration);
      filter.Q.value = 0.7;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.22, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      src.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      src.start();
      src.stop(ctx.currentTime + duration);
    } catch (_) { /* silently skip if audio blocked */ }
  };

  const handleTabClick = (tabName) => {
    if (isAnimating) return;
    setIsAnimating(true);
    playPageSound();

    if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;

    if (activeTab === tabName) {
      setAnimationClass("animate-put-back");
      setTimeout(() => setActiveTab(null), animDuration());
      return;
    }

    if (activeTab) {
      setAnimationClass("animate-put-back");
      setTimeout(() => {
        playPageSound();
        setActiveTab(tabName);
        setAnimationClass("animate-pull-over");
      }, animDuration());
    } else {
      setActiveTab(tabName);
      setAnimationClass("animate-pull-over");
    }
  };

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isAnimating) return;
      if (folderContainerRef.current && !folderContainerRef.current.contains(event.target)) {
        closeTab();
      }
    };
    if (activeTab) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeTab, isAnimating]);

  // Escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeTab();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeTab, isAnimating]);

  // Release animation lock
  useEffect(() => {
    if (!isAnimating) return;
    const timer = setTimeout(() => setIsAnimating(false), animDuration());
    return () => clearTimeout(timer);
  }, [isAnimating]);

  return (
    <div className="screen">
      <div ref={folderContainerRef} className="folderWrap">

        <nav className="tabsNav" aria-label="Portfolio sections">
          <div className="tabsRow">
            {TABS.map(({ name, color }) => (
              <Tab
                key={name}
                text={name}
                color={color}
                active={activeTab === name}
                onClick={() => handleTabClick(name)}
              />
            ))}
          </div>
        </nav>

        <div className="folderBack" />

        <div ref={scrollContainerRef} className={`doc bg-lined-paper ${animationClass}`}>
          {activeTab === "About"        && <AboutSection />}
          {activeTab === "Publications" && <PublicationsSection />}
          {activeTab === "Experience"   && <ExperienceSection />}
          {activeTab === "Projects"     && <ProjectsSection />}
          {activeTab === "Community"    && <CommunitySection />}
          {activeTab === "Achievements" && <AchievementsSection />}
          {activeTab === "Skills"       && <SkillsSection />}
          {activeTab === "Contact"      && <ContactSection />}

          {!activeTab && (
            <div className="folderLanding">
              {/* Desktop: simple name + hint (folder front shows photo/stamp) */}
              <div className="folderLandingName">Shirin Shujaa</div>
              <div className="folderLandingRole">AI Research Engineer · NLP &amp; Responsible AI</div>
              <div className="landingCtas folderLandingCtas">
                <button type="button" className="btn" onClick={() => handleTabClick("Contact")}>
                  Get in touch
                </button>
                <a className="btn btn--ghost" href="/shirin-portfolio/ShirinShujaa_CV.pdf" download>
                  Download CV
                </a>
              </div>
              <div className="folderLandingHint">
                <span className="folderLandingArrow">↑</span>
                Or pick a tab to explore
              </div>

              {/* Mobile only: profile hero — the tab bar above is the only
                  nav, so this doesn't repeat it as a second grid of buttons */}
              <div className="mobileLanding">
                {/* Manila file cover — the phone version of the desktop folder */}
                <div className="fileCover">
                  <div className="fileCover__label">Shirin's Stuff</div>
                  <div className="fileCover__photo">
                    <span className="tape tl" aria-hidden="true" />
                    <img src="images/MENEW.jpg" alt="Shirin Shujaa" />
                  </div>
                  <img className="fileCover__stamp" src="images/stamp.png" alt="" aria-hidden="true" />
                  <h1 className="mobileLandingName">Shirin Shujaa</h1>
                  <div className="mobileLandingRole">AI Research Engineer · NLP &amp; Responsible AI</div>
                  <p className="mobileLandingBio">
                    Researching <mark>AI alignment</mark>, LLM evaluation, and generative AI for <mark>low-resource languages</mark>.
                  </p>
                </div>

                <div className="landingCtas">
                  <button type="button" className="btn" onClick={() => handleTabClick("Contact")}>
                    Get in touch
                  </button>
                  <a className="btn btn--ghost" href="/shirin-portfolio/ShirinShujaa_CV.pdf" download>
                    Download CV
                  </a>
                </div>

                <div className="mobileLandingStatsRow">
                  <div className="mobileLandingStatItem"><span>7</span>Papers</div>
                  <div className="mobileLandingDivider" />
                  <div className="mobileLandingStatItem"><span>6</span>Roles</div>
                  <div className="mobileLandingDivider" />
                  <div className="mobileLandingStatItem"><span>1st</span>Hackathon</div>
                  <div className="mobileLandingDivider" />
                  <div className="mobileLandingStatItem"><span>Top 3%</span>Kaggle</div>
                </div>

                <div className="mobileLandingTags">
                  <span className="tag">AI Alignment</span>
                  <span className="tag">Bias &amp; Fairness</span>
                  <span className="tag">Low-Resource NLP</span>
                </div>

                <div className="mobileLandingHint">
                  <span className="mobileLandingArrow">↑</span>
                  Or tap a section above
                </div>
              </div>
            </div>
          )}
        </div>

        <FolderLinks dock />

        <div className="folderFront">
          <div className="stickerAbs">Shirin's Stuff</div>
          <FolderLinks />

          <div className="photoAbs">
            <div className="tape tl" aria-hidden="true" />
            <div className="tape tr" aria-hidden="true" />
            <img src="images/MENEW.jpg" alt="Shirin" />
          </div>

          <img className="stampAbs" src="images/stamp.png" alt="Stamp" />
        </div>

      </div>
    </div>
  );
}
