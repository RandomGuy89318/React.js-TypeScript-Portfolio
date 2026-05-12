import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  github: string;
  tags: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A terminal-based project management system built with React and TypeScript.",
      github: "temp@github",
      tags: ["React", "TypeScript", "Vite"]
    },
    {
      id: 2,
      title: "Project Beta",
      description: "Automated deployment pipeline for static portfolio sites with custom CLI.",
      github: "temp@github",
      tags: ["Node.js", "Shell", "Vercel"]
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "Data visualization dashboard for system monitoring and resource tracking.",
      github: "temp@github",
      tags: ["D3.js", "React", "CSS"]
    }
  ];

  return (
    <div>
      <div style={styles.header}>
        <h1 className="terminal-text">&gt; projects.list</h1>
        <p style={styles.headerSubtitle}>Selected work and personal experiments.</p>
      </div>

      <div style={styles.grid}>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
            className="terminal-card"
            style={styles.card}
          >
            <h3 style={styles.cardTitle}>{project.title}</h3>
            <p style={styles.cardDesc}>{project.description}</p>
            
            <div style={styles.tagContainer}>
              {project.tags.map(tag => (
                <span key={tag} style={styles.tag}>[{tag}]</span>
              ))}
            </div>

            <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.githubLink}>
              VIEW_SOURCE
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    marginBottom: '3rem',
  },
  headerSubtitle: {
    opacity: 0.6,
    marginTop: '0.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: 'var(--accent-primary)',
  },
  cardDesc: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  tag: {
    fontSize: '0.75rem',
    color: 'var(--accent-secondary)',
    fontFamily: 'var(--font-mono)',
  },
  githubLink: {
    display: 'inline-block',
    padding: '0.5rem 0',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    borderBottom: '1px solid currentColor',
    width: 'fit-content',
    color: 'var(--accent-primary)',
  }
};

export default Projects;
