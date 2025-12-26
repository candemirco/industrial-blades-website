'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { heroSlides } from '@/lib/data'

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSlide])

  return (
    <section 
      className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden bg-steel-900"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <div className="relative h-full w-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-steel-900/90 via-steel-900/60 to-transparent" />

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  {/* Title */}
                  <h1 
                    className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-700 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: index === currentSlide ? '200ms' : '0ms',
                      fontFamily: 'var(--font-montserrat)'
                    }}
                  >
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p 
                    className={`text-lg md:text-xl lg:text-2xl text-steel-100 mb-8 transition-all duration-700 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: index === currentSlide ? '400ms' : '0ms' 
                    }}
                  >
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div 
                    className={`flex flex-wrap gap-4 transition-all duration-700 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: index === currentSlide ? '600ms' : '0ms' 
                    }}
                  >
                    {/* Detaylı Bilgi Al */}
                    <Link
                      href={`/kategoriler/${slide.productSlug}`}
                      className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                      <span>Detaylı Bilgi Al</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    {/* WhatsApp Fiyat Al */}
                    <a
                      href={`https://wa.me/905551234567?text=${encodeURIComponent(`Merhaba, ${slide.title} hakkında fiyat bilgisi almak istiyorum.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span>Fiyat Al</span>
                    </a>
                  </div>

                  {/* Product Features */}
                  <div 
                    className={`mt-12 flex flex-wrap gap-6 transition-all duration-700 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: index === currentSlide ? '800ms' : '0ms' 
                    }}
                  >
                    <div className="flex items-center gap-2 text-white/80">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-medium">Sheffield Kalitesi</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-medium">Özel Üretim</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-medium">Hızlı Teslimat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all hover:scale-110"
        aria-label="Önceki Slayt"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all hover:scale-110"
        aria-label="Sonraki Slayt"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-12 bg-white'
                : 'w-3 bg-white/50 hover:bg-white/70'
            } h-3 rounded-full`}
            aria-label={`Slayt ${index + 1}'e git`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors cursor-pointer">
        <span className="text-xs font-medium uppercase tracking-wider rotate-90 mb-4">
          Keşfet
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-primary-500 transition-all duration-300"
          style={{ 
            width: `${((currentSlide + 1) / heroSlides.length) * 100}%` 
          }}
        />
      </div>
    </section>
  )
}
