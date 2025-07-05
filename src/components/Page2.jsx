import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const API_KEY = 'AIzaSyAJ5UPU47WciQIGkyvtLdE_QiUD2_JFOiI';
const CHANNEL_ID = 'UCJSKclKElkU5UD3BmFtNkWQ';

const Page2 = () => {
  const [stats, setStats] = useState({
    subscribers: 0,
    totalViews: 0,
    videos: 0,
    community: 0
  });

  const [displayStats, setDisplayStats] = useState({
    subscribers: '0',
    totalViews: '0',
    videos: '0',
    community: 'Coming Soon'
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    const fetchYouTubeStats = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const data = await res.json();

        const statsData = data.items?.[0]?.statistics;

        if (!statsData) throw new Error('Invalid API response');

        setStats({
          subscribers: parseInt(statsData.subscriberCount),
          totalViews: parseInt(statsData.viewCount),
          videos: parseInt(statsData.videoCount),
          community: 0
        });
      } catch (err) {
        console.error('Error fetching YouTube stats:', err.message);
      }
    };

    fetchYouTubeStats();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const duration = 2;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration * 1000 / frameDuration);

    const animateCount = (start, end, key) => {
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentValue = Math.round(start + progress * (end - start));

        setDisplayStats(prev => ({
          ...prev,
          [key]: formatNumber(currentValue)
        }));

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    };

    animateCount(0, stats.subscribers, 'subscribers');
    animateCount(0, stats.totalViews, 'totalViews');
    animateCount(0, stats.videos, 'videos');
  }, [inView, stats]);

  const formatNumber = (n) => {
    if (!n) return '0';
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M+';
    if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K+';
    return n.toString();
  };

  const statsArray = [
    { label: 'Subscribers', value: displayStats.subscribers },
    { label: 'Total Views', value: displayStats.totalViews },
    { label: 'Videos', value: displayStats.videos },
    { label: 'Community', value: displayStats.community }
  ];

  return (
    <div ref={ref} className='py-20'>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsArray.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-pink-500/80 backdrop-blur-md rounded-xl shadow-lg border border-white/20 p-6 text-center"
            >
              <h3 className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page2;
