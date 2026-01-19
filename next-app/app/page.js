// Server Component: 서버에서 이벤트 데이터를 가져와서 클라이언트 컴포넌트에 전달
import { getEvents } from '../src/lib/supabase-data.js'
import HomeClient from '../src/components/organisms/home/HomeClient.jsx'

export const dynamic = 'force-dynamic'

export default async function Page() {
  // 서버에서 이벤트 데이터 가져오기
  const events = await getEvents()

  return <HomeClient events={events} />
}
