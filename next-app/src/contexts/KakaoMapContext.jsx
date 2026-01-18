'use client'

import { createContext, useContext, useState } from 'react'
import Script from 'next/script'

const KakaoMapContext = createContext({
  kakaoReady: false,
  kakaoFailed: false,
})

export const useKakaoMap = () => {
  const context = useContext(KakaoMapContext)
  if (!context) {
    throw new Error('useKakaoMap must be used within KakaoMapProvider')
  }
  return context
}

export const KakaoMapProvider = ({ children }) => {
  const [kakaoReady, setKakaoReady] = useState(false)
  const [kakaoFailed, setKakaoFailed] = useState(false)

  // 환경변수 검증
  const kakaoMapKey = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY

  const handleScriptLoad = () => {
    if (typeof window !== 'undefined' && window.kakao && window.kakao.maps) {
      console.log('[카카오맵] 스크립트 로드 완료')
      setKakaoReady(true)
    } else {
      console.warn('[카카오맵] 스크립트는 로드되었으나 window.kakao가 초기화되지 않았습니다.')
      setKakaoFailed(true)
    }
  }

  const handleScriptError = () => {
    console.error('[카카오맵] 스크립트 로드 실패')
    console.error('[카카오맵] Network 탭에서 sdk.js 요청 상태를 확인하세요.')
    setKakaoFailed(true)
  }

  // 환경변수가 없으면 스크립트를 로드하지 않고 에러 상태만 제공
  if (!kakaoMapKey) {
    console.error('[카카오맵] 환경변수 NEXT_PUBLIC_KAKAO_MAP_API_KEY가 설정되지 않았습니다.')
    console.error('[카카오맵] .env.local 파일에 NEXT_PUBLIC_KAKAO_MAP_API_KEY를 추가하고 dev 서버를 재시작하세요.')
    
    return (
      <KakaoMapContext.Provider value={{ kakaoReady: false, kakaoFailed: true }}>
        {children}
      </KakaoMapContext.Provider>
    )
  }

  return (
    <KakaoMapContext.Provider value={{ kakaoReady, kakaoFailed }}>
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoMapKey}&autoload=false`}
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
        onError={handleScriptError}
      />
      {children}
    </KakaoMapContext.Provider>
  )
}
