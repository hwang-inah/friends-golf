// 공지사항 데이터 (마스터)
export const noticeData = [
  {
    id: 1,
    title: '2025년 12월 공지사항',
    image: '/images/notice/notice1.jpg',
    date: '2025-11-29',
  },
  // ... 더 추가
].sort((a, b) => new Date(b.date) - new Date(a.date)) // 최신순 정렬