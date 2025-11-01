// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { YouTubeProvider } from './context/YouTubeContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import More from './pages/More'
import Play from './pages/Play'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'

export default function App() {
  return (
    <Router>
      <YouTubeProvider>
        <div className="min-h-screen bg-[#1a1a1a]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/more" element={<More />} />
            {/* Dynamic play route - handles all category/video combinations */}
            <Route path="/play/:category/:videoId" element={<Play />} />
            {/* Catch-all route for unmatched URLs */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </YouTubeProvider>
    </Router>
  )
}

function NotFound() {
  return (
    <div className="text-center mb-8 md:mb-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-4">
        <br></br>Oops! There's an error: <br></br>
      </h1>
      <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4">
        You're requesting an invalid url! It's either been moved, deleted, or never existed in the first place!
      </p>
      <div className="text-center mt-8 md:mt-16 px-4">
        <Link to="/" className="w-full md:w-auto bg-[#0088ff] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#48bae0] transition-colors">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}