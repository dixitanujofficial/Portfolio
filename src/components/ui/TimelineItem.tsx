
import React from 'react';
import { cn } from '@/lib/utils';
import Reveal from './Reveal';

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  className?: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  company,
  description,
  className,
  index,
}) => {
  return (
    <div className={cn("relative pl-8 pb-12 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border last:pb-0 last:before:hidden", className)}>
      <Reveal 
        direction={index % 2 === 0 ? 'left' : 'right'} 
        delay={index * 100}
      >
        <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-primary dark:bg-primary -translate-x-1/2 z-10"></div>
        <div className="mb-1 text-sm font-semibold text-primary dark:text-primary">{date}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="text-muted-foreground font-medium mb-2">{company}</div>
        <p className="text-muted-foreground">{description}</p>
      </Reveal>
    </div>
  );
};

export default TimelineItem;
