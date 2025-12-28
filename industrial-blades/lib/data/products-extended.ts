/**
 * Alya Bıçak - Genişletilmiş Ürün Verileri
 * Profesyonel ürün detay sayfaları için
 */

import type { ProductExtended, ProductCardData, PLACEHOLDER_IMAGES } from '../types/product.types';

// =============================================================================
// ÖRNEK ÜRÜNLER (Placeholder görsellerle)
// =============================================================================

export const PRODUCTS_EXTENDED: ProductExtended[] = [
  // --- İŞ GÜVENLİĞİ EL BIÇAKLARI ---
  {
    id: 'h006-001-x01',
    slug: 'h006-001-x01-retro-light-knife',
    code: 'H006 001 X01',
    name: 'RETRO LIGHT KNIFE',
    subtitle: 'Döküm Metal El Bıçağı',
    
    categoryId: 'is-guvenligi-el-bicaklari',
    subcategoryId: 'sabit-uclu',
    tags: ['döküm metal', 'sabit uç', 'profesyonel', 'iş güvenliği'],
    
    shortDescription: 'İş güvenliği standartlarına uygun, dayanıklı döküm metal gövdeli profesyonel el bıçağı. Sheffield çeliğinden üretilmiş kesici uç ile uzun ömürlü performans.',
    
    longDescription: `
      <p>RETRO LIGHT KNIFE, endüstriyel kullanım için tasarlanmış premium bir el bıçağıdır. Döküm metal gövdesi sayesinde yoğun kullanımda bile dayanıklılığını korur.</p>
      
      <h3>Öne Çıkan Özellikler</h3>
      <ul>
        <li>Sheffield çeliğinden üretilmiş kesici uç</li>
        <li>Döküm metal gövde ile maksimum dayanıklılık</li>
        <li>Ergonomik tasarım sayesinde uzun süreli kullanımda yorgunluk yapmaz</li>
        <li>Kolay ve güvenli bıçak değişim mekanizması</li>
      </ul>
      
      <h3>Kullanım Önerileri</h3>
      <p>Depo, lojistik, üretim hatları ve genel kesim işlerinde idealdir. Karton, plastik film, ambalaj malzemeleri ve benzeri materyallerin kesilmesinde yüksek performans sağlar.</p>
    `,
    
    images: {
      main: {
        src: '/images/products/h006-001-x01/main.webp',
        alt: 'RETRO LIGHT KNIFE - Döküm Metal El Bıçağı',
        width: 800,
        height: 800,
      },
      gallery: [
        { src: '/images/products/h006-001-x01/gallery-1.webp', alt: 'Yan görünüm', width: 800, height: 800 },
        { src: '/images/products/h006-001-x01/gallery-2.webp', alt: 'Detay görünüm', width: 800, height: 800 },
        { src: '/images/products/h006-001-x01/gallery-3.webp', alt: 'Kullanım örneği', width: 800, height: 800 },
      ],
      thumbnail: {
        src: '/images/products/h006-001-x01/thumb.webp',
        alt: 'RETRO LIGHT KNIFE',
        width: 400,
        height: 400,
      },
    },
    
    specs: [
      { label: 'Malzeme', value: 'Sheffield Çelik', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 58-62', icon: 'Shield' },
      { label: 'Gövde', value: 'Döküm Metal', icon: 'Box' },
      { label: 'Ağırlık', value: '120g', icon: 'Scale' },
      { label: 'Uzunluk', value: '145mm', icon: 'Ruler' },
      { label: 'Bıçak Genişliği', value: '18mm', icon: 'Ruler' },
    ],
    
    origin: {
      brand: 'Durham Duplex',
      country: 'England',
      city: 'Sheffield',
    },
    
    applications: [
      { title: 'Depo & Lojistik', icon: 'Warehouse', description: 'Koli açma ve paket işlemleri' },
      { title: 'Üretim Hatları', icon: 'Factory', description: 'Endüstriyel kesim operasyonları' },
      { title: 'Ambalaj', icon: 'Package', description: 'Film ve streç kesimi' },
    ],
    
    benefits: [
      {
        title: 'Uzun Ömür',
        description: 'Sheffield çeliği sayesinde standart bıçaklara göre daha uzun kesim performansı',
        icon: 'Clock',
      },
      {
        title: 'Güvenli Kullanım',
        description: 'Sabit uç tasarımı ile kontrollü ve güvenli kesim',
        icon: 'Shield',
      },
      {
        title: 'Ergonomik Tasarım',
        description: 'Uzun süreli kullanımda yorgunluk yapmayan kavrama',
        icon: 'Zap',
      },
    ],
    
    features: [
      'Döküm metal gövde',
      'Ergonomik kavrama',
      'Kolay bıçak değişimi',
      'Uzun ömürlü Sheffield çeliği',
      'İş güvenliği standartlarına uygun',
    ],
    
    certifications: ['CE'],
    
    relatedProductIds: ['h008-001-a03', 'h014-001-x01', 'h015-001-z01'],
    
    compatibleParts: [
      { id: 'b206', name: 'Trapez Bıçak', code: 'B206' },
      { id: 'b207', name: 'Trapez Bıçak Kalın', code: 'B207' },
    ],
    
    seo: {
      title: 'RETRO LIGHT KNIFE | Döküm Metal El Bıçağı | Alya Bıçak',
      description: 'Sheffield çeliğinden üretilmiş RETRO LIGHT KNIFE döküm metal el bıçağı. İş güvenliği standartlarına uygun, dayanıklı ve ergonomik. Türkiye distribütörü.',
      keywords: ['el bıçağı', 'döküm metal bıçak', 'iş güvenliği bıçağı', 'sheffield çelik', 'durham duplex'],
    },
    
    isActive: true,
    isFeatured: true,
    isNew: false,
    inStock: true,
    order: 1,
  },
  
  {
    id: 'h008-001-a03',
    slug: 'h008-001-a03-auto-retract',
    code: 'H008 001 A03',
    name: 'AUTO RETRACT',
    subtitle: 'Otomatik Geri Çekilebilir El Bıçağı',
    
    categoryId: 'is-guvenligi-el-bicaklari',
    subcategoryId: 'oto-geri-cekilebilir',
    tags: ['otomatik', 'geri çekilebilir', 'güvenlik', 'iş güvenliği'],
    
    shortDescription: 'Maksimum güvenlik için otomatik geri çekilme mekanizmalı profesyonel el bıçağı. Bıçak bırakıldığında otomatik olarak geri çekilir.',
    
    images: {
      main: {
        src: '/images/products/placeholder.jpg',
        alt: 'AUTO RETRACT - Otomatik Geri Çekilebilir',
        width: 800,
        height: 800,
      },
      gallery: [],
      thumbnail: {
        src: '/images/products/placeholder-thumb.jpg',
        alt: 'AUTO RETRACT',
        width: 400,
        height: 400,
      },
    },
    
    specs: [
      { label: 'Malzeme', value: 'Sheffield Çelik', icon: 'Layers', highlight: true },
      { label: 'Sertlik', value: 'HRC 58-62', icon: 'Shield' },
      { label: 'Mekanizma', value: 'Otomatik Geri Çekilme', icon: 'Zap' },
      { label: 'Ağırlık', value: '95g', icon: 'Scale' },
    ],
    
    origin: {
      brand: 'Durham Duplex',
      country: 'England',
      city: 'Sheffield',
    },
    
    applications: [
      { title: 'Lojistik', icon: 'Truck' },
      { title: 'Üretim', icon: 'Factory' },
      { title: 'Depo', icon: 'Warehouse' },
    ],
    
    features: [
      'Otomatik geri çekilme mekanizması',
      'Güvenlik kilidi',
      'Ergonomik kavrama',
      'Hafif tasarım',
    ],
    
    certifications: ['CE', 'ISO 9001'],
    
    relatedProductIds: ['h006-001-x01', 'h014-001-x01'],
    
    isActive: true,
    isFeatured: true,
    isNew: true,
    inStock: true,
    order: 2,
  },
];

// =============================================================================
// YARDIMCI FONKSİYONLAR
// =============================================================================

/** Tüm aktif ürünleri getir */
export function getAllProductsExtended(): ProductExtended[] {
  return PRODUCTS_EXTENDED.filter(p => p.isActive);
}

/** Slug'a göre ürün getir */
export function getProductBySlug(slug: string): ProductExtended | undefined {
  return PRODUCTS_EXTENDED.find(p => p.slug === slug && p.isActive);
}

/** ID'ye göre ürün getir */
export function getProductById(id: string): ProductExtended | undefined {
  return PRODUCTS_EXTENDED.find(p => p.id === id && p.isActive);
}

/** Kategoriye göre ürünleri getir */
export function getProductsByCategory(categoryId: string): ProductExtended[] {
  return PRODUCTS_EXTENDED.filter(p => p.categoryId === categoryId && p.isActive);
}

/** İlgili ürünleri getir (ProductCardData formatında) */
export function getRelatedProducts(productId: string): ProductCardData[] {
  const product = getProductById(productId);
  if (!product || !product.relatedProductIds) return [];
  
  return product.relatedProductIds
    .map(id => getProductById(id))
    .filter((p): p is ProductExtended => p !== undefined)
    .map(p => ({
      id: p.id,
      slug: p.slug,
      code: p.code,
      name: p.name,
      subtitle: p.subtitle,
      thumbnail: p.images.thumbnail.src,
      categorySlug: p.categoryId,
      categoryName: getCategoryName(p.categoryId),
      origin: p.origin ? `${p.origin.city}, ${p.origin.country}` : undefined,
      isFeatured: p.isFeatured,
      isNew: p.isNew,
    }));
}

/** Öne çıkan ürünleri getir */
export function getFeaturedProductsExtended(): ProductExtended[] {
  return PRODUCTS_EXTENDED.filter(p => p.isFeatured && p.isActive);
}

/** Kategori adını getir (basit mapping) */
function getCategoryName(categoryId: string): string {
  const categoryNames: Record<string, string> = {
    'is-guvenligi-el-bicaklari': 'İş Güvenliği El Bıçakları',
    'sanayi-jiletleri': 'Sanayi Jiletleri',
    'makina-bicaklari': 'Makina Bıçakları',
  };
  return categoryNames[categoryId] || categoryId;
}

/** Tüm ürün slug'larını getir (static generation için) */
export function getAllProductSlugs(): string[] {
  return PRODUCTS_EXTENDED.filter(p => p.isActive).map(p => p.slug);
}

