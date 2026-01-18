// src/hooks/usePros.js
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase-client.js'
import { getErrorMessage } from '../utils/error.js'

// 프로진 목록을 Supabase에서 불러오는 공용 훅
export const usePros = () => {
  const [pros, setPros] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPros = async () => {
      setLoading(true)
      setError(null)

      try {
        const { data, error } = await supabase
          .from('pros')
          .select('*')
          .order('sort_order', { ascending: true })

        if (error) {
          const errorMessage = getErrorMessage(error)
          console.error('프로진 불러오기 오류:', error)
          setError(errorMessage)
          setPros([])
        } else {
          // career 컬럼이 JSONB 배열이면 그대로, 문자열이면 JSON.parse
          const normalized = (data || []).map((pro) => {
            try {
              return {
                ...pro,
                career: Array.isArray(pro.career)
                  ? pro.career
                  : pro.career
                  ? JSON.parse(pro.career)
                  : [],
              }
            } catch (parseError) {
              // JSON.parse 실패 시 빈 배열로 처리
              console.error('프로 경력 데이터 파싱 오류:', parseError)
              return {
                ...pro,
                career: [],
              }
            }
          })
          setPros(normalized)
        }
      } catch (err) {
        const errorMessage = getErrorMessage(err)
        console.error('프로진 불러오기 예외:', err)
        setError(errorMessage)
        setPros([])
      } finally {
        setLoading(false)
      }
    }

    fetchPros()
  }, [])

  return { pros, loading, error }
}
