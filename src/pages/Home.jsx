import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase.js';
import Hero from '../components/organisms/home/Hero/Hero.jsx'
import FacilityLocationSection from '../components/organisms/home/FacilityLocationSection/FacilityLocationSection.jsx'
import EventSection from '../components/organisms/home/EventSection/EventSection.jsx'
import ProsSection from '../components/organisms/home/ProsSection/ProsSection.jsx'
import GallerySection from '../components/organisms/home/GallerySection/GallerySection.jsx'

const Home = () => {
  const [homeProsData, setHomeProsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const fetchHomePros = async () => {
      try {
        const { data, error } = await supabase.from('pros').select('*');
        if (error) throw error;
        setHomeProsData(data);
      } catch (error) {
        console.error("Home Page Pros data fetching failed:", error.message);
      } finally {
        setIsLoading(false); // 데이터 로딩 완료 후 상태 변경
      }
    };
    fetchHomePros();
  }, []);

  return (
    <div>
      <Hero />
      <FacilityLocationSection />
      
      {/* 🚀 수정된 부분: 로딩이 완료되었고 데이터가 있을 때만 ProsSection 렌더링 */}
      {!isLoading && homeProsData.length > 0 && (
          <ProsSection prosData={homeProsData} />
      )}
      {/* 또는 로딩 중일 때 표시할 UI */}
      {/* {isLoading && <div>프로 정보를 불러오는 중...</div>} */}
      
      <EventSection />
      <GallerySection />
    </div>
  )
}

export default Home;