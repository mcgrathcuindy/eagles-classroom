// src/pages/offense/Green.jsx
import PlayTitle from '../../components/PlayTitle'
import VideoPlayer from '../../components/VideoPlayer'
import PlayDescription from '../../components/PlayDescription'

export default function Green() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] py-8">
      <PlayTitle title="Green" />
      <VideoPlayer videoId="lNLbXaM7KY4" />
      <PlayDescription 
        title="Green"
        description="SLOB play that looks to get the inbounder a quick  3 point shot. If no shot, then setup offense. If shot, then everyone crashes hard except #1."
      />
    </div>
  )
}