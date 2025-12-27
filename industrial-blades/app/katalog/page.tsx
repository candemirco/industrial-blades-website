import { generateMetadata as genMeta } from '@/lib/seo'
import { FileText, Download, Eye } from 'lucide-react'
import Link from 'next/link'

export const metadata = genMeta({
  title: 'e-Katalog',
  description: 'Alya Bıçak ürün katalogları. Endüstriyel kesiciler, sanayi jiletleri, makina bıçakları kataloglarını indirin veya online görüntüleyin.',
  keywords: ['katalog', 'ürün kataloğu', 'bıçak kataloğu', 'pdf katalog', 'e-katalog'],
  url: 'https://www.alyabicak.com/katalog',
})

// Katalog listesi
const CATALOGS = [
  {
    id: 'sanayi-jiletleri',
    title: 'Sanayi Jiletleri Ürün Kataloğu',
    description: 'Ok bıçaklar, dilme jiletleri, trapez jiletler ve tüm sanayi jiletleri',
    category: 'Sanayi Jiletleri',
    pdfUrl: '/catalogs/Sanayi-Jiletleri-Urun-Katalogu.pdf',
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 'makine-bicaklari',
    title: 'Makine Bıçakları Ürün Kataloğu',
    description: 'Giyotin bıçakları, dilme bıçakları ve özel makina bıçakları',
    category: 'Makine Bıçakları',
    pdfUrl: '/catalogs/Makine-Bicaklari-Urun-Katalogu.pdf',
    color: 'from-steel-700 to-steel-900',
  },
  {
    id: 'is-guvenligi-el-bicaklari',
    title: 'İş Güvenliği & El Bıçakları Kataloğu',
    description: 'Güvenlik bıçakları, maket bıçakları ve ergonomik el aletleri',
    category: 'İş Güvenliği',
    pdfUrl: '/catalogs/Is-Guvenligi-El-Bicaklari-Urun-Katalogu.pdf',
    color: 'from-orange-500 to-orange-700',
  },
  {
    id: 'vakum-paketleme',
    title: 'Vakum Paketleme Bıçakları Kataloğu',
    description: 'Gıda sanayi için vakum paketleme ve kesim bıçakları',
    category: 'Vakum Paketleme',
    pdfUrl: '/catalogs/Vakum-PaketlemeBicaklari-Katalugu.pdf',
    color: 'from-green-600 to-green-800',
  },
]

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-steel-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-steel-900 to-steel-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              e-Katalog
            </h1>
            <p className="text-xl text-steel-300">
              Ürün kataloglarımızı online görüntüleyin veya indirin
            </p>
          </div>
        </div>
      </section>

      {/* Catalogs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {CATALOGS.map((catalog) => (
              <div
                key={catalog.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Catalog Header */}
                <div className={`relative h-40 bg-gradient-to-br ${catalog.color} flex items-center justify-center`}>
                  <FileText className="w-16 h-16 text-white/30" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                      {catalog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {catalog.title}
                  </h3>
                  <p className="text-steel-600 text-sm mb-6">
                    {catalog.description}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={catalog.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      Görüntüle
                    </a>
                    <a
                      href={catalog.pdfUrl}
                      download
                      className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-steel-300 hover:border-primary-600 hover:text-primary-600 text-steel-700 font-medium rounded-lg transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      İndir
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-steel-900 mb-4">
              Güncel Kataloglar
            </h2>
            <p className="text-steel-600 mb-6">
              Tüm kataloglarımız düzenli olarak güncellenmektedir. 
              Özel ürün talepleriniz için bizimle iletişime geçebilirsiniz.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3 bg-steel-900 hover:bg-steel-800 text-white font-medium rounded-lg transition-colors"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
