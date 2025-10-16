'use client';

import React, { createContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark',
  toggleTheme: () => void,
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
})

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeContextType['theme']>('dark');

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.remove(prev);
      document.documentElement.classList.add(newTheme);
      return newTheme;
    });
  };

  console.log(theme)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
