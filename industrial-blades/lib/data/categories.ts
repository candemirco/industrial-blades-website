/**
 * Alya Bıçak - Kategori Verileri
 * Single Source of Truth for Categories
 * 
 * Yeni kategori eklemek için:
 * 1. CATEGORIES objesine yeni kategori ekle
 * 2. SUBCATEGORIES objesine alt kategorileri ekle
 * 3. Kategori'nin subcategoryIds'ine alt kategori ID'lerini ekle
 */

import { Category, SubCategory } from '../types';

// =============================================================================
// ALT KATEGORİLER
// =============================================================================

export const SUBCATEGORIES: Record<string, SubCategory> = {
  // --- SANAYİ JİLETLERİ ALT KATEGORİLERİ ---
  'ok-bicaklar': {
    id: 'ok-bicaklar',
    slug: 'ok-bicaklar',
    name: 'OK Bıçaklar',
    description: 'Profesyonel ok bıçakları ve jiletler',
    parentId: 'sanayi-jiletleri',
    order: 1,
    isActive: true,
  },
  '3-delikli-dilme': {
    id: '3-delikli-dilme',
    slug: '3-delikli-dilme-jiletleri',
    name: '3 Delikli Dilme Jiletleri',
    description: 'Endüstri standardı 3 delikli jiletler',
    image: '/images/3-delikli titanyum kaplamalı jilet.jpg',
    parentId: 'sanayi-jiletleri',
    order: 2,
    isActive: true,
  },
  'slotted-dilme': {
    id: 'slotted-dilme',
    slug: 'slotted-dilme-jiletleri',
    name: 'Slotted Dilme Jiletleri',
    description: 'Yüksek performanslı slotted jiletler',
    parentId: 'sanayi-jiletleri',
    order: 3,
    isActive: true,
  },
  'injektor-dilme': {
    id: 'injektor-dilme',
    slug: 'injektor-dilme-jiletleri',
    name: 'İnjektör Dilme Jiletleri',
    description: 'Hassas kesim için injektör jiletler',
    parentId: 'sanayi-jiletleri',
    order: 4,
    isActive: true,
  },
  'tek-kenarli': {
    id: 'tek-kenarli',
    slug: 'tek-kenarli-jiletler',
    name: 'Tek Kenarlı Jiletler',
    description: 'Güvenli kullanım için tek kenarlı jiletler',
    parentId: 'sanayi-jiletleri',
    order: 5,
    isActive: true,
  },
  'trapez-bicaklar': {
    id: 'trapez-bicaklar',
    slug: 'trapez-bicaklar',
    name: 'Trapez Bıçaklar',
    description: 'Çok amaçlı trapez kesim bıçakları',
    parentId: 'sanayi-jiletleri',
    order: 6,
    isActive: true,
  },
  'kanca-bicaklar': {
    id: 'kanca-bicaklar',
    slug: 'kanca-bicaklar',
    name: 'Kanca Bıçaklar',
    description: 'Özel uygulamalar için kanca bıçaklar',
    parentId: 'sanayi-jiletleri',
    order: 7,
    isActive: true,
  },
  'falcata-bicaklar': {
    id: 'falcata-bicaklar',
    slug: 'maket-bicak-falcata',
    name: 'Maket Bıçak Ucu | Falçata',
    description: 'Hassas kesim için maket uçları',
    parentId: 'sanayi-jiletleri',
    order: 8,
    isActive: true,
  },
  'hobi-jiletleri': {
    id: 'hobi-jiletleri',
    slug: 'hobi-jiletleri',
    name: 'Hobi Jiletleri',
    description: 'Hobi ve el işleri için jiletler',
    parentId: 'sanayi-jiletleri',
    order: 9,
    isActive: true,
  },
  'dairesel-jiletler': {
    id: 'dairesel-jiletler',
    slug: 'dairesel-jiletler',
    name: 'Dairesel Jiletler',
    description: 'Döner kesim için dairesel jiletler',
    parentId: 'sanayi-jiletleri',
    order: 10,
    isActive: true,
  },

  // --- MAKİNA BIÇAKLARI ALT KATEGORİLERİ ---
  'doner-bicaklari': {
    id: 'doner-bicaklari',
    slug: 'doner-bicaklari',
    name: 'Döner Bıçakları',
    description: 'Profesyonel kebap kesim bıçakları',
    parentId: 'makina-bicaklari',
    order: 1,
    isActive: true,
  },
  'koli-bantlama': {
    id: 'koli-bantlama',
    slug: 'koli-bantlama-kutu-kapama',
    name: 'Koli Bantlama - Kutu Kapama',
    description: 'Paketleme makinaları için bıçaklar',
    parentId: 'makina-bicaklari',
    order: 2,
    isActive: true,
  },
  'geri-donusum': {
    id: 'geri-donusum',
    slug: 'geri-donusum-bicaklari',
    name: 'Geri Dönüşüm Bıçakları',
    description: 'Geri dönüşüm işlemleri için bıçaklar',
    parentId: 'makina-bicaklari',
    order: 3,
    isActive: true,
  },
  'pnomatik-tutucu': {
    id: 'pnomatik-tutucu',
    slug: 'pnomatik-tutucu',
    name: 'Pnömatik Tutucu Bıçakları',
    description: 'Pneumatic sistem bıçakları',
    parentId: 'makina-bicaklari',
    order: 4,
    isActive: true,
  },
  'alt-ust-bicaklar': {
    id: 'alt-ust-bicaklar',
    slug: 'alt-ust-bicaklar',
    name: 'Alt ve Üst Bıçaklar',
    description: 'Çift taraflı kesim sistemleri',
    parentId: 'makina-bicaklari',
    order: 5,
    isActive: true,
  },
  'vakum-paketleme': {
    id: 'vakum-paketleme',
    slug: 'vakum-paketleme',
    name: 'Vakum Paketleme Bıçakları',
    description: 'Vakum paketleme makinaları için',
    parentId: 'makina-bicaklari',
    order: 6,
    isActive: true,
  },
  'logsaw-kagit': {
    id: 'logsaw-kagit',
    slug: 'logsaw-kagit-bicaklari',
    name: 'Logsaw - Kağıt Bıçakları',
    description: 'Tuvalet kağıdı ve kağıt havlu için',
    parentId: 'makina-bicaklari',
    order: 7,
    isActive: true,
  },
  'et-acma': {
    id: 'et-acma',
    slug: 'et-acma-bicaklari',
    name: 'Et Açma Bıçakları',
    description: 'Profesyonel et işleme bıçakları',
    parentId: 'makina-bicaklari',
    order: 8,
    isActive: true,
  },

  // --- İŞ GÜVENLİĞİ & EL BIÇAKLARI ALT KATEGORİLERİ ---
  'oto-geri-cekilebilir': {
    id: 'oto-geri-cekilebilir',
    slug: 'otomatik-geri-cekilebilir',
    name: 'Otomatik Geri Çekilebilir',
    description: 'Güvenlik kilidi ile geri çekilebilir',
    parentId: 'is-guvenligi-el-bicaklari',
    order: 1,
    isActive: true,
  },
  'sabit-uclu': {
    id: 'sabit-uclu',
    slug: 'sabit-uclu-bicaklar',
    name: 'Sabit Uçlu Bıçaklar',
    description: 'Profesyonel sabit uç bıçaklar',
    parentId: 'is-guvenligi-el-bicaklari',
    order: 2,
    isActive: true,
  },
  'guvenlik-bicaklari': {
    id: 'guvenlik-bicaklari',
    slug: 'guvenlik-bicaklari',
    name: 'Güvenlik Bıçakları',
    description: 'Yüksek güvenlik standartlı bıçaklar',
    parentId: 'is-guvenligi-el-bicaklari',
    order: 3,
    isActive: true,
  },
  'maket-bicaklari': {
    id: 'maket-bicaklari',
    slug: 'maket-bicaklari',
    name: 'Maket Bıçakları',
    description: 'Hassas kesim için maket bıçaklar',
    parentId: 'is-guvenligi-el-bicaklari',
    order: 4,
    isActive: true,
  },
  'capak-alma-hobi': {
    id: 'capak-alma-hobi',
    slug: 'capak-alma-hobi',
    name: 'Çapak Alma & Hobi Bıçakları',
    description: 'Detaylı işler için özel bıçaklar',
    parentId: 'is-guvenligi-el-bicaklari',
    order: 5,
    isActive: true,
  },
  'olfa-dairesel': {
    id: 'olfa-dairesel',
    slug: 'olfa-dairesel',
    name: 'OLFA Dairesel Bıçaklar',
    description: 'OLFA marka dairesel kesim bıçakları',
    parentId: 'is-guvenligi-el-bicaklari',
    order: 6,
    isActive: true,
  },
  'olfa-falcata': {
    id: 'olfa-falcata',
    slug: 'olfa-falcata',
    name: 'OLFA Falçata Bıçaklar',
    description: 'OLFA profesyonel falçata serisi',
    parentId: 'is-guvenligi-el-bicaklari',
    order: 7,
    isActive: true,
  },
  'olfa-is-guvenligi': {
    id: 'olfa-is-guvenligi',
    slug: 'olfa-is-guvenligi',
    name: 'OLFA İş Güvenliği Bıçakları',
    description: 'OLFA güvenlik sertifikalı ürünler',
    parentId: 'is-guvenligi-el-bicaklari',
    order: 8,
    isActive: true,
  },
};

