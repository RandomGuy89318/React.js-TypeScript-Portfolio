import React from 'react';
import { motion } from 'framer-motion';
import TechTag from '../../components/ui/TechTag';

import { projectsData } from '../../data/projects';

const Projects: React.FC = () => {
  const projects = projectsData;

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
              {project.techStack.map(tech => (
                <TechTag key={tech} name={tech} />
              ))}
            </div>

            <a href={project.source} target="_blank" rel="noopener noreferrer" style={styles.githubLink}>
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
    paddingBottom: '2rem',
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
    marginBottom: '1.5rem',
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
