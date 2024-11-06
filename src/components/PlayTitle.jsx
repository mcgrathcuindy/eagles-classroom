// src/components/PlayTitle.jsx
export default function PlayTitle({ title }) {
  return (
    <div className="bg-[#2a2a2a] p-4 md:p-8 mb-4 md:mb-8">
      <h1 className="text-2xl md:text-3xl font-bold text-white text-center">{title}</h1>
    </div>
  )
}