export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  imageUrl: string;
  demoUrl?: string;
  concepts?: string[];
};

export type Theme = "light" | "dark" | "system";

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};