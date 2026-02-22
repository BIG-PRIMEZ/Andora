import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const hoverClass = hover ? 'hover:shadow-card-hover hover:-translate-y-1' : '';

  return (
    <div
      className={`bg-white rounded-xl shadow-card p-6 transition-smooth ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
}
