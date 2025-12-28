/**
 * Duplicate ID'leri düzelten script
 */

import { readFileSync, writeFileSync } from 'fs';

const scrapedProducts = JSON.parse(readFileSync('../industrial-blades/lib/data/scraped-products.json', 'utf-8'));

// ID sayaçları
const idCounts = {};

const fixedProducts = scrapedProducts.map((product, index) => {
  let newId = product.id;
  let newSlug = product.slug;
  
  // ID'yi say
  if (!idCounts[product.id]) {
    idCounts[product.id] = 0;
  }
  idCounts[product.id]++;
  
  // Eğer bu ID daha önce kullanıldıysa, index ekle
  if (idCounts[product.id] > 1) {
    const suffix = `-${idCounts[product.id]}`;
    newId = product.id + suffix;
    newSlug = product.slug + suffix;
    console.log(`Fixed: ${product.id} → ${newId}`);
  }
  
  return {
    ...product,
    id: newId,
    slug: newSlug,
  };
});

// Kaydet
writeFileSync('../industrial-blades/lib/data/scraped-products.json', JSON.stringify(fixedProducts, null, 2));

console.log(`\n✅ ${Object.values(idCounts).filter(c => c > 1).length} duplicate ID düzeltildi`);
console.log('✅ scraped-products.json güncellendi');

