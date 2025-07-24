import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Award, Target } from "lucide-react";

const certifications = [
    {
      title: "Fundamentals of UI/UX Design",
      provider: "Coursera",
      image: "certificates/uiux.png",
      link: "https://coursera.org/share/9758338ee57a40b1036c1693135d2591",
    },
    {
      title: "Designing for User Experience",
      provider: "Coursera",
      image: "certificates/ux.png",
      link: "https://coursera.org/share/1d41accea5e70a69552a8a94dc76b4ee",
    },
    {
      title: "Excel VBA and Macros",
      provider: "Coursera",
      image: "certificates/vba.png",
      link: "https://coursera.org/share/085bb0f7c0c5540427e49e030021342f",
    },
    {
      title: "Supervised Machine Learning",
      provider: "DeepLearning.AI",
      image: "certificates/ml.png",
      link: "https://coursera.org/share/ac5a28d6ebc8747eaeb1b62606fba1e7",
    },
    {
      title: "IoT & Embedded Systems",
      provider: "UC Irvine",
      image: "certificates/iot.png",
      link: "https://coursera.org/share/a78f8cb0ff195242c0facab9fe32c8bd",
    },
    {
      title: "Generative AI for Everyone",
      provider: "DeepLearning.AI",
      image: "certificates/genai.png",
      link: "https://coursera.org/share/a70eb1c90753849f1ec9c521b273ce21",
    },
  ];
  

const fadeSlideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Experience() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="experience"
      tabIndex={-1}
      className="relative min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FAF3E0] to-[#F4E2D8] text-[#322828] px-6 py-24 flex flex-col items-center overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#B23A48]/30 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#5F4B44]/30 blur-2xl rounded-full z-0 animate-pulse" />

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        <div>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-[#B23A48] mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeSlideUp}
          >
            Experience
          </motion.h2>

          {
            // Inside the .map of jobs
            [
              {
                title: "Wareflex – Frontend Developer Intern",
                date: "Jan–May 2024",
                icon: <Award className="w-4 h-4 inline mr-1 text-[#B23A48]" />,
                tag: "Internship",
                bullets: [
                  "Developed a responsive landing page using React and Tailwind",
                  "Reviewed and optimized 100+ PRs following headless architecture",
                  "Collaborated on real-time API integration with backend team",
                  "Received a recommendation letter for outstanding contributions",
                ],
              },
              {
                title: "Intel (Capstone Project) – Automation Engineer",
                date: "Mar–Sep 2025",
                icon: <Target className="w-4 h-4 inline mr-1 text-[#B23A48]" />,
                tag: "Capstone",
                bullets: [
                  "Led frontend and VBA integration for custom report automation",
                  "Built modules for file uploads, email scheduling, and SharePoint archiving",
                  "Developed a failure recovery feature and user role management",
                  "Delivered a 4-hour task in under 15 minutes",
                ],
              },
            ].map((job, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-3xl shadow-xl p-6 relative overflow-hidden border-l-4 border-[#B23A48] pl-8 mb-8"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeSlideUp}
              >
                <div className="absolute -left-4 top-6 w-3 h-3 bg-[#B23A48] rounded-full shadow-lg" />
                <div className="absolute top-2 right-4 text-xs bg-[#FAD2D1] text-[#B23A48] px-2 py-1 rounded-full font-semibold shadow flex items-center gap-1">
                  {job.icon} <span>{job.tag}</span>
                </div>

                <h4 className="text-xl font-bold">
                  {job.title}
                  <span className="block text-sm font-medium text-[#5F4B44]">
                    {job.date}
                  </span>
                </h4>
                <ul className="list-disc list-inside text-[#5F4B44] mt-3 space-y-1">
                  {job.bullets.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </motion.div>
            ))
          }
        </div>

        <div>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-[#B23A48] mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeSlideUp}
          >
            Education
          </motion.h2>

          <motion.div
            className="mb-10 bg-white rounded-3xl shadow-xl p-6 border-l-4 border-[#B23A48]"
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
          >
            <h4 className="text-xl font-semibold">
              Bachelor of Software Engineering (Honours)
            </h4>
            <p className="text-[#5F4B44]">
              RMIT University, Vietnam – <em>2022 – 2026 (Expected)</em>
            </p>
            <ul className="list-disc list-inside text-[#5F4B44] mt-2 space-y-1">
              <li>Minor in Artificial Intelligence and Machine Learning</li>
              <li>Capstone Project with Intel: Report Automation</li>
              <li>International Excellence Scholarship 2022</li>
            </ul>
          </motion.div>

          <h4 className="text-xl font-semibold mb-4 text-[#B23A48]">
            Courses & Certifications
          </h4>
          <div className="relative flex gap-3 items-center">
            <button
              onClick={() => scroll("left")}
              className="backdrop-blur-sm bg-white/70 border border-[#B23A48] p-2 rounded-full shadow hover:bg-[#B23A48]/20 transition"
            >
              <ChevronLeft className="w-5 h-5 text-[#B23A48]" />
            </button>

            <div
              ref={scrollRef}
              className="overflow-x-auto flex gap-6 pb-2 scroll-smooth snap-x snap-mandatory"
            >
              {certifications.map((cert, i) => (
                <motion.a
                  key={i}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  className="min-w-[220px] bg-white rounded-2xl border border-[#E4DCCF] overflow-hidden snap-center transition-all duration-300 hover:shadow-2xl shadow-lg"
                >
                  <div className="relative w-full h-32 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover hover:scale-110 transition duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "certificates/placeholder.png";

                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="text-md font-semibold text-[#B23A48] leading-snug mb-1">
                      {cert.title}
                    </h5>
                    <p className="text-sm text-[#5F4B44]">{cert.provider}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="backdrop-blur-sm bg-white/70 border border-[#B23A48] p-2 rounded-full shadow hover:bg-[#B23A48]/20 transition"
            >
              <ChevronRight className="w-5 h-5 text-[#B23A48]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
