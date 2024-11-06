// src/pages/offense/Orange.jsx
import PlayTitle from '../../components/PlayTitle'
import VideoPlayer from '../../components/VideoPlayer'
import PlayDescription from '../../components/PlayDescription'

export default function Orange() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] py-8">
      <PlayTitle title="Orange" />
      <VideoPlayer videoId="0N0IH8_xNhI" />
      <PlayDescription 
        title="Orange"
        description="Set with a high post and baseline runner. Used to have a 4 vs 3 advantage free throw line and up."
      />
    </div>
  )
}