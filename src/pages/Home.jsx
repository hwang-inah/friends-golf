import React from 'react'
import Hero from '../components/organisms/home/Hero/Hero.jsx'
import FacilityLocationSection from '../components/organisms/home/FacilityLocationSection/FacilityLocationSection.jsx'
import EventSection from '../components/organisms/home/EventSection/EventSection.jsx'
import ProsSection from '../components/organisms/home/ProsSection/ProsSection.jsx'
import GallerySection from '../components/organisms/home/GallerySection/GallerySection.jsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <FacilityLocationSection />
      <ProsSection />
      <EventSection />
      <GallerySection />
    </div>
  )
}

export default Home