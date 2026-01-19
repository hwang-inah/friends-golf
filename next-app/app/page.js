// Server Component: 서버에서 이벤트 데이터를 가져와서 클라이언트 컴포넌트에 전달
import { getEvents } from '../src/lib/supabase-data.js'
import HomeClient from '../src/components/organisms/home/HomeClient.jsx'

export const dynamic = 'force-dynamic'

// JSON-LD 구조화 데이터 (로컬 검색 최적화)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "프렌즈 프리미엄 골프연습장 신불당점",
  "description": "천안 신불당에 위치한 골프연습장/스크린골프 시설로, 골프연습·레슨이 가능한 프리미엄 골프 연습 공간입니다.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "천안시",
    "addressRegion": "충청남도",
    "streetAddress": "불당33길 34 엠타워 5층",
    "addressCountry": "KR"
  },
  "areaServed": {
    "@type": "City",
    "name": "천안 신불당"
  },
  "sport": "Golf",
  "url": "https://friends-golf.vercel.app"
}

export default async function Page() {
  // 서버에서 이벤트 데이터 가져오기
  const events = await getEvents()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeClient events={events} />
    </>
  )
}
