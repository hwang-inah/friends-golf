import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { eventsData } from '../../data/eventsData.js'
import styles from './EventDetail.module.css'

const EventDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const currentIndex = eventsData.findIndex(e => e.id === parseInt(id))
  const event = eventsData[currentIndex]

  if (!event) {
    return (
      <div className={styles.container}>
        <p className={styles.notFound}>이벤트를 찾을 수 없습니다.</p>
        <button onClick={() => navigate('/event')} className={styles.backBtn}>
          목록으로
        </button>
      </div>
    )
  }

  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < eventsData.length - 1

  const handlePrev = () => {
    if (hasPrev) {
      navigate(`/event/${eventsData[currentIndex - 1].id}`)
    }
  }

  const handleNext = () => {
    if (hasNext) {
      navigate(`/event/${eventsData[currentIndex + 1].id}`)
    }
  }

  const formatDate = (dateStr) => {
    return dateStr.replace(/-/g, '.')
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={() => navigate('/event')} className={styles.backBtn}>
          ← 목록으로
        </button>
        <h1 className={styles.title}>{event.title}</h1>
        <p className={styles.period}>
          {formatDate(event.startDate)} ~ {formatDate(event.endDate)}
        </p>
      </div>

      <div className={styles.imageContainer}>
        <img src={event.image} alt={event.title} />
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

export default EventDetail