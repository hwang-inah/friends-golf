'use client'

import { use } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { eventsData } from '../../../src/data/eventsData.js'
import { formatDate } from '../../../src/utils/date.js'
import styles from '../EventDetail.module.css'

export default function EventDetailPage({ params }) {
  const router = useRouter()
  // Next.js 16에서 params는 Promise이므로 use()로 unwrap
  const { id } = use(params)
  
  // find()로 직접 이벤트 객체를 찾음 (더 안전함)
  const eventId = parseInt(id)
  const event = eventsData.find(e => e.id === eventId)

  if (!event) {
    return (
      <div className={styles.container}>
        <p className={styles.notFound}>이벤트를 찾을 수 없습니다.</p>
        <button onClick={() => router.push('/event')} className={styles.backBtn}>
          목록으로
        </button>
      </div>
    )
  }

  // 이벤트를 찾은 후, 이전/다음 이벤트를 위해 인덱스 찾기
  const currentIndex = eventsData.findIndex(e => e.id === eventId)
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < eventsData.length - 1

  const handlePrev = () => {
    if (hasPrev) {
      router.push(`/event/${eventsData[currentIndex - 1].id}`)
    }
  }

  const handleNext = () => {
    if (hasNext) {
      router.push(`/event/${eventsData[currentIndex + 1].id}`)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={() => router.push('/event')} className={styles.backBtn}>
          ← 목록으로
        </button>
        <h1 className={styles.title}>{event.title}</h1>
        <p className={styles.period}>
          {formatDate(event.startDate)} ~ {formatDate(event.endDate)}
        </p>
      </div>

      <div className={styles.imageContainer}>
        <Image 
          src={event.image} 
          alt={event.title}
          width={1200}
          height={600}
          style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
        />
      </div>

      <div className={styles.navigation}>
        <button 
          onClick={handlePrev} 
          className={styles.navBtn}
          disabled={!hasPrev}
        >
          ← 이전
        </button>
        <button 
          onClick={handleNext} 
          className={styles.navBtn}
          disabled={!hasNext}
        >
          다음 →
        </button>
      </div>
    </div>
  )
}
