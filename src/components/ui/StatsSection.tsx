import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { statsData } from '../../data/stats';
import type { Stat } from '../../data/stats';

const StatsSection: React.FC = () => {
  const stats = statsData;

  return (
    <div style={styles.container}>
      {stats.map((stat, i) => (
        <StatCard key={stat.label} stat={stat} index={i} />
      ))}
    </div>
  );
};

const StatCard: React.FC<{ stat: Stat; index: number }> = ({ stat, index }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = stat.value;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: '0 0 15px var(--glow)', borderColor: 'var(--accent-primary)' }}
      className="terminal-card"
      style={styles.card}
    >
      <div style={styles.value} className="glow-text">{count}</div>
      <div style={styles.label}>{stat.label}</div>
    </motion.div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginTop: '4rem',
    marginBottom: '2rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    textAlign: 'center',
  },
  value: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'var(--accent-primary)',
    fontFamily: 'var(--font-mono)',
    marginBottom: '0.5rem',
  },
  label: {
    fontSize: '0.85rem',
    opacity: 0.7,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontFamily: 'var(--font-sans)',
  }
};

export default StatsSection;
