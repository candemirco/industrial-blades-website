/**
 * Desktop Navigation Component
 * Masaüstü navigasyon menüsü
 */

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavItem } from '@/lib/config'

export interface DesktopNavProps {
  items: NavItem[]
  onMenuOpen?: () => void
  onMenuClose?: () => void
}

export default function DesktopNav({ 
  items, 
  onMenuOpen, 
  onMenuClose,
}: DesktopNavProps) {
  const pathname = usePathname()

  // Anasayfada kategoriler bölümüne scroll
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.hasMegaMenu && pathname === '/') {
      e.preventDefault()
      const kategorilerSection = document.getElementById('kategoriler')
      if (kategorilerSection) {
        kategorilerSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="relative"
          onMouseEnter={() => item.hasMegaMenu && onMenuOpen?.()}
          onMouseLeave={() => item.hasMegaMenu && onMenuClose?.()}
        >
          <Link
            href={item.href}
            onClick={(e) => handleClick(e, item)}
            className={`
              flex items-center gap-1 px-4 py-2 font-medium transition-colors rounded-lg
              ${pathname === item.href 
                ? 'text-primary-600 bg-primary-50' 
                : 'text-steel-700 hover:text-primary-600 hover:bg-steel-50'
              }
            `}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </nav>
  )
}

