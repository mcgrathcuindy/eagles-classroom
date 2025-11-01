// YouTube Data Context
import { createContext, useContext } from 'react';
import { useAllPlaylists } from '../hooks/useYouTubeData';

const YouTubeContext = createContext(null);

export function YouTubeProvider({ children }) {
  const { data, loading, error } = useAllPlaylists();

  return (
    <YouTubeContext.Provider value={{ playlists: data, loading, error }}>
      {children}
    </YouTubeContext.Provider>
  );
}

export function useYouTube() {
  const context = useContext(YouTubeContext);
  if (!context) {
    throw new Error('useYouTube must be used within YouTubeProvider');
  }
  return context;
}
