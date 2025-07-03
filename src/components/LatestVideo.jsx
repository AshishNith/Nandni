import React, { useEffect, useState } from 'react';

const CHANNEL_ID = 'UCJSKclKElkU5UD3BmFtNkWQ'; 
const API_KEY = 'AIzaSyDX3b3up-E_A-rpaM-uOSuZv1XkPvTh878'; 
const MAX_RESULTS = 6;

const LatestVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
        );
        const data = await res.json();

        const filteredVideos = data.items.filter(item => item.id.kind === 'youtube#video');
        setVideos(filteredVideos);
      } catch (error) {
        console.error('Failed to fetch YouTube videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Latest Videos & Shorts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id.videoId}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 overflow-hidden"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-t-xl"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-white text-sm font-medium line-clamp-2">
                  {video.snippet.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestVideos;
