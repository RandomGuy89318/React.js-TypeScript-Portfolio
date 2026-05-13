import React from 'react';
import { motion } from 'framer-motion';

interface TechTagProps {
  name: string;
}

const TechTag: React.FC<TechTagProps> = ({ name }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.05, boxShadow: '0 0 8px var(--glow)', borderColor: 'var(--accent-primary)' }}
      style={{
        display: 'inline-block',
        padding: '0.25rem 0.75rem',
        fontSize: '0.75rem',
        fontFamily: 'var(--font-mono)',
        color: 'var(--accent-secondary)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        backgroundColor: 'var(--card-bg)',
        marginRight: '0.5rem',
        marginBottom: '0.5rem',
        cursor: 'default',
        transition: 'border-color 0.3s ease',
      }}
    >
      {name}
    </motion.span>
  );
};

export default TechTag;
