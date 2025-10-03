import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  download?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  download,
  ...props
}, ref) => {
  const baseStyles = cn(
    'inline-flex items-center justify-center rounded-xl font-mono transition-all duration-300',
    variant === 'primary' && 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl hover:-translate-y-1',
    variant === 'secondary' && 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 border-2',
    size === 'sm' && 'px-4 py-2 text-sm',
    size === 'md' && 'px-6 py-3 text-base',
    size === 'lg' && 'px-8 py-4 text-lg',
    className
  );

  if (as === 'a') {
    return (
      <a 
        href={href}
        download={download}
        className={baseStyles}
        {...(props as any)}
      />
    );
  }

  return (
    <button
      ref={ref}
      className={baseStyles}
      {...props}
    />
  );
});

Button.displayName = 'Button';