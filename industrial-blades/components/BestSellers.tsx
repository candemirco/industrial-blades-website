'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Heart, Eye, Star, ArrowRight } from 'lucide-react'

interface Product {
  id: string
  name: string
  slug: string
  image: string
  price: number
  rating: number
  reviews: number
  category: string
  inStock: boolean
}

export default function BestSellers() {
  const [products, setProducts] = useState<Product[]>([])
  
  // Örnek ürünler - gerçekte API'den gelecek
  useEffect(() => {
    const sampleProducts: Product[] = [
      {
        id: '1',
        name: 'Endüstriyel Düz Bıçak 200mm',
        slug: 'endustriyel-duz-bicak-200mm',
        image: 'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80',
        price: 450,
        rating: 4.8,
        reviews: 124,
        category: 'Endüstriyel Bıçaklar',
        inStock: true
      },
      {
        id: '2',
        name: 'Makina Bıçağı Premium Seri',
        slug: 'makina-bicagi-premium',
        image: 'https://images.unsplash.com/photo-1505232070786-2f46eae226e0?auto=format&fit=crop&w=1200&q=80',
        price: 680,
        rating: 4.9,
        reviews: 89,
        category: 'Makina Bıçakları',
        inStock: true
      },
      {
        id: '3',
        name: 'Gıda Kesim Bıçağı Paslanmaz',
        slug: 'gida-kesim-bicagi',
        image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
        price: 520,
        rating: 4.7,
        reviews: 156,
        category: 'Gıda Bıçakları',
        inStock: true
      },
      {
        id: '4',
        name: 'Özel Üretim Testere Bıçağı',
        slug: 'ozel-testere-bicagi',
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
        price: 890,
        rating: 5.0,
        reviews: 43,
        category: 'Özel Üretim',
        inStock: false
      }
    ]
    setProducts(sampleProducts)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-steel-900 mb-4">
            En Çok Satan Ürünler
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            Müşterilerimizin favorileri, profesyonellerin tercihi
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white border border-steel-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`
              }}
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
                {!product.inStock && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                    Tükendi
                  </div>
                )}
                
                {product.inStock && product.rating >= 4.8 && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Çok Satan
                  </div>
                )}

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-10 h-10 bg-white hover:bg-primary-600 hover:text-white text-steel-900 rounded-full flex items-center justify-center shadow-lg transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <Link
                    href={`/urunler/${product.slug}`}
                    className="w-10 h-10 bg-white hover:bg-primary-600 hover:text-white text-steel-900 rounded-full flex items-center justify-center shadow-lg transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                  </Link>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-steel-900/0 group-hover:bg-steel-900/10 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Category */}
                <div className="text-xs text-primary-600 font-semibold mb-2 uppercase tracking-wide">
                  {product.category}
                </div>

                {/* Title */}
                <Link href={`/urunler/${product.slug}`}>
                  <h3 className="text-lg font-bold text-steel-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
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
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-steel-900">
                      ₺{product.price}
                    </div>
                    <div className="text-xs text-steel-500">KDV Dahil</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/905551234567?text=${encodeURIComponent(`Merhaba, ${product.name} ürünü hakkında bilgi almak istiyorum.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Fiyat Al
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/kategoriler"
            className="inline-flex items-center gap-2 px-8 py-4 bg-steel-900 hover:bg-steel-800 text-white font-semibold rounded-lg transition-all hover:scale-105"
          >
            <span>Tüm Ürünleri Gör</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
