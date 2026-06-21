import React from 'react';
import { cn } from '@/lib/utils';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, subtitle, className, align = 'left' }) => {
  const isCenter = align === 'center';
  return (
    <div className={cn('mb-14 md:mb-20 w-full', isCenter && 'text-center', className)}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow mb-4">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tightest leading-[1.05] text-balance">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p className={cn('mt-5 text-lg text-muted-foreground max-w-2xl', isCenter && 'mx-auto')}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
};
export default SectionHeading;