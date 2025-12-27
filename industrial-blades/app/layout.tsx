import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { generateOrganizationSchema } from '@/lib/seo'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Alya Bıçak | Endüstriyel Kesici Bıçaklar | Sheffield Kalitesi',
  description: 'Alya Bıçak - Endüstriyel kesici bıçaklar, makina bıçakları, sanayi jiletleri ve özel üretim çözümleri. Sheffield kalitesi ile üretilmiş profesyonel bıçaklar. Martor, Lutz Blade alternatifi.',
  keywords: 'alya bıçak, alya bıçakları, endüstriyel bıçak, kesici bıçak, makina bıçağı, sanayi jileti, sheffield bıçak, özel üretim bıçak, endüstriyel kesici, martor alternatifi, lutz blade alternatifi',
  openGraph: {
    title: 'Alya Bıçak | Endüstriyel Kesici Bıçaklar',
    description: 'Sheffield kalitesinde endüstriyel kesici bıçaklar. Profesyonel çözümler, mükemmel performans.',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Alya Bıçak',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alya Bıçak | Endüstriyel Kesici Bıçaklar',
    description: 'Sheffield kalitesinde endüstriyel kesici bıçaklar.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
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
