'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Eye, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

interface Product {
  id: string
  name: string
  slug: string
  image: string
  category: string
  rating: number
  reviews: number
  inStock: boolean
}

// Örnek ürünler - kategorilerden gelecek
const sampleProducts: Product[] = [
  {
    id: '1',
    name: '3 Delikli Dilme Jiletleri',
    slug: '3-delikli-dilme-jiletleri',
    image: 'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=800&q=80',
    category: 'Sanayi Jiletleri',
    rating: 4.8,
    reviews: 124,
    inStock: true
  },
  {
    id: '2',
    name: 'Döner Kebap Bıçakları',
    slug: 'doner-bicaklari',
    image: 'https://images.unsplash.com/photo-1505232070786-2f46eae226e0?auto=format&fit=crop&w=800&q=80',
    category: 'Makina Bıçakları',
    rating: 4.9,
    reviews: 89,
    inStock: true
  },
  {
    id: '3',
    name: 'OLFA Güvenlik Bıçakları',
    slug: 'olfa-guvenlik-bicaklari',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80',
    category: 'İş Güvenliği',
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  {
    id: '4',
    name: 'Slotted Dilme Jiletleri',
    slug: 'slotted-dilme-jiletleri',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
    category: 'Sanayi Jiletleri',
    rating: 5.0,
    reviews: 43,
    inStock: true
  },
  {
    id: '5',
    name: 'Vakum Paketleme Bıçakları',
    slug: 'vakum-paketleme-bicaklari',
    image: 'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=800&q=80',
    category: 'Makina Bıçakları',
    rating: 4.6,
    reviews: 78,
    inStock: true
  },
  {
    id: '6',
    name: 'Trapez Bıçaklar',
    slug: 'trapez-bicaklar',
    image: 'https://images.unsplash.com/photo-1505232070786-2f46eae226e0?auto=format&fit=crop&w=800&q=80',
    category: 'Sanayi Jiletleri',
    rating: 4.8,
    reviews: 92,
    inStock: true
  }
]

export default function BestSellers() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollContainerRef = useState<HTMLDivElement | null>(null)

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('products-slider')
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-steel-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-steel-900 mb-4">
            Öne Çıkan Ürünler
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            Müşterilerimizin favorileri, profesyonellerin tercihi
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-steel-50 transition-colors"
            aria-label="Önceki"
          >
            <ChevronLeft className="w-6 h-6 text-steel-700" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-steel-50 transition-colors"
            aria-label="Sonraki"
          >
            <ChevronRight className="w-6 h-6 text-steel-700" />
          </button>

          {/* Products Slider */}
          <div 
            id="products-slider"
            className="overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {sampleProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group bg-white border border-steel-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-80 flex-shrink-0"
                >
                  {/* Image Container */}
                  <div className="relative h-64 bg-steel-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Badge */}
                    {product.rating >= 4.8 && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Çok Satan
                      </div>
                    )}

                    {/* Quick View */}
                    <div className="absolute inset-0 bg-steel-900/0 group-hover:bg-steel-900/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Link
                        href={`/urunler/${product.slug}`}
                        className="px-6 py-3 bg-white hover:bg-primary-600 hover:text-white text-steel-900 rounded-lg font-semibold transition-all flex items-center gap-2"
                      >
                        <Eye className="w-5 h-5" />
                        Ürünü İncele
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Category */}
                    <div className="text-xs text-primary-600 font-semibold mb-2 uppercase tracking-wide">
                      {product.category}
                    </div>

                    {/* Title */}
                    <Link href={`/urunler/${product.slug}`}>
                      <h3 className="text-lg font-bold text-steel-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-steel-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-steel-600">
                        ({product.reviews} değerlendirme)
                      </span>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={`/urunler/${product.slug}`}
                      className="w-full px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      Detayları Gör
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 px-8 py-4 bg-steel-900 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all hover:scale-105"
          >
            Tüm Ürünleri Görüntüle
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
