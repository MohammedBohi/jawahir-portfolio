import { ReactNode } from 'react';

export interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, title, subtitle, children, className = '' }: SectionProps) => {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-12 sm:py-16 md:py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-2 sm:mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              {subtitle}
            </p>
          )}
          <div className="mt-3 sm:mt-4 h-1 w-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full" />
        </div>

        {/* Content */}
        <div className="space-y-6 sm:space-y-8">
          {children}
        </div>
      </div>
    </section>
  );
};
