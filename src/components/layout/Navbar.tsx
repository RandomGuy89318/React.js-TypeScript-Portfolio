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
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={styles.nav}
    >
      <div className="container navbar-container" style={styles.navContainer}>
        <motion.div
          className="navbar-logo"
          style={styles.logo}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <span className="terminal-text">PORTFOLIO</span>
          <span style={styles.cursor}>_</span>
        </motion.div>

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
                    whileHover={{ y: -2, color: 'var(--accent-primary)' }}
                    transition={{ duration: 0.3 }}
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
    </motion.nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    position: 'relative',
    height: '80px',
    backgroundColor: 'var(--navbar-bg)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--border-color)',
    display: 'flex',
    alignItems: 'center',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1.5rem',
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
    transition: 'all 0.3s ease',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: '-5px',
    left: 0,
    right: 0,
    height: '2px',
    backgroundColor: 'var(--accent-primary)',
  },
};

export default Navbar;
