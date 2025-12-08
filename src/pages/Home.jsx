import React from 'react'
import Hero from '../components/organisms/home/Hero/Hero.jsx'
import EventFacilitySection from '../components/organisms/home/EventFacilitySection/EventFacilitySection.jsx'
import ProsSection from '../components/organisms/home/ProsSection/ProsSection.jsx'
import GallerySection from '../components/organisms/home/GallerySection/GallerySection.jsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <EventFacilitySection />
      <ProsSection />
      <GallerySection />
    </div>
  )
}

export default Home