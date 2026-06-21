import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  // Check if device is touch screen so we don't show the cursor on mobile
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Framer motion values to track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add a spring physics effect for that smooth, premium "trailing" feel
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      // Subtract half the width/height (16px) to perfectly center the circle on the mouse pointer
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null; // Don't render on mobile phones/tablets

  return (
    <>
      {/* The main glowing circle that trails behind */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-[9999] bg-primary/10 backdrop-blur-sm"
        style={{
          x: cursorX,
          y: cursorY,
          boxShadow: '0 0 20px rgba(232, 85, 31, 0.4), inset 0 0 10px rgba(232, 85, 31, 0.2)',
        }}
      />
      
      {/* A tiny solid dot for exactly where the mouse is pointing */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[10000]"
        style={{
          // Subtract half the dot's size (3px) to center it
          x: useTransform(mouseX, v => v + 16 - 3), 
          y: useTransform(mouseY, v => v + 16 - 3),
        }}
      />
    </>
  );
};

// We need useTransform for the inner dot, so let's import it
import { useTransform } from 'framer-motion';

export default CustomCursor;