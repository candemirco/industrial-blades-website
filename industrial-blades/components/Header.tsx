/**
 * Header Component
 * Ana header bileşeni - SOLID prensiplerine uygun
 * 
 * Single Responsibility: Sadece header layout yönetimi
 * Alt componentler: Logo, DesktopNav, MobileMenu, MegaMenu
 */

'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, X, Search, Phone } from 'lucide-react'
import { categoryService } from '@/lib/services'
import { mainNavigation, siteConfig } from '@/lib/config'
import { Logo, DesktopNav, MobileMenu } from '@/components/layout'
import MegaMenu from './MegaMenu'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [closeTimer, setCloseTimer] = useState<NodeJS.Timeout | null>(null)

  // Kategori verilerini servis üzerinden al
  const categories = categoryService.getAllCategoriesWithCounts()

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mega menu handlers
  const handleMenuOpen = useCallback(() => {
    if (closeTimer) clearTimeout(closeTimer)
    setIsMegaMenuOpen(true)
  }, [closeTimer])

  const handleMenuClose = useCallback(() => {
    const timer = setTimeout(() => {
      setIsMegaMenuOpen(false)
    }, 200)
    setCloseTimer(timer)
  }, [])

  // Mobile menu toggle
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-white/95 backdrop-blur-sm py-4'
        }
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNav 
            items={mainNavigation}
            onMenuOpen={handleMenuOpen}
            onMenuClose={handleMenuClose}
          />

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center gap-2 px-4 py-2 text-steel-700 hover:text-primary-600 font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <button
              className="p-2 text-steel-700 hover:text-primary-600 hover:bg-steel-50 rounded-lg transition-colors"
              aria-label="Arama"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-steel-700 hover:text-primary-600 hover:bg-steel-50 rounded-lg transition-colors"
            aria-label={isMobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mega Menu */}
      <div
        onMouseEnter={handleMenuOpen}
        onMouseLeave={handleMenuClose}
      >
        <MegaMenu 
          categories={categories}
          isOpen={isMegaMenuOpen}
          onClose={() => setIsMegaMenuOpen(false)}
        />
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        items={mainNavigation}
        categories={categories}
        onClose={closeMobileMenu}
      />
    </header>
  )
}
