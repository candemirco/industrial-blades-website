'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Award, Zap, Shield, Clock, ArrowRight } from 'lucide-react'

export default function SheffieldSection() {
  const features = [
    {
      icon: Award,
      title: 'Sheffield Kalitesi',
      description: 'İngiltere Sheffield çelik standardı'
    },
    {
      icon: Zap,
      title: 'Yüksek Performans',
      description: 'Uzun ömür ve keskin performans'
    },
    {
      icon: Shield,
      title: 'Dayanıklılık',
      description: 'Aşınmaya karşı maksimum direnç'
    },
    {
      icon: Clock,
      title: 'Hızlı Teslimat',
      description: 'Stoktan anında gönderim'
    }
  ]

  return (
    <section className="py-20 bg-steel-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-full mb-6">
              Made in Sheffield
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sheffield Çelik Kalitesi ile Üretilmiş Bıçaklar
            </h2>
            
            <p className="text-lg text-steel-300 mb-8">
              Sheffield, yüzyıllardır dünyanın en kaliteli çelik ve bıçak üretim merkezi olarak bilinir. 
              Biz de bu geleneği sürdürerek, endüstriyel kesim ihtiyaçlarınız için Sheffield standardında 
              çelik kullanan bıçaklar üretiyoruz.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-steel-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/sheffield-kalitesi"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all hover:scale-105"
            >
              <span>Daha Fazla Bilgi</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/made in sheffield 2.webp"
                alt="Sheffield Kalitesi"
                fill
                className="object-cover"
              />
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-steel-900 to-transparent">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">100+</div>
                    <div className="text-sm text-steel-300">Yıllık Deneyim</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">500+</div>
                    <div className="text-sm text-steel-300">Ürün Çeşidi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">5000+</div>
                    <div className="text-sm text-steel-300">Mutlu Müşteri</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <div className="text-center">
                <Award className="w-12 h-12 text-white mx-auto mb-1" />
                <div className="text-xs font-bold text-white">Sheffield</div>
                <div className="text-xs text-white">Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
