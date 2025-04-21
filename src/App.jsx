import React from 'react'
import Navbar from './components/Navbar'
import FooterMobile from './components/FooterMobile'
import PosterCarousel from './components/PosterCarousel'
const posterList=[
  '/posters/poster1.webp',
  '/posters/poster2.webp'
];
const App=() => {
  return (
    <main>
      <Navbar />
      <div className="mt-3">
        <PosterCarousel images={posterList} interval={4000} />
      </div>
      
      <FooterMobile />
    </main>
  )
}

export default App