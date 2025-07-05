// index.js
const express = require('express');
const cors = require('cors');
const Parser = require('rss-parser');
const youtubeRoutes = require('./routes/youtube');

const app = express();
const PORT = process.env.PORT || 5000;
const parser = new Parser();

app.use(cors()); // Enable CORS for all origins (or configure it if needed)

app.get('/api/youtube/stats', async (req, res) => {
  const API_KEY = 'AIzaSyAJ5UPU47WciQIGkyvtLdE_QiUD2_JFOiI';
  const CHANNEL_ID = 'UCJSKclKElkU5UD3BmFtNkWQ';

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
    );
    const data = await response.json();
    const stats = data.items?.[0]?.statistics;
    console.log("YouTube API Raw Response:", data);

    if (!stats) throw new Error("No stats found");

    res.json({
      subscribers: stats.subscriberCount,
      views: stats.viewCount,
      videos: stats.videoCount
    });
  } catch (err) {
    console.error('Failed to fetch stats:', err);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});


app.get('/api/youtube', async (req, res) => {
  try {
    const feed = await parser.parseURL(
      'https://www.youtube.com/feeds/videos.xml?channel_id=UCJSKclKElkU5UD3BmFtNkWQ'
    );

    const latestVideos = feed.items.slice(0, 6).map((item) => {
      const videoId = item.link.split('=')[1];
      return {
        title: item.title,
        videoId,
        published: item.pubDate,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        link: item.link,
      };
    });

    res.json(latestVideos);
  } catch (error) {
    console.error('Error fetching YouTube feed:', error.message);
    res.status(500).json({ error: 'Failed to fetch YouTube feed' });
  }
});




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
