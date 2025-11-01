// src/pages/More.jsx
import PlayCard from '../components/PlayCard'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import { useYouTube } from '../context/YouTubeContext'
import { RefreshCw } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function More() {
  const { playlists, loading, error, refresh } = useYouTube();
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refresh();
    // Add a small delay to ensure the refresh completes
    setTimeout(() => setIsRefreshing(false), 500);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] py-6 md:py-8">
        <LoadingSpinner message="Loading plays..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] py-6 md:py-8">
        <ErrorMessage error={error} />
      </div>
    );
  }

  if (!playlists) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] py-6 md:py-8">
        <ErrorMessage error="No plays available" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with refresh button */}
        <div className="flex justify-between items-center mb-6 md:mb-8 px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white">All Plays</h1>
          <button
            onClick={handleRefresh}
            disabled={loading || isRefreshing}
            className="flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] text-gray-300 rounded-lg hover:bg-[#404040] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Refresh plays from YouTube"
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
        </div>

        {Object.entries(playlists)
          .filter(([category, videos]) => videos && videos.length > 0) // Filter out empty playlists
          .map(([category, videos]) => (
            <div key={category} className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 capitalize px-4 border-b-4 border-b-sky-400">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {videos.map((video) => (
                  <PlayCard
                    key={video.id}
                    title={video.title}
                    href={`/play/${category}/${video.id}`}
                    thumbnail={video.thumbnail}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}