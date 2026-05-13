import React from 'react';
import { motion } from 'framer-motion';
import Terminal from '../../../components/terminal/Terminal';

const HomeTerminal: React.FC = () => {
  return (
    <motion.section 
      id="terminal-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      style={{ 
        width: '100%', 
        marginTop: '4rem',
        paddingTop: '4rem',
        borderTop: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div style={{ width: '100%', maxWidth: '1000px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>
          &gt; developer_playground.exe
        </h2>
        <div style={{ height: '500px', width: '100%' }}>
          <Terminal />
        </div>
      </div>
    </motion.section>
  );
};

export default HomeTerminal;
