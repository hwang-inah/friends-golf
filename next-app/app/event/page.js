// Server Component: Supabase에서 이벤트 데이터를 가져옵니다
import { getEvents } from '../../src/lib/supabase-data.js'
import EventFilteredList from '../../src/components/organisms/EventFilteredList/EventFilteredList.jsx'
import styles from './Event.module.css'

export const dynamic = 'force-dynamic'

export default async function EventPage() {
  const events = await getEvents()

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>이벤트</h1>
      <EventFilteredList events={events} />
    </div>
  )
}
