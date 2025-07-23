// src/components/SectionWrapper.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionWrapper = (Component, sectionId) => {
  return function HOC() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
      <motion.section
        id={sectionId}
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen px-6 md:px-20 py-16"
      >
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;
