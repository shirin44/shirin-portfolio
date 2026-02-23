// src/sections/Publications.jsx
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Link2, Copy, Search } from "lucide-react";
import toast from "react-hot-toast";
import { publicationsData } from "../data/publicationsData";

const fadeSlideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

function getHref(p) {
  if (p?.doi && p.doi.trim()) return `https://doi.org/${p.doi.trim()}`;
  if (p?.link && p.link !== "#") return p.link;
  return null;
}

function buildCitation(p) {
  const parts = [];
  if (p.authors) parts.push(p.authors);
  if (p.title) parts.push(p.title);
  const venueYear = [p.venue, p.year].filter(Boolean).join(". ");
  if (venueYear) parts.push(venueYear);
  if (p.doi && p.doi.trim()) parts.push(`doi:${p.doi.trim()}`);
  return parts.join(". ") + ".";
}

export default function Publications() {
  const [query, setQuery] = useState("");

  const normalized = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!normalized) return publicationsData;

    return publicationsData.filter((p) => {
      const hay = [
        p.title,
        p.authors,
        p.venue,
        p.year,
        p.status,
        p.doi,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return hay.includes(normalized);
    });
  }, [normalized]);

  const groupedByYear = useMemo(() => {
    const map = new Map();

    filtered.forEach((p) => {
      const year = String(p.year || "Other");
      if (!map.has(year)) map.set(year, []);
      map.get(year).push(p);
    });

    // sort years desc (numeric if possible)
    const years = Array.from(map.keys()).sort((a, b) => {
      const na = Number(a);
      const nb = Number(b);
      const aIsNum = !Number.isNaN(na);
      const bIsNum = !Number.isNaN(nb);
      if (aIsNum && bIsNum) return nb - na;
      if (aIsNum) return -1;
      if (bIsNum) return 1;
      return b.localeCompare(a);
    });

    // within each year, keep stable order as given (or sort by venue/title if you want)
    return years.map((y) => ({ year: y, items: map.get(y) }));
  }, [filtered]);

  const handleCopy = async (p) => {
    try {
      const citation = buildCitation(p);
      await navigator.clipboard.writeText(citation);
      toast.success("Citation copied");
    } catch {
      toast.error("Couldn’t copy (browser blocked clipboard)");
    }
  };

  return (
    <section
      id="publications"
      className="relative snap-start min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FAF3E0] to-[#F4E2D8] text-[#322828] px-4 py-20 md:py-24 overflow-x-hidden"
      tabIndex={-1}
    >
      {/* background blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#B23A48]/25 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#5F4B44]/20 blur-2xl rounded-full z-0 animate-pulse" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlideUp}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#B23A48]">
              Publications
            </h2>
            <p className="text-[#5F4B44] mt-3 max-w-2xl">
              Peer-reviewed and workshop publications in Responsible AI, NLP evaluation,
              and cultural bias.
            </p>
          </div>

          {/* search */}
          <div className="w-full md:w-[380px]">
            <div className="flex items-center gap-2 bg-white/80 border border-[#E4DCCF] rounded-2xl px-4 py-3 shadow">
              <Search className="w-5 h-5 text-[#B23A48]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search title, venue, DOI, authors…"
                className="w-full bg-transparent outline-none text-sm text-[#322828] placeholder:text-[#5F4B44]/70"
              />
            </div>
            <p className="text-xs text-[#5F4B44] mt-2 opacity-80">
              Showing <span className="font-semibold">{filtered.length}</span>{" "}
              result(s)
            </p>
          </div>
        </motion.div>

        {/* groups */}
        <div className="space-y-10">
          {groupedByYear.map(({ year, items }, groupIndex) => (
            <div key={year}>
              {/* year pill */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeSlideUp}
                custom={groupIndex}
                className="flex items-center gap-3 mb-5"
              >
                <div className="h-px flex-1 bg-[#E4DCCF]" />
                <span className="text-sm font-extrabold text-[#B23A48] bg-[#FAD2D1] px-4 py-2 rounded-full shadow">
                  {year}
                </span>
                <div className="h-px flex-1 bg-[#E4DCCF]" />
              </motion.div>

              {/* cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((p, i) => {
                  const href = getHref(p);
                  const isDoi = Boolean(p?.doi && p.doi.trim());
                  const Icon = p.icon;

                  return (
                    <motion.div
                      key={`${p.title}-${i}`}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeSlideUp}
                      custom={i}
                      className="bg-white rounded-3xl shadow-xl border border-[#E4DCCF] p-6 relative overflow-hidden"
                    >
                      {/* accent strip */}
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#B23A48]" />

                      {/* top badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-3 pl-2">
                        <span className="text-xs bg-[#FAD2D1] text-[#B23A48] px-2 py-1 rounded-full font-semibold shadow inline-flex items-center gap-1">
                          {Icon ? <Icon className="w-4 h-4" /> : null}
                          {p.venue || "Publication"}
                        </span>

                        {p.status ? (
                          <span className="text-xs bg-white/70 border border-[#E4DCCF] text-[#5F4B44] px-2 py-1 rounded-full font-semibold shadow">
                            {p.status}
                          </span>
                        ) : null}

                        {p.doi && p.doi.trim() ? (
                          <span className="text-xs bg-white/70 border border-[#E4DCCF] text-[#5F4B44] px-2 py-1 rounded-full font-semibold shadow font-mono">
                            DOI
                          </span>
                        ) : null}
                      </div>

                      <div className="pl-2">
                        <h3 className="text-lg md:text-xl font-extrabold leading-snug">
                          {p.title}
                        </h3>

                        {p.authors ? (
                          <p className="text-sm text-[#5F4B44] mt-2">
                            {p.authors}
                          </p>
                        ) : null}

                        {/* DOI line (pretty + copyable) */}
                        {p.doi && p.doi.trim() ? (
                          <p className="text-xs text-[#5F4B44] mt-3">
                            <span className="font-semibold">DOI:</span>{" "}
                            <span className="font-mono">{p.doi.trim()}</span>
                          </p>
                        ) : null}

                        {/* actions */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {href ? (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#B23A48] px-4 py-2 rounded-full shadow hover:opacity-90 transition"
                            >
                              {isDoi ? (
                                <>
                                  Open DOI <Link2 className="w-4 h-4" />
                                </>
                              ) : (
                                <>
                                  Open <ExternalLink className="w-4 h-4" />
                                </>
                              )}
                            </a>
                          ) : (
                            <span className="text-sm font-semibold text-[#5F4B44] bg-[#FFF8F0] border border-[#E4DCCF] px-4 py-2 rounded-full">
                              Link coming soon
                            </span>
                          )}

                          <button
                            onClick={() => handleCopy(p)}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#B23A48] bg-[#FAD2D1] px-4 py-2 rounded-full shadow hover:bg-[#B23A48]/15 transition"
                          >
                            Copy citation <Copy className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}