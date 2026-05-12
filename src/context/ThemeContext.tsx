import React, { createContext, useContext, useEffect, useState } from 'react';

// Explicitly export ThemeType as requested
export type ThemeType = "hacker" | "neon" | "matrix" | "midnight" | "light" | "solarized" | "crt" | "void" | "aurora";

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    const validThemes = ['hacker', 'neon', 'matrix', 'midnight', 'light', 'solarized', 'crt', 'void', 'aurora'];
    if (saved && validThemes.includes(saved)) {
      return saved as ThemeType;
    }
    return 'hacker';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
