import React from 'react'
import { facilitySlides } from '../data/facilityData.js'
import FacilitySlider from '../components/organisms/FacilitySlider/FacilitySlider.jsx'
import EmptyState from '../components/molecules/EmptyState/EmptyState.jsx'
import styles from './About.module.css'

const About = () => {
  // 데이터 없으면 EmptyState
  if (!facilitySlides || facilitySlides.length === 0) {
    return <EmptyState />
  }

  return (
    <div className={styles.container}>
      {/* 소개 섹션 */}
      <section className={styles.introSection}>
        <h1 className={styles.title}>프렌즈프리미엄 골프연습장 신불당점</h1>
        <p className={styles.subtitle}>당신의 골프 라이프를 완성하는 프리미엄 공간</p>
        <p className={styles.description}>
          천안 신불당에 위치한 프렌즈프리미엄 골프연습장은{'\n'}
          프라이빗한 타석과 쾌적한 환경을 갖춘 프리미엄 골프 연습 공간입니다.{'\n\n'}
          전문 프로의 체계적인 레슨과 함께{'\n'}
          초보자부터 상급자까지 모든 레벨의 골퍼들이{'\n'}
          편안하게 실력을 향상시킬 수 있습니다.
        </p>
      </section>

      {/* 특징 */}
      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>주요 특징</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🏌️‍♂️</div>
            <h3 className={styles.featureTitle}>프리미엄 타석</h3>
            <p className={styles.featureDescription}>더 집중할 수 있는 프라이빗 <br />개인 타석 운영</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>👨‍🏫</div>
            <h3 className={styles.featureTitle}>전문 프로 레슨</h3>
            <p className={styles.featureDescription}>10년 이상 경력의 프로가 <br />책임 지도</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>👦</div>
            <h3 className={styles.featureTitle}>키즈 맞춤 레슨</h3>
            <p className={styles.featureDescription}>성장 단계에 맞춘 <br />체계적인 키즈 프로그램</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>☕</div>
            <h3 className={styles.featureTitle}>쾌적한 시설</h3>
            <p className={styles.featureDescription}>휴식과 여유까지 고려한 <br />편안한 환경</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⏰</div>
            <h3 className={styles.featureTitle}>연중무휴</h3>
            <p className={styles.featureDescription}>평일은 하루 종일, <br />주말도 여유롭게</p>
          </div>
        </div>
      </section>

      {/* 시설 사진 */}
      <section className={styles.facilitySection}>
        <FacilitySlider />
      </section>
    </div>
  )
}

export default About