import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Replace with your channel ID
const CHANNEL_ID = 'UCJSKclKElkU5UD3BmFtNkWQ'; 
const API_KEY = 'AIzaSyDX3b3up-E_A-rpaM-uOSuZv1XkPvTh878';  

const Page2 = () => {
  const [stats, setStats] = useState({
    subscribers: '',
    totalViews: '',
    videos: '',
    community: 'Coming Soon' // Placeholder or from elsewhere
  });

  useEffect(() => {
    const fetchYouTubeStats = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const data = await res.json();
        const statsData = data.items[0].statistics;

        setStats({
          subscribers: formatNumber(statsData.subscriberCount),
          totalViews: formatNumber(statsData.viewCount),
          videos: formatNumber(statsData.videoCount),
          community: 'Coming Soon'
        });
      } catch (err) {
        console.error('Failed to fetch YouTube stats', err);
      }
    };

    fetchYouTubeStats();
  }, []);

  const formatNumber = (num) => {
    if (!num) return '';
    const n = parseInt(num);
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M+';
    if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K+';
    return n.toString();
  };

  const statsArray = [
    { label: 'Subscribers', value: stats.subscribers },
    { label: 'Total Views', value: stats.totalViews },
    { label: 'Videos', value: stats.videos },
    { label: 'Community', value: stats.community }
  ];

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
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 p-6 text-center"
            >
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page2;
