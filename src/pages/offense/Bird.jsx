// src/pages/offense/Bird.jsx
import PlayTitle from '../../components/PlayTitle'
import VideoPlayer from '../../components/VideoPlayer'
import PlayDescription from '../../components/PlayDescription'

export default function Bird() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] py-8">
      <PlayTitle title="Bird" />
      <VideoPlayer videoId="6-c8TduVcEc" />
      <PlayDescription 
        title="Bird"
        description="Variant of Celtic where there are 2 DHO options."
      />
    </div>
  )
}