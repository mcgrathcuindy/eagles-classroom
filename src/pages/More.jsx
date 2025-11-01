// src/pages/More.jsx
import PlayCard from '../components/PlayCard'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import { useYouTube } from '../context/YouTubeContext'
import { useEffect } from 'react'

export default function More() {
  const { playlists, loading, error } = useYouTube();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        {Object.entries(playlists).map(([category, videos]) => (
          <div key={category} className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 capitalize px-4 border-b-4 border-b-sky-400">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {videos.map((video) => (
                <PlayCard
                  key={video.id}
                  title={video.title}
                  href={`/play/${category}/${video.id}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}