import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import data from '../data/data.json';

const Blog = () => {
  const { blogPosts, blogCategories } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className='w-screen min-h-screen bg-gradient-to-br from-pink-500/60 to-pink-700/75'>
      <Navbar />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-6xl font-bold text-white mb-6">
          Welcome to My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">Blog</span>
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Sharing thoughts, experiences, and insights about content creation, lifestyle, and more.
        </p>
      </motion.div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {['All', 'Personal', 'Tutorial', 'Fashion', 'Lifestyle'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-pink-500/80 backdrop-blur-sm rounded-full text-sm text-white">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center text-white/60 text-sm mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{post.title}</h3>
                <p className="text-white/80 mb-4">{post.excerpt}</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-pink-300 hover:text-pink-400 font-medium flex items-center gap-2"
                >
                  Read More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog; 