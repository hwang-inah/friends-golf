import React from 'react'
import styles from './EmptyState.module.css'

const EmptyState = ({ message = '페이지 준비 중입니다' }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.icon}>⚠️</div>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  )
}

export default EmptyState