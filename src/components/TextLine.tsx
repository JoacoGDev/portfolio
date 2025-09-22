interface TextLineProps {
  text: string;
  className?: string;
}

const TextLine = ({ text, className }: TextLineProps) => {
  return (
    <p
      className={`font-light leading-relaxed ${
        className || "text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl"
      }`}
    >
      {text}
    </p>
  );
};

export default TextLine;