'use client'

import React from 'react'
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation.js'
import { useKakaoMap } from '../../../../contexts/KakaoMapContext.jsx'
import FacilitySlider from '../../FacilitySlider/FacilitySlider.jsx'
import LocationContent from '../../LocationContent/LocationContent.jsx'
import styles from './FacilityLocationSection.module.css'

const FacilityLocationSection = () => {
  const { isVisible, elementRef } = useScrollAnimation(0.2)
  const { kakaoReady, kakaoFailed } = useKakaoMap()

  return (
    <section 
      ref={elementRef}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        {/* 좌측: 시설 슬라이더 */}
        <div className={styles.facilityWrapper}>
          <FacilitySlider compact={true} showTitle={false} />
        </div>

        {/* 우측: 오시는 길 */}
        <div className={styles.locationWrapper}>
          <LocationContent 
            compact={true} 
            showParking={false} 
            showTitle={false}
            kakaoReady={kakaoReady}
            kakaoFailed={kakaoFailed}
          />
        </div>
      </div>
    </section>
  )
}

export default FacilityLocationSection