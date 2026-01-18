// Server Component: Supabase에서 갤러리 데이터를 가져옵니다
import { getBeforeAfterGallery, getNormalGallery } from '../../src/lib/supabase-data.js'
import GalleryTabs from '../../src/components/organisms/GalleryTabs/GalleryTabs.jsx'
import styles from './Gallery.module.css'

export const dynamic = 'force-dynamic'

export default async function GalleryPage() {
  const [beforeAfterGallery, normalGallery] = await Promise.all([
    getBeforeAfterGallery(),
    getNormalGallery()
  ])

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>갤러리</h1>
      <GalleryTabs 
        beforeAfterGallery={beforeAfterGallery} 
        normalGallery={normalGallery} 
      />
    </div>
  )
}
