'use client';

import { useEffect, useState } from 'react';
import { useSettings } from '@/context/SettingsContext';

export default function ThemeApplier() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useSettings();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, mounted]);

  return null;
}
