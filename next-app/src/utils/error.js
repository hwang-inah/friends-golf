/**
 * Supabase 에러 객체를 사용자 친화적인 메시지로 변환합니다.
 * 
 * @param {object} error - Supabase 에러 객체
 * @returns {string} 사용자 친화적인 에러 메시지
 */
export const getErrorMessage = (error) => {
  if (!error) return '알 수 없는 오류가 발생했습니다.'

  // 이미 문자열인 경우
  if (typeof error === 'string') {
    return error
  }

  // Error 객체인 경우
  if (error instanceof Error) {
    return error.message || '알 수 없는 오류가 발생했습니다.'
  }

  // Supabase 에러 객체인 경우
  if (error.message) {
    return error.message
  }

  // 기타 경우
  return '알 수 없는 오류가 발생했습니다.'
}
