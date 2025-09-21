import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // 👈 importante para toggle
  theme: {
    extend: {
        fontFamily: {
            mono: ['Fira Mono', 'monospace'],
        }
    },
  },
  plugins: [],
};

export default config;
