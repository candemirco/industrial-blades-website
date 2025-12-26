'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Search, Phone } from 'lucide-react'
import { categories } from '@/lib/data'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    {
      title: 'Ürünler',
      href: '#',
      hasDropdown: true,
      dropdownItems: categories.map(cat => ({
        title: cat.name,
        href: `/kategoriler/${cat.slug}`,
        description: cat.description,
        subcategories: cat.subcategories
      }))
    },
    {
      title: 'Sheffield Kalitesi',
      href: '/sheffield-kalitesi',
      hasDropdown: false
    },
    {
      title: 'Danışmanlık',
      href: '/danismanlik',
      hasDropdown: false
    },
    {
      title: 'Hakkımızda',
      href: '/hakkimizda',
      hasDropdown: false
    },
    {
      title: 'İletişim',
      href: '/iletisim',
      hasDropdown: false
    }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex-shrink-0"
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={120}
              height={38}
              className="w-auto h-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-steel-700 hover:text-primary-600 font-medium transition-colors rounded-lg hover:bg-steel-50"
                >
                  {item.title}
                  {item.hasDropdown && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-steel-100 overflow-hidden animate-fade-in">
                    <div className="grid grid-cols-2 gap-4 p-6">
                      {item.dropdownItems?.map((dropItem) => (
                        <Link
                          key={dropItem.title}
                          href={dropItem.href}
                          className="group p-4 rounded-lg hover:bg-steel-50 transition-all"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                              <div className="w-8 h-8 bg-primary-500 rounded-md" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-steel-900 mb-1 group-hover:text-primary-600 transition-colors">
                                {dropItem.title}
                              </h3>
                              <p className="text-sm text-steel-600 mb-2">
                                {dropItem.description}
                              </p>
                              {dropItem.subcategories && (
                                <div className="flex flex-wrap gap-1">
                                  {dropItem.subcategories.map((sub) => (
                                    <span 
                                      key={sub}
                                      className="text-xs px-2 py-1 bg-steel-100 text-steel-700 rounded"
                                    >
                                      {sub}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="bg-steel-50 px-6 py-4 border-t border-steel-100">
                      <Link 
                        href="/kategoriler"
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        Tüm Kategorileri Gör →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button 
              className="hidden md:flex items-center gap-2 px-4 py-2 text-steel-700 hover:text-primary-600 hover:bg-steel-50 rounded-lg transition-colors"
              aria-label="Arama"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Phone */}
            <a
              href="tel:+905551234567"
              className="hidden md:flex items-center gap-2 px-4 py-2 text-steel-700 hover:text-primary-600 hover:bg-steel-50 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm font-medium">+90 555 123 45 67</span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-md"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-steel-700 hover:text-primary-600 hover:bg-steel-50 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-steel-100 pt-4 animate-slide-up">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-steel-700 hover:bg-steel-50 rounded-lg font-medium"
                    onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdownItems.map((dropItem) => (
                        <Link
                          key={dropItem.title}
                          href={dropItem.href}
                          className="block px-4 py-2 text-sm text-steel-600 hover:text-primary-600 hover:bg-steel-50 rounded-lg"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-steel-100 space-y-2">
              <a
                href="tel:+905551234567"
                className="flex items-center gap-2 px-4 py-3 text-steel-700 hover:bg-steel-50 rounded-lg"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">+90 555 123 45 67</span>
              </a>
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp ile İletişim</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
