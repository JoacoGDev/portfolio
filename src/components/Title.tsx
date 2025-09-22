interface TitleProps {
  text: string;
  className?: string;
}

const Title = ({ text, className }: TitleProps) => {
  return (
    <h1
      className={`font-mono font-bold tracking-tight leading-tight ${
        className || "text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
      }`}
    >
      {text}
    </h1>
  );
};

export default Title;