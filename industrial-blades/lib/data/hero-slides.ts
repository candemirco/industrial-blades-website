/**
 * Hero Slider Verileri
 */

import { HeroSlide } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    title: 'Sheffield Kalitesinde Endüstriyel Bıçaklar',
    subtitle: 'Quality Recognised Worldwide',
    description: 'Üstün çelik kalitesi ile uzun ömürlü ve keskin performans',
    image: '/images/hero/sheffield-quality.jpg',
    ctaText: 'Ürünleri İncele',
    ctaLink: '/kategoriler',
    order: 1,
    isActive: true,
  },
  {
    id: 'slide-2',
    title: 'Özel Tasarım Bıçaklar',
    subtitle: 'Custom Design Solutions',
    description: 'İhtiyacınıza özel üretim, mükemmel kesim kalitesi',
    image: '/images/hero/ozel-tasarim.jpg',
    ctaText: 'Danışmanlık Alın',
    ctaLink: '/danismanlik',
    order: 2,
    isActive: true,
  },
  {
    id: 'slide-3',
    title: 'Profesyonel Danışmanlık',
    subtitle: 'Expert Consulting',
    description: 'Doğru malzeme seçimi için uzman desteği',
    image: '/images/hero/profesyonel-danismanlik.jpg',
    ctaText: 'İletişime Geçin',
    ctaLink: '/iletisim',
    order: 3,
    isActive: true,
  },
];

// Yardımcı fonksiyonlar
export function getActiveSlides(): HeroSlide[] {
  return HERO_SLIDES
    .filter(slide => slide.isActive)
    .sort((a, b) => a.order - b.order);
}

export function getSlideById(id: string): HeroSlide | undefined {
  return HERO_SLIDES.find(slide => slide.id === id);
}

