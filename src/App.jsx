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
  const [activeTab, setActiveTab] = useState(null);
  const [animationClass, setAnimationClass] = useState("");
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
              <div className="folderLandingHint">
                <span className="folderLandingArrow">↑</span>
                Pick a tab to explore
              </div>

              {/* Mobile only: profile card + section shortcuts */}
              <div className="mobileLanding">
                <img src="images/MENEW.jpg" className="mobileLandingPhoto" alt="Shirin" />
                <div className="mobileLandingStats">
                  <div className="mobileLandingStat"><span>7</span>Papers</div>
                  <div className="mobileLandingStat"><span>6</span>Roles</div>
                  <div className="mobileLandingStat"><span>1st</span>Hackathon</div>
                  <div className="mobileLandingStat"><span>Top 3%</span>Kaggle</div>
                </div>
                <div className="mobileLandingGrid">
                  {TABS.map(({ name, color }) => (
                    <button
                      key={name}
                      className="mobileLandingCard"
                      style={{ background: color }}
                      onClick={() => handleTabClick(name)}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

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
