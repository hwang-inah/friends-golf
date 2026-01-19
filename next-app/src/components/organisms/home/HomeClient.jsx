'use client'

import Hero from './Hero/Hero.jsx'
import FacilityLocationSection from './FacilityLocationSection/FacilityLocationSection.jsx'
import ProsSection from './ProsSection/ProsSection.jsx'
import EventSectionClient from './EventSection/EventSectionClient.jsx'
import GallerySection from './GallerySection/GallerySection.jsx'

/**
 * 홈 페이지 클라이언트 컴포넌트
 * KakaoMapProvider는 루트 레이아웃에서 제공됨
 * @param {Array} events - 서버에서 가져온 이벤트 배열
 */
export default function HomeClient({ events = [] }) {
  return (
    <div>
      <Hero />
      <EventSectionClient events={events} />
      <FacilityLocationSection />
      <ProsSection />
      <GallerySection />
    </div>
  )
}
