import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation.js'
import { beforeAfterGallery } from '../../../../data/galleryData.js'
import styles from './GallerySection.module.css'

const GallerySection = () => {
  const navigate = useNavigate()
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
          onClick={() => navigate('/gallery')}
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
            onClick={() => navigate('/gallery')}
          >
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
            <p className={styles.description}>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GallerySection