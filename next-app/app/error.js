'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import styles from './error.module.css'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>오류가 발생했습니다</h1>
        <p className={styles.message}>
          {error?.message || '알 수 없는 오류가 발생했습니다.'}
        </p>
        <div className={styles.actions}>
          <button onClick={reset} className={styles.button}>
            다시 시도
          </button>
          <Link href="/" className={styles.link}>
            홈으로 이동
          </Link>
        </div>
      </div>
    </div>
  )
}
