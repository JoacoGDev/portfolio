import { useState, useEffect } from "react";
import ThemeToggle from "./ToggleTheme";

const navLinks = [
  { name: "Home", id: "hero" },
  { name: "Projects", id: "projects" },
    { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      
      const scrollPosition = scrollY + window.innerHeight / 2;
      navLinks.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para scroll suave
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100; // Offset para compensar el navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    // Cerrar menú móvil si está abierto
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center pointer-events-none px-4 pt-4">
      {/* Navbar Container */}
      <div className={`
        relative max-w-4xl w-full transition-all duration-500 ease-out pointer-events-auto
        ${isScrolled ? 'scale-95' : 'scale-100'}
      `}>
        {/* Background with Glassmorphism */}
        <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl border border-white/40 dark:border-gray-700/40 shadow-xl shadow-gray-900/5 dark:shadow-black/10"></div>
        
        {/* Active Section Indicator */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 rounded-full opacity-80"></div>
        
        {/* Main Navbar Content */}
        <div className="relative flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-mono font-bold text-sm">JG</span>
            </div>
            <h1 className="text-lg font-mono font-bold text-blue-600 dark:text-blue-400">
              Joaquín Gil
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  className={`
                    relative font-mono text-base font-medium transition-all duration-300 hover:scale-105 group
                    ${activeSection === link.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }
                  `}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Active indicator */}
                  {activeSection === link.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 rounded-full"></div>
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 -m-2 bg-blue-500/10 dark:bg-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100"></div>
                </a>
              ))}
            </div>
            
            {/* Theme Toggle Desktop */}
            <div className="flex items-center pl-6 border-l border-gray-300/50 dark:border-gray-600/50">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/40 dark:border-gray-700/40 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-white/70 dark:hover:bg-gray-800/70"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <div className={`w-4 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : ''}`}></div>
              <div className={`w-4 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 mt-1 ${isOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`
          lg:hidden overflow-hidden transition-all duration-500 ease-out
          ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="px-6 pb-6 pt-2 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  className={`
                    block relative font-mono text-base font-medium py-3 px-4 rounded-xl transition-all duration-300 text-center
                    ${activeSection === link.id
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200/50 dark:border-blue-700/50"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-800/50"
                    }
                  `}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                  )}
                </a>
              ))}
            </div>
            
            {/* Mobile Theme Toggle */}
            <div className="pt-4 border-t border-gray-300/30 dark:border-gray-600/30 flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 -z-10 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;