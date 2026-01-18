// 동적 렌더링: 데이터 변경 시 즉시 반영되도록 설정
export const dynamic = 'force-dynamic'

export const metadata = {
  title: "이벤트",
  description: "프렌즈프리미엄 골프연습장 이벤트 및 프로모션 정보",
};

export default function EventLayout({ children }) {
  return children;
}
