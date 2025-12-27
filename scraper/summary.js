import { readFileSync } from 'fs';

const data = JSON.parse(readFileSync('scraped-data.json', 'utf-8'));

const summary = {};
data.products.forEach(p => {
  if (!summary[p.categoryName]) summary[p.categoryName] = 0;
  summary[p.categoryName]++;
});

console.log('\n📊 Kategori Bazında Ürün Dağılımı:\n');
Object.entries(summary)
  .sort((a,b) => b[1] - a[1])
  .forEach(([cat, count]) => console.log(`   ✓ ${cat}: ${count} ürün`));

console.log(`\n✅ Toplam: ${data.products.length} ürün\n`);
