// src/pages/offense/Eagle.jsx
import PlayTitle from '../../components/PlayTitle'
import VideoPlayer from '../../components/VideoPlayer'
import PlayDescription from '../../components/PlayDescription'

export default function Eagle() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] py-8">
      <PlayTitle title="Eagle" />
      <VideoPlayer videoId="xigLKKkzFfs" />
      <PlayDescription 
        title="Eagle"
        description="High pick n roll for Braeden and Obando. Want slowest guy to have to guard Braeden and smallest guy to have to guard Obando. If the defense helps, we have the spacing to cut, shoot a wide open 3, or drive."
      />
    </div>
  )
}