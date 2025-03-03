import React from 'react'
import { motion } from 'framer-motion'

const YouTubeSection = () => {
const videos = [
  {
    title: "Meri Pehli Reel | Nandni Verse",
    thumbnail: "https://i.ytimg.com/vi/QnmYXaLMrHI/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLBd-r8n3SUxucXNwoUcTaiaUubHxg",
    views: "1.2K views",
    date: "1 month ago"
  },
  {
    title: "Meri Pehli Vlog | Nandni Verse",
    thumbnail: "https://i.ytimg.com/vi/Hs_6_qgq7-0/hqdefault.jpg",
    views: "1.1K views",
    date: "1 month ago"
  },
  {
    title: "Meri Pehli Short | Nandni Verse",
    thumbnail: "https://i.ytimg.com/vi/Hs_6_qgq7-0/hqdefault.jpg",
    views: "1K views",
    date: "1 month ago"
  },
  {
    title: "Meri Pehli Video | Nandni Verse",
    thumbnail: "https://i.ytimg.com/vi/Hs_6_qgq7-0/hqdefault.jpg",
    views: "950 views",
    date: "1 month ago"
  }
];


  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">My YouTube Journey</h2>
        <p className="text-white/80 text-lg">Check out my latest content</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="glass-card p-4"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-white font-semibold text-lg mb-2">{video.title}</h3>
            <div className="flex justify-between text-white/70">
              <span>{video.views}</span>
              <span>{video.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default YouTubeSection