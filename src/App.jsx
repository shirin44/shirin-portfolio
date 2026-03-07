// src/App.jsx
import React, { useEffect, useRef, useState } from "react";
import Tab from "./components/Tab.jsx";

import FolderLinks from "./components/FolderLinks.jsx";
import AboutSection from "./components/sections/AboutSection.jsx";
import PublicationsSection from "./components/sections/PublicationsSection.jsx";
import ProjectsSection from "./components/sections/ProjectsSection.jsx";
import CommunitySection from "./components/sections/CommunitySection.jsx";
import AchievementsSection from "./components/sections/AchievementsSection.jsx";
import SkillsSection from "./components/sections/SkillsSection.jsx";
import ExperienceSection from "./components/sections/ExperienceSection.jsx";

export default function App() {
  const [activeTab, setActiveTab] = useState(null); // one of the tab names below, or null
  const [animationClass, setAnimationClass] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const scrollContainerRef = useRef(null);
  const folderContainerRef = useRef(null);

  const handleTabClick = (tabName) => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Reset scroll when switching tabs
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }

    // Close if clicking the same tab
    if (activeTab === tabName) {
      setAnimationClass("animate-put-back");
      setTimeout(() => {
        setActiveTab(null);
      }, 800);
      return;
    }

    // If another tab is open: put back, then pull over the new one
    if (activeTab) {
      setAnimationClass("animate-put-back");
      setTimeout(() => {
        setActiveTab(tabName);
        setAnimationClass("animate-pull-over");
      }, 800);
    } else {
      // No tab open: directly pull over
      setActiveTab(tabName);
      setAnimationClass("animate-pull-over");
    }
  };

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isAnimating) return;

      if (
        folderContainerRef.current &&
        !folderContainerRef.current.contains(event.target)
      ) {
        if (activeTab) {
          setIsAnimating(true);
          setAnimationClass("animate-put-back");
          setTimeout(() => {
            setActiveTab(null);
          }, 800);
        }
      }
    };

    if (activeTab) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeTab, isAnimating]);

  // Release animation lock after 800ms
  useEffect(() => {
    if (!isAnimating) return;
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, [isAnimating]);

  return (
    <div className="screen">
      <div ref={folderContainerRef} className="folderWrap">
        {/* Tabs over the folder */}
        <nav className="tabsNav">
          <div className="tabsRow">
            <Tab
              bgColorClass="bg-emerald-500"
              text="About"
              onClick={() => handleTabClick("About")}
            />
            <Tab
              bgColorClass="bg-blue-400"
              text="Publications"
              onClick={() => handleTabClick("Publications")}
            />
            <Tab
              bgColorClass="bg-pink-400"
              text="Experience"
              onClick={() => handleTabClick("Experience")}
            />
            <Tab
              bgColorClass="bg-red-400"
              text="Projects"
              onClick={() => handleTabClick("Projects")}
            />
            <Tab
              bgColorClass="bg-amber-400"
              text="Community"
              onClick={() => handleTabClick("Community")}
            />
            <Tab
              bgColorClass="bg-emerald-500"
              text="Achievements"
              onClick={() => handleTabClick("Achievements")}
            />
            <Tab
              bgColorClass="bg-blue-400"
              text="Skills"
              onClick={() => handleTabClick("Skills")}
            />
          </div>
        </nav>

        {/* Back of the folder */}
        <div className="folderBack" />

        {/* Document inside folder */}
        <div
          ref={scrollContainerRef}
          className={`doc bg-lined-paper ${animationClass}`}
        >
          {activeTab === "About" && <AboutSection />}
          {activeTab === "Publications" && <PublicationsSection />}
          {activeTab === "Experience" && <ExperienceSection />}
          {activeTab === "Projects" && <ProjectsSection />}
          {activeTab === "Community" && <CommunitySection />}
          {activeTab === "Achievements" && <AchievementsSection />}
          {activeTab === "Skills" && <SkillsSection />}

          {!activeTab && (
            <div className="card">
              <div className="cardTitle">Open a tab</div>
              <div>
                Select About / Publications / Experience / Projects / Community / Achievements / Skills.
              </div>
            </div>
          )}
        </div>

        {/* Front of the folder (always visible overlay) */}
        <div className="folderFront">
          <div className="stickerAbs">Shirin’s Stuff</div>
          <FolderLinks />

          <div className="photoAbs">
            <div className="tape tl" aria-hidden="true" />
            <div className="tape tr" aria-hidden="true" />
            {/* put your image in publicimages/me.png */}
            <img src="images/me.png" alt="Shirin" />
          </div>

          {/* put your stamp in public/images/stamp.png */}
          <img className="stampAbs" src="images/stamp.png" alt="Stamp" />
        </div>

        
      </div>
    </div>
  );
}