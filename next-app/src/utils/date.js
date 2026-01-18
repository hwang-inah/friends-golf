/**
 * 날짜 문자열을 표시 형식으로 변환합니다.
 * 예: "2024-01-15" -> "2024.01.15"
 * 
 * @param {string} dateStr - 날짜 문자열 (YYYY-MM-DD 형식)
 * @returns {string} 변환된 날짜 문자열 (YYYY.MM.DD 형식)
 */
export const formatDate = (dateStr) => {
  if (!dateStr) return ''
  return dateStr.replace(/-/g, '.')
}
