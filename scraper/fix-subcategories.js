/**
 * Scraped ürünleri alt kategorilere eşleştiren script
 * categoryName bilgisinden subcategoryId çıkarır
 */

import { readFileSync, writeFileSync } from 'fs';

// Alt kategori eşleştirme tablosu
const subcategoryMapping = {
  // SANAYİ JİLETLERİ
  'ok-bicaklar': ['ok bıçak', 'ok bicak'],
  '3-delikli-dilme': ['3 delikli', '3-delikli', 'b202', 'b205'],
  'slotted-dilme': ['slotted', 'slot'],
  'injektor-dilme': ['injektor', 'injector'],
  'tek-kenarli': ['tek kenarlı', 'tek kenarli', 'single edge'],
  'trapez-bicaklar': ['trapez', 'stanley'],
  'kanca-bicaklar': ['kanca', 'hook'],
  'falcata-bicaklar': ['falçata', 'falcata', 'maket bıçak ucu', 'maket bicak ucu'],
  'hobi-jiletleri': ['hobi', 'hobby'],
  'dairesel-jiletler': ['dairesel jilet', 'circular'],
  
  // MAKİNA BIÇAKLARI
  'doner-bicaklari': ['döner', 'doner', 'kebap'],
  'koli-bantlama': ['koli', 'kutu kapama', 'bantlama'],
  'geri-donusum': ['geri dönüşüm', 'geri donusum', 'recycl'],
  'vakum-paketleme': ['vakum', 'vacuum', 'termoform'],
  'logsaw-kagit': ['log-saw', 'logsaw', 'kağıt', 'kagit', 'tuvalet'],
  'et-acma': ['et açma', 'et acma', 'derinder'],
  
  // İŞ GÜVENLİĞİ
  'oto-geri-cekilebilir': ['auto retract', 'otomatik geri', 'auto-retract'],
  'sabit-uclu': ['sabit uçlu', 'sabit uclu', 'fixed', 'retro'],
  'guvenlik-bicaklari': ['güvenlik', 'guvenlik', 'safety'],
  'maket-bicaklari': ['maket bıçak', 'maket bicak', 'cutter'],
  'capak-alma-hobi': ['çapak', 'capak', 'deburr'],
  'olfa-dairesel': ['olfa dairesel', 'olfa circular', 'rtc', 'rty'],
  'olfa-falcata': ['olfa falçata', 'olfa falcata', 'olfa maket'],
  'olfa-is-guvenligi': ['olfa güvenlik', 'olfa guvenlik', 'olfa safety'],
};

// Ürün adından subcategoryId çıkar
function findSubcategoryId(product) {
  const searchText = (product.name + ' ' + product.description + ' ' + (product.categoryName || '')).toLowerCase();
  
  for (const [subcatId, keywords] of Object.entries(subcategoryMapping)) {
    for (const keyword of keywords) {
      if (searchText.includes(keyword.toLowerCase())) {
        return subcatId;
      }
    }
  }
  
  // Varsayılan alt kategoriler (kategoriye göre)
  const defaultSubcategories = {
    'sanayi-jiletleri': 'hobi-jiletleri',
    'makina-bicaklari': 'doner-bicaklari',
    'is-guvenligi-el-bicaklari': 'guvenlik-bicaklari',
  };
  
  return defaultSubcategories[product.categoryId] || null;
}

// Ana işlem
const scrapedProducts = JSON.parse(readFileSync('../industrial-blades/lib/data/scraped-products.json', 'utf-8'));

let updatedCount = 0;
let featuredCount = 0;

const updatedProducts = scrapedProducts.map((product, index) => {
  const subcategoryId = findSubcategoryId(product);
  
  if (subcategoryId && !product.subcategoryId) {
    updatedCount++;
  }
  
  // İlk 10 ürünü featured yap
  const isFeatured = index < 10;
  if (isFeatured) featuredCount++;
  
  return {
    ...product,
    subcategoryId: subcategoryId,
    isFeatured: isFeatured,
  };
});

// Sonuçları kaydet
writeFileSync('../industrial-blades/lib/data/scraped-products.json', JSON.stringify(updatedProducts, null, 2));

console.log(`✅ ${updatedCount} ürüne subcategoryId atandı`);
console.log(`✅ ${featuredCount} ürün öne çıkan olarak işaretlendi`);
console.log('✅ scraped-products.json güncellendi');

// İstatistikler
const stats = {};
updatedProducts.forEach(p => {
  const key = `${p.categoryId} → ${p.subcategoryId || 'N/A'}`;
  stats[key] = (stats[key] || 0) + 1;
});

console.log('\n📊 Alt Kategori Dağılımı:');
Object.entries(stats).sort().forEach(([key, count]) => {
  console.log(`   ${key}: ${count} ürün`);
});

