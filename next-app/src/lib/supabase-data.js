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
      .select('id, title, description, image, start_date, end_date, status, created_at')
      .order('start_date', { ascending: false })

    if (error) {
      console.error('[getEvents] Supabase 쿼리 오류:', {
        table: 'events',
        error: error.message,
        details: error.details,
        hint: error.hint,
      })
      return []
    }

    if (!data) {
      console.warn('[getEvents] 데이터가 null입니다.')
      return []
    }

    return data.map(event => ({
      id: event.id,
      title: event.title,
      description: event.description || '',
      image: event.image,
      startDate: event.start_date,
      endDate: event.end_date,
      status: event.status || 'active', // nullable 방어 처리
    }))
  } catch (err) {
    console.error('[getEvents] 예외 발생:', {
      error: err.message,
      stack: err.stack,
    })
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
      .select('id, title, description, image, start_date, end_date, status, created_at')
      .eq('id', id)
      .single()

    if (error) {
      console.error('[getEventById] Supabase 쿼리 오류:', {
        table: 'events',
        condition: `id = ${id}`,
        error: error.message,
        details: error.details,
        hint: error.hint,
      })
      return null
    }

    if (!data) {
      console.warn(`[getEventById] ID ${id}에 해당하는 이벤트가 없습니다.`)
      return null
    }

    return {
      id: data.id,
      title: data.title,
      description: data.description || '',
      image: data.image,
      startDate: data.start_date,
      endDate: data.end_date,
      status: data.status || 'active', // nullable 방어 처리
    }
  } catch (err) {
    console.error('[getEventById] 예외 발생:', {
      id,
      error: err.message,
      stack: err.stack,
    })
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
      .select('id, title, image, date, created_at')
      .order('date', { ascending: false })

    if (error) {
      console.error('[getNotices] Supabase 쿼리 오류:', {
        table: 'notices',
        error: error.message,
        details: error.details,
        hint: error.hint,
      })
      return []
    }

    if (!data) {
      console.warn('[getNotices] 데이터가 null입니다.')
      return []
    }

    return data.map(notice => ({
      id: notice.id,
      title: notice.title,
      image: notice.image,
      date: notice.date,
    }))
  } catch (err) {
    console.error('[getNotices] 예외 발생:', {
      error: err.message,
      stack: err.stack,
    })
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
      .select('id, type, title, before_image, after_image, date, created_at')
      .eq('type', 'beforeAfter') // 실제 스키마: 'beforeAfter'
      .order('date', { ascending: false })

    if (error) {
      console.error('[getBeforeAfterGallery] Supabase 쿼리 오류:', {
        table: 'gallery',
        condition: "type = 'beforeAfter'",
        error: error.message,
        details: error.details,
        hint: error.hint,
      })
      return []
    }

    if (!data) {
      console.warn('[getBeforeAfterGallery] 데이터가 null입니다.')
      return []
    }

    return data.map(item => ({
      id: item.id,
      before: item.before_image,
      after: item.after_image,
      title: item.title,
      date: item.date,
    }))
  } catch (err) {
    console.error('[getBeforeAfterGallery] 예외 발생:', {
      error: err.message,
      stack: err.stack,
    })
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
      .select('id, type, title, image, date, created_at')
      .eq('type', 'normal')
      .order('date', { ascending: false })

    if (error) {
      console.error('[getNormalGallery] Supabase 쿼리 오류:', {
        table: 'gallery',
        condition: "type = 'normal'",
        error: error.message,
        details: error.details,
        hint: error.hint,
      })
      return []
    }

    if (!data) {
      console.warn('[getNormalGallery] 데이터가 null입니다.')
      return []
    }

    return data.map(item => ({
      id: item.id,
      image: item.image,
      title: item.title,
      date: item.date,
    }))
  } catch (err) {
    console.error('[getNormalGallery] 예외 발생:', {
      error: err.message,
      stack: err.stack,
    })
    return []
  }
}

/**
 * 시설 이미지 목록을 Supabase에서 가져옵니다
 * @returns {Promise<Array>} 시설 배열
 */
export async function getFacilities() {
  try {
    const supabase = getSupabaseServer()
    const { data, error } = await supabase
      .from('facilities')
      .select('id, image, title, sort_order, created_at')
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: true })

    if (error) {
      console.error('[getFacilities] Supabase 쿼리 오류:', {
        table: 'facilities',
        error: error.message,
        details: error.details,
        hint: error.hint,
      })
      return []
    }

    if (!data) {
      console.warn('[getFacilities] 데이터가 null입니다.')
      return []
    }

    return data.map(facility => ({
      id: facility.id,
      image: facility.image,
      title: facility.title,
      sortOrder: facility.sort_order,
    }))
  } catch (err) {
    console.error('[getFacilities] 예외 발생:', {
      error: err.message,
      stack: err.stack,
    })
    return []
  }
}
