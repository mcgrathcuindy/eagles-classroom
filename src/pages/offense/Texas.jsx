// src/pages/offense/Texas.jsx
import PlayTitle from '../../components/PlayTitle'
import VideoPlayer from '../../components/VideoPlayer'
import PlayDescription from '../../components/PlayDescription'

export default function Texas() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] py-8">
      <PlayTitle title="Texas" />
      <VideoPlayer videoId="lKJs-FH91C8" />
      <PlayDescription 
        title="Texas"
        description="Zone offense that rotates two big men between high and low post and works to set up a triangle on one side. Features a back door cut from the top."
      />
    </div>
  )
}