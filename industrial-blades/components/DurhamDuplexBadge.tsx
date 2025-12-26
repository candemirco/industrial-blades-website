'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Award, ArrowRight } from 'lucide-react'

export default function DurhamDuplexBadge() {
  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-700 text-white text-sm font-semibold rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4" />
              Yetkili Distribütör
            </div>
            
            {/* Durham Duplex Logo */}
            <div className="mb-6">
              <img 
                src="/images/durham-duplex-logo.png" 
                alt="Durham Duplex Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            
            <p className="text-lg text-gray-600 mb-6">
              Razor Sharp Since 1910
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              <span className="font-bold text-gray-900">115 yıllık</span> İngiliz mühendislik geleneği ile 
              Sheffield&apos;da üretilen dünya standartlarında endüstriyel bıçakların Türkiye distribütörüyüz.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ISO</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">ISO 9001:2015</h3>
                  <p className="text-sm text-gray-600">Kalite yönetim sistemi</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FDA</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">FDA Compliant</h3>
                  <p className="text-sm text-gray-600">Gıda güvenliği onaylı</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">USDA</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">USDA Approved</h3>
                  <p className="text-sm text-gray-600">ABD tarım bakanlığı onaylı</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">UK</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Made in Sheffield</h3>
                  <p className="text-sm text-gray-600">İngiltere üretimi</p>
                </div>
              </div>
            </div>

            <Link
              href="/durham-duplex"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg transition-all hover:scale-105"
            >
              <span>Daha Fazla Bilgi</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/durham duplex bicaklari.jpg"
                alt="Durham Duplex Bıçakları"
                fill
                className="object-cover"
              />
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gray-900 to-transparent">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">115+</div>
                    <div className="text-sm text-gray-300">Yıllık Deneyim</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">500+</div>
                    <div className="text-sm text-gray-300">Ürün Çeşidi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">UK</div>
                    <div className="text-sm text-gray-300">Sheffield</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
