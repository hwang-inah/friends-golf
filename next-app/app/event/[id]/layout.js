import { getEvents, getEventById } from '../../../src/lib/supabase-data.js'

// 동적 렌더링: 데이터 변경 시 즉시 반영되도록 설정
export const dynamic = 'force-dynamic'

// 정적 생성 최적화: 빌드 시점에 모든 이벤트 페이지 생성
// 동적 렌더링과 함께 사용하면 빌드 시점에 생성하되, 런타임에도 최신 데이터 사용
export async function generateStaticParams() {
  const events = await getEvents()
  return events.map((event) => ({
    id: event.id.toString(),
  }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const eventId = parseInt(id)
  const event = await getEventById(eventId)
  
  if (!event) {
    return {
      title: "이벤트 상세",
      description: "이벤트를 찾을 수 없습니다.",
    }
  }

  return {
    title: event.title,
    description: event.description || `${event.title} - ${event.startDate} ~ ${event.endDate}`,
    openGraph: {
      title: event.title,
      description: event.description || `${event.title} - ${event.startDate} ~ ${event.endDate}`,
      images: [event.image],
    },
  }
}

export default function EventDetailLayout({ children }) {
  return children;
}
