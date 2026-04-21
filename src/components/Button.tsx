import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '../lib/utils';
import { ReactNode } from 'react';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  children?: ReactNode;
}

export default function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children,
  ...props 
}: ButtonProps) {
  const variants = {
    primary: 'bg-brand-black text-white hover:bg-brand-black/90',
    secondary: 'bg-brand-gold text-brand-black hover:bg-brand-gold/90 shadow-gold',
    outline: 'border border-brand-black/20 text-brand-black hover:bg-brand-black/5',
    ghost: 'text-brand-black hover:bg-brand-black/5',
    neon: 'bg-brand-green text-white hover:bg-brand-green/90 shadow-green'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-full',
    md: 'px-6 py-3 rounded-full',
    lg: 'px-8 py-4 text-lg rounded-full font-bold',
    icon: 'p-2 rounded-full'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
