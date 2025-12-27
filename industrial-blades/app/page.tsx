import HeroSlider from '@/components/HeroSlider'
import CategoryGrid from '@/components/CategoryGrid'
import SheffieldSection from '@/components/SheffieldSection'
import DurhamDuplexBadge from '@/components/DurhamDuplexBadge'
import ConsultingSection from '@/components/ConsultingSection'
import BestSellers from '@/components/BestSellers'
import BlogSection from '@/components/BlogSection'

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <CategoryGrid />
      <DurhamDuplexBadge />
      <SheffieldSection />
      <BlogSection />
      <ConsultingSection />
      <BestSellers />
    </>
  )
}
