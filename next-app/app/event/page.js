'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { eventsData } from '../../src/data/eventsData.js'
import { formatDate } from '../../src/utils/date.js'
import styles from './Event.module.css'

export default function EventPage() {
  const [filter, setFilter] = useState('all')
  const router = useRouter()
  
  const filteredEvents = eventsData.filter(event => {
    if (filter === 'all') return true
    return event.status === filter
  })

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>이벤트</h1>

      <div className={styles.filters}>
        <button
          className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
          onClick={() => setFilter('all')}
        >
          전체
        </button>
        <button
          className={`${styles.filterBtn} ${filter === 'active' ? styles.active : ''}`}
          onClick={() => setFilter('active')}
        >
          진행중
        </button>
        <button
          className={`${styles.filterBtn} ${filter === 'ended' ? styles.active : ''}`}
          onClick={() => setFilter('ended')}
        >
          종료
        </button>
      </div>

      <div className={styles.grid}>
        {filteredEvents.map((event) => (
          <div key={event.id} className={styles.eventCard} onClick={() => router.push(`/event/${event.id}`)}>
            <div className={styles.imageWrapper}>
              <Image 
                src={event.image} 
                alt={event.title}
                width={400}
                height={250}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              {event.status === 'ended' && (
                <div className={styles.endedBadge}>종료</div>
              )}
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{event.title}</h3>
              <p className={styles.description}>{event.description}</p>
              <p className={styles.period}>
                {formatDate(event.startDate)} ~ {formatDate(event.endDate)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className={styles.empty}>
          해당하는 이벤트가 없습니다.
        </div>
      )}
    </div>
  )
}
