import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
export const Header = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: "Головна", href: "#home" },
    { name: "Про мене", href: "#about" },
    { name: "Проєкти", href: "#projects" },
    { name: "Контакти", href: "#contacts" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0 font-bold text-2xl tracking-tighter text-blue-600 dark:text-blue-400">
            DevPortfolio.
          </div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors overflow-hidden"
            >
              <Sun
                size={24}
                className={`absolute transition-all duration-500 ease-in-out ${
                  theme === "dark"
                    ? "opacity-100 rotate-0 scale-100 group-hover:text-yellow-400"
                    : "opacity-0 rotate-90 scale-0"
                }`}
              />

              <Moon
                size={24}
                className={`absolute transition-all duration-500 ease-in-out ${
                  theme === "light"
                    ? "opacity-100 rotate-0 scale-100  group-hover:text-blue-600"
                    : "opacity-0 -rotate-90 scale-0"
                }`}
              />
            </button>

            <button
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
