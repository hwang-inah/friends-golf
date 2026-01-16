'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../src/lib/supabase.js';
import Hero from '../src/components/organisms/home/Hero/Hero.jsx'
import FacilityLocationSection from '../src/components/organisms/home/FacilityLocationSection/FacilityLocationSection.jsx'
import EventSection from '../src/components/organisms/home/EventSection/EventSection.jsx'
import ProsSection from '../src/components/organisms/home/ProsSection/ProsSection.jsx'
import GallerySection from '../src/components/organisms/home/GallerySection/GallerySection.jsx'

export default function Page() {
  const [homeProsData, setHomeProsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHomePros = async () => {
      try {
        const { data, error } = await supabase.from('pros').select('*');
        if (error) throw error;
        setHomeProsData(data);
      } catch (error) {
        console.error("Home Page Pros data fetching failed:", error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHomePros();
  }, []);

  return (
    <div>
      <Hero />
      <FacilityLocationSection />
      
      {!isLoading && homeProsData.length > 0 && (
          <ProsSection prosData={homeProsData} />
      )}
      
      <EventSection />
      <GallerySection />
    </div>
  )
}
