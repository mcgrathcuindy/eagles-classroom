// src/pages/offense/Red.jsx
import PlayTitle from '../../components/PlayTitle'
import VideoPlayer from '../../components/VideoPlayer'
import PlayDescription from '../../components/PlayDescription'

export default function Red() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] py-8">
      <PlayTitle title="Red" />
      <VideoPlayer videoId="1MTme4YERKk" />
      <PlayDescription 
        title="Red"
        description="Designed play for a post up. Fake DHO between ball handler and wing as big sets up in strong side post. If the big's defender fronts him, ball handler kicks it to wing who makes easy pass as big has defender sealed on his back. "
      />
    </div>
  )
}