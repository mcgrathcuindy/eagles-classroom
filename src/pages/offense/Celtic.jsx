// src/pages/offense/Celtic.jsx
import PlayTitle from '../../components/PlayTitle'
import VideoPlayer from '../../components/VideoPlayer'
import PlayDescription from '../../components/PlayDescription'

export default function Celtic() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] py-8">
      <PlayTitle title="Celtic" />
      <VideoPlayer videoId="gCoJPxctDBA" />
      <PlayDescription 
        title="Celtic"
        description="Horns offense that utilizes back door screens as well as pin down and rolls for guards. Bigs could also flare."
      />
    </div>
  )
}