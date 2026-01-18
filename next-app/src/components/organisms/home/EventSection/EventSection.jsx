'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation.js'
import { eventsData } from '../../../../data/eventsData.js'
import styles from './EventSection.module.css'

const EventSection = () => {
  const router = useRouter()
  const { isVisible, elementRef } = useScrollAnimation(0.2)
  
  // 진행중인 이벤트 중에서 가장 최신 이벤트 선택
  // 시작 날짜가 가장 최근인 것을 기준으로 선택
  const activeEvents = eventsData.filter(e => e.status === 'active')
  const latestEvent = activeEvents.length > 0 
    ? activeEvents.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))[0]
    : null

  // 이벤트 없으면 섹션 숨김
  if (!latestEvent) {
    return null
  }

  return (
    <section 
      ref={elementRef}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <h2 className={styles.title}>▼ 이벤트 보러가기 ▼</h2>
      
      <div className={styles.eventCard} onClick={() => router.push(`/event/${latestEvent.id}`)}>
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