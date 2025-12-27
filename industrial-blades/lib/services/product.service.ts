/**
 * Ürün Servisi
 * Ürün işlemlerini yönetir
 * 
 * SOLID: Single Responsibility - Sadece ürün işlemleri
 */

import { Product, ProductCardView, ProductDetailView } from '../types';
import { 
  PRODUCTS,
  getAllProducts,
  getFeaturedProducts,
  getProductById,
  getProductBySlug,
  getProductsByCategory,
  getProductsBySubcategory,
  searchProducts,
  getInStockProducts,
} from '../data/products';
import { getCategoryById, getSubcategoryById } from '../data/categories';

// =============================================================================
// ÜRÜN SERVİSİ
// =============================================================================

class ProductService {
  /**
   * Tüm ürünleri döndür
   */
  getAll(): Product[] {
    return getAllProducts();
  }

  /**
   * Öne çıkan ürünleri döndür
   */
  getFeatured(): Product[] {
    return getFeaturedProducts();
  }

  /**
   * ID'ye göre ürün getir
   */
  getById(id: string): Product | undefined {
    return getProductById(id);
  }

  /**
   * Slug'a göre ürün getir
   */
  getBySlug(slug: string): Product | undefined {
    return getProductBySlug(slug);
  }

  /**
   * Kategoriye göre ürünleri getir
   */
  getByCategory(categoryId: string): Product[] {
    return getProductsByCategory(categoryId);
  }

  /**
   * Alt kategoriye göre ürünleri getir
   */
  getBySubcategory(subcategoryId: string): Product[] {
    return getProductsBySubcategory(subcategoryId);
  }

  /**
   * Ürün arama
   */
  search(query: string): Product[] {
    return searchProducts(query);
  }

  /**
   * Stokta olan ürünleri getir
   */
  getInStock(): Product[] {
    return getInStockProducts();
  }

  /**
   * Ürünü kart görünümüne dönüştür (listeleme için)
   */
  toCardView(product: Product): ProductCardView {
    const category = getCategoryById(product.categoryId);
    const subcategory = getSubcategoryById(product.subcategoryId);
    
    return {
      id: product.id,
      slug: product.slug,
      name: product.name,
      code: product.code,
      image: product.image,
      categoryName: category?.name || '',
      subcategoryName: subcategory?.name || '',
      hasVariants: product.variants.length > 1,
      variantCount: product.variants.length,
      isFeatured: product.isFeatured,
      inStock: product.variants.some(v => v.inStock),
    };
  }

  /**
   * Ürünü detay görünümüne dönüştür
   */
  toDetailView(product: Product): ProductDetailView | undefined {
    const category = getCategoryById(product.categoryId);
    const subcategory = getSubcategoryById(product.subcategoryId);
    
    if (!category || !subcategory) return undefined;

    // İlgili ürünleri getir (aynı alt kategoriden)
    const relatedProducts = getProductsBySubcategory(product.subcategoryId)
      .filter(p => p.id !== product.id)
      .slice(0, 4)
      .map(p => this.toCardView(p));

    return {
      ...product,
      category,
      subcategory,
      relatedProducts,
    };
  }

  /**
   * Öne çıkan ürünleri kart görünümü olarak getir
   */
  getFeaturedCards(): ProductCardView[] {
    return this.getFeatured().map(p => this.toCardView(p));
  }

  /**
   * Kategorideki ürünleri kart görünümü olarak getir
   */
  getCategoryCards(categoryId: string): ProductCardView[] {
    return this.getByCategory(categoryId).map(p => this.toCardView(p));
  }

  /**
   * Alt kategorideki ürünleri kart görünümü olarak getir
   */
  getSubcategoryCards(subcategoryId: string): ProductCardView[] {
    return this.getBySubcategory(subcategoryId).map(p => this.toCardView(p));
  }

  /**
   * Ürün breadcrumb'ını oluştur
   */
  getProductBreadcrumb(product: Product): Array<{ name: string; url: string }> {
    const category = getCategoryById(product.categoryId);
    const subcategory = getSubcategoryById(product.subcategoryId);
    
    const breadcrumb = [
      { name: 'Ana Sayfa', url: '/' },
      { name: 'Ürünler', url: '/urunler' },
    ];

    if (category) {
      breadcrumb.push({
        name: category.name,
        url: `/kategoriler/${category.slug}`,
      });
    }

    if (subcategory && category) {
      breadcrumb.push({
        name: subcategory.name,
        url: `/kategoriler/${category.slug}/${subcategory.slug}`,
      });
    }

    breadcrumb.push({
      name: product.name,
      url: `/urunler/${product.slug}`,
    });

    return breadcrumb;
  }

  /**
   * Filtreleme ve sıralama
   */
  filter(options: {
    categoryId?: string;
    subcategoryId?: string;
    inStock?: boolean;
    featured?: boolean;
    search?: string;
    sortBy?: 'name' | 'order';
    sortOrder?: 'asc' | 'desc';
  }): Product[] {
    let products = getAllProducts();

    if (options.categoryId) {
      products = products.filter(p => p.categoryId === options.categoryId);
    }

    if (options.subcategoryId) {
      products = products.filter(p => p.subcategoryId === options.subcategoryId);
    }

    if (options.inStock === true) {
      products = products.filter(p => p.variants.some(v => v.inStock));
    }

    if (options.featured === true) {
      products = products.filter(p => p.isFeatured);
    }

    if (options.search) {
      const searchTerm = options.search.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.code.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm)
      );
    }

    // Sıralama
    const sortBy = options.sortBy || 'order';
    const sortOrder = options.sortOrder || 'asc';
    
    products.sort((a, b) => {
      let comparison = 0;
      
      if (sortBy === 'name') {
        comparison = a.name.localeCompare(b.name, 'tr');
      } else {
        comparison = (a.order || 0) - (b.order || 0);
      }
      
      return sortOrder === 'desc' ? -comparison : comparison;
    });

    return products;
  }
}

// Singleton instance
export const productService = new ProductService();

// Default export
export default productService;


