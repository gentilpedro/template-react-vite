import { Moon, Sun } from 'lucide-react';

import { useTheme } from '../contexts/theme-context';

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const label = isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={label}
      aria-label={label}
      aria-pressed={isDark}
      className="cursor-pointer rounded-md p-2 transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
