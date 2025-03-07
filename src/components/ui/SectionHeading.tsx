
import React from 'react';
import { cn } from '@/lib/utils';
import Reveal from './Reveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className,
  align = 'center',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-12 w-full', alignmentClasses[align], className)}>
      <Reveal delay={100}>
        <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
          <span className="text-gradient">{title}</span>
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={200}>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </Reveal>
      )}
      <div className={cn('h-1 w-16 bg-primary mt-4', {
        'mx-auto': align === 'center',
        'ml-auto': align === 'right',
      })}></div>
    </div>
  );
};

export default SectionHeading;
