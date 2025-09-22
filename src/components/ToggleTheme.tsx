import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Monitor } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Main Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="group relative flex items-center justify-center w-10 h-10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-white/40 dark:border-gray-700/40 hover:border-blue-300/60 dark:hover:border-blue-600/60 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/10 dark:hover:shadow-black/20 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20"
        aria-label="Cambiar tema"
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

      {/* Dropdown Menu */}
      <div className={`
        absolute top-full mt-3 right-0 w-44 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/40 dark:border-gray-700/40 shadow-2xl shadow-gray-900/10 dark:shadow-black/20 z-50 overflow-hidden
        transition-all duration-300 ease-out origin-top-right
        ${open 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }
      `}>
        
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
              `}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className={`
                  w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-110
                  ${theme === t.id 
                    ? `bg-gradient-to-r ${t.gradient} text-white shadow-lg` 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                  }
                `}>
                  {t.icon}
                </div>
                <span className="font-mono">{t.label}</span>
              </div>
              
              {/* Active Indicator */}
              {theme === t.id && (
                <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
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