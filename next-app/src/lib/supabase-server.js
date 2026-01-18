import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

// 서버 컴포넌트나 Server Actions에서 사용하는 Supabase 클라이언트
// 싱글톤 패턴으로 한 번만 생성
let supabaseServerInstance = null

export function getSupabaseServer() {
  if (!supabaseServerInstance) {
    supabaseServerInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  }
  return supabaseServerInstance
}

// 편의를 위한 기본 export
export const supabase = getSupabaseServer()
