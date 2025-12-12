// YouTube API Configuration

export const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

// Map categories to YouTube Playlist IDs
// Replace these with your actual playlist IDs from YouTube
export const PLAYLISTS = {
  offense: 'PLIpKLwUDEQqjoYy6tbJTcz2aVF9_Jq5qA',
  defense: 'PLIpKLwUDEQqjcqMUHjXti7EWPjGuuGi2Z',
  slob: 'PLIpKLwUDEQqg2Y6cBfkfoS8ukp2Wos5EL',
  blob: 'PLIpKLwUDEQqjbvwBDXggaguOk3e9LGbTy',
  pressbreak: 'PLIpKLwUDEQqibAL4QowbpUFWBL1aaLQm4',
};

// YouTube API endpoints
export const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';
