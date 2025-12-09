import React from 'react'
import { FaInstagram, FaBlog } from 'react-icons/fa'
import { RiKakaoTalkFill } from 'react-icons/ri'
import styles from './Footer.module.css'

const Footer = () => {
  const handleSNSClick = (type) => {
    const urls = {
      instagram: 'https://www.instagram.com/friendsgolf7366',
      blog: 'https://blog.naver.com/th_golf',
      kakao: 'http://pf.kakao.com/your_channel'
    }
    window.open(urls[type], '_blank')
  }

  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.mainContent}>
          <h2 className={styles.logo}>FRIENDS PREMIUM GOLF</h2>
          <div className={styles.companyInfo}>
            <p><strong>프렌즈 프리미엄 골프연습장 신불당점</strong></p>
            <p><span className={styles.miniInfo}>주소</span> 충남 천안시 서북구 불당33길 34 엠타워 5층</p>
            <p><span className={styles.miniInfo}>사업자번호</span> 482-25-01771 <span className={styles.miniInfo}>이메일</span> abbyyourside@naver.com</p>
            <p><span className={styles.miniInfo}>상담·문의</span> 010-2426-7366</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.socialIcons}>
            <button className={styles.instagram} onClick={() => handleSNSClick('instagram')} aria-label="인스타그램">
              <FaInstagram />
            </button>
            <button className={styles.blog} onClick={() => handleSNSClick('blog')} aria-label="네이버 블로그">
              <FaBlog />
            </button>
            <button className={styles.kakao} onClick={() => handleSNSClick('kakao')} aria-label="카카오톡">
              <RiKakaoTalkFill />
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer