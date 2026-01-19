'use client'

import { useKakaoMap } from '../../src/contexts/KakaoMapContext.jsx'
import LocationContent from '../../src/components/organisms/LocationContent/LocationContent.jsx'

export default function LocationPage() {
  // 루트 레이아웃의 KakaoMapProvider에서 상태 가져오기
  const { kakaoReady, kakaoFailed } = useKakaoMap()
  
  return <LocationContent kakaoReady={kakaoReady} kakaoFailed={kakaoFailed} />
}
