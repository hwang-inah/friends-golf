'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { eventsData } from '../../../src/data/eventsData.js'
import styles from '../EventDetail.module.css'

export default function EventDetailPage({ params }) {
  const router = useRouter()
  const id = params?.id
  
  const currentIndex = eventsData.findIndex(e => e.id === parseInt(id))
  const event = eventsData[currentIndex]

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

  const formatDate = (dateStr) => {
    return dateStr.replace(/-/g, '.')
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
