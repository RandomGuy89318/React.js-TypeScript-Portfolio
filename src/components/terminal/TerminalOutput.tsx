import React from 'react';
import { motion } from 'framer-motion';

export type OutputLineType = {
  id: string;
  text: string | React.ReactNode;
  isCommand?: boolean;
};

export type OutputLineProps = {
  line: OutputLineType;
};

export function OutputLine({ line }: OutputLineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      style={{
        marginBottom: '0.25rem',
        color: line.isCommand ? 'var(--accent-secondary)' : 'var(--text-color)',
        opacity: line.isCommand ? 0.8 : 1,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word'
      }}
    >
      {line.isCommand ? `> ${line.text}` : line.text}
    </motion.div>
  );
}

interface TerminalOutputProps {
  history: OutputLineType[];
}

export default function TerminalOutput({ history }: TerminalOutputProps) {
  return (
    <div style={{ marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
      {history.map((line) => (
        <OutputLine key={line.id} line={line} />
      ))}
    </div>
  );
}
