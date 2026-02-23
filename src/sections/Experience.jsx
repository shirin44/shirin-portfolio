// src/sections/Experience.jsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

import {
  experienceData,
  educationData,
  certifications,
} from "../data/experienceData";

const fadeSlideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAllCerts, setShowAllCerts] = useState(false);

  const certsToShow = useMemo(() => {
    if (showAllCerts) return certifications;
    return certifications.slice(0, 4);
  }, [showAllCerts]);

  return (
    <section
      id="experience"
      className="relative snap-start min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FAF3E0] to-[#F4E2D8] text-[#322828] px-4 py-20 md:py-24 overflow-x-hidden"
      tabIndex={-1}
    >
      {/* Background blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#B23A48]/25 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#5F4B44]/20 blur-2xl rounded-full z-0 animate-pulse" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlideUp}
          className="mb-10 md:mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#B23A48]">
            Experience
          </h2>

         
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT: Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* timeline line */}
              <div className="absolute left-[14px] top-2 bottom-2 w-[2px] bg-[#B23A48]/25 rounded-full" />

              <div className="space-y-6">
                {experienceData.map((job, i) => {
                  const Icon = job.icon;
                  const isOpen = expandedIndex === i;

                  const bullets = job.bullets || [];
                  const preview = bullets.slice(0, 2);
                  const rest = bullets.slice(2);

                  return (
                    <motion.div
                      key={`${job.title}-${job.date}-${i}`}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeSlideUp}
                      className="relative pl-10"
                    >
                      {/* node */}
                      <div className="absolute left-[6px] top-5 w-4 h-4 rounded-full bg-[#B23A48] shadow" />
                      {/* card */}
                      <div className="bg-white rounded-3xl shadow-xl border border-[#E4DCCF] overflow-hidden">
                        <div className="p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs bg-[#FAD2D1] text-[#B23A48] px-2 py-1 rounded-full font-semibold shadow inline-flex items-center gap-1">
                                  {Icon ? <Icon className="w-4 h-4" /> : null}
                                  {job.tag}
                                </span>
                              </div>

                              <h4 className="text-xl font-bold leading-snug">
                                {job.title}
                              </h4>
                              <p className="text-sm font-medium text-[#5F4B44] mt-1">
                                {job.date}
                              </p>
                            </div>

                            <button
                              onClick={() =>
                                setExpandedIndex(isOpen ? null : i)
                              }
                              className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#B23A48] bg-[#FAD2D1] px-3 py-2 rounded-full hover:bg-[#B23A48]/15 transition"
                            >
                              {isOpen ? "Less" : "More"}
                              <ChevronDown
                                className={`w-4 h-4 transition ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          </div>

                          {/* bullets (preview) */}
                          <ul className="mt-4 space-y-2 text-[#5F4B44]">
                            {preview.map((pt, j) => (
                              <li key={`${job.title}-p-${j}`} className="flex gap-2">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#B23A48]/70 shrink-0" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>

                          {/* expanded bullets */}
                          <AnimatePresence>
                            {isOpen && rest.length > 0 && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="mt-2 space-y-2 text-[#5F4B44] overflow-hidden"
                              >
                                {rest.map((pt, j) => (
                                  <li
                                    key={`${job.title}-r-${j}`}
                                    className="flex gap-2"
                                  >
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#B23A48]/40 shrink-0" />
                                    <span>{pt}</span>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Sticky Education + Certs */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Education */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeSlideUp}
                className="bg-white rounded-3xl shadow-xl border border-[#E4DCCF] p-6"
              >
                <h3 className="text-xl font-extrabold text-[#B23A48] mb-3">
                  Education
                </h3>

                <h4 className="text-lg font-bold">{educationData.degree}</h4>
                <p className="text-sm text-[#5F4B44] mt-1">
                  {educationData.school} — <em>{educationData.timeline}</em>
                </p>

                <ul className="mt-4 space-y-2 text-[#5F4B44] text-sm">
                  {educationData.details.map((d, i) => (
                    <li key={`edu-${i}`} className="flex gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#B23A48]/50 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeSlideUp}
                className="bg-white rounded-3xl shadow-xl border border-[#E4DCCF] p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-extrabold text-[#B23A48]">
                    Certifications
                  </h3>

                  <button
                    onClick={() => setShowAllCerts((v) => !v)}
                    className="text-sm font-semibold text-[#B23A48] bg-[#FAD2D1] px-3 py-1.5 rounded-full hover:bg-[#B23A48]/15 transition"
                  >
                    {showAllCerts ? "Show less" : "Show all"}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {certsToShow.map((cert, i) => (
                    <a
                      key={`${cert.title}-${i}`}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex gap-3 items-center rounded-2xl border border-[#E4DCCF] p-3 hover:shadow-lg transition"
                    >
                      <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#E4DCCF] bg-[#FFF8F0] shrink-0">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "certificates/placeholder.png";
                          }}
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="font-bold text-sm leading-snug">
                          {cert.title}
                        </p>
                        <p className="text-xs text-[#5F4B44]">{cert.provider}</p>

                        {cert.link && cert.link !== "#" && (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#B23A48] mt-1">
                            Open <ExternalLink className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}