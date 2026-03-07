import {
  FaPython, FaReact, FaNodeJs, FaGitAlt, FaDocker,
  FaFigma, FaLinux, FaJava, FaBrain, FaFileCode, FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript, SiCplusplus, SiTailwindcss, SiTensorflow, SiPytorch,
  SiScikitlearn, SiOpencv, SiPandas, SiNumpy, SiJupyter, SiHuggingface,
  SiMongodb, SiSelenium, SiLatex, SiMysql, SiOpenai,
} from "react-icons/si";
import { MdVerifiedUser } from "react-icons/md";
import { VscBeaker, VscVscode } from "react-icons/vsc";

export const skills = {
  Programming: [
    { name: "Python",     icon: FaPython      },
    { name: "JavaScript", icon: SiJavascript  },
    { name: "Java",       icon: FaJava        },
    { name: "C/C++",      icon: SiCplusplus   },
    { name: "VBA",        icon: FaFileCode    },
  ],
  "AI & ML": [
    { name: "PyTorch",      icon: SiPytorch     },
    { name: "TensorFlow",   icon: SiTensorflow  },
    { name: "Scikit-learn", icon: SiScikitlearn },
    { name: "Hugging Face", icon: SiHuggingface },
    { name: "OpenCV",       icon: SiOpencv      },
    { name: "NLTK",         icon: FaBrain       },
    { name: "LLM",          icon: SiOpenai      },
    { name: "RAG",          icon: FaDatabase    },
  ],
  "Data & Research": [
    { name: "pandas",  icon: SiPandas  },
    { name: "NumPy",   icon: SiNumpy   },
    { name: "Jupyter", icon: SiJupyter },
    { name: "SQL",     icon: SiMysql   },
    { name: "LaTeX",   icon: SiLatex   },
  ],
  "Frontend & Design": [
    { name: "React",       icon: FaReact       },
    { name: "Tailwind CSS",icon: SiTailwindcss },
    { name: "Node.js",     icon: FaNodeJs      },
    { name: "Figma",       icon: FaFigma       },
  ],
  "Testing & QA": [
    { name: "ISTQB",          icon: MdVerifiedUser },
    
    { name: "Katalon Studio", icon: VscBeaker      },
  ],
  "Tools & DevOps": [
    { name: "Git",     icon: FaGitAlt  },
    { name: "Docker",  icon: FaDocker  },
    { name: "Linux",   icon: FaLinux   },
    { name: "MongoDB", icon: SiMongodb },
    { name: "VS Code", icon: VscVscode },
  ],
};
