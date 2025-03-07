
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 500,
  once = true,
  threshold = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasAnimated.current)) {
            element.style.opacity = '1';
            element.style.transform = 'translate(0, 0)';
            hasAnimated.current = true;
          } else if (!entry.isIntersecting && !once && hasAnimated.current) {
            element.style.opacity = '0';
            switch (direction) {
              case 'up':
                element.style.transform = 'translateY(20px)';
                break;
              case 'down':
                element.style.transform = 'translateY(-20px)';
                break;
              case 'left':
                element.style.transform = 'translateX(20px)';
                break;
              case 'right':
                element.style.transform = 'translateX(-20px)';
                break;
              case 'none':
                element.style.transform = 'none';
                break;
            }
            hasAnimated.current = false;
          }
        });
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [direction, once, threshold]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(20px)';
      case 'down':
        return 'translateY(-20px)';
      case 'left':
        return 'translateX(20px)';
      case 'right':
        return 'translateX(-20px)';
      case 'none':
        return 'none';
      default:
        return 'translateY(20px)';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: 0,
        transform: getInitialTransform(),
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
