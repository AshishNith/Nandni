import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';

const Profile = () => {
  return (
    <div className='w-screen min-h-screen bg-gradient-to-br from-pink-500/60 to-pink-700/75'>
      <Navbar />
      <div className='max-w-6xl mx-auto px-4 py-20'>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-5xl md:text-6xl font-bold text-white mb-16 text-center'
        >
          Profile <span className='text-pink-300'>Nandni</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-12 mb-16'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              src={profile}
              alt="Nandni Profile" 
              className='w-full h-auto max-w-xs md:max-w-md object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300'
            />
            <div className='text-white'>
              <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-pink-300'>About Nandni</h2>
              <p className='mb-6 text-base md:text-lg leading-relaxed'>
                Hello! I'm Nandni, a passionate content creator dedicated to sharing my journey in lifestyle, fashion, and personal growth. 
                I believe in the power of storytelling and aim to inspire others through my experiences.
              </p>
              <p className='text-base md:text-lg leading-relaxed'>
                Join me as I explore various topics, connect with amazing individuals, and create a community where we can all thrive together!
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-12 text-white mb-16'
        >
          <h3 className='text-3xl md:text-4xl font-semibold mb-10 text-center text-pink-300'>Connect with Me</h3>
          <div className='flex justify-center space-x-4'>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-4xl hover:text-pink-300'>
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className='text-4xl hover:text-pink-300'>
              <i className="ri-youtube-fill"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='text-4xl hover:text-pink-300'>
              <i className="ri-twitter-fill"></i>
            </a>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
