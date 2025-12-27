/**
 * Navigation Configuration
 * Merkezi navigasyon yapılandırması
 */

export interface NavItem {
  title: string
  href: string
  hasMegaMenu?: boolean
  isExternal?: boolean
  icon?: string
}

export const mainNavigation: NavItem[] = [
  {
    title: 'Endüstriyel Kesiciler',
    href: '/#kategoriler',
    hasMegaMenu: true,
  },
  {
    title: 'Sheffield Kalitesi',
    href: '/sheffield-kalitesi',
  },
  {
    title: 'Danışmanlık',
    href: '/danismanlik',
  },
  {
    title: 'Hakkımızda',
    href: '/hakkimizda',
  },
  {
    title: 'İletişim',
    href: '/iletisim',
  },
]

export const footerNavigation = {
  quickLinks: [
    { title: 'Hakkımızda', href: '/hakkimizda' },
    { title: 'Endüstriyel Kesiciler', href: '/kategoriler' },
    { title: 'Danışmanlık', href: '/danismanlik' },
    { title: 'İletişim', href: '/iletisim' },
  ],
  legal: [
    { title: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
    { title: 'KVKK', href: '/kvkk' },
  ],
}

