import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import LiveClock from '../ui/LiveClock';

const Navbar: React.FC = () => {


  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
    { name: 'Games', path: '/games' },
  ];

  return (
    <nav className="navbar" style={styles.nav}>
      <div className="container navbar-container" style={styles.navContainer}>
        <div className="navbar-logo" style={styles.logo}>
          <span className="terminal-text">PORTFOLIO</span>
          <span style={styles.cursor}>_</span>
        </div>

        <ul className="navbar-list" style={styles.navList}>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                className="navbar-link"
                to={item.path}
                style={({ isActive }) => ({
                  ...styles.navLink,
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-color)',
                })}
              >
                {({ isActive }) => (
                  <motion.span
                    whileHover={{ scale: 1.1, color: 'var(--accent-primary)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        style={styles.activeIndicator}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-clock">
          <LiveClock />
        </div>
      </div>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '80px',
    backgroundColor: 'var(--navbar-bg)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--border-color)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  cursor: {
    color: 'var(--accent-primary)',
    animation: 'blink 1s step-end infinite',
  },
  navList: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  navLink: {
    position: 'relative',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: 500,
  },
  activeIndicator: {
    position: 'absolute',
    bottom: '-5px',
    left: 0,
    right: 0,
    height: '2px',
    backgroundColor: 'var(--accent-primary)',
  },
  themeStatus: {
    color: 'var(--accent-secondary)',
    padding: '0.5rem 1rem',
    border: '1px solid var(--border-color)',
    borderRadius: '4px',
  },
};

export default Navbar;
