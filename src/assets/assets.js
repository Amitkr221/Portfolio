import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
} from "react-icons/fa";

import profileImg from "../assets/profile.png";
import profileImg1 from "../assets/profile1.jpg";
import projectImg1 from "../assets/project1.avif";
import projectImg4 from "../assets/project4.avif";
import projectImg5 from "../assets/project5.avif";

export const assets = {
  profileImg,
  profileImg1,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Problem-Solving",
    description:
      "I like breaking down complex problems into manageable steps and finding efficient solutions that make the project stronger and more reliable.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "User-Centered Design",
    description:
      "I always keep the end-user in mind, making sure interfaces are simple and enjoyable to interact with.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I focus on writing code that’s not just functional but also easy to maintain and extend, so projects can grow smoothly in the future.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["HTML", "CSS", "JS", "Bootstrap", "React"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description:
      "Familiar with backend basics like connecting with databases and handling simple server-side logic.",
    tags: ["Node.js", "Express"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and working with databases, write queries, and manage data efficiently.",
    tags: ["MongoDB", "MySQL"],
  },

  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "VS Code"],
  },
];

export const projects = [
  {
    title: "Weather App",
    description:
      "A simple weather web app that displays real-time weather details by just entering a city or state name.",
    image: projectImg1,
    tech: ["React"],
    icons: [FaReact],
    demo: "https://weatherapp-k628.onrender.com/",
    code: "https://github.com/Amitkr221/weatherApp",
  },

  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects & skills",
    image: projectImg4,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact],
    demo: "https://portfolio-ypa4.onrender.com",
    code: "https://github.com/Amitkr221/Portfolio",
  },
  {
    title: "AI ChatBot",
    description:
      "An AI chatbot that can understand user queries and provide intelligent responses in real-time.",
    image: projectImg5,
    tech: ["React"],
    icons: [FaReact],
    demo: "https://askbot-9xnd.onrender.com",
    code: "https://github.com/Amitkr221/AskBot",
  },
];
