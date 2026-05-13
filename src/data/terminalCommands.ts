export interface TerminalCommandDef {
  command: string;
  description: string;
  action?: string; // route to navigate to, or special action keyword
  output?: string;
}

export const terminalCommands: TerminalCommandDef[] = [
  { command: 'help', description: 'List all available commands' },
  { command: 'about', description: 'Show short developer bio', output: 'Full Stack Developer with a passion for terminal aesthetics and UI exploration.' },
  { command: 'projects', description: 'Navigate to /projects', action: '/projects' },
  { command: 'certificates', description: 'Navigate to /certificates', action: '/certificates' },
  { command: 'contact', description: 'Navigate to /contact', action: '/contact' },
  { command: 'games', description: 'Navigate to /games', action: '/games' },
  { command: 'themes', description: 'List available themes', output: 'Available themes: hacker, neon, matrix, midnight, solarized, crt, void, aurora. Use UI switcher to change.' },
  { command: 'time', description: 'Show current time', action: 'SHOW_TIME' },
  { command: 'clear', description: 'Clear terminal output', action: 'CLEAR' },
  { command: 'whoami', description: 'Show developer name', output: 'Jomar Abaten' },
  { command: 'resume', description: 'Open/download CV', action: 'OPEN_RESUME' },
];
