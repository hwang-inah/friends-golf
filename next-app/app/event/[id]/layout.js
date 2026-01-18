import { eventsData } from '../../../src/data/eventsData.js'

// 정적 생성 최적화: 빌드 시점에 모든 이벤트 페이지 생성
export async function generateStaticParams() {
  return eventsData.map((event) => ({
    id: event.id.toString(),
  }))
}

export async function generateMetadata({ params }) {
  const id = params?.id
  const event = eventsData.find(e => e.id === parseInt(id))
  
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
