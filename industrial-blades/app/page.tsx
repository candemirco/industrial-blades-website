import HeroSlider from '@/components/HeroSlider'
import CategoryGrid from '@/components/CategoryGrid'
import SheffieldSection from '@/components/SheffieldSection'
import DurhamDuplexBadge from '@/components/DurhamDuplexBadge'
import ConsultingSection from '@/components/ConsultingSection'
import BestSellers from '@/components/BestSellers'

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <CategoryGrid />
      <DurhamDuplexBadge />
      <SheffieldSection />
      <ConsultingSection />
      <BestSellers />
    </>
  )
}
