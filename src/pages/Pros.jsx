import React from 'react'
import { prosData } from '../data/prosData.js'
import ProCard from '../components/organisms/ProCard/ProCard.jsx'
import EmptyState from '../components/molecules/EmptyState/EmptyState.jsx'
import styles from './Pros.module.css'

const Pros = () => {
  if (!prosData || prosData.length === 0) {
    return <EmptyState />
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>프로진 소개</h1>
      <p className={styles.subtitle}>
        전문 프로들이 여러분의 골프 실력 향상을 도와드립니다
      </p>

      <div className={styles.proList}>
        {prosData.map((pro) => (
          <ProCard key={pro.id} pro={pro} />
        ))}
      </div>
    </div>
  )
}

export default Pros