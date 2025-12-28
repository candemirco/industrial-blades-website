# 🔧 Ürün Ekleme Rehberi

Bu dokümantasyon, Alya Bıçak web sitesine yeni ürün ekleme sürecini açıklar.

---

## 📁 Dosya Yapısı

```
lib/
├── data/
│   └── products-extended.ts    ← ÜRÜN VERİLERİ BURAYA EKLENİR
├── types/
│   └── product.types.ts        ← Ürün tip tanımlamaları

components/product/
├── ProductHero.tsx             ← Ana görsel + başlık + CTA
├── ProductSpecs.tsx            ← Teknik özellikler
├── WhyThisProduct.tsx          ← "Neden Bu Ürün?" bölümü
├── ProductApplications.tsx     ← Kullanım alanları
├── ProductGallery.tsx          ← Görsel galerisi
├── RelatedProducts.tsx         ← İlgili ürünler
└── ProductBreadcrumb.tsx       ← Navigasyon

app/urunler/[slug]/
└── page.tsx                    ← Ürün detay sayfası

public/images/products/
└── [ürün-slug]/                ← Her ürün için ayrı klasör
    ├── main.webp               ← Ana görsel (800x800)
    ├── gallery-1.webp          ← Galeri görseli 1
    ├── gallery-2.webp          ← Galeri görseli 2
    ├── gallery-3.webp          ← Galeri görseli 3
    └── thumb.webp              ← Küçük görsel (400x400)
```

---

## 🆕 Yeni Ürün Ekleme (Adım Adım)

### Adım 1: Görsel Klasörü Oluştur

```
public/images/products/[ürün-kodu-slug]/
```

Örnek: `public/images/products/h006-001-x01-retro-light-knife/`

### Adım 2: Görselleri Ekle

| Dosya | Boyut | Açıklama |
|-------|-------|----------|
| `main.webp` | 800x800px | Ana ürün görseli |
| `gallery-1.webp` | 800x800px | Yan görünüm |
| `gallery-2.webp` | 800x800px | Detay görünüm |
| `gallery-3.webp` | 800x800px | Kullanım örneği |
| `thumb.webp` | 400x400px | Liste için küçük görsel |

**Görsel Gereksinimleri:**
- Format: WebP (öncelikli) veya JPG
- Arka plan: Beyaz veya şeffaf
- Dekupe edilmiş (ürün net görünmeli)

### Adım 3: Ürün Verisini Ekle

`lib/data/products-extended.ts` dosyasını aç ve `PRODUCTS_EXTENDED` dizisine yeni ürün ekle:

```typescript
{
  // ZORUNLU ALANLAR
  id: 'h006-001-x01',                              // Benzersiz ID (küçük harf, tire ile)
  slug: 'h006-001-x01-retro-light-knife',          // URL slug (ID + ürün adı)
  code: 'H006 001 X01',                            // Ürün kodu (görüntüleme için)
  name: 'RETRO LIGHT KNIFE',                       // Ürün adı
  subtitle: 'Döküm Metal El Bıçağı',               // Alt başlık (opsiyonel)
  
  // KATEGORİZASYON
  categoryId: 'is-guvenligi-el-bicaklari',         // Ana kategori ID
  subcategoryId: 'sabit-uclu',                     // Alt kategori ID (opsiyonel)
  tags: ['döküm metal', 'profesyonel'],            // Etiketler (opsiyonel)
  
  // AÇIKLAMALAR
  shortDescription: 'Kısa açıklama...',            // 1-2 cümle
  longDescription: '<p>HTML destekli...</p>',      // Detaylı açıklama (opsiyonel)
  
  // GÖRSELLER
  images: {
    main: {
      src: '/images/products/h006-001-x01-retro-light-knife/main.webp',
      alt: 'RETRO LIGHT KNIFE - Döküm Metal El Bıçağı',
      width: 800,
      height: 800,
    },
    gallery: [
      { src: '/images/products/h006-001-x01-retro-light-knife/gallery-1.webp', alt: 'Yan görünüm', width: 800, height: 800 },
      { src: '/images/products/h006-001-x01-retro-light-knife/gallery-2.webp', alt: 'Detay', width: 800, height: 800 },
    ],
    thumbnail: {
      src: '/images/products/h006-001-x01-retro-light-knife/thumb.webp',
      alt: 'RETRO LIGHT KNIFE',
      width: 400,
      height: 400,
    },
  },
  
  // TEKNİK ÖZELLİKLER
  specs: [
    { label: 'Malzeme', value: 'Sheffield Çelik', icon: 'Layers', highlight: true },
    { label: 'Sertlik', value: 'HRC 58-62', icon: 'Shield' },
    { label: 'Gövde', value: 'Döküm Metal', icon: 'Box' },
    { label: 'Ağırlık', value: '120g', icon: 'Scale' },
  ],
  
  // ORİJİN (opsiyonel ama önerilir)
  origin: {
    brand: 'Durham Duplex',
    country: 'England',
    city: 'Sheffield',
  },
  
  // KULLANIM ALANLARI (opsiyonel)
  applications: [
    { title: 'Depo & Lojistik', icon: 'Warehouse' },
    { title: 'Üretim', icon: 'Factory' },
  ],
  
  // NEDEN BU ÜRÜN - Risk azaltıcı (opsiyonel)
  benefits: [
    { title: 'Uzun Ömür', description: 'Açıklama...', icon: 'Clock' },
  ],
  
  // ÖZELLİKLER LİSTESİ (opsiyonel)
  features: ['Döküm metal gövde', 'Ergonomik tasarım'],
  
  // SERTİFİKALAR (opsiyonel)
  certifications: ['CE'],
  
  // İLGİLİ ÜRÜNLER (opsiyonel)
  relatedProductIds: ['h008-001-a03'],
  
  // SEO (opsiyonel ama önerilir)
  seo: {
    title: 'RETRO LIGHT KNIFE | Alya Bıçak',
    description: 'SEO açıklaması...',
    keywords: ['el bıçağı', 'sheffield'],
  },
  
  // DURUM
  isActive: true,                                  // Sitede görünsün mü?
  isFeatured: false,                               // Öne çıkan mı?
  isNew: false,                                    // Yeni ürün mü?
  inStock: true,                                   // Stokta var mı?
  order: 1,                                        // Sıralama
}
```

