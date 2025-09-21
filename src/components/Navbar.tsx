import { useState } from "react";
import ThemeToggle from "./ToggleTheme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", id: "hero" },
    { name: "Sobre mí", id: "about" },
    { name: "Habilidades", id: "skills" },
    { name: "Proyectos", id: "projects" },
    { name: "Contacto", id: "contact" },
  ];

  const linkBaseClasses =
    "relative px-3 py-2 text-sm font-medium transition-colors duration-300";

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-[#0a0a0a] border-b border-gray-300 dark:border-gray-700 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">
            Joaquín Gil
          </h1>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`${linkBaseClasses} text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300`}
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0a0a0a] shadow-md px-4 pb-4 space-y-2 transition-colors duration-300">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
