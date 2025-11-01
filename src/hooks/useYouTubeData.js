// Custom hooks for YouTube data fetching
import { useState, useEffect } from 'react';
import { fetchAllPlaylists, fetchVideoDetails } from '../services/youtube';

/**
 * Hook to fetch all playlists and their videos
 * @returns {Object} { data, loading, error }
 */
export function useAllPlaylists() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function loadPlaylists() {
      try {
        setLoading(true);
        setError(null);
        const playlists = await fetchAllPlaylists();

        if (mounted) {
          setData(playlists);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    loadPlaylists();

    return () => {
      mounted = false;
    };
  }, []);

  return { data, loading, error };
}

/**
 * Hook to fetch a specific video's details
 * @param {string} videoId - YouTube video ID
 * @returns {Object} { video, loading, error }
 */
export function useVideoDetails(videoId) {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!videoId) {
      setLoading(false);
      return;
    }

    let mounted = true;

    async function loadVideo() {
      try {
        setLoading(true);
        setError(null);
        const videoData = await fetchVideoDetails(videoId);

        if (mounted) {
          setVideo(videoData);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    loadVideo();

    return () => {
      mounted = false;
    };
  }, [videoId]);

  return { video, loading, error };
}
