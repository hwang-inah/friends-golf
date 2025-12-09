import React from 'react'
import styles from './ProCard.module.css'

const ProCard = ({ pro, compact = false, onClick }) => {
  return (
    <div 
      className={compact ? styles.compactCard : styles.card}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className={styles.imageSection}>
        <img src={pro.image} alt={pro.name} />
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
                {pro.career.map((item, index) => (
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

export default ProCard