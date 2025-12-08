import { useState, useEffect } from 'react'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { FaPhoneAlt, FaArrowUp } from 'react-icons/fa'
import styles from './FloatingButtons.module.css'

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleKakaoClick = () => {
    window.open('http://pf.kakao.com/your_channel', '_blank')
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:010-2426-7366'
  }

  return (
    <div>
      <div className={styles.container}>
        <button 
          className={`${styles.btn} ${styles.phoneBtn}`}
          onClick={handlePhoneClick}
          aria-label="전화 문의"
        >
          <FaPhoneAlt />
          <span>전화 문의</span>
        </button>

        <button 
          className={`${styles.btn} ${styles.kakaoBtn}`}
          onClick={handleKakaoClick}
          aria-label="카카오톡 문의"
        >
          <RiKakaoTalkFill />
          <span>카톡 문의</span>
        </button>
      </div>

      {showScrollTop && (
        <div className={styles.scrollToTop}>
          <button 
            className={`${styles.btn} ${styles.scrollTopBtn}`}
            onClick={scrollToTop}
            aria-label="맨 위로"
          >
            <FaArrowUp />
          </button>
        </div>
      )}
    </div>
  )
}

export default FloatingButtons