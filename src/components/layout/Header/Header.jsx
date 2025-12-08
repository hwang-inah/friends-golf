import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h1><span>신불당점</span>FRIENDS PREMIUM GOLF</h1>
      </Link>
      
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

    </header>
  )
}

export default Header