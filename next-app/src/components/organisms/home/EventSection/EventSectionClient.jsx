'use client'

import React, { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation.js'
import { getEventStatus } from '../../../../utils/event.js'
import styles from './EventSection.module.css'

/**
 * EventSection UI 컴포넌트 (Client Component)
 * 데이터는 서버에서 받아서 props로 전달받음
 * @param {Array} events - 서버에서 가져온 이벤트 배열
 */
const EventSectionClient = ({ events = [] }) => {
  const router = useRouter()
  const { isVisible, elementRef } = useScrollAnimation(0.2)
  
  // 날짜 기준으로 동적으로 이벤트 상태 계산하고 가장 최신 이벤트 선택
  // 진행중인 이벤트가 있으면 진행중 이벤트 중 최신, 없으면 종료된 이벤트 중 가장 최근 것 선택
  const latestEvent = useMemo(() => {
    if (!events || events.length === 0) return null

    const eventsWithStatus = events.map(event => ({
      ...event,
      status: getEventStatus(event.startDate, event.endDate)
    }))
    
    // 진행중인 이벤트 중에서 가장 최신 이벤트 선택
    const activeEvents = eventsWithStatus.filter(e => e.status === 'active')
    if (activeEvents.length > 0) {
      // 진행중인 이벤트가 있으면 시작 날짜가 가장 최근인 것 선택
      return activeEvents.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))[0]
    }
    
    // 진행중인 이벤트가 없으면 종료된 이벤트 중 종료일이 가장 최근인 것 선택
    const endedEvents = eventsWithStatus.filter(e => e.status === 'ended')
    if (endedEvents.length > 0) {
      return endedEvents.sort((a, b) => new Date(b.endDate) - new Date(a.endDate))[0]
    }
    
    // 이벤트가 아예 없으면 모든 이벤트 중 종료일이 가장 최근인 것 선택
    return eventsWithStatus.sort((a, b) => new Date(b.endDate) - new Date(a.endDate))[0]
  }, [events])

  // 이벤트가 없으면 섹션 숨김
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

export default EventSectionClient
