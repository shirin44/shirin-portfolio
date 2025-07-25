// skillsData.js
import {
    FaReact, FaNodeJs, FaPython, FaFigma, FaGitAlt, FaDocker, FaJava, FaVial
  } from 'react-icons/fa'
  import {
    SiTailwindcss, SiMongodb, SiMysql, SiVite, SiRedux, SiExpress,
    SiPostman, SiJira, SiVercel, SiCanva, SiTypescript, SiJavascript,
    SiTensorflow, SiScikitlearn, SiOpencv
  } from 'react-icons/si'
  import { TbBrandNextjs } from 'react-icons/tb'
  
  export const skills = {
    Programming: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Java', icon: <FaJava /> },
    ],
    Frontend: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <TbBrandNextjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Redux', icon: <SiRedux /> },
    ],
    Backend: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
    Tools: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Jira', icon: <SiJira /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Vite', icon: <SiVite /> },
    ],
    AI_ML: [
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'OpenCV', icon: <SiOpencv /> },
    ],
    Creative: [
      { name: 'Figma', icon: <FaFigma /> },
      { name: 'Canva', icon: <SiCanva /> },
      { name: 'Excel VBA', icon: <FaVial /> },
    ]
  }
  