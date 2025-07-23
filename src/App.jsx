import SectionWrapper from "./components/SectionWrapper";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import DotNav from "./components/DotNav";

const App = () => {
  return (
    <>
      <DotNav />
      <SectionWrapper sectionId="hero" Component={Hero} />
      <SectionWrapper sectionId="about" Component={About} />
      <SectionWrapper sectionId="projects" Component={Projects} />
      <SectionWrapper sectionId="contact" Component={Contact} />
    </>
  );
};
export default App;
