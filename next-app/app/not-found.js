import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>페이지를 찾을 수 없습니다</h2>
        <p className={styles.message}>
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.button}>
            홈으로 이동
          </Link>
          <Link href="/about" className={styles.link}>
            소개 페이지
          </Link>
        </div>
      </div>
    </div>
  )
}
