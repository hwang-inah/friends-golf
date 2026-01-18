// Server Component: Supabase에서 이벤트 상세 데이터를 가져옵니다
import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getEvents, getEventById } from '../../../src/lib/supabase-data.js'
import { formatDate } from '../../../src/utils/date.js'
import EventDetailNav from '../../../src/components/organisms/EventDetailNav/EventDetailNav.jsx'
import styles from '../EventDetail.module.css'

export const dynamic = 'force-dynamic'

export default async function EventDetailPage({ params }) {
  // Next.js 16에서 params는 Promise이므로 await 사용
  const { id } = await params
  const eventId = parseInt(id)
  
  // 현재 이벤트와 전체 이벤트 목록 가져오기
  const [event, allEvents] = await Promise.all([
    getEventById(eventId),
    getEvents()
  ])

  if (!event) {
    return (
      <div className={styles.container}>
        <p className={styles.notFound}>이벤트를 찾을 수 없습니다.</p>
        <Link href="/event" className={styles.backBtn}>
          목록으로
        </Link>
      </div>
    )
  }

  // 이전/다음 이벤트 찾기
  const currentIndex = allEvents.findIndex(e => e.id === eventId)
  const prevEvent = currentIndex > 0 ? allEvents[currentIndex - 1] : null
  const nextEvent = currentIndex < allEvents.length - 1 ? allEvents[currentIndex + 1] : null

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/event" className={styles.backBtn}>
          ← 목록으로
        </Link>
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

      <EventDetailNav prevEvent={prevEvent} nextEvent={nextEvent} />
    </div>
  )
}
