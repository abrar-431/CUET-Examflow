import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

interface LinkButtonProps {
  to: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const getButtonClasses = (variant: string = 'primary', size: string = 'md') => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-blue-900/50 text-blue-200 hover:bg-blue-900',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
};

export function Button({ variant = 'primary', size = 'md', children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`${getButtonClasses(variant, size)} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({ to, variant = 'primary', size = 'md', children }: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={getButtonClasses(variant, size)}
    >
      {children}
    </Link>
  );
}