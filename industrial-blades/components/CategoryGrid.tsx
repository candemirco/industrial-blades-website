'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/lib/data'

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-steel-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-steel-900 mb-4">
            Ürün Kategorilerimiz
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            Her sektör için özel olarak tasarlanmış, yüksek kaliteli endüstriyel kesici bıçaklar
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/kategoriler/${category.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-900/80 via-steel-900/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-steel-100 text-sm mb-4 line-clamp-2">
                  {category.description}
                </p>
                
                {/* Subcategories */}
                {category.subcategories && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.subcategories.slice(0, 2).map((sub) => (
                      <span 
                        key={sub}
                        className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                )}

                {/* Arrow Icon */}
                <div className="flex items-center text-white group-hover:text-primary-400 transition-colors">
                  <span className="text-sm font-semibold mr-2">Detayları Gör</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
