// src/hooks/usePros.js
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

// 프로진 목록을 Supabase에서 불러오는 공용 훅
export const usePros = () => {
  const [pros, setPros] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPros = async () => {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase
        .from('pros')
        .select('*')
        .order('sort_order', { ascending: true })

      if (error) {
        console.error('프로진 불러오기 오류:', error)
        setError(error)
        setPros([])
      } else {
        // career 컬럼이 JSONB 배열이면 그대로, 문자열이면 JSON.parse
        const normalized = (data || []).map((pro) => ({
          ...pro,
          career: Array.isArray(pro.career)
            ? pro.career
            : pro.career
            ? JSON.parse(pro.career)
            : [],
        }))
        setPros(normalized)
      }

      setLoading(false)
    }

    fetchPros()
  }, [])

  return { pros, loading, error }
}
