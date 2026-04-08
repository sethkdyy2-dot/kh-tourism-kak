import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const { toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Destinations', href: '#Destinations' },
    { name: 'Contact', href: '#contact' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-black text-blue-800 dark:text-blue-400">
          CAMBODIA<span className="text-red-600">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 font-semibold text-gray-700 dark:text-gray-200">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-red-600 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#login" className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-all">
            Sign In
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-yellow-400">
            <Sun className="w-5 h-5 dark:hidden" />
            <Moon className="w-5 h-5 hidden dark:block" />
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden focus:outline-none text-gray-700 dark:text-gray-200">
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center space-y-6 py-8 shadow-xl border-t border-gray-100 dark:border-gray-800">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="font-semibold text-gray-700 dark:text-gray-200 hover:text-red-600 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#login" onClick={() => setIsMenuOpen(false)} className="bg-blue-800 text-white px-8 py-3 rounded-lg font-bold">
            Sign In
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
