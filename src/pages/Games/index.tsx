import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { crudQuestions } from '../../data/crudQuestions';
import { sqlQuestions } from '../../data/sqlQuestions';
import { typescriptQuestions } from '../../data/typescriptQuestions';
import { laravelQuestions } from '../../data/laravelQuestions';
import { reactHookQuestions } from '../../data/reactHookQuestions';
import { debugCodeQuestions } from '../../data/debugCodeQuestions';
import QuizCard from '../../components/games/QuizCard';
import ScoreBoard from '../../components/games/ScoreBoard';
import ResultsScreen from '../../components/games/ResultsScreen';

type Category = 'crud' | 'sql' | 'ts' | 'laravel' | 'react' | 'debug' | null;

const Games: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const getActiveQuestions = () => {
    switch(activeCategory) {
      case 'crud': return crudQuestions;
      case 'sql': return sqlQuestions;
      case 'ts': return typescriptQuestions;
      case 'laravel': return laravelQuestions;
      case 'react': return reactHookQuestions;
      case 'debug': return debugCodeQuestions;
      default: return [];
    }
  }

  const activeQuestions = getActiveQuestions();

  const handleStart = (cat: Category) => {
    setActiveCategory(cat);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(prev => prev + 1);

    if (currentQuestionIndex + 1 < activeQuestions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setActiveCategory(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  };

  const categoriesData: { id: Category; title: string; color: string; desc: string }[] = [
    { id: 'crud', title: '[ CRUD_LOGIC ]', color: 'var(--accent-primary)', desc: 'Test your knowledge on Create, Read, Update, and Delete operations and REST APIs.' },
    { id: 'sql', title: '[ SQL_COMMANDS ]', color: 'var(--accent-secondary)', desc: 'Challenge yourself with database querying, filtering, and data manipulation.' },
    { id: 'ts', title: '[ TYPESCRIPT_TYPES ]', color: '#3178c6', desc: 'Test understanding of TypeScript types, interfaces, and props.' },
    { id: 'laravel', title: '[ LARAVEL_ARTISAN ]', color: '#ff2d20', desc: 'Test knowledge of Laravel CLI commands (migrations, models, controllers).' },
    { id: 'react', title: '[ REACT_HOOKS ]', color: '#61dafb', desc: 'Match React hooks to their correct usage and handle side effects.' },
    { id: 'debug', title: '[ DEBUG_CODE ]', color: '#facc15', desc: 'Find errors in code snippets including React, JS, and TypeScript mistakes.' },
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 className="terminal-text">&gt; system.games</h1>
        <p style={{ opacity: 0.6, marginTop: '0.5rem' }}>Interactive developer logic puzzles, quizzes, and code debugging.</p>
      </div>

      {!activeCategory && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', paddingBottom: '2rem' }}>
          {categoriesData.map(cat => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -5, borderColor: cat.color }}
              className="terminal-card"
              style={{ cursor: 'pointer', textAlign: 'center', borderColor: 'var(--border-color)' }}
              onClick={() => handleStart(cat.id)}
            >
              <h2 style={{ color: cat.color, marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>{cat.title}</h2>
              <p style={{ opacity: 0.8, marginBottom: '2rem' }}>{cat.desc}</p>
              <span className="btn" style={{ borderColor: cat.color, color: cat.color }}>START_SEQUENCE</span>
            </motion.div>
          ))}
        </div>
      )}

      {activeCategory && !showResults && (
        <div>
          <button 
            onClick={handleRestart} 
            style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', marginBottom: '2rem', borderBottom: '1px solid currentColor', paddingBottom: '0.2rem' }}
          >
            &lt; ABORT_SEQUENCE
          </button>
          
          <ScoreBoard 
            score={score} 
            total={activeQuestions.length} 
            currentQuestion={currentQuestionIndex + 1} 
          />

          <AnimatePresence mode="wait">
            <QuizCard 
              key={currentQuestionIndex} 
              question={activeQuestions[currentQuestionIndex]} 
              onAnswer={handleAnswer} 
            />
          </AnimatePresence>
        </div>
      )}

      {showResults && (
        <ResultsScreen 
          score={score} 
          total={activeQuestions.length} 
          onRestart={handleRestart} 
        />
      )}
    </div>
  );
};

export default Games;
