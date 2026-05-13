import React from 'react';
import { motion } from 'framer-motion';

interface ScoreBoardProps {
  score: number;
  total: number;
  currentQuestion: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, total, currentQuestion }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        marginBottom: '1rem',
        borderBottom: '1px solid var(--border-color)',
        fontFamily: 'var(--font-mono)'
      }}
    >
      <div>
        <span style={{ color: 'var(--accent-secondary)' }}>PROGRESS: </span>
        {currentQuestion} / {total}
      </div>
      <div>
        <span style={{ color: 'var(--accent-primary)' }}>SCORE: </span>
        {score}
      </div>
    </motion.div>
  );
};

export default ScoreBoard;
