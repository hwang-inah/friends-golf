// 동적 렌더링: 데이터 변경 시 즉시 반영되도록 설정
export const dynamic = 'force-dynamic'

export const metadata = {
  title: "공지사항",
  description: "프렌즈프리미엄 골프연습장 공지사항 및 안내",
};

export default function NoticeLayout({ children }) {
  return children;
}
