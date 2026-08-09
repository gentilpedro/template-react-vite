import { Home as HomeIcon } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

import { ThemeToggle } from './ThemeToggle';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center gap-2 bg-primary px-6 py-4 text-white dark:bg-primary-deep">
        <HomeIcon size={20} />
        <Link to="/" className="text-lg font-semibold">
          App Name
        </Link>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
