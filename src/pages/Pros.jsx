import React from 'react'
import { prosData } from '../data/prosData.js'
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
        KPGA 자격을 갖춘 전문 프로들이 여러분의 골프 실력 향상을 도와드립니다
      </p>

      <div className={styles.proList}>
        {prosData.map((pro) => (
          <div key={pro.id} className={styles.proCard}>
            <div className={styles.imageSection}>
              <img src={pro.image} alt={pro.name} />
            </div>
            <div className={styles.infoSection}>
              <div className={styles.header}>
                <h2 className={styles.name}>{pro.name}</h2>
                <span className={styles.title}>{pro.title}</span>
              </div>
              <p className={styles.introduction}>{pro.introduction}</p>
              <div className={styles.career}>
                <h3>경력</h3>
                <ul>
                  {pro.career.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pros