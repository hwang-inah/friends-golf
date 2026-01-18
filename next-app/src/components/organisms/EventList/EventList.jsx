'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { formatDate } from '../../../utils/date.js'
import styles from './EventList.module.css'

/**
 * 이벤트 목록 표시 컴포넌트
 * @param {Array} events - 표시할 이벤트 배열
 */
export default function EventList({ events }) {
  const router = useRouter()

  if (!events || events.length === 0) {
    return (
      <div className={styles.empty}>
        해당하는 이벤트가 없습니다.
      </div>
    )
  }

  return (
    <div className={styles.grid}>
      {events.map((event) => (
        <div 
          key={event.id} 
          className={styles.eventCard} 
          onClick={() => router.push(`/event/${event.id}`)}
        >
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
  )
}
