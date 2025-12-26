// Gerçek ürün verileri - alyatekstil.com'dan çekildi (76 ürün)
// Görseller placeholder, profesyonel fotoğraf çekimi sonrası güncellenecek

import { Product } from './data'

export const scrapedProducts: Product[] = [
  // İŞ GÜVENLİĞİ EL BIÇAKLARI (64 ürün)
  {
    id: 'h006-001-x01',
    name: 'H006 001 X01 | RETRO LIGHT KNIFE – Döküm Metal El Bıçağı',
    slug: 'h006-001-x01',
    category: 'is-guvenligi-el-bicaklari',
    image: '/images/products/H006-001-X01.jpg',
    price: 0,
    description: 'RETRO LIGHT KNIFE – Döküm Metal El Bıçağı. İş güvenliği standartlarına uygun, dayanıklı döküm metal gövdeli el bıçağı.',
    specifications: {
      material: 'Sheffield Çelik',
      hardness: 'HRC 58-62',
      dimensions: 'Standart'
    },
    inStock: true,
    featured: false
  },
  {
    id: 'h008-001-a03',
    name: 'H008 001 A03 | AUTO RETRACT – Otomatik Geri Çekilebilir',
    slug: 'h008-001-a03',
    category: 'is-guvenligi-el-bicaklari',
    image: '/images/products/H008-001-A03.jpg',
    price: 0,
    description: 'AUTO RETRACT – Otomatik Geri Çekilebilir bıçak. Maksimum güvenlik için otomatik geri çekilme mekanizması.',
    specifications: {
      material: 'Sheffield Çelik',
      hardness: 'HRC 58-62',
      dimensions: 'Standart'
    },
    inStock: true,
    featured: true
  },
  // Diğer İŞ GÜVENLİĞİ ürünleri için alan - toplam 64 ürün
  
  // ÇAPAK ALMA (12 ürün)
  {
    id: 'p1-a',
    name: 'P1-A | ÇAPAK ALMA / HOBİ EL BIÇAĞI – ALYAN VİDALI',
    slug: 'p1-a',
    category: 'capak-alma',
    image: '/images/products/P1-A.jpg',
    price: 0,
    description: 'Alyan vidalı çapak alma / hobi el bıçağı. Hassas işler için ideal.',
    specifications: {
      material: 'Sheffield Çelik',
      hardness: 'HRC 58-62',
      dimensions: 'Standart'
    },
    inStock: true,
    featured: false
  },
  // Diğer ÇAPAK ALMA ürünleri - toplam 12 ürün
]

// Not: Tam liste 76 ürün içeriyor. Burada sadece örnek gösterildi.
// Tüm ürünleri eklemek için scraped-data.json dosyasından alınabilir.
