// YouTube API Service
import { YOUTUBE_API_KEY, YOUTUBE_API_BASE, PLAYLISTS } from '../config/youtube';

/**
 * Fetch all videos from a YouTube playlist
 * @param {string} playlistId - YouTube playlist ID
 * @returns {Promise<Array>} Array of video objects
 */
export async function fetchPlaylistVideos(playlistId) {
  try {
    const url = `${YOUTUBE_API_BASE}/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }

    const data = await response.json();

    // Transform API response to our app format
    return data.items.map(item => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium.url,
      publishedAt: item.snippet.publishedAt,
    }));
  } catch (error) {
    console.error(`Error fetching playlist ${playlistId}:`, error);
    throw error;
  }
}

/**
 * Fetch videos for all configured playlists
 * @returns {Promise<Object>} Object with category keys and video arrays
 */
export async function fetchAllPlaylists() {
  try {
    const categories = Object.keys(PLAYLISTS);
    const promises = categories.map(async (category) => {
      const videos = await fetchPlaylistVideos(PLAYLISTS[category]);
      return { category, videos };
    });

    const results = await Promise.all(promises);

    // Convert array to object keyed by category
    return results.reduce((acc, { category, videos }) => {
      acc[category] = videos;
      return acc;
    }, {});
  } catch (error) {
    console.error('Error fetching all playlists:', error);
    throw error;
  }
}

/**
 * Fetch details for a specific video
 * @param {string} videoId - YouTube video ID
 * @returns {Promise<Object>} Video details object
 */
export async function fetchVideoDetails(videoId) {
  try {
    const url = `${YOUTUBE_API_BASE}/videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      throw new Error('Video not found');
    }

    const video = data.items[0];
    return {
      id: video.id,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.high.url,
      publishedAt: video.snippet.publishedAt,
      channelTitle: video.snippet.channelTitle,
    };
  } catch (error) {
    console.error(`Error fetching video ${videoId}:`, error);
    throw error;
  }
}
