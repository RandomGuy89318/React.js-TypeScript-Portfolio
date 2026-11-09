import React, { useState } from 'react';

interface TerminalInputProps {
  onCommand: (command: string) => void;
  historyCommands: string[];
}

const TerminalInput: React.FC<TerminalInputProps> = ({ onCommand, historyCommands }) => {
  const [input, setInput] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (input.trim()) {
        onCommand(input.trim());
        setInput('');
        setHistoryIndex(-1);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyCommands.length > 0) {
        const nextIndex = historyIndex + 1 < historyCommands.length ? historyIndex + 1 : historyCommands.length - 1;
        setHistoryIndex(nextIndex);
        setInput(historyCommands[historyCommands.length - 1 - nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(historyCommands[historyCommands.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'var(--font-mono)' }}>
      <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>$</span>
      <input
        id="terminal-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        spellCheck={false}
        autoComplete="off"
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--text-color)',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          outline: 'none',
          flexGrow: 1,
          width: '100%'
        }}
      />
    </div>
  );
};

export default TerminalInput;
