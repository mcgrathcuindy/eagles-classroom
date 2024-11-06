// src/pages/offense/Glitch.jsx
import PlayTitle from '../../components/PlayTitle'
import VideoPlayer from '../../components/VideoPlayer'
import PlayDescription from '../../components/PlayDescription'

export default function Glitch() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] py-8">
      <PlayTitle title="Glitch" />
      <VideoPlayer videoId="bZnpwGtm01k" />
      <PlayDescription 
        title="Glitch"
        description="Halfcourt set that puts 5 man in place for split screen action and allows weakside ghost screen action. You can choose who runs what by starting them in the right position. If you want a ghost screen with Braeden and Obando, you start Obando in the middle with Braeden on the weakside wing. If you want split screen action you start Obando on the strong side wing and Braeden in the middle and make the entry pass to Bryce."
      />
    </div>
  )
}