'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Language = 'en' | 'tr';
export type Theme = 'light' | 'dark';

interface SettingsContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    const savedLanguage = (localStorage.getItem('language') as Language) || 'en';
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'light';

    setLanguageState(savedLanguage);
    setThemeState(savedTheme);
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <SettingsContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
