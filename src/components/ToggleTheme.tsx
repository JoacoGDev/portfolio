import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Monitor } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState('bottom');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const themes = [
    {
      id: "light",
      label: "Claro",
      icon: <Sun className="w-4 h-4" />,
      gradient: "from-yellow-400 to-orange-400"
    },
    {
      id: "dark",
      label: "Oscuro",
      icon: <Moon className="w-4 h-4" />,
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      id: "system",
      label: "Sistema",
      icon: <Monitor className="w-4 h-4" />,
      gradient: "from-gray-500 to-gray-600"
    },
  ];

  const currentTheme = themes.find((t) => t.id === theme);

  // Calculate dropdown position based on available space
  const calculateDropdownPosition = () => {
    if (!buttonRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const dropdownHeight = 200; // Approximate dropdown height

    // Check if there's enough space below
    const spaceBelow = viewportHeight - buttonRect.bottom;
    const spaceAbove = buttonRect.top;

    if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
      setDropdownPosition('top');
    } else {
      setDropdownPosition('bottom');
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleResize = () => {
      if (open) {
        calculateDropdownPosition();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [open]);

  const handleToggle = () => {
    if (!open) {
      calculateDropdownPosition();
    }
    setOpen(!open);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Main Toggle Button */}
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className="group relative flex items-center justify-center w-10 h-10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-white/40 dark:border-gray-700/40 hover:border-blue-300/60 dark:hover:border-blue-600/60 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/10 dark:hover:shadow-black/20 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20"
        aria-label="Cambiar tema"
        aria-expanded={open}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 dark:from-blue-400/10 dark:to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        <div className="relative transition-transform duration-300 group-hover:scale-110">
          {currentTheme?.icon}
        </div>

        {/* Dropdown Arrow */}
        <div className={`absolute -bottom-1 -right-1 w-3 h-3 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Backdrop for mobile */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Dropdown Menu */}
      <div
        className={`
          absolute ${dropdownPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'} right-0 w-44
          bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl
          rounded-2xl border border-white/40 dark:border-gray-700/40
          shadow-2xl shadow-gray-900/20 dark:shadow-black/40
          z-[9999]
          transition-all duration-300 ease-out
          ${dropdownPosition === 'top' ? 'origin-bottom-right' : 'origin-top-right'}
          ${open
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
          }
          
          /* Mobile specific styles */
          max-sm:fixed max-sm:top-auto max-sm:bottom-4 max-sm:right-4 max-sm:left-4 max-sm:w-auto
          max-sm:rounded-3xl max-sm:shadow-2xl
        `}
        role="menu"
        aria-orientation="vertical"
      >
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-200/50 dark:border-gray-700/50">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider font-mono">
            Tema
          </p>
        </div>

        {/* Theme Options */}
        <div className="py-2">
          {themes.map((t, index) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id as "light" | "dark" | "system");
                setOpen(false);
              }}
              className={`
                group flex items-center justify-between w-full px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-white/50 dark:hover:bg-gray-800/50
                ${theme === t.id
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20'
                  : 'text-gray-700 dark:text-gray-300'
                }
                
                /* Mobile touch targets */
                max-sm:py-4 max-sm:text-base
              `}
              style={{ animationDelay: `${index * 50}ms` }}
              role="menuitem"
            >
              <div className="flex items-center gap-3">
                <div className={`
                  w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-110
                  ${theme === t.id
                    ? `bg-gradient-to-r ${t.gradient} text-white shadow-lg`
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                  }
                  
                  /* Mobile sizing */
                  max-sm:w-8 max-sm:h-8
                `}>
                  {t.icon}
                </div>
                <span className="font-mono">{t.label}</span>
              </div>

              {/* Active Indicator */}
              {theme === t.id && (
                <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full max-sm:w-3 max-sm:h-3"></div>
              )}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-gray-200/50 dark:border-gray-700/50">
          <p className="text-xs text-gray-400 dark:text-gray-500 font-mono">
            {theme === 'system' ? 'Auto' : currentTheme?.label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;