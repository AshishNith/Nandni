import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import data from '../data/data.json'
import profile from '../assets/logo.jpg'

const About = () => {
  const { aboutSection } = data

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
          Welcome to <span className='text-pink-300'>Nandniverse</span>
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
              alt="Nandniverse Creator" 
              className='w-full h-auto max-w-xs md:max-w-md object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300'
            />
            <div className='text-white'>
              <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-pink-300'>Hey, I'm Nandni 👋</h2>
              <p className='mb-6 text-base md:text-lg leading-relaxed'>
                Welcome to <strong>Nandniverse</strong> — a space where fashion, lifestyle, and the realness of student life collide. 
                I create videos that are raw, real, and relatable, with a touch of ✨ pink energy ✨.
              </p>
              <p className='text-base md:text-lg leading-relaxed'>
                What started as a passion project has turned into a beautiful community. 
                I'm here to share my journey and bring you along for the ride — whether it's a casual vlog, study routine, or style inspo.
              </p>
            </div>
          </div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-10 text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2'
          >
            <h3 className='text-2xl md:text-3xl font-semibold mb-6 text-pink-300'>My Mission</h3>
            <p className='mb-6 text-base md:text-lg leading-relaxed'>
              I’m here to create content that connects — honest, empowering, and a little bit chaotic (in the best way). Through this channel, I want to:
            </p>
            <ul className='list-disc list-inside space-y-4 ml-4 text-base md:text-lg'>
              <li>Inspire self-expression and confidence</li>
              <li>Build a positive, hype-filled community</li>
              <li>Keep it real — always</li>
              <li>Make you feel seen and heard</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-10 text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2'
          >
            <h3 className='text-2xl md:text-3xl font-semibold mb-6 text-pink-300'>What I Believe</h3>
            <p className='mb-6 text-base md:text-lg leading-relaxed'>
              My content is driven by these simple but powerful values:
            </p>
            <ul className='list-disc list-inside space-y-4 ml-4 text-base md:text-lg'>
              <li>Be authentic. Always.</li>
              <li>Quality > Quantity</li>
              <li>Stay curious, stay evolving</li>
              <li>Make it fun and fearless</li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-12 text-white mb-16'
        >
          <h3 className='text-3xl md:text-4xl font-semibold mb-10 text-center text-pink-300'>What You'll Find Here</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center p-6 hover:bg-white/10 rounded-lg transition-all duration-300'>
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3"
                alt="Fashion" 
                className='w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-pink-300'
              />
              <h4 className='text-xl md:text-2xl font-semibold mb-4 text-pink-200'>Fashion & Style</h4>
              <p className='text-base md:text-lg'>Outfits, makeup, aesthetics — all the glam but make it real.</p>
            </div>
            <div className='text-center p-6 hover:bg-white/10 rounded-lg transition-all duration-300'>
              <img 
                src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3"
                alt="Lifestyle" 
                className='w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-pink-300'
              />
              <h4 className='text-xl md:text-2xl font-semibold mb-4 text-pink-200'>Lifestyle</h4>
              <p className='text-base md:text-lg'>Vlogs, habits, routines, chill vibes — just me being me.</p>
            </div>
            <div className='text-center p-6 hover:bg-white/10 rounded-lg transition-all duration-300'>
              <img 
                src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3"
                alt="Student Life" 
                className='w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-pink-300'
              />
              <h4 className='text-xl md:text-2xl font-semibold mb-4 text-pink-200'>Student Life</h4>
              <p className='text-base md:text-lg'>Study tips, motivation, college chaos & productivity hacks.</p>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  )
}

export default About
