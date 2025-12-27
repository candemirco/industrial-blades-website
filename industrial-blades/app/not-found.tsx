/**
 * 404 Not Found Page
 * Sayfa bulunamadığında gösterilen özel sayfa
 */

import Link from 'next/link'
import { Home, Search, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-steel-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative inline-block">
              <span className="text-[180px] md:text-[240px] font-bold text-steel-100 leading-none select-none">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-primary-100 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 md:w-16 md:h-16 text-primary-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-3xl md:text-4xl font-bold text-steel-900 mb-4">
            Sayfa Bulunamadı
          </h1>
          <p className="text-lg text-steel-600 mb-8 max-w-md mx-auto">
            Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" size="lg" icon={Home} iconPosition="left">
              Ana Sayfaya Dön
            </Button>
            <Button href="/kategoriler" variant="outline" size="lg">
              Ürünleri İncele
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-steel-200">
            <p className="text-sm text-steel-500 mb-4">Popüler Sayfalar</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/kategoriler/sanayi-jiletleri" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Sanayi Jiletleri
              </Link>
              <span className="text-steel-300">•</span>
              <Link 
                href="/kategoriler/makina-bicaklari" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Makina Bıçakları
              </Link>
              <span className="text-steel-300">•</span>
              <Link 
                href="/danismanlik" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Danışmanlık
              </Link>
              <span className="text-steel-300">•</span>
              <Link 
                href="/iletisim" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

