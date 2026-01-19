import { getEvents } from '../src/lib/supabase-data.js'

export default async function sitemap() {
  const baseUrl = 'https://friends-golf.vercel.app'
  
  // Supabase에서 이벤트 데이터 가져오기
  const events = await getEvents()
  
  // 정적 페이지
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pros`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/event`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/location`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/notice`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // 동적 페이지 (이벤트 상세)
  const eventPages = events.map((event) => ({
    url: `${baseUrl}/event/${event.id}`,
    lastModified: new Date(event.endDate),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...eventPages]
}