---

## 📋 Kategori ID'leri

| Kategori | ID |
|----------|-----|
| İş Güvenliği El Bıçakları | `is-guvenligi-el-bicaklari` |
| Sanayi Jiletleri | `sanayi-jiletleri` |
| Makina Bıçakları | `makina-bicaklari` |

---

## 🎨 Kullanılabilir İkonlar

### Teknik Özellikler (specs.icon)
- `Layers` - Malzeme
- `Shield` - Sertlik/Güvenlik
- `Box` - Gövde/Kutu
- `Scale` - Ağırlık
- `Ruler` - Boyut/Uzunluk
- `Palette` - Renk
- `Gauge` - Ölçü
- `Package` - Paket

### Kullanım Alanları (applications.icon)
- `Factory` - Üretim
- `Warehouse` - Depo
- `Package` - Ambalaj
- `Truck` - Lojistik
- `Scissors` - Kesim
- `Wrench` - Bakım
- `Beef` - Gıda
- `Recycle` - Geri dönüşüm

### Neden Bu Ürün (benefits.icon)
- `Clock` - Uzun ömür
- `Shield` - Güvenlik
- `Zap` - Performans
- `TrendingUp` - Verimlilik
- `Wrench` - Teknik destek

---

## ⚡ Hızlı Ekleme Şablonu

Minimum gerekli alanlarla ürün:

```typescript
{
  id: 'yeni-urun-id',
  slug: 'yeni-urun-slug',
  code: 'ÜRÜN KODU',
  name: 'ÜRÜN ADI',
  categoryId: 'is-guvenligi-el-bicaklari',
  shortDescription: 'Kısa açıklama...',
  images: {
    main: { src: '/images/products/placeholder.jpg', alt: 'Ürün' },
    gallery: [],
    thumbnail: { src: '/images/products/placeholder-thumb.jpg', alt: 'Ürün' },
  },
  specs: [
    { label: 'Malzeme', value: 'Sheffield Çelik' },
  ],
  isActive: true,
  isFeatured: false,
  order: 99,
}
```

---

## 🔗 Ürün URL Formatı

```
https://alyabicak.com/urunler/[slug]
```

Örnek: `https://alyabicak.com/urunler/h006-001-x01-retro-light-knife`

---

## ✅ Kontrol Listesi

Yeni ürün eklerken:

- [ ] Benzersiz `id` ve `slug` oluşturuldu
- [ ] `categoryId` doğru kategoriyle eşleşiyor
- [ ] Görsel klasörü oluşturuldu (`public/images/products/[slug]/`)
- [ ] En az `main.webp` görseli eklendi
- [ ] `shortDescription` yazıldı
- [ ] En az 2-3 `specs` (teknik özellik) eklendi
- [ ] `isActive: true` ayarlandı

---

## 🐛 Sorun Giderme

### Ürün sayfası 404 veriyor
- `slug` değerinin doğru olduğundan emin ol
- `isActive: true` olduğundan emin ol

### Görseller görünmüyor
- Dosya yolunun doğru olduğundan emin ol
- Dosya uzantısının `.webp` veya `.jpg` olduğundan emin ol
- Dosyanın `public/images/products/` altında olduğundan emin ol

### Teknik özellikler görünmüyor
- `specs` dizisinin boş olmadığından emin ol
- Her spec'in `label` ve `value` alanları olmalı

---

## 📞 Destek

Sorularınız için: info@alyatekstil.com

