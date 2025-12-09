import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { prosData } from '../../../../data/prosData.js'
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation.js'
import styles from './ProsSection.module.css'

const ProsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { isVisible, elementRef } = useScrollAnimation(0.2)
  const navigate = useNavigate()

  if (!prosData || prosData.length === 0) {
    return null
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + prosData.length) % prosData.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % prosData.length)
  }

  const handleImageClick = () => {
    navigate('/pros')
  }

  const currentPro = prosData[currentIndex]

  return (
    <section 
      ref={elementRef}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <button 
            className={styles.arrowBtn}
            onClick={handlePrev}
            aria-label="이전 프로"
          >
            ‹
          </button>
          
          <div className={styles.imageContainer} onClick={handleImageClick}>
            {/* Pros 페이지와 동일한 이미지 경로 */}
            <img 
              src={currentPro.image} 
              alt={currentPro.name}
              className={styles.image}
            />
          </div>
          
          <button 
            className={styles.arrowBtn}
            onClick={handleNext}
            aria-label="다음 프로"
          >
            ›
          </button>
        </div>

        <div className={styles.description}>
          <p className={styles.descLine}>아마추어의 고민, 프로는 압니다.</p>
          <p className={styles.descLine}>18년 스윙 데이터와 10년 코칭 경험으로 정확하게.</p>
          <p className={styles.descLine}>프렌즈 프리미엄 골프 신불당점</p>
          <p className={styles.hookLine}>실력은 여기서 성장합니다.</p>
        </div>
      </div>
    </section>
  )
}

export default ProsSection