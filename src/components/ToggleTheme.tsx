import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const themes = [
    { id: "light", label: "☀️ Light" },
    { id: "dark", label: "🌙 Dark" },
    { id: "system", label: "🖥 System" },
  ];

  return (
    <div className="relative inline-block text-left">
      {/* Botón con mismo tamaño que links del navbar */}
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-2 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
      >
        Tema
      </button>

      {open && (
  <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 w-40 max-w-full rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
    <div className="py-1">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => {
            setTheme(t.id as "light" | "dark" | "system");
            setOpen(false);
          }}
          className="w-full text-left px-3 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          {t.label}
        </button>
      ))}
    </div>
  </div>
)}

    </div>
  );
};

export default ThemeToggle;
