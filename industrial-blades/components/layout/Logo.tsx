/**
 * Logo Component
 * Site logosu - Header ve Footer'da kullanılır
 */

import Link from 'next/link'
import Image from 'next/image'

export interface LogoProps {
  variant?: 'default' | 'white'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  className?: string
}

const sizes = {
  sm: { width: 80, height: 26 },
  md: { width: 120, height: 38 },
  lg: { width: 160, height: 50 },
}

export default function Logo({ 
  variant = 'default', 
  size = 'md',
  href = '/',
  className = '',
}: LogoProps) {
  const { width, height } = sizes[size]
  const logoSrc = variant === 'white' ? '/images/logo-white.svg' : '/images/logo.png'

  const logoImage = (
    <Image
      src={logoSrc}
      alt="Alya Bıçak Logo"
      width={width}
      height={height}
      className={`w-auto h-auto ${className}`}
      priority
    />
  )

  if (href) {
    return (
      <Link href={href} className="flex-shrink-0">
        {logoImage}
      </Link>
    )
  }

  return logoImage
}

