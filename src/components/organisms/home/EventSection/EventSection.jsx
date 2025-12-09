import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation.js'
import { eventsData } from '../../../../data/eventsData.js'
import styles from './EventSection.module.css'

const EventSection = () => {
  const navigate = useNavigate()
  const { isVisible, elementRef } = useScrollAnimation(0.2)
  
  // 진행중인 최신 이벤트 1개
  const latestEvent = eventsData.find(e => e.status === 'active')

  // 이벤트 없으면 섹션 숨김
  if (!latestEvent) {
    return null
  }

  return (
    <section 
      ref={elementRef}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <h2 className={styles.title}>이벤트 보러가기</h2>
      
      <div className={styles.eventCard} onClick={() => navigate(`/event/${latestEvent.id}`)}>
        <img 
          src={latestEvent.image} 
          alt={latestEvent.title}
          className={styles.eventImage}
        />
        <button className={styles.detailBtn}>
          자세히 보기
        </button>
      </div>
    </section>
  )
}

export default EventSection