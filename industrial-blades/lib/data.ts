// SOLID: Interface segregation - her interface'in tek sorumluluğu var
export interface SubCategory {
  id: string
  name: string
  slug: string
}

export interface ProductCategory {
  id: string
  name: string
  slug: string
  description: string
  image: string
  subcategories: SubCategory[]
}

export interface ProductGroup {
  id: string
  name: string
  slug: string
  categories: ProductCategory[]
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
  description: string
  subcategories?: string[]
}

export interface Product {
  id: string
  name: string
  slug: string
  category: string
  image: string
  price: number
  description: string
  specifications: {
    material: string
    hardness: string
    dimensions: string
  }
  inStock: boolean
  featured: boolean
}

// Ürün Grupları - MAKİNA BIÇAKLARI, SANAYİ JİLETLERİ, İŞ GÜVENLİĞİ & EL BIÇAKLARI
export const productGroups: ProductGroup[] = [
  {
    id: 'makina-bicaklari',
    name: 'MAKİNA BIÇAKLARI',
    slug: 'makina-bicaklari',
    categories: [
      {
        id: 'doner-bicaklari',
        name: 'Döner Bıçakları',
        slug: 'doner-bicaklari',
        description: 'Kebab Knives - Profesyonel döner kesim bıçakları',
        image: '/images/categories/doner-bicaklari.jpg',
        subcategories: []
      },
      {
        id: 'koli-bantlama-kutu-kapama',
        name: 'Koli Bantlama - Kutu Kapama Bıçakları',
        slug: 'koli-bantlama-kutu-kapama',
        description: 'Tape, Box and Carton Sealer Knives',
        image: '/images/categories/koli-bantlama.jpg',
        subcategories: []
      },
      {
        id: 'geri-donusum-bicaklari',
        name: 'Geri Dönüşüm Bıçakları',
        slug: 'geri-donusum-bicaklari',
        description: 'Recycling Knives - Geri dönüşüm malzemeleri için',
        image: '/images/categories/geri-donusum.jpg',
        subcategories: []
      },
      {
        id: 'pnömatik-tutucu',
        name: 'Pnömatik Tutucu Bıçakları',
        slug: 'pnömatik-tutucu',
        description: 'Pneumatic Holder and Crush Cutter Knives',
        image: '/images/categories/pnömatik-tutucu.jpg',
        subcategories: []
      },
      {
        id: 'alt-ust-bicaklar',
        name: 'Alt ve Üst Bıçaklar',
        slug: 'alt-ust-bicaklar',
        description: 'Top, Bottom and Dished Knives',
        image: '/images/categories/alt-ust.jpg',
        subcategories: []
      },
      {
        id: 'vakum-paketleme',
        name: 'Vakum Paketleme Bıçakları',
        slug: 'vakum-paketleme',
        description: 'Vacuum Packaging Knives',
        image: '/images/categories/vakum-paketleme.jpg',
        subcategories: []
      },
      {
        id: 'yatay-dikey-bicaklar',
        name: 'Yatay ve Dikey Bıçakları',
        slug: 'yatay-dikey-bicaklar',
        description: 'Horizontal and Vertical Packaging Knives',
        image: '/images/categories/yatay-dikey.jpg',
        subcategories: []
      },
      {
        id: 'shirink-makinesi',
        name: 'Shirink Makinesi Bıçakları',
        slug: 'shirink-makinesi',
        description: 'Shrink Machine Knives',
        image: '/images/categories/shirink-makinesi.jpg',
        subcategories: []
      },
      {
        id: 'et-acma-bicaklari',
        name: 'Et Açma Bıçakları',
        slug: 'et-acma-bicaklari',
        description: 'Derinder Knives - Profesyonel et işleme bıçakları',
        image: '/images/categories/et-acma.jpg',
        subcategories: []
      },
      {
        id: 'logsaw-kagit-bicaklari',
        name: 'Logsaw - Kağıt Bıçakları',
        slug: 'logsaw-kagit-bicaklari',
        description: 'Logsaw - Tissue Knives - Tuvalet kağıdı ve kağıt havlu için',
        image: '/images/categories/logsaw-kagit.jpg',
        subcategories: []
      },
      {
        id: 'dairesel-masura-kesim',
        name: 'Dairesel Masura Kesim Bıçağı',
        slug: 'dairesel-masura-kesim',
        description: 'Core Cutter Knives',
        image: '/images/categories/dairesel-masura.jpg',
        subcategories: []
      }
    ]
  },
  {
    id: 'sanayi-jiletleri',
    name: 'SANAYİ JİLETLERİ',
    slug: 'sanayi-jiletleri',
    categories: [
      {
        id: 'ok-bicaklar',
        name: 'OK Bıçaklar',
        slug: 'ok-bicaklar',
        description: 'Profesyonel ok bıçakları ve jiletler',
        image: '/images/categories/ok-bicaklar.jpg',
        subcategories: []
      },
      {
        id: '3-delikli-dilme-jiletleri',
        name: '3 Delikli Dilme Jiletleri',
        slug: '3-delikli-dilme-jiletleri',
        description: '3 Delikli Dilme Jiletleri - Endüstri standardı',
        image: '/images/categories/3-delikli-dilme.jpg',
        subcategories: []
      },
      {
        id: 'slotted-dilme-jiletleri',
        name: 'Slotted Dilme Jiletleri',
        slug: 'slotted-dilme-jiletleri',
        description: 'Slotted Dilme Jiletleri',
        image: '/images/categories/slotted-dilme.jpg',
        subcategories: []
      },
      {
        id: 'injektör-dilme-jiletleri',
        name: 'İnjektör Dilme Jiletleri',
        slug: 'injektör-dilme-jiletleri',
        description: 'İnjektör Dilme Jiletleri',
        image: '/images/categories/injektör-dilme.jpg',
        subcategories: []
      },
      {
        id: 'tek-kenarli-jiletler',
        name: 'Tek Kenarli Jiletler',
        slug: 'tek-kenarli-jiletler',
        description: 'Tek Kenarli Jiletler',
        image: '/images/categories/tek-kenarli.jpg',
        subcategories: []
      },
      {
        id: 'trapez-bicaklar',
        name: 'Trapez Bıçaklar',
        slug: 'trapez-bicaklar',
        description: 'Trapez Bıçaklar',
        image: '/images/categories/trapez-bicaklar.jpg',
        subcategories: []
      },
      {
        id: 'kanca-bicaklar',
        name: 'Kanca Bıçaklar',
        slug: 'kanca-bicaklar',
        description: 'Kanca Bıçaklar',
        image: '/images/categories/kanca-bicaklar.jpg',
        subcategories: []
      },
      {
        id: 'maket-bicak-falcata',
        name: 'Maket Bıçak Ucu | Falçata Bıçaklar',
        slug: 'maket-bicak-falcata',
        description: 'Maket Bıçak Ucu | Falçata Bıçaklar',
        image: '/images/categories/maket-bicak.jpg',
        subcategories: []
      },
      {
        id: 'hobi-jiletleri',
        name: 'Hobi Jiletleri',
        slug: 'hobi-jiletleri',
        description: 'Hobi Jiletleri',
        image: '/images/categories/hobi-jiletleri.jpg',
        subcategories: []
      },
      {
        id: 'bisturi-nester',
        name: 'Bisturi - Neşter',
        slug: 'bisturi-nester',
        description: 'Bisturi - Neşter',
        image: '/images/categories/bisturi-nester.jpg',
        subcategories: []
      },
      {
        id: 'kesik-elyaf-bicaklari',
        name: 'Kesik Elyaf Bıçakları',
        slug: 'kesik-elyaf-bicaklari',
        description: 'Kesik Elyaf Bıçakları',
        image: '/images/categories/kesik-elyaf.jpg',
        subcategories: []
      },
      {
        id: 'cam-elyaf-bicaklari',
        name: 'Cam Elyaf Bıçakları',
        slug: 'cam-elyaf-bicaklari',
        description: 'Cam Elyaf Bıçakları',
        image: '/images/categories/cam-elyaf.jpg',
        subcategories: []
      },
      {
        id: 'dairesel-jiletler',
        name: 'Dairesel Jiletler',
        slug: 'dairesel-jiletler',
        description: 'Dairesel Jiletler',
        image: '/images/categories/dairesel-jiletler.jpg',
        subcategories: []
      },
      {
        id: 'besgen-bicaklar',
        name: 'Beşgen Bıçaklar',
        slug: 'besgen-bicaklar',
        description: 'Beşgen Bıçaklar',
        image: '/images/categories/besgen-bicaklar.jpg',
        subcategories: []
      },
      {
        id: 'lamel-yaprak-bicak',
        name: 'Lamel / Yaprak Bıçak',
        slug: 'lamel-yaprak-bicak',
        description: 'Lamel / Yaprak Bıçak',
        image: '/images/categories/lamel-yaprak.jpg',
        subcategories: []
      },
      {
        id: 'dokubilim-mikrotom',
        name: 'Dokubilim / Mikrotom Jileti',
        slug: 'dokubilim-mikrotom',
        description: 'Dokubilim / Mikrotom Jileti',
        image: '/images/categories/dokubilim-mikrotom.jpg',
        subcategories: []
      },
      {
        id: 'lasik-mikorektom',
        name: 'Lasik / Mikokeratom Jileti',
        slug: 'lasik-mikorektom',
        description: 'Lasik / Mikokeratom Jileti',
        image: '/images/categories/lasik-mikorektom.jpg',
        subcategories: []
      },
      {
        id: 'cam-kaziyici',
        name: 'Cam Kazıyıcı',
        slug: 'cam-kaziyici',
        description: 'Cam Kazıyıcı',
        image: '/images/categories/cam-kaziyici.jpg',
        subcategories: []
      },
      {
        id: 'klasik-jilet',
        name: 'Klasik Jilet',
        slug: 'klasik-jilet',
        description: 'Klasik Jilet',
        image: '/images/categories/klasik-jilet.jpg',
        subcategories: []
      },
      {
        id: 'alci-levha-kartonpiyer',
        name: 'Alçı Levha (Kartonpiyer) Bıçakları',
        slug: 'alci-levha-kartonpiyer',
        description: 'Alçı Levha (Kartonpiyer) Bıçakları',
        image: '/images/categories/alci-levha.jpg',
        subcategories: []
      }
    ]
  },
  {
    id: 'is-guvenligi-el-bicaklari',
    name: 'İŞ GÜVENLİĞİ & EL BIÇAKLARI',
    slug: 'is-guvenligi-el-bicaklari',
    categories: []
  }
]

