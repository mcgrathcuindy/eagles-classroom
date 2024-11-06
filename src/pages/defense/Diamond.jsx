// src/pages/offense/Diamond.jsx
import PlayTitle from '../../components/PlayTitle'
import VideoPlayer from '../../components/VideoPlayer'
import PlayDescription from '../../components/PlayDescription'

export default function Diamond() {
    return (
        <div className="min-h-screen bg-[#1a1a1a] py-8">
            <PlayTitle title="Diamond" />
            <VideoPlayer videoId="s2wO8bDMZrE" />
            <PlayDescription title="Diamond" description="1-2-1-1 press. Works well against a 3 man press break. The emphasis is on the weak side defenders owning the middle of the court in order to take away the pass. The only pass allowed is backwards or side to side. Every other pass has to go over our heads. "/>
        </div>
    )
  }
  