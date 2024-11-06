// src/components/VideoPlayer.jsx
export default function VideoPlayer({ videoId }) {
  return (
    <div className="aspect-w-9 aspect-h-16 max-w-xs mx-auto mb-4 md:mb-8 px-4" style={{minWidth:"90%"}}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="  rounded-lg min-w-full"
        style={{minHeight:"80vh"}}
      />
    </div>
  )
}
