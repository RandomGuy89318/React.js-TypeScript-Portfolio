import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../../../data/projects';
import { skillsData } from '../../../data/skills';
import TechTag from '../../../components/ui/TechTag';

const HomeMainLeft: React.FC = () => {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      
      {/* About Section */}
      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>
          &gt; whoami
        </h2>
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="terminal-card" 
          style={{ padding: '2rem' }}
        >
          <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
            I am a passionate software engineer specializing in building immersive, high-performance web applications. 
            I thrive at the intersection of design and logic, bringing a unique cyberpunk aesthetic to modern frontend development.
          </p>
        </motion.div>
      </section>

      {/* Featured Projects Preview */}
      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>
          &gt; featured_projects
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {featuredProjects.map((proj, i) => (
            <motion.div 
              key={proj.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: 'var(--accent-primary)' }}
              className="terminal-card"
              style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', margin: 0 }}>{proj.title}</h3>
                <a href={proj.source} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', textDecoration: 'underline' }}>SOURCE</a>
              </div>
              <p style={{ opacity: 0.8, fontSize: '0.9rem', margin: 0 }}>{proj.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                {proj.techStack.map(tech => (
                  <TechTag key={tech} name={tech} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>
          &gt; technical_skills
        </h2>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="terminal-card" 
          style={{ padding: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}
        >
          {skillsData.map(skill => (
            <TechTag key={skill} name={skill} />
          ))}
        </motion.div>
      </section>

    </div>
  );
};

export default HomeMainLeft;
