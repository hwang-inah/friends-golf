import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePros } from '../../../../hooks/usePros.js'
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation.js'
import styles from './ProsSection.module.css'

const ProsSection = () => {
  const { pros, loading, error } = usePros()
  const [currentIndex, setCurrentIndex] = useState(0)
  const { isVisible, elementRef } = useScrollAnimation(0.2)
  const navigate = useNavigate()

  // pros 목록 바뀌면 인덱스 초기화
  useEffect(() => {
    if (pros && pros.length > 0) {
      setCurrentIndex(0)
    }
  }, [pros?.length])

  // 에러 발생 시에만 숨김 (로딩 중에는 보여줌)
  if (error) {
    console.error('ProsSection error:', error)
    return null
  }

  // 데이터가 없으면 숨김
  if (!loading && (!pros || pros.length === 0)) {
    return null
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + pros.length) % pros.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % pros.length)
  }

  const handleImageClick = () => {
    navigate('/pros')
  }

  // 로딩 중이면 플레이스홀더 표시
  if (loading || !pros || pros.length === 0) {
    return (
      <section 
        ref={elementRef}
        className={`${styles.section} ${isVisible ? styles.visible : ''}`}
      >
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <div className={styles.imagePlaceholder}>
                로딩 중...
              </div>
            </div>
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

  const currentPro = pros[currentIndex]

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
            <img 
              src={currentPro.image} 
              alt={currentPro.name}
              className={styles.image}
              loading="lazy"
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