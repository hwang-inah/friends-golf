import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation.js'
import { eventsData } from '../../../../data/eventsData.js'
import styles from './EventFacilitySection.module.css'

const slides = [
  '/images/facility/facility501.jpg',
  '/images/facility/facility503.jpg',
  '/images/facility/facility402.jpg',
  '/images/facility/facility403.jpg',
  '/images/facility/facility405.jpg'
]

const EventFacilitySection = () => {
  const navigate = useNavigate()
  const { isVisible, elementRef } = useScrollAnimation(0.2)
  const currentMonth = new Date().getMonth() + 1
  
  // 진행중인 이벤트만 표시
  const latestEvent = eventsData.find(e => e.status === 'active')
  
  // 이벤트 없으면 섹션 자체를 숨김
  if (!latestEvent) {
    return null
  }
  
  // 슬라이더 상태
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section 
      ref={elementRef}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        {/* 좌측: 이벤트 */}
        <div className={styles.eventWrapper}>
          <h2 className={styles.sectionTitle}>{currentMonth}월 이벤트</h2>
          <div className={styles.eventCard}>
            <img 
              src={latestEvent.image} 
              alt={latestEvent.title}
              className={styles.eventImage}
            />
            <button 
              className={styles.detailBtn}
              onClick={() => navigate(`/event/${latestEvent.id}`)}
            >
              자세히 보기
            </button>
          </div>
        </div>

        {/* 우측: 시설 슬라이더 */}
        <div className={styles.facilityWrapper}>
          <h2 className={styles.sectionTitle}>내부 시설</h2>
          <div className={styles.sliderContainer}>
            <div className={styles.sliderWrapper}>
              {slides.map((slide, index) => (
                <div
                  key={slide}
                  className={`${styles.slide} ${
                    index === currentIndex ? styles.active : ''
                  }`}
                  style={{ backgroundImage: `url(${slide})` }}
                />
              ))}
            </div>
            <div className={styles.indicators}>
              {slides.map((_, index) => (
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
      </div>
    </section>
  )
}

export default EventFacilitySection