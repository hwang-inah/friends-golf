import React, { useEffect, useRef, useState } from 'react'
import styles from './LocationContent.module.css'

const LocationContent = ({ 
  compact = false, 
  showParking = true, 
  showTitle = true, 
  title = '오시는 길' 
}) => {
  const mapContainer = useRef(null)
  const [mapError, setMapError] = useState(false)

  // 인포윈도우 HTML
  const getInfoWindowContent = () => {
    return `
      <div style="
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        min-width: 220px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      ">
        <div style="
          font-size: 15px;
          font-weight: 700;
          color: #000;
          margin-bottom: 8px;
          line-height: 1.4;
        ">프렌즈 프리미엄 골프연습장 <br/>신불당점</div>
        <div style="
          font-size: 13px;
          color: #666;
          line-height: 1.5;
        ">충남 천안시 서북구 불당33길 34<br/>엠타워 4,5층</div>
      </div>
    `
  }

  useEffect(() => {
    const checkKakao = setInterval(() => {
      if (window.kakao && window.kakao.maps) {
        clearInterval(checkKakao)
        
        window.kakao.maps.load(() => {
          try {
            const lat = 36.8119742802678
            const lng = 127.106924007786

            const options = {
              center: new window.kakao.maps.LatLng(lat, lng),
              level: 3
            }

            const map = new window.kakao.maps.Map(mapContainer.current, options)

            const markerPosition = new window.kakao.maps.LatLng(lat, lng)
            const marker = new window.kakao.maps.Marker({
              position: markerPosition
            })
            marker.setMap(map)

            const infowindow = new window.kakao.maps.InfoWindow({
              content: getInfoWindowContent()
            })
            infowindow.open(map, marker)

          } catch (error) {
            console.error('지도 생성 오류:', error)
            setMapError(true)
          }
        })
      }
    }, 100)

    const timeout = setTimeout(() => {
      clearInterval(checkKakao)
      if (!window.kakao || !window.kakao.maps) {
        console.error('카카오맵 로드 타임아웃')
        setMapError(true)
      }
    }, 10000)

    return () => {
      clearInterval(checkKakao)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className={compact ? styles.compactContainer : styles.container}>
      {showTitle && <h1 className={styles.title}>{title}</h1>}

      {/* 주소 정보 */}
      <div className={styles.infoSection}>
        <div className={styles.infoCard}>
          <h2>📍 주소</h2>
          <p className={styles.address}>
            충남 천안시 서북구 불당33길 34 엠타워 5층
          </p>
          {!compact && (
            <p className={styles.description}>
              (신불당 리챠드미용실 옆건물 M타워)
            </p>
          )}
        </div>

        <div className={styles.infoCard}>
          <h2>🕰️ 영업시간</h2>
          <p className={styles.phone}>
            평일 06:30 ~ 23:50<br />
            주말·공휴일 08:30 ~ 19:00
          </p>
        </div>
      </div>

      {/* 지도 */}
      <div className={styles.mapSection}>
        {mapError ? (
          <div className={styles.mapError}>
            <p>지도를 불러올 수 없습니다.</p>
            <p style={{ fontSize: '0.9rem', color: '#999' }}>
              충남 천안시 서북구 불당33길 34 엠타워 5층
            </p>
          </div>
        ) : (
          <div ref={mapContainer} className={styles.map}></div>
        )}
      </div>

      {/* 주차 안내 */}
      {showParking && (
        <div className={styles.parkingSection}>
          <h2 className={styles.sectionTitle}>🅿️ 주차 안내</h2>
          <div className={styles.parkingGrid}>
            <div className={styles.parkingCard}>
              <h3>건물 지하 주차장</h3>
              <ul>
                <li>엠타워 지하 1층 주차장 이용</li>
                <li>이용 시간 제한 없음</li>
              </ul>
            </div>
            <div className={styles.parkingCard}>
              <h3>외부 주차장 이용</h3>
              <ul>
                <li>인근 외부 주차장 이용 가능</li>
                <li>5층 프론트 문의</li>
              </ul>
            </div>
          </div>
          <p className={styles.parkingNote}>
            ※ 프렌즈 프리미엄 골프 신불당점은 언제나 더 나은 편의와 서비스로 보답하겠습니다.
          </p>
        </div>
      )}
    </div>
  )
}

export default LocationContent