'use client'

import { useRouter } from 'next/navigation'
import styles from './EventDetailNav.module.css'

/**
 * 이벤트 상세 페이지 네비게이션 컴포넌트 (Client Component)
 * @param {Object} prevEvent - 이전 이벤트 객체 (없으면 null)
 * @param {Object} nextEvent - 다음 이벤트 객체 (없으면 null)
 */
export default function EventDetailNav({ prevEvent, nextEvent }) {
  const router = useRouter()

  const handlePrev = () => {
    if (prevEvent) {
      router.push(`/event/${prevEvent.id}`)
    }
  }

  const handleNext = () => {
    if (nextEvent) {
      router.push(`/event/${nextEvent.id}`)
    }
  }

  return (
    <div className={styles.navigation}>
      <button 
        onClick={handlePrev} 
        className={styles.navBtn}
        disabled={!prevEvent}
      >
        ← 이전
      </button>
      <button 
        onClick={handleNext} 
        className={styles.navBtn}
        disabled={!nextEvent}
      >
        다음 →
      </button>
    </div>
  )
}
