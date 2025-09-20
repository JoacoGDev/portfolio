import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // 👈 importante para toggle
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
