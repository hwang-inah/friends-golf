import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { eventsData } from '../../data/eventsData.js'
import styles from './Event.module.css'

const Event = () => {
  const [filter, setFilter] = useState('all') // 'all', 'active', 'ended'
  const navigate = useNavigate()
  
  const filteredEvents = eventsData.filter(event => {
    if (filter === 'all') return true
    return event.status === filter
  })

  const formatDate = (dateStr) => {
    return dateStr.replace(/-/g, '.')
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>이벤트</h1>

      {/* 필터 */}
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

      {/* 이벤트 목록 */}
      <div className={styles.grid}>
        {filteredEvents.map((event) => (
          <div key={event.id} className={styles.eventCard} onClick={() => navigate(`/event/${event.id}`)}>
            <div className={styles.imageWrapper}>
              <img src={event.image} alt={event.title} />
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

export default Event