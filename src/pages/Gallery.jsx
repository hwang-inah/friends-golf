import React from 'react'
import { useState } from 'react'
import { beforeAfterGallery, normalGallery } from '../data/galleryData.js'
import styles from './Gallery.module.css'

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('beforeAfter') // 'beforeAfter' or 'normal'

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
      )}

      {/* 일반 갤러리 */}
      {activeTab === 'normal' && (
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
      )}
    </div>
  )
}

export default Gallery