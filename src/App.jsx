import React from "react";
import DotNav from "./components/DotNav";

// Section Wrappers
import SectionWrapper from "./components/SectionWrapper";

// Raw Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

// Wrapped Sections with Animation + IDs
const WrappedHero = SectionWrapper(Hero, "hero");
const WrappedAbout = SectionWrapper(About, "about");
const WrappedProjects = SectionWrapper(Projects, "projects");
const WrappedContact = SectionWrapper(Contact, "contact");

const App = () => {
  return (
    <div className="relative">
      <DotNav />

      <WrappedHero />
      <WrappedAbout />
      <WrappedProjects />
      <WrappedContact />
    </div>
  );
};

export default App;
