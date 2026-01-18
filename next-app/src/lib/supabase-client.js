'use client'

import { createClient } from '@supabase/supabase-js'

// 환경변수 확인 (프로덕션 디버깅용)
console.log("ENV CHECK:", process.env.NEXT_PUBLIC_SUPABASE_URL)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('[supabase-client] 환경변수 누락:', {
    url: supabaseUrl ? '존재' : '없음',
    key: supabaseAnonKey ? '존재' : '없음',
  })
  throw new Error('Missing Supabase environment variables')
}

// 클라이언트 컴포넌트에서 사용하는 Supabase 클라이언트
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
})
