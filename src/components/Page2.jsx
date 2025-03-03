import React from 'react'
import { motion } from 'framer-motion'
import data from '../data/data.json'

const Page2 = () => {
  const { stats } = data
  
  const statsArray = [
    { label: 'Subscribers', value: stats.subscribers },
    { label: 'Total Views', value: stats.totalViews },
    { label: 'Videos', value: stats.videos },
    { label: 'Community', value: stats.community }
  ]

  return (
    <div className='py-20'>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsArray.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page2
