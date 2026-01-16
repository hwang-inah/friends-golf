'use client'

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>오류가 발생했습니다</h1>
      <p>{error?.message || '알 수 없는 오류'}</p>
      <button onClick={reset}>다시 시도</button>
    </div>
  )
}
