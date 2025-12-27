/**
 * Blog/Bülten Data
 * Yeni yazılar buraya eklenecek
 */

import { BlogPost, DEFAULT_AUTHOR, BLOG_CATEGORIES } from '@/lib/types/blog'

// Örnek blog yazıları - İçerik daha sonra eklenecek
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'endüstriyel-bicak-secimi-rehberi',
    slug: 'endustriyel-bicak-secimi-rehberi',
    title: 'Endüstriyel Bıçak Seçimi: 5 Kritik Faktör',
    excerpt: 'Doğru endüstriyel bıçak seçimi, üretim verimliliğinizi doğrudan etkiler. Bu rehberde dikkat etmeniz gereken 5 kritik faktörü inceliyoruz.',
    content: '', // İçerik daha sonra eklenecek
    coverImage: '/images/blog/placeholder.jpg',
    author: DEFAULT_AUTHOR,
    category: BLOG_CATEGORIES[1], // Ürün Rehberleri
    tags: ['bıçak seçimi', 'endüstriyel kesici', 'rehber'],
    publishedAt: '2024-01-15',
    readingTime: 5,
    featured: true,
    seo: {
      focusKeyword: 'endüstriyel bıçak seçimi',
    },
  },
  {
    id: 'sheffield-celigi-neden-onemli',
    slug: 'sheffield-celigi-neden-onemli',
    title: 'Sheffield Çeliği Neden Dünya Standardı?',
    excerpt: 'İngiltere\'nin Sheffield şehrinden gelen çelik geleneği, endüstriyel bıçaklarda neden altın standart olarak kabul ediliyor?',
    content: '',
    coverImage: '/images/blog/placeholder.jpg',
    author: DEFAULT_AUTHOR,
    category: BLOG_CATEGORIES[2], // Teknik Yazılar
    tags: ['sheffield', 'çelik kalitesi', 'İngiltere'],
    publishedAt: '2024-01-10',
    readingTime: 7,
    featured: true,
    seo: {
      focusKeyword: 'sheffield çeliği',
    },
  },
  {
    id: 'tekstil-sektorunde-bicak-kullanimi',
    slug: 'tekstil-sektorunde-bicak-kullanimi',
    title: 'Tekstil Sektöründe Doğru Kesici Seçimi',
    excerpt: 'Tekstil üretiminde kumaş kesimi kritik bir aşamadır. Doğru bıçak seçimi ile fire oranlarını nasıl düşürebilirsiniz?',
    content: '',
    coverImage: '/images/blog/placeholder.jpg',
    author: DEFAULT_AUTHOR,
    category: BLOG_CATEGORIES[1], // Ürün Rehberleri
    tags: ['tekstil', 'kumaş kesimi', 'tekstil bıçağı'],
    publishedAt: '2024-01-05',
    readingTime: 6,
    featured: false,
    seo: {
      focusKeyword: 'tekstil bıçağı',
    },
  },
]

// Blog servisleri
export const blogService = {
  // Tüm yazıları getir
  getAllPosts(): BlogPost[] {
    return BLOG_POSTS.sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
  },

  // Öne çıkan yazıları getir
  getFeaturedPosts(limit = 3): BlogPost[] {
    return this.getAllPosts()
      .filter((post) => post.featured)
      .slice(0, limit)
  },

  // Son yazıları getir
  getRecentPosts(limit = 3): BlogPost[] {
    return this.getAllPosts().slice(0, limit)
  },

  // Slug ile yazı getir
  getPostBySlug(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((post) => post.slug === slug)
  },

  // Kategoriye göre yazıları getir
  getPostsByCategory(categorySlug: string): BlogPost[] {
    return this.getAllPosts().filter(
      (post) => post.category.slug === categorySlug
    )
  },

  // Etikete göre yazıları getir
  getPostsByTag(tag: string): BlogPost[] {
    return this.getAllPosts().filter((post) =>
      post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
    )
  },

  // Tüm etiketleri getir
  getAllTags(): string[] {
    const tags = new Set<string>()
    BLOG_POSTS.forEach((post) => post.tags.forEach((tag) => tags.add(tag)))
    return Array.from(tags).sort()
  },
}

