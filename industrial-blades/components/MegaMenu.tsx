'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { CategoryView } from '@/lib/types'
import Link from 'next/link'
import Image from 'next/image'

interface MegaMenuProps {
  categories: CategoryView[]
  isOpen: boolean
  onClose: () => void
}

export default function MegaMenu({ categories, isOpen, onClose }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // İlk kategoriyi otomatik aktif yap
  useEffect(() => {
    if (isOpen && categories.length > 0) {
      setActiveCategory(categories[0].id)
    } else if (!isOpen) {
      setActiveCategory(null)
    }
  }, [isOpen, categories])

  // Dışarı tıklanınca kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  const handleCategoryEnter = (categoryId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setActiveCategory(categoryId)
  }

  const handleCategoryLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveCategory(null)
    }, 300)
  }

  const handleSubcategoryEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-xl z-50"
        >
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-4 gap-8">
              {/* Ana Kategoriler - Sol taraf */}
              <div className="col-span-1 border-r border-gray-200 pr-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Kategoriler
                </h3>
                <nav className="space-y-1">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      onMouseEnter={() => handleCategoryEnter(category.id)}
                      onMouseLeave={handleCategoryLeave}
                    >
                      <Link
                        href={`/kategoriler/${category.slug}`}
                        onClick={() => onClose()}
                        className={`
                          flex items-center justify-between px-4 py-3 rounded-lg
                          transition-all duration-200 group
                          ${activeCategory === category.id 
                            ? 'bg-primary-50 text-primary-600' 
                            : 'hover:bg-gray-50 text-gray-700'
                          }
                        `}
                      >
                        <div className="flex-1">
                          <span className="font-medium">{category.name}</span>
                          <span className="text-xs text-gray-400 ml-2">
                            ({category.totalProductCount})
                          </span>
                        </div>
                        <ChevronRight 
                          className={`w-4 h-4 transition-transform ${
                            activeCategory === category.id ? 'translate-x-1' : ''
                          }`}
                        />
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Alt Kategoriler - Sağ taraf */}
              <div 
                className="col-span-3"
                onMouseEnter={handleSubcategoryEnter}
                onMouseLeave={handleCategoryLeave}
              >
                <AnimatePresence mode="wait">
                  {activeCategory && (
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {categories
                        .filter(cat => cat.id === activeCategory)
                        .map(category => (
                          <div key={category.id}>
                            <div className="mb-6">
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {category.name}
                              </h3>
                              <p className="text-gray-600">
                                {category.description}
                              </p>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                              {category.subcategories.map((subcategory) => (
                                <Link
                                  key={subcategory.id}
                                  href={`/kategoriler/${category.slug}/${subcategory.slug}`}
                                  className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 min-h-[140px]"
                                  onClick={() => {
                                    onClose()
                                  }}
                                >
                                  {/* Arka plan görseli */}
                                  {subcategory.image && (
                                    <div className="absolute inset-0 z-0">
                                      <Image
                                        src={subcategory.image}
                                        alt={subcategory.name}
                                        fill
                                        className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-white/70" />
                                    </div>
                                  )}
                                  
                                  {/* İçerik */}
                                  <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                                    <div>
                                      <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-1">
                                        {subcategory.name}
                                      </h4>
                                      {subcategory.description && (
                                        <p className="text-sm text-gray-600 line-clamp-2">
                                          {subcategory.description}
                                        </p>
                                      )}
                                    </div>
                                    <div className="mt-2 text-sm font-medium text-primary-600">
                                      {subcategory.productCount} ürün
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            {/* Tümünü Gör */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                              <Link
                                href={`/kategoriler/${category.slug}`}
                                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                                onClick={() => onClose()}
                              >
                                Tüm {category.name} Ürünlerini Gör
                                <ChevronRight className="w-4 h-4 ml-1" />
                              </Link>
                            </div>
                          </div>
                        ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
