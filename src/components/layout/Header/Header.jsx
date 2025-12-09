import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h1><span>신불당점</span>FRIENDS PREMIUM GOLF</h1>
      </Link>

      {/* 햄버거 버튼 */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      {/* 데스크톱 네비게이션 */}
      <nav className={styles.nav}>
        <Link to="/about" className={`${styles.navItem} ${styles.shineEffect}`}>
          연습장 소개
        </Link>
        <Link to="/pros" className={`${styles.navItem} ${styles.shineEffect}`}>
          프로진
        </Link>
        <Link to="/products" className={`${styles.navItem} ${styles.shineEffect}`}>
          상품안내
        </Link>

        {/* 게시판 + 드롭다운 */}
        <div className={styles.dropdownWrapper}>
          <span className={`${styles.navItem} ${styles.shineEffect}`}>
            게시판
          </span>
          <div className={styles.dropdownMenu}>
            <Link to="/notice" className={styles.dropdownItem}>공지사항</Link>
            <Link to="/event" className={styles.dropdownItem}>이벤트</Link>
            <Link to="/gallery" className={styles.dropdownItem}>갤러리</Link>
          </div>
        </div>

        <Link to="/location" className={`${styles.navItem} ${styles.shineEffect}`}>
          오시는 길
        </Link>
      </nav>

      {/* 모바일 메뉴 */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <button className={styles.closeBtn} onClick={closeMenu}>✕</button>
        <nav className={styles.mobileNav}>
          <Link to="/about" onClick={closeMenu}>연습장 소개</Link>
          <Link to="/pros" onClick={closeMenu}>프로진</Link>
          <Link to="/products" onClick={closeMenu}>상품안내</Link>
          <Link to="/notice" onClick={closeMenu}>공지사항</Link>
          <Link to="/event" onClick={closeMenu}>이벤트</Link>
          <Link to="/gallery" onClick={closeMenu}>갤러리</Link>
          <Link to="/location" onClick={closeMenu}>오시는 길</Link>
        </nav>
      </div>

      {/* 오버레이 */}
      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  )
}

export default Header