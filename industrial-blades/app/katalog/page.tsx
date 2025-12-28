import { generateMetadata as genMeta } from '@/lib/seo'
import { Download, Eye } from 'lucide-react'
import Image from 'next/image'

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
    title: 'Sanayi Jiletleri',
    description: 'Ok bıçaklar, dilme jiletleri, trapez jiletler',
    pdfUrl: '/catalogs/Sanayi-Jiletleri-Urun-Katalogu.pdf',
    previewImage: '/catalogs/previews/sanayi-jiletleri.jpg',
  },
  {
    id: 'makine-bicaklari',
    title: 'Makine Bıçakları',
    description: 'Giyotin bıçakları, dilme bıçakları',
    pdfUrl: '/catalogs/Makine-Bicaklari-Urun-Katalogu.pdf',
    previewImage: '/catalogs/previews/makine-bicaklari.jpg',
  },
  {
    id: 'is-guvenligi-el-bicaklari',
    title: 'İş Güvenliği & El Bıçakları',
    description: 'Güvenlik bıçakları, maket bıçakları',
    pdfUrl: '/catalogs/Is-Guvenligi-El-Bicaklari-Urun-Katalogu.pdf',
    previewImage: '/catalogs/previews/is-guvenligi.jpg',
  },
  {
    id: 'vakum-paketleme',
    title: 'Vakum Paketleme Bıçakları',
    description: 'Gıda sanayi kesim bıçakları',
    pdfUrl: '/catalogs/Vakum-PaketlemeBicaklari-Katalugu.pdf',
    previewImage: '/catalogs/previews/vakum-paketleme.jpg',
  },
]

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Hero */}
      <section className="py-12 bg-steel-50 border-b border-steel-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold text-steel-900 mb-2">
              Ürün Katalogları
            </h1>
            <p className="text-steel-600">
              PDF kataloglarımızı görüntüleyin veya indirin
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Grid - PDF Preview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATALOGS.map((catalog) => (
              <div
                key={catalog.id}
                className="group bg-white border border-steel-200 rounded-lg overflow-hidden hover:border-primary-200 hover:shadow-sm transition-all"
              >
                {/* PDF Preview Image */}
                <div className="relative aspect-[3/4] bg-steel-100 overflow-hidden">
                  <Image
                    src={catalog.previewImage}
                    alt={catalog.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-steel-900/0 group-hover:bg-steel-900/40 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-base font-medium text-steel-900 mb-1">
                    {catalog.title}
                  </h3>
                  <p className="text-xs text-steel-500 mb-3">
                    {catalog.description}
                  </p>

                  {/* Actions - Minimal & Same Size */}
                  <div className="flex gap-2">
                    <a
                      href={catalog.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-steel-900 hover:bg-steel-800 text-white text-xs font-medium rounded transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Görüntüle
                    </a>
                    <a
                      href={catalog.pdfUrl}
                      download
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 border border-steel-300 hover:border-steel-400 hover:bg-steel-50 text-steel-700 text-xs font-medium rounded transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      İndir
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
