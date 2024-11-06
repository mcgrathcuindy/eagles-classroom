// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import More from './pages/More'
import Bird from './pages/offense/Bird'
import Celtic from './pages/offense/Celtic'
import Texas from './pages/offense/Texas'
import Mango from './pages/offense/Mango'
import Red from './pages/offense/Red'
import Orange from './pages/offense/Orange'
import Glitch from './pages/offense/Glitch'
import Eagle from './pages/offense/Eagle'
import Yahtzee from './pages/defense/Yahtzee'
import Diamond from './pages/defense/Diamond'
import Green from './pages/slob/Green'
// Import other play pages...

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1a1a1a]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/more" element={<More />} />
          <Route path="/offense/red" element={<Red />} />
          <Route path="/offense/orange" element={<Orange />} />
          <Route path="/offense/glitch" element={<Glitch />} />
          <Route path="/offense/eagle" element={<Eagle />} />
          <Route path="/offense/bird" element={<Bird />} />
          <Route path="/offense/celtic" element={<Celtic />} />
          <Route path="/offense/texas" element={<Texas />} />
          <Route path="/offense/mango" element={<Mango />} />
          <Route path="/defense/yahtzee" element={<Yahtzee />} />
          <Route path="/defense/diamond" element={<Diamond />} />
          <Route path="/slob/green" element={<Green />} />
          {/* Add routes for other play pages */}
          {/* Catch-all route for unmatched URLs */}
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </div>
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