// =============================================================================
// ANA KATEGORİLER
// =============================================================================

export const CATEGORIES: Record<string, Category> = {
  'sanayi-jiletleri': {
    id: 'sanayi-jiletleri',
    slug: 'sanayi-jiletleri',
    name: 'Sanayi Jiletleri',
    description: 'Endüstriyel kullanım için profesyonel sanayi jiletleri ve kesici aletler',
    image: '/images/categories/sanayi-jiletleri.jpg',
    subcategoryIds: [
      'ok-bicaklar',
      '3-delikli-dilme',
      'slotted-dilme',
      'injektor-dilme',
      'tek-kenarli',
      'trapez-bicaklar',
      'kanca-bicaklar',
      'falcata-bicaklar',
      'hobi-jiletleri',
      'dairesel-jiletler',
    ],
    order: 1,
    isFeatured: true,
    isActive: true,
  },
  'makina-bicaklari': {
    id: 'makina-bicaklari',
    slug: 'makina-bicaklari',
    name: 'Makina Bıçakları',
    description: 'Endüstriyel makinalar için özel üretim bıçaklar ve kesici sistemler',
    image: '/images/categories/makina-bicaklari.jpg',
    subcategoryIds: [
      'doner-bicaklari',
      'koli-bantlama',
      'geri-donusum',
      'pnomatik-tutucu',
      'alt-ust-bicaklar',
      'vakum-paketleme',
      'logsaw-kagit',
      'et-acma',
    ],
    order: 2,
    isFeatured: true,
    isActive: true,
  },
  'is-guvenligi-el-bicaklari': {
    id: 'is-guvenligi-el-bicaklari',
    slug: 'is-guvenligi-el-bicaklari',
    name: 'İş Güvenliği & El Bıçakları',
    description: 'İş güvenliği standartlarına uygun profesyonel el bıçakları ve kesici aletler',
    image: '/images/categories/is-guvenligi-el-bicaklari.jpg',
    subcategoryIds: [
      'oto-geri-cekilebilir',
      'sabit-uclu',
      'guvenlik-bicaklari',
      'maket-bicaklari',
      'capak-alma-hobi',
      'olfa-dairesel',
      'olfa-falcata',
      'olfa-is-guvenligi',
    ],
    order: 3,
    isFeatured: true,
    isActive: true,
  },
};

