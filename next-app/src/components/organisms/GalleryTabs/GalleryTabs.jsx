'use client'

import { useState } from 'react'
import Image from 'next/image'
import { formatDate } from '../../../utils/date.js'
import EmptyState from '../../molecules/EmptyState/EmptyState.jsx'
import styles from './GalleryTabs.module.css'

/**
 * 갤러리 탭 컴포넌트 (Client Component)
 * @param {Array} beforeAfterGallery - Before & After 갤러리 배열
 * @param {Array} normalGallery - 일반 갤러리 배열
 */
export default function GalleryTabs({ beforeAfterGallery, normalGallery }) {
  const [activeTab, setActiveTab] = useState('beforeAfter')

  const hasBeforeAfter = beforeAfterGallery && beforeAfterGallery.length > 0
  const hasNormal = normalGallery && normalGallery.length > 0

  if (!hasBeforeAfter && !hasNormal) {
    return <EmptyState message="갤러리 페이지 준비 중입니다" />
  }
    
  return (
    <>
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

      {activeTab === 'beforeAfter' && (
        <>
          {hasBeforeAfter ? (
            <div className={styles.grid}>
              {beforeAfterGallery.map((item) => (
                <div key={item.id} className={styles.comparisonCard}>
                  <div className={styles.imageWrapper}>
                    <div className={styles.beforeSection}>
                      <span className={styles.label}>Before</span>
                      <Image 
                        src={item.before} 
                        alt="Before"
                        width={300}
                        height={300}
                        style={{ objectFit: 'cover', width: '100%' }}
                        className={styles.galleryImage}
                      />
                    </div>
                    <div className={styles.afterSection}>
                      <span className={styles.label}>After</span>
                      <Image 
                        src={item.after} 
                        alt="After"
                        width={300}
                        height={300}
                        style={{ objectFit: 'cover', width: '100%' }}
                        className={styles.galleryImage}
                      />
                    </div>
                  </div>
                  <div className={styles.cardInfo}>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.date}>{formatDate(item.date)}</p>
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

      {activeTab === 'normal' && (
        <>
          {hasNormal ? (
            <div className={styles.normalGrid}>
              {normalGallery.map((item) => (
                <div key={item.id} className={styles.normalCard}>
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    width={400}
                    height={400}
                    style={{ objectFit: 'cover', width: '100%' }}
                    className={styles.galleryImage}
                  />
                  <div className={styles.cardInfo}>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.date}>{formatDate(item.date)}</p>
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
    </>
  )
}
