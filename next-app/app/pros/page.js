'use client'

import { usePros } from '../../src/hooks/usePros.js'
import ProCard from '../../src/components/organisms/ProCard/ProCard.jsx'
import EmptyState from '../../src/components/molecules/EmptyState/EmptyState.jsx'
import styles from './Pros.module.css'

const LoadingSpinner = () => (
  <div className={styles.loading}>데이터 로딩 중...</div>
)

export default function ProsPage() {
  const { pros, loading, error } = usePros()

  if (loading) {
    return (
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>프로진 소개</h1>
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <EmptyState
        message={`데이터를 불러오는 중 오류가 발생했습니다: ${error}`}
      />
    )
  }

  if (!pros || pros.length === 0) {
    return <EmptyState message="등록된 프로가 없습니다." />
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>프로진 소개</h1>
      <p className={styles.subtitle}>
        전문 프로들이 여러분의 골프 실력 향상을 도와드립니다
      </p>

      <div className={styles.proList}>
        {pros.map((pro) => (
          <ProCard key={pro.id} pro={pro} />
        ))}
      </div>
    </div>
  )
}
