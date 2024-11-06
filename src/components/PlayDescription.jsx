// src/components/PlayDescription.jsx
export default function PlayDescription({ title, description }) {
  return (
    <div className="bg-[#2a2a2a] p-4 md:p-8 rounded-lg max-w-4xl mx-auto px-4" >
      <h3 className="text-lg md:text-xl font-semibold text-white">{title}: </h3>
      <p className="text-gray-300 text-sm md:text-base">{description}</p>
    </div>
  )
}