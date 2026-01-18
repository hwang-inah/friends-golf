// Server Component: Supabase에서 공지사항 데이터를 가져옵니다
import { getNotices } from '../../src/lib/supabase-data.js'
import NoticeList from '../../src/components/organisms/NoticeList/NoticeList.jsx'
import styles from './Notice.module.css'

export const dynamic = 'force-dynamic'

export default async function NoticePage() {
  const notices = await getNotices()

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>공지사항</h1>
      <NoticeList notices={notices} />
    </div>
  )
}
