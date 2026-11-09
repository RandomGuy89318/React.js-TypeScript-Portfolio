import React from 'react';
import { motion } from 'framer-motion';

interface ResultsScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);
  let feedback: string;

  if (percentage === 100) feedback = "PERFECT RUN. SYSTEM COMPROMISED.";
  else if (percentage >= 70) feedback = "ACCESS GRANTED. GOOD KNOWLEDGE BASE.";
  else feedback = "ACCESS DENIED. PLEASE REVIEW DOCUMENTATION.";

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="terminal-card"
      style={{ textAlign: 'center', padding: '3rem' }}
    >
      <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '2rem' }}>
        [ RESULTS_COMPILED ]
      </h2>
      <div style={{ fontSize: '4rem', fontFamily: 'var(--font-mono)', margin: '2rem 0' }} className="glow-text">
        {score} / {total}
      </div>
      <p style={{ marginBottom: '2rem', opacity: 0.8, fontFamily: 'var(--font-mono)' }}>
        {feedback}
      </p>
      <button className="btn" onClick={onRestart}>
        [ RESTART_SEQUENCE ]
      </button>
    </motion.div>
  );
};

export default ResultsScreen;
