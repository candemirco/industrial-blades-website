import { generateMetadata } from '@/lib/seo'
import { MessageCircle, CheckCircle, ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = generateMetadata({
  title: 'Danışmanlık Hizmetleri',
  description: 'Alya Bıçak profesyonel danışmanlık hizmetleri. Doğru bıçak seçimi için uzman desteği. Malzeme analizi, bıçak önerisi ve optimizasyon.',
  keywords: ['danışmanlık', 'uzman destek', 'bıçak seçimi', 'malzeme analizi', 'teknik destek'],
  url: 'https://www.alyabicak.com/danismanlik',
})

export default function ConsultingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/pages/danismanlik-header.jpg"
            alt="Danışmanlık"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Profesyonel Danışmanlık
            </h1>
            <p className="text-xl text-white/90 whitespace-nowrap">
              Doğru bıçak seçimi için uzman desteği. Her malzeme için en uygun kesim çözümü.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-steel-900 mb-4">
                Danışmanlık Sürecimiz
              </h2>
              <p className="text-lg text-steel-600">
                Size en uygun bıçak çözümünü bulmak için izlediğimiz adımlar
              </p>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-steel-900 mb-3">
                    Malzeme Analizi
                  </h3>
                  <p className="text-steel-600 mb-4">
                    Kesim yapacağınız malzemenin özelliklerini analiz ediyoruz. 
                    Plastik, metal, kağıt, gıda, tekstil... Her malzeme farklı 
                    kesim teknikleri gerektirir.
                  </p>
                  <ul className="space-y-2 text-steel-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Malzeme tipi ve kalınlığı</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Kesim hızı ve hassasiyet gereksinimleri</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Üretim hacmi ve süreklilik</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-steel-900 mb-3">
                    Bıçak Önerisi
                  </h3>
                  <p className="text-steel-600 mb-4">
                    Analiz sonuçlarına göre size en uygun bıçak modelini öneriyoruz. 
                    Sheffield kalitesinde, performans ve dayanıklılık açısından 
                    optimize edilmiş çözümler.
                  </p>
                  <ul className="space-y-2 text-steel-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Bıçak tipi ve boyut önerisi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Çelik kalitesi ve sertlik değeri</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Özel tasarım gereksinimleri</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-steel-900 mb-3">
                    Test ve Optimizasyon
                  </h3>
                  <p className="text-steel-600 mb-4">
                    Önerilen bıçağı test ediyor ve kesim performansını optimize ediyoruz. 
                    Gerekirse özel üretim yaparak mükemmel sonuç elde ediyoruz.
                  </p>
                  <ul className="space-y-2 text-steel-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Kesim performans testi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Bıçak ömrü ve bakım önerileri</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Sürekli destek ve takip</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-steel-900 mb-4">
              Danışmanlık Hizmetlerimiz
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Malzeme Analizi',
                desc: 'Kesim yapacağınız malzemenin detaylı analizi',
              },
              {
                title: 'Bıçak Seçimi',
                desc: 'Size en uygun bıçak modelinin belirlenmesi',
              },
              {
                title: 'Teknik Destek',
                desc: 'Kurulum ve kullanım konusunda rehberlik',
              },
              {
                title: 'Performans Optimizasyonu',
                desc: 'Kesim kalitesi ve verimliliğin artırılması',
              },
              {
                title: 'Özel Üretim',
                desc: 'Standart ürünler dışında özel tasarım',
              },
              {
                title: 'Bakım ve Onarım',
                desc: 'Bıçak bakımı ve yeniden bilenme hizmetleri',
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-steel-900 mb-2">{service.title}</h3>
                <p className="text-steel-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ücretsiz Danışmanlık Alın
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Hangi malzeme için hangi bıçak? Uzmanlarımız size yol gösteriyor.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-steel-50 transition-all"
              >
                <span>İletişim Formu</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/905551234567?text=Merhaba, kesim danışmanlığı almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 font-semibold rounded-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>WhatsApp ile İletişim</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

