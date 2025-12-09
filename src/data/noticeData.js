// 공지사항 데이터 (마스터)
export const noticeData = [
  {
    id: 1,
    title: '2025년 12월 공지사항',
    image: '/images/notice/notice1.jpg',
    date: '2025-11-29',
  },
  {
    id: 2,
    title: '2024년 11월 공지사항',
    image: '/images/notice/notice2.jpg',
    date: '2024-11-02',
  },
  {
    id: 3,
    title: '2024년 10월 공지사항',
    image: '/images/notice/notice3.jpg',
    date: '2024-10-01',
  },
  // ... 더 추가
].sort((a, b) => new Date(b.date) - new Date(a.date)) // 최신순 정렬