import HeroSlider from '@/components/HeroSlider'
import CategoryGrid from '@/components/CategoryGrid'
import SheffieldSection from '@/components/SheffieldSection'
import ConsultingSection from '@/components/ConsultingSection'
import BestSellers from '@/components/BestSellers'

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <CategoryGrid />
      <SheffieldSection />
      <ConsultingSection />
      <BestSellers />
    </>
  )
}
