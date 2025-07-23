// src/components/Layout.jsx
import React from "react";
import DotNav from "./DotNav";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

const Layout = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <DotNav />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default Layout;
