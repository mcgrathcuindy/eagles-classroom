// src/pages/offense/Mango.jsx
import PlayTitle from '../../components/PlayTitle'
import VideoPlayer from '../../components/VideoPlayer'
import PlayDescription from '../../components/PlayDescription'

export default function Mango() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] py-8">
      <PlayTitle title="Mango" />
      <VideoPlayer videoId="HIPBi5YuuDE" />
      <PlayDescription 
        title="Mango"
        description="Play that emphasizes shooters running to ballside corner getting screens from big man and opposite corner guard. Good against zones that are weak in the corner like 3-2, 2-1-2, 1-3-1. "
      />
    </div>
  )
}