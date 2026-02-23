// src/data/experienceData.js

import { Award, Target } from "lucide-react";

/* ---------------------------- EXPERIENCE ---------------------------- */

export const experienceData = [
  {
    title:
      "RMIT University Vietnam – Research Assistant (Responsible GenAI & NLP)",
    date: "Jun 2025 – Present",
    tag: "Research",
    icon: Award,
    bullets: [
      "Conducting NLP research on cultural and linguistic bias in AI-generated text for low-resource languages.",
      "Designing data pipelines for prompt engineering, model sampling, and dataset documentation.",
      "Co-developing bias-aware fine-tuning experiments integrating NLP and sociolinguistic methods.",
      "Supporting annotation workflows, literature reviews, and multi-author paper drafting.",
      "Collaborating with VLSP partners on open-source datasets and publications.",
    ],
  },
  {
    title: "DIGI-TEXX – AI & NLP Intern",
    date: "Sep 2025 – Jan 2026",
    tag: "Internship",
    icon: Target,
    bullets: [
      "Developing NLP and document-understanding systems for enterprise automation.",
      "Training NER and text classification models for Vietnamese medical data.",
      "Building OCR-based data extraction pipelines for structured information capture.",
      "Integrating NLP models into internal workflow automation tools.",
    ],
  },
  {
    title: "Intel Vietnam – Automation Engineer Intern",
    date: "Mar 2025 – Sep 2025",
    tag: "Capstone",
    icon: Target,
    bullets: [
      "Led end-to-end automation architecture and VBA integration for custom reporting workflows.",
      "Implemented pipelines for file ingestion, email scheduling, and SharePoint archiving.",
      "Built failure recovery and role-based permission workflows.",
      "Reduced processing time from 4 hours to under 15 minutes while maintaining 100% accuracy.",
    ],
  },
  {
    title: "Wareflex – Front-End Developer Intern",
    date: "Jan 2024 – May 2024",
    tag: "Internship",
    icon: Award,
    bullets: [
      "Developed a responsive landing page using React.js and Tailwind CSS for a logistics platform.",
      "Reviewed and optimized 100+ pull requests aligned with headless architecture conventions.",
      "Integrated backend APIs for real-time data updates and user-facing features.",
      "Received a recommendation letter for high-quality contributions.",
    ],
  },
];

/* ---------------------------- EDUCATION ---------------------------- */

export const educationData = {
  degree: "Bachelor of Software Engineering (Honours)",
  school: "RMIT University Vietnam",
  timeline: "Nov 2022 – Feb 2026",
  details: [
    "Minor: Artificial Intelligence & Machine Learning",
    "Academic Excellence Scholarship (2022–Present)",
    "Relevant coursework: Data Structures & Algorithms, Computing Theory, Machine Learning, Artificial Intelligence, Software Architecture & Design, Programming Autonomous Robots, Programming IoT",
  ],
};

/* ---------------------------- CERTIFICATIONS ---------------------------- */

export const certifications = [
  {
    title: "ISTQB Certified Tester",
    provider: "ISTQB",
    image: "certificates/ISTQB.png",
    link: "#",
  },
  {
    title: "Supervised Machine Learning",
    provider: "Stanford University (Coursera)",
    image: "certificates/ml.png",
    link: "https://coursera.org/share/ac5a28d6ebc8747eaeb1b62606fba1e7",
  },
  {
    title: "Generative AI for Everyone",
    provider: "DeepLearning.AI (Coursera)",
    image: "certificates/genai.png",
    link: "https://coursera.org/share/a70eb1c90753849f1ec9c521b273ce21",
  },
  {
    title: "Fundamentals of UI/UX Design",
    provider: "Microsoft (Coursera)",
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
    title: "IoT & Embedded Systems",
    provider: "UC Irvine (Coursera)",
    image: "certificates/iot.png",
    link: "https://coursera.org/share/a78f8cb0ff195242c0facab9fe32c8bd",
  },
];