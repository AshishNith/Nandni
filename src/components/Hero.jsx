import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const letterVariants = {
    initial: { y: 400 },
    animate: { y: 0 },
  };

  const textContainer = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="relative py-36 bg-gray-950 overflow-hidden">
      {/* 🔥 Glowing background animation */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 blur-3xl rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-6 z-10 relative text-center">
        <motion.h1
          variants={textContainer}
          initial="initial"
          animate="animate"
          className="text-5xl md:text-8xl font-bold text-white mb-6 text-stroke text-stroke-pink-500 text-stroke-2"
        >
          {"Nandniverse".split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              transition={{
                type: "spring",
                damping: 12,
                stiffness: 100,
              }}
              className="inline-block hover:text-pink-500 transition-colors duration-300"
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
            className="text-pink-500"
          >
            .
          </motion.span>
        </motion.h1>

        <p className="text-white/70 text-lg md:text-xl font-medium mb-10">
          Every mystery deserves a voice.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group relative bg-white text-pink-500 border border-pink-500 shadow-sm shadow-white px-6 py-3 rounded-full font-medium hover:bg-pink-700 hover:text-white transition-colors overflow-hidden"
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ type: "spring", stiffness: 100 }}
          />
          <span className="relative z-10">
            Explore My Channel <i className="ri-arrow-right-up-line" />
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
