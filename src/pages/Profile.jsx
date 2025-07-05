import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';

const Profile = () => {
  return (
    <div className='w-screen min-h-screen bg-gradient-to-br from-pink-500/60 to-pink-700/80 text-white'>
      <Navbar />

      <div className='max-w-6xl mx-auto px-4 py-24'>
        {/* Header */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-5xl md:text-6xl font-bold text-center mb-16'
        >
          Meet <span className='text-pink-200'>Nandni</span>
        </motion.h1>

        {/* Intro Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='bg-white/10 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-16 mb-20'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <motion.img 
              src={profile}
              alt="Nandni Profile" 
              className='w-full h-auto max-w-xs md:max-w-md rounded-2xl shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-300'
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            />

            <div>
              <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-pink-200'>Your Vibe Curator</h2>
              <p className='text-base md:text-lg leading-relaxed mb-4'>
                Hey, I'm <strong>Nandni</strong> — storyteller, explorer, and creator behind the scenes of <span className="text-pink-300 font-semibold">NandniVerse</span>. From fashion to facts, I bring you content that entertains, educates, and empowers.
              </p>
              <p className='text-base md:text-lg leading-relaxed'>
                Through real stories, deep dives, and honest perspectives, I’m building a space that feels like home for curiosity, confidence, and community.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Beliefs Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-20'
        >
          {[
            {
              title: '🌟 What Drives Me',
              content: 'A deep passion for truth, emotion, and connection. I want to create stories that stick with you long after the screen fades.'
            },
            {
              title: '📢 My Content Motto',
              content: 'No sugar-coating, no fluff. Just raw insights, bold opinions, and real representation — always for the curious, by the curious.'
            }
          ].map((item, index) => (
            <div key={index} className='bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-md'>
              <h3 className='text-2xl font-semibold text-pink-200 mb-4'>{item.title}</h3>
              <p className='text-white/80 text-base md:text-lg leading-relaxed'>{item.content}</p>
            </div>
          ))}
        </motion.div>

        {/* Social Connect */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10'
        >
          <h3 className='text-3xl font-semibold mb-6 text-pink-200'>Let’s Stay Connected</h3>
          <p className='text-white/70 mb-6 text-base md:text-lg'>Follow me on socials for behind-the-scenes, updates, and a whole lot of vibe.</p>
          <div className='flex justify-center gap-6 text-4xl'>
            <a href="https://www.instagram.com/nandni_verse" target="_blank" rel="noopener noreferrer" className='hover:text-pink-400 transition-transform hover:scale-125'>
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="https://www.youtube.com/@Nandni_Verse" target="_blank" rel="noopener noreferrer" className='hover:text-pink-400 transition-transform hover:scale-125'>
              <i className="ri-youtube-fill"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:text-pink-400 transition-transform hover:scale-125'>
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
