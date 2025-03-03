import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      mixBlendMode: 'normal',
      scale: 1
    },
    text: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: 'rgba(236, 72, 153, 0.2)',
      mixBlendMode: 'normal',
      scale: 1.2,
      border: '2px solid rgba(236, 72, 153, 0.5)'
    }
  };

  useEffect(() => {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, button, a, img');
    
    const mouseEnter = () => setCursorVariant('text');
    const mouseLeave = () => setCursorVariant('default');

    textElements.forEach(element => {
      element.addEventListener('mouseenter', mouseEnter);
      element.addEventListener('mouseleave', mouseLeave);
    });

    return () => {
      textElements.forEach(element => {
        element.removeEventListener('mouseenter', mouseEnter);
        element.removeEventListener('mouseleave', mouseLeave);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 backdrop-blur-sm border border-pink-500/30"
        variants={variants}
        animate={cursorVariant}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 28,
          mass: 0.5 
        }}
      />
      <motion.div
        className="cursor-ring fixed top-0 left-0 w-4 h-4 bg-gradient-to-r from-pink-500/50 to-purple-500/50 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: cursorVariant === 'text' ? 1.5 : 1
        }}
        transition={{ 
          type: "spring", 
          stiffness: 450, 
          damping: 28,
          mass: 0.8 
        }}
      />
    </>
  );
};

export default CustomCursor; 