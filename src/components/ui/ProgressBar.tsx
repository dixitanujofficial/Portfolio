
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  label: string;
  percentage: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  percentage,
  className,
}) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const observed = useRef(false);

  useEffect(() => {
    const element = progressRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !observed.current) {
            element.style.setProperty('--progress-width', `${percentage}%`);
            element.classList.add('animate-progress-fill');
            observed.current = true;
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className={cn("mb-4", className)}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-semibold">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full w-0 bg-primary rounded-full"
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
