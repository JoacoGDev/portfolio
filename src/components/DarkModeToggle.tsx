import {useEffect, useState } from "react";

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        document.documentElement.classList.contains("dark")
    )

    const toggleDarkMode = () => {
        if (isDarkMode) {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark");
        }else {
            localStorage.theme = "dark";
            document.documentElement.classList.add("dark");
        };
        setIsDarkMode(!isDarkMode);

    };

    return (
    <button
      onClick={toggleDarkMode}
      className="px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {isDarkMode ? "🌙" : "☀️"}
    </button>
  );
}

export default DarkModeToggle;