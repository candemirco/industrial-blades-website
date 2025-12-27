import { generateMetadata } from '@/lib/seo'
import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata = generateMetadata({
  title: 'İletişim',
  description: 'Alya Bıçak ile iletişime geçin. Endüstriyel kesici bıçaklar hakkında sorularınız için bize ulaşın. Profesyonel danışmanlık ve destek.',
  keywords: ['iletişim', 'destek', 'müşteri hizmetleri', 'fiyat teklifi'],
  url: 'https://www.alyabicak.com/iletisim',
})

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-steel-900 to-steel-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              İletişime Geçin
            </h1>
            <p className="text-xl text-steel-200">
              Endüstriyel kesici bıçaklar hakkında sorularınız mı var? 
              Size yardımcı olmaktan mutluluk duyarız.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-steel-900 mb-6">
                Bize Yazın
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-steel-900 mb-6">
                İletişim Bilgileri
              </h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-2">Adres</h3>
                    <p className="text-steel-600">
                      Organize Sanayi Bölgesi, 123. Sokak No:45<br />
                      İstanbul, Türkiye
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-2">Telefon</h3>
                    <a 
                      href="tel:+905551234567" 
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      +90 555 123 45 67
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-2">E-posta</h3>
                    <a 
                      href="mailto:info@alyabicak.com" 
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      info@alyabicak.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-2">Çalışma Saatleri</h3>
                    <p className="text-steel-600">
                      Pazartesi - Cuma: 09:00 - 18:00<br />
                      Cumartesi: 09:00 - 13:00<br />
                      Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
                <h3 className="font-semibold text-steel-900 mb-2">
                  Hızlı Destek İçin
                </h3>
                <p className="text-sm text-steel-600 mb-4">
                  WhatsApp üzerinden anında yanıt alın
                </p>
                <a
                  href="https://wa.me/905551234567?text=Merhaba, Alya Bıçak hakkında bilgi almak istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp ile İletişime Geç
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-steel-900 mb-8 text-center">
            Bizi Ziyaret Edin
          </h2>
          <div className="bg-steel-100 rounded-xl h-96 flex items-center justify-center">
            <p className="text-steel-600">
              Harita entegrasyonu buraya eklenecek (Google Maps API)
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

