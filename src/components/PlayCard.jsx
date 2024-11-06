// src/components/PlayCard.jsx
import { Link } from 'react-router-dom'

export default function PlayCard({ title, href }) {
  return (
    <Link
      to={href}
      className="block p-4 md:p-6 bg-[#2a2a2a] rounded-lg hover:bg-[#404040] transition-colors"
    >
      <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
    </Link>
  )
}