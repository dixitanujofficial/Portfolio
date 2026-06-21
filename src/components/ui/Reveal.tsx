import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
}

const OFFSET = 24;

const getInitial = (direction: RevealProps['direction']) => {
  switch (direction) {
    case 'up': return { y: OFFSET, x: 0 };
    case 'down': return { y: -OFFSET, x: 0 };
    case 'left': return { x: OFFSET, y: 0 };
    case 'right': return { x: -OFFSET, y: 0 };
    default: return { x: 0, y: 0};
  }
};

export const Reveal: React.FC<RevealProps> = ({
  children, className, direction = 'up', delay = 0, duration = 0.6, once = true, threshold = 0.1,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const initialOffset = getInitial(direction);

  const variants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: initialOffset.x, y: initialOffset.y },
    visible: {
      opacity: 1, x: 0, y: 0,
      transition: { duration: shouldReduceMotion ? 0.3 : duration, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once, amount: threshold }} variants={variants}>
      {children}
    </motion.div>
  );
};
export default Reveal;