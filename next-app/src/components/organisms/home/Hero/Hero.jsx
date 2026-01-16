'use client'

import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      
      <div className={styles.content}>
        <h1 className={styles.title}>
          프렌즈 프리미엄 <br className={styles.mobileBr} /> 골프연습장
          <span className={styles.subtitle}>신불당점</span>
        </h1>
        <p className={styles.tagline}>
          골프가 즐거워지는 순간.
        </p>
        
        <button 
          className={styles.scrollBtn}
          onClick={scrollToContent}
          style={{ opacity: scrollY > 50 ? 0 : 1 }}
        >
          <span>SCROLL DOWN</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14m0 0l7-7m-7 7l-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Hero