import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { Page } from '../types';
import { MenuIcon, XIcon } from './icons/Icons';
import ThemeSwitcher from './ThemeSwitcher';

interface HeaderProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-text-primary cursor-pointer"
            onClick={() => navigateTo('home')}
          >
            Linkon<span className="text-emerald-600 dark:text-primary">.</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.page}
                onClick={() => navigateTo(link.page)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  currentPage === link.page
                    ? 'text-emerald-600 dark:text-primary'
                    : 'text-gray-500 hover:text-emerald-600 dark:text-text-secondary dark:hover:text-primary'
                }`}
              >
                {link.name}
              </button>
            ))}
            <ThemeSwitcher />
          </nav>
          <div className="md:hidden flex items-center gap-4">
            <ThemeSwitcher />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="text-gray-800 dark:text-text-primary">
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-surface absolute w-full left-0">
          <nav className="flex flex-col items-center space-y-4 py-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  navigateTo(link.page);
                  setIsMenuOpen(false);
                }}
                className={`text-lg font-medium transition-colors duration-300 ${
                  currentPage === link.page
                    ? 'text-emerald-600 dark:text-primary'
                    : 'text-gray-600 dark:text-text-secondary hover:text-emerald-600 dark:hover:text-primary'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
