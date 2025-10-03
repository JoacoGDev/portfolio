import { cn } from '../utils/cn';

interface TextLineProps {
  text: string;
  className?: string;
}

const TextLine = ({ text, className }: TextLineProps) => {
  return (
    <p
      className={cn(
        'font-light leading-relaxed',
        'text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl',
        className
      )}
    >
      {text}
    </p>
  );
};

export default TextLine;