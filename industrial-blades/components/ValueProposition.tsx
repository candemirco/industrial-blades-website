/**
 * Value Proposition Section
 * "Neden Alya?" - Farkımızı ve değer önerimizi net şekilde anlatan section
 */

'use client'

import { TrendingUp, Clock, Shield, Wrench, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const valueProps = [
  {
    icon: TrendingUp,
    title: 'Daha Az Makine Duruşu',
    description: 'Kaliteli çelik = uzun bıçak ömrü = daha az değişim. Üretim hattınız kesintisiz çalışır.',
    highlight: 'Verimlilik',
  },
  {
    icon: Clock,
    title: 'Uzun Bıçak Ömrü',
    description: 'Yüksek kalite hammadde ve hassas üretim prosesi ile standart bıçaklardan çok daha uzun ömür.',
    highlight: 'Dayanıklılık',
  },
  {
    icon: Shield,
    title: 'FDA & USDA Uyumlu',
    description: 'Gıda, ilaç ve hijyen gerektiren tüm sektörlerde güvenle kullanım. Uluslararası sertifikalar.',
    highlight: 'Gıda Güvenliği',
  },
  {
    icon: Wrench,
    title: '28+ Yıl Sektör Deneyimi',
    description: 'Türkiye\'nin lider firmaları ile çalışıyoruz. Teknik danışmanlık ve satış sonrası destek.',
    highlight: 'Uzman Destek',
  },
]

export default function ValueProposition() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
            Neden Alya Bıçak?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-steel-900 mb-4">
            Kaliteli Hammadde, <br className="hidden md:block" />
            <span className="text-primary-600">Uzun Vadede Tasarruf</span>
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            Hammadde ve proses kalitesinde en yüksek seviyedeki çeliklerden üretilen 
            endüstriyel kesiciler, makine duruşlarını azaltır ve üretim verimliliğinizi artırır.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <div 
              key={prop.title}
              className="group relative bg-steel-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1"
            >
              {/* Highlight Badge */}
              <span className="absolute top-4 right-4 px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded">
                {prop.highlight}
              </span>
              
              {/* Icon */}
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                <prop.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-steel-900 mb-3">
                {prop.title}
              </h3>
              
              {/* Description */}
              <p className="text-steel-600 text-sm leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-12">
          <Link
            href="/danismanlik"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all hover:scale-105"
          >
            Ücretsiz Danışmanlık Alın
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

