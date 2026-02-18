'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const THEME_KEY = 'theme';

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
    setIsLight(document.documentElement.classList.contains('light'));
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    const nextLight = !html.classList.contains('light');
    if (nextLight) {
      html.classList.remove('dark');
      html.classList.add('light');
      localStorage.setItem(THEME_KEY, 'light');
    } else {
      html.classList.remove('light');
      html.classList.add('dark');
      localStorage.setItem(THEME_KEY, 'dark');
    }
    setIsLight(nextLight);
  };

  if (!mounted) {
    return (
      <div
        className="h-9 w-9 rounded-lg border border-border bg-foreground/5 flex items-center justify-center"
        aria-hidden
      >
        <Sun className="h-4 w-4 text-foreground" />
      </div>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={toggle}
      className="h-9 w-9 rounded-lg border border-border bg-foreground/5 flex items-center justify-center text-foreground hover:bg-foreground/10 hover:border-foreground/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      whileTap={{ scale: 0.95 }}
    >
      {isLight ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </motion.button>
  );
}
