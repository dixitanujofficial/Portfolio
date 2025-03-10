
import React from 'react';
import { cn } from '@/lib/utils';
import Reveal from './Reveal';
import { BookOpen, Briefcase, Calendar } from 'lucide-react';

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
  const isEducation = title.includes('Bachelor') || title.includes('BS');
  
  return (
    <Reveal 
      direction={index % 2 === 0 ? 'left' : 'right'} 
      delay={index * 100}
    >
      <div className={cn(
        "relative mb-12 last:mb-0 md:flex",
        index % 2 === 0 ? "flex-row" : "md:flex-row-reverse",
        className
      )}>
        {/* Timeline Connector */}
        <div className="hidden md:block absolute left-1/2 top-8 bottom-0 w-px bg-border -translate-x-1/2 z-0 last:hidden" />
        
        {/* Date Section */}
        <div className={cn(
          "flex items-center mb-4 md:mb-0 md:w-1/2",
          index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
        )}>
          <div className={cn(
            "flex items-center justify-center px-4 py-2 rounded-full shadow-sm",
            "bg-secondary/70 dark:bg-secondary/40 backdrop-blur-sm"
          )}>
            <Calendar size={16} className="mr-2 text-primary dark:text-primary" />
            <span className="font-semibold text-sm">{date}</span>
          </div>
        </div>
        
        {/* Content Section */}
        <div className={cn(
          "md:w-1/2",
          index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
        )}>
          {/* Timeline Dot - Visible on mobile, hidden on desktop */}
          <div className="absolute left-0 top-5 h-3 w-3 rounded-full bg-primary dark:bg-primary z-10 md:hidden"></div>
          
          {/* Desktop Timeline Point (Center) */}
          <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className={cn(
              "h-10 w-10 rounded-full flex items-center justify-center",
              "bg-primary text-white shadow-md"
            )}>
              {isEducation ? <BookOpen size={18} /> : <Briefcase size={18} />}
            </div>
          </div>
          
          {/* Content Card */}
          <div className={cn(
            "bg-card/50 dark:bg-card/30 backdrop-blur-sm p-5 rounded-lg border shadow-sm",
            "hover:shadow-md transition-all-300"
          )}>
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <div className="text-muted-foreground font-medium mb-3">{company}</div>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default TimelineItem;
