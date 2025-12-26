// Type Definitions - Clean Architecture
// Single Responsibility: Sadece tip tanımları

/**
 * Ürün varyantları - Farklı ölçüler için
 * Örnek: 3 Delikli Jilet 0.20mm, 0.25mm, 0.30mm
 */
export interface ProductVariant {
  id: string;
  size: string;          // "0.20mm", "0.25mm", "100x50mm" vb.
  code: string;          // Ürün kodu: "AJ-001-020"
  specs?: string[];      // ["Paslanmaz çelik", "Yüksek dayanım"]
  inStock?: boolean;
}

/**
 * Ana ürün - Varyantları içerir
 */
export interface Product {
  id: string;
  name: string;          // "3 Delikli Jilet"
  slug: string;          // "3-delikli-jilet"
  description: string;
  variants: ProductVariant[];  // Farklı ölçüler
  category: string;      // "sanayi-jiletleri"
  subcategory: string;   // "3-delikli-jiletler"
  image?: string;
  features?: string[];   // Öne çıkan özellikler
  applications?: string[]; // Kullanım alanları
}

/**
 * Alt kategori - Mega menüde görünür
 */
export interface SubCategory {
  id: string;
  name: string;          // "3 Delikli Jiletler"
  slug: string;          // "3-delikli-jiletler"
  description?: string;
  icon?: string;         // Lucide icon name
  productCount: number;  // Dinamik hesaplanabilir
}

/**
 * Ana kategori - Top level navigation
 */
export interface Category {
  id: string;
  name: string;          // "Sanayi Jiletleri"
  slug: string;          // "sanayi-jiletleri"
  description: string;
  subcategories: SubCategory[];
  image?: string;        // Kategori görseli
  featured?: boolean;    // Öne çıkan kategori mi?
  order?: number;        // Sıralama
}

/**
 * Sertifikasyon bilgileri
 */
export interface Certification {
  id: string;
  name: string;          // "ISO 9001:2015"
  logo?: string;
  description?: string;
  verified: boolean;
}

/**
 * Ortaklık/Distribütörlük bilgisi
 */
export interface Partnership {
  id: string;
  name: string;          // "Durham Duplex"
  logo: string;
  role: string;          // "Authorized Distributor"
  since?: number;        // 2010
  description?: string;
  url?: string;
}
