// Dynamic Play Page - displays video based on URL parameters
import { useParams } from 'react-router-dom';
import { useVideoDetails } from '../hooks/useYouTubeData';
import PlayTitle from '../components/PlayTitle';
import VideoPlayer from '../components/VideoPlayer';
import PlayDescription from '../components/PlayDescription';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

export default function Play() {
  const { videoId } = useParams();
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

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-8">
      <PlayTitle title={video.title} />
      <VideoPlayer videoId={videoId} />
      <PlayDescription
        title={video.title}
        description={video.description}
      />
    </div>
  );
}
