// src/components/PlayCard.jsx
import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'

export default function PlayCard({ title, href, thumbnail }) {
  return (
    <Link
      to={href}
      className="group block bg-[#2a2a2a] rounded-lg overflow-hidden hover:ring-2 hover:ring-[#00c3ff] transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video bg-[#1a1a1a] overflow-hidden">
        {thumbnail ? (
          <>
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-[#00c3ff] rounded-full p-3 md:p-4">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
              </div>
            </div>
          </>
        ) : (
          // Fallback if no thumbnail
          <div className="w-full h-full flex items-center justify-center">
            <Play className="w-12 h-12 text-gray-600" />
          </div>
        )}
      </div>

      {/* Title Section */}
      <div className="p-3 md:p-4">
        <h3 className="text-base md:text-lg font-semibold text-white line-clamp-2 group-hover:text-[#00c3ff] transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  )
}