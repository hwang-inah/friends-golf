// 서버 컴포넌트에서 사용하는 Supabase 데이터 페칭 함수들
import { getSupabaseServer } from './supabase-server.js'
import { getErrorMessage } from '../utils/error.js'

/**
 * 이벤트 목록을 Supabase에서 가져옵니다
 * @returns {Promise<Array>} 이벤트 배열
 */
export async function getEvents() {
  try {
    const supabase = getSupabaseServer()
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('start_date', { ascending: false })

    if (error) {
      console.error('이벤트 불러오기 오류:', error)
      return []
    }

    return (data || []).map(event => ({
      id: event.id,
      title: event.title,
      description: event.description,
      image: event.image_url,
      startDate: event.start_date,
      endDate: event.end_date,
    }))
  } catch (err) {
    console.error('이벤트 불러오기 예외:', err)
    return []
  }
}

/**
 * 특정 이벤트를 Supabase에서 가져옵니다
 * @param {number} id - 이벤트 ID
 * @returns {Promise<Object|null>} 이벤트 객체 또는 null
 */
export async function getEventById(id) {
  try {
    const supabase = getSupabaseServer()
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('id', id)
      .single()

    if (error || !data) {
      console.error('이벤트 불러오기 오류:', error)
      return null
    }

    return {
      id: data.id,
      title: data.title,
      description: data.description,
      image: data.image_url,
      startDate: data.start_date,
      endDate: data.end_date,
    }
  } catch (err) {
    console.error('이벤트 불러오기 예외:', err)
    return null
  }
}

/**
 * 공지사항 목록을 Supabase에서 가져옵니다
 * @returns {Promise<Array>} 공지사항 배열
 */
export async function getNotices() {
  try {
    const supabase = getSupabaseServer()
    const { data, error } = await supabase
      .from('notices')
      .select('*')
      .order('date', { ascending: false })

    if (error) {
      console.error('공지사항 불러오기 오류:', error)
      return []
    }

    return (data || []).map(notice => ({
      id: notice.id,
      title: notice.title,
      image: notice.image_url,
      date: notice.date,
    }))
  } catch (err) {
    console.error('공지사항 불러오기 예외:', err)
    return []
  }
}

/**
 * Before & After 갤러리를 Supabase에서 가져옵니다
 * @returns {Promise<Array>} 갤러리 배열
 */
export async function getBeforeAfterGallery() {
  try {
    const supabase = getSupabaseServer()
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .eq('type', 'before_after')
      .order('date', { ascending: false })

    if (error) {
      console.error('Before & After 갤러리 불러오기 오류:', error)
      return []
    }

    return (data || []).map(item => ({
      id: item.id,
      before: item.before_image_url || item.image_url,
      after: item.after_image_url || item.image_url,
      title: item.title,
      date: item.date,
    }))
  } catch (err) {
    console.error('Before & After 갤러리 불러오기 예외:', err)
    return []
  }
}

/**
 * 일반 갤러리를 Supabase에서 가져옵니다
 * @returns {Promise<Array>} 갤러리 배열
 */
export async function getNormalGallery() {
  try {
    const supabase = getSupabaseServer()
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .eq('type', 'normal')
      .order('date', { ascending: false })

    if (error) {
      console.error('일반 갤러리 불러오기 오류:', error)
      return []
    }

    return (data || []).map(item => ({
      id: item.id,
      image: item.image_url,
      title: item.title,
      date: item.date,
    }))
  } catch (err) {
    console.error('일반 갤러리 불러오기 예외:', err)
    return []
  }
}
