import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo'
import { categoryService } from '@/lib/services'
import { getAllCategories } from '@/lib/data/categories'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Package } from 'lucide-react'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const category = categoryService.getCategoryViewBySlug(slug)
  
  if (!category) {
    return {}
  }

  return generateSeoMetadata({
    title: category.name,
    description: `${category.description} - Alya Bıçak. ${category.name} kategorisinde ${category.totalProductCount} ürün.`,
    keywords: [category.name.toLowerCase(), 'alya bıçak', 'endüstriyel bıçak'],
    url: `https://www.alyabicak.com/kategoriler/${category.slug}`,
  })
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const category = categoryService.getCategoryViewBySlug(slug)

  if (!category) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://www.alyabicak.com' },
    { name: 'Kategoriler', url: 'https://www.alyabicak.com/kategoriler' },
    { name: category.name, url: `https://www.alyabicak.com/kategoriler/${category.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-steel-900 to-steel-800 text-white py-16">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-steel-300 mb-4">
              <Link href="/" className="hover:text-white">Ana Sayfa</Link>
              <span className="mx-2">/</span>
              <Link href="/kategoriler" className="hover:text-white">Kategoriler</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{category.name}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
            <p className="text-xl text-steel-200 max-w-3xl">{category.description}</p>
            <div className="mt-4 text-steel-300">
              {category.subcategories.length} alt kategori • {category.totalProductCount} ürün
            </div>
          </div>
        </section>

        {/* Subcategories Grid */}
        <section className="py-20 bg-steel-50">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-steel-900 mb-2">
                Alt Kategoriler
              </h2>
              <p className="text-steel-600">
                {category.name} kategorisinde {category.subcategories.length} alt kategori bulunuyor
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.subcategories.map((subcategory) => (
                <Link
                  key={subcategory.id}
                  href={`/kategoriler/${category.slug}/${subcategory.slug}`}
                  className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                      <Package className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-steel-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {subcategory.name}
                  </h3>
                  {subcategory.description && (
                    <p className="text-steel-600 text-sm mb-3 line-clamp-2">
                      {subcategory.description}
                    </p>
                  )}
                  <div className="text-sm text-primary-600 font-medium">
                    {subcategory.productCount} ürün
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-steel-900 mb-8 text-center">
                Neden {category.name}?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-steel-50 rounded-xl">
                  <h3 className="font-semibold text-steel-900 mb-2">Sheffield Kalitesi</h3>
                  <p className="text-steel-600 text-sm">
                    Tüm ürünlerimiz İngiltere Sheffield standartlarında üretilmiştir.
                  </p>
                </div>
                <div className="p-6 bg-steel-50 rounded-xl">
                  <h3 className="font-semibold text-steel-900 mb-2">Geniş Yelpaze</h3>
                  <p className="text-steel-600 text-sm">
                    Farklı ölçü ve özelliklerde geniş ürün seçenekleri.
                  </p>
                </div>
                <div className="p-6 bg-steel-50 rounded-xl">
                  <h3 className="font-semibold text-steel-900 mb-2">Hızlı Teslimat</h3>
                  <p className="text-steel-600 text-sm">
                    Stoktan anında gönderim imkanı.
                  </p>
                </div>
                <div className="p-6 bg-steel-50 rounded-xl">
                  <h3 className="font-semibold text-steel-900 mb-2">Teknik Destek</h3>
                  <p className="text-steel-600 text-sm">
                    Profesyonel danışmanlık ve teknik destek hizmeti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Size Özel Çözümler
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Standart ürünler dışında özel tasarım ve üretim hizmeti sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/danismanlik"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-steel-50 transition-all"
              >
                <span>Danışmanlık Alın</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-700 hover:bg-primary-800 font-semibold rounded-lg transition-all"
              >
                <span>İletişime Geçin</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
