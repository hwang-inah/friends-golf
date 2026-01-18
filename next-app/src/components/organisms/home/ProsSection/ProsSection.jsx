'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { usePros } from '../../../../hooks/usePros.js'
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation.js'
import EmptyState from '../../../../components/molecules/EmptyState/EmptyState.jsx'
import styles from './ProsSection.module.css'

const ProsSection = ({ prosData }) => {
  // props로 데이터를 받으면 props 사용, 없으면 훅 사용
  const hookResult = usePros()
  const pros = prosData || hookResult.pros
  const loading = prosData ? false : hookResult.loading
  const error = prosData ? null : hookResult.error
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const { isVisible, elementRef } = useScrollAnimation(0.2)
  const router = useRouter()

  // pros 목록 바뀌면 인덱스 초기화
  useEffect(() => {
    if (pros && pros.length > 0) {
      setCurrentIndex(0)
    }
  }, [pros?.length])

  // 에러 발생 시 사용자에게 표시
  if (error) {
    return (
      <section 
        ref={elementRef}
        className={`${styles.section} ${isVisible ? styles.visible : ''}`}
      >
        <EmptyState message={`프로진 정보를 불러오는 중 오류가 발생했습니다: ${error}`} />
      </section>
    )
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
    router.push('/pros')
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
            <Image 
              src={currentPro.image} 
              alt={currentPro.name}
              width={500}
              height={500}
              className={styles.image}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
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