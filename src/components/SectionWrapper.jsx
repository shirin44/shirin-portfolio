import React from "react";
import { motion } from "framer-motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section id={idName} className="min-h-screen flex items-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Component />
        </motion.div>
      </section>
    );
  };

export default SectionWrapper;
