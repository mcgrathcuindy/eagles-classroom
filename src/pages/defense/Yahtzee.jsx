// src/pages/offense/Yahtzee.jsx
import PlayTitle from '../../components/PlayTitle'
import VideoPlayer from '../../components/VideoPlayer'
import PlayDescription from '../../components/PlayDescription'

export default function Yahtzee() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] py-8">
      <PlayTitle title="Yahtzee" />
      <VideoPlayer videoId="Mjc2fWFUahQ" />
      <PlayDescription 
        title="Yahtzee"
        description="2-2-1 press. Ballside influences dribbler to sideline trap past halfcourt line. Weakside covers middle like buttons lined up on a shirt. Once the dribbler progresses down the sideline, 5 must step over to cover 1 pass away, and the opposite big must cover the hole."
      />
    </div>
  )
}