import { generateMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/config'

export const metadata = generateMetadata({
  title: 'Çerez Politikası',
  description: 'Alya Bıçak web sitesi çerez kullanım politikası. Hangi çerezleri kullandığımız ve tercihlerinizi nasıl yönetebileceğiniz hakkında bilgi.',
  url: 'https://www.alyabicak.com/cerez-politikasi',
})

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-steel-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-steel-900 to-steel-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Çerez Politikası
            </h1>
            <p className="text-steel-300">
              Web sitemizde kullanılan çerezler hakkında bilgilendirme
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
            <div className="prose prose-steel max-w-none">
              
              <h2>Çerez Nedir?</h2>
              <p>
                Çerez veya bilinen ismiyle &quot;cookie&quot;, mobil ve masaüstü cihazlar kullanarak 
                tarayıcılar üzerinden internet sitelerini ziyaret ettiğinizde bilgisayarınız veya 
                mobil cihazınıza kaydedilen küçük metin dosyalarıdır. Genellikle ziyaret ettiğiniz 
                internet sitesini kullanmanız sırasında size kişiselleştirilmiş bir deneyim sunmak, 
                sunulan hizmetleri geliştirmek ve deneyiminizi iyileştirmek için kullanılır.
              </p>

              <h2>Ne için Kullanılır?</h2>
              <p>
                Çerezler, internet sitelerinin daha kolay kullanılması, kullanıcıların ilgi ve 
                ihtiyaçlarınıza göre ayarlanması amacıyla kullanılır. Bu sayede kullanıcının tanınması 
                ve tercih ayarlarının hatırlanması sağlanır.
              </p>

              <h2>Türlerine Göre Çerezler</h2>
              
              <h3>Zorunlu/Teknik Çerezler</h3>
              <p>
                Ziyaret ettiğiniz internet sitesinin düzgün şekilde çalışabilmesi için zorunlu çerezlerdir. 
                Bu tür çerezlerin amacı, sitenin çalışmasını sağlamak yoluyla gerekli hizmet sunmaktır. 
                Örneğin, internet sitesinin güvenli bölümlerine erişmeye olanak verir.
              </p>

              <h3>Analitik Çerezler</h3>
              <p>
                İnternet sitesinin kullanım şekli, ziyaret sıklığı ve sayısı hakkında bilgi toplar. 
                Bu tür çerezlerin kullanım amacı, sitenin işleyiş biçimini iyileştirerek performans 
                arttırmaktır. Ziyaretçi kimliklerinin tespitini sağlayabilecek verileri içermezler.
              </p>

              <h3>İşlevsel/Fonksiyonel Çerezler</h3>
              <p>
                Ziyaretçinin site içerisinde yaptığı seçimleri kaydederek bir sonraki ziyarette hatırlar. 
                Bu tür çerezlerin amacı ziyaretçilere kullanım kolaylığı sağlamaktır. Örneğin, dil tercihinizi hatırlar.
              </p>

              <h2>İnternet Sitemizde Kullanılan Çerezler</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-steel-100">
                      <th className="text-left p-3">Çerez</th>
                      <th className="text-left p-3">Amacı</th>
                      <th className="text-left p-3">Tipi</th>
                      <th className="text-left p-3">Süre</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border-b">cookie-consent</td>
                      <td className="p-3 border-b">Çerez tercihlerini saklar</td>
                      <td className="p-3 border-b">Zorunlu</td>
                      <td className="p-3 border-b">1 yıl</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b">_ga</td>
                      <td className="p-3 border-b">Google Analytics - site trafiği analizi</td>
                      <td className="p-3 border-b">Analitik</td>
                      <td className="p-3 border-b">2 yıl</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b">language</td>
                      <td className="p-3 border-b">Dil tercihini saklar</td>
                      <td className="p-3 border-b">İşlevsel</td>
                      <td className="p-3 border-b">1 yıl</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Çerez Tercihleri Nasıl Yönetilir?</h2>
              <p>
                Çerezlerin kullanımına ilişkin tercihlerinizi değiştirmek ya da çerezleri engellemek 
                veya silmek için tarayıcınızın ayarlarını değiştirmeniz yeterlidir.
              </p>
              <p>
                Birçok tarayıcı çerezleri kontrol edebilmeniz için size çerezleri kabul etme veya 
                reddetme, yalnızca belirli türdeki çerezleri kabul etme seçeneği sunar.
              </p>
              
              <h3>Tarayıcı Ayarları</h3>
              <ul>
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/tr/kb/cerezleri-silme-web-sitelerinin-bilgilerini-kaldirma" target="_blank" rel="noopener noreferrer">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
                    Safari
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/tr-tr/microsoft-edge/microsoft-edge-de-tanımlama-bilgilerini-silme" target="_blank" rel="noopener noreferrer">
                    Microsoft Edge
                  </a>
                </li>
              </ul>

              <p className="bg-steel-100 p-4 rounded-lg">
                <strong>Not:</strong> Çerezleri devre dışı bırakır veya reddederseniz, bazı tercihleri 
                manuel olarak ayarlamanız gerekebilir ve internet sitesindeki bazı özellikler düzgün çalışmayabilir.
              </p>

              <h2>İletişim</h2>
              <p>
                Çerez politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
              </p>
              <ul>
                <li>E-posta: {siteConfig.contact.email}</li>
                <li>Telefon: {siteConfig.contact.phone}</li>
                <li>Adres: {siteConfig.contact.address.full}</li>
              </ul>

              <hr />
              
              <p className="text-sm text-steel-500">
                Son güncelleme: Aralık 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

