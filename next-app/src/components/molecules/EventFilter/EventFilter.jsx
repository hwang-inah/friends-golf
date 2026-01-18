'use client'

import { useState } from 'react'
import styles from './EventFilter.module.css'

/**
 * 이벤트 필터 UI 컴포넌트
 * @param {Array} events - 이벤트 배열
 * @param {Function} onFilterChange - 필터 변경 시 호출되는 콜백 (filteredEvents를 인자로 받음)
 */
export default function EventFilter({ events, onFilterChange }) {
  const [filter, setFilter] = useState('all')

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
    
    // 필터링된 이벤트 계산
    const filteredEvents = events.filter(event => {
      if (newFilter === 'all') return true
      return event.status === newFilter
    })
    
    onFilterChange(filteredEvents)
  }

  return (
    <div className={styles.filters}>
      <button
        className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
        onClick={() => handleFilterChange('all')}
      >
        전체
      </button>
      <button
        className={`${styles.filterBtn} ${filter === 'active' ? styles.active : ''}`}
        onClick={() => handleFilterChange('active')}
      >
        진행중
      </button>
      <button
        className={`${styles.filterBtn} ${filter === 'ended' ? styles.active : ''}`}
        onClick={() => handleFilterChange('ended')}
      >
        종료
      </button>
    </div>
  )
}
