import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'primary';
  id?: string;
}

export default function Section({ children, className = '', background = 'white', id }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-background-light',
    primary: 'bg-primary text-white',
  };

  return (
    <section id={id} className={`py-section md:py-section-lg ${backgrounds[background]} ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
}
