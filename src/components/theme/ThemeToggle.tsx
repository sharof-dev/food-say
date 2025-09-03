
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { initTheme, toggleTheme } from '../../utils/theme';

const ThemeToggle = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const initial = initTheme();
    setMode(initial);
  }, []);

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setMode(toggleTheme())}
      className="inline-flex justify-center items-center border dark:border-white/10 border-black/10 rounded-2xl w-10 h-10 hover:scale-105 transition"
      title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {mode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
