// Yeni tip tanımları kullanarak kategoriler
import { Category, SubCategory } from './types'

// Mega Menu için kategoriler - Clean & Scalable
export const megaMenuCategories: Category[] = [
  {
    id: 'sanayi-jiletleri',
    name: 'Sanayi Jiletleri',
    slug: 'sanayi-jiletleri',
    description: 'Endüstriyel kullanım için profesyonel sanayi jiletleri ve kesici aletler',
    subcategories: [
      {
        id: 'ok-bicaklar',
        name: 'OK Bıçaklar',
        slug: 'ok-bicaklar',
        description: 'Profesyonel ok bıçakları ve jiletler',
        productCount: 8
      },
      {
        id: '3-delikli-dilme',
        name: '3 Delikli Dilme Jiletleri',
        slug: '3-delikli-dilme-jiletleri',
        description: 'Endüstri standardı 3 delikli jiletler',
        productCount: 12
      },
      {
        id: 'slotted-dilme',
        name: 'Slotted Dilme Jiletleri',
        slug: 'slotted-dilme-jiletleri',
        description: 'Yüksek performanslı slotted jiletler',
        productCount: 10
      },
      {
        id: 'injektor-dilme',
        name: 'İnjektör Dilme Jiletleri',
        slug: 'injektör-dilme-jiletleri',
        description: 'Hassas kesim için injektör jiletler',
        productCount: 6
      },
      {
        id: 'tek-kenarli',
        name: 'Tek Kenarlı Jiletler',
        slug: 'tek-kenarli-jiletler',
        description: 'Güvenli kullanım için tek kenarlı',
        productCount: 8
      },
      {
        id: 'trapez-bicaklar',
        name: 'Trapez Bıçaklar',
        slug: 'trapez-bicaklar',
        description: 'Çok amaçlı trapez kesim bıçakları',
        productCount: 5
      },
      {
        id: 'kanca-bicaklar',
        name: 'Kanca Bıçaklar',
        slug: 'kanca-bicaklar',
        description: 'Özel uygulamalar için kanca bıçaklar',
        productCount: 4
      },
      {
        id: 'falcata-bicaklar',
        name: 'Maket Bıçak Ucu | Falçata',
        slug: 'maket-bicak-falcata',
        description: 'Hassas kesim için maket uçları',
        productCount: 15
      }
    ],
    order: 1
  },
  {
    id: 'makina-bicaklari',
    name: 'Makina Bıçakları',
    slug: 'makina-bicaklari',
    description: 'Endüstriyel makinalar için özel üretim bıçaklar ve kesici sistemler',
    subcategories: [
      {
        id: 'doner-bicaklari',
        name: 'Döner Bıçakları',
        slug: 'doner-bicaklari',
        description: 'Profesyonel kebap kesim bıçakları',
        productCount: 6
      },
      {
        id: 'koli-bantlama',
        name: 'Koli Bantlama - Kutu Kapama',
        slug: 'koli-bantlama-kutu-kapama',
        description: 'Paketleme makinaları için bıçaklar',
        productCount: 8
      },
      {
        id: 'geri-donusum',
        name: 'Geri Dönüşüm Bıçakları',
        slug: 'geri-donusum-bicaklari',
        description: 'Geri dönüşüm işlemleri için',
        productCount: 5
      },
      {
        id: 'pnomatik-tutucu',
        name: 'Pnömatik Tutucu Bıçakları',
        slug: 'pnömatik-tutucu',
        description: 'Pneumatic sistem bıçakları',
        productCount: 7
      },
      {
        id: 'alt-ust-bicaklar',
        name: 'Alt ve Üst Bıçaklar',
        slug: 'alt-ust-bicaklar',
        description: 'Çift taraflı kesim sistemleri',
        productCount: 10
      },
      {
        id: 'vakum-paketleme',
        name: 'Vakum Paketleme Bıçakları',
        slug: 'vakum-paketleme',
        description: 'Vakum paketleme makinaları için',
        productCount: 6
      }
    ],
    order: 2
  },
  {
    id: 'is-guvenligi-el-bicaklari',
    name: 'İş Güvenliği & El Bıçakları',
    slug: 'is-guvenligi-el-bicaklari',
    description: 'İş güvenliği standartlarına uygun profesyonel el bıçakları ve kesici aletler',
    subcategories: [
      {
        id: 'oto-geri-cekilebilir',
        name: 'Otomatik Geri Çekilebilir',
        slug: 'otomatik-geri-cekilebilir',
        description: 'Güvenlik kilidi ile geri çekilebilir',
        productCount: 12
      },
      {
        id: 'sabit-uclu',
        name: 'Sabit Uçlu Bıçaklar',
        slug: 'sabit-uclu-bicaklar',
        description: 'Profesyonel sabit uç bıçaklar',
        productCount: 8
      },
      {
        id: 'guvenlik-bicaklari',
        name: 'Güvenlik Bıçakları',
        slug: 'guvenlik-bicaklari',
        description: 'Yüksek güvenlik standartlı',
        productCount: 10
      },
      {
        id: 'maket-bicaklari',
        name: 'Maket Bıçakları',
        slug: 'maket-bicaklari',
        description: 'Hassas kesim için maket bıçaklar',
        productCount: 15
      },
      {
        id: 'capak-alma-hobi',
        name: 'Çapak Alma & Hobi Bıçakları',
        slug: 'capak-alma-hobi',
        description: 'Detaylı işler için özel bıçaklar',
        productCount: 20
      },
      {
        id: 'olfa-dairesel',
        name: 'OLFA Dairesel Bıçaklar',
        slug: 'olfa-dairesel',
        description: 'OLFA marka dairesel kesim',
        productCount: 8
      },
      {
        id: 'olfa-falcata',
        name: 'OLFA Falçata Bıçaklar',
        slug: 'olfa-falcata',
        description: 'OLFA profesyonel falçata serisi',
        productCount: 12
      },
      {
        id: 'olfa-is-guvenligi',
        name: 'OLFA İş Güvenliği Bıçakları',
        slug: 'olfa-is-guvenligi',
        description: 'OLFA güvenlik sertifikalı ürünler',
        productCount: 10
      }
    ],
    order: 3
  }
]
