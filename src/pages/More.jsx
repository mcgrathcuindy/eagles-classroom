// src/pages/More.jsx
import PlayCard from '../components/PlayCard'
import { navigation } from '../components/Navbar'
import { useEffect } from 'react'

export default function More() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4">
        {Object.entries(navigation).map(([category, items]) => (
          <div key={category} className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 capitalize px-4 border-b-4 border-b-sky-400">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {items.map((item) => (
                <PlayCard
                  key={item.name}
                  title={item.name}
                  href={item.href}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}