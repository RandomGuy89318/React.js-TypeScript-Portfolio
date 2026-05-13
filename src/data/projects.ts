export interface Project {
  id: number;
  title: string;
  description: string;
  source: string;
  techStack: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A terminal-inspired developer portfolio featuring interactive navigation, multiple themes, coding mini-games, certificate previews, and a custom CLI-style terminal built with React and TypeScript.",
    source: "https://github.com/RandomGuy89318/React.js-TypeScript-Portfolio.git",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Framer Motion",
      "CSS"
    ]
  },
  {
    id: 2,
    title: "Project Beta",
    description: "Automated deployment pipeline for static portfolio sites with custom CLI.",
    source: "temp@github",
    techStack: ["Node.js", "Shell", "Vercel"]
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "Data visualization dashboard for system monitoring and resource tracking.",
    source: "temp@github",
    techStack: ["D3.js", "React", "CSS"]
  }
];
