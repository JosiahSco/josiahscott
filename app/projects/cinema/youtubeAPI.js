import axios from 'axios';

const API_KEY = process.env.YOUTUBE_KEY;

export async function fetchPlaylistData(playlistId) {
  try {
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/playlistItems',
      {
        params: {
          part: 'snippet',
          playlistId: playlistId,
          key: API_KEY,
          maxResults: 50,
        },
      }
    );
    return response.data.items;
  } catch (error) {
    console.error('Error fetching playlist data:', error.message);
    return [];
  }
}