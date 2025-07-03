import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import data from '../data/data.json'
import profile from '../assets/logo.jpg'

const About = () => {
  const { aboutSection } = data

  return (
    <div className='w-screen min-h-screen bg-gradient-to-br from-pink-500/60 to-pink-700/75 text-white'>
      <Navbar />

      <div className='max-w-7xl mx-auto px-4 py-20'>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-5xl md:text-6xl font-bold text-center mb-16'
        >
          Welcome to <span className='text-pink-200'>Nandniverse</span>
        </motion.h1>

        {/* Intro Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-12 mb-20 shadow-lg border border-pink-300'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              src={profile}
              alt="Nandniverse Logo" 
              className='w-full h-auto max-w-xs md:max-w-md object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-white/20'
            />
            <div>
              <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-pink-200'>Where Every Mystery Has a Voice</h2>
              <p className='mb-4 text-base md:text-lg leading-relaxed'>
                <strong>NandniVerse</strong> is your gateway to the untold. From forgotten histories to real-life case documentaries,
                strange facts to hidden science — we uncover truths the world often ignores.
              </p>
              <ul className='list-disc list-inside space-y-2 text-base md:text-lg pl-4'>
                <li>🎙️ Voice of truth</li>
                <li>🔍 Eye for detail</li>
                <li>🔥 Vibe that stays with you</li>
              </ul>
              <p className='mt-4 font-semibold text-pink-100'>
                Subscribe and join the movement — because knowledge isn't boring, it's dangerous.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission and Belief */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-20'>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 hover:shadow-xl transition-all border border-white/10'
          >
            <h3 className='text-2xl md:text-3xl font-semibold mb-6 text-pink-200'>🧭 My Mission</h3>
            <p className='text-base md:text-lg leading-relaxed'>
              To create a space where <strong>facts matter</strong>, stories have <strong>depth</strong>, and knowledge is <strong>powerful</strong>.
              Through NandniVerse, my mission is to inform, awaken, and inspire curious minds by presenting 
              <strong> truth-driven documentaries</strong>, simplified science, and real history — all in a voice that connects with the youth.
            </p>
            <p className='mt-4 text-base md:text-lg leading-relaxed'>
              A platform where <strong>education meets emotion</strong> and <strong>awareness sparks change</strong>.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 hover:shadow-xl transition-all border border-white/10'
          >
            <h3 className='text-2xl md:text-3xl font-semibold mb-6 text-pink-200'>🌱 What I Believe</h3>
            <ul className='list-disc list-inside space-y-4 text-base md:text-lg'>
              <li>I believe that <strong>real change starts with awareness</strong>.</li>
              <li>Content should <strong>educate, question, and provoke thought</strong>.</li>
              <li>I believe in the <strong>power of truth</strong> and asking <em>"why"</em>.</li>
              <li>Youth deserve content that <strong>respects their intelligence</strong> and challenges their thinking.</li>
            </ul>
          </motion.div>
        </div>

        {/* What You'll Find Here */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-12 text-white mb-20 border border-white/10'
        >
          <h3 className='text-3xl md:text-4xl font-semibold mb-10 text-center text-pink-200'>What You'll Find Here</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                title: 'Case Documentaries',
                desc: 'Real-life incidents, mysteries, and unsolved cases told with deep research, truth, and impact.',
                img: 'https://images.pexels.com/photos/18698755/pexels-photo-18698755.jpeg'
              },
              {
                title: 'Science & Technology',
                desc: 'Complex scientific topics explained in a simple, relatable, and exciting way — from innovations to discoveries.',
                img: 'https://images.pexels.com/photos/6153343/pexels-photo-6153343.jpeg'
              },
              {
                title: 'Historical Revelations',
                desc: 'Deep dives into hidden and misunderstood events from Indian and global history, backed by research.',
                img: 'https://images.pexels.com/photos/32836050/pexels-photo-32836050.jpeg'
              },
              {
                title: 'Cultural Chronicles',
                desc: 'A journey through India’s traditions, beliefs, and rituals — discovering the origins and meanings behind them.',
                img: 'https://images.pexels.com/photos/2565715/pexels-photo-2565715.jpeg'
              },
              {
                title: 'Facts & Knowledge',
                desc: 'Rare, surprising, or mind-blowing facts from science, psychology, nature, and beyond — to spark curiosity.',
                img: 'https://images.pexels.com/photos/2877338/pexels-photo-2877338.jpeg'
              },
              {
                title: 'Trending Explained',
                desc: 'Breaking down viral topics and current affairs with clarity, context, and research — minus the noise.',
                img: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg'
              }
            ].map((item, index) => (
              <div key={index} className='text-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300'>
                <img src={item.img} alt={item.title} className='w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-pink-300' />
                <h4 className='text-xl md:text-2xl font-semibold mb-2 text-pink-100'>{item.title}</h4>
                <p className='text-sm md:text-base text-white/80'>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default About