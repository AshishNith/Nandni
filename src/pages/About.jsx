import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import data from '../data/data.json'

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
          className='text-6xl font-bold text-white mb-16 text-center'
        >
          About <span className='text-pink-300'>NandniVerse</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='bg-white/10 backdrop-blur-sm rounded-lg p-12 mb-16'
        >
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              src="src/assets/profile.jpg"
              alt="Nandni Verse" 
              className='w-96 h-96 object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300'
            />
            <div className='text-white'>
              <h2 className='text-4xl font-semibold mb-6 text-pink-300'>Welcome to NandniVerse</h2>
              <p className='mb-6 text-lg leading-relaxed'>
                Hey there! I'm Nandni, and welcome to NandniVerse - a space where we explore lifestyle, 
                fashion, and daily life experiences together. Through my channel, I share authentic stories 
                and experiences that resonate with young minds.
              </p>
              <p className='text-lg leading-relaxed'>
                What started as a creative outlet has grown into a wonderful community where we share, 
                learn, and grow together. Join me on this exciting journey of self-expression and discovery!
              </p>
            </div>
          </div>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-8 mb-16'>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='bg-white/10 backdrop-blur-sm rounded-lg p-10 text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2'
          >
            <h3 className='text-3xl font-semibold mb-6 text-pink-300'>My Mission</h3>
            <p className='mb-6 text-lg leading-relaxed'>
              I'm on a mission to inspire and empower through authentic content creation. My goals are to:
            </p>
            <ul className='list-disc list-inside space-y-4 ml-4 text-lg'>
              <li>Share meaningful stories that resonate and inspire</li>
              <li>Build a supportive community of creators</li>
              <li>Encourage personal growth and creativity</li>
              <li>Create content that makes a positive impact</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='bg-white/10 backdrop-blur-sm rounded-lg p-10 text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2'
          >
            <h3 className='text-3xl font-semibold mb-6 text-pink-300'>Content Philosophy</h3>
            <p className='mb-6 text-lg leading-relaxed'>
              My content is guided by these core principles:
            </p>
            <ul className='list-disc list-inside space-y-4 ml-4 text-lg'>
              <li>Authenticity in every story shared</li>
              <li>Quality over quantity</li>
              <li>Engaging and interactive experiences</li>
              <li>Continuous learning and improvement</li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='bg-white/10 backdrop-blur-sm rounded-lg p-12 text-white mb-16'
        >
          <h3 className='text-4xl font-semibold mb-10 text-center text-pink-300'>Content Categories</h3>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center p-6 hover:bg-white/10 rounded-lg transition-all duration-300'>
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3"
                alt="Fashion" 
                className='w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-pink-300'
              />
              <h4 className='text-2xl font-semibold mb-4 text-pink-200'>Fashion & Style</h4>
              <p className='text-lg'>Fashion tips, outfit ideas, and style inspiration</p>
            </div>
            <div className='text-center p-6 hover:bg-white/10 rounded-lg transition-all duration-300'>
              <img 
                src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3"
                alt="Lifestyle" 
                className='w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-pink-300'
              />
              <h4 className='text-2xl font-semibold mb-4 text-pink-200'>Lifestyle</h4>
              <p className='text-lg'>Daily vlogs, routines, and life experiences</p>
            </div>
            <div className='text-center p-6 hover:bg-white/10 rounded-lg transition-all duration-300'>
              <img 
                src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3"
                alt="Personal Growth" 
                className='w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-pink-300'
              />
              <h4 className='text-2xl font-semibold mb-4 text-pink-200'>Student Life</h4>
              <p className='text-lg'>Study tips, college life, and educational content</p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default About
