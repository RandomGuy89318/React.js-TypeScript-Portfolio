import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';
import type { ThemeType } from '../../../context/ThemeContext';
import { personalInfo } from '../../../data/personalInfo';

const HomeSidebarRight: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes: { name: ThemeType; label: string; color: string }[] = [
    { name: 'hacker', label: 'HACKER', color: '#00ff41' },
    { name: 'neon', label: 'NEON', color: '#ff00ff' },
    { name: 'matrix', label: 'MATRIX', color: '#008f11' },
    { name: 'midnight', label: 'MIDNIGHT', color: '#3b82f6' },
    { name: 'solarized', label: 'SOLARIZED', color: '#b58900' },
    { name: 'crt', label: 'CRT', color: '#33ff33' },
    { name: 'void', label: 'VOID', color: '#ffffff' },
    { name: 'aurora', label: 'AURORA', color: '#8b5cf6' },
  ];

  const quickLinks = [
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Games', path: '/games' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'sticky', top: '100px' }}>
      
      {/* Theme Switcher */}
      <section className="terminal-card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--accent-secondary)', fontFamily: 'var(--font-mono)' }}>
          [ UI_THEMES ]
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
          {themes.map((t) => {
            const isActive = theme === t.name;
            return (
              <motion.button
                key={t.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(t.name)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  padding: '0.5rem',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  backgroundColor: 'var(--card-bg)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.3s ease',
                  color: isActive ? 'var(--text-color)' : 'var(--text-color)',
                  borderColor: isActive ? 'var(--accent-primary)' : 'var(--border-color)',
                  boxShadow: isActive ? '0 0 8px var(--glow)' : 'none',
                  opacity: isActive ? 1 : 0.6,
                }}
              >
                <span 
                  style={{ 
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    display: 'inline-block',
                    backgroundColor: t.color,
                    boxShadow: `0 0 6px ${t.color}`
                  }} 
                />
                {t.label}
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="terminal-card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--accent-secondary)', fontFamily: 'var(--font-mono)' }}>
          [ SYSTEM_NAV ]
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {quickLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path}
              className="btn"
              style={{
                padding: '0.8rem',
                textAlign: 'center',
                textDecoration: 'none',
                width: '100%',
                display: 'block'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </section>

      {/* External Links */}
      <section className="terminal-card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--accent-secondary)', fontFamily: 'var(--font-mono)' }}>
          [ EXTERNAL_LINKS ]
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn" style={{ padding: '0.8rem' }}>
            [ GITHUB_PROFILE ]
          </a>
          <a href={personalInfo.resumePath} target="_blank" rel="noreferrer" className="btn" style={{ padding: '0.8rem', borderColor: 'var(--accent-secondary)', color: 'var(--accent-secondary)' }}>
            [ DOWNLOAD_RESUME ]
          </a>
        </div>
      </section>

    </div>
  );
};

export default HomeSidebarRight;
