import { certificates } from './certificates';
import { projectsData } from './projects';
import { skillsData } from './skills';

export interface Stat {
  label: string;
  value: number;
}

// Union of technologies listed in project stacks and the skills section.
const technologies = new Set([
  ...projectsData.flatMap((project) => project.techStack),
  ...skillsData,
]);

export const statsData: Stat[] = [
  { label: 'Projects Completed', value: projectsData.length },
  { label: 'Certificates Earned', value: certificates.length },
  { label: 'Technologies Used', value: technologies.size },
  // Public repository count for github.com/RandomGuy89318; update manually if it changes.
  { label: 'GitHub Repositories', value: 3 },
];
