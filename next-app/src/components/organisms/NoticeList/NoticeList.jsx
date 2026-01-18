'use client'

import { useState } from 'react'
import Image from 'next/image'
import { formatDate } from '../../../utils/date.js'
import EmptyState from '../../molecules/EmptyState/EmptyState.jsx'
import styles from './NoticeList.module.css'

const ITEMS_PER_PAGE = 10
const PAGES_PER_GROUP = 5

/**
 * 공지사항 목록 컴포넌트 (Client Component)
 * @param {Array} notices - 공지사항 배열
 */
export default function NoticeList({ notices }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [showList, setShowList] = useState(false)

  if (!notices || notices.length === 0) {
    return <EmptyState />
  }

  const latestNotice = notices[0]

  const totalPages = Math.ceil(notices.length / ITEMS_PER_PAGE)
  const currentGroup = Math.ceil(currentPage / PAGES_PER_GROUP)
  const startPage = (currentGroup - 1) * PAGES_PER_GROUP + 1
  const endPage = Math.min(startPage + PAGES_PER_GROUP - 1, totalPages)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentNotices = notices.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const handlePrevGroup = () => {
    if (currentGroup > 1) {
      setCurrentPage(startPage - PAGES_PER_GROUP)
    }
  }

  const handleNextGroup = () => {
    if (endPage < totalPages) {
      setCurrentPage(endPage + 1)
    }
  }

  if (!showList) {
    return (
      <div className={styles.container}>
        <div className={styles.latestNotice}>
          <Image 
            src={latestNotice.image} 
            alt={latestNotice.title}
            width={800}
            height={400}
            className={styles.noticeImage}
            style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
          />
          <div className={styles.noticeInfo}>
            <h2 className={styles.noticeTitle}>{latestNotice.title}</h2>
            <p className={styles.noticeDate}>{formatDate(latestNotice.date)}</p>
          </div>
        </div>

        <button 
          onClick={() => setShowList(true)}
          className={styles.listBtn}
        >
          목록 보기
        </button>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.noticeList}>
        {currentNotices.map((notice) => (
          <div key={notice.id} className={styles.noticeItem}>
            <Image 
              src={notice.image} 
              alt={notice.title}
              width={200}
              height={150}
              className={styles.thumbnail}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <div className={styles.itemInfo}>
              <h3 className={styles.itemTitle}>{notice.title}</h3>
              <div className={styles.itemMeta}>
                <span>{formatDate(notice.date)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <button
          onClick={handlePrevGroup}
          disabled={currentGroup === 1}
          className={styles.arrowBtn}
        >
          ‹
        </button>

        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`${styles.pageBtn} ${
                currentPage === page ? styles.active : ''
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={handleNextGroup}
          disabled={endPage >= totalPages}
          className={styles.arrowBtn}
        >
          ›
        </button>
      </div>

      <button 
        onClick={() => {
          setShowList(false)
          setCurrentPage(1)
        }}
        className={styles.backBtn}
      >
        최신 공지 보기
      </button>
    </div>
  )
}
