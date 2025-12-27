/**
 * Value Proposition Section
 * "Neden Alya?" - Farkımızı ve değer önerimizi net şekilde anlatan section
 * 
 * Stratejik Amaç: "Pahalı ama değer" mesajını güçlendirmek
 */

'use client'

import { TrendingUp, Clock, Shield, Wrench, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const valueProps = [
  {
    icon: TrendingUp,
    metric: '%40',
    title: 'Daha Az Makine Duruşu',
    description: 'Sheffield çeliği sayesinde bıçak ömrü uzar, değişim sıklığı azalır. Üretim hattınız kesintisiz çalışır.',
    highlight: 'ROI Artışı',
  },
  {
    icon: Clock,
    metric: '3x',
    title: 'Daha Uzun Bıçak Ömrü',
    description: 'Standart bıçaklara göre 3 kat daha uzun kesim performansı. Uzun vadede maliyet tasarrufu.',
    highlight: 'Maliyet Tasarrufu',
  },
  {
    icon: Shield,
    metric: '%100',
    title: 'FDA & USDA Uyumlu',
    description: 'Gıda, ilaç ve hijyen gerektiren tüm sektörlerde güvenle kullanım. Uluslararası sertifikalar.',
    highlight: 'Gıda Güvenliği',
  },
  {
    icon: Wrench,
    metric: '28+',
    title: 'Yıl Sektör Deneyimi',
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
            İlk Bakışta Pahalı, <br className="hidden md:block" />
            <span className="text-primary-600">Uzun Vadede Karlı</span>
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            Ucuz bıçaklar size zaman, para ve verimlilik kaybettirir. 
            Sheffield kalitesi ile makine duruşlarını azaltın, üretim verimliliğinizi artırın.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
              
              {/* Metric */}
              <div className="text-4xl font-bold text-steel-900 mb-2">
                {prop.metric}
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

        {/* Comparison CTA */}
        <div className="bg-steel-900 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Standart Bıçak vs Sheffield Bıçağı
              </h3>
              <p className="text-steel-300 mb-6">
                Gerçek maliyet hesabı: Bıçak fiyatı + değişim maliyeti + makine duruş süresi + 
                üretim kaybı = Toplam maliyet. Sheffield her zaman kazandırır.
              </p>
              
              {/* Simple Comparison */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-red-500/20 rounded-lg p-4">
                  <div className="text-red-400 font-medium mb-1">Ucuz Bıçak</div>
                  <div className="text-white">Sık değişim, yüksek duruş</div>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4">
                  <div className="text-green-400 font-medium mb-1">Sheffield</div>
                  <div className="text-white">Uzun ömür, düşük maliyet</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <Link
                href="/danismanlik"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all"
              >
                Ücretsiz Maliyet Analizi
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/kategoriler"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-white/30 hover:border-white text-white font-semibold rounded-lg transition-all"
              >
                Ürünleri İncele
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

