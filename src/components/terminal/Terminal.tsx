import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TerminalOutput from './TerminalOutput';
import type { OutputLineType } from './TerminalOutput';
import TerminalInput from './TerminalInput';
import { terminalCommands } from '../../data/terminalCommands';
import { personalInfo } from '../../data/personalInfo';

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<OutputLineType[]>([
    { id: 'init-1', text: 'Terminal OS v1.0.0 initialized.' },
    { id: 'init-2', text: 'Type "help" for a list of available commands.' }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const rawCmd = cmdStr.trim().toLowerCase();
    
    // Add command to output history
    setHistory(prev => [...prev, { id: `cmd-${Date.now()}`, text: cmdStr, isCommand: true }]);
    
    // Add to command navigation history
    setCommandHistory(prev => [...prev, cmdStr]);

    const cmdDef = terminalCommands.find(c => c.command === rawCmd);

    if (rawCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (cmdDef) {
      if (cmdDef.output) {
        setHistory(prev => [...prev, { id: `out-${Date.now()}`, text: cmdDef.output! }]);
      } else if (cmdDef.action) {
        if (cmdDef.action.startsWith('/')) {
          setHistory(prev => [...prev, { id: `out-${Date.now()}`, text: `Navigating to ${cmdDef.action}...` }]);
          setTimeout(() => navigate(cmdDef.action!), 500);
        } else if (cmdDef.action === 'SHOW_TIME') {
          setHistory(prev => [...prev, { id: `out-${Date.now()}`, text: new Date().toString() }]);
        } else if (cmdDef.action === 'OPEN_RESUME') {
          setHistory(prev => [...prev, { id: `out-${Date.now()}`, text: `Opening ${personalInfo.resumePath}...` }]);
          window.open(personalInfo.resumePath, '_blank');
        } else if (cmdDef.action === 'CLEAR') {
           setHistory([]);
        }
      }
    } else {
      setHistory(prev => [...prev, { 
        id: `err-${Date.now()}`, 
        text: `Command not found: ${rawCmd}. Type "help" for a list of available commands.` 
      }]);
    }

    // Special hardcoded help command override for nicer formatting
    if (rawCmd === 'help') {
      const helpNode = (
        <div style={{ marginTop: '0.5rem' }}>
          <div style={{ marginBottom: '0.5rem', opacity: 0.8 }}>Available commands:</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, auto) 1fr', gap: '0.5rem 1rem' }}>
            {terminalCommands.map(c => (
              <React.Fragment key={c.command}>
                <span style={{ color: 'var(--accent-secondary)' }}>{c.command}</span>
                <span style={{ opacity: 0.8 }}>{c.description}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      );
      setHistory(prev => [...prev, { id: `help-${Date.now()}`, text: helpNode }]);
    }
  };

  return (
    <div 
      className="terminal-card" 
      ref={containerRef}
      onClick={() => document.getElementById('terminal-input')?.focus()}
      style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'flex-start',
        textAlign: 'left',
        height: '400px', 
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--border-color)',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: 'var(--shadow)',
        overflowY: 'auto'
    }}>
      <TerminalOutput history={history} />
      <TerminalInput onCommand={handleCommand} historyCommands={commandHistory} />
    </div>
  );
};

export default Terminal;
