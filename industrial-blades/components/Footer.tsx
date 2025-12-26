'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-steel-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Alya Tekstil Sanayi Ticaret Ltd.Şti.
            </h3>
            <p className="text-steel-400 mb-6">
              Sheffield kalitesinde endüstriyel kesici bıçaklar. Profesyonel çözümler, mükemmel performans.
            </p>
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
              <li><Link href="/kategoriler" className="text-steel-400 hover:text-white transition-colors">Ürünler</Link></li>
              <li><Link href="/sheffield-kalitesi" className="text-steel-400 hover:text-white transition-colors">Sheffield Kalitesi</Link></li>
              <li><Link href="/danismanlik" className="text-steel-400 hover:text-white transition-colors">Danışmanlık</Link></li>
              <li><Link href="/blog" className="text-steel-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/iletisim" className="text-steel-400 hover:text-white transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kategoriler</h3>
            <ul className="space-y-2">
              <li><Link href="/kategoriler/endustriyel-bicaklar" className="text-steel-400 hover:text-white transition-colors">Endüstriyel Bıçaklar</Link></li>
              <li><Link href="/kategoriler/makina-bicaklari" className="text-steel-400 hover:text-white transition-colors">Makina Bıçakları</Link></li>
              <li><Link href="/kategoriler/gida-bicaklari" className="text-steel-400 hover:text-white transition-colors">Gıda Bıçakları</Link></li>
              <li><Link href="/kategoriler/ozel-uretim" className="text-steel-400 hover:text-white transition-colors">Özel Üretim</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-steel-400">
                  Organize Sanayi Bölgesi, 123. Sokak No:45<br />
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
                <a href="mailto:info@example.com" className="text-steel-400 hover:text-white transition-colors">
                  info@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-steel-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-steel-400 text-sm">
              © {currentYear} Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/gizlilik-politikasi" className="text-steel-400 hover:text-white transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="text-steel-400 hover:text-white transition-colors">
                Kullanım Koşulları
              </Link>
              <Link href="/kvkk" className="text-steel-400 hover:text-white transition-colors">
                KVKK
              </Link>
              <Link href="/cerez-politikasi" className="text-steel-400 hover:text-white transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
