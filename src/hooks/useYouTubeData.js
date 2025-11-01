// Custom hooks for YouTube data fetching
import { useState, useEffect, useCallback } from 'react';
import { fetchAllPlaylists, fetchVideoDetails } from '../services/youtube';

/**
 * Hook to fetch all playlists and their videos
 * @returns {Object} { data, loading, error, refresh }
 */
export function useAllPlaylists() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    let mounted = true;

    async function loadPlaylists() {
      try {
        setLoading(true);
        setError(null);
        // Use forceRefresh when refreshTrigger > 0
        const playlists = await fetchAllPlaylists(refreshTrigger > 0);

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
  }, [refreshTrigger]);

  // Function to manually refresh data
  const refresh = useCallback(() => {
    setRefreshTrigger(prev => prev + 1);
  }, []);

  return { data, loading, error, refresh };
}

/**
 * Hook to fetch a specific video's details
 * @param {string} videoId - YouTube video ID
 * @returns {Object} { video, loading, error, refresh }
 */
export function useVideoDetails(videoId) {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

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
        // Use forceRefresh when refreshTrigger > 0
        const videoData = await fetchVideoDetails(videoId, refreshTrigger > 0);

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
  }, [videoId, refreshTrigger]);

  // Function to manually refresh data
  const refresh = useCallback(() => {
    setRefreshTrigger(prev => prev + 1);
  }, []);

  return { video, loading, error, refresh };
}
