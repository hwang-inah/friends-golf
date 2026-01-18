'use client'

import React, { useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation.js'
import { supabase } from '../../../../lib/supabase-client.js'
import { getEventStatus } from '../../../../utils/event.js'
import styles from './EventSection.module.css'

const EventSection = () => {
  const router = useRouter()
  const { isVisible, elementRef } = useScrollAnimation(0.2)
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .order('start_date', { ascending: false })

        if (error) {
          console.error('이벤트 불러오기 오류:', error)
          setEvents([])
        } else {
          const formattedEvents = (data || []).map(event => ({
            id: event.id,
            title: event.title,
            description: event.description,
            image: event.image_url,
            startDate: event.start_date,
            endDate: event.end_date,
          }))
          setEvents(formattedEvents)
        }
      } catch (err) {
        console.error('이벤트 불러오기 예외:', err)
        setEvents([])
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])
  
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

  // 로딩 중이거나 이벤트가 없으면 섹션 숨김
  if (loading || !latestEvent) {
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