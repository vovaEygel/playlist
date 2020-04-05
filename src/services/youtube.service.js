import axios from 'axios';

export const youtubeService = {
  getVideos
}

  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search'
  const API_KEY = 'AIzaSyDYdh4SyvF4ZY0IzGU6AyTXkfS61LyRi5U'

async function getVideos(q = 'vue') {
  let params = {
    part: 'snippet',
    key: API_KEY,
    q,
    maxResults: 5,
    type: 'video'
  };
  
  try {
    const res = await axios.get(BASE_URL, { params })
    return res.data.items
  } catch(err) {
    console.log('error:', err)
  }
}
