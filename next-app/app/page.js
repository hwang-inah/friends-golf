'use client'

import { KakaoMapProvider } from '../src/contexts/KakaoMapContext.jsx'
import Hero from '../src/components/organisms/home/Hero/Hero.jsx'
import FacilityLocationSection from '../src/components/organisms/home/FacilityLocationSection/FacilityLocationSection.jsx'
import EventSection from '../src/components/organisms/home/EventSection/EventSection.jsx'
import ProsSection from '../src/components/organisms/home/ProsSection/ProsSection.jsx'
import GallerySection from '../src/components/organisms/home/GallerySection/GallerySection.jsx'

export default function Page() {
  return (
    <KakaoMapProvider>
      <div>
        <Hero />
        <FacilityLocationSection />
        <ProsSection />
        <EventSection />
        <GallerySection />
      </div>
    </KakaoMapProvider>
  )
}
