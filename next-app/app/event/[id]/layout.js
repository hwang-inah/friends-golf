import { getEventById } from '../../../src/lib/supabase-data.js'

// 동적 렌더링: 데이터 변경 시 즉시 반영되도록 설정
export const dynamic = 'force-dynamic'

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
