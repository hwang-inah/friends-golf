'use client'

import React from 'react'
import Image from 'next/image'
import styles from './ProCard.module.css'

// props(pro, compact, onClick)이 안 바뀌면 리렌더링 안 되도록 최적화
const ProCard = ({ pro, compact = false, onClick }) => {
  return (
    <div 
      className={compact ? styles.compactCard : styles.card}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className={styles.imageSection}>
        {/* Supabase Storage URL이나 DB에 저장된 이미지 경로 사용 */}
        <Image 
          src={pro.image} 
          alt={pro.name}
          width={300}
          height={300}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        /> 
      </div>

      <div className={styles.infoSection}>
        <div className={styles.header}>
          <h2 className={styles.name}>{pro.name}</h2>
          <span className={styles.title}>{pro.title}</span>
        </div>

        {!compact && (
          <>
            <p className={styles.introduction}>{pro.introduction}</p>
            <div className={styles.career}>
              <h3></h3>
              <ul>
                {pro.career?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// 여기서 한 번만 memo 감싸주면 충분함
export default React.memo(ProCard)
