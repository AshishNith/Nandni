import React from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/profile.jpg'

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
    <div>
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items- justify-between px-28">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 pt-10 pl-14"
          >
            <motion.h1
              variants={textContainer}
              initial="initial"
              animate="animate"
              className='text-9xl text-white md:text-9xl font-bold mb-6 text-stroke text-stroke-green-500 text-stroke-2'
            >
              {["N", "a", "n", "d", "n", "i"].map((letter, index) => (
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
              <br />
              {["R", "a", "j"].map((letter, index) => (
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
                className='text-pink-500'
              >
                .
              </motion.span>
            </motion.h1>

            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-white text-pink-500 border border-red-500 shadow-sm shadow-white px-8 py-3 rounded-full font-medium mt-8 hover:bg-pink-700 hover:text-white transition-colors overflow-hidden"
            >
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ type: "spring", stiffness: 100 }}
              />
              <span className="relative z-10">
                View My Work <i className="ri-arrow-right-up-line" />
              </span>
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 pt-5 pl-9"
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="absolute inset-0 p-2 bg-white opacity-20 border border-red-600 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
              />
              <img 
                src={profile}    
                alt="Nandni Raj"
                className="p-2 bg-gray-300/40 backdrop-blur-lg rounded-full h-96 mx-auto border-4 border-pink-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
