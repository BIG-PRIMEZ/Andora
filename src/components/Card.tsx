import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = '', hover = true, onClick }: CardProps) {
  const hoverClass = hover ? 'hover:shadow-card-hover hover:-translate-y-1' : '';

  return (
    <div
      className={`bg-white rounded-xl shadow-card p-6 transition-smooth ${hoverClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
