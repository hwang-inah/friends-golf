import React, { useState } from 'react'
import { beforeAfterGallery, normalGallery } from '../data/galleryData.js'
import EmptyState from '../components/molecules/EmptyState/EmptyState.jsx'
import styles from './Gallery.module.css'

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('beforeAfter')

  // 데이터 없으면 EmptyState
  const hasBeforeAfter = beforeAfterGallery && beforeAfterGallery.length > 0
  const hasNormal = normalGallery && normalGallery.length > 0

  // 둘 다 없으면 전체 EmptyState
  if (!hasBeforeAfter && !hasNormal) {
    return <EmptyState message="갤러리 페이지 준비 중입니다" />
  }
    
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>갤러리</h1>

      {/* 탭 */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'beforeAfter' ? styles.active : ''}`}
          onClick={() => setActiveTab('beforeAfter')}
        >
          Before & After
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'normal' ? styles.active : ''}`}
          onClick={() => setActiveTab('normal')}
        >
          일반 갤러리
        </button>
      </div>

      {/* Before & After */}
      {activeTab === 'beforeAfter' && (
        <>
          {hasBeforeAfter ? (
            <div className={styles.grid}>
              {beforeAfterGallery.map((item) => (
                <div key={item.id} className={styles.comparisonCard}>
                  <div className={styles.imageWrapper}>
                    <div className={styles.beforeSection}>
                      <span className={styles.label}>Before</span>
                      <img src={item.before} alt="Before" />
                    </div>
                    <div className={styles.afterSection}>
                      <span className={styles.label}>After</span>
                      <img src={item.after} alt="After" />
                    </div>
                  </div>
                  <div className={styles.cardInfo}>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.date}>{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyMessage}>
              <p>Before & After 갤러리가 준비 중입니다</p>
            </div>
          )}
        </>
      )}

      {/* 일반 갤러리 */}
      {activeTab === 'normal' && (
        <>
          {hasNormal ? (
            <div className={styles.normalGrid}>
              {normalGallery.map((item) => (
                <div key={item.id} className={styles.normalCard}>
                  <img src={item.image} alt={item.title} />
                  <div className={styles.cardInfo}>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.date}>{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyMessage}>
              <p>일반 갤러리가 준비 중입니다</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Gallery