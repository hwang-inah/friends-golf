'use client'

import { useState, useEffect } from 'react'
import { facilitySlides } from '../../../data/facilityData.js'
import styles from './FacilitySlider.module.css'

const FacilitySlider = ({ compact = false, showTitle = true, title = '내부 시설' }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!facilitySlides || facilitySlides.length === 0) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % facilitySlides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  if (!facilitySlides || facilitySlides.length === 0) {
    return null
  }

  return (
    <div className={compact ? styles.compactContainer : styles.container}>
      {showTitle && <h2 className={styles.sectionTitle}>{title}</h2>}
      
      <div className={styles.sliderContainer}>
        <div className={styles.sliderWrapper}>
          {facilitySlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${styles.slide} ${
                index === currentIndex ? styles.active : ''
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
            </div>
          ))}
        </div>
        <div className={styles.indicators}>
          {facilitySlides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.active : ''
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`슬라이드 ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FacilitySlider