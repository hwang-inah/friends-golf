'use client'

import { KakaoMapProvider } from '../../../contexts/KakaoMapContext.jsx'
import Hero from './Hero/Hero.jsx'
import FacilityLocationSection from './FacilityLocationSection/FacilityLocationSection.jsx'
import ProsSection from './ProsSection/ProsSection.jsx'
import EventSectionClient from './EventSection/EventSectionClient.jsx'
import GallerySection from './GallerySection/GallerySection.jsx'

/**
 * 홈 페이지 클라이언트 컴포넌트
 * KakaoMapProvider와 인터랙션이 필요한 컴포넌트들을 감싸는 역할
 * @param {Array} events - 서버에서 가져온 이벤트 배열
 */
export default function HomeClient({ events = [] }) {
  return (
    <KakaoMapProvider>
      <div>
        <Hero />
        <EventSectionClient events={events} />
        <FacilityLocationSection />
        <ProsSection />
        <GallerySection />
      </div>
    </KakaoMapProvider>
  )
}
