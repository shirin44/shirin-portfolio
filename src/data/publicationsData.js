// src/data/publicationsData.js
import { BookOpen } from "lucide-react";

export const publicationsData = [
  {
    title: "Detecting Framing Bias in News via Probabilistic Graphical Modeling",
    authors: "Shirin Shujaa, Ginel Dorleon",
    venue: "ACM/IEEE Joint Conference on Digital Libraries (JCDL)",
    year: "2025",
    status: "Published",
    doi: "10.1109/JCDL67857.2025.00037",
    link: "", // optional (DOI is enough)
    icon: BookOpen,
  },
  {
    title:
      "How LLMs Handle Cultural Bias: Reactions to Asian Minority Historical Narratives",
    authors: "Shirin Shujaa, Ginel Dorleon, Arthur Tang",
    venue: "Proceedings (Springer)",
    year: "2025",
    status: "Published",
    // Springer chapter link includes this DOI pattern
    doi: "10.1007/978-981-95-4861-3_3",
    link: "https://link.springer.com/chapter/10.1007/978-981-95-4861-3_3",
    icon: BookOpen,
  },
  {
    title: "Uncovering Cultural Biases and Stereotypes in Large Language Models",
    authors: "Ginel Dorleon, Shirin Shujaa",
    venue: "Proceedings (Springer)",
    year: "2025",
    status: "Published (Dec 2025)",
    doi: "10.1007/978-981-95-4861-3_5",
    link: "", // optional (DOI is enough)
    icon: BookOpen,
  },

  // --- keep these as placeholders until you paste their DOI/link ---
  {
    title: "PrefixGuard LLMs: Hate Speech and Sexism Detection",
    authors: "Shirin Shujaa, Ginel Dorleon, Wissam M. Kouadri",
    venue: "ACM/IEEE JCDL",
    year: "2025",
    status: "Accepted",
    doi: "",
    link: "#",
    icon: BookOpen,
  },
  {
    title: "ASAP: Constant-Factor Proportional Fairness via Learning-Augmented Online",
    authors: "Ginel Dorleon, Shirin Shujaa",
    venue: "IEEE ICDM (RDM Workshop)",
    year: "2025",
    status: "Accepted",
    doi: "",
    link: "#",
    icon: BookOpen,
  },
];