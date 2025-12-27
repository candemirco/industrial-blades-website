import { generateMetadata as genMeta } from '@/lib/seo'
import { FileText, Download, Eye } from 'lucide-react'
import { siteConfig, getWhatsAppUrl } from '@/lib/config'

export const metadata = genMeta({
  title: 'Katalog',
  description: 'Alya Bıçak ürün katalogları. Endüstriyel kesiciler, sanayi jiletleri, makina bıçakları kataloglarını indirin.',
  keywords: ['katalog', 'ürün kataloğu', 'bıçak kataloğu', 'pdf katalog'],
  url: 'https://www.alyabicak.com/katalog',
})

// Katalog listesi - İleride PDF'ler eklenecek
const CATALOGS = [
  {
    id: 'genel-katalog',
    title: 'Genel Ürün Kataloğu',
    description: 'Tüm ürün gruplarımızı içeren kapsamlı katalog',
    year: '2024',
    pages: 48,
    fileSize: '12 MB',
    image: '/images/catalog/genel-katalog.jpg',
    pdfUrl: null, // İleride eklenecek
  },
  {
    id: 'sanayi-jiletleri',
    title: 'Sanayi Jiletleri Kataloğu',
    description: 'Ok bıçaklar, dilme jiletleri, trapez jiletler',
    year: '2024',
    pages: 24,
    fileSize: '6 MB',
    image: '/images/catalog/sanayi-jiletleri.jpg',
    pdfUrl: null,
  },
  {
    id: 'makina-bicaklari',
    title: 'Makina Bıçakları Kataloğu',
    description: 'Giyotin, dilme ve özel makina bıçakları',
    year: '2024',
    pages: 32,
    fileSize: '8 MB',
    image: '/images/catalog/makina-bicaklari.jpg',
    pdfUrl: null,
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
              Ürün Katalogları
            </h1>
            <p className="text-xl text-steel-300">
              Endüstriyel kesici bıçaklarımızın detaylı kataloglarına ulaşın
            </p>
          </div>
        </div>
      </section>

      {/* Catalogs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATALOGS.map((catalog) => (
              <div
                key={catalog.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                {/* Catalog Preview */}
                <div className="relative h-48 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                  <FileText className="w-20 h-20 text-white/30" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                    {catalog.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-steel-900 mb-2">
                    {catalog.title}
                  </h3>
                  <p className="text-steel-600 text-sm mb-4">
                    {catalog.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-steel-500 mb-4">
                    <span>{catalog.pages} sayfa</span>
                    <span>•</span>
                    <span>{catalog.fileSize}</span>
                  </div>

                  {/* Actions */}
                  {catalog.pdfUrl ? (
                    <div className="flex gap-2">
                      <a
                        href={catalog.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        Görüntüle
                      </a>
                      <a
                        href={catalog.pdfUrl}
                        download
                        className="flex items-center justify-center gap-2 px-4 py-2 border border-steel-300 hover:border-steel-400 text-steel-700 text-sm font-medium rounded-lg transition-colors"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  ) : (
                    <div className="p-3 bg-steel-50 rounded-lg text-center">
                      <p className="text-sm text-steel-500 mb-2">
                        Katalog hazırlanıyor
                      </p>
                      <a
                        href={getWhatsAppUrl(`Merhaba, "${catalog.title}" kataloğunu talep etmek istiyorum.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        WhatsApp ile talep edin →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-steel-900 mb-4">
              Özel Katalog mu Gerekiyor?
            </h2>
            <p className="text-steel-600 mb-6">
              İhtiyacınıza özel ürün katalogları için bizimle iletişime geçin. 
              Size özel bir katalog hazırlayalım.
            </p>
            <a
              href={getWhatsAppUrl('Merhaba, özel bir ürün kataloğu hazırlatmak istiyorum.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp ile İletişime Geç
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

