'use client'

import { useState } from 'react'
import Link from 'next/link'
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
      <Link href="/" className={styles.logo}>
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
        <Link href="/about" className={`${styles.navItem} ${styles.shineEffect}`}>
          연습장 소개
        </Link>
        <Link href="/pros" className={`${styles.navItem} ${styles.shineEffect}`}>
          프로진
        </Link>
        <Link href="/products" className={`${styles.navItem} ${styles.shineEffect}`}>
          상품안내
        </Link>

        {/* 게시판 + 드롭다운 */}
        <div className={styles.dropdownWrapper}>
          <span className={`${styles.navItem} ${styles.shineEffect}`}>
            게시판
          </span>
          <div className={styles.dropdownMenu}>
            <Link href="/notice" className={styles.dropdownItem}>공지사항</Link>
            <Link href="/event" className={styles.dropdownItem}>이벤트</Link>
            <Link href="/gallery" className={styles.dropdownItem}>갤러리</Link>
          </div>
        </div>

        <Link href="/location" className={`${styles.navItem} ${styles.shineEffect}`}>
          오시는 길
        </Link>
      </nav>

      {/* 모바일 메뉴 */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <button className={styles.closeBtn} onClick={closeMenu}>✕</button>
        <nav className={styles.mobileNav}>
          <Link href="/about" onClick={closeMenu}>연습장 소개</Link>
          <Link href="/pros" onClick={closeMenu}>프로진</Link>
          <Link href="/products" onClick={closeMenu}>상품안내</Link>
          <Link href="/notice" onClick={closeMenu}>공지사항</Link>
          <Link href="/event" onClick={closeMenu}>이벤트</Link>
          <Link href="/gallery" onClick={closeMenu}>갤러리</Link>
          <Link href="/location" onClick={closeMenu}>오시는 길</Link>
        </nav>
      </div>

      {/* 오버레이 */}
      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  )
}

export default Header