export const categories: Category[] = [
  {
    id: '1',
    name: 'Endüstriyel Bıçaklar',
    slug: 'endustriyel-bicaklar',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    description: 'Yüksek performanslı endüstriyel kesim bıçakları',
    subcategories: ['Düz Bıçaklar', 'Testere Bıçakları', 'Özel Form Bıçaklar']
  },
  {
    id: '2',
    name: 'Makina Bıçakları',
    slug: 'makina-bicaklari',
    image: 'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80',
    description: 'Otomatik makinalar için özel bıçaklar',
    subcategories: ['Kağıt Kesim', 'Plastik Kesim', 'Metal Kesim']
  },
  {
    id: '3',
    name: 'Gıda Bıçakları',
    slug: 'gida-bicaklari',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    description: 'Hijyenik gıda işleme bıçakları',
  },
  {
    id: '4',
    name: 'Özel Üretim',
    slug: 'ozel-uretim',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    description: 'İhtiyacınıza özel tasarım bıçaklar',
  },
]

export const heroSlides = [
  {
    id: 1,
    title: 'Sheffield Kalitesinde Endüstriyel Bıçaklar',
    description: 'Üstün çelik kalitesi ile uzun ömürlü ve keskin performans',
    image: '/images/hero/made in sheffield.jpg',
    productSlug: 'endustriyel-bicaklar',
  },
  {
    id: 2,
    title: 'Özel Tasarım Çözümler',
    description: 'İhtiyacınıza özel üretim, mükemmel kesim kalitesi',
    image: '/images/hero/ozel tasarim.jpg',
    productSlug: 'ozel-uretim',
  },
  {
    id: 3,
    title: 'Profesyonel Danışmanlık',
    description: 'Doğru malzeme seçimi için uzman desteği',
    image: '/images/hero/profesyonel danismanlik.JPG',
    productSlug: 'danismanlik',
  },
]
