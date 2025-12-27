// SEO ve Metadata yardımcı fonksiyonları
import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
}

export function generateMetadata(config: SEOConfig): Metadata {
  const title = config.title.includes('Alya Bıçak') 
    ? config.title 
    : `${config.title} | Alya Bıçak`
  
  const keywords = [
    'alya bıçak',
    'alya bıçakları',
    'endüstriyel bıçak',
    'kesici bıçak',
    ...(config.keywords || [])
  ].join(', ')

  return {
    title,
    description: config.description,
    keywords,
    openGraph: {
      title,
      description: config.description,
      url: config.url,
      siteName: 'Alya Bıçak',
      images: config.image ? [{ url: config.image }] : [],
      locale: 'tr_TR',
      type: config.type || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: config.description,
      images: config.image ? [config.image] : [],
    },
    alternates: {
      canonical: config.url,
    },
  }
}

// Structured Data (Schema.org) için JSON-LD
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Alya Tekstil Sanayi Ticaret Ltd.Şti.',
    alternateName: 'Alya Bıçak',
    url: 'https://www.alyabicak.com',
    logo: 'https://www.alyabicak.com/images/logo.png',
    description: 'Endüstriyel kesici bıçaklar, makina bıçakları ve sanayi jiletleri üreticisi ve distribütörü.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TR',
      addressLocality: 'İstanbul',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-555-123-45-67',
      contactType: 'customer service',
      areaServed: 'TR',
      availableLanguage: ['Turkish'],
    },
    sameAs: [
      // Sosyal medya linkleri buraya eklenecek
    ],
  }
}

export function generateProductSchema(product: {
  name: string
  description: string
  image?: string
  category?: string
  brand?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: product.brand || 'Alya Bıçak',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Alya Tekstil Sanayi Ticaret Ltd.Şti.',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'TRY',
    },
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

