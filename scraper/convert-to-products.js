import { readFileSync, writeFileSync } from 'fs';

// Scraped verileri oku
const scrapedData = JSON.parse(readFileSync('scraped-data.json', 'utf-8'));

// Slug oluşturma fonksiyonu
function createSlug(code, name) {
  const cleanCode = code.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  const cleanName = name
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 40);
  
  return `${cleanCode}-${cleanName}`.replace(/--+/g, '-').replace(/-$/, '');
}

// Kategori ID eşleştirmesi
const categoryMapping = {
  'sanayi-jiletleri': 'sanayi-jiletleri',
  'is-guvenligi-el-bicaklari': 'is-guvenligi-el-bicaklari',
  'makina-bicaklari': 'makina-bicaklari',
  'capak-alma': 'is-guvenligi-el-bicaklari', // Çapak alma iş güvenliği altına
  'olfa-el-bicaklari-ve-uclari': 'is-guvenligi-el-bicaklari' // OLFA da iş güvenliği altına
};

// Ürünleri dönüştür
const products = scrapedData.products.map((p, index) => {
  const code = p.code || 'N/A';
  const name = p.name || 'Ürün';
  const slug = createSlug(code, name);
  const categoryId = categoryMapping[p.category] || p.category;
  
  return {
    id: p.id || slug,
    slug: slug,
    code: code,
    name: `${code} - ${name}`.replace(' - N/A -', ' -'),
    description: `${name}. Sheffield kalitesinde profesyonel kesici bıçak.`,
    categoryId: categoryId,
    subcategoryId: null,
    image: `/images/products/${slug}.jpg`,
    variants: [
      {
        id: `${slug}-standard`,
        sku: code,
        inStock: true,
      }
    ],
    specifications: {
      material: 'Sheffield Çelik',
      hardness: 'HRC 58-62',
    },
    features: ['Uzun ömürlü', 'Sheffield kalitesi', 'Profesyonel kullanım'],
    applications: ['Endüstriyel kesim'],
    isFeatured: false,
    isActive: true,
    order: index + 100, // Mevcut ürünlerden sonra sıralama
  };
});

// TypeScript formatında çıktı oluştur
const output = `// Scraped Products - Auto-generated
// Toplam ${products.length} ürün

export const SCRAPED_PRODUCTS = ${JSON.stringify(products, null, 2)};
`;

writeFileSync('converted-products.ts', output);
console.log(`✅ ${products.length} ürün converted-products.ts dosyasına kaydedildi`);

// Ayrıca JSON formatında da kaydet
writeFileSync('converted-products.json', JSON.stringify(products, null, 2));
console.log('✅ JSON versiyonu da kaydedildi');

