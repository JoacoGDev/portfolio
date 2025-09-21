interface TextLineProps {
  text: string;
  className?: string;
}

const TextLine = ({ text, className }: TextLineProps) => {
  return (
    <p
      className={`text-lg sm:text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300 max-w-xl ${
        className || ""
      }`}
    >
      {text}
    </p>
  );
};

export default TextLine;