// =============================================================================
// YARDIMCI FONKSİYONLAR
// =============================================================================

/** Tüm aktif kategorileri döndür (sıralı) */
export function getAllCategories(): Category[] {
  return Object.values(CATEGORIES)
    .filter(cat => cat.isActive)
    .sort((a, b) => a.order - b.order);
}

/** Tüm aktif alt kategorileri döndür (sıralı) */
export function getAllSubcategories(): SubCategory[] {
  return Object.values(SUBCATEGORIES)
    .filter(sub => sub.isActive)
    .sort((a, b) => a.order - b.order);
}

/** Kategori ID'ye göre kategori getir */
export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES[id];
}

/** Kategori slug'a göre kategori getir */
export function getCategoryBySlug(slug: string): Category | undefined {
  return Object.values(CATEGORIES).find(cat => cat.slug === slug);
}

/** Alt kategori ID'ye göre alt kategori getir */
export function getSubcategoryById(id: string): SubCategory | undefined {
  return SUBCATEGORIES[id];
}

/** Alt kategori slug'a göre alt kategori getir */
export function getSubcategoryBySlug(slug: string): SubCategory | undefined {
  return Object.values(SUBCATEGORIES).find(sub => sub.slug === slug);
}

/** Kategoriye ait alt kategorileri getir (sıralı) */
export function getSubcategoriesByCategory(categoryId: string): SubCategory[] {
  const category = CATEGORIES[categoryId];
  if (!category) return [];
  
  return category.subcategoryIds
    .map(id => SUBCATEGORIES[id])
    .filter((sub): sub is SubCategory => sub !== undefined && sub.isActive)
    .sort((a, b) => a.order - b.order);
}

/** Alt kategorinin ana kategorisini getir */
export function getParentCategory(subcategoryId: string): Category | undefined {
  const subcategory = SUBCATEGORIES[subcategoryId];
  if (!subcategory) return undefined;
  return CATEGORIES[subcategory.parentId];
}

