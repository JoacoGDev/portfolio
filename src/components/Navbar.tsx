import { useState, useEffect } from "react";
import ThemeToggle from "./ToggleTheme";

const navLinks = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      navLinks.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 flex justify-center pointer-events-auto">
  <div className="bg-gray-100/90 dark:bg-[#111111]/90 backdrop-blur-sm rounded-full shadow-lg max-w-2xl w-full mx-4 mt-4 transition-colors duration-300">
    <div className="flex justify-between items-center h-12 px-4 sm:px-6">
      {/* Logo */}
      <h1 className="text-sm sm:text-base font-mono font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">
        Joaquín Gil
      </h1>

      {/* Desktop links */}
      <div className="hidden md:flex space-x-4 items-center">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`text-xs sm:text-sm font-mono transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-300 ${
              activeSection === link.id
                ? "text-blue-600 dark:text-blue-300"
                : "text-gray-700 dark:text-gray-200"
            }`}
          >
            {link.name}
          </a>
        ))}
        <ThemeToggle />
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
        >
          ☰
        </button>
      </div>
    </div>

    {/* Mobile menu */}
    {isOpen && (
      <div className="md:hidden flex flex-col gap-2 px-4 py-3 mt-2 rounded-lg bg-gray-100/90 dark:bg-[#111111]/90 shadow-lg transition-colors duration-300">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`block text-xs sm:text-sm font-mono text-center transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-300 ${
              activeSection === link.id
                ? "text-blue-600 dark:text-blue-300"
                : "text-gray-700 dark:text-gray-200"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <ThemeToggle />
      </div>
    )}
  </div>
</nav>

  );
};

export default Navbar;
