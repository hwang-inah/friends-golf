import React, { useState } from 'react'
import { noticeData } from '../../data/noticeData.js'
import EmptyState from '../../components/molecules/EmptyState/EmptyState.jsx'
import styles from './Notice.module.css'

const ITEMS_PER_PAGE = 10
const PAGES_PER_GROUP = 5

const Notice = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [showList, setShowList] = useState(false)

  // 데이터 없으면 EmptyState
  if (!noticeData || noticeData.length === 0) {
    return <EmptyState />
  }

  const latestNotice = noticeData[0]

  // 페이지네이션 계산
  const totalPages = Math.ceil(noticeData.length / ITEMS_PER_PAGE)
  const currentGroup = Math.ceil(currentPage / PAGES_PER_GROUP)
  const startPage = (currentGroup - 1) * PAGES_PER_GROUP + 1
  const endPage = Math.min(startPage + PAGES_PER_GROUP - 1, totalPages)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentNotices = noticeData.slice(startIndex, endIndex)

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

  const formatDate = (dateStr) => {
    return dateStr.replace(/-/g, '.')
  }

  // 최신 공지사항 보기
  if (!showList) {
    return (
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>공지사항</h1>
        
        <div className={styles.latestNotice}>
          <img 
            src={latestNotice.image} 
            alt={latestNotice.title}
            className={styles.noticeImage}
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

  // 목록 보기
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>공지사항</h1>

      <div className={styles.noticeList}>
        {currentNotices.map((notice) => (
          <div key={notice.id} className={styles.noticeItem}>
            <img 
              src={notice.image} 
              alt={notice.title}
              className={styles.thumbnail}
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

      {/* 페이지네이션 */}
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

export default Notice