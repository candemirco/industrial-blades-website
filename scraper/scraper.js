import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import { writeFileSync } from 'fs';

// Ana kategoriler ve alt kategorileri - TAM LİSTE
const categories = [
  // ========== SANAYİ JİLETLERİ (20 alt kategori) ==========
  {
    name: 'Sanayi Jiletleri - OK Bıçaklar',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/ok-bicaklar/',
    slug: 'sanayi-jiletleri',
    subCategory: 'ok-bicaklar'
  },
  {
    name: 'Sanayi Jiletleri - 3 Delikli Dilme Jiletleri',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/3-delikli-dilme-jiletleri/',
    slug: 'sanayi-jiletleri',
    subCategory: '3-delikli-dilme'
  },
  {
    name: 'Sanayi Jiletleri - Slotted Dilme Jiletleri',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/slotted-dilme-jiletleri/',
    slug: 'sanayi-jiletleri',
    subCategory: 'slotted-dilme'
  },
  {
    name: 'Sanayi Jiletleri - İnjektor Dilme Jiletleri',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/injektor-dilme-jiletleri/',
    slug: 'sanayi-jiletleri',
    subCategory: 'injektor-dilme'
  },
  {
    name: 'Sanayi Jiletleri - Tek Kenarlı Jiletler',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/tek-kenarli-jiletler/',
    slug: 'sanayi-jiletleri',
    subCategory: 'tek-kenarli'
  },
  {
    name: 'Sanayi Jiletleri - Trapez Bıçaklar',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/trapez-bicaklar/',
    slug: 'sanayi-jiletleri',
    subCategory: 'trapez'
  },
  {
    name: 'Sanayi Jiletleri - Kanca Bıçaklar',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/kanca-bicaklar/',
    slug: 'sanayi-jiletleri',
    subCategory: 'kanca'
  },
  {
    name: 'Sanayi Jiletleri - Maket Bıçak Ucu | Falçata Bıçaklar',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/maket-bicak-ucu-falcata-bicaklar/',
    slug: 'sanayi-jiletleri',
    subCategory: 'falcata'
  },
  {
    name: 'Sanayi Jiletleri - Hobi Jiletleri',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/hobi-jiletleri/',
    slug: 'sanayi-jiletleri',
    subCategory: 'hobi'
  },
  {
    name: 'Sanayi Jiletleri - Bisturi - Neşter',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/bisturi-nester/',
    slug: 'sanayi-jiletleri',
    subCategory: 'bisturi'
  },
  {
    name: 'Sanayi Jiletleri - Kesik Elyaf Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/kesik-elyaf-bicaklari/',
    slug: 'sanayi-jiletleri',
    subCategory: 'kesik-elyaf'
  },
  {
    name: 'Sanayi Jiletleri - Cam Elyaf Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/cam-elyaf-bicaklari/',
    slug: 'sanayi-jiletleri',
    subCategory: 'cam-elyaf'
  },
  {
    name: 'Sanayi Jiletleri - Dairesel Jiletler',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/dairesel-jiletler/',
    slug: 'sanayi-jiletleri',
    subCategory: 'dairesel'
  },
  {
    name: 'Sanayi Jiletleri - Beşgen Bıçaklar',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/besgen-bicaklar/',
    slug: 'sanayi-jiletleri',
    subCategory: 'besgen'
  },
  {
    name: 'Sanayi Jiletleri - Lamel / Yaprak Bıçak',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/lamel-yaprak-bicak/',
    slug: 'sanayi-jiletleri',
    subCategory: 'lamel'
  },
  {
    name: 'Sanayi Jiletleri - Dokubilim / Mikrotom Jileti',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/dokubilim-mikrotom-jileti/',
    slug: 'sanayi-jiletleri',
    subCategory: 'mikrotom'
  },
  {
    name: 'Sanayi Jiletleri - Lasik / Mikrokeratom Jileti',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/lasik-mikrokeratom-jileti/',
    slug: 'sanayi-jiletleri',
    subCategory: 'lasik'
  },
  {
    name: 'Sanayi Jiletleri - Cam Kazıyıcı',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/cam-kaziyici/',
    slug: 'sanayi-jiletleri',
    subCategory: 'cam-kaziyici'
  },
  {
    name: 'Sanayi Jiletleri - Klasik Jilet',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/klasik-jilet/',
    slug: 'sanayi-jiletleri',
    subCategory: 'klasik'
  },
  {
    name: 'Sanayi Jiletleri - Alçı Levha (Kartonpiyer) Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/sanayi-jiletleri/alci-levha-kartonpiyer-bicaklari/',
    slug: 'sanayi-jiletleri',
    subCategory: 'alci-levha'
  },
  
  // ========== İŞ GÜVENLİĞİ & EL BIÇAKLARI (71 ürün - doğrudan) ==========
  {
    name: 'İş Güvenliği & El Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/is-guvenligi-el-bicaklari/',
    slug: 'is-guvenligi-el-bicaklari'
  },
  
  // ========== MAKİNA BIÇAKLARI (16 alt kategori) ==========
  {
    name: 'Makina Bıçakları - İleri İşlem Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/makina-bicaklari/ileri-islem-bicaklari/',
    slug: 'makina-bicaklari',
    subCategory: 'ileri-islem'
  },
  {
    name: 'Makina Bıçakları - Termoform Vakum Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/makina-bicaklari/termoform-vakum-bicaklari/',
    slug: 'makina-bicaklari',
    subCategory: 'termoform-vakum'
  },
  {
    name: 'Makina Bıçakları - Dairesel Dilme Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/makina-bicaklari/dairesel-dilme-bicaklari/',
    slug: 'makina-bicaklari',
    subCategory: 'dairesel-dilme'
  },
  {
    name: 'Makina Bıçakları - Geri Dönüşüm Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/makina-bicaklari/geri-donusum-bicaklari/',
    slug: 'makina-bicaklari',
    subCategory: 'geri-donusum'
  },
  {
    name: 'Makina Bıçakları - Oluklu Mukavva Dilme Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/makina-bicaklari/oluklu-mukavva-dilme-bicaklari/',
    slug: 'makina-bicaklari',
    subCategory: 'oluklu-mukavva'
  },
  {
    name: 'Makina Bıçakları - Döner Kesim Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/makina-bicaklari/doner-kesim-bicaklari/',
    slug: 'makina-bicaklari',
    subCategory: 'doner-kesim'
  },
  {
    name: 'Makina Bıçakları - Dişli Bıçaklar',
    url: 'https://alyatekstil.com/tr/urun-kategori/makina-bicaklari/disli-bicaklar/',
    slug: 'makina-bicaklari',
    subCategory: 'disli'
  },
  {
    name: 'Makina Bıçakları - Dairesel Ezici Bıçaklar',
    url: 'https://alyatekstil.com/tr/urun-kategori/makina-bicaklari/dairesel-ezici-bicaklar/',
    slug: 'makina-bicaklari',
    subCategory: 'dairesel-ezici'
  },
  {
    name: 'Makina Bıçakları - Et Açma (Derinder) Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/makina-bicaklari/et-acma-derinder-bicaklari/',
    slug: 'makina-bicaklari',
    subCategory: 'et-acma'
  },
  {
    name: 'Makina Bıçakları - Log-Saw Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/makina-bicaklari/log-saw-bicaklari-tuvalet-kagidi-ve-kagit-havlu-icin/',
    slug: 'makina-bicaklari',
    subCategory: 'log-saw'
  },
  {
    name: 'Makina Bıçakları - Masura Kesim Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/makina-bicaklari/masura-kesim-bicaklari/',
    slug: 'makina-bicaklari',
    subCategory: 'masura-kesim'
  },
  {
    name: 'Makina Bıçakları - Kutu Kapama Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/makina-bicaklari/kutu-kapama-bicaklari-koli-bandi-bicaklari/',
    slug: 'makina-bicaklari',
    subCategory: 'kutu-kapama'
  },
  {
    name: 'Makina Bıçakları - Zig Zag Bıçaklar',
    url: 'https://alyatekstil.com/tr/urun-kategori/makina-bicaklari/zig-zag-bicaklar/',
    slug: 'makina-bicaklari',
    subCategory: 'zig-zag'
  },
  {
    name: 'Makina Bıçakları - Şerit Bıçaklar',
    url: 'https://alyatekstil.com/tr/urun-kategori/makina-bicaklari/serit-bicaklar/',
    slug: 'makina-bicaklari',
    subCategory: 'serit'
  },
  {
    name: 'Makina Bıçakları - Tray (Kase) Kalıp Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/makina-bicaklari/tray-kase-kalip-bicaklari/',
    slug: 'makina-bicaklari',
    subCategory: 'tray-kalip'
  },
  {
    name: 'Makina Bıçakları - Sosis Sıyırma Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/makina-bicaklari/sosis-siyirma-bicaklari/',
    slug: 'makina-bicaklari',
    subCategory: 'sosis-siyirma'
  },
  
  // ========== ÇAPAK ALMA (12 ürün - doğrudan) ==========
  {
    name: 'Çapak Alma',
    url: 'https://alyatekstil.com/tr/urun-kategori/capak-alma/',
    slug: 'capak-alma'
  },
  
  // ========== OLFA EL BIÇAKLARI (3 alt kategori) ==========
  {
    name: 'OLFA - Dairesel El Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/olfa-el-bicaklari-ve-uclari/olfa-dairesel-el-bicaklari/',
    slug: 'olfa-el-bicaklari-ve-uclari',
    subCategory: 'dairesel'
  },
  {
    name: 'OLFA - Falçata El Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/olfa-el-bicaklari-ve-uclari/olfa-falcata-el-bicaklari/',
    slug: 'olfa-el-bicaklari-ve-uclari',
    subCategory: 'falcata'
  },
  {
    name: 'OLFA - İş Güvenliği El Bıçakları',
    url: 'https://alyatekstil.com/tr/urun-kategori/olfa-el-bicaklari-ve-uclari/olfa-is-guvenligi-el-bicaklari/',
    slug: 'olfa-el-bicaklari-ve-uclari',
    subCategory: 'is-guvenligi'
  }
];

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrapeProducts() {
  const allProducts = [];
  
  for (const category of categories) {
    console.log(`\n📦 ${category.name} kategorisi işleniyor...`);
    
    try {
      await delay(1000); // Sunucuyu yormamak için bekleme
      
      const response = await fetch(category.url);
      const html = await response.text();
      const $ = cheerio.load(html);
      
      const products = [];
      
      // Farklı selectors dene
      const productSelectors = [
        'li.product',
        '.product-item',
        'article.product',
        '.product',
        '[class*="product"]'
      ];
      
      // Tüm linkleri bul (ürün linkleri için)
      const productLinks = [];
      $('a').each((i, elem) => {
        const href = $(elem).attr('href');
        const text = $(elem).text().trim();
        
        if (href && href.includes('/urun/') && text) {
          productLinks.push({
            title: text,
            link: href
          });
        }
      });
      
      console.log(`   🔍 ${productLinks.length} ürün linki bulundu`);
      
      // Benzersiz ürünleri ayıkla
      const uniqueProducts = new Map();
      
      productLinks.forEach(item => {
        const title = item.title;
        
        if (title && title.length > 3) {
          // Ürün kodunu ve adını ayır
          const parts = title.split('|');
          let code = '';
          let name = title;
          
          if (parts.length >= 2) {
            code = parts[0].trim();
            name = parts.slice(1).join('|').trim();
          } else {
            // Eğer | yoksa, başlıktaki ilk kelime grubu kod olabilir
            const words = title.split(/\s+/);
            if (words.length > 0 && words[0].match(/[A-Z0-9]/)) {
              code = words[0];
              name = words.slice(1).join(' ') || title;
            }
          }
          
          const id = code ? code.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') : 
                           title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '').substring(0, 50);
          
          if (!uniqueProducts.has(id)) {
            uniqueProducts.set(id, {
              id: id,
              code: code || 'N/A',
              name: name,
              slug: id,
              category: category.slug,
              categoryName: category.name,
              image: `/images/products/placeholder.jpg`, // Placeholder
              price: 0,
              description: name,
              specifications: {
                material: 'Sheffield Çelik',
                hardness: 'HRC 58-62',
                dimensions: 'Standart'
              },
              inStock: true,
              featured: false
            });
          }
        }
      });
      
      products.push(...Array.from(uniqueProducts.values()));
      
      console.log(`   ✅ ${products.length} ürün bulundu`);
      allProducts.push(...products);
      
    } catch (error) {
      console.error(`   ❌ Hata: ${error.message}`);
    }
  }
  
  // Sonuçları kaydet
  console.log(`\n📊 Toplam ${allProducts.length} ürün çekildi`);
  
  const output = {
    categories: categories.map(cat => ({
      id: cat.slug,
      name: cat.name,
      slug: cat.slug,
      image: `/images/categories/${cat.slug}.jpg`,
      description: `${cat.name} kategorisindeki profesyonel kesici bıçaklar`,
      subcategories: []
    })),
    products: allProducts
  };
  
  writeFileSync('scraped-data.json', JSON.stringify(output, null, 2));
  console.log('\n✅ Veriler scraped-data.json dosyasına kaydedildi');
  
  return output;
}

// Çalıştır
console.log('🚀 Veri çekme işlemi başlatılıyor...\n');
scrapeProducts().catch(console.error);
