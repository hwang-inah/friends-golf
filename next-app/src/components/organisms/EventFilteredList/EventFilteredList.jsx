'use client'

import { useState, useMemo } from 'react'
import EventFilter from '../../molecules/EventFilter/EventFilter.jsx'
import EventList from '../EventList/EventList.jsx'
import { getEventStatus } from '../../../utils/event.js'

/**
 * 이벤트 필터링 및 목록 표시 컴포넌트 (Client Component)
 * @param {Array} events - 서버에서 가져온 이벤트 배열
 */
export default function EventFilteredList({ events }) {
  // 이벤트에 상태 추가
  const eventsWithStatus = useMemo(() => {
    return events.map(event => ({
      ...event,
      status: getEventStatus(event.startDate, event.endDate)
    }))
  }, [events])

  const [filteredEvents, setFilteredEvents] = useState(eventsWithStatus)

  const handleFilterChange = (filtered) => {
    setFilteredEvents(filtered)
  }

  return (
    <>
      <EventFilter events={eventsWithStatus} onFilterChange={handleFilterChange} />
      <EventList events={filteredEvents} />
    </>
  )
}
