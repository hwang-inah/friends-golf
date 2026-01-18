'use client'

import { KakaoMapProvider, useKakaoMap } from '../../src/contexts/KakaoMapContext.jsx'
import LocationContent from '../../src/components/organisms/LocationContent/LocationContent.jsx'

function LocationPageContent() {
  const { kakaoReady, kakaoFailed } = useKakaoMap()
  
  return <LocationContent kakaoReady={kakaoReady} kakaoFailed={kakaoFailed} />
}

export default function LocationPage() {
  return (
    <KakaoMapProvider>
      <LocationPageContent />
    </KakaoMapProvider>
  )
}
