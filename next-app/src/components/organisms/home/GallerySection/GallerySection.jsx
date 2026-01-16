'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation.js'
import { beforeAfterGallery } from '../../../../data/galleryData.js'
import styles from './GallerySection.module.css'

const GallerySection = () => {
  const router = useRouter()
  const { isVisible, elementRef } = useScrollAnimation(0.2)

  // 데이터 없으면 섹션 숨김
  if (!beforeAfterGallery || beforeAfterGallery.length === 0) {
    return null
  }

  const recentItems = beforeAfterGallery.slice(0, 3)
  
  return (
    <section 
      ref={elementRef}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>레슨 Before & After</h2>
        <button 
          onClick={() => router.push('/gallery')}
          className={styles.moreBtn}
        >
          더보기 →
        </button>
      </div>

      <div className={styles.grid}>
        {recentItems.map((item) => (
          <div 
            key={item.id}
            className={styles.comparisonCard}
            onClick={() => router.push('/gallery')}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.beforeSection}>
                <span className={styles.label}>Before</span>
                <Image 
                  src={item.before} 
                  alt="Before"
                  width={300}
                  height={300}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className={styles.afterSection}>
                <span className={styles.label}>After</span>
                <Image 
                  src={item.after} 
                  alt="After"
                  width={300}
                  height={300}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <p className={styles.description}>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GallerySection