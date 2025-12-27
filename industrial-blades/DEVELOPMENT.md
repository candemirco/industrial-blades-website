# Alya Bıçak - Geliştirme Notları

## Mimari Yapı

Proje SOLID prensiplerine uygun, temiz mimari ile tasarlanmıştır.

### Klasör Yapısı

```
lib/
├── types/
│   └── index.ts          # Tüm TypeScript tip tanımları
├── data/
│   ├── index.ts          # Merkezi veri export
│   ├── categories.ts     # Kategori verileri (SINGLE SOURCE OF TRUTH)
│   ├── products.ts       # Ürün verileri (SINGLE SOURCE OF TRUTH)
│   └── hero-slides.ts    # Hero slider verileri
├── services/
│   ├── index.ts          # Servis export
│   ├── category.service.ts  # Kategori işlemleri
│   └── product.service.ts   # Ürün işlemleri
├── seo.ts                # SEO yardımcı fonksiyonları
└── index.ts              # Merkezi kütüphane export
```

### SOLID Prensipleri

1. **Single Responsibility**: Her dosya/sınıf tek bir sorumluluğa sahip
   - `categories.ts`: Sadece kategori verileri
   - `category.service.ts`: Sadece kategori işlemleri

2. **Open/Closed**: Yeni veri eklemek için mevcut kod değişmez
   - Yeni kategori: `CATEGORIES` objesine ekle
   - Yeni ürün: `PRODUCTS` dizisine ekle

3. **Liskov Substitution**: Tipler uyumlu
   - `CategoryView` extends `Category`
   - `SubCategoryView` extends `SubCategory`

4. **Interface Segregation**: Küçük, spesifik tipler
   - `ProductCardView`: Listeleme için minimal veri
   - `ProductDetailView`: Detay sayfası için tam veri

5. **Dependency Inversion**: Servisler veri katmanına bağımlı
   - Bileşenler servisleri kullanır
   - Servisler veri katmanını kullanır

## Yeni Kategori Ekleme

```typescript
// lib/data/categories.ts

// 1. Alt kategori ekle
export const SUBCATEGORIES: Record<string, SubCategory> = {
  // ... mevcut alt kategoriler
  'yeni-alt-kategori': {
    id: 'yeni-alt-kategori',
    slug: 'yeni-alt-kategori',
    name: 'Yeni Alt Kategori',
    description: 'Açıklama',
    parentId: 'ana-kategori-id',
    order: 1,
    isActive: true,
  },
};

// 2. Ana kategorinin subcategoryIds'ine ekle
export const CATEGORIES: Record<string, Category> = {
  'ana-kategori-id': {
    // ... mevcut alanlar
    subcategoryIds: [
      // ... mevcut alt kategoriler
      'yeni-alt-kategori',
    ],
  },
};
```

## Yeni Ürün Ekleme

```typescript
// lib/data/products.ts

export const PRODUCTS: Product[] = [
  // ... mevcut ürünler
  {
    id: 'yeni-urun-id',
    slug: 'yeni-urun-slug',
    code: 'YU-001',
    name: 'Yeni Ürün Adı',
    description: 'Ürün açıklaması',
    categoryId: 'kategori-id',      // CATEGORIES'deki ID
    subcategoryId: 'alt-kategori-id', // SUBCATEGORIES'deki ID
    image: '/images/products/yeni-urun.jpg',
    variants: [
      {
        id: 'yu-001-standard',
        sku: 'YU-001',
        inStock: true,
      },
    ],
    specifications: {
      material: 'Sheffield Çelik',
      hardness: 'HRC 58-62',
    },
    features: ['Özellik 1', 'Özellik 2'],
    applications: ['Uygulama 1', 'Uygulama 2'],
    isFeatured: false,
    isActive: true,
    order: 1,
  },
];
```

## Servis Kullanımı

```typescript
// Bileşenlerde
import { categoryService, productService } from '@/lib/services';

// Kategorileri al (ürün sayıları hesaplanmış)
const categories = categoryService.getAllCategoriesWithCounts();

// Öne çıkan ürünleri al
const featuredProducts = productService.getFeaturedCards();

// Kategoriye göre ürünleri al
const categoryProducts = productService.getCategoryCards('sanayi-jiletleri');

// Arama yap
const searchResults = productService.search('trapez');
```

## Tamamlanan Özellikler ✅

- [x] Temiz mimari yapısı (SOLID)
- [x] Tip güvenliği (TypeScript)
- [x] Kategori yönetimi
- [x] Ürün yönetimi
- [x] SEO optimizasyonu
- [x] Mega menü (kategori sayıları dinamik)
- [x] Kategori sayfaları
- [x] Alt kategori sayfaları
- [x] İletişim formu
- [x] Hakkımızda sayfası
- [x] Danışmanlık sayfası

## Yapılacaklar 🚧

- [ ] Ürün detay sayfası (`/urunler/[slug]`)
- [ ] Ürün listeleme sayfası (`/urunler`)
- [ ] Sheffield Kalitesi sayfası
- [ ] Blog/İçerik sayfaları
- [ ] Görsel optimizasyonu
- [ ] Backend entegrasyonu (form gönderimi)
- [ ] Google Analytics
- [ ] Google Search Console

## Çalıştırma

```bash
cd industrial-blades-website/industrial-blades
npm run dev
```

Site: http://localhost:3000

## Önemli Notlar

1. **Domain**: `sitemap.ts` ve `robots.ts`'de `www.alyabicak.com` placeholder
2. **Görseller**: Placeholder görseller kullanılıyor
3. **İletişim**: Telefon/e-posta placeholder değerler
