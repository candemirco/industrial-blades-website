'use client'

import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Globe } from 'lucide-react'
import { categoryService } from '@/lib/services'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const categories = categoryService.getAllCategoriesWithCounts()

  return (
    <footer className="bg-steel-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Alya Bıçak
            </h3>
            <p className="text-steel-400 mb-4">
              28 yılı aşkın süredir endüstriyel kesiciler tedarik ediyoruz. Sheffield kalitesinde profesyonel çözümler.
            </p>
            <a
              href="https://www.alyatekstil.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors mb-6"
            >
              <Globe className="w-4 h-4" />
              www.alyatekstil.com
            </a>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-steel-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-steel-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-steel-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li><Link href="/hakkimizda" className="text-steel-400 hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/kategoriler" className="text-steel-400 hover:text-white transition-colors">Endüstriyel Kesiciler</Link></li>
              <li><Link href="/danismanlik" className="text-steel-400 hover:text-white transition-colors">Danışmanlık</Link></li>
              <li><Link href="/iletisim" className="text-steel-400 hover:text-white transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kategoriler</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/kategoriler/${category.slug}`} 
                    className="text-steel-400 hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-steel-400">
                  İstanbul, Türkiye
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a href="tel:+905551234567" className="text-steel-400 hover:text-white transition-colors">
                  +90 555 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a href="mailto:info@alyabicak.com" className="text-steel-400 hover:text-white transition-colors">
                  info@alyabicak.com
                </a>
              </li>
            </ul>

            {/* WhatsApp */}
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-steel-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-steel-400 text-sm">
              © {currentYear} Alya Tekstil Sanayi Ticaret Ltd.Şti. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/gizlilik-politikasi" className="text-steel-400 hover:text-white transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kvkk" className="text-steel-400 hover:text-white transition-colors">
                KVKK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
