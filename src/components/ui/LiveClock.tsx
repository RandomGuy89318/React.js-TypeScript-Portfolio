import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LiveClock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const timeString = time.toLocaleTimeString('en-US', { hour12: false });
  const dateString = time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ textAlign: 'right', color: 'var(--accent-secondary)', fontFamily: 'var(--font-mono)' }}
    >
      <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
        {timeString}
        <span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
      </div>
      <div style={{ fontSize: '0.65rem', marginTop: '0.2rem', opacity: 0.6 }}>
        {dateString}
      </div>
    </motion.div>
  );
};

export default LiveClock;
