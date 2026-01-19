// 동적 렌더링: 데이터 변경 시 즉시 반영되도록 설정
export const dynamic = 'force-dynamic'

export const metadata = {
  title: "갤러리 | 천안 신불당 프렌즈 프리미엄 골프연습장",
  description: "천안 신불당 골프연습장 프렌즈 프리미엄의 갤러리 - 레슨 Before & After, 레슨 사진",
};

export default function GalleryLayout({ children }) {
  return children;
}
