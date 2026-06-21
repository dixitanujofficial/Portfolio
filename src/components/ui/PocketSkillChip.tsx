import React from 'react';
import { motion, type MotionValue, useTransform } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

interface PocketSkillChipProps {
  progress: MotionValue<number>;
  range: [number, number];
  angle: number; // degrees
  reach: number; // multiplier for how far the chip travels
  icon: LucideIcon;
  label: string;
  sub: string;
}

const PocketSkillChip: React.FC<PocketSkillChipProps> = ({
  progress, range, angle, reach, icon: Icon, label, sub,
}) => {
  const [start, end] = range;
  const mid = start + (end - start) * 0.3; // Fades in quickly
  
  // Math to calculate the circular fan-out direction
  const rad = (angle * Math.PI) / 180;
  const dx = Math.cos(rad);
  const dy = Math.sin(rad);

  // Smooth animations
  const opacity = useTransform(progress, [start, mid, end], [0, 1, 1]);
  const scale = useTransform(progress, [start, end], [0, 1]);
  
  // Base travel distance (200px) multiplied by the reach
  const distance = 200 * reach; 
  const x = useTransform(progress, [start, end], [0, dx * distance]);
  const y = useTransform(progress, [start, end], [0, dy * distance]);

  return (
    <motion.div
      style={{ opacity, scale, x, y }}
      className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 whitespace-nowrap"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border shadow-lg">
        <Icon size={20} className="text-primary" strokeWidth={2} />
      </div>
      <div className="hidden sm:flex flex-col leading-tight bg-card/95 backdrop-blur-md border border-border rounded-lg px-4 py-2 shadow-lg">
        <span className="text-sm font-bold text-foreground">{label}</span>
        <span className="text-xs font-mono text-muted-foreground">{sub}</span>
      </div>
    </motion.div>
  );
};

export default PocketSkillChip;