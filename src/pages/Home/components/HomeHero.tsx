import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../../data/personalInfo';
import Terminal from '../../../components/terminal/Terminal';

const HomeHero: React.FC = () => {
  const { name } = personalInfo;

  return (
    <section style={{ textAlign: 'center', marginBottom: '4rem', paddingTop: '2rem' }}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem' }}
      >
        <span className="terminal-text glow-text">{name}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '3rem', fontFamily: 'var(--font-mono)' }}
      >
        Full Stack Developer / Terminal-Inspired Portfolio
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
      >
        <div style={{ width: '100%', maxWidth: '1000px', height: '400px' }}>
          <Terminal />
        </div>
      </motion.div>
    </section>
  );
};

export default HomeHero;
