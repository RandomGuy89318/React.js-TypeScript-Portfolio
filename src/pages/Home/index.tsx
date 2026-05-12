import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import type { ThemeType } from '../../context/ThemeContext';

const Home: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const terminalLines = [
    { text: "> initializing portfolio...", delay: 0.2 },
    { text: "> loading system modules...", delay: 0.5 },
    { text: "> access granted.", delay: 0.8 },
  ];

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

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.terminalHeader}>
          {terminalLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: line.delay }}
              style={styles.terminalLine}
            >
              {line.text}
            </motion.div>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={styles.title}
        >
          <span className="terminal-text glow-text">Temp Name</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={styles.subtitle}
        >
          Full Stack Developer // Terminal Enthusiast // UI Explorer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          style={styles.cta}
        >
          <Link to="/projects" className="btn" style={styles.primaryBtn}>
            [ VIEW_PROJECTS ]
          </Link>
          <Link to="/contact" className="btn" style={styles.secondaryBtn}>
            [ CONTACT_ME ]
          </Link>
        </motion.div>
      </div>

      <footer style={styles.footer}>
        <div style={styles.footerLabel} className="mono">SELECT_THEME:</div>
        <div style={styles.themeGrid}>
          {themes.map((t) => {
            const isActive = theme === t.name;
            return (
              <motion.button
                key={t.name}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(t.name)}
                style={{
                  ...styles.themeBtn,
                  color: isActive ? 'var(--text-color)' : 'var(--text-color)',
                  borderColor: isActive ? 'var(--accent-primary)' : 'var(--border-color)',
                  boxShadow: isActive ? '0 0 10px var(--glow)' : 'none',
                  opacity: isActive ? 1 : 0.6,
                }}
              >
                <span 
                  style={{ 
                    ...styles.colorDot, 
                    backgroundColor: t.color,
                    boxShadow: `0 0 8px ${t.color}`
                  }} 
                />
                [{t.label}]
              </motion.button>
            );
          })}
        </div>
      </footer>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '70vh',
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  terminalHeader: {
    marginBottom: '2rem',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.9rem',
    opacity: 0.7,
  },
  terminalLine: {
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '4rem',
    marginBottom: '1rem',
    fontWeight: '800',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '3rem',
    maxWidth: '600px',
    lineHeight: '1.6',
    opacity: 0.8,
  },
  cta: {
    display: 'flex',
    gap: '2rem',
  },
  primaryBtn: {
    borderColor: 'var(--accent-primary)',
    color: 'var(--accent-primary)',
  },
  secondaryBtn: {
    borderColor: 'var(--accent-secondary)',
    color: 'var(--accent-secondary)',
  },
  footer: {
    marginTop: '4rem',
    paddingTop: '2rem',
    borderTop: '1px solid var(--border-color)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  footerLabel: {
    fontSize: '0.8rem',
    opacity: 0.5,
  },
  themeGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.2rem',
  },
  themeBtn: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    padding: '0.5rem 1rem',
    border: '1px solid var(--border-color)',
    borderRadius: '6px',
    backgroundColor: 'var(--card-bg)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease',
  },
  colorDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    display: 'inline-block',
  }
};

export default Home;
