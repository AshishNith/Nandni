// routes/youtube.js
const express = require('express');
const router = express.Router();
const scrapeLatestVideos = require('../youtubeScraper');

router.get('/latest-videos', async (req, res) => {
  try {
    const videos = await scrapeLatestVideos();
    res.json(videos);
  } catch (error) {
    console.error('Scraping failed:', error.message);
    res.status(500).json({ error: 'Failed to scrape YouTube' });
  }
});

module.exports = router;
