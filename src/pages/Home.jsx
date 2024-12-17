// src/pages/Home.jsx
import { Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import VideoPlayer from '../components/VideoPlayer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-4">
            Prepare for game day with your smart playbook! 
          </h1>
          <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4">
            Welcome CCS Varsity Basketball Eagles. Inside this app you'll find all the notes and tools you need for success!
          </p>
        </div>

        {/* Video Section */}
        {/* <VideoPlayer videoId="gCoJPxctDBA" /> */}
        <VideoPlayer videoId="y_PEhyUxbfs" />

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
          {/* Smart Playbook Card */}
          <div className="bg-[#2a2a2a] p-6 rounded-lg">
            <h3 className="text-[#00c3ff] text-lg md:text-xl font-semibold mb-3">
              Smart Playbook
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Throw away the clumsy binders with poor visual aids. Enjoy a 21<sup>st</sup> Century approach that serves you — the modern athlete. 
            </p>
          </div>

          {/* Video Analysis Card */}
          <div className="bg-[#2a2a2a] p-6 rounded-lg">
            <h3 className="text-[#00c3ff] text-lg md:text-xl font-semibold mb-3">
              Video Analysis
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Didn't quite catch that last play in practice? No worries! Each play contains a detailed video analysis of our schemes.
            </p>
          </div>

          {/* Team Stats Card */}
          <div className="bg-[#2a2a2a] p-6 rounded-lg">
            <h3 className="text-[#00c3ff] text-lg md:text-xl font-semibold mb-3">
              Key Insights
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Each scheme is broken down to allow for easy access to information. Take it all in, and be ready to dominate on game day.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8 md:mt-16 px-4">
          <Link to="/more" className="w-full md:w-auto bg-[#0088ff] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#48bae0] transition-colors">
            Start Preparing Today
          </Link>
        </div>
      </div>
    </div>
  )
}