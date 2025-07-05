import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  const socialLinks = [
    { icon: "ri-youtube-fill", url: "https://www.youtube.com/@Nandni_Verse", label: "YouTube" },
    { icon: "ri-instagram-fill", url: "https://www.instagram.com/nandni_verse/", label: "Instagram" },
    // { icon: "ri-twitter-x-fill", url: "#", label: "Twitter" },
    // { icon: "ri-tiktok-fill", url: "#", label: "TikTok" }
  ]

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Videos", path: "#videos" },
    { name: "Contact", path: "#contact" }
  ]

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative mt-20"
    >
      {/* Top Wave SVG */}
      <motion.div 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180"
      >
        <svg className="relative block w-full h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white/10"
          ></motion.path>
        </svg>
      </motion.div>

      <div className="pt-32 pb-8 px-4 relative bg-black/40 backdrop-blur-md rounded-t-3xl">

        <div className="max-w-6xl mx-auto">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            {/* Brand Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="text-center md:text-left"
            >
              <motion.h3 
                whileHover={{ scale: 1.05, color: "#ec4899" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-3xl font-bold text-white mb-4"
              >
                NandniVerse
              </motion.h3>
              <p className="text-white/80 mb-4">Creating amazing content and sharing my journey with you all!</p>
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-pink-500 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="text-center"
            >
              <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      to={link.path}
                      className="text-white/80 hover:text-pink-300 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="text-center md:text-right"
            >
              <h4 className="text-xl font-semibold text-white mb-4">Stay Updated</h4>
              <p className="text-white/80 mb-4">Subscribe to my newsletter for latest updates!</p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-2 justify-center md:justify-end"
              >
                <motion.input 
                  whileFocus={{ scale: 1.02 }}
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-pink-500"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors duration-300"
                >
                  Subscribe
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="border-t border-white/10 pt-8 mt-8 text-center"
          >
            <p className="text-white/60">
              © {new Date().getFullYear()} NandniVerse. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer 