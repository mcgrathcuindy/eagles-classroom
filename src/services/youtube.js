// YouTube API Service
import { YOUTUBE_API_KEY, YOUTUBE_API_BASE, PLAYLISTS } from '../config/youtube';
import { getCache, setCache } from '../utils/cache';

// Cache duration: 10 hours (adjust as needed)
const CACHE_TTL = 60 * 60 * 10000; // 10 hours in milliseconds

/**
 * Fetch all videos from a YouTube playlist
 * @param {string} playlistId - YouTube playlist ID
 * @param {boolean} forceRefresh - Skip cache and fetch fresh data
 * @returns {Promise<Array>} Array of video objects
 */
export async function fetchPlaylistVideos(playlistId, forceRefresh = false) {
  const cacheKey = `playlist_${playlistId}`;

  // Check cache first unless force refresh
  if (!forceRefresh) {
    const cachedData = getCache(cacheKey);
    if (cachedData) {
      console.log(`Using cached data for playlist ${playlistId}`);
      return cachedData;
    }
  }

  try {
    console.log(`Fetching fresh data from YouTube API for playlist ${playlistId}`);
    const url = `${YOUTUBE_API_BASE}/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }

    const data = await response.json();

    // Transform API response to our app format
    const videos = data.items.map(item => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium.url,
      publishedAt: item.snippet.publishedAt,
    }));

    // Cache the result
    setCache(cacheKey, videos, CACHE_TTL);

    return videos;
  } catch (error) {
    console.error(`Error fetching playlist ${playlistId}:`, error);
    throw error;
  }
}

/**
 * Fetch videos for all configured playlists
 * @param {boolean} forceRefresh - Skip cache and fetch fresh data
 * @returns {Promise<Object>} Object with category keys and video arrays
 */
export async function fetchAllPlaylists(forceRefresh = false) {
  const cacheKey = 'all_playlists';

  // Check cache first unless force refresh
  if (!forceRefresh) {
    const cachedData = getCache(cacheKey);
    if (cachedData) {
      console.log('Using cached data for all playlists');
      return cachedData;
    }
  }

  try {
    console.log('Fetching fresh data from YouTube API for all playlists');
    const categories = Object.keys(PLAYLISTS);
    const promises = categories.map(async (category) => {
      const videos = await fetchPlaylistVideos(PLAYLISTS[category], forceRefresh);
      return { category, videos };
    });

    const results = await Promise.all(promises);

    // Convert array to object keyed by category
    const allPlaylists = results.reduce((acc, { category, videos }) => {
      acc[category] = videos;
      return acc;
    }, {});

    // Cache the combined result
    setCache(cacheKey, allPlaylists, CACHE_TTL);

    return allPlaylists;
  } catch (error) {
    console.error('Error fetching all playlists:', error);
    throw error;
  }
}

/**
 * Fetch details for a specific video
 * @param {string} videoId - YouTube video ID
 * @param {boolean} forceRefresh - Skip cache and fetch fresh data
 * @returns {Promise<Object>} Video details object
 */
export async function fetchVideoDetails(videoId, forceRefresh = false) {
  const cacheKey = `video_${videoId}`;

  // Check cache first unless force refresh
  if (!forceRefresh) {
    const cachedData = getCache(cacheKey);
    if (cachedData) {
      console.log(`Using cached data for video ${videoId}`);
      return cachedData;
    }
  }

  try {
    console.log(`Fetching fresh data from YouTube API for video ${videoId}`);
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
    const videoDetails = {
      id: video.id,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.high.url,
      publishedAt: video.snippet.publishedAt,
      channelTitle: video.snippet.channelTitle,
    };

    // Cache the result
    setCache(cacheKey, videoDetails, CACHE_TTL);

    return videoDetails;
  } catch (error) {
    console.error(`Error fetching video ${videoId}:`, error);
    throw error;
  }
}
