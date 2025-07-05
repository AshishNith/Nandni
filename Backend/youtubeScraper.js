// youtubeScraper.js
const puppeteer = require('puppeteer');

const scrapeLatestVideos = async () => {
  const channelURL = 'https://www.youtube.com/@Nandni_Verse/videos';

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto(channelURL, { waitUntil: 'networkidle2' });

  await page.waitForSelector('ytd-grid-video-renderer', { timeout: 10000 });

  const videos = await page.evaluate(() => {
    const videoNodes = Array.from(document.querySelectorAll('ytd-grid-video-renderer'));
    return videoNodes.slice(0, 6).map(video => {
      const title = video.querySelector('#video-title')?.textContent.trim();
      const url = 'https://www.youtube.com' + video.querySelector('#video-title')?.getAttribute('href');
      const views = video.querySelector('#metadata-line span:nth-child(1)')?.textContent.trim();
      const time = video.querySelector('#metadata-line span:nth-child(2)')?.textContent.trim();
      const thumbnail = video.querySelector('img')?.src;

      return { title, url, views, time, thumbnail };
    });
  });

  await browser.close();
  return videos;
};

module.exports = scrapeLatestVideos;
