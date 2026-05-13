import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { QuizQuestion } from '../../data/crudQuestions';

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (isCorrect: boolean) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer }) => {
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSelect = (opt: string) => {
    if (selectedOpt) return; // Prevent multiple selections
    setSelectedOpt(opt);
    setShowExplanation(true);
  };

  const handleNext = () => {
    onAnswer(selectedOpt === question.answer);
    setSelectedOpt(null);
    setShowExplanation(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="terminal-card"
    >
      <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
        {question.question}
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {question.options.map(opt => {
          let bgColor = 'var(--card-bg)';
          let borderColor = 'var(--border-color)';
          let color = 'var(--text-color)';
          
          if (selectedOpt) {
            if (opt === question.answer) {
              borderColor = 'var(--accent-primary)';
              color = 'var(--accent-primary)';
              bgColor = 'rgba(0, 255, 65, 0.1)';
            } else if (opt === selectedOpt) {
              borderColor = '#ef4444'; // Red for incorrect
              color = '#ef4444';
              bgColor = 'rgba(239, 68, 68, 0.1)';
            }
          }

          return (
            <motion.button
              key={opt}
              whileHover={!selectedOpt ? { scale: 1.02, borderColor: 'var(--accent-secondary)' } : {}}
              onClick={() => handleSelect(opt)}
              disabled={selectedOpt !== null}
              style={{
                textAlign: 'left',
                padding: '1rem',
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
                color: color,
                borderRadius: '4px',
                cursor: selectedOpt ? 'default' : 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                transition: 'all 0.3s ease'
              }}
            >
              {opt}
            </motion.button>
          );
        })}
      </div>

      {showExplanation && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          style={{ marginTop: '2rem' }}
        >
          <div style={{ padding: '1rem', borderLeft: '3px solid var(--accent-secondary)', backgroundColor: 'rgba(0,0,0,0.2)', marginBottom: '1.5rem' }}>
            <strong style={{ color: 'var(--accent-secondary)', display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>EXPLANATION:</strong>
            {question.explanation}
          </div>
          <button className="btn" onClick={handleNext} style={{ width: '100%' }}>
            [ NEXT_SEQUENCE ]
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default QuizCard;
