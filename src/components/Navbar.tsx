import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ToggleTheme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const linkBaseClasses =
    "relative px-3 py-2 text-sm font-medium transition-colors duration-300";

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">
            Joaquín Gil
          </h1>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `${linkBaseClasses} ${
                    isActive
                      ? "text-blue-600 dark:text-blue-300 after:block after:w-full after:h-[2px] after:bg-blue-500 dark:after:bg-blue-300 after:mt-1 after:transition-all after:duration-300"
                      : "text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300 after:block after:w-0 after:h-[2px] after:bg-blue-500 dark:after:bg-blue-300 after:mt-1 after:transition-all after:duration-300 hover:after:w-full"
                  }`
                }
              >
                {link.name}
              </NavLink>
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
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md px-4 pb-4 space-y-2 transition-colors duration-300">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-300"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
