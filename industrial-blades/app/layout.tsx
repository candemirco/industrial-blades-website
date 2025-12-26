import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Endüstriyel Kesici Bıçaklar | Sheffield Kalitesi',
  description: 'Profesyonel endüstriyel kesici bıçaklar, makina bıçakları ve özel üretim çözümleri. Sheffield kalitesi ile üretilmiş bıçaklar.',
  keywords: 'endüstriyel bıçak, kesici bıçak, makina bıçağı, sheffield, özel üretim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${montserrat.variable} font-sans antialiased bg-white text-steel-900`}>
        <Header />
        <main className="min-h-screen pt-20 lg:pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
