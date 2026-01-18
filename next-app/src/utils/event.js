/**
 * 이벤트 상태를 계산합니다.
 * 현재 날짜 기준으로 시작일과 종료일을 비교하여 상태를 반환합니다.
 * 
 * @param {string} startDate - 이벤트 시작일 (YYYY-MM-DD 형식)
 * @param {string} endDate - 이벤트 종료일 (YYYY-MM-DD 형식)
 * @returns {string} 'active' 또는 'ended'
 */
export const getEventStatus = (startDate, endDate) => {
  if (!startDate || !endDate) return 'ended'

  const today = new Date()
  today.setHours(0, 0, 0, 0) // 시간 부분 제거

  const start = new Date(startDate)
  start.setHours(0, 0, 0, 0)

  const end = new Date(endDate)
  end.setHours(23, 59, 59, 999) // 종료일은 하루 종일 포함

  // 시작일 이전이거나 종료일 이후면 'ended'
  if (today < start || today > end) {
    return 'ended'
  }

  // 시작일과 종료일 사이면 'active'
  return 'active'
}

/**
 * 이벤트가 진행 중인지 확인합니다.
 * 
 * @param {string} startDate - 이벤트 시작일 (YYYY-MM-DD 형식)
 * @param {string} endDate - 이벤트 종료일 (YYYY-MM-DD 형식)
 * @returns {boolean} 진행 중이면 true, 아니면 false
 */
export const isEventActive = (startDate, endDate) => {
  return getEventStatus(startDate, endDate) === 'active'
}
