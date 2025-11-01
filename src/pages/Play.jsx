// Dynamic Play Page - displays video based on URL parameters
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useVideoDetails } from '../hooks/useYouTubeData';
import VideoPlayer from '../components/VideoPlayer';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { ArrowLeft, Calendar, ChevronRight } from 'lucide-react';

export default function Play() {
  const { videoId, category } = useParams();
  const navigate = useNavigate();
  const { video, loading, error } = useVideoDetails(videoId);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] py-8">
        <LoadingSpinner message="Loading play..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] py-8">
        <ErrorMessage error={error} />
      </div>
    );
  }

  if (!video) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] py-8">
        <ErrorMessage error="Video not found" />
      </div>
    );
  }

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <Link
            to="/"
            className="text-gray-400 hover:text-[#00c3ff] transition-colors"
          >
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-600" />
          <Link
            to="/more"
            className="text-gray-400 hover:text-[#00c3ff] transition-colors"
          >
            All Plays
          </Link>
          {category && (
            <>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-gray-400 capitalize">{category}</span>
            </>
          )}
          <ChevronRight className="w-4 h-4 text-gray-600" />
          <span className="text-gray-500 truncate max-w-[200px]">{video.title}</span>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </button>

        {/* Video Player Section */}
        <div className="bg-black rounded-lg overflow-hidden shadow-xl mb-6">
          <VideoPlayer videoId={videoId} />
        </div>

        {/* Video Info Section */}
        <div className="bg-[#2a2a2a] rounded-lg p-6 md:p-8 shadow-lg">
          {/* Category Badge & Date */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {category && (
              <span className="inline-block px-3 py-1 bg-[#00c3ff] text-white text-sm font-semibold rounded-full capitalize">
                {category}
              </span>
            )}
            {video.publishedAt && (
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(video.publishedAt)}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            {video.title}
          </h1>

          {/* Channel Info */}
          {video.channelTitle && (
            <div className="mb-6 pb-6 border-b border-gray-700">
              <p className="text-gray-400 text-sm">
                By <span className="text-[#00c3ff] font-medium">{video.channelTitle}</span>
              </p>
            </div>
          )}

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-[#00c3ff] rounded"></div>
              Play Details
            </h2>
            <div className="text-gray-300 text-base leading-relaxed whitespace-pre-wrap">
              {video.description || 'No description available.'}
            </div>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="h-8"></div>
      </div>
    </div>
  );
}
