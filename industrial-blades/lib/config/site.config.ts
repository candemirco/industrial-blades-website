/**
 * Site Konfigürasyonu
 * Merkezi yapılandırma dosyası - Production'da environment variable kullanın
 * 
 * Environment Variables (.env.local):
 * NEXT_PUBLIC_SITE_URL=https://www.alyabicak.com
 * NEXT_PUBLIC_PHONE=+902121234567
 * NEXT_PUBLIC_WHATSAPP=902121234567
 * NEXT_PUBLIC_EMAIL=info@alyabicak.com
 */

export const siteConfig = {
  // Site Bilgileri
  name: 'Alya Bıçak',
  tagline: 'Endüstriyel Kesici Bıçaklar | Sheffield Kalitesi',
  description: 'Alya Bıçak - Endüstriyel kesici bıçaklar, makina bıçakları, sanayi jiletleri. Sheffield kalitesi ile üretilmiş profesyonel bıçaklar.',
  
  // URL'ler
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.alyabicak.com',
  mainSiteUrl: 'https://www.alyatekstil.com',
  
  // İletişim Bilgileri
  contact: {
    phone: process.env.NEXT_PUBLIC_PHONE || '+90 212 XXX XX XX',
    phoneRaw: process.env.NEXT_PUBLIC_PHONE_RAW || '+902121234567',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '902121234567',
    email: process.env.NEXT_PUBLIC_EMAIL || 'info@alyabicak.com',
    address: {
      line1: 'İstanbul, Türkiye',
      line2: '',
      city: 'İstanbul',
      country: 'Türkiye',
    },
  },
  
  // Şirket Bilgileri
  company: {
    legalName: 'Alya Tekstil Sanayi Ticaret Ltd.Şti.',
    foundedYear: 1996,
    yearsOfExperience: new Date().getFullYear() - 1996,
    exportCountries: 35,
  },
  
  // Sosyal Medya
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: '',
    youtube: '',
  },
  
  // SEO
  seo: {
    keywords: [
      'alya bıçak',
      'alya bıçakları', 
      'endüstriyel bıçak',
      'kesici bıçak',
      'makina bıçağı',
      'sanayi jileti',
      'sheffield bıçak',
      'özel üretim bıçak',
      'endüstriyel kesici',
      'martor alternatifi',
      'lutz blade alternatifi',
    ],
    defaultOgImage: '/images/og-image.jpg',
  },
  
  // Özellikler
  features: {
    enableWhatsApp: true,
    enableContactForm: true,
    enableProductSearch: false, // TODO: Arama özelliği eklendiğinde true yap
    enableBlog: false, // TODO: Blog eklendiğinde true yap
  },
} as const;

// Type exports
export type SiteConfig = typeof siteConfig;

// Helper functions
export function getWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

export function getPhoneUrl(): string {
  return `tel:${siteConfig.contact.phoneRaw}`;
}

export function getEmailUrl(subject?: string): string {
  const baseUrl = `mailto:${siteConfig.contact.email}`;
  if (subject) {
    return `${baseUrl}?subject=${encodeURIComponent(subject)}`;
  }
  return baseUrl;
}

