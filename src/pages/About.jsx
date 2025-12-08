import React, { useState, useEffect } from 'react'
import { aboutInfo, facilitySlides } from '../data/facilityData.js'
import EmptyState from '../components/molecules/EmptyState/EmptyState.jsx'
import styles from './About.module.css'

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // 데이터 없으면 EmptyState
  if (!aboutInfo || !facilitySlides || facilitySlides.length === 0) {
    return <EmptyState />
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % facilitySlides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.container}>
      {/* 소개 섹션 */}
      <section className={styles.introSection}>
        <h1 className={styles.title}>{aboutInfo.title}</h1>
        <p className={styles.subtitle}>{aboutInfo.subtitle}</p>
        <p className={styles.description}>{aboutInfo.description}</p>
      </section>

      {/* 특징 */}
      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>주요 특징</h2>
        <div className={styles.featuresGrid}>
          {aboutInfo.features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 시설 사진 */}
      <section className={styles.facilitySection}>
        <h2 className={styles.sectionTitle}>내부 시설</h2>
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
                <div className={styles.slideCaption}>
                  {slide.title}
                </div>
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
      </section>
    </div>
  )
}

export default About