import { generateMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/config'

export const metadata = generateMetadata({
  title: 'KVKK Aydınlatma Metni',
  description: 'Alya Tekstil San. ve Tic. Ltd. Şti. 6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.',
  url: 'https://www.alyabicak.com/kvkk',
})

export default function KVKKPage() {
  return (
    <div className="min-h-screen bg-steel-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-steel-900 to-steel-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              KVKK Aydınlatma Metni
            </h1>
            <p className="text-steel-300">
              6698 Sayılı Kişisel Verilerin Korunması Kanunu Kapsamında
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
            <div className="prose prose-steel max-w-none">
              
              <h2>Bilgilendirme</h2>
              <p>
                6698 Sayılı Kişisel Verilerin Korunması Kanunu 24 Mart 2016 tarihinde kabul edilmiş olup, 
                7 Nisan 2016 tarihinde Resmi Gazete&apos;de yayımlanarak yürürlüğe girmiştir.
              </p>
              <p>
                Kanun; Kişisel verilerin işlenmesinde başta özel hayatın gizliliği olmak üzere kişilerin 
                temel hak ve özgürlüklerini korumak ve kişisel verileri işleyen gerçek ve tüzel kişilerin 
                yükümlülükleri ile uyacakları usul ve esasları düzenlemek amacıyla kabul edilmiştir. 
                İşbu metin ile şirket tarafından ziyaretçiler bilgilendirilmekte ve aydınlatılmaktadır.
              </p>
              <p>
                Şirket, ziyaretçiler tarafından bu sitedeki formlar aracılığıyla sunulan isminiz, 
                elektronik posta adresiniz, iş ve ev adresiniz, telefon numaranız ve sair kişisel 
                verilerinizi yalnızca işleme amacı ile sınırlı olarak ve aydınlatma metninde, 
                onay verilmiş ise açık rıza metninde belirtilen sınırlar çerçevesinde işleyecektir.
              </p>

              <h2>Veri Sorumlusu ve İrtibat Kişisi</h2>
              <p>
                İşbu Aydınlatma Metninde ifade edilmiş olduğu üzere ŞİRKET, KVKK gereğince veri sorumlusudur.
              </p>
              
              <h3>Veri Sorumlusu Bilgisi</h3>
              <table className="min-w-full">
                <tbody>
                  <tr>
                    <td className="font-semibold">Açık Adı:</td>
                    <td>{siteConfig.company.legalName}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Kısa Adı:</td>
                    <td>ŞİRKET</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Adres:</td>
                    <td>{siteConfig.contact.address.full}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">İnternet Sitesi:</td>
                    <td>
                      <a href={siteConfig.mainSiteUrl} target="_blank" rel="noopener noreferrer">
                        {siteConfig.mainSiteUrl}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">KEP Adresi:</td>
                    <td>alyatekstilsanayi@hs01.kep.tr</td>
                  </tr>
                </tbody>
              </table>

              <h2>Verilerinizi İşleme Nedenlerimiz</h2>
              <p>
                Kişisel verileriniz, şirketimiz tarafından sağlanan ürün ve hizmetlerin tarafınıza 
                sunulabilmesini temin için şirket içerisinde gerekli faaliyetlerin yürütülmesi, 
                siz müşterilerimizin güncel ihtiyaçlarınıza uygun ürün ve hizmetlerin önerilebilmesi 
                için gerekli çalışmaların ilgili iş birimi ve iş ortakları ile yapılması, insan kaynağı 
                yönetiminin Şirketimiz tarafından sağlanarak gerçek kişilerin haklarının temini, 
                Şirketimiz tarafından ticari kararların verilmesi, uygulanması ve gerçekleştirilmesi 
                konusunda gerekli adımların atılması, iş ilişkisi kurduğumuz gerçek kişilerin ve 
                Şirketimizin bu ilişkilerden kaynaklı hukuki emniyetinin sağlanması ve bunlarla sınırlı 
                olmamak kaydıyla benzer amaçlarla Kanun&apos;un 5 ve 6. maddeleri uyarınca işlenmektedir.
              </p>

              <h3>Kişisel verileriniz aşağıdaki amaçlarla işlenebilecektir:</h3>
              <ul>
                <li>İşin bir parçası olarak sizinle ve başkalarıyla iletişim kurmak</li>
                <li>Size hizmet şartlarımızdaki değişiklikler hakkında bilgi göndermek</li>
                <li>Kalite, eğitim ve güvenlik iyileştirmesi sağlamak</li>
                <li>Şikâyetleri çözmek ve veri erişim taleplerini işleme almak</li>
                <li>Altyapımızı ve ticari faaliyetlerimizi yönetmek</li>
              </ul>

              <h2>İşlediğimiz Kişisel Verileriniz</h2>
              <h3>Kimlik Bilgileri</h3>
              <p>
                İsminiz, soy isminiz, T.C. kimlik numaranız ve Şirket tarafından açık rızanız 
                dahilinde temin edilen sair bilgiler.
              </p>
              <h3>İletişim Bilgileri</h3>
              <p>
                İkamet adresiniz, işyeri adresiniz, telefon numaranız ve e-posta adresiniz.
              </p>

              <h2>İlgili Kişinin KVKK&apos;nın 11. Maddesinde Sayılan Hakları</h2>
              <p>Kişisel veri sahipleri olarak aşağıdaki haklara sahipsiniz:</p>
              <ul>
                <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerin işlenme amacını öğrenme</li>
                <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                <li>Eksik veya yanlış işlenmiş olması hâlinde düzeltilmesini isteme</li>
                <li>İşlenmesini gerektiren sebeplerin ortadan kalkması hâlinde silinmesini isteme</li>
                <li>Kanuna aykırı işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
              </ul>

              <h2>Haklarınızı Nasıl Kullanabilirsiniz?</h2>
              <p>
                Talebinizi <strong>{siteConfig.contact.email}</strong> adresi üzerinden tarafımıza iletebilir 
                veya formu fiziki olarak doldurarak <strong>{siteConfig.contact.address.full}</strong> adresine 
                kargo/posta vasıtasıyla gönderebilirsiniz.
              </p>
              <p>
                Talebiniz en geç 30 gün içinde değerlendirilecek ve tarafınıza konuyla ilgili bilgi verilecektir.
              </p>

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

